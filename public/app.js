/* global io */
const $ = s => document.querySelector(s)
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const time = t => new Date(t).toLocaleTimeString()
const head = n => `https://mc-heads.net/avatar/${encodeURIComponent(n)}/32`
const VERSIONS = ['auto', '1.21.11', '1.21.10', '1.21.8', '1.21.4', '1.21.1', '1.20.6', '1.20.4', '1.20.1', '1.19.4', '1.18.2', '1.16.5', '1.12.2', '1.8.9']

let password = localStorage.getItem('dashPw') || ''
let socket
let S = { connections: [], macros: [], commands: [], defs: [] }
let sel = localStorage.getItem('sel')
let live = {}
let logs = { chat: [], activity: [], autoLog: [], macroLog: [] }
let tab = 'chat'
let filters = { chat: '', autoLog: '', macroLog: '' }

function toast (m) { const t = $('#toast'); t.textContent = m; t.classList.remove('hidden'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.add('hidden'), 3500) }
function call (ev, data) {
  return new Promise(res => socket.emit(ev, data, r => { if (r && !r.ok) toast(r.error); res(r || {}) }))
}
const cur = () => S.connections.find(c => c.id === sel)

function start () {
  socket = io({ auth: { password } })
  socket.on('connect_error', e => {
    if (e.message === 'unauthorized') {
      password = prompt('Dashboard password') || ''
      localStorage.setItem('dashPw', password)
      socket.auth.password = password; socket.connect()
    }
  })
  socket.on('state', s => {
    S = s
    if (!cur() && S.connections[0]) select(S.connections[0].id)
    render()
  })
  socket.on('live', d => { live[d.id] = d.live; if (d.id === sel) renderLive() })
  const add = (key, render) => d => { if (d.id !== sel) return; logs[key].push(d); if (logs[key].length > 500) logs[key].shift(); render() }
  socket.on('chat', add('chat', renderChat))
  socket.on('activity', add('activity', renderActivity))
  socket.on('autolog', add('autoLog', renderAutoLog))
  socket.on('macrolog', add('macroLog', renderMacroLog))
  socket.on('msa', d => { if (d.id === sel) modalMsg('Microsoft Login', `Open <a class="accent" target="_blank" href="${esc(d.uri)}">${esc(d.uri)}</a> and enter code:<h2 style="letter-spacing:.2em">${esc(d.code)}</h2>`) })
}

async function select (id) {
  sel = id; localStorage.setItem('sel', id)
  logs = { chat: [], activity: [], autoLog: [], macroLog: [] }
  const r = await call('history', { id })
  if (r.ok) logs = { chat: r.chat, activity: r.activity, autoLog: r.autoLog, macroLog: r.macroLog }
  render(); renderChat(); renderActivity(); renderAutoLog(); renderMacroLog(); fillConn(true)
}

