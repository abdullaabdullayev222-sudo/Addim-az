# Addım — İngilis dili

Azərbaycan dilində danışanlar üçün ingilis dili öyrənmə tətbiqi (PWA): gündəlik quiz, şimşək seriyası, həftəlik liqa, reading, listening, speaking, writing.

- Statik sayt, build tələb etmir. Cloudflare Pages: framework "None", build command boş, output `/`.
- Liqa: `functions/api/board.js` (Pages Function). Cloudflare D1 bazası `DB` adı ilə layihəyə bağlanmalıdır.

- Kurs məzmunu: `course.js`. Yeni dərs əlavə etmək üçün bölməyə `lessons` massivi əlavə et (format faylın əvvəlində izah olunub).
- Premium: `functions/api/premium.js` (aktivasiya kodu), `functions/api/admin.js` + `admin.html` (kod yaratmaq). Cloudflare-də `ADMIN_KEY` dəyişəni (ən azı 12 simvol) lazımdır.
- Qiymət, kart nömrəsi, əlaqə və gündəlik pulsuz dərs limiti: `config.js`.
- Avatarlar, ad rəngləri, formalar, çərçivələr: `avatars.js` (ilk 6 avatar pulsuz).

- Şimşəkciklər (enerji): `config.js`-də `energyMax` (20), `energyRefillHours` (12), `energyPerLesson` (2), `energyPerMistake` (1). Premium-da limitsizdir.
