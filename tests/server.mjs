import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
const root = process.argv[2];
const routes = {};
for (const n of ['board','premium','admin','track','tts','ttscheck','push','push-run']) routes[n] = (await import(path.join(root, 'functions/api/'+n+'.js'))).onRequest;
const onRequest = routes.board;
const db = new DatabaseSync(':memory:');
// Workers AI təqlidi: 1.5 saniyəlik səssiz WAV qaytarır, çağırışları sayır
let aiCalls = 0, aiFail = false;
function wav(sec = 1.5, rate = 8000) { const n = Math.floor(sec * rate), b = Buffer.alloc(44 + n); b.write('RIFF', 0); b.writeUInt32LE(36 + n, 4); b.write('WAVE', 8); b.write('fmt ', 12);
  b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(rate, 24); b.writeUInt32LE(rate, 28); b.writeUInt16LE(1, 32); b.writeUInt16LE(8, 34); b.write('data', 36); b.writeUInt32LE(n, 40); b.fill(128, 44); return b; }
// Saxta MP3: 50 kadr, MPEG-2 Layer III, 24 kHz, 48 kbps (hər kadr 144 bayt)
const mp3 = () => { const f = 144, b = new Uint8Array(50 * f); for (let i = 0; i < 50; i++) { b.set([0xff, 0xf3, 0x64, 0xc4], i * f); for (let j = 4; j < f; j++) b[i * f + j] = (i + j) & 0x7f; } return b; };
const AI = { async run(model, input, opt) { aiCalls++; if (aiFail) throw new Error('quota');
  if (model.includes('whisper')) return { text: aiGarble ? 'Dice to meet you.' : lastSay };
  lastModel = model + ':' + input.speaker; lastSay = input.text; return new Response(aiMp3 ? mp3() : wav(), { headers: { 'content-type': 'audio/mpeg' } }); } };
let lastModel = '', aiMp3 = false, aiGarble = false, lastSay = '';
// Bildiriş serverinin təqlidi: https://push.test/<ad> ünvanına gələn sorğuları yadda saxla; «gone» ilə bitən ünvan 410 qaytarır
const pushLog = []; const realFetch = globalThis.fetch;
globalThis.fetch = async (url, o) => { if (String(url).startsWith('https://push.test/')) { pushLog.push({ url: String(url), auth: o.headers.Authorization, enc: o.headers['Content-Encoding'], len: o.body.length }); return { status: String(url).endsWith('gone') ? 410 : 201 }; } return realFetch(url, o); };
async function fakeSub(name) { const kp = await crypto.subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, true, ['deriveBits']); const raw = new Uint8Array(await crypto.subtle.exportKey('raw', kp.publicKey));
  const b = u => Buffer.from(u).toString('base64url'); return { endpoint: 'https://push.test/' + name, keys: { p256dh: b(raw), auth: b(crypto.getRandomValues(new Uint8Array(16))) } }; }
const D1 = { prepare(sql) { let args = []; const st = { bind(...a) { args = a; return st; },
  async run() { const r = db.prepare(sql).run(...args); return { meta: { changes: r.changes } }; }, async all() { return { results: db.prepare(sql).all(...args) }; }, async first() { return db.prepare(sql).get(...args) ?? null; } }; return st; } };
