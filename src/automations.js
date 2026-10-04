// All built-in automations. Each definition exposes a `fields` schema that the
// dashboard renders as a configuration form, plus a factory that returns a
// runnable instance with start()/stop().

const sleep = ms => new Promise(r => setTimeout(r, ms))

async function waitFor (cond, timeout, step = 100) {
  const end = Date.now() + timeout
  while (Date.now() < end) { if (cond()) return true; await sleep(step) }
  return cond()
}

// ---------- text / item helpers ----------
function textOf (x) {
  if (x == null) return ''
  if (typeof x === 'string') {
    const s = x.trim()
    if ((s.startsWith('{') || s.startsWith('[')) && s.length > 1) {
      try { return textOf(JSON.parse(s)) } catch {}
    }
    return x.replace(/§./g, '')
  }
  if (typeof x === 'number') return String(x)
  if (Array.isArray(x)) return x.map(textOf).join('')
  if (typeof x === 'object') {
    if ('type' in x && 'value' in x && typeof x.type === 'string' && !('text' in x)) return textOf(x.value) // nbt node
    let out = ''
    if (x.text != null) out += textOf(x.text)
    if (x[''] != null) out += textOf(x[''])
    if (x.translate && !x.text) out += x.translate
    if (x.extra) out += textOf(x.extra)
    return out
  }
  return ''
}

function itemName (item) {
  if (!item) return ''
  const c = item.customName
  return c ? textOf(c) : (item.displayName || item.name)
}
function itemLore (item) {
  if (!item) return []
  const l = item.customLore
  if (!l) return []
  return (Array.isArray(l) ? l : [l]).map(textOf)
}

const MULT = { '': 1, K: 1e3, M: 1e6, B: 1e9, T: 1e12 }
function parseMoney (str) {
  const m = /\$\s*([\d.,]+)\s*([KMBT])?/i.exec(str)
  if (!m) return null
  return parseFloat(m[1].replace(/,/g, '')) * MULT[(m[2] || '').toUpperCase()]
}
// "1d 2h 30m 5s" -> seconds
function parseDuration (str) {
  if (!str) return null
  let total = 0; let found = false
  const re = /(\d+(?:\.\d+)?)\s*(d|h|m|s)/gi
  let m
  while ((m = re.exec(str))) {
    found = true
    total += parseFloat(m[1]) * { d: 86400, h: 3600, m: 60, s: 1 }[m[2].toLowerCase()]
  }
  return found ? total : null
}

// mineflayer's blockAtCursor() returns null whenever yaw or pitch is exactly 0
// (falsy check) and casts from 1.8 instead of eye height. Do it properly.
const { Vec3 } = require('vec3')
function cursorBlock (bot, maxDistance = 5) {
  const e = bot.entity
  if (!e || !e.position) return null
  const { yaw, pitch } = e
  const dir = new Vec3(-Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), -Math.cos(yaw) * Math.cos(pitch))
  return bot.world.raycast(e.position.offset(0, e.eyeHeight || 1.62, 0), dir.normalize(), maxDistance)
}

const isAxe = it => !!it && it.name.endsWith('_axe')

// slot: 'offhand' | 'any' | '1'..'9'
async function eatFood (bot, slot, log) {
  const foods = bot.registry.foodsByName
  let offhand = false
  if (slot === 'offhand') {
    const it = bot.inventory.slots[45]
    if (!it || !foods[it.name]) { log('No food in offhand'); return false }
    offhand = true
  } else if (slot === 'any') {
    const it = bot.inventory.items().find(i => foods[i.name])
    if (!it) { log('No food in inventory'); return false }
    await bot.equip(it, 'hand')
  } else {
    const n = Number(slot) - 1
    const it = bot.inventory.slots[36 + n]
    if (!it || !foods[it.name]) { log('No food in hotbar slot ' + slot); return false }
    bot.setQuickBarSlot(n)
    await sleep(150)
  }
  const before = bot.food
  log('Eating (hunger ' + before + ')')
  bot.activateItem(offhand)
  const ok = await waitFor(() => bot.food > before, 4000)
  bot.deactivateItem()
  log(ok ? 'Ate, hunger now ' + bot.food : 'Eating timed out')
  return ok
}

