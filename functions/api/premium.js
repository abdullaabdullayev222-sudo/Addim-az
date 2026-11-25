// Addım — Premium statusu və aktivasiya kodu
// GET  /api/premium?id=...        -> { premium, until }
// POST /api/premium {id, code}    -> kodu aktivləşdirir: { ok, premium, until, days } və ya { error }
import { json, validId, ensureSchema, premiumUntil } from '../_shared.js';

export async function onRequest({ request, env }) {
  if (!env.DB) return json({ error: 'db_not_bound' }, 503);
  await ensureSchema(env.DB);
  const now = Date.now();

  if (request.method === 'GET') {
    const id = new URL(request.url).searchParams.get('id') || '';
    const until = await premiumUntil(env.DB, id);
    return json({ premium: until > now, until });
  }
  if (request.method !== 'POST') return json({ error: 'method' }, 405);

  let b; try { b = await request.json(); } catch { return json({ error: 'bad_json' }, 400); }
  const id = b.id, code = String(b.code || '').toUpperCase().replace(/\s+/g, '').trim();
  if (!validId(id) || !/^ADDIM-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code)) return json({ error: 'invalid_code' }, 400);

  const row = await env.DB.prepare('SELECT days, redeemed_by FROM codes WHERE code = ?1').bind(code).first();
  if (!row) return json({ error: 'invalid_code' }, 404);
  if (row.redeemed_by && row.redeemed_by !== id) return json({ error: 'used' }, 409);
  if (row.redeemed_by === id) { const until = await premiumUntil(env.DB, id); return json({ ok: true, premium: until > now, until, days: 0, already: true }); }

  // Kodu atomik olaraq bu istifadəçiyə bağla (eyni anda iki nəfər işlədə bilməsin)
  const upd = await env.DB.prepare('UPDATE codes SET redeemed_by = ?1, redeemed_at = ?2 WHERE code = ?3 AND redeemed_by IS NULL').bind(id, now, code).run();
  if (!upd.meta || upd.meta.changes !== 1) return json({ error: 'used' }, 409);

  const cur = await premiumUntil(env.DB, id);
  const until = Math.max(cur, now) + row.days * 864e5;
  await env.DB.prepare('INSERT INTO premium (id, until) VALUES (?1, ?2) ON CONFLICT(id) DO UPDATE SET until = excluded.until').bind(id, until).run();
  return json({ ok: true, premium: true, until, days: row.days });
}
