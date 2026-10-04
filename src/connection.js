// One Connection == one account on one server, backed by a mineflayer bot.
const mineflayer = require('mineflayer')
const path = require('path')
const A = require('./automations')

class Connection {
  constructor (cfg, hub) {
    this.id = cfg.id
    this.cfg = cfg // { id, username, auth, host, port, version, autoReconnect, reconnectDelay, automations:{id:{enabled,config}}, macros:{id:bool} }
    this.hub = hub
    this.bot = null
    this.status = 'offline' // offline | connecting | online
    this.chat = []
    this.activity = []
    this.autoLog = []
    this.macroLog = []
    this.running = {}
    this.wantOnline = false
    this.connectedAt = null
    this.xpStart = null
    this.sneak = false
  }

  push (arr, entry, max = 300) { arr.push(entry); if (arr.length > max) arr.shift() }
  emit (ev, data) { this.hub.io.emit(ev, { id: this.id, ...data }) }

  sys (text, kind = 'system') {
    const e = { t: Date.now(), kind, text }
    this.push(this.chat, e); this.emit('chat', e)
    this.activity_(text)
  }
  activity_ (text) { const e = { t: Date.now(), text }; this.push(this.activity, e); this.emit('activity', e) }
  automationLog (aid, text) {
    const e = { t: Date.now(), automation: A.BY_ID[aid]?.name || aid, text }
    this.push(this.autoLog, e); this.emit('autolog', e)
  }
  macroLog_ (name, text) { const e = { t: Date.now(), macro: name, text }; this.push(this.macroLog, e); this.emit('macrolog', e) }

  connect () {
    if (this.bot) return
    this.wantOnline = true
    clearTimeout(this.reconnectTimer)
    const c = this.cfg
    this.status = 'connecting'; this.hub.broadcast()
    this.sys(`Connecting to ${c.host}:${c.port}...`)
    let bot
    try {
      bot = mineflayer.createBot({
        host: c.host,
        port: Number(c.port) || 25565,
        username: c.username,
        auth: c.auth === 'offline' ? 'offline' : 'microsoft',
        version: c.version && c.version !== 'auto' ? c.version : false,
        profilesFolder: path.join(__dirname, '..', 'data', 'auth'),
        hideErrors: true,
        checkTimeoutInterval: 60000,
        onMsaCode: d => {
          this.sys(`Microsoft login: open ${d.verification_uri} and enter code ${d.user_code}`)
          this.emit('msa', { uri: d.verification_uri, code: d.user_code })
        }
      })
    } catch (e) { this.sys('Failed: ' + e.message); this.status = 'offline'; this.hub.broadcast(); return }
    this.bot = bot

    bot.once('spawn', () => {
      this.status = 'online'
      this.connectedAt = Date.now()
      this.xpStart = { points: bot.experience.points, t: Date.now() }
      this.sys(`Connected to ${c.host}:${c.port}`)
      this.hub.broadcast()
      setTimeout(() => this.startEnabled(), 1500)
      this.runMacros('spawn')
    })
    bot.on('message', (msg, position) => {
      if (position === 'game_info') return
      const e = { t: Date.now(), kind: 'chat', text: msg.toString(), html: msg.toHTML ? safeHtml(msg) : null }
      this.push(this.chat, e); this.emit('chat', e)
    })
    bot.on('kicked', r => this.sys('Kicked: ' + A.textOf(r), 'error'))
    bot.on('error', e => this.sys('Error: ' + e.message, 'error'))
    bot.on('death', () => this.activity_('Bot died'))
    bot.on('end', reason => this.onEnd(reason))
  }

  onEnd (reason) {
    this.stopAll(false)
    this.bot = null
    this.status = 'offline'
    this.connectedAt = null
    this.sys('Disconnected' + (reason ? ': ' + reason : ''))
    this.hub.broadcast()
    if (this.wantOnline && this.cfg.autoReconnect) {
      const d = Math.max(1, Number(this.cfg.reconnectDelay) || 5)
      this.sys(`Reconnecting in ${d}s...`)
      this.reconnectTimer = setTimeout(() => { if (this.wantOnline) this.connect() }, d * 1000)
    }
  }

  disconnect (why, keepOff = true) {
    if (keepOff) this.wantOnline = false
    clearTimeout(this.reconnectTimer)
    if (why) this.activity_('Disconnect: ' + why)
    if (this.bot) this.bot.quit(why || 'disconnect')
    else { this.status = 'offline'; this.hub.broadcast() }
  }

  reconnect (why) {
    this.activity_('Reconnect: ' + why)
    this.wantOnline = true
    if (this.bot) this.bot.quit(why)
  }