const LOOK = {
  north: [0, 0], south: [Math.PI, 0], west: [Math.PI / 2, 0], east: [-Math.PI / 2, 0],
  up: [null, Math.PI / 2], down: [null, -Math.PI / 2]
}

const slotOptions = [
  { value: 'offhand', label: 'Offhand' }, { value: 'any', label: 'Any (inventory)' },
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => ({ value: String(n), label: 'Hotbar ' + n }))
]

// Base class giving every automation logging, timers and clean shutdown.
class Base {
  constructor (conn, cfg) { this.conn = conn; this.cfg = cfg; this.running = false; this.timers = []; this.listeners = [] }
  get bot () { return this.conn.bot }
  log (msg) { this.conn.automationLog(this.constructor.id, msg) }
  every (ms, fn) { const t = setInterval(() => { Promise.resolve(fn()).catch(e => this.log('Error: ' + e.message)) }, ms); this.timers.push(t) }
  on (ev, fn) { this.bot.on(ev, fn); this.listeners.push([ev, fn]) }
  start () { this.running = true; this.log('Started') }
  stop () {
    this.running = false
    this.timers.forEach(clearInterval); this.timers = []
    if (this.bot) this.listeners.forEach(([e, f]) => this.bot.removeListener(e, f))
    this.listeners = []
    this.log('Stopped')
  }
}

// ======================= SELL AXE =======================
class SellAxe extends Base {
  static id = 'sellaxe'
  start () {
    super.start()
    this.paused = false
    this.buying = false
    this.lastPos = this.bot.entity.position.clone()
    this.lastMove = Date.now()
    this.loop()
    if (this.cfg.detectStuck) this.every(1000, () => this.checkStuck())
    if (this.cfg.autoEat) this.every(1000, () => this.checkEat())
  }

  stop () {
    super.stop()
    this.releaseClick()
  }

  async face () {
    const [yaw, pitch] = LOOK[this.cfg.lookDirection] || [null, null]
    if (yaw === null && pitch === null) return
    await this.bot.look(yaw ?? this.bot.entity.yaw, pitch ?? 0, true)
  }

  async ensureAxe () {
    const bot = this.bot
    if (isAxe(bot.heldItem)) return true
    const axes = bot.inventory.items().filter(isAxe)
    const pick = axes.find(i => /sell/i.test(itemName(i))) || axes[0]
    if (pick) {
      await bot.equip(pick, 'hand')
      this.log('Equipped ' + itemName(pick))
      return true
    }
    if (this.cfg.replenish && !this.buying && Date.now() - (this.lastBuy || 0) > 30000) {
      this.lastBuy = Date.now()
      this.buying = true
      try { await this.buyAxe() } catch (e) { this.log('Buy failed: ' + e.message) }
      this.buying = false
      if (bot.currentWindow) bot.closeWindow(bot.currentWindow)
      return isAxe(bot.heldItem) || (await this.ensureAxeNoBuy())
    }
    return false
  }

  // Emulates a vanilla client holding left click on a block: START_DIGGING,
  // arm swings every 250ms, FINISH once the break time elapses, then repeat.
  // Unlike bot.dig() this never edits the local world, so protected blocks
  // (e.g. chests the sell axe is used on) stay targetable forever.
  async holdOn (block) {
    const bot = this.bot
    const pos = block.position
    const face = block.face ?? 1
    const t = bot.digTime(block)
    const dur = Number.isFinite(t) ? Math.min(Math.max(t, 300), 6000) : 1000
    bot._client.write('block_dig', { status: 0, location: pos, face, sequence: 0 })
    this.digging = { pos, face }
    bot.swingArm('right')
    const end = Date.now() + dur
    while (Date.now() < end) {
      await sleep(250)
      if (!this.running || this.paused || this.buying || this.bot !== bot || !bot.entity) { this.releaseClick(); return }
      const cur = cursorBlock(bot, 4.5)
      if (!cur || !cur.position.equals(pos)) { this.releaseClick(); return }
      if (!isAxe(bot.heldItem)) { this.releaseClick(); return }
      bot.swingArm('right')
    }
    if (Number.isFinite(t)) bot._client.write('block_dig', { status: 2, location: pos, face, sequence: 0 })
    this.digging = null
    this.clicks = (this.clicks || 0) + 1
    if (this.clicks % 100 === 0) this.log(`Still holding left click (${this.clicks} cycles)`)
    await sleep(50)
  }

