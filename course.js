// Addım — kurs məzmunu (A1–B2)
// Tapşırıq növləri:
//  learn  — izah kartı: {t:'learn', title, body, ex:[[en, az], ...]}
//  mc     — test: {t:'mc', q, o:[DÜZGÜN, ...səhvlər], e}
//  order  — sözləri düz: {t:'order', az, en: 'Cümlə' | ['variant1','variant2'], extra:[artıq sözlər]}
//  listen — dinlə və seç: {t:'listen', en, o:[DÜZGÜN, ...səhvlər]}
// Bölmədə `lessons` yoxdursa, o bölmə "Tezliklə" kimi göstərilir.
window.COURSE = [
{ id:'a1', name:'A1', title:'Başlanğıc', color:'#16956a', units:[
  { id:'a1-u1', title:'Salamlaşma və tanışlıq', grammar:'to be: am / is / are', lessons:[
    { id:'a1-u1-l1', title:'Salam!', items:[
      {t:'learn', title:'Salamlaşma ifadələri', body:'«Hi» daha səmimidir, «Hello» həm rəsmi, həm qeyri-rəsmi işlənir. «Good night» yalnız ayrılanda və ya yatmağa gedəndə deyilir — görüşəndə yox.', ex:[['Hello / Hi','Salam'],['Good morning','Sabahınız xeyir'],['Good evening','Axşamınız xeyir'],['How are you?','Necəsən? / Necəsiniz?'],['Thank you','Təşəkkür edirəm'],['Goodbye / Bye','Sağ ol / Hələlik']]},
      {t:'mc', q:'«Sabahınız xeyir» ingiliscə necədir?', o:['Good morning','Good night','Good evening','Goodbye'], e:'Good morning — səhər salamı. Good evening — axşam salamı.'},
      {t:'mc', q:'Axşam biri ilə GÖRÜŞƏNDƏ nə deyirsən?', o:['Good evening','Good night','Good morning','Good afternoon'], e:'Görüşəndə «Good evening». «Good night» isə ayrılanda deyilir.'},
      {t:'listen', en:'Thank you very much.', o:['Thank you very much.','Nice to meet you.','See you tomorrow.']},
      {t:'order', az:'Salam, necəsən?', en:'Hi, how are you?', extra:['is','what']},
      {t:'mc', q:'«How are you?» sualına uyğun cavab hansıdır?', o:["I'm fine, thanks.","I'm 20.","I'm from Baku.",'Goodbye.'], e:'«How are you?» əhvalı soruşur: I\'m fine, thanks. / Not bad.'},
      {t:'order', az:'Sonra görüşərik!', en:'See you later!', extra:['tomorrow','good']}
    ]},
    { id:'a1-u1-l2', title:'Mən kiməm?', items:[
      {t:'learn', title:'«to be» feli: am / is / are', body:'Azərbaycan dilində «-am, -san, -dır» şəkilçiləri ingiliscədə ayrıca sözlə verilir: am, is, are. Danışıqda qısaldılır: I am → I\'m, she is → she\'s, they are → they\'re.', ex:[["I am (I'm) a student.",'Mən tələbəyəm.'],["You are (you're) my friend.",'Sən mənim dostumsan.'],["He / She is from Baku.",'O, Bakıdandır.'],["We / They are happy.",'Biz / Onlar xoşbəxtik / xoşbəxtdirlər.']]},
      {t:'mc', q:'I ___ a student.', o:['am','is','are'], e:'«I» ilə həmişə «am».'},
      {t:'mc', q:'She ___ from Ganja.', o:['is','am','are'], e:'He / she / it ilə «is».'},
      {t:'mc', q:'They ___ my friends.', o:['are','is','am'], e:'We / you / they ilə «are».'},
      {t:'order', az:'Mənim adım Orxandır.', en:'My name is Orkhan.', extra:['I','am']},
      {t:'order', az:'Mən Bakıdanam.', en:['I am from Baku.',"I'm from Baku."], extra:['is','in']},
      {t:'mc', q:'«Where are you from?» nə deməkdir?', o:['Haralısan? (Haradansan?)','Necəsən?','Neçə yaşın var?','Adın nədir?'], e:'Where — harada, from — -dan / -dən.'},
      {t:'listen', en:'Nice to meet you.', o:['Nice to meet you.','Nice to see you.','Nice day today.']}
    ]},
    { id:'a1-u1-l3', title:'Sual və inkar', items:[
      {t:'learn', title:'Sual və inkar: Are you…? / I\'m not', body:'Sual üçün feli əvvələ keçiririk: You are → Are you…? İnkar üçün «not» əlavə edirik: is not (isn\'t), are not (aren\'t), am not (I\'m not). Qısa cavabda «Yes, I\'m» demirik — «Yes, I am».', ex:[['Are you a student? — Yes, I am.','Tələbəsən? — Bəli.'],["Is he a doctor? — No, he isn't.",'O, həkimdir? — Xeyr.'],["I'm not tired.",'Yorğun deyiləm.'],["They aren't at home.",'Onlar evdə deyillər.']]},
      {t:'mc', q:'___ you a teacher?', o:['Are','Is','Am'], e:'«You» ilə «are», sualda əvvələ keçir: Are you…?'},
      {t:'mc', q:'Is she a doctor? — No, she ___.', o:["isn't","aren't",'not',"don't"], e:'She ilə inkar: is not → isn\'t.'},
      {t:'mc', q:'Hansı cavab düzgündür?', o:['Yes, I am.',"Yes, I'm.",'Yes, I is.','Yes, am I.'], e:'Qısa təsdiq cavabında qısaltma işlənmir: Yes, I am. / Yes, she is.'},
      {t:'order', az:'O (kişi) tələbə deyil.', en:['He is not a student.',"He isn't a student."], extra:['are',"don't"]},
      {t:'order', az:'Sən müəllimsən?', en:'Are you a teacher?', extra:['Is','do']},
      {t:'listen', en:'Is she your sister?', o:['Is she your sister?','Is he your brother?','Are they your sisters?']}
    ]}
  ]},
  { id:'a1-u2', title:'Ailə', grammar:'my / your / his / her · have / has', lessons:[
    { id:'a1-u2-l1', title:'Ailə üzvləri', items:[
      {t:'learn', title:'Ailə sözləri', body:'Diqqət: «parents» — valideynlər (ana və ata), «relatives» — qohumlar.', ex:[['mother / father','ana / ata'],['sister / brother','bacı / qardaş'],['parents','valideynlər'],['grandmother / grandfather','nənə / baba'],['son / daughter','oğul / qız (övlad)'],['husband / wife','ər / arvad (həyat yoldaşı)']]},
      {t:'mc', q:'«Qardaş» ingiliscə necədir?', o:['brother','sister','son','father'], e:'Brother — qardaş, sister — bacı.'},
      {t:'mc', q:'«Parents» nə deməkdir?', o:['valideynlər','qohumlar','uşaqlar','nənə və baba'], e:'Parents = mother + father.'},
      {t:'mc', q:"My mother's mother is my ___.", o:['grandmother','aunt','sister','daughter'], e:'Ananın anası — nənə: grandmother.'},
      {t:'order', az:'Bu mənim bacımdır.', en:'This is my sister.', extra:['these','her']},
      {t:'listen', en:'My brother is a doctor.', o:['My brother is a doctor.','My mother is a doctor.','My brother is a teacher.']},
      {t:'order', az:'Onun (qadının) atası müəllimdir.', en:'Her father is a teacher.', extra:['His','she']}
    ]},
    { id:'a1-u2-l2', title:'Mənim, sənin, onun', items:[
      {t:'learn', title:'Yiyəlik sözləri', body:'Azərbaycan dilində «onun» bir sözdür, ingiliscədə isə cinsə görə dəyişir: kişi üçün HIS, qadın üçün HER, əşya və heyvan üçün ITS. Bu, ən çox edilən səhvlərdəndir.', ex:[['my','mənim'],['your','sənin / sizin'],['his','onun (kişi)'],['her','onun (qadın)'],['its','onun (əşya, heyvan)'],['our / their','bizim / onların']]},
      {t:'mc', q:'Ali is my friend. ___ sister is a student.', o:['His','Her','Its','Their'], e:'Əli kişidir, ona görə «his sister».'},
      {t:'mc', q:'Leyla loves ___ job.', o:['her','his','she','their'], e:'Leyla qadındır: her job.'},
      {t:'mc', q:'We love ___ city.', o:['our','we','us','their'], e:'We → our (bizim).'},
      {t:'mc', q:'They live with ___ parents.', o:['their','they','there','them'], e:'Their — onların. «There» (orada) ilə qarışdırma — tələffüzləri eynidir.'},
      {t:'order', az:'Onların evi böyükdür.', en:'Their house is big.', extra:['They','small']},
      {t:'order', az:'Sənin adın nədir?', en:['What is your name?',"What's your name?"], extra:['you','how']}
    ]},
    { id:'a1-u2-l3', title:'have / has', items:[
      {t:'learn', title:'«var» = have / has', body:'«Mənim … var» ingiliscədə çox vaxt have ilə deyilir: I have a brother. He / she / it ilə «has». Amma yaş have ilə deyilmir: I am 20 (I have 20 years — səhvdir).', ex:[['I have two brothers.','Mənim iki qardaşım var.'],['She has a cat.','Onun pişiyi var.'],['We have a big family.','Bizim böyük ailəmiz var.'],['Do you have a car? — Yes, I do.','Maşının var? — Bəli.']]},
      {t:'mc', q:'She ___ two children.', o:['has','have','is','are'], e:'He / she / it ilə «has».'},
      {t:'mc', q:'We ___ a big family.', o:['have','has','are','is'], e:'We ilə «have».'},
      {t:'mc', q:'«Mənim bir bacım var» — düzgün tərcümə:', o:['I have one sister.','I has one sister.','My sister have one.','There is my one sister.'], e:'I + have: I have one sister.'},
      {t:'mc', q:'Do you have any brothers? — Yes, I ___.', o:['do','have','am','has'], e:'«Do you…?» sualına qısa cavab: Yes, I do. / No, I don\'t.'},
      {t:'order', az:'Onun (kişinin) bir pişiyi var.', en:'He has a cat.', extra:['have','she']},
      {t:'listen', en:'I have three cousins.', o:['I have three cousins.','I have two cousins.','I had three cousins.']}
    ]}
  ]},
  { id:'a1-u3', title:'Gündəlik həyat', grammar:'Present Simple', lessons:[
    { id:'a1-u3-l1', title:'Hər gün', items:[
      {t:'learn', title:'Present Simple: vərdişlər', body:'Hər gün, adətən etdiyimiz işlər Present Simple ilə deyilir. He / she / it ilə felə -s əlavə olunur: I work → she works.', ex:[['I get up at seven.','Saat yeddidə oyanıram.'],['She has breakfast at eight.','O, saat səkkizdə səhər yeməyi yeyir.'],['We go to university by bus.','Universitetə avtobusla gedirik.'],['He goes to bed at eleven.','O, saat on birdə yatır.']]},
      {t:'mc', q:'I ___ up at seven every day.', o:['get','gets','getting','got'], e:'I ilə fel -s almır: I get up.'},
      {t:'mc', q:'She ___ breakfast at 8.', o:['has','have','haves','having'], e:'She ilə «have» → «has».'},
      {t:'mc', q:'«Go to bed» nə deməkdir?', o:['yatmağa getmək','çarpayı almaq','evə getmək','oyanmaq'], e:'Go to bed — yatmaq (yatağa getmək).'},
      {t:'order', az:'Mən universitetə avtobusla gedirəm.', en:'I go to university by bus.', extra:['goes','on']},
      {t:'order', az:'O (qadın) hər gün ingilis dili öyrənir.', en:'She studies English every day.', extra:['study','the']},
      {t:'listen', en:'He goes to work at nine.', o:['He goes to work at nine.','He goes to work at five.','We go to work at nine.']}
    ]},
    { id:'a1-u3-l2', title:'Tezlik sözləri', items:[
      {t:'learn', title:'always, usually, sometimes, never', body:'Tezlik sözləri əsas feldən ƏVVƏL gəlir: I always drink tea. Amma «be» felindən sonra: She is always late. Yazılış: watch → watches, study → studies, go → goes.', ex:[['always','həmişə'],['usually','adətən'],['often','tez-tez'],['sometimes','bəzən'],['never','heç vaxt'],['He never drinks coffee.','O, heç vaxt qəhvə içmir.']]},
      {t:'mc', q:'He ___ TV in the evening.', o:['watches','watchs','watch','watching'], e:'-ch, -sh, -s, -x, -o ilə bitən fellərə -es: watches, goes.'},
      {t:'mc', q:'My sister ___ English.', o:['studies','studys','study','studyes'], e:'Samit + y → -ies: study → studies.'},
      {t:'mc', q:'Hansı cümlə düzgündür?', o:['I always drink tea in the morning.','I drink always tea in the morning.','Always I drink tea morning.','I drink tea always in morning.'], e:'Tezlik sözü əsas feldən əvvəl: I always drink.'},
      {t:'mc', q:'«Never» nə deməkdir?', o:['heç vaxt','həmişə','bəzən','tez-tez'], e:'Never artıq inkar mənası verir, «don\'t» əlavə etmirik.'},
      {t:'order', az:'Biz bəzən kinoya gedirik.', en:'We sometimes go to the cinema.', extra:['goes','always']},
      {t:'order', az:'O (kişi) heç vaxt qəhvə içmir.', en:'He never drinks coffee.', extra:["doesn't",'drink']}
    ]},
    { id:'a1-u3-l3', title:'do / does', items:[
      {t:'learn', title:'İnkar və sual: do / does', body:'İnkar: I don\'t (do not) like…, she doesn\'t (does not) like… Sual: Do you…? Does he…? Diqqət: does / doesn\'t-dən sonra fel -s almır — «-s» artıq does-dadır.', ex:[["I don't like coffee.",'Qəhvə sevmirəm.'],["She doesn't work on Sundays.",'O, bazar günləri işləmir.'],['Do you speak English? — Yes, I do.','İngiliscə danışırsan? — Bəli.'],["Does he play football? — No, he doesn't.",'O, futbol oynayır? — Xeyr.']]},
      {t:'mc', q:'She ___ like coffee.', o:["doesn't","don't","isn't",'not'], e:'He / she / it ilə inkar: doesn\'t.'},
      {t:'mc', q:'___ they live in Baku?', o:['Do','Does','Are','Is'], e:'They ilə sual: Do they…?'},
      {t:'mc', q:'Does he play football? — Yes, he ___.', o:['does','do','plays','is'], e:'Does sualına qısa cavab: Yes, he does.'},
      {t:'mc', q:'Hansı düzgündür?', o:["He doesn't work on Sundays.","He doesn't works on Sundays.","He don't work on Sundays.",'He not work on Sundays.'], e:'Doesn\'t + felin əsas forması (work).'},
      {t:'order', az:'Sən harada işləyirsən?', en:'Where do you work?', extra:['does','are']},
      {t:'listen', en:'Do you speak English?', o:['Do you speak English?','Does she speak English?','Do you study English?']}
    ]}
  ]},
  { id:'a1-u4', title:'Yemək və içki', grammar:'a / an · some / any · much / many', lessons:[
    { id:'a1-u4-l1', title:'Yeməklər', items:[
      {t:'learn', title:'Sayılan və sayılmayan isimlər', body:'Sayılanlar (apple → apples, egg → eggs) tək halda a / an ilə işlənir. Sayılmayanlar (water, rice, bread, cheese) cəm -s almır və a / an ilə işlənmir: some water, a glass of water.', ex:[['bread','çörək'],['water','su'],['an apple / two apples','bir alma / iki alma'],['an egg','bir yumurta'],['rice','düyü'],['cheese','pendir']]},
      {t:'mc', q:'«Çörək» ingiliscə necədir?', o:['bread','bead','butter','break'], e:'Bread — çörək. Butter — kərə yağı.'},
      {t:'mc', q:'Hansı sayılmayan isimdir?', o:['rice','apple','egg','banana'], e:'Rice (düyü) sayılmır: some rice, a bowl of rice.'},
      {t:'mc', q:"I'd like ___ egg, please.", o:['an','a','some','any'], e:'Egg sait səslə başlayır: an egg.'},
      {t:'order', az:'Bir stəkan su ala bilərəm?', en:'Can I have a glass of water?', extra:['cup','an']},
      {t:'listen', en:"I'd like some rice, please.", o:["I'd like some rice, please.","I'd like some tea, please.",'I like rice.']},
      {t:'order', az:'Mən pendir sevirəm.', en:'I like cheese.', extra:['likes','a']}
    ]},
    { id:'a1-u4-l2', title:'some / any', items:[
      {t:'learn', title:'some və any', body:'SOME — təsdiq cümlələrində: There is some milk. ANY — inkar və suallarda: There isn\'t any milk. Is there any milk? İstisna: təklif və xahişdə «some»: Would you like some tea?', ex:[['There is some milk.','Bir az süd var.'],["There isn't any sugar.",'Heç şəkər yoxdur.'],['Are there any apples?','Alma var?'],['Would you like some tea?','Çay istəyirsən?']]},
      {t:'mc', q:"There isn't ___ sugar.", o:['any','some','a','many'], e:'İnkarda «any».'},
      {t:'mc', q:'Would you like ___ coffee?', o:['some','any','a','many'], e:'Təklifdə sual olsa da «some» işlənir.'},
      {t:'mc', q:'Are there ___ apples?', o:['any','some','a','much'], e:'Adi sualda «any».'},
      {t:'mc', q:'I have ___ friends in London.', o:['some','any','a','much'], e:'Təsdiq cümlədə «some».'},
      {t:'order', az:'Soyuducuda süd yoxdur.', en:["There isn't any milk in the fridge.",'There is no milk in the fridge.'], extra:['some','are']},
      {t:'listen', en:'Is there any bread?', o:['Is there any bread?','Is there any water?','There is some bread.']}
    ]},
    { id:'a1-u4-l3', title:'Kafedə', items:[
      {t:'learn', title:'How much / How many', body:'HOW MANY — sayılanlar üçün: How many eggs? HOW MUCH — sayılmayanlar və qiymət üçün: How much water? How much is it? (Neçəyədir?)', ex:[['How many people?','Neçə nəfər?'],['How much is this?','Bu neçəyədir?'],["I'd like a tea, please.",'Bir çay istərdim.'],['Can I have the bill, please?','Hesabı gətirə bilərsiniz?']]},
      {t:'mc', q:'How ___ eggs do we need?', o:['many','much','any','some'], e:'Eggs sayılır: how many.'},
      {t:'mc', q:'How ___ is this coffee? (qiymət)', o:['much','many','cost','price'], e:'Qiymət soruşanda: How much is it?'},
      {t:'mc', q:'«Can I have the bill, please?» nə deməkdir?', o:['Hesabı gətirə bilərsiniz?','Menyunu verin.','Masa sifariş etmək istəyirəm.','Bu neçəyədir?'], e:'Bill — hesab (restoranda). Amerikada «check» da deyilir.'},
      {t:'order', az:'Bu neçəyədir?', en:['How much is this?','How much is it?'], extra:['many','are']},
      {t:'order', az:'Mən bir az çay istərdim.', en:["I'd like some tea.",'I would like some tea.'], extra:['want','any']},
      {t:'listen', en:'How many people are there?', o:['How many people are there?','How much money is there?','How many people are here?']}
    ]}
  ]},
  { id:'a1-u5', title:'Ev və şəhər', grammar:'there is / there are · in, on, under, next to' },
  { id:'a1-u6', title:'Vaxt və tarix', grammar:'saat, günlər, aylar · in / on / at' },
  { id:'a1-u7', title:'Bacarıqlar', grammar:'can / can\'t' },
  { id:'a1-u8', title:'İndi nə edirsən?', grammar:'Present Continuous' }
]},
{ id:'a2', name:'A2', title:'Elementar', color:'#2f7de1', units:[
  { id:'a2-u1', title:'Keçən həftə', grammar:'Past Simple (qaydalı fellər)' },
  { id:'a2-u2', title:'Səyahət', grammar:'Past Simple (qaydasız fellər)' },
  { id:'a2-u3', title:'Alış-veriş', grammar:'Müqayisə: bigger, the biggest' },
  { id:'a2-u4', title:'Planlar', grammar:'be going to · Present Continuous (gələcək)' },
  { id:'a2-u5', title:'Sağlamlıq', grammar:'should / shouldn\'t' },
  { id:'a2-u6', title:'Təcrübələr', grammar:'Present Perfect: ever / never' },
  { id:'a2-u7', title:'Tələbə həyatı', grammar:'must / have to' },
  { id:'a2-u8', title:'Hekayələr', grammar:'Past Continuous' }
]},
{ id:'b1', name:'B1', title:'Orta', color:'#7b56d6', units:[
  { id:'b1-u1', title:'Həyat təcrübəsi', grammar:'Present Perfect və Past Simple · for / since' },
  { id:'b1-u2', title:'Gələcək', grammar:'will və going to · proqnozlar' },
  { id:'b1-u3', title:'Şərt cümlələri', grammar:'First və Second Conditional' },
  { id:'b1-u4', title:'Media və xəbərlər', grammar:'Passive voice (indiki və keçmiş)' },
  { id:'b1-u5', title:'İş və karyera', grammar:'Gerund və infinitive' },
  { id:'b1-u6', title:'Söhbəti ötürmək', grammar:'Reported speech' },
  { id:'b1-u7', title:'Münasibətlər', grammar:'Relative clauses: who / which / that' },
  { id:'b1-u8', title:'Keçmiş vərdişlər', grammar:'used to / would' }
]},
{ id:'b2', name:'B2', title:'Orta-yuxarı', color:'#e0662f', units:[
  { id:'b2-u1', title:'Peşmançılıq və arzular', grammar:'Third Conditional · I wish / If only' },
  { id:'b2-u2', title:'Ehtimallar', grammar:'must / might / can\'t have done' },
  { id:'b2-u3', title:'Akademik yazı', grammar:'however, although, despite, whereas' },
  { id:'b2-u4', title:'Müzakirə və debat', grammar:'Fikir bildirmə, rəsmi üslub' },
  { id:'b2-u5', title:'İş müsahibəsi', grammar:'Özünü təqdim, STAR cavabları' },
  { id:'b2-u6', title:'Mürəkkəb passiv', grammar:'have something done · It is said that…' },
  { id:'b2-u7', title:'Phrasal verbs və idiomlar', grammar:'look into, put off, break the ice…' },
  { id:'b2-u8', title:'Təqdimat bacarıqları', grammar:'Təqdimat dili, keçid ifadələri' }
]}
];