// ---------------- render ----------------
function render () {
  $('#storage').textContent = 'Storage: ' + (S.storage || '-')
  const online = S.connections.filter(c => c.status === 'online').length
  $('#activeCount').textContent = `${online}/${S.connections.length} active connections`
  const names = [...new Set(S.connections.map(c => c.cfg.username))]
  $('#accounts').innerHTML = names.map(n => `<div class="av" title="${esc(n)}" style="background-image:url(${head(n)})"></div>`).join('')
  const hosts = [...new Set(S.connections.map(c => c.cfg.host))]
  $('#servers').innerHTML = hosts.map(h => {
    const cs = S.connections.filter(c => c.cfg.host === h)
    const on = cs.filter(c => c.status === 'online').length
    return `<div class="srv mb8"><div class="srvhead"><span class="grow">${esc(h)}</span><span class="pill g">${on}</span><span class="pill r">${cs.length - on}</span></div>
      ${cs.map(c => `<div class="acc ${c.id === sel ? 'sel' : ''}" data-sel="${c.id}">
        <span class="head" style="background-image:url(${head(c.cfg.username)})"></span>
        <div class="nm">${esc(c.cfg.username)}<div class="sub">${c.connectedAt ? upt(c.connectedAt) : c.status}</div></div>
        <span class="dot ${c.status}"></span>
        <button class="icon" data-toggle="${c.id}" title="${c.status === 'offline' ? 'Connect' : 'Disconnect'}">${c.status === 'offline' ? '▶' : '⏻'}</button>
      </div>`).join('')}</div>`
  }).join('')
  const c = cur()
  $('#empty').classList.toggle('hidden', !!c)
  $('#view').classList.toggle('hidden', !c)
  if (!c) return
  $('#vHead').style.backgroundImage = `url(${head(c.cfg.username)})`
  $('#vUser').textContent = c.cfg.username
  $('#vHost').textContent = c.cfg.host
  const btn = $('#connBtn')
  btn.className = 'btn grow ' + (c.status === 'online' ? 'red' : c.status === 'connecting' ? 'amber' : 'primary')
  btn.textContent = c.status === 'online' ? 'Disconnect' : c.status === 'connecting' ? 'Connecting (cancel)' : 'Connect'
  const isOn = c.status === 'online'
  $('#offlineMsg').classList.toggle('hidden', isOn)
  $('#liveBox').classList.toggle('hidden', !isOn)
  if (!isOn) $('#ping').textContent = ''
  fillConn(false)
  renderAutomations(); renderMacros(); renderCommands()
  $('#sUser').value = document.activeElement === $('#sUser') ? $('#sUser').value : c.cfg.username
}
const upt = t => { const s = Math.floor((Date.now() - t) / 1000); return `${Math.floor(s / 3600)}h ${Math.floor(s / 60) % 60}m ${s % 60}s` }

function fillConn (force) {
  const c = cur(); if (!c) return
  if (!$('#cVersion').options.length) $('#cVersion').innerHTML = VERSIONS.map(v => `<option value="${v}">${v === 'auto' ? 'Auto detect (Recommended)' : v}</option>`).join('')
  const set = (el, v) => { if (force || document.activeElement !== el) el.value = v }
  set($('#cHost'), c.cfg.host); set($('#cPort'), c.cfg.port); set($('#cVersion'), c.cfg.version || 'auto')
  set($('#cAuth'), c.cfg.auth); set($('#cDelay'), c.cfg.reconnectDelay); set($('#cAuto'), c.cfg.autoReconnect ? '1' : '0')
}

function slotHtml (it, idx, extra = '') {
  if (!it) return `<div class="slot ${extra}" data-slot="${idx}"></div>`
  const short = it.name.replace(/_/g, ' ').split(' ').map(w => w.slice(0, 4)).join(' ')
  const tip = `${it.display} (${it.name})${it.lore.length ? '\n' + it.lore.join('\n') : ''}`
  return `<div class="slot ${extra} ${it.name.endsWith('_axe') ? 'axe' : ''}" draggable="true" data-slot="${idx}" title="${esc(tip)}">${esc(short)}${it.count > 1 ? `<span class="n">${it.count}</span>` : ''}</div>`
}

function renderLive () {
  const L = live[sel]; const c = cur()
  if (!L || !c || c.status !== 'online') return
  $('#hp').textContent = L.health + '/20'; $('#fd').textContent = L.food + '/20'
  $('#lvl').textContent = 'Lv ' + L.level; $('#lvlBar').style.width = Math.round(L.progress * 100) + '%'; $('#lvlPct').textContent = Math.round(L.progress * 100) + '%'
  $('#blk').textContent = L.block
  $('#xpS').textContent = L.xp.session; $('#xpH').textContent = L.xp.perHour ?? '-'; $('#xpD').textContent = L.xp.perDay ?? '-'
  $('#pos').textContent = `${L.pos.x}, ${L.pos.y}, ${L.pos.z}`
  $('#ping').textContent = L.ping != null ? L.ping + ' ms' : ''
  $('#uptime').textContent = c.connectedAt ? upt(c.connectedAt) : '-'
  $('#invMain').innerHTML = L.slots.slice(9, 36).map((it, i) => slotHtml(it, i + 9)).join('')
  $('#invHot').innerHTML = L.slots.slice(36, 45).map((it, i) => slotHtml(it, i + 36, i === L.quickBar ? 'sel' : '').replace('</div>', `<span class="k">${i + 1}</span></div>`)).join('')
  $('#armor').innerHTML = L.slots.slice(5, 9).map((it, i) => slotHtml(it, i + 5)).join('')
  $('#offhand').innerHTML = slotHtml(L.slots[45], 45)
  if (document.activeElement !== $('#sneakSel')) $('#sneakSel').value = L.sneak ? '1' : '0'
  $('#winBox').classList.toggle('hidden', !L.window)
  if (L.window) {
    $('#winTitle').textContent = L.window.title || 'Container'
    $('#winSlots').innerHTML = L.window.slots.map((it, i) => slotHtml(it, i).replace('class="slot', 'data-win="1" class="slot')).join('')
  }
  $('#tabList').innerHTML = L.players.sort((a, b) => a.name.localeCompare(b.name)).map(p => `<div><span>${esc(p.name)}</span><span class="muted">${p.ping}ms</span></div>`).join('')
  $('#sidebar').textContent = L.scoreboard ? [L.scoreboard.title, ...L.scoreboard.items].join('\n') : ''
}