  releaseClick () {
    const bot = this.bot
    if (!this.digging || !bot || !bot._client) { this.digging = null; return }
    try { bot._client.write('block_dig', { status: 1, location: this.digging.pos, face: this.digging.face, sequence: 0 }) } catch {}
    this.digging = null
  }

  async ensureAxeNoBuy () {
    const it = this.bot.inventory.items().find(isAxe)
    if (!it) return false
    await this.bot.equip(it, 'hand'); return true
  }

  async loop () {
    let warned = false
    while (this.running) {
      const bot = this.bot
      if (!bot || !bot.entity) { await sleep(500); continue }
      if (this.paused || this.buying) { await sleep(200); continue }
      try {
        const has = await this.ensureAxe()
        if (!has) {
          if (!warned) { this.log('No axe available, waiting...'); warned = true }
          await sleep(3000); continue
        }
        warned = false
        await this.face()
        const block = cursorBlock(bot, 4.5)
        if (block && block.name !== 'air' && block.boundingBox !== 'empty') {
          await this.holdOn(block)
        } else {
          const ent = bot.entityAtCursor ? bot.entityAtCursor(3) : null
          const hittable = ent && ent !== bot.entity && ent.isValid !== false && ['player', 'mob', 'hostile', 'animal', 'passive', 'water_creature', 'ambient'].includes(ent.type)
          if (hittable) bot.attack(ent); else bot.swingArm('right')
          await sleep(250)
        }
      } catch (e) {
        this.log('Loop error: ' + e.message)
        await sleep(1000)
      }
    }
  }

  async checkStuck () {
    const bot = this.bot
    if (!bot.entity || this.buying || this.paused) return
    const p = bot.entity.position
    if (p.distanceTo(this.lastPos) > 0.15) { this.lastPos = p.clone(); this.lastMove = Date.now(); return }
    if (Date.now() - this.lastMove < (Number(this.cfg.stuckSeconds) || 5) * 1000) return
    this.lastMove = Date.now()
    const act = this.cfg.whenStuck
    this.log('Bot stuck, running recovery: ' + act)
    if (act === 'reconnect') { this.conn.reconnect('stuck recovery'); return }
    if (act === 'disconnect') { this.conn.disconnect('stuck recovery'); return }
    this.paused = true
    this.releaseClick()
    if (act === 'jump') {
      bot.setControlState('jump', true); await sleep(400); bot.setControlState('jump', false)
    } else {
      const dirs = ['forward', 'back', 'left', 'right']
      const d = dirs[Math.floor(Math.random() * 4)]
      bot.setControlState(d, true); bot.setControlState('jump', true)
      await sleep(350)
      bot.setControlState(d, false); bot.setControlState('jump', false)
      await sleep(200)
      const back = { forward: 'back', back: 'forward', left: 'right', right: 'left' }[d]
      bot.setControlState(back, true); await sleep(300); bot.setControlState(back, false)
    }
    this.lastPos = bot.entity.position.clone()
    this.lastMove = Date.now()
    this.paused = false
  }

  async checkEat () {
    const bot = this.bot
    if (this.paused || this.buying || !bot.entity || bot.food > Number(this.cfg.hunger)) return
    if (Date.now() < (this.eatRetryAt || 0)) return
    this.paused = true
    try {
      this.releaseClick()
      const ok = await eatFood(bot, this.cfg.foodSlot, m => this.log(m))
      if (!ok) this.eatRetryAt = Date.now() + 15000
    } finally { this.paused = false; this.lastMove = Date.now() }
  }

