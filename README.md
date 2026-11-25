# Addım — İngilis dili

Azərbaycan dilində danışanlar üçün ingilis dili öyrənmə tətbiqi (PWA): gündəlik quiz, günəş seriyası, həftəlik liqa, reading, listening, speaking, writing.

- Statik sayt, build tələb etmir. Cloudflare Pages: framework "None", build command boş, output `/`.
- Liqa: `functions/api/board.js` (Pages Function). Cloudflare D1 bazası `DB` adı ilə layihəyə bağlanmalıdır.

- Kurs məzmunu: `course.js`. Yeni dərs əlavə etmək üçün bölməyə `lessons` massivi əlavə et (format faylın əvvəlində izah olunub).