// seed two other players
await onRequest({ request: new Request('http://x/api/board', { method: 'POST', body: JSON.stringify({ id: 'test-user-aaaa', name: 'Leyla', color: 1, xp: 120 }) }), env: { DB: D1 } });
await onRequest({ request: new Request('http://x/api/board', { method: 'POST', body: JSON.stringify({ id: 'test-user-bbbb', name: 'Murad', color: 2, xp: 15 }) }), env: { DB: D1 } });
// fake analytics history for the dashboard test
{ const sh = await import(path.join(root, 'functions/_shared.js')); await sh.ensureSchema(D1);
  const day = n => sh.bakuDay(Date.now() - n*864e5); let k = 0;
  for (let d = 13; d >= 0; d--) { const fresh = 2 + (d % 4); for (let i = 0; i < fresh; i++) { const uid = 'fake-user-' + (k++).toString().padStart(4,'0');
    db.prepare('INSERT INTO users VALUES (?,?,?,?,?)').run(uid, day(d), day(Math.max(0,d-2)), ['a1','a1','a2','b1'][k%4], k%3===0?1:0);
    for (let a = d; a >= Math.max(0, d - (k % 5)); a--) db.prepare('INSERT OR IGNORE INTO daily VALUES (?,?)').run(day(a), uid);
    const ls = ['a1-u1-l1','a1-u1-l2','a1-u1-l3','a1-u2-l1','a1-u2-l2'].slice(0, 1 + (k % 5));
    for (const l of ls) db.prepare('INSERT INTO events VALUES (?,?,?,?,?)').run(day(d), uid, 'lesson', l, Date.now());
    if (k % 2) db.prepare('INSERT INTO events VALUES (?,?,?,?,?)').run(day(d), uid, 'placement', ['a1','a2','b1'][k%3], Date.now());
    if (k % 4 === 0) db.prepare('INSERT INTO events VALUES (?,?,?,?,?)').run(day(d), uid, 'premium_view', null, Date.now());
    if (k % 3 === 0) db.prepare('INSERT INTO events VALUES (?,?,?,?,?)').run(day(d), uid, 'limit_hit', null, Date.now()); } } }
http.createServer(async (req, res) => {
  const u = new URL(req.url, 'http://localhost');
  if (u.pathname === '/__test/prevweek') { // keçən həftənin liqa nəticələrini əlavə et (medal testi üçün)
    const d = new Date(Date.now() + 4 * 3600e3 - 7 * 864e5); d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 6) % 7)); const wk = d.toISOString().slice(0, 10);
    db.exec("CREATE TABLE IF NOT EXISTS scores_v2 (id TEXT NOT NULL, week TEXT NOT NULL, league TEXT NOT NULL DEFAULT 'a1', name TEXT NOT NULL, color INTEGER NOT NULL DEFAULT 0, xp INTEGER NOT NULL DEFAULT 0, updated INTEGER NOT NULL, PRIMARY KEY (id, week))");
    [['medal-gold-0001', 500], ['medal-silv-0002', 300], ['medal-bron-0003', 200], ['medal-four-0004', 100]].forEach(([id, xp], i) => db.prepare('INSERT OR REPLACE INTO scores_v2 VALUES (?,?,?,?,?,?,?)').run(id, wk, 'a1', 'U' + i, 0, xp, i));
    try { db.exec('DELETE FROM medal_weeks'); } catch (e) {}
    res.writeHead(200, { 'content-type': 'application/json' }); res.end(JSON.stringify({ week: wk })); return; }
  if (u.pathname === '/__test/pushsub') { res.writeHead(200, { 'content-type': 'application/json' }); res.end(JSON.stringify(await fakeSub(u.searchParams.get('n') || 'x'))); return; }
  if (u.pathname === '/__test/pushlog') { res.writeHead(200, { 'content-type': 'application/json' }); res.end(JSON.stringify(pushLog)); return; }
  if (u.pathname === '/__test/ai') { if (u.searchParams.has('fail')) aiFail = u.searchParams.get('fail') === '1'; if (u.searchParams.has('mp3')) aiMp3 = u.searchParams.get('mp3') === '1'; if (u.searchParams.has('garble')) aiGarble = u.searchParams.get('garble') === '1'; res.writeHead(200, { 'content-type': 'application/json' }); res.end(JSON.stringify({ aiCalls, aiFail, lastModel })); return; }
  const m = u.pathname.match(/^\/api\/(board|premium|admin|track|ttscheck|tts|push|push-run)$/);
  if (m) {
    let body = ''; for await (const c of req) body += c;
    const r = await routes[m[1]]({ request: new Request('http://x' + req.url, { method: req.method, body: req.method === 'POST' ? body : undefined, headers: req.headers }), env: { DB: D1, AI, ADMIN_KEY: 'test-admin-key-123', PUSH_TEST: 1 } });
    res.writeHead(r.status, Object.fromEntries(r.headers)); res.end(Buffer.from(await r.arrayBuffer())); return;
  }
  let f = path.join(root, u.pathname === '/' ? 'index.html' : u.pathname);
  if (!fs.existsSync(f)) { res.writeHead(404); res.end(); return; }
  const ext = path.extname(f); res.writeHead(200, { 'content-type': { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.png': 'image/png', '.webmanifest': 'application/manifest+json' }[ext] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(8790, () => console.log('up'));