  async buyAxe () {
    const bot = this.bot
    const c = this.cfg
    const minP = Number(c.minPrice) * 1e6
    const maxP = Number(c.maxPrice) * 1e6
    const minD = c.minDuration ? parseDuration(c.minDuration) : null
    const maxD = c.maxDuration ? parseDuration(c.maxDuration) : null
    this.log(`Held axe broke - searching AH (${c.minPrice}M-${c.maxPrice}M)`)
    this.releaseClick()

    const opened = new Promise((resolve, reject) => {
      const t = setTimeout(() => { bot.removeListener('windowOpen', h); reject(new Error('AH did not open')) }, 8000)
      const h = w => { clearTimeout(t); resolve(w) }
      bot.once('windowOpen', h)
    })
    bot.chat(c.searchCommand || '/ah sell axe')
    await opened
    await sleep(800)

    const top = () => { const w = bot.currentWindow; return w ? w.slots.slice(0, w.inventoryStart) : [] }
    const click = async slot => {
      await Promise.race([bot.clickWindow(slot, 0, 0).catch(() => {}), sleep(1500)])
    }

    if (c.sortHighest) {
      for (let i = 0; i < 2; i++) {
        const hop = top().findIndex(s => s && s.name === 'hopper')
        if (hop < 0) { this.log('Sort hopper not found'); break }
        await click(hop); await sleep(900)
      }
      this.log('Sorted highest to lowest')
    }

    const pages = Math.max(1, Number(c.pages) || 1)
    for (let page = 1; page <= pages; page++) {
      if (!bot.currentWindow) throw new Error('AH window closed')
      const slots = top()
      for (let i = 0; i < slots.length; i++) {
        const it = slots[i]
        if (!isAxe(it)) continue
        const lore = itemLore(it)
        const priceLine = lore.find(l => /price|\$/i.test(l)) || ''
        const price = parseMoney(priceLine)
        if (price == null || price < minP || price > maxP) continue
        if (minD != null || maxD != null) {
          const dl = lore.find(l => /self.?destruct|destruct|expire|remaining/i.test(l))
          const d = parseDuration(dl)
          if (d == null) continue
          if (minD != null && d < minD) continue
          if (maxD != null && d > maxD) continue
        }
        this.log(`Buying ${itemName(it)} for $${(price / 1e6).toFixed(2)}M (page ${page}, slot ${i})`)
        await click(i)
        await sleep(1000)
        // Confirm screen: green/lime pane or anything named confirm
        const conf = top().findIndex(s => s && (/confirm|buy|purchase/i.test(itemName(s)) || /lime_stained_glass|green_stained_glass/.test(s.name)))
        if (conf >= 0) { await click(conf); await sleep(1200) }
        if (bot.currentWindow) bot.closeWindow(bot.currentWindow)
        await sleep(500)
        if (await this.ensureAxeNoBuy()) { this.log('Axe purchased and equipped'); return true }
        this.log('Purchase did not deliver an axe')
        return false
      }
      if (page === pages) break
      const next = top().findIndex(s => s && (s.name === 'arrow' || /next/i.test(itemName(s))) && !/prev|back/i.test(itemName(s)))
      if (next < 0) { this.log('No next page'); break }
      await click(next); await sleep(1000)
    }
    this.log('No matching axe found')
    if (bot.currentWindow) bot.closeWindow(bot.currentWindow)
    return false
  }
}

// ======================= AUTO SELL =======================
class AutoSell extends Base {
  static id = 'autosell'
  start () {
    super.start()
    const run = async () => {
      if (this.busy) return; this.busy = true
      try {
        const names = (this.cfg.items || '').split(',').map(s => s.trim()).filter(Boolean)
        const has = this.bot.inventory.items().some(i => !names.length || names.includes(i.name))
        if (!has) { this.log('Nothing to sell'); return }
        this.bot.chat(this.cfg.command || '/sell')
        const w = await waitFor(() => this.bot.currentWindow, 5000)
        if (!w) { this.log('Sell GUI did not open'); return }
        await sleep(500)
        const win = this.bot.currentWindow
        for (const it of win.slots.slice(win.inventoryStart)) {
          if (!it || isAxe(it)) continue
          if (names.length && !names.includes(it.name)) continue
          await Promise.race([this.bot.clickWindow(it.slot, 0, 1).catch(() => {}), sleep(800)])
          await sleep(120)
        }
        this.bot.closeWindow(win)
        this.log('Sold items')
      } finally { this.busy = false }
    }
    run(); this.every((Number(this.cfg.interval) || 60) * 1000, run)
  }
}

