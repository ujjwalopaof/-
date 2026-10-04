require('dotenv').config()
const express = require('express')
const http = require('http')
const path = require('path')
const crypto = require('crypto')
const { Server } = require('socket.io')
const store = require('./src/store')
const Connection = require('./src/connection')
const A = require('./src/automations')

const app = express()
const server = http.createServer(app)
const io = new Server(server)
app.use(express.static(path.join(__dirname, 'public')))

const conns = new Map()
const hub = {
  io,
  macros: () => store.get('macros', []),
  commands: () => store.get('commands', ['/bal', '/home', '/spawn', '/sell']),
  broadcast () { io.emit('state', snapshot()) }
}

function snapshot () {
  return {
    connections: [...conns.values()].map(c => c.summary()),
    macros: hub.macros(),
    commands: hub.commands(),
    defs: A.publicDefs(),
    storage: store.backend()
  }
}

function saveConns () { return store.set('connections', [...conns.values()].map(c => c.cfg)) }

const PASSWORD = process.env.DASHBOARD_PASSWORD
io.use((socket, next) => {
  if (!PASSWORD || socket.handshake.auth?.password === PASSWORD) return next()
  next(new Error('unauthorized'))
})

io.on('connection', socket => {
  socket.emit('state', snapshot())
  const C = id => { const c = conns.get(id); if (!c) throw new Error('Unknown connection'); return c }
  const handle = (ev, fn) => socket.on(ev, async (data, ack) => {
    try { const r = await fn(data || {}); ack && ack({ ok: true, ...(r || {}) }) } catch (e) { ack && ack({ ok: false, error: e.message }) }
  })

  handle('addConnection', async d => {
    if (!d.username || !d.host) throw new Error('Username and server are required')
    const cfg = {
      id: crypto.randomUUID(), username: d.username.trim(), auth: d.auth || 'microsoft',
      host: d.host.trim(), port: Number(d.port) || 25565, version: d.version || 'auto',
      autoReconnect: d.autoReconnect !== false, reconnectDelay: Number(d.reconnectDelay) || 5,
      automations: {}, macros: {}
    }
    conns.set(cfg.id, new Connection(cfg, hub))
    await saveConns(); hub.broadcast()
    if (d.connect) conns.get(cfg.id).connect()
    return { id: cfg.id }
  })
  handle('updateConnection', async d => {
    const c = C(d.id)
    for (const k of ['host', 'port', 'version', 'autoReconnect', 'reconnectDelay', 'auth', 'username']) if (k in d) c.cfg[k] = d[k]
    await saveConns(); hub.broadcast()
  })
  handle('removeConnection', async d => { const c = C(d.id); c.disconnect('removed'); conns.delete(d.id); await saveConns(); hub.broadcast() })
  handle('connect', d => C(d.id).connect())
  handle('disconnect', d => C(d.id).disconnect('user'))
  handle('history', d => { const c = C(d.id); return { chat: c.chat, activity: c.activity, autoLog: c.autoLog, macroLog: c.macroLog } })
  handle('chat', d => {
    const c = C(d.id); if (!c.bot || c.status !== 'online') throw new Error('Not connected')
    const msg = String(d.text || '').slice(0, 256); if (!msg) return
    c.bot.chat(msg); c.sys('> ' + msg, 'self')
  })

  handle('automation', async d => {
    const c = C(d.id)
    c.cfg.automations = c.cfg.automations || {}
    const cur = c.cfg.automations[d.aid] || {}
    if ('config' in d) cur.config = { ...(cur.config || {}), ...d.config }
    if ('enabled' in d) cur.enabled = !!d.enabled
    c.cfg.automations[d.aid] = cur
    await saveConns()
    if (cur.enabled) { if (c.running[d.aid]) c.restartAuto(d.aid); else c.startAuto(d.aid) } else c.stopAuto(d.aid)
    hub.broadcast()
  })
  handle('runAutomation', d => { const c = C(d.id); c.stopAuto(d.aid); c.startAuto(d.aid) })

  handle('saveMacro', async d => {
    const list = hub.macros().filter(m => m.id !== d.id)
    list.push({ id: d.id || crypto.randomUUID(), name: d.name || 'Macro', trigger: d.trigger || 'manual', interval: Number(d.interval) || 60, actions: d.actions || '' })
    await store.set('macros', list); hub.broadcast()
  })
  handle('deleteMacro', async d => { await store.set('macros', hub.macros().filter(m => m.id !== d.id)); hub.broadcast() })
  handle('toggleMacro', async d => { const c = C(d.id); c.cfg.macros = c.cfg.macros || {}; c.cfg.macros[d.mid] = !!d.enabled; await saveConns(); hub.broadcast() })
  handle('runMacro', d => { const m = hub.macros().find(x => x.id === d.mid); if (m) C(d.id).runMacro(m) })
  handle('saveCommands', async d => { await store.set('commands', (d.commands || []).filter(Boolean)); hub.broadcast() })

  // inventory / controls
  handle('invAction', async d => {
    const c = C(d.id); const bot = c.bot; if (!bot) throw new Error('Not connected')
    const it = bot.inventory.slots[d.slot]
    if (d.action === 'select' && d.slot >= 36 && d.slot <= 44) bot.setQuickBarSlot(d.slot - 36)
    else if (d.action === 'drop' && it) await bot.tossStack(it)
    else if (d.action === 'use' && it) {
      if (d.slot >= 36 && d.slot <= 44) bot.setQuickBarSlot(d.slot - 36); else await bot.equip(it, 'hand')
      bot.activateItem(); setTimeout(() => bot.deactivateItem(), 1600)
    } else if (d.action === 'move') await bot.moveSlotItem(d.slot, d.to)
    else if (d.action === 'window' && bot.currentWindow) await bot.clickWindow(d.slot, d.button || 0, d.mode || 0)
    else if (d.action === 'closeWindow' && bot.currentWindow) bot.closeWindow(bot.currentWindow)
  })
  handle('control', d => {
    const c = C(d.id); const bot = c.bot; if (!bot) throw new Error('Not connected')
    if (d.type === 'sneak') { c.sneak = !!d.value; bot.setControlState('sneak', c.sneak) }
    if (d.type === 'face') {
      const yaw = { north: 0, west: Math.PI / 2, south: Math.PI, east: -Math.PI / 2 }[d.value]
      if (yaw !== undefined) bot.look(yaw, 0, true)
    }
  })
})

// push live stats + interval macros
setInterval(() => {
  for (const c of conns.values()) {
    const l = c.live(); if (l) io.emit('live', { id: c.id, live: l })
    c.tickMacros()
  }
}, 1000)

;(async () => {
  await store.init()
  for (const cfg of store.get('connections', [])) {
    const c = new Connection(cfg, hub)
    conns.set(cfg.id, c)
  }
  const port = Number(process.env.PORT) || 3000
  server.listen(port, '0.0.0.0', () => console.log(`Dashboard on http://localhost:${port}`))
})()

process.on('unhandledRejection', e => console.error('unhandledRejection', e && e.message))
process.on('uncaughtException', e => console.error('uncaughtException', e && e.message))
