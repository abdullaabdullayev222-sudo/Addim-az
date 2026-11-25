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
  { id:'a1-u5', title:'Ev və şəhər', grammar:'there is / there are · in, on, under, next to', lessons:[
    { id:'a1-u5-l1', title:'Mənim evim', items:[
      {t:'learn', title:'there is / there are = «var»', body:'Bir şeyin harada OLDUĞUNU deyəndə: tək isimlə THERE IS, cəm isimlə THERE ARE. İnkar: there isn\'t / there aren\'t. Sual: Is there…? Are there…?', ex:[['There is a sofa in the living room.','Qonaq otağında divan var.'],['There are two bedrooms.','İki yataq otağı var.'],["Is there a garden? — No, there isn't.",'Bağ var? — Xeyr, yoxdur.'],['kitchen / bathroom','mətbəx / hamam otağı']]},
      {t:'mc', q:'«Mətbəx» ingiliscə necədir?', o:['kitchen','chicken','kitten','bathroom'], e:'Kitchen — mətbəx. Chicken (toyuq) və kitten (pişik balası) ilə qarışdırma.'},
      {t:'mc', q:'There ___ two windows in my room.', o:['are','is','be','am'], e:'Windows cəmdir: there are.'},
      {t:'mc', q:'___ there a bathroom upstairs?', o:['Is','Are','Do','Does'], e:'Tək isim (a bathroom) ilə sual: Is there…?'},
      {t:'order', az:'Mənim otağımda bir çarpayı var.', en:'There is a bed in my room.', extra:['are','on']},
      {t:'listen', en:'There are three chairs in the kitchen.', o:['There are three chairs in the kitchen.','There are two chairs in the kitchen.','There is a chair in the kitchen.']},
      {t:'order', az:'Bağ yoxdur.', en:["There isn't a garden.",'There is no garden.'], extra:["aren't",'any']}
    ]},
    { id:'a1-u5-l2', title:'Harada?', items:[
      {t:'learn', title:'Yer bildirən sözlər', body:'Azərbaycan dilində yer şəkilçi ilə bildirilir (masanın üstündə), ingiliscədə isə sözdən ƏVVƏL gələn kiçik sözlə: on the table.', ex:[['in the box','qutunun içində'],['on the table','masanın üstündə'],['under the bed','çarpayının altında'],['next to the door','qapının yanında'],['between A and B','A ilə B arasında'],['behind / in front of','arxasında / qarşısında']]},
      {t:'mc', q:'The cat is ___ the table. (masanın altında)', o:['under','on','in','behind'], e:'Under — altında.'},
      {t:'mc', q:'«Next to» nə deməkdir?', o:['yanında','arxasında','qarşısında','içində'], e:'Next to the window — pəncərənin yanında.'},
      {t:'mc', q:'The keys are ___ my bag. (çantanın içində)', o:['in','on','at','under'], e:'İçində — in.'},
      {t:'mc', q:'The bank is ___ the café and the school.', o:['between','next','behind of','among of'], e:'İki şeyin arasında: between A and B.'},
      {t:'order', az:'Telefonum masanın üstündədir.', en:'My phone is on the table.', extra:['in','are']},
      {t:'listen', en:'The park is behind the hospital.', o:['The park is behind the hospital.','The park is next to the hospital.','The bank is behind the hospital.']}
    ]},
    { id:'a1-u5-l3', title:'Şəhərdə', items:[
      {t:'learn', title:'Yol soruşmaq', body:'Yad adamdan nəsə soruşanda «Excuse me» (Bağışlayın) ilə başla. Cavabda: Go straight (düz get), Turn left / right (sola / sağa dön), It\'s on the left (solda).', ex:[['Excuse me, where is the bank?','Bağışlayın, bank haradadır?'],['Go straight.','Düz gedin.'],['Turn left.','Sola dönün.'],["It's on the right.",'Sağ tərəfdədir.'],['pharmacy','aptek'],['bus stop','avtobus dayanacağı']]},
      {t:'mc', q:'«Aptek» ingiliscə necədir?', o:['pharmacy','farmer','bakery','library'], e:'Pharmacy — aptek (Britaniyada chemist\'s da deyilir). Library — kitabxana.'},
      {t:'mc', q:'«Turn left» nə deməkdir?', o:['sola dön','sağa dön','düz get','geri qayıt'], e:'Left — sol, right — sağ.'},
      {t:'mc', q:'Excuse me, ___ is the bus stop?', o:['where','what','who','when'], e:'Yer soruşanda: where (harada).'},
      {t:'order', az:'Bağışlayın, metro haradadır?', en:'Excuse me, where is the metro?', extra:['what','are']},
      {t:'listen', en:'Go straight and turn right.', o:['Go straight and turn right.','Go straight and turn left.','Turn right at the bank.']},
      {t:'mc', q:"It's ___ the left.", o:['on','in','at','to'], e:'Sabit ifadə: on the left / on the right.'}
    ]}
  ]},
  { id:'a1-u6', title:'Vaxt və tarix', grammar:'saat, günlər, aylar · in / on / at', lessons:[
    { id:'a1-u6-l1', title:'Saat neçədir?', items:[
      {t:'learn', title:'Saatı demək', body:'PAST — «keçib», TO — «qalıb». Diqqət: Azərbaycan dilində 3:30 «dördün yarısı» deyilir, ingiliscədə isə «half past three» — yəni üçdən yarım keçib. Bu, çox edilən səhvdir.', ex:[['What time is it?','Saat neçədir?'],["It's seven o'clock. (7:00)",'Saat yeddidir.'],["It's half past three. (3:30)",'Dördün yarısıdır.'],["It's quarter past five. (5:15)",'Beşi on beş dəqiqə keçir.'],["It's quarter to nine. (8:45)",'Doqquza on beş dəqiqə qalır.']]},
      {t:'mc', q:'3:30 ingiliscə necə deyilir?', o:['half past three','half past four','half to four','three and half past'], e:'Half past three — üçdən yarım keçib (Azərbaycan dilində: dördün yarısı).'},
      {t:'mc', q:'8:45 ingiliscə necə deyilir?', o:['quarter to nine','quarter past eight','quarter to eight','nine to quarter'], e:'Doqquza 15 dəqiqə qalıb: quarter to nine.'},
      {t:'mc', q:'«What time is it?» nə deməkdir?', o:['Saat neçədir?','Nə vaxtdır?','Vaxtın var?','Neçə saatdır?'], e:'«Neçə saatdır?» (müddət) — How long…?'},
      {t:'order', az:'Saat yeddidir.', en:["It's seven o'clock.","It is seven o'clock."], extra:['at','hours']},
      {t:'listen', en:"It's quarter past ten.", o:["It's quarter past ten.","It's quarter to ten.","It's half past ten."]},
      {t:'mc', q:'The film starts ___ 8 pm.', o:['at','in','on','to'], e:'Saatla: at 8 pm.'}
    ]},
    { id:'a1-u6-l2', title:'Günlər və aylar', items:[
      {t:'learn', title:'Həftənin günləri', body:'İngiliscədə gün və ay adları HƏMİŞƏ böyük hərflə yazılır: Monday, May.', ex:[['Monday','bazar ertəsi'],['Tuesday','çərşənbə axşamı'],['Wednesday','çərşənbə'],['Thursday','cümə axşamı'],['Friday','cümə'],['Saturday / Sunday','şənbə / bazar']]},
      {t:'mc', q:'«Çərşənbə» ingiliscə necədir?', o:['Wednesday','Tuesday','Thursday','Saturday'], e:'Wednesday — «Wenzdey» kimi oxunur, «d» səslənmir.'},
      {t:'mc', q:'«Cümə axşamı» ingiliscə necədir?', o:['Thursday','Tuesday','Friday','Wednesday'], e:'Tuesday — çərşənbə axşamı, Thursday — cümə axşamı. Tez qarışdırılır!'},
      {t:'mc', q:'Hansı düzgün yazılıb?', o:['I was born in May.','I was born in may.','i was born in May.','I was born on may.'], e:'Ay adı və «I» həmişə böyük hərflə.'},
      {t:'mc', q:'«Sunday» hansı gündür?', o:['bazar','şənbə','bazar ertəsi','cümə'], e:'Sunday — bazar, Saturday — şənbə.'},
      {t:'order', az:'Bazar ertələri işə gedirəm.', en:['I go to work on Mondays.','On Mondays I go to work.'], extra:['in','at']},
      {t:'listen', en:'My birthday is in July.', o:['My birthday is in July.','My birthday is in June.','My birthday is on Monday.']}
    ]},
    { id:'a1-u6-l3', title:'in / on / at', items:[
      {t:'learn', title:'Zaman bildirən in / on / at', body:'AT — dəqiq saat: at 7 o\'clock, at night. ON — günlər və tarixlər: on Monday, on 5 May. IN — aylar, illər, fəsillər, günün hissələri: in June, in 2025, in summer, in the morning. İstisna: in the evening, amma at night.', ex:[['at 7 o\'clock','saat yeddidə'],['on Friday','cümə günü'],['in March','martda'],['in 2001','2001-ci ildə'],['in the morning','səhər'],['at night','gecə']]},
      {t:'mc', q:'I was born ___ 2001.', o:['in','on','at','to'], e:'İllərlə: in.'},
      {t:'mc', q:'The meeting is ___ Friday.', o:['on','in','at','to'], e:'Günlərlə: on.'},
      {t:'mc', q:'I wake up ___ 6:30.', o:['at','in','on','to'], e:'Saatla: at.'},
      {t:'mc', q:'We go to the sea ___ summer.', o:['in','on','at','to'], e:'Fəsillərlə: in.'},
      {t:'mc', q:'She studies ___ the evening.', o:['in','on','at','to'], e:'In the morning / afternoon / evening. Amma: at night.'},
      {t:'order', az:'Mənim ad günüm mayın beşindədir.', en:'My birthday is on the fifth of May.', extra:['in','at']}
    ]}
  ]},
  { id:'a1-u7', title:'Bacarıqlar', grammar:'can / can\'t', lessons:[
    { id:'a1-u7-l1', title:'Nə edə bilirsən?', items:[
      {t:'learn', title:'can = bacarmaq', body:'CAN bütün şəxslər üçün eynidir və ondan sonra fel əsas formada gəlir: she can swim (cans və ya can to swim yox). İnkar: can\'t (cannot).', ex:[['I can speak English.','İngiliscə danışa bilirəm.'],["She can't drive.",'O, maşın sürə bilmir.'],['Can you cook? — Yes, I can.','Yemək bişirə bilirsən? — Bəli.'],["Can he swim? — No, he can't.",'O, üzə bilir? — Xeyr.']]},
      {t:'mc', q:'She ___ play the guitar.', o:['can','cans','can to','is can'], e:'Can heç vaxt dəyişmir və «to» ilə işlənmir.'},
      {t:'mc', q:'Hansı düzgündür?', o:['He can swim.','He can swims.','He cans swim.','He can to swim.'], e:'Can + felin əsas forması.'},
      {t:'mc', q:'Can you drive? — No, I ___.', o:["can't","don't",'am not','not can'], e:'Can sualına qısa cavab: Yes, I can. / No, I can\'t.'},
      {t:'order', az:'Mən üzə bilirəm.', en:'I can swim.', extra:['swims','to']},
      {t:'order', az:'O (qadın) maşın sürə bilmir.', en:["She can't drive.",'She cannot drive.'], extra:['drives',"don't"]},
      {t:'listen', en:'Can you speak Russian?', o:['Can you speak Russian?','Can you speak English?','Can she speak Russian?']}
    ]},
    { id:'a1-u7-l2', title:'Xahiş və icazə', items:[
      {t:'learn', title:'Can I…? / Could you…?', body:'CAN I…? — icazə istəmək. CAN YOU…? — xahiş etmək. COULD YOU…? — daha nəzakətli xahiş (müəllimə, müştəriyə, rəhbərə). «Please» əlavə etmək ingilis dilində çox vacibdir.', ex:[['Can I open the window?','Pəncərəni aça bilərəm?'],['Can you help me?','Mənə kömək edə bilərsən?'],['Could you repeat that, please?','Zəhmət olmasa, təkrar edə bilərsiniz?'],['Sure! / Of course.','Əlbəttə!']]},
      {t:'mc', q:'Müəllimdən icazə istə: «___ I go out, please?»', o:['Can','Do','Am','Does'], e:'İcazə: Can I…? (daha nəzakətli: May I…?)'},
      {t:'mc', q:'Hansı ən nəzakətli xahişdir?', o:['Could you help me, please?','Help me!','You help me.','Can help me?'], e:'Could you… please? — ən nəzakətli forma.'},
      {t:'mc', q:'«Of course» nə deməkdir?', o:['Əlbəttə','Bəlkə','Heç vaxt','Bilmirəm'], e:'Of course / Sure — əlbəttə.'},
      {t:'order', az:'Mənə kömək edə bilərsən?', en:['Can you help me?','Could you help me?'], extra:['do','helps']},
      {t:'order', az:'Pəncərəni aça bilərəm?', en:'Can I open the window?', extra:['opens','do']},
      {t:'listen', en:'Could you repeat that, please?', o:['Could you repeat that, please?','Could you read that, please?','Can you repeat it, please?']}
    ]},
    { id:'a1-u7-l3', title:'Bacarıqlarını de', items:[
      {t:'learn', title:'Bacarıqlar haqqında danışmaq', body:'Müsahibədə və CV-də bacarıqlarını sadə cümlələrlə de: I can… Bir işi yaxşı bacarırsansa: I\'m good at + isim / -ing: I\'m good at maths. I\'m good at solving problems.', ex:[['I can use Excel.','Excel-dən istifadə edə bilirəm.'],['I can work in a team.','Komandada işləyə bilirəm.'],['I can speak three languages.','Üç dildə danışa bilirəm.'],["I'm good at solving problems.",'Problem həll etməyi bacarıram.']]},
      {t:'mc', q:'«Work in a team» nə deməkdir?', o:['komandada işləmək','tək işləmək','iş axtarmaq','işə getmək'], e:'Team — komanda. Teamwork — komanda işi.'},
      {t:'mc', q:"I'm good ___ drawing.", o:['at','in','on','for'], e:'Sabit birləşmə: good at.'},
      {t:'mc', q:'«Mən üç dil bilirəm» — təbii tərcümə:', o:['I can speak three languages.','I know three language.','I can three languages speak.','I am speak three languages.'], e:'Dil «bilmək» çox vaxt «can speak» ilə deyilir. Languages — cəm.'},
      {t:'order', az:'Mən Excel-dən istifadə edə bilirəm.', en:'I can use Excel.', extra:['using','to']},
      {t:'listen', en:"I'm good at solving problems.", o:["I'm good at solving problems.","I'm good at solving puzzles.","I'm not good at problems."]},
      {t:'mc', q:'«What can you do?» sualına uyğun cavab:', o:['I can cook and drive.','Yes, I can.',"I'm fine.",'I do my homework.'], e:'What can you do? — Nə edə bilirsən? Cavab: I can…'}
    ]}
  ]},
  { id:'a1-u8', title:'İndi nə edirsən?', grammar:'Present Continuous', lessons:[
    { id:'a1-u8-l1', title:'Bu an', items:[
      {t:'learn', title:'Present Continuous: indi baş verən', body:'Danışdığımız anda baş verən hərəkət: am / is / are + fel-ING. Azərbaycan dilindəki «oxuyuram, işləyir» kimi.', ex:[["I'm reading a book now.",'İndi kitab oxuyuram.'],['She is working.','O, işləyir.'],['They are playing football.','Onlar futbol oynayırlar.'],["Look! It's raining.",'Bax! Yağış yağır.']]},
      {t:'mc', q:'Look! It ___ raining.', o:['is','are','am','does'], e:'It ilə «is»: It is raining.'},
      {t:'mc', q:'I ___ watching TV now.', o:['am','is','are','do'], e:'I ilə «am».'},
      {t:'mc', q:'They ___ playing football at the moment.', o:['are','is','am','do'], e:'They ilə «are».'},
      {t:'order', az:'Mən indi kitab oxuyuram.', en:['I am reading a book now.',"I'm reading a book now."], extra:['read','is']},
      {t:'listen', en:'She is cooking dinner.', o:['She is cooking dinner.','She is cooking lunch.','He is cooking dinner.']},
      {t:'mc', q:'«At the moment» nə deməkdir?', o:['hazırda','bir anlığa','tezliklə','həmişə'], e:'At the moment = now (hazırda).'}
    ]},
    { id:'a1-u8-l2', title:'-ing yazılışı', items:[
      {t:'learn', title:'-ing necə əlavə olunur?', body:'Çox vaxt sadəcə -ing: play → playing. Sonu «e» ilə bitirsə, «e» düşür: write → writing. Qısa felin sonu sait + samitdirsə, samit qoşalaşır: swim → swimming, run → running, sit → sitting.', ex:[['play → playing','oynamaq'],['write → writing','yazmaq'],['make → making','etmək, düzəltmək'],['swim → swimming','üzmək'],['run → running','qaçmaq'],['study → studying','oxumaq, öyrənmək']]},
      {t:'mc', q:'make + ing = ?', o:['making','makeing','makking','maked'], e:'Sondakı «e» düşür: making.'},
      {t:'mc', q:'swim + ing = ?', o:['swimming','swiming','swimeing','swimmming'], e:'Samit qoşalaşır: swimming.'},
      {t:'mc', q:'He is ___ a letter.', o:['writing','writeing','writting','write'], e:'Write → writing (bir «t»).'},
      {t:'mc', q:'The children are ___ in the park.', o:['running','runing','runs','run'], e:'Run → running.'},
      {t:'order', az:'O (kişi) indi oturur.', en:['He is sitting now.',"He's sitting now."], extra:['sits','siting']},
      {t:'order', az:'Biz ingilis dilini öyrənirik.', en:['We are studying English.',"We're studying English."], extra:['studing','is']}
    ]},
    { id:'a1-u8-l3', title:'Simple yoxsa Continuous?', items:[
      {t:'learn', title:'Present Simple və Present Continuous', body:'SIMPLE — vərdiş, həmişə olan: I work in a bank. CONTINUOUS — indi, bu günlərdə: Today I am working from home. Siqnal sözlər: every day, usually, always → Simple; now, at the moment, Look!, Listen! → Continuous. Like, love, know, want, understand kimi fellər adətən Continuous-da işlənmir: I know (I am knowing yox).', ex:[['I usually go by bus.','Adətən avtobusla gedirəm.'],["Today I'm walking.",'Bu gün piyada gedirəm.'],['Listen! Someone is singing.','Qulaq as! Kimsə oxuyur.'],['I understand you.','Səni başa düşürəm.']]},
      {t:'mc', q:'I usually ___ to work by bus.', o:['go','am going','goes','going'], e:'Usually — vərdiş: Present Simple.'},
      {t:'mc', q:'Listen! Someone ___ the piano.', o:['is playing','plays','play','playing'], e:'Listen! — bu an: Present Continuous.'},
      {t:'mc', q:'I ___ the answer.', o:['know','am knowing','knowing','knows'], e:'Know Continuous-da işlənmir.'},
      {t:'mc', q:'She ___ coffee every morning.', o:['drinks','is drinking','drink','drinking'], e:'Every morning — vərdiş: drinks.'},
      {t:'order', az:'Bu gün evdən işləyirəm.', en:['Today I am working from home.','I am working from home today.',"I'm working from home today."], extra:['work','at']},
      {t:'listen', en:'What are you doing now?', o:['What are you doing now?','What do you do?','Where are you going now?']}
    ]}
  ]}
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