function logLine (e, body) { return `<div class="ln ${e.kind || ''}"><span class="ts">[${time(e.t)}]</span>${body}</div>` }
function scrollKeep (el, html) { const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 40; el.innerHTML = html; if (atBottom) el.scrollTop = el.scrollHeight }
function renderChat () {
  const f = filters.chat.toLowerCase()
  scrollKeep($('#chatLog'), logs.chat.filter(e => !f || e.text.toLowerCase().includes(f)).map(e =>
    logLine(e, e.kind === 'chat' ? (e.html || esc(e.text)) : `<span class="sys">SYSTEM •</span>${esc(e.text)}`)).join(''))
}
function renderActivity () { scrollKeep($('#activityLog'), logs.activity.map(e => logLine(e, esc(e.text))).join('') || '<span class="muted">No activity yet.</span>') }
function renderAutoLog () {
  const f = filters.autoLog.toLowerCase()
  scrollKeep($('#autoLog'), logs.autoLog.filter(e => !f || (e.automation + e.text).toLowerCase().includes(f)).map(e => logLine(e, `<span class="sys">${esc(e.automation)} •</span>${esc(e.text)}`)).join('') || '<span class="muted">No automation events yet.</span>')
}
function renderMacroLog () {
  const f = filters.macroLog.toLowerCase()
  scrollKeep($('#macroLog'), logs.macroLog.filter(e => !f || (e.macro + e.text).toLowerCase().includes(f)).map(e => logLine(e, `<span class="sys">${esc(e.macro)} •</span>${esc(e.text)}`)).join('') || '<span class="muted">No macro events yet.</span>')
}

function renderAutomations () {
  const c = cur()
  const card = d => {
    const a = c.automations[d.id]; const run = c.running.includes(d.id)
    return `<div class="auto ${d.featured ? 'feat' : ''} ${run ? 'run' : ''}">
      <div class="art">${d.featured ? '◉' : '⚡'}</div>
      <div class="row between"><b class="small">${esc(d.name)}${run ? '<span class="chip">Running</span>' : ''}</b><button class="sw ${a.enabled ? 'on' : ''}" data-autotoggle="${d.id}" title="Enable / disable"></button></div>
      <p>${esc(d.short)}</p>
      <div class="row gap8"><button class="btn xs" data-autocfg="${d.id}">Configure</button>${a.enabled ? `<button class="btn xs" data-autorun="${d.id}" ${c.status !== 'online' ? 'disabled' : ''}>Restart</button>` : ''}</div>
    </div>`
  }
  $('#autoFeatured').innerHTML = S.defs.filter(d => d.featured).map(card).join('')
  $('#autoOther').innerHTML = S.defs.filter(d => !d.featured).map(card).join('')
}

function renderMacros () {
  const c = cur()
  $('#macroList').innerHTML = S.macros.length
    ? S.macros.map(m => `<div class="card macro"><button class="sw ${c.cfg.macros?.[m.id] ? 'on' : ''}" data-mtoggle="${m.id}"></button>
      <div class="grow"><b>${esc(m.name)}</b><div class="tiny muted">${m.trigger === 'interval' ? 'Every ' + m.interval + 's' : m.trigger === 'spawn' ? 'On join' : 'Manual'} · ${esc((m.actions || '').split('\n').filter(Boolean).length)} actions</div></div>
      <button class="btn xs" data-mrun="${m.id}">Run</button><button class="btn xs" data-medit="${m.id}">Edit</button><button class="btn xs danger" data-mdel="${m.id}">Delete</button></div>`).join('')
    : '<div class="center muted pad40">No macros yet: create one to get started</div>'
}
function renderCommands () {
  $('#cmdList').innerHTML = S.commands.map((c, i) => `<span class="row gap4"><button class="btn xs" data-cmd="${esc(c)}">${esc(c)}</button><button class="icon" data-cmddel="${i}">✕</button></span>`).join('')
}

