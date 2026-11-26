// Addım — səviyyələri genişləndirmək üçün ortaq qurucu (A2, B1, B2).
// Format a1-more.js ilə eynidir: [id, başlıq, [qayda başlığı, izah] | null, sözlər, cümlələr, əlavə suallar]
// Cümlələrin ilk 4-ü dərsin əsas tapşırıqlarına, qalanları dairənin əlavə nümunələrinə (EX_MORE) gedir.
window.EX_MORE = window.EX_MORE || {};
window.addMore = function (levelId, UNITS) {
  const pick = (arr, n, not) => arr.filter(x => !not.includes(x)).slice(0, n);
  const lower = s => s.toLowerCase();
  function build([id, title, note, words, sents, qs]) {
    const items = [];
    items.push({ t: 'learn', title: note ? 'Yeni sözlər və ifadələr' : title, body: 'Hər birinə toxun, dinlə və ucadan təkrar et. Sonra onları cümlələrdə görəcəksən.', ex: words });
    if (note) items.push({ t: 'learn', title: note[0], body: note[1], ex: sents.slice(0, 3) });
    const W = words.map(w => w[0]), A = words.map(w => w[1]);
    [0, 2].forEach(i => { if (words[i]) items.push({ t: 'mc', q: '«' + A[i] + '» ingiliscə necədir?', o: [W[i]].concat(pick(W, 3, [W[i]])), e: W[i] + ' — ' + A[i] + '.' }); });
    if (words[4]) items.push({ t: 'mc', q: '«' + W[4] + '» nə deməkdir?', o: [A[4]].concat(pick(A, 3, [A[4]])), e: W[4] + ' — ' + A[4] + '.' });
    (qs || []).forEach(q => items.push({ t: 'mc', q: q[0], o: q.slice(1, -1), e: q[q.length - 1] }));
    const S = sents.map(s => s[0]);
    const extras = s => { const t = new Set(s.toLowerCase().replace(/[.,!?]/g, '').split(/\s+/)); return W.map(lower).filter(w => !w.includes(' ') && !t.has(w)).slice(0, 2); };
    items.push({ t: 'listen', en: S[0], o: [S[0]].concat(pick(S.slice(0, 4), 2, [S[0]])) });
    items.push({ t: 'order', az: sents[1][1], en: S[1], extra: extras(S[1]) });
    items.push({ t: 'listen', en: S[2], o: [S[2]].concat(pick(S.slice(0, 4), 2, [S[2]])) });
    items.push({ t: 'dict', en: S[3], extra: extras(S[3]) });
    items.push({ t: 'speak', en: S[2], az: sents[2][1] });
    if (sents.length > 4) window.EX_MORE[id] = sents.slice(4);
    return { id, title, items };
  }
  const L = (window.COURSE || []).find(l => l.id === levelId); if (!L) return;
  for (const [uid, meta, lessons] of UNITS) {
    let u = L.units.find(x => x.id === uid);
    if (!u) { u = { id: uid, title: meta[0], grammar: meta[1], lessons: [] }; L.units.push(u); }
    const built = lessons.map(build);
    const at = u.lessons.findIndex(l => l.review);
    u.lessons.splice(at < 0 ? u.lessons.length : at, 0, ...built.filter(b => !u.lessons.some(l => l.id === b.id)));
    if (!u.lessons.some(l => l.review)) u.lessons.push({ id: uid + '-rev', title: 'Bölmə təkrarı', review: 1, items: [] });
  }
};