// Gündəlik video tövsiyələri (səviyyəyə görə, hər gün növbəti video).
// Hamısı YouTube-da mövcud olduğu yoxlanılmış videolardır: [videoId, başlıq, kanal / mənbə]
window.VIDEOS = {
  a1: [
    ['DjShiTl2hlo', 'Basic Greetings and Introductions', 'Learning English for Beginners'],
    ['v1ZWFsz0V5U', 'How to introduce yourself in British English (A1)', 'Beginner English lesson'],
    ['Umpq_QBGs24', "How to use 'to be' and 'to have' in Present Simple", 'Beginner English lesson'],
    ['PoqgDtIsZ8o', 'English Conversation for Beginners', 'Greetings, introductions'],
    ['hYX1MQO-8gQ', 'Beginner Listening Practice — Daily Routine', 'A1 listening'],
    ['xsRZMu9nQlc', 'Beginner Listening Practice — Family', 'A1 listening'],
    ['v6hxS7RyQZA', 'A1 English Listening Practice for Beginners', 'A1 listening test']
  ],
  a2: [
    ['xFsYrTIndhI', 'Present Simple and Present Continuous — 6 Minute Grammar', 'BBC Learning English'],
    ['OsW5sV3GMDM', 'The Grammar Gameshow — Episode 1', 'BBC Learning English'],
    ['8_nhtAwI0dA', "Present perfect with 'just', 'already' and 'yet'", 'BBC Learning English'],
    ['W-eJIgTrBTo', 'A1/A2 Listening Practice — Travel and Holidays', 'A2 listening'],
    ['UnEmEbWytI8', 'Introductions — graded video', 'Natural English']
  ],
  b1: [
    ['jwmKjgwlMk8', 'Present perfect and past simple — 6 Minute Grammar', 'BBC Learning English'],
    ['nI5zaB6QL-o', 'Present and past passives — 6 Minute Grammar', 'BBC Learning English'],
    ['WDJlTaihMsY', 'Lower-intermediate course — Unit 1', 'BBC Learning English'],
    ['0OHtQKOxeJY', 'English at Work — The Interview', 'BBC Learning English'],
    ['b5DOQ7iOzO4', "6 Minute English — 'Lifestyle' box set", 'BBC Learning English']
  ],
  b2: [
    ['pvoqkQHb3lo', 'Present perfect simple or continuous?', 'BBC Learning English'],
    ['Q_xHxFZTTaA', 'English at Work — The Interruption', 'BBC Learning English'],
    ['fcN0BXzK8bg', "6 Minute English — 'Language' box set", 'BBC Learning English'],
    ['rnBQXmO_StE', '6 Minute English — Internet and Technology', 'BBC Learning English'],
    ['WMokf0EgTcA', "6 Minute English — 'Wellbeing' box set", 'BBC Learning English']
  ]
};

