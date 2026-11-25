// TTS ümumi köməkçiləri
// Tətbiqdəki ad → Aura-2 səsi (qadın / kişi)
export const AURA2 = { asteria: 'thalia', orion: 'apollo' };
// Açar: a3 = Aura-2 + Whisper ilə yoxlanmış səs
export const ttsKey = (h, voice) => 'a3-' + h + '-' + AURA2[voice];

export async function sha16(t) {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(t));
  return [...new Uint8Array(d)].map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 16);
}
export const toBytes = a => a instanceof Uint8Array ? a : a instanceof ArrayBuffer ? new Uint8Array(a) : new Uint8Array(a || []);


// Tələffüz düzəlişləri: ekranda yazılan mətn dəyişmir, yalnız səs modelinə gedən mətn.
// (Whisper yoxlaması göstərdi ki, model bu sözləri səhv oxuyur.)
export const SAY = [
  [/\bmanats\b/gi, 'mah-nahts'],
  [/\bmanat\b/gi, 'mah-naht'],
  [/\bLeyla\b/g, 'Layla'],
];
export const spoken = t => SAY.reduce((s, [re, to]) => s.replace(re, to), t);
// Sınaq üçün icazə verilən Aura-2 səsləri
export const TRY_VOICES = ['thalia', 'asteria', 'luna', 'athena', 'orion', 'apollo', 'arcas', 'orpheus', 'zeus'];

// Eşidilən mətni gözlənilənlə müqayisə (0..1). Rəqəmlər sözə çevrilir, yazılış variantları bərabərləşdirilir.
const ONES = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const TENS = ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
const numWords = n => n < 20 ? ONES[n] : n < 100 ? TENS[Math.floor(n / 10)] + (n % 10 ? ' ' + ONES[n % 10] : '') : n < 1000 ? ONES[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' ' + numWords(n % 100) : '') : String(n);
const VAR = { color: 'colour', okay: 'ok', sarah: 'sara', layla: 'leyla', favorite: 'favourite', center: 'centre', theater: 'theatre', organize: 'organise', analyze: 'analyse' };
export const words = t => String(t).toLowerCase().replace(/(\d+)%/g, '$1 percent').replace(/\d+/g, d => ' ' + numWords(+d) + ' ').replace(/[’`]/g, "'")
  .replace(/n't\b/g, ' not').replace(/'re\b/g, ' are').replace(/'m\b/g, ' am').replace(/'ll\b/g, ' will').replace(/'ve\b/g, ' have').replace(/'d\b/g, ' would').replace(/'s\b/g, ' is')
  .replace(/[^a-z ]/g, ' ').split(/\s+/).filter(Boolean).map(w => VAR[w] || w);
// Adlar (Leyla, Kamran…) və yerli sözlər (manat) Whisper üçün tanış deyil — onları müqayisəyə qatmırıq.
const SKIP = new Set(['manat', 'manats']);
function expectedWords(t) {
  const out = [];
  String(t).split(/(?<=[.!?])\s+/).forEach(sent => sent.split(/\s+/).forEach((w, i) => {
    const clean = w.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9']+$/g, '');
    if (i > 0 && /^[A-Z][a-z]/.test(clean) && !/^I('|$)/.test(clean)) return; // cümlə ortasında xüsusi ad
    words(w).forEach(x => { if (!SKIP.has(x)) out.push(x); });
  }));
  return out;
}
export function similarity(expected, heard) {
  const a = expectedWords(expected), b = words(heard); if (!a.length) return 1;
  const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
    dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  return dp[a.length][b.length] / a.length;
}
export const b64 = u8 => { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); };
export async function hear(env, audio) {
  const r = await env.AI.run('@cf/openai/whisper-large-v3-turbo', { audio: b64(audio), language: 'en' });
  return String((r && (r.text || (r.result && r.result.text))) || '').trim();
}