// ---------------- modals ----------------
function modal (html, wide) { $('#mbox').className = 'mbox' + (wide ? ' wide' : ''); $('#mbox').innerHTML = html; $('#modal').classList.remove('hidden') }
function closeModal () { $('#modal').classList.add('hidden') }
function modalMsg (title, body) { modal(`<div class="mhead">${title}</div><div class="mbody">${body}</div><div class="mfoot"><button class="btn" data-close>Close</button></div>`) }

function addModal () {
  const last = cur()?.cfg
  modal(`<div class="mhead">Connect Account to Server</div><form class="mbody" id="addForm">
    <label>Server</label><input class="input" name="host" value="${esc(last?.host || 'donutsmp.net')}" required>
    <div class="row gap8"><div class="grow"><label>Version</label><select class="input" name="version">${VERSIONS.map(v => `<option value="${v}">${v === 'auto' ? 'Auto detect (Recommended)' : v}</option>`).join('')}</select></div>
      <div><label>Port</label><input class="input w90" type="number" name="port" value="25565"></div></div>
    <label>Account (username or Microsoft email)</label><input class="input" name="username" required placeholder="Steve or you@outlook.com">
    <label>Account Type</label><select class="input" name="auth"><option value="microsoft">Microsoft (Premium)</option><option value="offline">Offline / Cracked</option></select>
    <label>Auto-Reconnect</label><div class="row gap8"><input class="input w90" type="number" name="reconnectDelay" value="5"><span class="unit">s</span>
      <select class="input grow" name="autoReconnect"><option value="1">Enabled</option><option value="0">Disabled</option></select></div>
  </form><div class="mfoot"><button class="btn ghost" data-close>Cancel</button><button class="btn primary" id="addGo">Connect</button></div>`)
  $('#addGo').onclick = async () => {
    const f = Object.fromEntries(new FormData($('#addForm')))
    if (!f.host || !f.username) return toast('Server and account are required')
    const r = await call('addConnection', { ...f, autoReconnect: f.autoReconnect === '1', connect: true })
    if (r.ok) { closeModal(); select(r.id) }
  }
}

function cfgModal (aid) {
  const c = cur(); const d = S.defs.find(x => x.id === aid); const a = c.automations[aid]
  const vals = { ...a.config }
  const draw = () => {
    const visible = f => {
      if (!f.showIf) return true
      const [k, v] = f.showIf.split('=')
      return v === undefined ? !!vals[k] : String(vals[k]) === v
    }
    const fieldHtml = f => {
      if (!visible(f)) return ''
      const sub = f.showIf ? 'sub' : ''
      if (f.type === 'toggle') return `<div class="field tg ${sub}"><div><b class="small">${esc(f.label)}</b><div class="d">${esc(f.desc)}</div></div><button type="button" class="sw ${vals[f.key] ? 'on' : ''}" data-f="${f.key}"></button></div>`
      const input = f.type === 'select'
        ? `<select class="input" data-f="${f.key}">${f.options.map(o => `<option value="${esc(o.value)}" ${String(vals[f.key]) === String(o.value) ? 'selected' : ''}>${esc(o.label)}</option>`).join('')}</select>`
        : `<input class="input" data-f="${f.key}" type="${f.type === 'number' ? 'number' : 'text'}" step="any" value="${esc(vals[f.key])}" placeholder="${esc(f.placeholder || '')}">`
      return `<div class="field ${sub}"><b class="small">${esc(f.label)}</b><div class="d">${esc(f.desc)}</div>${input}</div>`
    }
    modal(`<div class="mhead">${esc(d.name)}</div><div class="mbody"><p class="muted small" style="margin:0 0 6px">${esc(d.desc)}</p>
      <div class="field tg"><div><b class="small">Enabled</b><div class="d">Run this automation on this connection (starts automatically on join).</div></div><button type="button" class="sw ${vals.__enabled ?? a.enabled ? 'on' : ''}" data-f="__enabled"></button></div>
      ${d.fields.map(fieldHtml).join('')}</div>
      <div class="mfoot"><button class="btn ghost" data-close>Cancel</button><button class="btn primary" id="cfgSave">Save</button></div>`, true)
    $('#mbox').querySelectorAll('[data-f]').forEach(el => {
      const k = el.dataset.f
      if (el.classList.contains('sw')) el.onclick = () => { vals[k] = !(k === '__enabled' ? (vals[k] ?? a.enabled) : vals[k]); draw() }
      else el.onchange = () => { const f = d.fields.find(x => x.key === k); vals[k] = f.type === 'number' ? Number(el.value) : el.value; if (d.fields.some(x => x.showIf && x.showIf.startsWith(k))) draw() }
    })
    $('#cfgSave').onclick = async () => {
      $('#mbox').querySelectorAll('input[data-f]').forEach(el => { const f = d.fields.find(x => x.key === el.dataset.f); vals[f.key] = f.type === 'number' ? Number(el.value) : el.value })
      const { __enabled, ...config } = vals
      const r = await call('automation', { id: sel, aid, config, enabled: __enabled ?? a.enabled })
      if (r.ok) { closeModal(); toast(d.name + ' saved') }
    }
  }
  draw()
}