// Səviyyə testi: hər səviyyədən 3 sual, asandan çətinə. o[0] düzgündür.
window.PLACEMENT = [
  {lv:'a1', q:'She ___ a doctor.', o:['is','are','am','be']},
  {lv:'a1', q:'«Mənim iki qardaşım var» düzgün tərcümə:', o:['I have two brothers.','I has two brothers.','I am two brothers.','Me have two brothers.']},
  {lv:'a1', q:'___ you like coffee?', o:['Do','Does','Are','Is']},
  {lv:'a2', q:'Yesterday I ___ to the cinema.', o:['went','go','have gone','goes']},
  {lv:'a2', q:'This book is ___ than that one.', o:['more interesting','interestinger','most interesting','more interestinger']},
  {lv:'a2', q:'Have you ever ___ to London?', o:['been','went','go','was']},
  {lv:'b1', q:'If I ___ more money, I would travel the world.', o:['had','have','will have','would have']},
  {lv:'b1', q:'This museum ___ in 1950.', o:['was built','built','is building','has built']},
  {lv:'b1', q:'She asked me where I ___.', o:['lived','do live','did live','am live']},
  {lv:'b2', q:'If I had studied harder, I ___ the exam.', o:['would have passed','would pass','passed','will pass']},
  {lv:'b2', q:"He ___ be at home — his car isn't outside.", o:["can't","mustn't","shouldn't","needn't"]},
  {lv:'b2', q:'___ the rain, we went for a walk.', o:['Despite','Although','However','Even']}
];
