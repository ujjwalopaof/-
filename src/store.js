// Persistent key/value store. Uses Supabase table `afk_store` when configured,
// otherwise (or if the table is missing) falls back to ./data/store.json.
const fs = require('fs')
const path = require('path')

const FILE = path.join(__dirname, '..', 'data', 'store.json')
let supabase = null
let useSupabase = false
let cache = {}

function loadFile () {
  try { cache = JSON.parse(fs.readFileSync(FILE, 'utf8')) } catch { cache = {} }
}
function saveFile () {
  fs.mkdirSync(path.dirname(FILE), { recursive: true })
  fs.writeFileSync(FILE, JSON.stringify(cache, null, 2))
}

async function init () {
  loadFile()
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SECRET_KEY
  if (!url || !key) { console.log('[store] Supabase not configured, using local file'); return }
  const { createClient } = require('@supabase/supabase-js')
  supabase = createClient(url, key, { auth: { persistSession: false } })
  const { data, error } = await supabase.from('afk_store').select('key,value')
  if (error) {
    console.warn('[store] Supabase table afk_store unavailable (' + error.message + '). Run supabase/schema.sql. Using local file.')
    return
  }
  useSupabase = true
  for (const row of data) cache[row.key] = row.value
  console.log('[store] Using Supabase (' + data.length + ' keys)')
}

function get (key, def) { return key in cache ? cache[key] : def }

async function set (key, value) {
  cache[key] = value
  saveFile()
  if (useSupabase) {
    const { error } = await supabase.from('afk_store').upsert({ key, value, updated_at: new Date().toISOString() })
    if (error) console.warn('[store] upsert failed:', error.message)
  }
}

module.exports = { init, get, set, backend: () => (useSupabase ? 'supabase' : 'file') }
