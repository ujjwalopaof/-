-- Run once in Supabase SQL editor
create table if not exists public.afk_store (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz default now()
);
alter table public.afk_store enable row level security;
-- No policies: only the server (secret key) can read/write.
