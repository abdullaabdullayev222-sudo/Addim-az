// Addım — səsləndirilə bilən cümlələrin ağ siyahısını yaradır (functions/_tts_keys.js).
// Kurs dəyişəndə işə sal:  node tools/build-tts-keys.mjs
// Server yalnız bu siyahıdakı cümlələri süni intellektlə səsləndirir (limitin xərclənməsinin qarşısını alır).
import fs from 'node:fs'; import path from 'node:path'; import crypto from 'node:crypto'; import vm from 'node:vm';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const ctx = { window: {} }; vm.createContext(ctx);
for (const f of ['course.js', 'course-extra.js', 'a1-more.js', 'a1-examples.js', 'examples-more.js', 'more-lib.js', 'more-a2.js', 'more-a2b.js', 'more-b1.js', 'more-b1b.js', 'more-b2.js', 'more-b2b.js', 'more-c1a.js', 'more-c1b.js', 'more-c1c.js', 'practice.js', 'practice-more.js', 'practice-c1.js']) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx);
const texts = new Set();
for (const l of ctx.window.COURSE) for (const u of l.units) for (const x of (u.lessons || [])) for (const it of x.items) {
  if (it.t === 'learn') it.ex.forEach(r => texts.add(r[0].replace(/ \/ /g, ', ')));
  if (it.t === 'listen' || it.t === 'speak') texts.add(it.en);
  if (it.t === 'dict' || it.t === 'order') texts.add([].concat(it.en)[0]);
}
// A1 əlavə nümunələri (dairə dərsləri)
for (const k in ctx.window.A1_EX) ctx.window.A1_EX[k].forEach(e => texts.add(e[0]));
for (const k in ctx.window.EX_MORE) ctx.window.EX_MORE[k].forEach(e => texts.add(e[0]));
// Dinləmə epizodları (practice.js)
for (const e of ctx.window.PRAC.listening) e.lines.forEach(l => texts.add(l[1]));
// index.html-dəki danışıq məşqi (SP) və səs sınağı cümlələri
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
for (const name of ['SP']) {
  const m = html.match(new RegExp('const ' + name + '=(\\[\\[.*?\\]\\]);', 's'));
  if (!m) throw new Error(name + ' tapılmadı');
  const arr = vm.runInNewContext(m[1]);
  arr.forEach(r => texts.add(r[0]));
}
const VT = html.match(/VOICE_TEST="([^"]+)"/); if (!VT) throw new Error('VOICE_TEST tapılmadı'); texts.add(VT[1]);
const keys = [...texts].map(t => crypto.createHash('sha256').update(t).digest('hex').slice(0, 16)).sort();
fs.writeFileSync(path.join(root, 'functions/_tts_keys.js'),
  `// Avtomatik yaradılıb: node tools/build-tts-keys.mjs — əl ilə dəyişmə.\n// ${keys.length} cümlə\nexport const KEYS = new Set(${JSON.stringify(keys)});\n`);
console.log('TTS ağ siyahısı:', keys.length, 'cümlə,', [...texts].reduce((a, t) => a + t.length, 0), 'simvol');