// ======================= SPAWNER SELL / DROP =======================
async function openSpawner (bot, log) {
  const sp = bot.findBlock({ matching: b => b.name === 'spawner', maxDistance: 5 })
  if (!sp) { log('No spawner within 5 blocks'); return null }
  await bot.lookAt(sp.position.offset(0.5, 0.5, 0.5), true)
  const p = new Promise(r => { const t = setTimeout(() => r(null), 5000); bot.once('windowOpen', w => { clearTimeout(t); r(w) }) })
  await bot.activateBlock(sp).catch(() => {})
  const w = await p
  if (!w) log('Spawner GUI did not open')
  return w
}

class SpawnerSell extends Base {
  static id = 'spawnersell'
  start () {
    super.start()
    const run = async () => {
      const w = await openSpawner(this.bot, m => this.log(m)); if (!w) return
      await sleep(600)
      const slot = w.slots.slice(0, w.inventoryStart).findIndex(s => s && (/sell/i.test(itemName(s)) || s.name === 'gold_ingot'))
      if (slot >= 0) { await Promise.race([this.bot.clickWindow(slot, 0, 0).catch(() => {}), sleep(1000)]); this.log('Sold spawner drops') } else this.log('Sell button not found')
      await sleep(500); if (this.bot.currentWindow) this.bot.closeWindow(this.bot.currentWindow)
    }
    run(); this.every((Number(this.cfg.interval) || 300) * 1000, run)
  }
}

class SpawnerDrop extends Base {
  static id = 'spawnerdrop'
  start () {
    super.start()
    const run = async () => {
      const w = await openSpawner(this.bot, m => this.log(m)); if (!w) return
      await sleep(600)
      const s = Number(this.cfg.slot) || 45
      await Promise.race([this.bot.clickWindow(s, 0, 0).catch(() => {}), sleep(1000)])
      await sleep(400)
      if (this.bot.currentWindow) this.bot.closeWindow(this.bot.currentWindow)
      for (const it of this.bot.inventory.items()) {
        if (isAxe(it) || this.bot.registry.foodsByName[it.name]) continue
        await this.bot.tossStack(it).catch(() => {})
      }
      this.log('Emptied spawner and dropped loot')
    }
    run(); this.every((Number(this.cfg.interval) || 300) * 1000, run)
  }
}

// ======================= STAFF CHECK =======================
class StaffCheck extends Base {
  static id = 'staffcheck'
  start () {
    super.start()
    this.seen = new Set()
    this.every(5000, async () => {
      const names = (this.cfg.staff || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean)
      const found = Object.values(this.bot.players).filter(p => {
        const disp = String(p.displayName?.toString?.() ?? '').toLowerCase()
        return names.includes(p.username.toLowerCase()) || /\b(admin|mod|helper|staff|owner)\b/.test(disp)
      }).map(p => p.username)
      for (const n of found) {
        if (this.seen.has(n)) continue
        this.seen.add(n)
        this.log('Staff online: ' + n)
        if (this.cfg.webhook) {
          await fetch(this.cfg.webhook, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ content: `Staff **${n}** is online (bot ${this.bot.username})` }) }).catch(e => this.log('Webhook failed: ' + e.message))
        }
        if (this.cfg.disconnect) this.conn.disconnect('staff detected')
      }
      for (const n of [...this.seen]) if (!found.includes(n)) this.seen.delete(n)
    })
  }
}