function macroModal (m = { name: '', trigger: 'manual', interval: 60, actions: '' }) {
  modal(`<div class="mhead">${m.id ? 'Edit' : 'New'} Macro</div><form class="mbody" id="mForm">
    <label>Name</label><input class="input" name="name" value="${esc(m.name)}" required>
    <label>Trigger</label><select class="input" name="trigger">${[['manual', 'Manual'], ['spawn', 'On join'], ['interval', 'Interval']].map(([v, l]) => `<option value="${v}" ${m.trigger === v ? 'selected' : ''}>${l}</option>`).join('')}</select>
    <label>Interval (seconds, for Interval trigger)</label><input class="input" type="number" name="interval" value="${esc(m.interval)}">
    <label>Actions (one per line: chat text, /command, or <code>wait 1000</code>)</label><textarea class="input" name="actions" rows="6">${esc(m.actions)}</textarea>
  </form><div class="mfoot"><button class="btn ghost" data-close>Cancel</button><button class="btn primary" id="mSave">Save</button></div>`)
  $('#mSave').onclick = async () => { const f = Object.fromEntries(new FormData($('#mForm'))); const r = await call('saveMacro', { ...f, id: m.id }); if (r.ok) closeModal() }
}

// ---------------- events ----------------
document.addEventListener('click', async e => {
  const t = e.target.closest('[data-sel],[data-toggle],[data-autotoggle],[data-autocfg],[data-autorun],[data-mtoggle],[data-mrun],[data-medit],[data-mdel],[data-cmd],[data-cmddel],[data-close],[data-tab],[data-slot]')
  if (!t) { if (e.target === $('#modal')) closeModal(); return }
  const D = t.dataset
  if (D.toggle) { e.stopPropagation(); const c = S.connections.find(x => x.id === D.toggle); return call(c.status === 'offline' ? 'connect' : 'disconnect', { id: c.id }) }
  if (D.sel) return select(D.sel)
  if (D.autotoggle) { const a = cur().automations[D.autotoggle]; return call('automation', { id: sel, aid: D.autotoggle, enabled: !a.enabled }) }
  if (D.autocfg) return cfgModal(D.autocfg)
  if (D.autorun) return call('runAutomation', { id: sel, aid: D.autorun })
  if (D.mtoggle) return call('toggleMacro', { id: sel, mid: D.mtoggle, enabled: !cur().cfg.macros?.[D.mtoggle] })
  if (D.mrun) return call('runMacro', { id: sel, mid: D.mrun })
  if (D.medit) return macroModal(S.macros.find(m => m.id === D.medit))
  if (D.mdel) return confirm('Delete macro?') && call('deleteMacro', { id: D.mdel })
  if (D.cmd) return call('chat', { id: sel, text: D.cmd })
  if (D.cmddel) return call('saveCommands', { commands: S.commands.filter((_, i) => i !== Number(D.cmddel)) })
  if ('close' in D) return closeModal()
  if (D.tab) {
    tab = D.tab
    document.querySelectorAll('#tabs button').forEach(b => b.classList.toggle('on', b.dataset.tab === tab))
    document.querySelectorAll('.pane').forEach(p => p.classList.toggle('hidden', p.dataset.pane !== tab))
    return
  }
  if (D.slot) return call('invAction', { id: sel, slot: Number(D.slot), action: D.win ? 'window' : 'select', mode: e.shiftKey ? 1 : 0 })
})
document.addEventListener('contextmenu', e => {
  const t = e.target.closest('[data-slot]'); if (!t) return
  e.preventDefault()
  call('invAction', { id: sel, slot: Number(t.dataset.slot), action: t.dataset.win ? 'window' : 'use', button: 1 })
})
let dragFrom = null
document.addEventListener('dragstart', e => { const t = e.target.closest('[data-slot]'); if (t && !t.dataset.win) dragFrom = Number(t.dataset.slot) })
document.addEventListener('dragover', e => { if (dragFrom != null && e.target.closest('[data-slot],#dropZone')) e.preventDefault() })
document.addEventListener('drop', e => {
  if (dragFrom == null) return
  e.preventDefault()
  if (e.target.closest('#dropZone')) call('invAction', { id: sel, slot: dragFrom, action: 'drop' })
  else { const t = e.target.closest('[data-slot]'); if (t && !t.dataset.win && Number(t.dataset.slot) !== dragFrom) call('invAction', { id: sel, slot: dragFrom, action: 'move', to: Number(t.dataset.slot) }) }
  dragFrom = null
})
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal()
  if (e.key.toLowerCase() === 'q' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) {
    const h = document.querySelector('#invHot .slot.sel'); if (h) call('invAction', { id: sel, slot: Number(h.dataset.slot), action: 'drop' })
  }
})
document.querySelectorAll('[data-filter]').forEach(el => { el.oninput = () => { filters[el.dataset.filter] = el.value; el.dataset.filter === 'autoLog' ? renderAutoLog() : renderMacroLog() } })

