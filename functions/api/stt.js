// Addım — danışığı mətnə çevirmə (brauzer özü tanıya bilmədikdə ehtiyat yol)
// POST /api/stt?uid=...  gövdə: audio (webm / mp4 / ogg), ən çox 1.5 MB  ->  { text }
import { json, validId, bakuDay } from '../_shared.js';
import { hear, toBytes } from '../_tts.js';

const MAX = 1.5 * 1024 * 1024, PER_DAY = 150;

export async function onRequest({ request, env }) {
  if (request.method !== 'POST') return json({ error: 'method' }, 405);
  if (!env.AI) return json({ error: 'ai_not_bound' }, 503);
  const uid = new URL(request.url).searchParams.get('uid');
  if (!validId(uid)) return json({ error: 'invalid' }, 400);
  const buf = toBytes(await request.arrayBuffer());
  if (buf.length < 800) return json({ error: 'empty' }, 400);
  if (buf.length > MAX) return json({ error: 'too_big' }, 413);
  if (env.DB) {
    await env.DB.prepare('CREATE TABLE IF NOT EXISTS stt_use (day TEXT, uid TEXT, n INTEGER, PRIMARY KEY (day, uid))').run();
    const day = bakuDay(), r = await env.DB.prepare('SELECT n FROM stt_use WHERE day = ?1 AND uid = ?2').bind(day, uid).first();
    if (r && r.n >= PER_DAY) return json({ error: 'limit' }, 429);
    await env.DB.prepare('INSERT INTO stt_use (day, uid, n) VALUES (?1, ?2, 1) ON CONFLICT(day, uid) DO UPDATE SET n = n + 1').bind(day, uid).run();
  }
  try { return json({ text: await hear(env, buf) }); }
  catch (e) { return json({ error: 'ai_failed' }, 503); }
}
