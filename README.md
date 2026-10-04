# AFK Client

A web dashboard for running Minecraft bots with [mineflayer](https://github.com/PrismarineJS/mineflayer). The layout follows afkclient.pro: accounts and servers on the left, live stats and inventory up top, then tabs for chat, tab list, commands, macros, automations, activity log and settings.

It was built for donutsmp.net, but you can point it at any Java Edition server.

## Requirements

- Node.js 18 or newer (22 is tested)
- A Minecraft Java account (Microsoft), or an offline-mode server for cracked accounts

## Run it

```bash
npm install
cp .env.example .env   # then fill in the values
npm start
```

Open http://localhost:3000.

With Docker:

```bash
docker compose -f docker-compose.alloy.yaml up
```

## Configuration (.env)

| Variable | Purpose |
| --- | --- |
| `PORT` | Dashboard port. Default 3000. |
| `SUPABASE_URL` | Your Supabase project URL. |
| `SUPABASE_SECRET_KEY` | Server-side secret key. Never expose this to the browser or commit it. |
| `DASHBOARD_PASSWORD` | Optional. If set, the dashboard asks for it before connecting. |

`.env` is in `.gitignore`. Keep it that way.

### Supabase storage

Connections, automation settings, macros and quick commands are saved to the Supabase table `afk_store`. Create the table once by pasting `supabase/schema.sql` into the Supabase SQL editor and running it.

Until the table exists, or if Supabase is unreachable, the app saves to `data/store.json` instead. The sidebar footer shows which backend is active (`Storage: supabase` or `Storage: file`).

Row level security is on and the table has no policies, so only the server, which holds the secret key, can read or write it.

## Adding an account

1. Click **Add Account** or **Add New Server**.
2. Enter the username, server (e.g. `donutsmp.net`), port and version. Leave the version on Auto detect unless the server needs a specific one.
3. Choose **Microsoft** for premium accounts. On the first connect, chat shows a link and a code. Open the link, enter the code, and sign in. The token is cached in `data/auth/`, so you only do this once per account.
4. Click **Connect**.

Auto-reconnect retries after the delay you set whenever the bot drops, unless you disconnected it yourself.

## Automations

Every automation can be switched on or off per account and has its own settings in **Configure**. Enabled automations start again automatically after a reconnect.

### Sell Axe

Holds left click in the chosen look direction and keeps it held, like a player holding the mouse button on a chest with a sell axe.

How it works: the bot sends the same packets a vanilla client sends while holding left click (start digging, an arm swing every 250 ms, finish when the break time runs out, then start again). It never edits its own copy of the world, so a protected block stays targeted. mineflayer's `bot.dig()` marks the block as air locally after each attempt, which stops the loop, so this automation doesn't use it. It also uses its own raycast, because mineflayer's `blockAtCursor()` returns nothing when yaw or pitch is exactly 0, which is the case for North and for looking straight ahead.

Settings:

- **Look Direction**: Current, North, South, East, West, Up or Down.
- **Detect Bot Stuck**: when the bot hasn't moved for **Not Moving For (seconds)** (default 5), it runs the **When Stuck** action: Nudge movement, Jump, Reconnect or Disconnect.
- **Auto Eat**: when hunger drops to **Eat when hunger at or below** (default 14), it lets go of left click, eats from the **Food slot** (Offhand, any inventory slot, or hotbar 1-9), then resumes.
- **Automatically Replenish Axe**: when the held axe breaks, it equips a spare axe from the inventory (one with "sell" in its name first). If there is no spare, it runs the **Auction Search Command** (default `/ah sell axe`) and buys the first axe that:
  - costs between **Minimum Purchase Price** and **Maximum Purchase Price**, in millions (default 40-50), and
  - has a Self Destruct time between **Minimum Duration** and **Maximum Duration** (for example `23h+` and `30h`). Leave either blank to skip that check.

  It scans up to **Pages to Search** pages (default 5). With **Sort Highest To Lowest** on, it clicks the AH hopper twice before scanning. After a failed search it waits 30 seconds before trying again.

### Others

- **DonutSMP Auto Sell**: runs `/sell` on a timer and shift-clicks items into the sell GUI. Axes are skipped.
- **DonutSMP Spawner Sell**: opens the nearest spawner (within 5 blocks) and clicks its sell button.
- **DonutSMP Spawner Drop**: empties the spawner via slot 45, then drops the loot. Food and axes are kept.
- **DonutSMP Staff Check**: watches the tab list for the names you list (and for admin/mod/helper/staff/owner ranks), posts to a Discord webhook, and can disconnect.
- **Auto Disconnect Near Players**: disconnects when a player not on your trusted list comes within the radius.
- **Leave Area Alert**: disconnects or runs a command if the bot moves too far from where the automation started.
- **Auto Eat**: standalone auto eat for when Sell Axe isn't running.
- **Custom GUI Command**: opens a menu by command, block right-click or hotbar right-click, then clicks a list of slots. Runs on a timer or when a chat line matches.

## Macros and commands

- **Commands**: quick-send buttons for commands you use often.
- **Macros**: one command or chat line per row. `wait 1000` pauses for 1000 ms. A macro runs manually, on spawn, or on an interval, and you enable it per account.

## Project layout

```
server.js            Express + Socket.IO server and dashboard API
src/connection.js    One mineflayer bot per account: connect, reconnect, logs, live stats
src/automations.js   Automation definitions, settings schema and logic
src/store.js         Supabase storage with a local JSON fallback
public/              Dashboard (plain HTML/CSS/JS)
supabase/schema.sql  Table definition
```

## Testing locally

You can test without risking a real account by running a vanilla server in offline mode:

1. Download the server jar from minecraft.net and set `online-mode=false` in `server.properties`.
2. In the dashboard, add an account with **Offline / Cracked**, server `127.0.0.1`.
3. Give the bot an axe, place a chest in front of it, and enable Sell Axe facing that way.

In survival the chest breaks after a moment, which shows the hold-left-click packets reach the server. In adventure mode, or on a server that protects the block, the loop keeps running.

## Notes

- Using bots can break a server's rules. Check donutsmp.net's rules before you run this on a real account.
- The AH parsing reads the price (`$45M`, `$1.2B`, ...) and the Self Destruct / expiry time from item lore. If DonutSMP changes its lore format, update `buyAxe()` in `src/automations.js`.
