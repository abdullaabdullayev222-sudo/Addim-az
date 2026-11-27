// Addım — liqa boş görünməsin deyə virtual iştirakçılar.
// Hər liqada hər həftə 12 virtual iştirakçı (deterministik — eyni həftədə adlar və XP sabitdir).
// Hələlik real istifadəçilərlə yanaşı 12 virtual iştirakçı həmişə qalır. İstifadəçi çoxalanda sayını azaltmaq üçün aşağıdakı n sətrini dəyiş.
// Gündəlik XP: bir dərs 15–20 XP verir. Hər iştirakçının öz «minimum»u (5–15) və «maksimum»u (30–60) var — yəni gündə ~0.5–3 dərs.
const NAMES = ['Aysel M.', 'Elvin Q.', 'Nərmin H.', 'Tural Ə.', 'Günay R.', 'Orxan S.', 'Lalə K.', 'Rauf İ.', 'Səbinə C.', 'Kənan N.',
  'Fidan T.', 'Emil B.', 'Aytən Z.', 'Ramil V.', 'Nigar Ş.', 'Ülvi D.', 'Könül A.', 'Fərid Y.', 'Zəhra M.', 'Cavid H.', 'Sevinc Q.',
  'Elnur R.', 'Ləman S.', 'Anar K.', 'Gülnar İ.', 'Vüsal N.', 'Aydan T.', 'Nihad B.', 'Xədicə Z.', 'Ruslan V.', 'Arzu Ş.', 'Samir D.',
  'Pərvin A.', 'Toğrul Y.', 'İlahə M.', 'Kamil H.', 'Şəbnəm Q.', 'Rəşad R.', 'Mələk S.', 'Ceyhun K.', 'Aynur_22', 'tural.eng',
  'Leyla🌸', 'Murad 07', 'english_aysu', 'Kamran', 'Nurlan', 'Gülay', 'Babək', 'Səidə', 'Hüseyn', 'Röya', 'Elçin', 'Sona'];
const AV = ['cat', 'bear', 'frog', 'penguin', 'owl', 'fox', ''];
export const BOTS_PER_LEAGUE = 12;

const hash = s => { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.codePointAt(0), 16777619); return h >>> 0; };
const rng = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };

// week: 'YYYY-MM-DD' (bazar ertəsi, Bakı vaxtı). now: ms. Həftə bitibsə tam XP qaytarılır.
export function botsFor(week, league, realCount, now = Date.now()) {
  const n = BOTS_PER_LEAGUE; // hələlik real istifadəçi sayından asılı olmayaraq hamısı qalır (gələcəkdə: Math.max(0, BOTS_PER_LEAGUE - realCount))
  if (!n) return [];
  const start = Date.parse(week + 'T00:00:00Z') - 4 * 3600e3;
  const el = Math.max(0, now - start) / 864e5; // keçən gün sayı (kəsrli)
  const pick = rng(hash('names|' + week + '|' + league)), pool = NAMES.slice();
  for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(pick() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
  const out = [];
  for (let i = 0; i < BOTS_PER_LEAGUE; i++) {
    const r = rng(hash(week + '|' + league + '|' + i));
    const lo = 5 + Math.round(r() * 10), hi = 30 + Math.round(r() * 30);
    let xp = 0;
    for (let d = 0; d < 7; d++) {
      const day = lo + Math.round(r() * (hi - lo));
      if (d + 1 <= el) xp += day;
      else if (d < el) { const h = (el - d) * 24, f = Math.max(0, Math.min(1, (h - 8) / 14)); xp += Math.round(day * f); } // gün ərzində 08:00–22:00 arası toplanır
    }
    const updated = start + Math.min(el, 7) * 864e5 - (i + 1) * 61e3;
    out.push({ id: 'bot-' + league + '-' + i, name: pool[i], color: Math.floor(r() * 10), xp, updated, avatar: AV[Math.floor(r() * AV.length)], bot: true });
  }
  return out.slice(0, n);
}
