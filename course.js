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
  { id:'a2-u1', title:'Keçən həftə', grammar:'Past Simple (qaydalı fellər) · was / were', lessons:[
    { id:'a2-u1-l1', title:'Dünən nə etdin?', items:[
      {t:'learn', title:'Past Simple: qaydalı fellər', body:'Keçmişdə bitmiş hərəkət üçün felə -ED əlavə olunur və bütün şəxslər üçün eynidir: I worked, she worked. Yazılış: live → lived, study → studied, stop → stopped. Tələffüz: worked /t/, played /d/, wanted /ɪd/.', ex:[['I worked yesterday.','Dünən işlədim.'],['She played tennis.','O, tennis oynadı.'],['We studied all night.','Bütün gecə oxuduq.'],['They watched a film.','Onlar film izlədilər.']]},
      {t:'mc', q:'Yesterday I ___ football.', o:['played','play','plays','playing'], e:'Yesterday — keçmiş: played.'},
      {t:'mc', q:'She ___ in a bank last year.', o:['worked','works','work','working'], e:'Last year — keçmiş: worked.'},
      {t:'mc', q:'study → keçmiş forma?', o:['studied','studyed','studed','studdied'], e:'Samit + y → -ied: studied.'},
      {t:'mc', q:'stop → keçmiş forma?', o:['stopped','stoped','stopt','stopping'], e:'Qısa fel, sait + samit → samit qoşalaşır: stopped.'},
      {t:'order', az:'Dünən axşam televizora baxdım.', en:'I watched TV last night.', extra:['watch','at']},
      {t:'listen', en:'We visited our grandparents last weekend.', o:['We visited our grandparents last weekend.','We visit our grandparents every weekend.','We visited our parents last weekend.']}
    ]},
    { id:'a2-u1-l2', title:'İnkar və sual: did', items:[
      {t:'learn', title:"didn't və Did…?", body:'Keçmişdə inkar: didn\'t + felin əsas forması. Sual: Did + şəxs + əsas forma? Diqqət: did-dən sonra fel -ED almır — keçmiş zaman artıq «did»-dədir.', ex:[["I didn't work yesterday.",'Dünən işləmədim.'],['Did you call her? — Yes, I did.','Ona zəng etdin? — Bəli.'],["She didn't like the film.",'Filmi bəyənmədi.'],['Where did you go?','Hara getdin?']]},
      {t:'mc', q:'I ___ watch the match yesterday.', o:["didn't","don't","wasn't",'not'], e:'Keçmişdə inkar: didn\'t.'},
      {t:'mc', q:'___ you call her?', o:['Did','Do','Were','Was'], e:'Keçmiş zamanda sual: Did…?'},
      {t:'mc', q:'Did she finish the project? — No, she ___.', o:["didn't","doesn't","wasn't",'not'], e:'Qısa cavab: No, she didn\'t.'},
      {t:'mc', q:'Hansı düzgündür?', o:["He didn't like the film.","He didn't liked the film.",'He not liked the film.',"He doesn't liked the film."], e:'Didn\'t + əsas forma (like).'},
      {t:'order', az:'Sən dünən işlədin?', en:'Did you work yesterday?', extra:['worked','do']},
      {t:'order', az:'Biz avtobusu gözləmədik.', en:["We didn't wait for the bus.",'We did not wait for the bus.'], extra:['waited',"don't"]}
    ]},
    { id:'a2-u1-l3', title:'was / were', items:[
      {t:'learn', title:'«be» feli keçmişdə', body:'I / he / she / it → WAS. You / we / they → WERE. İnkar: wasn\'t, weren\'t. Sual: Was it…? Were you…? Həmçinin: there was / there were.', ex:[['I was at home.','Evdə idim.'],['They were tired.','Onlar yorğun idilər.'],["Was it good? — Yes, it was.",'Yaxşı idi? — Bəli.'],['There were many people.','Çoxlu adam var idi.']]},
      {t:'mc', q:'I ___ at university yesterday.', o:['was','were','am','did'], e:'I ilə keçmişdə: was.'},
      {t:'mc', q:'They ___ very happy.', o:['were','was','are been','did'], e:'They ilə: were.'},
      {t:'mc', q:'___ the exam difficult?', o:['Was','Were','Did','Is been'], e:'The exam (tək) → Was…?'},
      {t:'mc', q:'There ___ many people at the concert.', o:['were','was','are','did'], e:'Many people — cəm: there were.'},
      {t:'order', az:'Dünən hava çox soyuq idi.', en:['It was very cold yesterday.','Yesterday it was very cold.'], extra:['were','is']},
      {t:'listen', en:'Where were you last night?', o:['Where were you last night?','Where are you tonight?','Where was he last night?']}
    ]}
  ]},
  { id:'a2-u2', title:'Səyahət', grammar:'Past Simple (qaydasız fellər)', lessons:[
    { id:'a2-u2-l1', title:'Qaydasız fellər 1', items:[
      {t:'learn', title:'Ən çox işlənən qaydasız fellər', body:'Bu fellər -ED almır, keçmiş formasını əzbərləmək lazımdır. Yaxşı xəbər: bütün şəxslər üçün eynidir.', ex:[['go → went','getmək'],['have → had','olmaq, yemək'],['see → saw','görmək'],['eat → ate','yemək'],['take → took','götürmək, çəkmək'],['buy → bought','almaq']]},
      {t:'mc', q:'Last summer we ___ to Sheki.', o:['went','goed','go','gone'], e:'Go → went.'},
      {t:'mc', q:'I ___ a great film yesterday.', o:['saw','seed','see','seen'], e:'See → saw.'},
      {t:'mc', q:'She ___ a new phone.', o:['bought','buyed','brought','buys'], e:'Buy → bought. Brought — bring (gətirmək) felinin keçmişidir.'},
      {t:'mc', q:'We ___ breakfast at the hotel.', o:['had','haved','has','have'], e:'Have → had.'},
      {t:'order', az:'Biz Şəkiyə avtobusla getdik.', en:'We went to Sheki by bus.', extra:['go','on']},
      {t:'listen', en:'I took a lot of photos.', o:['I took a lot of photos.','I take a lot of photos.','I took a lot of notes.']}
    ]},
    { id:'a2-u2-l2', title:'Qaydasız fellər 2', items:[
      {t:'learn', title:'Daha çox qaydasız fel', body:'Say və tell fərqi: SAY something (nəsə demək), TELL somebody (kiməsə demək): He said hello. He told me a story.', ex:[['come → came','gəlmək'],['leave → left','tərk etmək, yola düşmək'],['fly → flew','uçmaq'],['find → found','tapmaq'],['lose → lost','itirmək'],['tell → told / say → said','danışmaq / demək']]},
      {t:'mc', q:'Our plane ___ at 6 am.', o:['left','leaved','leave','lefted'], e:'Leave → left.'},
      {t:'mc', q:'I ___ my passport at the airport!', o:['lost','losed','lose','losted'], e:'Lose → lost.'},
      {t:'mc', q:'He ___ me a funny story.', o:['told','telled','said','says'], e:'Kiməsə danışmaq: tell somebody → told me.'},
      {t:'mc', q:'We ___ to London last year.', o:['flew','flied','flown','fly'], e:'Fly → flew (flown — üçüncü forma).'},
      {t:'order', az:'Mən çantamı oteldə tapdım.', en:'I found my bag at the hotel.', extra:['find','in']},
      {t:'listen', en:'They came back on Sunday.', o:['They came back on Sunday.','They come back on Sunday.','They came back on Monday.']}
    ]},
    { id:'a2-u2-l3', title:'Hava limanı və otel', items:[
      {t:'learn', title:'Səyahət ifadələri', body:'«Luggage» (baqaj) sayılmayan isimdir: my luggage is heavy (luggages yox). Otelə gələndə check in, çıxanda check out edirsən.', ex:[["I'd like to check in.",'Qeydiyyatdan keçmək istəyirəm.'],['Here is my passport.','Pasportum buyurun.'],['I booked a room for two nights.','İki gecəlik otaq sifariş etmişəm.'],['boarding pass','minik talonu'],['How was your trip?','Səfərin necə keçdi?']]},
      {t:'mc', q:'«Boarding pass» nə deməkdir?', o:['minik talonu','pasport','bilet kassası','gömrük'], e:'Təyyarəyə minmək üçün talon.'},
      {t:'mc', q:'Hansı düzgündür?', o:['My luggage is heavy.','My luggages are heavy.','My luggage are heavy.','A luggage is heavy.'], e:'Luggage sayılmır: cəmi və «a» yoxdur.'},
      {t:'mc', q:'How ___ your holiday? — It was great!', o:['was','were','did','is'], e:'Holiday tək: How was…?'},
      {t:'order', az:'İki gecəlik otaq sifariş etdim.', en:'I booked a room for two nights.', extra:['book','in']},
      {t:'listen', en:"I'd like to check in, please.", o:["I'd like to check in, please.","I'd like to check out, please.","I'd like a room, please."]},
      {t:'mc', q:'Oteldə «check out» nə deməkdir?', o:['oteldən çıxış etmək','otelə gəlmək','otağı yoxlamaq','hesabı soruşmaq'], e:'Check out — otağı təhvil verib çıxmaq.'}
    ]}
  ]},
  { id:'a2-u3', title:'Alış-veriş', grammar:'Müqayisə: cheaper, the cheapest', lessons:[
    { id:'a2-u3-l1', title:'Müqayisə', items:[
      {t:'learn', title:'-er / more … than', body:'Qısa sifətlər: +ER than (cheap → cheaper). Uzun sifətlər: MORE … than (more expensive). Yazılış: big → bigger, easy → easier. Qaydasız: good → better, bad → worse. Diqqət: THAN (-dan) ilə THEN (sonra) fərqlidir.', ex:[['cheaper than','-dan ucuz'],['bigger than','-dan böyük'],['more expensive than','-dan bahalı'],['better / worse','daha yaxşı / daha pis']]},
      {t:'mc', q:'This phone is ___ than that one. (cheap)', o:['cheaper','more cheap','cheapest','cheapper'], e:'Qısa sifət: cheaper.'},
      {t:'mc', q:'Baku is ___ than Ganja. (big)', o:['bigger','biger','more big','biggest'], e:'Big → bigger (samit qoşalaşır).'},
      {t:'mc', q:'This dress is ___ than the blue one. (expensive)', o:['more expensive','expensiver','most expensive','more expensiver'], e:'Uzun sifət: more expensive.'},
      {t:'mc', q:'My English is ___ now. (good)', o:['better','gooder','more good','best'], e:'Good → better.'},
      {t:'order', az:'Bu çanta o çantadan ucuzdur.', en:'This bag is cheaper than that bag.', extra:['more','then']},
      {t:'listen', en:'The weather is worse today.', o:['The weather is worse today.','The weather is better today.','The weather was worse today.']}
    ]},
    { id:'a2-u3-l2', title:'Ən …', items:[
      {t:'learn', title:'the -est / the most', body:'Ən yüksək dərəcə: THE + -EST (the cheapest) və ya THE MOST + uzun sifət (the most expensive). Qaydasız: the best, the worst. «The» unutma!', ex:[['the cheapest','ən ucuz'],['the biggest','ən böyük'],['the most expensive','ən bahalı'],['the best / the worst','ən yaxşı / ən pis']]},
      {t:'mc', q:'This is ___ shop in the city. (big)', o:['the biggest','the bigger','biggest','the most big'], e:'Ən böyük: the biggest.'},
      {t:'mc', q:"It's ___ restaurant in Baku. (expensive)", o:['the most expensive','the expensivest','most expensive','the more expensive'], e:'Uzun sifət: the most expensive.'},
      {t:'mc', q:'She is ___ student in our class. (good)', o:['the best','the better','the goodest','best'], e:'Good → the best.'},
      {t:'mc', q:'That was ___ day of my life! (bad)', o:['the worst','the baddest','the worse','worst'], e:'Bad → the worst.'},
      {t:'order', az:'Bu, ən ucuz variantdır.', en:['This is the cheapest option.',"This is the cheapest option."], extra:['cheaper','more']},
      {t:'listen', en:"What's the best way to learn English?", o:["What's the best way to learn English?","What's the best way to learn Russian?","What's the fastest way to learn English?"]}
    ]},
    { id:'a2-u3-l3', title:'Mağazada', items:[
      {t:'learn', title:'Mağaza ifadələri', body:'Sadəcə baxırsansa: I\'m just looking. Çox böyük / kiçik: TOO big / TOO small (too — həddindən artıq).', ex:[['Can I help you?','Kömək edə bilərəm?'],["No, thanks. I'm just looking.",'Yox, sağ olun. Sadəcə baxıram.'],['Can I try it on?','Geyinib baxa bilərəm?'],["It's too small.",'Çox kiçikdir.'],["I'll take it.",'Bunu alıram.'],['Can I pay by card?','Kartla ödəyə bilərəm?']]},
      {t:'mc', q:'Satıcı: «Can I help you?» Sən sadəcə baxırsan:', o:["No, thanks. I'm just looking.",'Yes, I look.',"I'm looking just.",'No, I see.'], e:'Standart ifadə: I\'m just looking.'},
      {t:'mc', q:'«Can I try it on?» nə deməkdir?', o:['Geyinib baxa bilərəm?','Ona baxa bilərəm?','Onu ala bilərəm?','Qaytara bilərəm?'], e:'Try on — geyinib yoxlamaq.'},
      {t:'mc', q:'These shoes are ___ small. I need a bigger size.', o:['too','very much','enough','so much'], e:'Too small — lazım olandan kiçik.'},
      {t:'mc', q:'«I\'ll take it.» nə deməkdir?', o:['Bunu alıram.','Bunu götürüb qaytaracağam.','Bunu sonra alaram.','Bunu istəmirəm.'], e:'Mağazada «take» — almaq qərarı.'},
      {t:'order', az:'Kartla ödəyə bilərəm?', en:'Can I pay by card?', extra:['with','pays']},
      {t:'listen', en:'Do you have this in a smaller size?', o:['Do you have this in a smaller size?','Do you have this in a bigger size?','Do you have this in black?']}
    ]}
  ]},
  { id:'a2-u4', title:'Planlar', grammar:'be going to · Present Continuous (gələcək)', lessons:[
    { id:'a2-u4-l1', title:'be going to', items:[
      {t:'learn', title:'Niyyət və plan: be going to', body:'Artıq qərar verdiyin plan: am / is / are + going to + fel. Həmçinin indi gördüyün əlamətə əsaslanan proqnoz: Look at the clouds! It\'s going to rain.', ex:[["I'm going to study tonight.",'Bu axşam dərs oxuyacağam.'],['She is going to buy a car.','O, maşın alacaq.'],['Are you going to apply?','Müraciət edəcəksən?'],["It's going to rain.",'Yağış yağacaq.']]},
      {t:'mc', q:'I ___ going to visit my aunt this weekend.', o:['am','is','are','will'], e:'I ilə: am going to.'},
      {t:'mc', q:'They ___ going to buy a new flat.', o:['are','is','am','do'], e:'They ilə: are going to.'},
      {t:'mc', q:'Look at those clouds! It ___ rain.', o:['is going to','goes to','going to','is go to'], e:'Gördüyün əlamətə əsaslanan proqnoz: is going to.'},
      {t:'mc', q:'___ you going to apply for the job?', o:['Are','Do','Will','Is'], e:'Sual: Are you going to…?'},
      {t:'order', az:'Bu axşam ingilis dili oxuyacağam.', en:['I am going to study English tonight.',"I'm going to study English tonight."], extra:['will','studying']},
      {t:'listen', en:'What are you going to do after university?', o:['What are you going to do after university?','What are you doing after university?','What did you do after university?']}
    ]},
    { id:'a2-u4-l2', title:'Razılaşdırılmış planlar', items:[
      {t:'learn', title:'Present Continuous gələcək üçün', body:'Vaxtı və yeri razılaşdırılmış planlar (görüş, bilet, qəbul) üçün Present Continuous işlənir: I\'m meeting Leyla at 6. Cümlədə gələcək vaxt göstəricisi olmalıdır (tomorrow, on Friday).', ex:[["I'm meeting Leyla at 6.",'Saat 6-da Leyla ilə görüşürəm.'],["We're flying to Istanbul on Friday.",'Cümə günü İstanbula uçuruq.'],['What are you doing on Saturday?','Şənbə nə edirsən?'],['Are you free on Sunday?','Bazar günü boşsan?']]},
      {t:'mc', q:'I ___ my friends tonight. We have a table at 8.', o:['am meeting','meet','meets','will meeting'], e:'Razılaşdırılmış plan: am meeting.'},
      {t:'mc', q:'Hansı cümlə gələcək planı bildirir?', o:["We're leaving tomorrow morning.",'We leave every morning.','We left yesterday morning.','We were leaving.'], e:'Tomorrow + Present Continuous = plan.'},
      {t:'mc', q:'What ___ you doing on Saturday?', o:['are','do','will','did'], e:'What are you doing…? — planı soruşmaq.'},
      {t:'order', az:'Cümə günü İstanbula uçuruq.', en:['We are flying to Istanbul on Friday.',"We're flying to Istanbul on Friday."], extra:['fly','in']},
      {t:'listen', en:"I'm seeing the doctor tomorrow.", o:["I'm seeing the doctor tomorrow.",'I saw the doctor yesterday.',"I'm seeing the dentist tomorrow."]},
      {t:'mc', q:'«Are you free on Sunday?» nə deməkdir?', o:['Bazar günü boşsan?','Bazar günü pulsuzdur?','Bazar günü azadlıqdır?','Bazar günü gəlirsən?'], e:'Free burada — boş vaxtı olan.'}
    ]},
    { id:'a2-u4-l3', title:'Dəvət et və cavab ver', items:[
      {t:'learn', title:'Dəvət, qəbul, imtina', body:'Dəvət: Would you like to…? (nəzakətli), Do you want to…?, How about…?, Let\'s… Qəbul: I\'d love to! İmtina: Sorry, I can\'t. I\'m busy. Maybe another time.', ex:[['Would you like to go to a café?','Kafeyə getmək istərdin?'],["Yes, I'd love to!",'Bəli, məmnuniyyətlə!'],["Sorry, I can't. I'm busy.",'Bağışla, bacarmıram. Məşğulam.'],['How about the cinema?','Bəs kino necə?'],["Let's meet at six.",'Altıda görüşək.']]},
      {t:'mc', q:'Dəvəti nəzakətlə qəbul et:', o:["I'd love to!",'I love to!','Yes, I like.','I would love.'], e:'I\'d love to! — I would love to.'},
      {t:'mc', q:'Nəzakətlə imtina et:', o:["Sorry, I can't. I'm busy on Friday.",'No.',"I don't want.","No, it's boring."], e:'Səbəb də əlavə etmək nəzakətlidir.'},
      {t:'mc', q:'___ going to the cinema? — Good idea!', o:['How about','What for','Why not to',"Let's"], e:'How about + -ing: How about going…?'},
      {t:'order', az:'Kafeyə getmək istərdin?', en:['Would you like to go to a café?','Would you like to go to a cafe?'], extra:['want','going']},
      {t:'listen', en:"Let's meet at the metro station.", o:["Let's meet at the metro station.","Let's meet at the bus station.","Let's eat at the metro station."]},
      {t:'mc', q:'«Maybe another time» nə deməkdir?', o:['Bəlkə başqa vaxt','Başqa yerdə','Bir də heç vaxt','Bu dəfə yox, sabah'], e:'Nəzakətli imtina ifadəsi.'}
    ]}
  ]},
  { id:'a2-u5', title:'Sağlamlıq', grammar:'should / shouldn\'t', lessons:[
    { id:'a2-u5-l1', title:'Özümü pis hiss edirəm', items:[
      {t:'learn', title:'Xəstəlik haqqında danışmaq', body:'Ağrını çox vaxt HAVE ilə deyirik: I have a headache. Bədən hissəsi ilə HURT: My back hurts. Soruşmaq: What\'s the matter?', ex:[['I have a headache.','Başım ağrıyır.'],['I have a cold.','Soyuqlamışam.'],['I have a sore throat.','Boğazım ağrıyır.'],['I have a temperature.','Qızdırmam var.'],['My back hurts.','Belim ağrıyır.'],["What's the matter?",'Nə olub?']]},
      {t:'mc', q:'«Başım ağrıyır» ingiliscə:', o:['I have a headache.','I have a head pain.','My head is ache.','I am headache.'], e:'Have a headache — sabit ifadə.'},
      {t:'mc', q:'«Sore throat» nə deməkdir?', o:['boğaz ağrısı','diş ağrısı','qarın ağrısı','qızdırma'], e:'Throat — boğaz.'},
      {t:'mc', q:'My back ___.', o:['hurts','hurt','is hurt','hurting'], e:'My back (it) → hurts.'},
      {t:'mc', q:'«What\'s the matter?» nə deməkdir?', o:['Nə olub?','Hansı mövzudur?','Nə edirsən?','Nə qədərdir?'], e:'Kiminsə pis olduğunu görəndə soruşulur.'},
      {t:'order', az:'Mən soyuqlamışam.', en:['I have a cold.',"I've got a cold."], extra:['am','the']},
      {t:'listen', en:'I have a temperature and a cough.', o:['I have a temperature and a cough.','I have a headache and a cough.','She has a temperature and a cough.']}
    ]},
    { id:'a2-u5-l2', title:'should / shouldn\'t', items:[
      {t:'learn', title:'Məsləhət vermək', body:'SHOULD + felin əsas forması = «-malısan» (məsləhət). Bütün şəxslər üçün eynidir, «to» işlənmir. İnkar: shouldn\'t.', ex:[['You should rest.','İstirahət etməlisən.'],["You shouldn't eat fast food.",'Fast food yeməməlisən.'],['Should I see a doctor?','Həkimə getməliyəm?'],['She should take a break.','O, fasilə verməlidir.']]},
      {t:'mc', q:'You look tired. You ___ go to bed early.', o:['should','shoulds','should to','are should'], e:'Should + əsas forma.'},
      {t:'mc', q:'You ___ drink so much coffee.', o:["shouldn't","don't should",'not should',"shouldn't to"], e:'İnkar: shouldn\'t.'},
      {t:'mc', q:'___ I see a doctor?', o:['Should','Do','Am','Does'], e:'Sual: Should I…?'},
      {t:'mc', q:'Hansı düzgündür?', o:['She should take a break.','She shoulds take a break.','She should takes a break.','She should to take a break.'], e:'Should dəyişmir, sonrakı fel də dəyişmir.'},
      {t:'order', az:'Sən daha çox su içməlisən.', en:'You should drink more water.', extra:['drinks','to']},
      {t:'listen', en:"You shouldn't work so late.", o:["You shouldn't work so late.",'You should work so late.',"You shouldn't walk so late."]}
    ]},
    { id:'a2-u5-l3', title:'Həkimdə', items:[
      {t:'learn', title:'Həkim qəbulu', body:'Qəbula yazılmaq: make an appointment. Dərmanı qəbul etmək: TAKE medicine. Gündə iki dəfə: twice a day. Xəstə dosta: Get well soon!', ex:[["I'd like to make an appointment.",'Həkim qəbuluna yazılmaq istəyirəm.'],['prescription','resept'],['Take this medicine twice a day.','Bu dərmanı gündə iki dəfə qəbul edin.'],['I feel better.','Özümü daha yaxşı hiss edirəm.'],['Get well soon!','Tez sağal!']]},
      {t:'mc', q:'«Appointment» nə deməkdir?', o:['qəbul (vaxt təyini)','dərman','resept','xəstəxana'], e:'Make an appointment — vaxt təyin etmək.'},
      {t:'mc', q:'Take this medicine ___ a day.', o:['twice','two time','second','double'], e:'Once (bir dəfə), twice (iki dəfə), three times.'},
      {t:'mc', q:'Xəstə dosta nə deyirsən?', o:['Get well soon!','Good luck!','Well done!','Have fun!'], e:'Get well soon — tez sağal.'},
      {t:'mc', q:'I feel ___ today, thank you.', o:['better','gooder','more good','best'], e:'Good / well → better.'},
      {t:'order', az:'Həkim qəbuluna yazılmaq istəyirəm.', en:["I'd like to make an appointment.",'I would like to make an appointment.'], extra:['do','take']},
      {t:'listen', en:'How often do you have this pain?', o:['How often do you have this pain?','How long do you have this pain?','How often does he have this pain?']}
    ]}
  ]},
  { id:'a2-u6', title:'Təcrübələr', grammar:'Present Perfect: ever / never / just / yet', lessons:[
    { id:'a2-u6-l1', title:'Heç … olmusan?', items:[
      {t:'learn', title:'Present Perfect: həyat təcrübəsi', body:'Have / has + felin 3-cü forması. Nə vaxt olduğu vacib deyilsə, işlənir: Have you ever been to Paris? I\'ve never eaten sushi. 3-cü formalar: be → been, see → seen, eat → eaten, do → done, try → tried.', ex:[['Have you ever been to Paris?','Heç Parisdə olmusan?'],["I've never eaten sushi.",'Heç vaxt suşi yeməmişəm.'],['She has seen this film three times.','O, bu filmi üç dəfə izləyib.'],['Yes, I have. / No, I haven\'t.','Bəli. / Xeyr.']]},
      {t:'mc', q:'Have you ever ___ to Istanbul?', o:['been','went','go','was'], e:'Have + been (be-nin 3-cü forması).'},
      {t:'mc', q:"I've never ___ sushi.", o:['eaten','ate','eat','eated'], e:'Eat → ate → eaten.'},
      {t:'mc', q:'She ___ seen this film three times.', o:['has','have','is','did'], e:'She ilə: has.'},
      {t:'mc', q:'Have you ever tried yoga? — Yes, I ___.', o:['have','did','do','am'], e:'Qısa cavab: Yes, I have.'},
      {t:'order', az:'Mən heç vaxt Londonda olmamışam.', en:['I have never been to London.',"I've never been to London."], extra:['went','in']},
      {t:'listen', en:'Have you ever met a famous person?', o:['Have you ever met a famous person?','Have you ever seen a famous person?','Did you meet a famous person?']}
    ]},
    { id:'a2-u6-l2', title:'Present Perfect yoxsa Past Simple?', items:[
      {t:'learn', title:'Vaxt göstərilirsə — Past Simple', body:'PRESENT PERFECT — nə vaxt olduğu deyilmir (təcrübə): I\'ve been to Paris. PAST SIMPLE — konkret vaxt var: I went there in 2019. Yesterday, last year, in 2020, ago ilə həmişə Past Simple.', ex:[["I've been to Paris.",'Parisdə olmuşam.'],['I went there in 2019.','Ora 2019-da getmişdim.'],["She's lost her keys.",'Açarlarını itirib (indi yoxdur).'],['She lost her keys yesterday.','Dünən açarlarını itirdi.']]},
      {t:'mc', q:'I ___ to Paris in 2019.', o:['went','have been','have gone','go'], e:'In 2019 — konkret vaxt: Past Simple.'},
      {t:'mc', q:'___ you ever ___ a horse?', o:['Have / ridden','Did / ride','Have / rode','Do / ride'], e:'Ever — təcrübə: Have you ever ridden…?'},
      {t:'mc', q:'She ___ her keys yesterday.', o:['lost','has lost','loses','have lost'], e:'Yesterday — Past Simple.'},
      {t:'mc', q:'«Yesterday» sözü ilə hansı zaman işlənir?', o:['Past Simple','Present Perfect','Present Simple','Present Continuous'], e:'Bitmiş konkret vaxt → Past Simple.'},
      {t:'order', az:'Mən bu filmə keçən həftə baxdım.', en:'I watched this film last week.', extra:['have','seen']},
      {t:'listen', en:"I've lived here since 2020.", o:["I've lived here since 2020.",'I lived here in 2020.',"I've lived here for two years."]}
    ]},
    { id:'a2-u6-l3', title:'just, already, yet', items:[
      {t:'learn', title:'just / already / yet', body:'JUST — indicə: I\'ve just finished. ALREADY — artıq (gözləniləndən tez): I\'ve already done it. YET — hələ (inkarda), artıq (sualda); cümlənin sonunda gəlir: I haven\'t finished yet. Have you finished yet?', ex:[["I've just arrived.",'İndicə gəldim.'],["I've already eaten.",'Artıq yemişəm.'],["I haven't decided yet.",'Hələ qərar verməmişəm.'],['Have you called him yet?','Ona artıq zəng etmisən?']]},
      {t:'mc', q:"I've ___ finished my homework — five minutes ago.", o:['just','yet','ever','never'], e:'İndicə — just.'},
      {t:'mc', q:'Have you called him ___?', o:['yet','already','just','ever'], e:'Sualın sonunda: yet.'},
      {t:'mc', q:"She hasn't replied ___.", o:['yet','already','just','still'], e:'İnkarın sonunda: yet.'},
      {t:'mc', q:"I've ___ seen this film. Let's watch something else.", o:['already','yet','ever','still'], e:'Artıq — already.'},
      {t:'order', az:'Mən hələ cavab verməmişəm.', en:["I haven't answered yet.",'I have not answered yet.'], extra:['already',"don't"]},
      {t:'listen', en:"They've just arrived at the airport.", o:["They've just arrived at the airport.","They've already left the airport.",'They just arrive at the airport.']}
    ]}
  ]},
  { id:'a2-u7', title:'Tələbə həyatı', grammar:'must / have to', lessons:[
    { id:'a2-u7-l1', title:'Qaydalar: must', items:[
      {t:'learn', title:"must / mustn't", body:'MUST — vacibdir, məcburidir (qayda və ya öz fikrin). MUSTN\'T — QADAĞANDIR. Must-dan sonra «to» işlənmir.', ex:[['You must be on time.','Vaxtında gəlməlisən.'],["You mustn't use phones in the exam.",'İmtahanda telefon qadağandır.'],['I must finish this today.','Bunu bu gün bitirməliyəm.'],['Students must wear ID cards.','Tələbələr vəsiqə taxmalıdır.']]},
      {t:'mc', q:'Students ___ be on time.', o:['must','musts','must to','are must'], e:'Must + əsas forma.'},
      {t:'mc', q:'You ___ cheat in the exam!', o:["mustn't","don't must",'not must',"haven't to"], e:'Qadağa: mustn\'t.'},
      {t:'mc', q:'«You mustn\'t smoke here» nə deməkdir?', o:['Burada siqaret çəkmək qadağandır.','Burada siqaret çəkmək məcburi deyil.','Burada siqaret çəkə bilərsən.','Burada siqaret çəkməlisən.'], e:'Mustn\'t = qadağa.'},
      {t:'mc', q:'Hansı düzgündür?', o:['We must finish today.','We must to finish today.','We musts finish today.','We must finishing today.'], e:'Must + əsas forma, «to» yoxdur.'},
      {t:'order', az:'İmtahanda telefondan istifadə etməməlisiniz.', en:["You mustn't use your phone in the exam.",'You must not use your phone in the exam.'], extra:["don't",'uses']},
      {t:'listen', en:'You must hand in your essay on Monday.', o:['You must hand in your essay on Monday.','You must hand in your essay on Friday.','You can hand in your essay on Monday.']}
    ]},
    { id:'a2-u7-l2', title:"have to / don't have to", items:[
      {t:'learn', title:"have to və don't have to", body:'HAVE TO — xarici zərurət (iş, qayda): I have to work on Saturdays. DON\'T HAVE TO — lazım deyil, məcburi deyil. Diqqət: mustn\'t (qadağandır) ≠ don\'t have to (lazım deyil)!', ex:[['I have to work on Saturdays.','Şənbələr işləməliyəm.'],['She has to wear a uniform.','O, forma geyinməlidir.'],["You don't have to come.",'Gəlməyin vacib deyil.'],['Do you have to study today?','Bu gün oxumalısan?']]},
      {t:'mc', q:'I ___ work on Saturdays. It\'s my job.', o:['have to','has to','must to','having to'], e:'I ilə: have to.'},
      {t:'mc', q:'She ___ get up early tomorrow — it\'s a holiday.', o:["doesn't have to","mustn't","don't have to","hasn't to"], e:'Lazım deyil: doesn\'t have to (she ilə does).'},
      {t:'mc', q:'«You don\'t have to come» nə deməkdir?', o:['Gəlməyin vacib deyil.','Gəlmək qadağandır.','Gəlməməlisən.','Gəlmə!'], e:'Don\'t have to — seçim sənindir.'},
      {t:'mc', q:'___ you have to wear a uniform at work?', o:['Do','Have','Are','Must'], e:'Sual: Do you have to…?'},
      {t:'order', az:'Mən hər gün işə getməli deyiləm.', en:["I don't have to go to work every day.",'I do not have to go to work every day.'], extra:["mustn't",'has']},
      {t:'listen', en:'He has to study for his exams.', o:['He has to study for his exams.','He had to study for his exams.','He wants to study for his exams.']}
    ]},
    { id:'a2-u7-l3', title:'Universitet həyatı', items:[
      {t:'learn', title:'Universitet sözləri', body:'Bu sözlər həm təhsildə, həm də xaricdə oxumaq üçün müraciətlərdə tez-tez lazım olur.', ex:[['lecture / seminar','mühazirə / seminar'],['deadline','son təhvil tarixi'],['assignment','tapşırıq'],['scholarship','təqaüd'],['take notes','qeyd götürmək'],['pass / fail an exam','imtahandan keçmək / kəsilmək']]},
      {t:'mc', q:'«Deadline» nə deməkdir?', o:['son təhvil tarixi','imtahan','mühazirə','qiymət'], e:'Tapşırığı təhvil vermək üçün son tarix.'},
      {t:'mc', q:'«Scholarship» nə deməkdir?', o:['təqaüd','məktəb','tələbə bileti','qiymət cədvəli'], e:'Scholarship — təhsil təqaüdü.'},
      {t:'mc', q:'I studied a lot, so I ___ the exam.', o:['passed','past','passed by','failed'], e:'Pass an exam — imtahandan keçmək. Past — keçmiş (isim).'},
      {t:'mc', q:'«Take notes» nə deməkdir?', o:['qeyd götürmək','not yazmaq (musiqi)','bayram qeyd etmək','pul götürmək'], e:'Mühazirədə qeyd yazmaq.'},
      {t:'order', az:'Tapşırığı cümə gününə qədər təhvil verməliyəm.', en:'I have to submit the assignment by Friday.', extra:['until','must']},
      {t:'listen', en:'The lecture starts at ten.', o:['The lecture starts at ten.','The lecture starts at two.','The seminar starts at ten.']}
    ]}
  ]},
  { id:'a2-u8', title:'Hekayələr', grammar:'Past Continuous · when / while', lessons:[
    { id:'a2-u8-l1', title:'Past Continuous', items:[
      {t:'learn', title:'Keçmişdə davam edən hərəkət', body:'WAS / WERE + fel-ING: keçmişdə müəyyən anda davam edən hərəkət. I was reading at 9 pm yesterday — dünən saat 9-da oxuyurdum.', ex:[['I was reading at 9 pm.','Saat 9-da oxuyurdum.'],['They were playing football.','Onlar futbol oynayırdılar.'],['What were you doing?','Nə edirdin?'],['It was raining.','Yağış yağırdı.']]},
      {t:'mc', q:'At 8 pm yesterday I ___ dinner.', o:['was having','had been','were having','am having'], e:'I ilə: was + -ing.'},
      {t:'mc', q:'They ___ waiting for the bus.', o:['were','was','are','did'], e:'They ilə: were.'},
      {t:'mc', q:'What ___ you doing at midnight?', o:['were','was','did','are'], e:'You ilə: were.'},
      {t:'mc', q:'It ___ raining when I woke up.', o:['was','were','is','did'], e:'It ilə: was.'},
      {t:'order', az:'Mən saat yeddidə ingilis dili oxuyurdum.', en:'I was studying English at seven.', extra:['were','studied']},
      {t:'listen', en:'We were talking about the trip.', o:['We were talking about the trip.','We are talking about the trip.','We were thinking about the trip.']}
    ]},
    { id:'a2-u8-l2', title:'when / while', items:[
      {t:'learn', title:'Uzun və qısa hərəkət', body:'Uzun hərəkət — Past Continuous, onu kəsən qısa hərəkət — Past Simple. WHEN qısa hərəkətlə, WHILE uzun hərəkətlə işlənir.', ex:[['I was walking when it started to rain.','Gəzirdim ki, yağış başladı.'],['While I was cooking, the phone rang.','Yemək bişirərkən telefon zəng çaldı.'],['She was sleeping when I came.','Mən gələndə o yatırdı.']]},
      {t:'mc', q:'I was having a shower when the phone ___.', o:['rang','was ringing','rings','ringed'], e:'Qısa hərəkət — Past Simple: rang (ring → rang).'},
      {t:'mc', q:'___ I was walking home, I met an old friend.', o:['While','When','During','Then'], e:'Uzun hərəkətlə: while.'},
      {t:'mc', q:'She ___ when the teacher came in.', o:['was sleeping','slept','sleeps','is sleeping'], e:'Davam edən hərəkət: was sleeping.'},
      {t:'mc', q:'«I was reading when he called» — hansı hərəkət daha uzun davam edirdi?', o:['I was reading','he called','ikisi də eyni','heç biri'], e:'Was reading — uzun, called — onu kəsən qısa hərəkət.'},
      {t:'order', az:'Mən yatarkən telefon zəng çaldı.', en:['The phone rang while I was sleeping.','While I was sleeping the phone rang.'], extra:['ringed','when']},
      {t:'listen', en:'I was driving when I saw the accident.', o:['I was driving when I saw the accident.','I was driving when I heard the accident.','I drove when I saw the accident.']}
    ]},
    { id:'a2-u8-l3', title:'Hekayə danış', items:[
      {t:'learn', title:'Hekayəni bağlayan sözlər', body:'Hekayəni ardıcıl danışmaq üçün: First (əvvəlcə), Then / After that (sonra), Suddenly (birdən), Finally / In the end (sonda). Fonu Past Continuous ilə, hadisələri Past Simple ilə danış.', ex:[['It was a sunny day and we were walking in the park.','Günəşli gün idi, parkda gəzirdik.'],['Suddenly, it started to rain.','Birdən yağış başladı.'],['Then we went to a café.','Sonra kafeyə getdik.'],['In the end, we had a great time.','Sonda çox yaxşı vaxt keçirdik.']]},
      {t:'mc', q:'Hekayədə gözlənilməz hadisə: «___, the lights went out.»', o:['Suddenly','Finally','First','After'], e:'Suddenly — birdən.'},
      {t:'mc', q:'«In the end» nə deməkdir?', o:['sonda, axırda','əvvəlcə','birdən','sonra'], e:'In the end = finally.'},
      {t:'mc', q:'Hekayəni nə ilə başlamaq olar?', o:['First','Finally','In the end','Suddenly'], e:'First — əvvəlcə.'},
      {t:'mc', q:'Hansı cümlə düzgündür?', o:['It was a sunny day and we were walking in the park.','It was a sunny day and we was walking in the park.','It were a sunny day and we walking in the park.','It is a sunny day and we were walk in the park.'], e:'It was, we were + -ing.'},
      {t:'order', az:'Sonra biz kafeyə getdik.', en:['Then we went to a café.','Then we went to a cafe.'], extra:['go','after']},
      {t:'listen', en:'Finally, we found the hotel.', o:['Finally, we found the hotel.','Finally, we found the station.','Suddenly, we found the hotel.']}
    ]}
  ]}
]},
{ id:'b1', name:'B1', title:'Orta', color:'#7b56d6', units:[
  { id:'b1-u1', title:'Həyat təcrübəsi', grammar:'Present Perfect · for / since · Present Perfect Continuous', lessons:[
    { id:'b1-u1-l1', title:'for və since', items:[
      {t:'learn', title:'İndiyə qədər davam edən vəziyyət', body:'Azərbaycan dilində «5 ildir burada yaşayıram» deyirik — indiki zamanla. İngiliscədə isə bu, Present Perfect ilə deyilir: I have lived here for 5 years. «I live here for 5 years» — azərbaycanlıların ən çox etdiyi səhvlərdəndir. FOR + müddət (for 5 years), SINCE + başlanğıc nöqtəsi (since 2020).', ex:[["I've lived here for five years.",'Beş ildir burada yaşayıram.'],["She has worked here since 2020.",'O, 2020-dən burada işləyir.'],['How long have you known him?','Onu nə vaxtdan tanıyırsan?'],['for two weeks / since Monday','iki həftədir / bazar ertəsindən']]},
      {t:'mc', q:'I ___ in Baku since 2018.', o:['have lived','live','am living','lived'], e:'2018-dən indiyə qədər davam edir: Present Perfect.'},
      {t:'mc', q:'She has worked here ___ three years.', o:['for','since','during','from'], e:'Müddət: for three years.'},
      {t:'mc', q:'We have known each other ___ school.', o:['since','for','from','during'], e:'Başlanğıc nöqtəsi: since school.'},
      {t:'mc', q:'«İki ildir ingilis dili öyrənirəm» — düzgün tərcümə:', o:['I have been learning English for two years.','I learn English for two years.','I am learning English since two years.','I learned English for two years ago.'], e:'Hələ davam edir: have been learning + for.'},
      {t:'order', az:'Sən nə vaxtdan burada işləyirsən?', en:['How long have you worked here?','How long have you been working here?'], extra:['since','do']},
      {t:'listen', en:"I've had this phone for six months.", o:["I've had this phone for six months.",'I had this phone for six months.',"I've had this phone since March."]}
    ]},
    { id:'b1-u1-l2', title:'Present Perfect Continuous', items:[
      {t:'learn', title:'have been + -ing', body:'Müddəti və prosesi vurğulayanda: I\'ve been running (ona görə yorğunam). Neçə dəfə və ya nə qədər bitirdiyini deyəndə isə Present Perfect Simple: I\'ve written three emails.', ex:[["I'm tired — I've been working all day.",'Yorğunam — bütün günü işləmişəm.'],["It has been raining since morning.",'Səhərdən yağış yağır.'],['How long have you been waiting?','Nə vaxtdan gözləyirsən?'],["She's read three books this month.",'Bu ay üç kitab oxuyub.']]},
      {t:'mc', q:"I'm tired because I ___ all day.", o:['have been working','have worked','worked','am working'], e:'Proses və nəticə (yorğunluq): have been working.'},
      {t:'mc', q:'She ___ three books this month.', o:['has read','has been reading','read','reads'], e:'Say (three books) → Present Perfect Simple.'},
      {t:'mc', q:'How long ___ you been waiting?', o:['have','did','are','were'], e:'How long have you been…?'},
      {t:'mc', q:'It ___ raining since morning.', o:['has been','is','was','have been'], e:'It ilə: has been.'},
      {t:'order', az:'Biz bir saatdır səni gözləyirik.', en:['We have been waiting for you for an hour.',"We've been waiting for you for an hour."], extra:['since','are']},
      {t:'listen', en:'What have you been doing lately?', o:['What have you been doing lately?','What have you done lately?','What were you doing lately?']}
    ]},
    { id:'b1-u1-l3', title:'Təcrübəni təqdim et', items:[
      {t:'learn', title:'CV və müsahibədə təcrübə', body:'Hələ davam edən və ya vaxtı vacib olmayan təcrübə üçün Present Perfect, konkret tarixli fakt üçün Past Simple işlət. «So far» — indiyə qədər.', ex:[["I have worked as a volunteer for two years.",'İki ildir könüllü kimi çalışıram.'],["I've been responsible for social media.",'Sosial mediaya mən cavabdeh olmuşam.'],['So far I have completed three projects.','İndiyə qədər üç layihə bitirmişəm.'],['I graduated in 2023.','2023-də məzun oldum.']]},
      {t:'mc', q:'«So far» nə deməkdir?', o:['indiyə qədər','uzaqda','o qədər','tezliklə'], e:'So far = until now.'},
      {t:'mc', q:'Müsahibədə: «I ___ as a volunteer for two years.»', o:['have worked','have been work','work','am working'], e:'İndiyə qədər davam edən təcrübə: have worked.'},
      {t:'mc', q:'Have you ___ been abroad?', o:['ever','yet','already','since'], e:'Həyat təcrübəsi sualı: ever.'},
      {t:'mc', q:'Hansı cümlədə konkret keçmiş vaxt var (Past Simple lazımdır)?', o:['I graduated in 2023.','I have already graduated.','I have just graduated.','I have recently graduated.'], e:'In 2023 — konkret vaxt.'},
      {t:'order', az:'Mən indiyə qədər üç layihə bitirmişəm.', en:['I have finished three projects so far.','So far I have finished three projects.'], extra:['finish','since']},
      {t:'listen', en:"I've recently started a new job.", o:["I've recently started a new job.",'I recently started a new course.',"I've just started a new job."]}
    ]}
  ]},
  { id:'b1-u2', title:'Gələcək', grammar:'will və going to · when / as soon as', lessons:[
    { id:'b1-u2-l1', title:'will', items:[
      {t:'learn', title:'will: qərar, təklif, söz, fikir', body:'WILL — danışarkən verdiyin ani qərar, təklif, söz və şəxsi proqnoz (I think…). İnkar: won\'t (will not).', ex:[["The phone's ringing. — I'll get it!",'Telefon zəng çalır. — Mən götürərəm!'],["I'll carry your bag.",'Çantanı mən daşıyaram.'],["I promise I won't be late.",'Söz verirəm, gecikməyəcəyəm.'],["I think it will be a great year.",'Məncə, möhtəşəm il olacaq.']]},
      {t:'mc', q:'The phone is ringing. — I ___ answer it!', o:["'ll",'am going to','will to','am'], e:'Ani qərar: I\'ll.'},
      {t:'mc', q:'I promise I ___ tell anyone.', o:["won't","don't","am not","willn't"], e:'Söz vermək: won\'t.'},
      {t:'mc', q:'I think our team ___ win the match.', o:['will','is winning','wins','going to'], e:'Şəxsi fikir / proqnoz: I think … will.'},
      {t:'mc', q:'«I\'ll carry your bag» — bu nədir?', o:['təklif','qadağa','keçmiş hadisə','vərdiş'], e:'Kömək təklifi will ilə.'},
      {t:'order', az:'Narahat olma, sənə kömək edəcəyəm.', en:["Don't worry, I will help you.","Don't worry, I'll help you."], extra:['going','helps']},
      {t:'listen', en:"I'll call you when I arrive.", o:["I'll call you when I arrive.","I'll call you when I leave.",'I called you when I arrived.']}
    ]},
    { id:'b1-u2-l2', title:'will yoxsa going to?', items:[
      {t:'learn', title:'Fərq nədir?', body:'GOING TO — əvvəlcədən qərar verilmiş plan və ya gözlə görünən əlamət. WILL — elə indi verilən qərar və ya şəxsi fikir.', ex:[["I've bought tickets — we're going to see a concert.",'Bilet almışam — konsertə gedəcəyik.'],["We have no milk? I'll get some.",'Süd yoxdur? Mən alaram.'],["Look at that car! It's going to crash!",'O maşına bax! Toqquşacaq!'],['Robots will do many jobs.','Robotlar çox işi görəcək.']]},
      {t:'mc', q:"I've bought the tickets. We ___ see the concert on Friday.", o:['are going to','will','shall','go to'], e:'Əvvəlcədən plan: going to.'},
      {t:'mc', q:'— We have no milk. — Really? I ___ get some.', o:["'ll",'am going to','go','am getting'], e:'Elə indi qərar: I\'ll.'},
      {t:'mc', q:'Look at that car! It ___ crash!', o:['is going to','will','crashes','shall'], e:'Görünən əlamət: is going to.'},
      {t:'mc', q:'In my opinion, robots ___ do many jobs in the future.', o:['will','are going','do','shall to'], e:'Şəxsi fikir: will.'},
      {t:'order', az:'Gələn il magistraturaya müraciət edəcəyəm (artıq qərarlıyam).', en:["I am going to apply for a master's next year.","I'm going to apply for a master's next year."], extra:['will','applying']},
      {t:'listen', en:'I think prices will go up.', o:['I think prices will go up.','I think prices went up.','I think prices will go down.']}
    ]},
    { id:'b1-u2-l3', title:'when, as soon as, until', items:[
      {t:'learn', title:'Gələcək haqqında, amma indiki zamanla', body:'When, as soon as, before, after, until-dən sonra gələcək mənada INDIKI zaman işlənir: I\'ll call you when I get home (when I will get — səhv). Azərbaycan dilindəki «evə çatanda» kimi.', ex:[["I'll text you when I get home.",'Evə çatanda yazacağam.'],["As soon as she gets the results, she'll tell us.",'Nəticəni alan kimi bizə deyəcək.'],["We won't start until everyone arrives.",'Hamı gələnə qədər başlamayacağıq.'],['Close the window before you leave.','Çıxmazdan əvvəl pəncərəni bağla.']]},
      {t:'mc', q:"I'll text you when I ___ home.", o:['get','will get','got','am going to get'], e:'When-dən sonra indiki zaman.'},
      {t:'mc', q:'As soon as she ___ the results, she will tell us.', o:['gets','will get','got','get'], e:'As soon as + Present Simple.'},
      {t:'mc', q:"We won't start ___ everyone arrives.", o:['until','when','if','as'], e:'Until — -ana qədər.'},
      {t:'mc', q:'Hansı düzgündür?', o:['Before you leave, close the window.','Before you will leave, close the window.','Before you left, close the window.','Before leave you, close the window.'], e:'Before + Present Simple.'},
      {t:'order', az:'İşi bitirən kimi sənə zəng edəcəyəm.', en:['I will call you as soon as I finish work.',"I'll call you as soon as I finish work."], extra:['finished','when']},
      {t:'listen', en:'Let me know when you are ready.', o:['Let me know when you are ready.','Let me know if you are ready.','Let me know when you were ready.']}
    ]}
  ]},
  { id:'b1-u3', title:'Şərt cümlələri', grammar:'First və Second Conditional', lessons:[
    { id:'b1-u3-l1', title:'First Conditional', items:[
      {t:'learn', title:'Real ehtimal: If + indiki, will', body:'Real mümkün olan şərt: IF + Present Simple, WILL + fel. If-li hissədə «will» işlənmir. UNLESS = if not (-mazsa).', ex:[["If it rains, we'll stay at home.",'Yağış yağsa, evdə qalacağıq.'],['If you study hard, you will pass.','Yaxşı oxusan, keçəcəksən.'],["You'll be late unless you hurry.",'Tələsməsən, gecikəcəksən.']]},
      {t:'mc', q:'If you study hard, you ___ pass.', o:['will','would','are','passed'], e:'First conditional: will.'},
      {t:'mc', q:"If it ___ tomorrow, we'll cancel the trip.", o:['rains','will rain','rained','raining'], e:'If-dən sonra Present Simple.'},
      {t:'mc', q:"You'll miss the bus ___ you hurry.", o:['unless','if','when','until'], e:'Unless = if not: tələsməsən.'},
      {t:'mc', q:'Hansı düzgündür?', o:["If I see him, I'll tell him.",'If I will see him, I tell him.',"If I saw him, I'll tell him.",'If I see him, I told him.'], e:'If + indiki, will + fel.'},
      {t:'order', az:'Tələssən, qatara çatacaqsan.', en:['If you hurry, you will catch the train.',"If you hurry, you'll catch the train.",'You will catch the train if you hurry.'], extra:['would','hurried']},
      {t:'listen', en:"If I get the job, I'll move to Baku.", o:["If I get the job, I'll move to Baku.","If I got the job, I'd move to Baku.","If I get the job, I'll stay in Baku."]}
    ]},
    { id:'b1-u3-l2', title:'Second Conditional', items:[
      {t:'learn', title:'Xəyali vəziyyət: If + keçmiş, would', body:'İndiki zamanda real olmayan, xəyali vəziyyət: IF + Past Simple, WOULD + fel. Forma keçmişdir, məna isə indiki. «If I were you» — məsləhət vermək üçün klassik ifadə (I was yox, were).', ex:[['If I had more money, I would travel.','Daha çox pulum olsaydı, səyahət edərdim.'],["If I were you, I'd apply.",'Sənin yerində olsaydım, müraciət edərdim.'],['What would you do if you won the lottery?','Lotereya udsaydın, nə edərdin?']]},
      {t:'mc', q:'If I ___ rich, I would buy a house by the sea.', o:['were','am','will be','would be'], e:'Xəyali: If I were…'},
      {t:'mc', q:'If she had more time, she ___ learn Spanish.', o:['would','will','can','does'], e:'Second conditional: would.'},
      {t:'mc', q:'If I were you, I ___ apply for that scholarship.', o:['would','will','am','did'], e:'Məsləhət: If I were you, I would…'},
      {t:'mc', q:'«If I won the lottery…» nə deməkdir?', o:['Lotereya udsaydım… (real deyil)','Lotereya udanda…','Lotereya udmuşam…','Lotereya udacağam…'], e:'Second conditional — xəyal.'},
      {t:'order', az:'Sənin yerində olsaydım, ona zəng edərdim.', en:['If I were you, I would call her.',"If I were you, I'd call her.",'I would call her if I were you.'], extra:['will','am']},
      {t:'listen', en:'What would you do if you lost your phone?', o:['What would you do if you lost your phone?','What will you do if you lose your phone?','What would you do if you found a phone?']}
    ]},
    { id:'b1-u3-l3', title:'Real yoxsa xəyali?', items:[
      {t:'learn', title:'First və Second müqayisəsi', body:'Özünə sual ver: bu, real ola bilərmi? Real ehtimal → If + indiki, will. Xəyali / ehtimalı çox az → If + keçmiş, would.', ex:[["If it's sunny tomorrow, we'll go to the beach.",'Sabah günəşli olsa, çimərliyə gedəcəyik.'],["If I were a bird, I'd fly over the Caspian.",'Quş olsaydım, Xəzərin üzərində uçardım.'],["If you give me your number, I'll send the file.",'Nömrəni versən, faylı göndərəcəyəm.']]},
      {t:'mc', q:'If it ___ sunny tomorrow, we will go to the beach.', o:['is','were','would be','was'], e:'Real ehtimal: If it is…'},
      {t:'mc', q:'If I ___ a bird, I would fly over the Caspian.', o:['were','am','will be','be'], e:'Xəyali: If I were…'},
      {t:'mc', q:'I would buy that car if it ___ cheaper.', o:['were','is','will be','would be'], e:'Would ilə: if it were.'},
      {t:'mc', q:"If you ___ me your number, I'll send you the file.", o:['give','gave','would give','will give'], e:'Will ilə: if you give.'},
      {t:'order', az:'Vaxtım olsaydı, sənə kömək edərdim.', en:['If I had time, I would help you.',"If I had time, I'd help you.",'I would help you if I had time.'], extra:['have','will']},
      {t:'listen', en:"I'd be happier if I lived near the sea.", o:["I'd be happier if I lived near the sea.","I'll be happier if I live near the sea.","I'd be happier if I lived near the park."]}
    ]}
  ]},
  { id:'b1-u4', title:'Media və xəbərlər', grammar:'Passive voice (indiki və keçmiş)', lessons:[
    { id:'b1-u4-l1', title:'Passiv: indiki zaman', items:[
      {t:'learn', title:'is / are + 3-cü forma', body:'Kimin etdiyi vacib olmayanda və ya məlum olmayanda passiv işlənir: English is spoken in many countries. Edəni göstərmək üçün BY: by thousands of people. Azərbaycan dilindəki «-ılır, -ilir» kimi.', ex:[['English is spoken in many countries.','İngilis dili çox ölkədə danışılır.'],['These phones are made in China.','Bu telefonlar Çində istehsal olunur.'],['The news is updated every hour.','Xəbərlər hər saat yenilənir.']]},
      {t:'mc', q:'English ___ in many countries.', o:['is spoken','speaks','is speaking','spoken'], e:'Passiv: is + spoken.'},
      {t:'mc', q:'These phones ___ in China.', o:['are made','is made','make','are making'], e:'Cəm: are made.'},
      {t:'mc', q:'The news ___ every hour.', o:['is updated','updates','is updating','updated'], e:'Xəbəri kimsə yeniləyir: is updated.'},
      {t:'mc', q:'Hansı cümlə passivdir?', o:['The letters are delivered every morning.','The postman delivers the letters.','They deliver letters.','The postman is delivering letters.'], e:'Are delivered — passiv.'},
      {t:'order', az:'Bu sayt hər gün minlərlə insan tərəfindən oxunur.', en:'This website is read by thousands of people every day.', extra:['reads','from']},
      {t:'listen', en:'Breakfast is served from seven to ten.', o:['Breakfast is served from seven to ten.','Breakfast is served from eight to ten.','Dinner is served from seven to ten.']}
    ]},
    { id:'b1-u4-l2', title:'Passiv: keçmiş zaman', items:[
      {t:'learn', title:'was / were + 3-cü forma', body:'Keçmişdə passiv: was / were + 3-cü forma. The tower was built centuries ago.', ex:[['The Maiden Tower was built many centuries ago.','Qız qalası əsrlər əvvəl tikilib.'],['The winners were announced yesterday.','Qaliblər dünən elan olundu.'],['My bike was stolen last night.','Velosipedim dünən gecə oğurlandı.'],['The film was directed by a young director.','Filmi gənc rejissor çəkib.']]},
      {t:'mc', q:'The Maiden Tower ___ many centuries ago.', o:['was built','built','is built','has build'], e:'Keçmiş passiv: was built.'},
      {t:'mc', q:'The winners ___ yesterday.', o:['were announced','was announced','announced','are announcing'], e:'Cəm + keçmiş: were announced.'},
      {t:'mc', q:'My bike ___ last night!', o:['was stolen','stole','was stealing','is stolen'], e:'Steal → stolen.'},
      {t:'mc', q:'The film was directed ___ a young director.', o:['by','from','with','of'], e:'Edən: by.'},
      {t:'order', az:'İmtahan nəticələri dünən elan olundu.', en:'The exam results were announced yesterday.', extra:['was','announce']},
      {t:'listen', en:'The meeting was cancelled because of the snow.', o:['The meeting was cancelled because of the snow.','The meeting was moved because of the snow.','The match was cancelled because of the snow.']}
    ]},
    { id:'b1-u4-l3', title:'Xəbər dili', items:[
      {t:'learn', title:'Xəbər və hesabat ifadələri', body:'Xəbərlərdə passiv və mənbəyə istinad çox işlənir. Məlumatı paylaşmazdan əvvəl mənbəyini yoxla: reliable source — etibarlı mənbə, fake news — saxta xəbər.', ex:[['According to the report…','Hesabata görə…'],['It is reported that…','Bildirilir ki…'],['headline','xəbər başlığı'],['reliable source','etibarlı mənbə'],['increase / decrease','artmaq / azalmaq']]},
      {t:'mc', q:'«According to» nə deməkdir?', o:['-a görə','-a qarşı','-dan sonra','-a baxmayaraq'], e:'According to the news — xəbərlərə görə.'},
      {t:'mc', q:'«Reliable source» nə deməkdir?', o:['etibarlı mənbə','köhnə mənbə','gizli mənbə','rəsmi xəbər'], e:'Reliable — etibarlı.'},
      {t:'mc', q:'Prices ___ by 10% last year.', o:['increased','increasing','increase','have increase'], e:'Last year: Past Simple — increased.'},
      {t:'mc', q:'«Headline» nə deməkdir?', o:['xəbər başlığı','baş redaktor','əsas xəbər kanalı','son dəqiqə'], e:'Qəzet və saytda xəbərin başlığı.'},
      {t:'order', az:'Hesabata görə, işsizlik azalıb.', en:'According to the report, unemployment has decreased.', extra:['increased','for']},
      {t:'listen', en:'It is reported that the airport will open next year.', o:['It is reported that the airport will open next year.','It is reported that the airport will close next year.','It was reported that the airport opened last year.']}
    ]}
  ]},
  { id:'b1-u5', title:'İş və karyera', grammar:'Gerund və infinitive · motivasiya məktubu · müsahibə', lessons:[
    { id:'b1-u5-l1', title:'-ing yoxsa to?', items:[
      {t:'learn', title:'Gerund (-ing) və infinitive (to)', body:'Bəzi fellərdən sonra -ING: enjoy, finish, avoid, mind, suggest, keep. Bəzilərindən sonra TO: want, decide, plan, hope, need, agree. Önlükdən (in, at, about, to) sonra həmişə -ING: interested in working, good at managing, look forward to hearing.', ex:[['I enjoy working with people.','İnsanlarla işləməyi xoşlayıram.'],['She decided to apply.','O, müraciət etməyə qərar verdi.'],["I'm interested in studying abroad.",'Xaricdə oxumaqla maraqlanıram.'],["I look forward to hearing from you.",'Cavabınızı gözləyirəm.']]},
      {t:'mc', q:'I enjoy ___ with people.', o:['working','to work','work','worked'], e:'Enjoy + -ing.'},
      {t:'mc', q:'She decided ___ for the job.', o:['to apply','applying','apply','applied'], e:'Decide + to.'},
      {t:'mc', q:"I'm interested in ___ abroad.", o:['studying','to study','study','studied'], e:'Önlükdən sonra -ing.'},
      {t:'mc', q:'He avoided ___ the question.', o:['answering','to answer','answer','answered'], e:'Avoid + -ing.'},
      {t:'order', az:'Mən marketinq sahəsində işləmək istəyirəm.', en:'I want to work in marketing.', extra:['working','at']},
      {t:'listen', en:"I'm looking forward to hearing from you.", o:["I'm looking forward to hearing from you.","I'm looking forward to hear from you.","I'm looking forward to meeting you."]}
    ]},
    { id:'b1-u5-l2', title:'Motivasiya məktubu', items:[
      {t:'learn', title:'Rəsmi məktubun əsas ifadələri', body:'Motivasiya (cover) məktubu qısa, konkret və nəzakətli olmalıdır: niyə yazırsan, nə təklif edirsən, sonda təşəkkür. «Write me soon» kimi qeyri-rəsmi ifadələr işlətmə.', ex:[['I am writing to apply for the position of…','… vəzifəsinə müraciət etmək üçün yazıram.'],['I have experience in organising events.','Tədbir təşkilində təcrübəm var.'],['I am confident that I can contribute to…','Əminəm ki, … töhfə verə bilərəm.'],['Thank you for considering my application.','Müraciətimi nəzərə aldığınız üçün təşəkkür edirəm.'],['I look forward to hearing from you.','Cavabınızı gözləyirəm.']]},
      {t:'mc', q:'Məktubun əvvəli: «I am writing ___ for the position of…»', o:['to apply','applying','for apply','apply'], e:'Məqsəd: I am writing to apply…'},
      {t:'mc', q:'I have experience ___ organising events.', o:['in','on','at','with'], e:'Experience in + -ing.'},
      {t:'mc', q:'Rəsmi məktubun ən uyğun sonu:', o:['I look forward to hearing from you.','Write me soon!','Bye, see you!','Waiting your answer.'], e:'Standart rəsmi bitiriş.'},
      {t:'mc', q:'«I am confident that…» nə deməkdir?', o:['Əminəm ki…','Utanıram ki…','Qorxuram ki…','Gizli saxlayıram ki…'], e:'Confident — əmin, özünəinamlı.'},
      {t:'order', az:'Müraciətimi nəzərə aldığınız üçün təşəkkür edirəm.', en:'Thank you for considering my application.', extra:['consider','to']},
      {t:'listen', en:'I would welcome the opportunity to discuss my application.', o:['I would welcome the opportunity to discuss my application.','I would welcome the opportunity to discuss my salary.','I will welcome the opportunity to discuss my application.']}
    ]},
    { id:'b1-u5-l3', title:'Müsahibədə özünü təqdim et', items:[
      {t:'learn', title:'Müsahibənin əsas sualları', body:'«Tell me about yourself» sualına doğum tarixindən yox, peşəkar profilindən başla: təhsil + təcrübə + nəyi yaxşı bacarırsan + niyə bu iş. Zəif tərəfi deyəndə onun üzərində necə işlədiyini də əlavə et.', ex:[["I'm a final-year economics student.",'İqtisadiyyat üzrə son kurs tələbəsiyəm.'],['One of my strengths is solving problems.','Güclü tərəflərimdən biri problem həll etməkdir.'],["I'm working on my public speaking.",'Çıxış bacarığım üzərində işləyirəm.'],['Where do you see yourself in five years?','Beş ildən sonra özünü harada görürsən?']]},
      {t:'mc', q:'«Tell me about yourself» sualına ən yaxşı başlanğıc:', o:["I'm a final-year economics student with experience in data analysis.",'I was born in 2001 and I like pizza.',"I don't know what to say.",'I need this job because I need money.'], e:'Peşəkar profil ilə başla.'},
      {t:'mc', q:'One of my strengths is ___ problems.', o:['solving','to solve','solve','solved'], e:'«is» + -ing (isim kimi): solving problems.'},
      {t:'mc', q:'Zəif tərəfini peşəkar şəkildə necə deyərsən?', o:["I sometimes spend too long on details, so I'm learning to manage my time better.",'I have no weaknesses.',"I'm lazy.",'I hate working in teams.'], e:'Zəif tərəf + onu necə düzəltdiyin.'},
      {t:'mc', q:'«Where do you see yourself in five years?» nə deməkdir?', o:['Beş ildən sonra özünü harada görürsən?','Beş il əvvəl harada idin?','Beş ildir harada işləyirsən?','Beş il ərzində nə öyrəndin?'], e:'Gələcək planlarını soruşur.'},
      {t:'order', az:'Mən komandada işləməyi xoşlayıram.', en:['I enjoy working in a team.','I like working in a team.'], extra:['to','work']},
      {t:'listen', en:'Why do you want to work for our company?', o:['Why do you want to work for our company?','Why did you leave your last company?','Why do you want to work for a big company?']}
    ]}
  ]},
  { id:'b1-u6', title:'Söhbəti ötürmək', grammar:'Reported speech', lessons:[
    { id:'b1-u6-l1', title:'Dediklərini ötür', items:[
      {t:'learn', title:'say və tell, zamanın bir addım geri çəkilməsi', body:'Kiminsə sözünü ötürəndə zaman adətən bir addım keçmişə gedir: "I am tired" → She said she was tired. SAY (that)… / TELL somebody (that)… «Said me» demək səhvdir.', ex:[['"I am tired." → She said she was tired.','«Yorğunam.» → Yorğun olduğunu dedi.'],['"I like it." → He said he liked it.','«Xoşuma gəlir.» → Xoşuna gəldiyini dedi.'],['She told me that she was leaving.','Mənə getdiyini dedi.']]},
      {t:'mc', q:'"I am busy," she said. → She said she ___ busy.', o:['was','is','has been','were'], e:'Am → was.'},
      {t:'mc', q:'"I work in a bank." → He said he ___ in a bank.', o:['worked','works','working','has work'], e:'Work → worked.'},
      {t:'mc', q:'She ___ me that she was leaving.', o:['told','said','spoke','talked'], e:'Tell + kimə: told me.'},
      {t:'mc', q:'He ___ that he was hungry.', o:['said','told','told to','said me'], e:'Kimə deyildiyi göstərilmir: said.'},
      {t:'order', az:'O dedi ki, yorğundur.', en:['She said that she was tired.','She said she was tired.'], extra:['told','is']},
      {t:'listen', en:'He told me he would call later.', o:['He told me he would call later.','He told me he called later.','He said me he would call later.']}
    ]},
    { id:'b1-u6-l2', title:'Zamanların dəyişməsi', items:[
      {t:'learn', title:'will → would, can → could…', body:'will → would, can → could, have done → had done, did → had done. Vaxt sözləri də dəyişir: today → that day, tomorrow → the next day, yesterday → the day before.', ex:[['"I will help you." → She said she would help me.','Kömək edəcəyini dedi.'],['"I can swim." → He said he could swim.','Üzə bildiyini dedi.'],['"I have finished." → She said she had finished.','Bitirdiyini dedi.'],['"…tomorrow" → "…the next day"','sabah → ertəsi gün']]},
      {t:'mc', q:'"I will help you." → She said she ___ help me.', o:['would','will','can','helps'], e:'Will → would.'},
      {t:'mc', q:'"I can swim." → He said he ___ swim.', o:['could','can','cans','would can'], e:'Can → could.'},
      {t:'mc', q:'"I have finished." → She said she ___ finished.', o:['had','has','have','was'], e:'Have finished → had finished.'},
      {t:'mc', q:'"I\'ll see you tomorrow." → He said he would see me ___.', o:['the next day','tomorrow','yesterday','the day before'], e:'Tomorrow → the next day.'},
      {t:'order', az:'O dedi ki, həmin gün gələ bilməz.', en:["He said that he couldn't come that day.","He said he couldn't come that day."], extra:["can't",'today']},
      {t:'listen', en:'She said she had already seen the film.', o:['She said she had already seen the film.','She said she has already seen the film.','She said she had already seen the play.']}
    ]},
    { id:'b1-u6-l3', title:'Sualları ötürmək', items:[
      {t:'learn', title:'asked + if / sual sözü', body:'Bəli/xeyr sualı → asked IF (və ya whether). Sual sözlü sual → asked + where / what… Diqqət: söz sırası adi cümlə kimidir: She asked where I lived (where did I live — səhv).', ex:[['"Do you like coffee?" → He asked if I liked coffee.','Qəhvə sevib-sevmədiyimi soruşdu.'],['"Where do you live?" → She asked where I lived.','Harada yaşadığımı soruşdu.'],['"What is your name?" → He asked what my name was.','Adımın nə olduğunu soruşdu.']]},
      {t:'mc', q:'"Do you like coffee?" → He asked ___ I liked coffee.', o:['if','that','do','what'], e:'Bəli/xeyr sualı: if.'},
      {t:'mc', q:'"Where do you live?" → She asked me where I ___.', o:['lived','did live','do live','live'], e:'Söz sırası adi: where I lived.'},
      {t:'mc', q:'Hansı düzgündür?', o:['He asked me what my name was.','He asked me what was my name?','He asked me what is my name.','He asked to me what my name was.'], e:'Sual sırası yox, adi cümlə sırası.'},
      {t:'mc', q:'The interviewer asked me why I ___ this job.', o:['wanted','did I want','do I want','want I'], e:'Why I wanted…'},
      {t:'order', az:'O, məndən saatın neçə olduğunu soruşdu.', en:'She asked me what time it was.', extra:['is','did']},
      {t:'listen', en:'They asked whether we needed help.', o:['They asked whether we needed help.','They asked whether we wanted help.','They asked why we needed help.']}
    ]}
  ]},
  { id:'b1-u7', title:'Münasibətlər', grammar:'Relative clauses: who / which / that / where / whose', lessons:[
    { id:'b1-u7-l1', title:'who, which, that', items:[
      {t:'learn', title:'Təyin budaq cümlələri', body:'Kimi və ya nəyi nəzərdə tutduğunu dəqiqləşdirmək üçün: WHO — insanlar, WHICH — əşyalar, THAT — hər ikisi. Azərbaycan dilindəki «Bakıda yaşayan dost» ingiliscədə «the friend who lives in Baku» olur — söz sırası tərsinədir.', ex:[['the man who lives next door','qonşuluqda yaşayan kişi'],['the book which / that I read','oxuduğum kitab'],['a friend who speaks five languages','beş dil bilən dost']]},
      {t:'mc', q:"She's the teacher ___ helped me.", o:['who','which','where','what'], e:'İnsan: who.'},
      {t:'mc', q:'This is the phone ___ I bought yesterday.', o:['which','who','where','whose'], e:'Əşya: which (və ya that).'},
      {t:'mc', q:'I have a friend ___ speaks five languages.', o:['who','which','what',"whom's"], e:'İnsan: who.'},
      {t:'mc', q:'Hansı düzgündür?', o:['The movie that we watched was great.','The movie who we watched was great.','The movie what we watched was great.','The movie where we watched was great.'], e:'Əşya: that / which. «What» burada işlənmir.'},
      {t:'order', az:'Bu, Bakıda yaşayan dostumdur.', en:['This is my friend who lives in Baku.','This is my friend that lives in Baku.'], extra:['which','living']},
      {t:'listen', en:'The woman who called you is my manager.', o:['The woman who called you is my manager.','The woman who called you is my mother.','The man who called you is my manager.']}
    ]},
    { id:'b1-u7-l2', title:'where, whose, when', items:[
      {t:'learn', title:'Yer, yiyəlik, zaman', body:'WHERE — yer, WHOSE — kimin (yiyəlik), WHEN — zaman. Whose ≠ who\'s (who is).', ex:[['the café where we first met','ilk dəfə görüşdüyümüz kafe'],['a girl whose brother is a pilot','qardaşı pilot olan qız'],['the year when everything changed','hər şeyin dəyişdiyi il']]},
      {t:'mc', q:'This is the café ___ we first met.', o:['where','which','who','when'], e:'Yer: where.'},
      {t:'mc', q:'I know a girl ___ brother is a pilot.', o:['whose',"who",'who\'s','which'], e:'Yiyəlik: whose brother.'},
      {t:'mc', q:'2020 was the year ___ everything changed.', o:['when','which','where','who'], e:'Zaman: when.'},
      {t:'mc', q:"That's the man ___ car was stolen.", o:['whose','who','which',"that's"], e:'Onun maşını: whose car.'},
      {t:'order', az:'Bu, mənim doğulduğum şəhərdir.', en:['This is the city where I was born.'], extra:['which','when']},
      {t:'listen', en:"She's the student whose essay won the prize.", o:["She's the student whose essay won the prize.","She's the student who wrote the essay.","He's the student whose essay won the prize."]}
    ]},
    { id:'b1-u7-l3', title:'Münasibətlər lüğəti', items:[
      {t:'learn', title:'İnsanlarla münasibətlər', body:'Bu ifadələr həm gündəlik həyatda, həm də iş mühitində çox işlənir.', ex:[['get on well with','yaxşı yola getmək'],['fall out with','küsmək, aranı vurmaq'],['make up','barışmaq'],['rely on','etibar etmək, arxalanmaq'],['acquaintance','tanış'],['colleague','iş yoldaşı, həmkar']]},
      {t:'mc', q:'«Get on well with someone» nə deməkdir?', o:['biri ilə yaxşı yola getmək','biri ilə mübahisə etmək','birinə minmək','birini gözləmək'], e:'I get on well with my colleagues.'},
      {t:'mc', q:'«Acquaintance» nə deməkdir?', o:['tanış','yaxın dost','qohum','həmkar'], e:'Yaxın olmayan tanış.'},
      {t:'mc', q:'We had an argument, but we ___ the next day.', o:['made up','made out','fell out','got on'], e:'Make up — barışmaq.'},
      {t:'mc', q:'You can always rely ___ me.', o:['on','at','to','in'], e:'Rely on — arxalanmaq.'},
      {t:'order', az:'O, iş yoldaşları ilə yaxşı yola gedir.', en:'She gets on well with her colleagues.', extra:['get','to']},
      {t:'listen', en:'A good friend is someone you can trust.', o:['A good friend is someone you can trust.','A good friend is someone you can call.','A good friend is someone who can trust.']}
    ]}
  ]},
  { id:'b1-u8', title:'Keçmiş vərdişlər', grammar:'used to / be used to / would', lessons:[
    { id:'b1-u8-l1', title:'used to', items:[
      {t:'learn', title:'Əvvəllər belə idi, indi yox', body:'USED TO + fel — keçmişdəki vərdiş və ya vəziyyət, indi artıq doğru deyil. İnkar və sualda «use to»: I didn\'t use to… Did you use to…?', ex:[['I used to live in Ganja.','Əvvəllər Gəncədə yaşayırdım.'],["She didn't use to like vegetables.",'Əvvəllər tərəvəz sevmirdi.'],['Did you use to have long hair?','Əvvəllər saçın uzun idi?']]},
      {t:'mc', q:'I ___ play football every day when I was a child.', o:['used to','use to','was used to','using to'], e:'Keçmiş vərdiş: used to.'},
      {t:'mc', q:"She didn't ___ like vegetables.", o:['use to','used to','uses to','using'], e:'Didn\'t + use to.'},
      {t:'mc', q:'___ you use to have long hair?', o:['Did','Do','Were','Have'], e:'Sual: Did you use to…?'},
      {t:'mc', q:'«I used to smoke» nə deməkdir?', o:['Əvvəllər siqaret çəkirdim (indi yox).','İndi siqaret çəkirəm.','Siqaretə öyrəşmişəm.','Siqaret çəkməyə başlayıram.'], e:'Used to = əvvəllər (indi yox).'},
      {t:'order', az:'Mən əvvəllər Gəncədə yaşayırdım.', en:'I used to live in Ganja.', extra:['use','was']},
      {t:'listen', en:'We used to go to the village every summer.', o:['We used to go to the village every summer.','We used to go to the sea every summer.','We go to the village every summer.']}
    ]},
    { id:'b1-u8-l2', title:'used to və be used to', items:[
      {t:'learn', title:'Öyrəşmək: be / get used to + -ing', body:'BE USED TO + -ing / isim — bir şeyə öyrəşmiş olmaq. GET USED TO — öyrəşmək (proses). Bunu «used to + fel» (əvvəllər) ilə qarışdırma!', ex:[["I'm used to getting up early.",'Tez durmağa öyrəşmişəm.'],["I'm not used to the cold.",'Soyuğa öyrəşməmişəm.'],["You'll soon get used to it.",'Tezliklə öyrəşəcəksən.'],['I used to read comics.','Əvvəllər komiks oxuyurdum.']]},
      {t:'mc', q:"I'm used to ___ up early.", o:['getting','get','got','to get'], e:'Be used to + -ing.'},
      {t:'mc', q:'«I\'m not used to the cold» nə deməkdir?', o:['Soyuğa öyrəşməmişəm.','Əvvəllər soyuq yox idi.','Soyuğu sevmirəm.','Soyuqda istifadə etmirəm.'], e:'Be used to — öyrəşmiş olmaq.'},
      {t:'mc', q:'It took me a month to ___ used to my new job.', o:['get','be','use','make'], e:'Get used to — öyrəşmək (proses).'},
      {t:'mc', q:'When I was young, I ___ read comics. (keçmiş vərdiş)', o:['used to','am used to','got used to','use'], e:'Keçmiş vərdiş: used to + fel.'},
      {t:'order', az:'Mən böyük şəhərdə yaşamağa öyrəşmişəm.', en:['I am used to living in a big city.',"I'm used to living in a big city."], extra:['live','use']},
      {t:'listen', en:"You'll soon get used to the new system.", o:["You'll soon get used to the new system.",'You used to use the new system.',"You'll soon get used to the new city."]}
    ]},
    { id:'b1-u8-l3', title:'Xatirələr: would', items:[
      {t:'learn', title:'would — keçmişdə təkrarlanan hərəkət', body:'Xatirə danışanda təkrarlanan HƏRƏKƏT üçün WOULD da işlənir: Every summer we would visit grandma. Amma VƏZİYYƏT felləri (have, live, like, be) ilə yalnız used to: I used to have a dog (I would have a dog — səhv).', ex:[['Every evening my grandfather would tell us stories.','Hər axşam babam bizə nağıl danışardı.'],['We would play outside until dark.','Qaranlıq düşənə qədər çöldə oynayardıq.'],['I used to have a dog.','Əvvəllər itim var idi.']]},
      {t:'mc', q:'Every evening my grandfather ___ tell us stories.', o:['would','will','is','has'], e:'Təkrarlanan hərəkət: would tell.'},
      {t:'mc', q:'Hansı cümlə SƏHVDİR?', o:['I would have a dog when I was a child.','I used to have a dog when I was a child.','We would play outside every day.','We used to play outside every day.'], e:'Have (vəziyyət) would ilə işlənmir — used to lazımdır.'},
      {t:'mc', q:'Keçmiş vərdiş mənasında «would» hansı fellərlə işlənmir?', o:['vəziyyət felləri (have, live, like)','hərəkət felləri (play, visit)','hər ikisi','heç biri'], e:'Vəziyyət üçün used to.'},
      {t:'mc', q:'When we were students, we ___ study in the library until late.', o:['would','will','are','did used'], e:'Təkrarlanan hərəkət: would study.'},
      {t:'order', az:'Hər yay dənizə gedərdik.', en:['Every summer we would go to the sea.','We would go to the sea every summer.'], extra:['will','used']},
      {t:'listen', en:'My mother would always sing in the kitchen.', o:['My mother would always sing in the kitchen.','My mother will always sing in the kitchen.','My sister would always sing in the kitchen.']}
    ]}
  ]}
]},
{ id:'b2', name:'B2', title:'Yüksək', color:'#e0662f', units:[
  { id:'b2-u1', title:'Peşmançılıq və arzular', grammar:'Third Conditional · I wish / If only · qarışıq şərtlər', lessons:[
    { id:'b2-u1-l1', title:'Third Conditional', items:[
      {t:'learn', title:'Keçmişi dəyişə bilsəydik…', body:'Keçmişdə baş verməyən, xəyali vəziyyət və peşmançılıq: IF + had + 3-cü forma, WOULD HAVE + 3-cü forma. Azərbaycan dilindəki «-saydım, -ardım» kimi, amma hər iki hissə keçmişə aiddir.', ex:[['If I had studied harder, I would have passed.','Daha yaxşı oxusaydım, keçərdim.'],["If we had left earlier, we wouldn't have missed the bus.",'Tez çıxsaydıq, avtobusu buraxmazdıq.'],['She would have come if you had invited her.','Dəvət etsəydin, gələrdi.'],['What would you have done?','Sən nə edərdin?']]},
      {t:'mc', q:'If I ___ harder, I would have passed.', o:['had studied','studied','would study','have studied'], e:'If + had + 3-cü forma.'},
      {t:'mc', q:'If we had left earlier, we ___ the flight.', o:["wouldn't have missed","didn't miss","won't miss","wouldn't miss"], e:'Nəticə hissəsi: would (not) have + 3-cü forma.'},
      {t:'mc', q:'She would have come if you ___ her.', o:['had invited','invited','would invite','have invited'], e:'If-li hissədə: had invited.'},
      {t:'mc', q:'«If I had known…» nə deməkdir?', o:['Bilsəydim… (amma bilmirdim)','Bilirəm ki…','Bilsəm…','Biləcəyəm…'], e:'Third conditional — keçmişdə olmayan vəziyyət.'},
      {t:'order', az:'Daha tez çıxsaydıq, avtobusa çatardıq.', en:'If we had left earlier, we would have caught the bus.', extra:['will','leave']},
      {t:'listen', en:'If you had told me, I would have helped you.', o:['If you had told me, I would have helped you.','If you tell me, I will help you.','If you had told me, I would help you.']},
      {t:'speak', en:'If I had known, I would have called you.', az:'Bilsəydim, sənə zəng edərdim.'}
    ]},
    { id:'b2-u1-l2', title:'I wish / If only', items:[
      {t:'learn', title:'Arzu və təəssüf', body:'WISH + keçmiş zaman — indiki vəziyyətdən narazılıq: I wish I had more time. WISH + had + 3-cü forma — keçmişə görə təəssüf: I wish I had studied more. WISH / IF ONLY + would — başqasının hərəkətindən əsəbiləşmək: I wish you would listen! «If only» daha güclü səslənir.', ex:[['I wish I had more free time.','Kaş daha çox boş vaxtım olaydı.'],['I wish I had gone to the party.','Kaş o məclisə gedəydim.'],['If only it would stop raining!','Kaş yağış dayanaydı!'],['I wish I could speak French.','Kaş fransızca danışa biləydim.']]},
      {t:'mc', q:'I wish I ___ more free time. (indi yoxdur)', o:['had','have','will have','would have'], e:'İndiki arzu: wish + keçmiş zaman.'},
      {t:'mc', q:'I wish I ___ to the party yesterday.', o:['had gone','went','go','would go'], e:'Keçmişə təəssüf: wish + had + 3-cü forma.'},
      {t:'mc', q:'If only it ___ raining!', o:['would stop','stops','had stop','will stop'], e:'Əsəbilik / güclü arzu: would stop.'},
      {t:'mc', q:'«I wish I could speak French» nə deməkdir?', o:['Kaş fransızca danışa biləydim.','Fransızca danışa bilirəm.','Fransızca danışmaq istəmirəm.','Fransızca danışacağam.'], e:'Wish + could — indiki bacarıqsızlığa təəssüf.'},
      {t:'order', az:'Kaş daha çox oxuyaydım. (keçmişdə)', en:'I wish I had studied more.', extra:['have','would']},
      {t:'dict', en:'I wish I lived closer to the sea.', extra:['live','would']},
      {t:'speak', en:'If only I had more time.', az:'Kaş daha çox vaxtım olaydı.'}
    ]},
    { id:'b2-u1-l3', title:'Qarışıq şərtlər', items:[
      {t:'learn', title:'Keçmiş və indiki qarışanda', body:'Keçmişdəki qərarın İNDİYƏ təsiri: If + had + 3-cü forma, WOULD + fel: If I had taken that job, I would be rich now. İndiki xüsusiyyətin KEÇMİŞƏ təsiri: If + keçmiş, WOULD HAVE + 3-cü forma: If I were more careful, I wouldn\'t have lost it.', ex:[['If I had taken that job, I would be in London now.','O işi qəbul etsəydim, indi Londonda olardım.'],["If I hadn't missed the train, I'd be home by now.",'Qatarı buraxmasaydım, artıq evdə olardım.'],["If she weren't so shy, she would have spoken to him.",'Bu qədər utancaq olmasaydı, onunla danışardı.']]},
      {t:'mc', q:'If I had accepted that offer, I ___ in London now.', o:['would be living','would have lived','will live','lived'], e:'Keçmiş qərar → indiki nəticə: would + fel.'},
      {t:'mc', q:"If she weren't so shy, she ___ to him at the party.", o:['would have spoken','would speak','spoke','will speak'], e:'İndiki xüsusiyyət → keçmiş nəticə: would have spoken.'},
      {t:'mc', q:'Hansı cümlə keçmiş qərarın İNDİYƏ təsirini göstərir?', o:['If I had studied medicine, I would be a doctor now.','If I study medicine, I will be a doctor.','If I studied medicine, I would be a doctor.','If I had studied medicine, I would have been a doctor in 2020.'], e:'«now» — indiki nəticə.'},
      {t:'order', az:'O işi qəbul etsəydim, indi Londonda olardım.', en:['If I had taken that job, I would be in London now.',"If I had taken that job, I'd be in London now."], extra:['will','have']},
      {t:'listen', en:"If I hadn't missed the train, I'd be home by now.", o:["If I hadn't missed the train, I'd be home by now.","If I hadn't missed the train, I'd have been home.","If I don't miss the train, I'll be home soon."]},
      {t:'speak', en:'If I had taken that job, I would be in London now.', az:'O işi qəbul etsəydim, indi Londonda olardım.'}
    ]}
  ]},
  { id:'b2-u2', title:'Ehtimallar', grammar:'must / might / can\'t (have done) · ehtimal dərəcələri', lessons:[
    { id:'b2-u2-l1', title:'must, might, can\'t', items:[
      {t:'learn', title:'Nəticə çıxarmaq (indiki)', body:'MUST BE — əminəm ki, belədir. MIGHT / MAY / COULD BE — ola bilər. CAN\'T BE — ola bilməz. Diqqət: burada «mustn\'t» işlənmir, inkar «can\'t»-dır.', ex:[["She's been working all day. She must be exhausted.",'Bütün günü işləyib. Yəqin ki, çox yorğundur.'],["That can't be Leyla — she's in Paris.",'O, Leyla ola bilməz — Parisdədir.'],['He might be in the library.','Kitabxanada ola bilər.'],['You must be joking!','Yəqin zarafat edirsən!']]},
      {t:'mc', q:"She's been working all day. She ___ be exhausted.", o:['must','can\'t','might not',"mustn't"], e:'Güclü əminlik: must be.'},
      {t:'mc', q:"That ___ be Leyla — she's in Paris this week.", o:["can't",'must','may','should'], e:'Mümkün deyil: can\'t be.'},
      {t:'mc', q:"I'm not sure where he is. He ___ be in the library.", o:['might','must',"can't",'should'], e:'Ehtimal: might.'},
      {t:'mc', q:'«It can\'t be true!» nə deməkdir?', o:['Bu doğru ola bilməz!','Bu doğru olmamalıdır.','Bunu deyə bilmərəm.','Doğru olmaya bilər.'], e:'Can\'t be — qeyri-mümkün.'},
      {t:'order', az:'O, evdə olmalıdır, çünki işıqlar yanır.', en:'He must be at home because the lights are on.', extra:["can't",'is']},
      {t:'listen', en:'You must be joking!', o:['You must be joking!','You might be joking!','You must be hungry!']},
      {t:'speak', en:"That can't be right — let me check again.", az:'Bu düz ola bilməz — bir də yoxlayım.'}
    ]},
    { id:'b2-u2-l2', title:'must have done', items:[
      {t:'learn', title:'Keçmiş haqqında nəticə çıxarmaq', body:'MUST HAVE + 3-cü forma — yəqin ki, olub. MIGHT HAVE — ola bilər ki, olub. CAN\'T HAVE — ola bilməz ki, olsun. SHOULD HAVE — etməli idin (amma etmədin): təəssüf və ya tənqid.', ex:[['The ground is wet. It must have rained.','Yer yaşdır. Yəqin yağış yağıb.'],["He can't have seen me.",'O, məni görmüş ola bilməz.'],['They might have got lost.','Yolu azmış ola bilərlər.'],['You should have told me earlier!','Mənə daha tez deməli idin!']]},
      {t:'mc', q:'The ground is wet. It ___ rained last night.', o:['must have',"can't have",'should have','must'], e:'Keçmiş haqqında əminlik: must have.'},
      {t:'mc', q:'He ___ seen me — he walked right past without saying hello.', o:["can't have",'must have','should have','would'], e:'Ola bilməz ki, görsün: can\'t have.'},
      {t:'mc', q:"I'm not sure why she left. She ___ been tired.", o:['might have','must',"can't have",'should'], e:'Ehtimal: might have been.'},
      {t:'mc', q:"You ___ told me earlier! Now it's too late.", o:['should have','must have','might have',"can't have"], e:'Tənqid / təəssüf: should have.'},
      {t:'order', az:'O, qatarı buraxmış olmalıdır.', en:'She must have missed the train.', extra:['missing','can']},
      {t:'dict', en:'They might have got lost on the way.', extra:['must','get']},
      {t:'speak', en:'I should have checked my email earlier.', az:'E-poçtumu daha tez yoxlamalı idim.'}
    ]},
    { id:'b2-u2-l3', title:'Ehtimal dərəcələri', items:[
      {t:'learn', title:'Nə qədər əminsən?', body:'Rəsmi danışıqda və yazıda ehtimalı dəqiq ifadə etmək vacibdir. Diqqət: likely sifətdir: He is likely to come. Probably isə zərfdir: He will probably come.', ex:[['It is likely to rain.','Yağış yağması ehtimalı böyükdür.'],["He's unlikely to come.",'Onun gəlməsi ehtimalı azdır.'],["There's a good chance we'll win.",'Qalib gəlmək şansımız yüksəkdir.'],["I doubt he'll agree.",'Razılaşacağına şübhə edirəm.']]},
      {t:'mc', q:'«It is likely to rain» nə deməkdir?', o:['Yağış yağması ehtimalı böyükdür.','Yağış yağmayacaq.','Yağışı sevirəm.','Yağış yağmalıdır.'], e:'Likely — ehtimal olunan.'},
      {t:'mc', q:'Ən az ehtimalı bildirən hansıdır?', o:["It's highly unlikely.","It's quite likely.",'It will probably happen.',"There's a good chance."], e:'Highly unlikely — çox az ehtimal.'},
      {t:'mc', q:"She will ___ get the job — she's the best candidate.", o:['probably','probable','likely to','unlikely'], e:'Will + probably + fel.'},
      {t:'mc', q:"I ___ he'll come — he's very busy.", o:['doubt','sure','think surely','certain'], e:'I doubt — şübhə edirəm.'},
      {t:'order', az:'Onun gəlməsi ehtimalı azdır.', en:['He is unlikely to come.',"He's unlikely to come."], extra:['likely','coming']},
      {t:'listen', en:"There's a good chance we'll finish on time.", o:["There's a good chance we'll finish on time.","There's no chance we'll finish on time.","There's a good chance we'll start on time."]},
      {t:'speak', en:"It's highly unlikely that prices will fall.", az:'Qiymətlərin düşməsi çox az ehtimal olunur.'}
    ]}
  ]},
  { id:'b2-u3', title:'Akademik yazı', grammar:'however, although, despite, whereas · therefore, moreover · hedging', lessons:[
    { id:'b2-u3-l1', title:'Ziddiyyət bildirmək', items:[
      {t:'learn', title:'however, although, despite, whereas', body:'ALTHOUGH + cümlə (subyekt + fel). DESPITE / IN SPITE OF + isim və ya -ing. HOWEVER — yeni cümlənin əvvəlində, vergüllə. WHEREAS — iki faktı qarşılaşdırmaq üçün. «Despite of» — səhvdir!', ex:[['Although it was raining, we went out.','Yağış yağsa da, çölə çıxdıq.'],['Despite the rain, we went out.','Yağışa baxmayaraq çölə çıxdıq.'],['The plan was good. However, it was expensive.','Plan yaxşı idi. Lakin baha idi.'],['Some prefer online classes, whereas others do not.','Bəziləri onlayn dərsi seçir, digərləri isə yox.']]},
      {t:'mc', q:'___ it was raining, we went out.', o:['Although','Despite','However','In spite'], e:'Ardınca cümlə gəlir: although.'},
      {t:'mc', q:'___ the rain, we went out.', o:['Despite','Although','However','Even though'], e:'Ardınca isim gəlir: despite.'},
      {t:'mc', q:'The plan was good. ___, it was too expensive.', o:['However','Although','Despite','Whereas'], e:'Yeni cümlə + vergül: However,'},
      {t:'mc', q:'Some students prefer online classes, ___ others prefer face-to-face learning.', o:['whereas','despite','however','although of'], e:'İki faktın qarşılaşdırılması: whereas.'},
      {t:'order', az:'Çətinliklərə baxmayaraq, layihəni bitirdik.', en:'Despite the difficulties, we finished the project.', extra:['Although','of']},
      {t:'dict', en:'Although the results were positive, more research is needed.', extra:['Despite','however']},
      {t:'speak', en:'However, there are some limitations to this study.', az:'Lakin bu tədqiqatın bəzi məhdudiyyətləri var.'}
    ]},
    { id:'b2-u3-l2', title:'Səbəb, nəticə, əlavə', items:[
      {t:'learn', title:'Mətni məntiqlə bağlamaq', body:'Nəticə: therefore, as a result, consequently. Əlavə: moreover, furthermore, in addition. Səbəb: due to / because of + isim, because + cümlə.', ex:[['Demand increased. As a result, prices went up.','Tələb artdı. Nəticədə qiymətlər qalxdı.'],['The course is affordable. Moreover, it is flexible.','Kurs əlçatandır. Üstəlik, çevikdir.'],['The flight was delayed due to bad weather.','Uçuş pis hava səbəbindən gecikdi.'],['Therefore, more research is needed.','Buna görə də daha çox tədqiqat lazımdır.']]},
      {t:'mc', q:'The demand increased. ___, prices went up.', o:['As a result','Moreover','Although','Despite'], e:'Nəticə: As a result.'},
      {t:'mc', q:'The course is affordable. ___, it is very flexible.', o:['Moreover','Therefore','However','Whereas'], e:'Əlavə: Moreover.'},
      {t:'mc', q:'The flight was delayed ___ bad weather.', o:['due to','because','therefore','as a result'], e:'İsimdən əvvəl: due to.'},
      {t:'mc', q:'«Therefore» nə deməkdir?', o:['buna görə də','buna baxmayaraq','bundan əlavə','məsələn'], e:'Therefore = as a result.'},
      {t:'order', az:'Buna görə də, daha çox tədqiqat lazımdır.', en:'Therefore, more research is needed.', extra:['However','needs']},
      {t:'listen', en:'Furthermore, the data shows a clear trend.', o:['Furthermore, the data shows a clear trend.','However, the data shows a clear trend.','Furthermore, the data shows no clear trend.']},
      {t:'speak', en:'As a result, unemployment has decreased.', az:'Nəticədə işsizlik azalıb.'}
    ]},
    { id:'b2-u3-l3', title:'Esse və ehtiyatlı dil', items:[
      {t:'learn', title:'Esse quruluşu və hedging', body:'Esse: giriş (əsas fikir — thesis statement), əsas abzaslar (hər birinin ilk cümləsi — topic sentence), nəticə. Akademik yazıda mütləq ifadələrdən qaç (Everybody knows, It\'s obvious). Ehtiyatlı dil (hedging) işlət: It seems that, The results suggest, It could be argued that.', ex:[['The results suggest that…','Nəticələr göstərir ki…'],['It seems that young people prefer…','Görünür, gənclər … üstünlük verir.'],['It could be argued that…','Belə iddia etmək olar ki…'],['In conclusion, …','Sonda / Yekun olaraq…']]},
      {t:'mc', q:'Esse girişində əsas fikri bildirən cümlə necə adlanır?', o:['thesis statement','topic sentence','conclusion','reference'], e:'Thesis statement — essenin əsas iddiası.'},
      {t:'mc', q:'Akademik üsluba ən uyğun hansıdır?', o:['The results suggest that…','The results prove 100% that…','Everybody knows that…',"It's obvious that…"], e:'Ehtiyatlı və dəqiq dil.'},
      {t:'mc', q:'«It could be argued that…» nə deməkdir?', o:['Belə iddia etmək olar ki…','Mübahisə etmək lazımdır ki…','Heç kim deyə bilməz ki…','Sübut olunub ki…'], e:'Fikri ehtiyatla təqdim etmək.'},
      {t:'mc', q:'Nəticə hissəsinə uyğun başlanğıc:', o:['In conclusion, …','Firstly, …','For example, …','On the other hand, …'], e:'In conclusion / To conclude.'},
      {t:'order', az:'Görünür, gənclər onlayn öyrənməyə üstünlük verir.', en:'It seems that young people prefer online learning.', extra:['seem','prefers']},
      {t:'dict', en:'This essay will examine the main causes of unemployment.', extra:['examines','cause']},
      {t:'speak', en:'In conclusion, technology has changed the way we learn.', az:'Sonda, texnologiya öyrənmə tərzimizi dəyişib.'}
    ]}
  ]},
  { id:'b2-u4', title:'Müzakirə və debat', grammar:'Fikir bildirmə · razılaşma və etiraz · arqument', lessons:[
    { id:'b2-u4-l1', title:'Fikir bildirmək', items:[
      {t:'learn', title:'Fikrini peşəkar şəkildə de', body:'«I think» yaxşıdır, amma müxtəliflik fikrini daha inandırıcı edir. Güclü fikir: I strongly believe. Yumşaq fikir: It seems to me.', ex:[['In my opinion, …','Mənim fikrimcə…'],['From my point of view, …','Mənim baxış bucağımdan…'],['I strongly believe that…','Qəti inanıram ki…'],["As far as I'm concerned, …",'Mənə qalsa…'],['It seems to me that…','Mənə elə gəlir ki…']]},
      {t:'mc', q:'Güclü fikir bildirən hansıdır?', o:['I strongly believe that…','I might think that…',"Maybe, I don't know…","I'm not sure, but…"], e:'Strongly believe — qəti inanmaq.'},
      {t:'mc', q:'«As far as I\'m concerned» nə deməkdir?', o:['Mənə qalsa / məncə','Məni maraqlandırmır','Mən uzaqdayam','Məndən soruşmayın'], e:'Şəxsi fikir ifadəsi.'},
      {t:'mc', q:'From my point ___ view, …', o:['of','in','on','at'], e:'Sabit ifadə: point of view.'},
      {t:'mc', q:'Hansı ifadə rəsmi müzakirəyə uyğun DEYİL?', o:["I think you're totally stupid.","I see your point, but…","That's an interesting idea.","I'm afraid I disagree."], e:'Şəxsiyyətə hücum — qəbuledilməzdir.'},
      {t:'order', az:'Məncə, təhsil hamı üçün pulsuz olmalıdır.', en:'In my opinion, education should be free for everyone.', extra:['must','to']},
      {t:'listen', en:'It seems to me that we need more time.', o:['It seems to me that we need more time.','It seems to me that we need more money.','It seemed to me that we needed more time.']},
      {t:'speak', en:'In my opinion, remote work increases productivity.', az:'Məncə, məsafədən iş məhsuldarlığı artırır.'}
    ]},
    { id:'b2-u4-l2', title:'Razılaşmaq və etiraz etmək', items:[
      {t:'learn', title:'Nəzakətlə razılaşmamaq', body:'Etiraz edəndə əvvəlcə qarşı tərəfin fikrini qəbul et, sonra öz fikrini de: «I see what you mean, but…». Bu həm iş yerində, həm də akademik müzakirədə hörmət göstərir.', ex:[["I couldn't agree more.",'Tamamilə razıyam.'],["That's a good point, but…",'Yaxşı fikirdir, amma…'],['I see what you mean; however, …','Nə demək istədiyini başa düşürəm, lakin…'],["I'm afraid I disagree.",'Təəssüf ki, razı deyiləm.'],['With all due respect, …','Bütün hörmətimlə…']]},
      {t:'mc', q:'Tam razılaşmanı bildirən hansıdır?', o:["I couldn't agree more.","I couldn't agree.","I don't agree more.",'I can agree less.'], e:'Couldn\'t agree more = 100% razıyam.'},
      {t:'mc', q:'Nəzakətli etiraz hansıdır?', o:["I see what you mean, but I'm not sure that's true.","You're wrong.",'No way!',"That's nonsense."], e:'Əvvəl qəbul et, sonra etiraz et.'},
      {t:'mc', q:'«I couldn\'t agree more» nə deməkdir?', o:['Tamamilə razıyam.','Heç razı deyiləm.','Daha çox razılaşa bilmərəm, çünki yoruldum.','Razılaşmaq istəmirəm.'], e:'Tez-tez səhv anlaşılan ifadədir!'},
      {t:'mc', q:'«With all due respect…» nə deməkdir?', o:['Bütün hörmətimlə…','Hörmət etmirəm…','Hamıya hörmət…','Hörmətli dinləyicilər…'], e:'Nəzakətli etirazın başlanğıcı.'},
      {t:'order', az:'Fikrini başa düşürəm, amma razı deyiləm.', en:["I see your point, but I don't agree.","I see your point but I don't agree."], extra:['disagree','not']},
      {t:'dict', en:"That's a fair point, but have you considered the costs?", extra:['consider','cost']},
      {t:'speak', en:"I'm afraid I have to disagree with you on this.", az:'Təəssüf ki, bu məsələdə səninlə razı deyiləm.'}
    ]},
    { id:'b2-u4-l3', title:'Arqument qurmaq', items:[
      {t:'learn', title:'Arqumentin quruluşu', body:'Güclü arqument: fikir → səbəb → nümunə → qarşı arqument → yekun. Qarşı tərəfin fikrini də qeyd etmək arqumentini daha inandırıcı edir.', ex:[['Firstly, … / To begin with, …','Birincisi… / Əvvəlcə…'],['On the one hand… On the other hand…','Bir tərəfdən… Digər tərəfdən…'],['For instance, …','Məsələn…'],['Critics argue that…','Tənqidçilər iddia edir ki…'],['To sum up, …','Yekunlaşdırsaq…']]},
      {t:'mc', q:'Qarşı tərəfin arqumentini təqdim etmək üçün:', o:['On the other hand, …','Firstly, …','To sum up, …','For instance, …'], e:'On the other hand — digər tərəfdən.'},
      {t:'mc', q:'Nümunə vermək üçün:', o:['For instance, …','However, …','In contrast, …','Therefore, …'], e:'For instance = for example.'},
      {t:'mc', q:'Yekun üçün:', o:['To sum up, …','To begin with, …','In addition, …','Despite this, …'], e:'To sum up — yekunlaşdırsaq.'},
      {t:'mc', q:'«Critics argue that…» nə deməkdir?', o:['Tənqidçilər iddia edir ki…','Tənqidçilər razılaşır ki…','Tənqid etmək olmaz ki…','Aktyorlar mübahisə edir ki…'], e:'Argue — iddia etmək, əsaslandırmaq.'},
      {t:'order', az:'Bir tərəfdən, sosial media insanları birləşdirir.', en:'On the one hand, social media connects people.', extra:['other','connect']},
      {t:'listen', en:'To sum up, the benefits outweigh the risks.', o:['To sum up, the benefits outweigh the risks.','To sum up, the risks outweigh the benefits.','To start with, the benefits outweigh the risks.']},
      {t:'speak', en:'On the other hand, it can be very expensive.', az:'Digər tərəfdən, bu çox baha ola bilər.'}
    ]}
  ]},
  { id:'b2-u5', title:'İş müsahibəsi', grammar:'STAR cavabları · güclü fellər · maaş və suallar', lessons:[
    { id:'b2-u5-l1', title:'STAR metodu', items:[
      {t:'learn', title:'Situation → Task → Action → Result', body:'«Tell me about a time when…» sualına STAR ilə cavab ver: Situation (vəziyyət), Task (vəzifən), Action (SƏNİN atdığın addımlar), Result (nəticə, mümkünsə rəqəmlə). Past Simple işlət və «we» yox, «I» de — müsahibəçi sənin töhfəni bilmək istəyir.', ex:[['Situation: Our team was behind schedule.','Komandamız qrafikdən geri qalırdı.'],['Task: My task was to reduce delays.','Mənim vəzifəm gecikmələri azaltmaq idi.'],['Action: I organised weekly progress meetings.','Həftəlik proqres görüşləri təşkil etdim.'],['Result: We finished two weeks early.','İki həftə tez bitirdik.']]},
      {t:'mc', q:'STAR-da «A» nəyi bildirir?', o:['Action — sənin atdığın addımlar','Answer — cavab','Ability — bacarıq','Attitude — münasibət'], e:'Ən vacib hissə: sən nə etdin?'},
      {t:'mc', q:'«Tell me about a time when you solved a problem» — cavabda hansı zaman əsasdır?', o:['Past Simple','Present Simple','Future','Present Continuous'], e:'Keçmiş hadisəni danışırsan.'},
      {t:'mc', q:'Nəticəni ən güclü göstərən cümlə:', o:['As a result, sales increased by 15%.','It was good, I think.','Everybody was happy maybe.','We did our best.'], e:'Ölçülə bilən nəticə.'},
      {t:'mc', q:'STAR cavabında ən ZƏİF cümlə hansıdır?', o:["We did everything together, so I don't know.",'I organised a weekly meeting to track progress.','My task was to reduce delays.','The project was completed two weeks early.'], e:'Öz rolunu göstərmir.'},
      {t:'order', az:'Mənim vəzifəm gecikmələri azaltmaq idi.', en:'My task was to reduce delays.', extra:['reducing','is']},
      {t:'listen', en:'Tell me about a time when you worked under pressure.', o:['Tell me about a time when you worked under pressure.','Tell me about a time when you worked in a team.','Tell me about the time you work under pressure.']},
      {t:'speak', en:'In my previous role, I was responsible for managing social media.', az:'Əvvəlki vəzifəmdə sosial mediaya cavabdeh idim.'}
    ]},
    { id:'b2-u5-l2', title:'Güclü fellər', items:[
      {t:'learn', title:'Nailiyyətini güclü fellə de', body:'«I helped with» və «I did» zəif səslənir. CV və müsahibədə nəticə göstərən fellər işlət: led, achieved, improved, coordinated, implemented, reduced, increased, launched.', ex:[['I led a team of five volunteers.','Beş könüllüdən ibarət komandaya rəhbərlik etdim.'],['I improved customer satisfaction by 20%.','Müştəri məmnuniyyətini 20% artırdım.'],['I implemented a new system.','Yeni sistem tətbiq etdim.'],['I coordinated a conference for 200 people.','200 nəfərlik konfransı koordinasiya etdim.']]},
      {t:'mc', q:'Daha güclü fel: «I ___ a team of five volunteers.»', o:['led','was in','helped','did'], e:'Led — rəhbərlik etdim.'},
      {t:'mc', q:'«Implemented» nə deməkdir?', o:['tətbiq etdi','təsəvvür etdi','təqlid etdi','imtina etdi'], e:'Implement — həyata keçirmək, tətbiq etmək.'},
      {t:'mc', q:'I ___ customer satisfaction by 20%.', o:['improved','made better at','improvement','improving'], e:'Improve — yaxşılaşdırmaq.'},
      {t:'mc', q:'Hansı cümlə daha peşəkardır?', o:['I coordinated a conference for 200 participants.','I helped with some event stuff.','I was there at the conference.','I did many things.'], e:'Konkret fel + konkret rəqəm.'},
      {t:'order', az:'Mən xərcləri 10% azaltdım.', en:'I reduced costs by 10%.', extra:['reduce','with']},
      {t:'dict', en:'I successfully launched a new training programme.', extra:['launch','program']},
      {t:'speak', en:'I coordinated a project with a team of five people.', az:'Beş nəfərlik komanda ilə layihəni koordinasiya etdim.'}
    ]},
    { id:'b2-u5-l3', title:'Maaş və suallar', items:[
      {t:'learn', title:'Müsahibənin sonu', body:'Maaş sualına araşdırmaya əsaslanan aralıq de. Müsahibənin sonunda mütləq sual ver — bu, marağını göstərir. İlk müsahibədə yalnız məzuniyyət və erkən çıxmaq barədə soruşmaq pis təəssürat yarada bilər.', ex:[['What are your salary expectations?','Maaş gözləntiləriniz nədir?'],["I'm looking for a salary in the range of…",'… aralığında maaş gözləyirəm.'],['Do you have any questions for us?','Bizə sualınız varmı?'],['What does a typical day look like?','Adi iş günü necə keçir?']]},
      {t:'mc', q:'«What are your salary expectations?» nə deməkdir?', o:['Maaş gözləntiləriniz nədir?','Maaşınız nə qədərdir?','Maaşı nə vaxt alırsınız?','Maaşdan razısınız?'], e:'Expectations — gözləntilər.'},
      {t:'mc', q:'Peşəkar maaş cavabı hansıdır?', o:["Based on my research, I'm looking for a salary in the range of 1,200–1,500 AZN.",'Give me as much as possible.',"I don't care about money.",'Whatever you want.'], e:'Araşdırma + aralıq.'},
      {t:'mc', q:'Müsahibənin sonunda yaxşı sual hansıdır?', o:['What does a typical day in this role look like?','How many holidays do I get?','Can I leave early every day?','No questions.'], e:'İşə maraq göstərən sual.'},
      {t:'mc', q:'«Range» bu kontekstdə nə deməkdir?', o:['aralıq (məbləğ)','məsafə','sıra','dağ silsiləsi'], e:'Salary range — maaş aralığı.'},
      {t:'order', az:'Bu vəzifə haqqında daha çox danışa bilərsiniz?', en:'Could you tell me more about this role?', extra:['say','for']},
      {t:'listen', en:'Do you have any questions for us?', o:['Do you have any questions for us?','Do you have any questions for me?','Did you have any questions for us?']},
      {t:'speak', en:'What opportunities for professional development do you offer?', az:'Peşəkar inkişaf üçün hansı imkanlar təklif edirsiniz?'}
    ]}
  ]},
  { id:'b2-u6', title:'Mürəkkəb passiv', grammar:'have something done · It is said that… · modal + passiv', lessons:[
    { id:'b2-u6-l1', title:'have something done', items:[
      {t:'learn', title:'Başqasına etdirmək', body:'HAVE + əşya + 3-cü forma — işi başqası sənin üçün edir. Azərbaycan dilindəki «-dırmaq» kimi: saçımı kəsdirdim. Danışıqda GET də işlənir: I got my hair cut.', ex:[['I had my hair cut.','Saçımı kəsdirdim.'],['I had my car repaired.','Maşınımı təmir etdirdim.'],["We're having the flat painted.",'Mənzili rənglətdiririk.'],['We need to get the documents translated.','Sənədləri tərcümə etdirməliyik.']]},
      {t:'mc', q:'I ___ my car repaired yesterday.', o:['had','did','made','was'], e:'Had + əşya + 3-cü forma.'},
      {t:'mc', q:'She is having her flat ___.', o:['painted','paint','painting','to paint'], e:'Have + əşya + 3-cü forma: painted.'},
      {t:'mc', q:'«I had my phone fixed» nə deməkdir?', o:['Telefonumu təmir etdirdim.','Telefonumu özüm təmir etdim.','Telefonum xarab oldu.','Telefonumu satdım.'], e:'Başqası təmir edib.'},
      {t:'mc', q:'We need to get the documents ___ by Friday.', o:['translated','translate','translating','to translate'], e:'Get + əşya + 3-cü forma.'},
      {t:'order', az:'Mən saçımı kəsdirdim.', en:['I had my hair cut.','I got my hair cut.'], extra:['cutted','did']},
      {t:'listen', en:"We're having a new kitchen installed next week.", o:["We're having a new kitchen installed next week.","We're installing a new kitchen next week.",'We had a new kitchen installed last week.']},
      {t:'speak', en:'I need to have my passport renewed.', az:'Pasportumu yenilətməliyəm.'}
    ]},
    { id:'b2-u6-l2', title:'It is said that…', items:[
      {t:'learn', title:'Şəxssiz passiv', body:'Xəbər və rəsmi dildə: IT IS SAID / BELIEVED / REPORTED THAT… Və ya şəxslə: He is said TO BE… Keçmiş üçün: She is believed TO HAVE LEFT.', ex:[['It is said that the restaurant is the best in town.','Deyilənə görə restoran şəhərin ən yaxşısıdır.'],['He is said to be very rich.','Deyilənə görə çox varlıdır.'],['The suspect is believed to have left the country.','Şübhəlinin ölkəni tərk etdiyi güman edilir.'],['It is expected that prices will rise.','Qiymətlərin artacağı gözlənilir.']]},
      {t:'mc', q:'It ___ that the company will hire 100 people.', o:['is reported','reports','is reporting','reported'], e:'Şəxssiz passiv: It is reported that…'},
      {t:'mc', q:'He is said ___ the richest man in town.', o:['to be','being','be','that he is'], e:'Is said + to be.'},
      {t:'mc', q:'The suspect is believed ___ the country last week.', o:['to have left','to leave','leaving','left'], e:'Keçmiş hadisə: to have left.'},
      {t:'mc', q:'«It is widely believed that…» nə deməkdir?', o:['Geniş yayılmış fikrə görə…','Heç kim inanmır ki…','Çox az adam bilir ki…','İnanmaq çətindir ki…'], e:'Widely — geniş şəkildə.'},
      {t:'order', az:'Deyilənə görə, bu restoran şəhərin ən yaxşısıdır.', en:'This restaurant is said to be the best in the city.', extra:['says','being']},
      {t:'dict', en:'It is expected that prices will rise next year.', extra:['expects','raise']},
      {t:'speak', en:'It is widely believed that exercise improves mental health.', az:'Geniş yayılmış fikrə görə idman ruhi sağlamlığı yaxşılaşdırır.'}
    ]},
    { id:'b2-u6-l3', title:'Modal + passiv', items:[
      {t:'learn', title:'must be done, can be found…', body:'Rəsmi bildiriş, qayda və təlimatlarda: modal + BE + 3-cü forma. Present Perfect passiv: has / have BEEN + 3-cü forma.', ex:[['The form must be submitted by Monday.','Forma bazar ertəsinə qədər təqdim olunmalıdır.'],['More information can be found on our website.','Ətraflı məlumatı saytımızda tapmaq olar.'],['The results will be announced next week.','Nəticələr gələn həftə elan olunacaq.'],['Your application has been received.','Müraciətiniz qəbul olunub.']]},
      {t:'mc', q:'The form must ___ by Monday.', o:['be submitted','submitted','submit','be submit'], e:'Modal + be + 3-cü forma.'},
      {t:'mc', q:'More information can ___ on our website.', o:['be found','found','be find','find'], e:'Can be found.'},
      {t:'mc', q:'The results ___ next week.', o:['will be announced','will announce','are announcing','will be announce'], e:'Will be + 3-cü forma.'},
      {t:'mc', q:'The project ___ already been completed.', o:['has','have','is','was'], e:'The project (tək): has been completed.'},
      {t:'order', az:'Bütün sənədlər imzalanmalıdır.', en:'All documents must be signed.', extra:['sign','are']},
      {t:'listen', en:'Your application has been received.', o:['Your application has been received.','Your application has been rejected.','Your application will be received.']},
      {t:'speak', en:'The report should be finished by Friday.', az:'Hesabat cümə gününə qədər bitirilməlidir.'}
    ]}
  ]},
  { id:'b2-u7', title:'Phrasal verbs və idiomlar', grammar:'look into, put off, come up with… · break the ice, a piece of cake…', lessons:[
    { id:'b2-u7-l1', title:'İş üçün phrasal verbs', items:[
      {t:'learn', title:'İş mühitində ən çox işlənənlər', body:'Phrasal verb — fel + kiçik söz (into, off, up…), mənası çox vaxt tamamilə dəyişir. Bunları ifadə kimi bütöv öyrən.', ex:[['look into','araşdırmaq'],['put off','təxirə salmaq'],['carry out','həyata keçirmək'],['come up with','(fikir) tapmaq'],['take on','öhdəsinə götürmək'],['set up','qurmaq, yaratmaq']]},
      {t:'mc', q:'We need to ___ the problem before Friday. (araşdırmaq)', o:['look into','look after','look up to','look out'], e:'Look into — araşdırmaq.'},
      {t:'mc', q:'The meeting was ___ until next week.', o:['put off','put on','put up','put out'], e:'Put off — təxirə salmaq.'},
      {t:'mc', q:'She ___ a brilliant idea.', o:['came up with','came across','came over','came out'], e:'Come up with — fikir tapmaq.'},
      {t:'mc', q:'«Carry out research» nə deməkdir?', o:['tədqiqat aparmaq','tədqiqatı daşımaq','tədqiqatdan çıxmaq','tədqiqatı dayandırmaq'], e:'Carry out — həyata keçirmək.'},
      {t:'order', az:'Biz yeni şirkət qurmaq istəyirik.', en:'We want to set up a new company.', extra:['build','on']},
      {t:'listen', en:"I'll look into it and get back to you.", o:["I'll look into it and get back to you.","I'll look after it and get back to you.","I'll look into it and call you back."]},
      {t:'speak', en:"Let's not put it off any longer.", az:'Gəlin bunu daha təxirə salmayaq.'}
    ]},
    { id:'b2-u7-l2', title:'Gündəlik phrasal verbs', items:[
      {t:'learn', title:'Hər gün eşidəcəyin ifadələr', body:'Bu ifadələr filmlərdə, seriallarda və gündəlik danışıqda çox işlənir.', ex:[['give up','imtina etmək, əl çəkmək'],['run out of','qurtarmaq, tükənmək'],['turn down','rədd etmək'],['figure out','başa düşmək, həll yolu tapmaq'],['catch up with','çatmaq, geridə qalanı tamamlamaq'],['end up','sonda … olmaq']]},
      {t:'mc', q:"I've ___ sugar. Can you buy some?", o:['run out of','run into','run away','run over'], e:'Run out of — qurtarmaq.'},
      {t:'mc', q:'She ___ the job offer because the salary was low.', o:['turned down','turned up','turned off','turned into'], e:'Turn down — rədd etmək.'},
      {t:'mc', q:"Don't ___! You're almost there.", o:['give up','give in to','give away','give back'], e:'Give up — təslim olmaq, əl çəkmək.'},
      {t:'mc', q:'«Figure out» nə deməkdir?', o:['başa düşmək / həll yolu tapmaq','şəkil çəkmək','hesablamağı dayandırmaq','fiqur almaq'], e:'I can\'t figure it out — başa düşə bilmirəm.'},
      {t:'order', az:'Sonda biz evdə qaldıq.', en:'We ended up staying at home.', extra:['end','stay']},
      {t:'dict', en:"I can't figure out how this app works.", extra:['figured','work']},
      {t:'speak', en:'I need to catch up with my studies this weekend.', az:'Bu həftəsonu dərslərimdəki geriliyi aradan qaldırmalıyam.'}
    ]},
    { id:'b2-u7-l3', title:'İdiomlar', items:[
      {t:'learn', title:'Hərfi tərcümə etmə!', body:'İdiomun mənası sözlərin cəmindən fərqlidir. «A piece of cake» tort deyil — «çox asan» deməkdir.', ex:[['a piece of cake','çox asan'],['break the ice','tanışlıqda gərginliyi aradan qaldırmaq'],['hit the nail on the head','tam yerinə vurmaq, düz demək'],['once in a blue moon','çox nadir hallarda'],['cost an arm and a leg','çox baha başa gəlmək'],['under the weather','özünü bir az pis hiss etmək']]},
      {t:'mc', q:'«A piece of cake» nə deməkdir?', o:['çox asan','bir dilim tort','çox dadlı','çox kiçik'], e:'The exam was a piece of cake.'},
      {t:'mc', q:'Yeni qrupda tanışlığı başlatmaq:', o:['break the ice','cut the cake','hit the road','spill the beans'], e:'Break the ice.'},
      {t:'mc', q:'«Once in a blue moon» nə deməkdir?', o:['çox nadir hallarda','hər ay','mavi ay olanda','gecə yarısı'], e:'Çox nadir.'},
      {t:'mc', q:'That phone cost ___! (çox baha)', o:['an arm and a leg','a hand and a foot','a piece of cake','the earth and sky'], e:'Cost an arm and a leg.'},
      {t:'order', az:'Bu imtahan çox asan idi.', en:'The exam was a piece of cake.', extra:['easy','an']},
      {t:'listen', en:"I'm feeling a bit under the weather today.", o:["I'm feeling a bit under the weather today.","I'm feeling a bit better today.",'The weather is a bit bad today.']},
      {t:'speak', en:"You've hit the nail on the head.", az:'Tam yerinə vurdun.'}
    ]}
  ]},
  { id:'b2-u8', title:'Təqdimat bacarıqları', grammar:'Təqdimatın dili · keçid ifadələri · suallara cavab', lessons:[
    { id:'b2-u8-l1', title:'Təqdimatı başlamaq', items:[
      {t:'learn', title:'Güclü başlanğıc', body:'İlk 30 saniyə vacibdir: salamla, mövzunu və məqsədi de, quruluşu göstər. Üzr istəməklə başlama («Sorry, my English is bad») — bu, dinləyicinin diqqətini səhvlərə yönəldir.', ex:[['Good morning, everyone. Thank you for coming.','Hamıya sabahınız xeyir. Gəldiyiniz üçün təşəkkürlər.'],["Today I'm going to talk about…",'Bu gün … haqqında danışacağam.'],['The aim of this presentation is to…','Bu təqdimatın məqsədi …'],["I've divided my talk into three parts.",'Çıxışımı üç hissəyə bölmüşəm.'],['Feel free to interrupt me with questions.','Sualınız olsa, sözümü kəsə bilərsiniz.']]},
      {t:'mc', q:'Təqdimatın məqsədini demək üçün:', o:['The aim of this presentation is to…','I want to finish quickly.',"Let's go.",'Sorry for my English.'], e:'The aim … is to…'},
      {t:'mc', q:'Quruluşu təqdim etmək üçün:', o:["I've divided my talk into three parts.",'I have three things maybe.','Three parts there are.','Parts are three.'], e:'Dinləyiciyə yol xəritəsi ver.'},
      {t:'mc', q:'Başlanğıcda nəyi deməmək daha yaxşıdır?', o:['Sorry, my English is very bad…','Good morning, everyone.','Thank you for coming.',"Today I'd like to talk about…"], e:'Üzrlə başlamaq inamı azaldır.'},
      {t:'mc', q:'«Feel free to interrupt me» nə deməkdir?', o:['Sual vermək üçün sözümü kəsə bilərsiniz.','Məni narahat etməyin.','Sərbəst çıxa bilərsiniz.','Sözümü kəsməyin.'], e:'Dinləyicini sual verməyə dəvət.'},
      {t:'order', az:'Bu gün mən karyera planlaşdırması haqqında danışacağam.', en:['Today I am going to talk about career planning.',"Today I'm going to talk about career planning."], extra:['speak','for']},
      {t:'listen', en:'Let me start with a short story.', o:['Let me start with a short story.','Let me finish with a short story.','Let me start with a short video.']},
      {t:'speak', en:'Good morning, everyone. Thank you for coming.', az:'Hamıya sabahınız xeyir. Gəldiyiniz üçün təşəkkür edirəm.'}
    ]},
    { id:'b2-u8-l2', title:'Keçid ifadələri', items:[
      {t:'learn', title:'Signposting — dinləyicini idarə et', body:'Keçid ifadələri dinləyiciyə harada olduğunu göstərir: növbəti hissə, slayda istinad, yekun. Bunlar olmadan ən yaxşı məzmun belə qarışıq görünür.', ex:[['Moving on to the next point, …','Növbəti fikrə keçək…'],["Let's now look at the results.",'İndi nəticələrə baxaq.'],['As you can see on this slide, …','Bu slaydda gördüyünüz kimi…'],['This brings me to my next point.','Bu, məni növbəti fikrimə gətirir.'],['To summarise, …','Yekunlaşdırsaq…']]},
      {t:'mc', q:'Növbəti hissəyə keçid:', o:['Moving on to the next point, …','In conclusion, …','Good morning, …','Any questions?'], e:'Moving on…'},
      {t:'mc', q:'Slayda istinad:', o:['As you can see on this slide, …','As you can hear, …','Look at me, …','The slide is here.'], e:'As you can see…'},
      {t:'mc', q:'«This brings me to my next point» nə deməkdir?', o:['Bu, məni növbəti fikrimə gətirir.','Bu, məni geri qaytarır.','Bu nöqtəni gətirin.','Bu, son fikrimdir.'], e:'Hamar keçid ifadəsi.'},
      {t:'mc', q:'Yekunlaşdırmaq üçün:', o:['To summarise, …','Firstly, …','Moving on, …','For example, …'], e:'To summarise / To sum up.'},
      {t:'order', az:'İndi isə nəticələrə baxaq.', en:["Let's now look at the results.","Now let's look at the results."], extra:['see','to']},
      {t:'dict', en:'As you can see, sales doubled in two years.', extra:['saw','double']},
      {t:'speak', en:'This brings me to my final point.', az:'Bu, məni son fikrimə gətirir.'}
    ]},
    { id:'b2-u8-l3', title:'Suallara cavab vermək', items:[
      {t:'learn', title:'Sual-cavab hissəsi', body:'Bilmədiyin suala uydurma cavab vermə — dürüst ol və sonra xəbər verəcəyini de. Sualı başa düşmədinsə, dəqiqləşdir. Cavabdan sonra soruş: Does that answer your question?', ex:[["That's a really good question.",'Bu, çox yaxşı sualdır.'],['Let me make sure I understand — are you asking about…?','Düzgün başa düşdüyümə əmin olum — … haqqında soruşursunuz?'],["I'm not sure, but I'll find out and get back to you.",'Əmin deyiləm, amma öyrənib sizə xəbər verəcəyəm.'],['Does that answer your question?','Bu, sualınıza cavab oldu?'],['Thank you for your attention.','Diqqətiniz üçün təşəkkür edirəm.']]},
      {t:'mc', q:'Bilmədiyin suala peşəkar cavab:', o:["I'm not sure, but I'll find out and get back to you.","I don't know.","That's a stupid question.",'Next question.'], e:'Dürüstlük + öhdəlik.'},
      {t:'mc', q:'Sualı dəqiqləşdirmək üçün:', o:['Let me make sure I understand — are you asking about costs?','What?','Repeat!',"I didn't listen."], e:'Nəzakətli dəqiqləşdirmə.'},
      {t:'mc', q:'«Does that answer your question?» nə deməkdir?', o:['Bu, sualınıza cavab oldu?','Sualınız nədir?','Sual verə bilərsiniz?','Cavabı bilirsiniz?'], e:'Cavabdan sonra yoxlama.'},
      {t:'mc', q:'Təqdimatın ən yaxşı sonu:', o:['Thank you for your attention. Are there any questions?','OK, bye.',"That's all, I think.",'Finished.'], e:'Təşəkkür + suallara dəvət.'},
      {t:'order', az:'Bu, çox yaxşı sualdır.', en:["That's a really good question.",'That is a really good question.'], extra:['very','an']},
      {t:'listen', en:'Thank you for your attention.', o:['Thank you for your attention.','Thank you for your patience.','Thank you for your question.']},
      {t:'speak', en:"I'm not sure, but I'll find out and get back to you.", az:'Əmin deyiləm, amma öyrənib sizə xəbər verəcəyəm.'}
    ]}
  ]}
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
