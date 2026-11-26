// Addım — sənin dəyişə biləcəyin parametrlər
window.ADDIM_CONFIG = {
  price: '5,9 AZN',          // Premium qiyməti
  period: 'ay',              // ödəniş dövrü
  priceYear: '49,9 AZN',     // illik plan qiyməti (qənaət faizi avtomatik hesablanır)
  // Şimşəkciklər (enerji) — pulsuz istifadəçi üçün. Premium-da limitsizdir.
  energyMax: 20,             // tam dolu olanda neçə şimşəkcik
  energyRefillHours: 12,     // ilk xərcləmədən neçə saat sonra yenidən dolur
  energyPerLesson: 2,        // hər YENİ dərsin başlanğıcı neçə şimşəkcik aparır
  energyPerMistake: 1,       // hər səhv cavab neçə şimşəkcik aparır
  adEvery: 3,                // pulsuz istifadəçiyə hər neçə dərsdən bir Premium reklamı göstərilsin
  premiumXpBonus: 0.5,       // Premium-da dərs XP bonusu (0.5 = +50%)
  premiumXpLessons: 4,       // XP bonusu gündə neçə dərsə tətbiq olunsun (liqada ədalət üçün)

  // Kartla ödəniş məlumatı — boş qalarsa, tətbiq "tezliklə" yazır
  card: '4098 5844 7384 5319',
  cardHolder: 'Abdulla Abdullayev',
  whatsapp: '',              // məs: '994501234567' (yalnız rəqəmlər)
  instagram: 'career.m_'
};
