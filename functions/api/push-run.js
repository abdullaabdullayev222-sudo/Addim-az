// Addım — gündəlik xatırlatmaların göndərilməsi (saatda bir dəfə cron ilə çağırılır)
// GET /api/push-run — Bakı vaxtı ilə indiki saatı xatırlatma vaxtı seçən və bu gün dərs keçməyənlərə bir bildiriş.
// Hər istifadəçiyə gündə ən çox bir bildiriş (sent_day), ona görə təkrar çağırış zərərsizdir.
import { json, bakuDay } from '../_shared.js';
import { vapidKeys, sendPush, PUSH_SCHEMA } from '../_push.js';

function reminder(streak, hour) {
  if (streak >= 30) return { title: `⚡ ${streak} günlük şimşək təhlükədədir!`, body: 'Bu qədər zəhməti bir günə qurban vermə — 3 dəqiqəlik dərs kifayətdir.' };
  if (streak >= 7) return { title: '⚡ Şimşəyin əsəbiləşir!', body: `${streak} günlük seriyan sönməsin. Bir dərs keç — enerjini doldur.` };
  if (streak >= 1) return { title: hour >= 21 ? '⚡ Son şans: şimşək sönür!' : '⚡ Şimşəyin səni gözləyir', body: `${streak} günlük seriyanı davam etdir. Bu gün hələ dərs keçməmisən.` };
  return { title: '⚡ Şimşəyi çaxdırmaq vaxtıdır', body: 'Bu gün kiçik bir addım at — bir dərs 3–5 dəqiqə çəkir.' };
}

export async function onRequest({ request, env }) {
  if (!env.DB) return json({ error: 'db_not_bound' }, 503);
  await env.DB.prepare(PUSH_SCHEMA).run();
  const day = bakuDay(), q = new URL(request.url).searchParams;
  const hour = env.PUSH_TEST && q.has('hour') ? +q.get('hour') : new Date(Date.now() + 4 * 3600e3).getUTCHours();
  if (hour < 8 || hour > 22) return json({ ok: true, hour, sent: 0, quiet: true }); // gecə narahat etmirik
  const { results } = await env.DB.prepare(`SELECT * FROM push_subs WHERE hour <= ?1 AND (done_day IS NULL OR done_day <> ?2) AND (sent_day IS NULL OR sent_day <> ?2) LIMIT 300`).bind(hour, day).all();
  if (!results.length) return json({ ok: true, hour, sent: 0 });
  const keys = await vapidKeys(env.DB);
  let sent = 0, gone = 0, failed = 0;
  for (const s of results) {
    // Seriya yalnız dünən də aktiv olubsa davam edir; sadəlik üçün saxlanmış sayı işlədirik
    const msg = { ...reminder(s.streak || 0, hour), url: '/#home', tag: 'daily' };
    let st = 0; try { st = await sendPush(s, msg, keys); } catch (e) { st = 0; }
    if (st === 404 || st === 410) { await env.DB.prepare('DELETE FROM push_subs WHERE uid = ?1').bind(s.uid).run(); gone++; continue; }
    if (st >= 200 && st < 300) { sent++; await env.DB.prepare('UPDATE push_subs SET sent_day = ?2 WHERE uid = ?1').bind(s.uid, day).run(); } else failed++;
  }
  return json({ ok: true, hour, sent, gone, failed });
}