$('#addAccountBtn').onclick = addModal
$('#addServerBtn').onclick = addModal
$('#emptyAdd').onclick = addModal
$('#connBtn').onclick = () => { const c = cur(); call(c.status === 'offline' ? 'connect' : 'disconnect', { id: c.id }) }
$('#delBtn').onclick = () => confirm('Remove this connection?') && call('removeConnection', { id: sel }).then(() => { sel = null })
for (const [el, key, conv] of [['#cHost', 'host', String], ['#cPort', 'port', Number], ['#cVersion', 'version', String], ['#cAuth', 'auth', String], ['#cDelay', 'reconnectDelay', Number], ['#cAuto', 'autoReconnect', v => v === '1']]) {
  $(el).onchange = () => call('updateConnection', { id: sel, [key]: conv($(el).value) })
}
$('#chatForm').onsubmit = e => { e.preventDefault(); const v = $('#chatIn').value.trim(); if (!v) return; call('chat', { id: sel, text: v }); $('#chatIn').value = '' }
$('#chatSearch').oninput = e => { filters.chat = e.target.value; renderChat() }
$('#cmdForm').onsubmit = e => { e.preventDefault(); const v = $('#cmdIn').value.trim(); if (!v) return; call('saveCommands', { commands: [...S.commands, v] }); $('#cmdIn').value = '' }
$('#newMacro').onclick = () => macroModal()
$('#winClose').onclick = () => call('invAction', { id: sel, slot: 0, action: 'closeWindow' })
$('#faceSel').onchange = e => e.target.value && call('control', { id: sel, type: 'face', value: e.target.value })
$('#sneakSel').onchange = e => call('control', { id: sel, type: 'sneak', value: e.target.value === '1' })
$('#sSave').onclick = () => call('updateConnection', { id: sel, username: $('#sUser').value.trim() }).then(r => r.ok && toast('Saved, reconnect to apply'))
setInterval(() => { if (cur()?.connectedAt) render() }, 5000)

start()
if (sel) select(sel)
