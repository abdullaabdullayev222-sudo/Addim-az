// Addım — səs keyfiyyətinin avtomatik yoxlanışı
// GET /api/ttscheck?v=asteria|orion&t=<cümlə>[&m=1]
// Keşdəki səs faylını Whisper (nitqi mətnə çevirən model) ilə dinləyir və nə eşitdiyini qaytarır.
// Hər cümlə yalnız bir dəfə yoxlanılır (nəticə D1-də saxlanılır), yalnız kursdakı cümlələr qəbul olunur.
import { json } from '../_shared.js';
import { KEYS } from '../_tts_keys.js';
import { ttsKey, sha16, toBytes } from '../_tts.js';

const b64 = u8 => { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); };

export async function onRequest({ request, env }) {
  const u = new URL(request.url);
  const text = (u.searchParams.get('t') || '').slice(0, 300);
  const voice = u.searchParams.get('v') === 'orion' ? 'orion' : 'asteria';
  const old = u.searchParams.get('m') === '1';
  if (!text) return json({ error: 'empty' }, 400);
  const h = await sha16(text);
  if (!KEYS.has(h)) return json({ error: 'not_allowed' }, 403);
  if (!env.DB) return json({ error: 'db_not_bound' }, 503);
  const k = old ? h + '-' + voice : ttsKey(h, voice);
  await env.DB.prepare('CREATE TABLE IF NOT EXISTS ttscheck (k TEXT PRIMARY KEY, heard TEXT NOT NULL, created INTEGER NOT NULL)').run();
  const done = await env.DB.prepare('SELECT heard FROM ttscheck WHERE k = ?1').bind(k).first();
  if (done) return json({ text, heard: done.heard, cached: true });
  const row = await env.DB.prepare('SELECT audio FROM tts WHERE k = ?1').bind(k).first().catch(() => null);
  if (!row || !row.audio) return json({ error: 'not_generated' }, 404);
  if (!env.AI) return json({ error: 'ai_not_bound' }, 503);
  try {
    const r = await env.AI.run('@cf/openai/whisper-large-v3-turbo', { audio: b64(toBytes(row.audio)), language: 'en' });
    const heard = String((r && (r.text || (r.result && r.result.text))) || '').trim();
    await env.DB.prepare('INSERT OR REPLACE INTO ttscheck (k, heard, created) VALUES (?1, ?2, ?3)').bind(k, heard, Date.now()).run();
    return json({ text, heard });
  } catch (e) {
    return json({ error: 'check_failed', detail: String(e && e.message || e).slice(0, 120) }, 503);
  }
}