// ======================= AUTO DISCONNECT NEAR PLAYERS =======================
class NearPlayers extends Base {
  static id = 'nearplayers'
  start () {
    super.start()
    this.every(1000, () => {
      const trusted = (this.cfg.trusted || '').split(',').map(s => s.trim().toLowerCase())
      const r = Number(this.cfg.radius) || 10
      const p = Object.values(this.bot.entities).find(e => e.type === 'player' && e !== this.bot.entity &&
        !trusted.includes((e.username || '').toLowerCase()) && e.position.distanceTo(this.bot.entity.position) <= r)
      if (p) { this.log(`${p.username} came within ${r} blocks`); this.conn.disconnect('untrusted player nearby: ' + p.username, true) }
    })
  }
}

// ======================= LEAVE AREA ALERT =======================
class LeaveArea extends Base {
  static id = 'leavearea'
  start () {
    super.start()
    this.origin = this.bot.entity.position.clone()
    this.log(`Area center ${this.origin.floored()}`)
    this.every(1000, () => {
      const d = this.bot.entity.position.distanceTo(this.origin)
      if (d <= (Number(this.cfg.radius) || 5)) return
      this.log(`Left area (${d.toFixed(1)} blocks)`)
      if (this.cfg.action === 'command') { this.bot.chat(this.cfg.command || '/home'); this.origin = this.bot.entity.position.clone() } else this.conn.disconnect('left area', true)
    })
  }
}

// ======================= AUTO EAT =======================
class AutoEat extends Base {
  static id = 'autoeat'
  start () {
    super.start()
    this.every(1000, async () => {
      if (this.busy || this.bot.food > Number(this.cfg.hunger) || Date.now() < (this.retryAt || 0)) return
      this.busy = true
      try { if (!(await eatFood(this.bot, this.cfg.foodSlot, m => this.log(m)))) this.retryAt = Date.now() + 15000 } finally { this.busy = false }
    })
  }
}

// ======================= CUSTOM GUI COMMAND =======================
class CustomGui extends Base {
  static id = 'customgui'
  start () {
    super.start()
    const run = async () => {
      const bot = this.bot
      const p = new Promise(r => { const t = setTimeout(() => r(null), 5000); bot.once('windowOpen', w => { clearTimeout(t); r(w) }) })
      if (this.cfg.openWith === 'command') bot.chat(this.cfg.command || '/menu')
      else if (this.cfg.openWith === 'block') { const b = cursorBlock(bot, 4.5); if (b) await bot.activateBlock(b).catch(() => {}) } else { bot.setQuickBarSlot((Number(this.cfg.hotbar) || 1) - 1); bot.activateItem() }
      const w = await p
      if (!w) { this.log('GUI did not open'); return }
      await sleep(500)
      for (const s of String(this.cfg.clicks || '').split(',').map(x => x.trim()).filter(Boolean)) {
        await Promise.race([bot.clickWindow(Number(s), 0, 0).catch(() => {}), sleep(1000)]); await sleep(400)
      }
      if (bot.currentWindow) bot.closeWindow(bot.currentWindow)
      this.log('GUI sequence done')
    }
    if (this.cfg.trigger === 'chat') {
      this.on('messagestr', m => { if (this.cfg.chatMatch && m.includes(this.cfg.chatMatch)) run().catch(e => this.log(e.message)) })
    } else { run(); this.every((Number(this.cfg.interval) || 60) * 1000, run) }
  }
}

const dirOptions = ['current', 'north', 'south', 'east', 'west', 'up', 'down'].map(v => ({ value: v, label: v[0].toUpperCase() + v.slice(1) }))