  // ---------- automations ----------
  autoCfg (aid) {
    const saved = this.cfg.automations?.[aid] || {}
    return { enabled: !!saved.enabled, config: { ...A.defaults(aid), ...(saved.config || {}) } }
  }
  startEnabled () { for (const aid of Object.keys(A.BY_ID)) if (this.autoCfg(aid).enabled) this.startAuto(aid) }
  startAuto (aid) {
    if (this.status !== 'online' || this.running[aid]) return
    const inst = new A.BY_ID[aid].cls(this, this.autoCfg(aid).config)
    this.running[aid] = inst
    try { inst.start() } catch (e) { this.automationLog(aid, 'Failed to start: ' + e.message); delete this.running[aid] }
    this.hub.broadcast()
  }
  stopAuto (aid) {
    const inst = this.running[aid]; if (!inst) return
    delete this.running[aid]
    try { inst.stop() } catch {}
    this.hub.broadcast()
  }
  stopAll (bc = true) { for (const aid of Object.keys(this.running)) { try { this.running[aid].stop() } catch {} } this.running = {}; if (bc) this.hub.broadcast() }
  restartAuto (aid) { if (this.running[aid]) { this.stopAuto(aid); this.startAuto(aid) } }

  // ---------- macros ----------
  async runMacro (m) {
    if (!this.bot || this.status !== 'online') return
    this.macroLog_(m.name, 'Running')
    for (const raw of (m.actions || '').split('\n')) {
      const line = raw.trim(); if (!line) continue
      const w = /^wait\s+(\d+)/i.exec(line)
      if (w) { await A.sleep(Number(w[1])); continue }
      if (!this.bot) return
      this.bot.chat(line)
    }
    this.macroLog_(m.name, 'Done')
  }
  runMacros (trigger) {
    for (const m of this.hub.macros()) if (this.cfg.macros?.[m.id] && m.trigger === trigger) this.runMacro(m).catch(() => {})
  }
  tickMacros () {
    const now = Date.now()
    this.macroLast = this.macroLast || {}
    for (const m of this.hub.macros()) {
      if (!this.cfg.macros?.[m.id] || m.trigger !== 'interval') continue
      const iv = (Number(m.interval) || 60) * 1000
      if (now - (this.macroLast[m.id] || 0) >= iv) { this.macroLast[m.id] = now; this.runMacro(m).catch(() => {}) }
    }
  }

  // ---------- state for UI ----------
  summary () {
    return {
      id: this.id, cfg: this.cfg, status: this.status, connectedAt: this.connectedAt,
      running: Object.keys(this.running),
      automations: Object.fromEntries(Object.keys(A.BY_ID).map(a => [a, this.autoCfg(a)]))
    }
  }

  live () {
    const bot = this.bot
    if (!bot || this.status !== 'online' || !bot.entity) return null
    const slot = it => it ? { name: it.name, display: A.itemName(it), count: it.count, lore: A.itemLore(it) } : null
    const below = bot.blockAt(bot.entity.position.offset(0, -0.5, 0))
    const xpGain = bot.experience.points - (this.xpStart?.points || 0)
    const hrs = (Date.now() - (this.xpStart?.t || Date.now())) / 3600000
    const yaw = bot.entity.yaw
    const dirs = ['North', 'West', 'South', 'East']
    const facing = dirs[Math.round((((yaw % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) / (Math.PI / 2)) % 4]
    const win = bot.currentWindow
    return {
      username: bot.username,
      health: Math.round(bot.health), food: bot.food,
      level: bot.experience.level, progress: bot.experience.progress,
      xp: { session: xpGain, perHour: hrs > 0.01 ? Math.round(xpGain / hrs) : null, perDay: hrs > 0.01 ? Math.round(xpGain / hrs * 24) : 0 },
      block: below ? below.displayName : '-',
      pos: bot.entity.position.floored(),
      facing,
      ping: bot.player?.ping ?? null,
      quickBar: bot.quickBarSlot,
      slots: bot.inventory.slots.map(slot),
      window: win ? { title: A.textOf(win.title), size: win.inventoryStart, slots: win.slots.slice(0, win.inventoryStart).map(slot) } : null,
      players: Object.values(bot.players).map(p => ({ name: p.username, ping: p.ping, display: p.displayName?.toString?.() || p.username })),
      sneak: this.sneak,
      scoreboard: bot.scoreboard?.sidebar ? { title: A.textOf(bot.scoreboard.sidebar.title), items: bot.scoreboard.sidebar.items.map(i => A.textOf(i.displayName?.toString?.() ?? i.name)) } : null
    }
  }
}

function safeHtml (msg) { try { return msg.toHTML() } catch { return null } }

module.exports = Connection