const DEFS = [
  {
    cls: SellAxe, name: 'Sell Axe', featured: true,
    short: 'Holds left click with your sell axe and keeps the loop running.',
    desc: 'Holds left click in your chosen look direction and keeps the Sell Axe loop running. Optional stuck recovery, auto-eat, and auto-replenish keep it going on donutsmp.net.',
    fields: [
      { key: 'lookDirection', label: 'Look Direction', desc: 'Direction to face while holding left click.', type: 'select', options: dirOptions, default: 'current' },
      { key: 'detectStuck', label: 'Detect Bot Stuck', desc: 'Recovers when the bot stays in one spot without moving for too long.', type: 'toggle', default: false },
      { key: 'whenStuck', label: 'When Stuck', desc: 'Choose what happens once the bot stops moving.', type: 'select', showIf: 'detectStuck', default: 'nudge', options: [{ value: 'nudge', label: 'Nudge movement' }, { value: 'jump', label: 'Jump' }, { value: 'reconnect', label: 'Reconnect' }, { value: 'disconnect', label: 'Disconnect' }] },
      { key: 'stuckSeconds', label: 'Not Moving For (seconds)', desc: 'How long the bot must stay still before recovery runs.', type: 'number', showIf: 'detectStuck', default: 5 },
      { key: 'autoEat', label: 'Auto Eat', desc: 'Pauses holding to eat from your configured food slot, then resumes.', type: 'toggle', default: false },
      { key: 'hunger', label: 'Eat when hunger at or below', desc: 'Hunger value that triggers automatic eating.', type: 'number', showIf: 'autoEat', default: 14 },
      { key: 'foodSlot', label: 'Food slot', desc: 'Slot used when the automation needs to eat food.', type: 'select', showIf: 'autoEat', options: slotOptions, default: 'offhand' },
      { key: 'replenish', label: 'Automatically Replenish Axe', desc: 'Equips a spare axe or buys one from /ah when your held axe breaks.', type: 'toggle', default: false },
      { key: 'minPrice', label: 'Minimum Purchase Price', desc: 'Lowest auction price allowed, in millions.', type: 'number', showIf: 'replenish', default: 40 },
      { key: 'maxPrice', label: 'Maximum Purchase Price', desc: 'Highest auction price allowed, in millions.', type: 'number', showIf: 'replenish', default: 50 },
      { key: 'minDuration', label: 'Minimum Duration', desc: 'Min Self Destruct remaining (e.g. 23h+). Blank to ignore.', type: 'text', placeholder: 'e.g. 23h+', showIf: 'replenish', default: '' },
      { key: 'maxDuration', label: 'Maximum Duration', desc: 'Max Self Destruct remaining (e.g. 30h). Blank to ignore.', type: 'text', placeholder: 'e.g. 30h', showIf: 'replenish', default: '' },
      { key: 'searchCommand', label: 'Auction Search Command', desc: 'Command used to open matching axe listings in auction house.', type: 'text', showIf: 'replenish', default: '/ah sell axe' },
      { key: 'pages', label: 'Pages to Search', desc: 'How many auction pages to scan for a matching axe.', type: 'number', showIf: 'replenish', default: 5 },
      { key: 'sortHighest', label: 'Sort Highest To Lowest', desc: 'Click the AH hopper twice to sort by highest price before buying.', type: 'toggle', showIf: 'replenish', default: false }
    ]
  },
  {
    cls: AutoSell, name: 'DonutSMP Auto Sell', featured: true, short: 'Sells items from your inventory on a timer.',
    fields: [
      { key: 'command', label: 'Sell Command', desc: 'Command that opens the sell GUI.', type: 'text', default: '/sell' },
      { key: 'items', label: 'Items', desc: 'Comma separated item ids to sell (blank = everything except axes).', type: 'text', default: '' },
      { key: 'interval', label: 'Interval (seconds)', desc: 'Time between sells.', type: 'number', default: 60 }
    ]
  },
  {
    cls: SpawnerSell, name: 'DonutSMP Spawner Sell', featured: true, short: 'Opens your spawner and sells stored drops on a timer.',
    fields: [{ key: 'interval', label: 'Interval (seconds)', desc: 'Time between sells.', type: 'number', default: 300 }]
  },
  {
    cls: SpawnerDrop, name: 'DonutSMP Spawner Drop', featured: true, short: 'Empties spawner slot 45, then drops remaining loot on a timer.',
    fields: [
      { key: 'slot', label: 'Spawner Slot', desc: 'GUI slot that empties the spawner.', type: 'number', default: 45 },
      { key: 'interval', label: 'Interval (seconds)', desc: 'Time between runs.', type: 'number', default: 300 }
    ]
  },
  {
    cls: StaffCheck, name: 'DonutSMP Staff Check', featured: true, short: 'Watches the tab list for staff and notifies your Discord webhook.',
    fields: [
      { key: 'staff', label: 'Staff Names', desc: 'Comma separated usernames to watch (ranks are detected automatically).', type: 'text', default: '' },
      { key: 'webhook', label: 'Discord Webhook', desc: 'Webhook URL to notify.', type: 'text', default: '' },
      { key: 'disconnect', label: 'Disconnect On Staff', desc: 'Disconnect when staff is detected.', type: 'toggle', default: false }
    ]
  },
  {
    cls: NearPlayers, name: 'Auto Disconnect Near Players', short: "Disconnects when someone you don't trust gets too close.",
    fields: [
      { key: 'radius', label: 'Radius (blocks)', desc: 'Distance that triggers a disconnect.', type: 'number', default: 10 },
      { key: 'trusted', label: 'Trusted Players', desc: 'Comma separated usernames to ignore.', type: 'text', default: '' }
    ]
  },
  {
    cls: LeaveArea, name: 'Leave Area Alert', short: 'Disconnects or runs a command if you leave a set area.',
    fields: [
      { key: 'radius', label: 'Radius (blocks)', desc: 'Distance from start position allowed.', type: 'number', default: 5 },
      { key: 'action', label: 'Action', desc: 'What to do when leaving the area.', type: 'select', default: 'disconnect', options: [{ value: 'disconnect', label: 'Disconnect' }, { value: 'command', label: 'Run command' }] },
      { key: 'command', label: 'Command', desc: 'Command to run.', type: 'text', showIf: 'action=command', default: '/home' }
    ]
  },
  {
    cls: AutoEat, name: 'Auto Eat', short: 'Eats food from your inventory or offhand when hunger gets low.',
    fields: [
      { key: 'hunger', label: 'Eat when hunger at or below', desc: 'Hunger value that triggers eating.', type: 'number', default: 14 },
      { key: 'foodSlot', label: 'Food slot', desc: 'Where to take food from.', type: 'select', options: slotOptions, default: 'any' }
    ]
  },
  {
    cls: CustomGui, name: 'Custom GUI Command', short: 'Opens a menu via command, block right-click, or hotbar right-click on a timer or server event.',
    fields: [
      { key: 'openWith', label: 'Open With', desc: 'How to open the GUI.', type: 'select', default: 'command', options: [{ value: 'command', label: 'Command' }, { value: 'block', label: 'Right-click block' }, { value: 'hotbar', label: 'Right-click hotbar item' }] },
      { key: 'command', label: 'Command', desc: 'Command that opens the GUI.', type: 'text', showIf: 'openWith=command', default: '/menu' },
      { key: 'hotbar', label: 'Hotbar Slot', desc: 'Hotbar slot (1-9) to right-click.', type: 'number', showIf: 'openWith=hotbar', default: 1 },
      { key: 'clicks', label: 'Slots To Click', desc: 'Comma separated GUI slot numbers, clicked in order.', type: 'text', default: '' },
      { key: 'trigger', label: 'Trigger', desc: 'Run on a timer or when a chat message appears.', type: 'select', default: 'timer', options: [{ value: 'timer', label: 'Timer' }, { value: 'chat', label: 'Chat message' }] },
      { key: 'interval', label: 'Interval (seconds)', desc: 'Time between runs.', type: 'number', showIf: 'trigger=timer', default: 60 },
      { key: 'chatMatch', label: 'Chat Contains', desc: 'Run when a chat line contains this text.', type: 'text', showIf: 'trigger=chat', default: '' }
    ]
  }
]

const BY_ID = Object.fromEntries(DEFS.map(d => [d.cls.id, d]))
function defaults (id) { return Object.fromEntries(BY_ID[id].fields.map(f => [f.key, f.default])) }
function publicDefs () { return DEFS.map(d => ({ id: d.cls.id, name: d.name, short: d.short, desc: d.desc || d.short, featured: !!d.featured, fields: d.fields })) }

module.exports = { BY_ID, defaults, publicDefs, textOf, itemName, itemLore, parseMoney, parseDuration, sleep }
