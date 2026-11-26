// Addım — əlavə dərslər: hər bölməyə 2 yeni dərs (l4, l5).
// Bu fayl course.js-dən sonra yüklənir və dərsləri uyğun bölmələrə əlavə edir.
window.COURSE_EXTRA = {
// ======================= A1 =======================
'a1-u1':[
  { id:'a1-u1-l4', title:'Rəqəmlər 1–20', items:[
    {t:'learn', title:'Rəqəmlər', body:'13–19 arası rəqəmlər «-teen» ilə bitir və vurğu sonda olur: thirTEEN. 30, 40, 50 isə «-ty» ilə bitir və vurğu əvvəldədir: THIRty. Telefon nömrəsini rəqəm-rəqəm deyirik: 0 — «oh» və ya «zero».', ex:[['one, two, three, four, five','1, 2, 3, 4, 5'],['six, seven, eight, nine, ten','6, 7, 8, 9, 10'],['eleven, twelve','11, 12'],['thirteen, fifteen, twenty','13, 15, 20'],["How old are you? I'm eighteen.",'Neçə yaşın var? 18 yaşım var.']]},
    {t:'mc', q:'«12» ingiliscə necədir?', o:['twelve','twenty','eleven','two'], e:'12 — twelve. 20 — twenty. Bu ikisi tez qarışdırılır.'},
    {t:'listen', en:"I'm fifteen years old.", o:["I'm fifteen years old.","I'm fifty years old.","I'm five years old."]},
    {t:'mc', q:'«How old are you?» nə soruşur?', o:['Yaşını','Adını','Haradan olduğunu','Əhvalını'], e:'How old — neçə yaş. Cavab: I\'m 20 (years old).'},
    {t:'order', az:'Mənim 19 yaşım var.', en:["I'm nineteen.","I am nineteen.","I'm nineteen years old.","I am nineteen years old."], extra:['have','is']},
    {t:'dict', en:'My phone number is five, three, eight.', extra:['nine','four']},
    {t:'speak', en:"I'm twenty years old.", az:'Mənim 20 yaşım var.'}
  ]},
  { id:'a1-u1-l5', title:'Sinifdə', items:[
    {t:'learn', title:'Sinif ifadələri', body:'Dərsdə başa düşmədikdə bu ifadələr çox kömək edir. «Sorry?» qısa və nəzakətli şəkildə «nə dediniz?» deməkdir.', ex:[["I don't understand.",'Başa düşmürəm.'],['Can you repeat, please?','Təkrar edə bilərsiniz?'],['How do you spell it?','Necə yazılır?'],["What does 'book' mean?","'Book' nə deməkdir?"],['Sorry, I am late.','Bağışlayın, gecikdim.']]},
    {t:'mc', q:'Müəllimi başa düşmədin. Nə deyirsən?', o:["Sorry, I don't understand.","I'm fine, thanks.","Goodbye!","Nice to meet you."], e:'«I don\'t understand» — başa düşmürəm.'},
    {t:'mc', q:'«How do you spell it?» nə deməkdir?', o:['Necə yazılır?','Necə deyilir?','Nə deməkdir?','Harada yazılıb?'], e:'Spell — hərf-hərf demək / yazmaq.'},
    {t:'listen', en:'Can you repeat, please?', o:['Can you repeat, please?','Can you read, please?','Can you help me, please?']},
    {t:'order', az:'Bağışlayın, gecikdim.', en:['Sorry, I am late.',"Sorry, I'm late."], extra:['is','early']},
    {t:'mc', q:'«Open your books» nə deməkdir?', o:['Kitablarınızı açın','Kitablarınızı bağlayın','Kitab oxuyun','Kitab alın'], e:'Open — açmaq, close — bağlamaq.'},
    {t:'speak', en:"Sorry, I don't understand.", az:'Bağışlayın, başa düşmürəm.'}
  ]}],
'a1-u2':[
  { id:'a1-u2-l4', title:'Görünüş', items:[
    {t:'learn', title:'İnsanı təsvir etmək', body:'İngiliscədə sifət isimdən ƏVVƏL gəlir: long hair (uzun saç), blue eyes (mavi gözlər). Boy üçün «tall / short», saç üçün «long / short, dark / fair» işlənir.', ex:[['She is tall.','O, hündürdür.'],['He has short dark hair.','Onun qısa, tünd rəngli saçı var.'],['My mother has blue eyes.','Anamın mavi gözləri var.'],['My brother is young.','Qardaşım gəncdir.']]},
    {t:'mc', q:'«Uzun saç» ingiliscə necədir?', o:['long hair','hair long','longs hair','a long hairs'], e:'Sifət isimdən əvvəl gəlir və cəmdə dəyişmir: long hair.'},
    {t:'mc', q:'She ___ green eyes.', o:['has','have','is','are'], e:'He / she ilə «has».'},
    {t:'order', az:'Atamın qısa saçı var.', en:'My father has short hair.', extra:['have','is']},
    {t:'listen', en:'My sister is tall and has long hair.', o:['My sister is tall and has long hair.','My sister is short and has long hair.','My sister is tall and has short hair.']},
    {t:'mc', q:'«tall» sözünün əksi hansıdır?', o:['short','long','small','young'], e:'İnsan boyu üçün: tall — hündür, short — alçaq.'},
    {t:'speak', en:'He has brown eyes.', az:'Onun qəhvəyi gözləri var.'}
  ]},
  { id:'a1-u2-l5', title:'Kimin? \'s', items:[
    {t:'learn', title:'Yiyəlik: \'s', body:'«Kiminsə bir şeyi»ni demək üçün ada \'s əlavə edirik: Anar\'s car — Anarın maşını. «Whose?» — Kimin? sualıdır.', ex:[["This is Leyla's bag.",'Bu, Leylanın çantasıdır.'],["My brother's name is Tural.",'Qardaşımın adı Turaldır.'],["Whose phone is this?",'Bu kimin telefonudur?'],["It's my mother's.",'Anamındır.']]},
    {t:'mc', q:'«Anarın maşını» necədir?', o:["Anar's car","Anar car","car Anar's","Anars' car"], e:'Ad + \'s + əşya: Anar\'s car.'},
    {t:'mc', q:'«Whose book is this?» sualına cavab:', o:["It's Sara's.","It's a book.","Yes, it is.","It's on the table."], e:'Whose — kimin? Cavab yiyəni göstərir.'},
    {t:'order', az:'Bu, Kamranın evidir.', en:["This is Kamran's house.","This is Kamran's home."], extra:['Kamran','are']},
    {t:'dict', en:"My sister's name is Aysel.", extra:['sister','are']},
    {t:'listen', en:"Whose phone is this?", o:["Whose phone is this?","Who is on the phone?","Where is the phone?"]},
    {t:'speak', en:"This is my father's car.", az:'Bu, atamın maşınıdır.'}
  ]}],
'a1-u3':[
  { id:'a1-u3-l4', title:'Peşələr', items:[
    {t:'learn', title:'Peşələr və iş yeri', body:'Peşədən əvvəl «a / an» işlənir: I\'m a teacher. Sait səslə başlayan sözdən əvvəl «an»: an engineer. «What do you do?» — Nə işlə məşğulsan?', ex:[['What do you do?','Nə işləyirsən?'],["I'm a teacher.",'Mən müəlliməm.'],["She's an engineer.",'O, mühəndisdir.'],['He works in a hospital.','O, xəstəxanada işləyir.'],["I'm a student.",'Mən tələbəyəm.']]},
    {t:'mc', q:'She is ___ engineer.', o:['an','a','the','—'], e:'Engineer sait səslə başlayır: an engineer.'},
    {t:'mc', q:'«What do you do?» nə soruşur?', o:['İşini, peşəni','İndi nə etdiyini','Hobbini','Harada yaşadığını'], e:'Bu sual peşəni soruşur. İndiki hərəkət üçün: What are you doing?'},
    {t:'order', az:'Atam xəstəxanada işləyir.', en:'My father works in a hospital.', extra:['work','at']},
    {t:'listen', en:'My mother is a doctor.', o:['My mother is a doctor.','My mother is a driver.','My brother is a doctor.']},
    {t:'mc', q:'«Aşpaz» ingiliscə necədir?', o:['cook / chef','waiter','driver','farmer'], e:'Cook / chef — aşpaz. Waiter — ofisiant.'},
    {t:'dict', en:'He works in an office.', extra:['work','a']},
    {t:'speak', en:'I want to be a teacher.', az:'Mən müəllim olmaq istəyirəm.'}
  ]},
  { id:'a1-u3-l5', title:'Hobbilər', items:[
    {t:'learn', title:'like + -ing', body:'Nəyi sevdiyini demək üçün «like / love / don\'t like» + felin -ing forması işlənir: I like reading. He doesn\'t like cooking.', ex:[['I like reading books.','Kitab oxumağı sevirəm.'],['She loves dancing.','O, rəqs etməyi çox sevir.'],["I don't like running.",'Qaçmağı sevmirəm.'],['What do you do in your free time?','Boş vaxtında nə edirsən?']]},
    {t:'mc', q:'I like ___ music.', o:['listening to','listen to','listens to','to listening'], e:'like + -ing: I like listening to music.'},
    {t:'mc', q:'He ___ like football.', o:["doesn't","don't","isn't","not"], e:'He / she ilə inkar: doesn\'t.'},
    {t:'order', az:'O, şəkil çəkməyi sevir.', en:['She likes drawing.','She likes painting.'], extra:['like','draw']},
    {t:'listen', en:'What do you do in your free time?', o:['What do you do in your free time?','What time is it now?','Do you have free time today?']},
    {t:'dict', en:'I love playing chess with my brother.', extra:['play','loves']},
    {t:'speak', en:'In my free time I like reading.', az:'Boş vaxtımda oxumağı sevirəm.'}
  ]}],
'a1-u4':[
  { id:'a1-u4-l4', title:'Neçəyədir?', items:[
    {t:'learn', title:'Qiymət soruşmaq', body:'Tək əşya üçün «How much is it?», cəm üçün «How much are they?». Qiymət: It\'s five manats. Cəm: two kilos of apples.', ex:[['How much is this?','Bu neçəyədir?'],['How much are the apples?','Almalar neçəyədir?'],["It's three manats.",'Üç manatdır.'],["A kilo of tomatoes, please.",'Bir kilo pomidor, zəhmət olmasa.']]},
    {t:'mc', q:'How much ___ these shoes?', o:['are','is','am','do'], e:'Shoes cəmdir: How much are…?'},
    {t:'listen', en:"It's twelve manats.", o:["It's twelve manats.","It's twenty manats.","It's two manats."]},
    {t:'order', az:'Bu çörək neçəyədir?', en:'How much is this bread?', extra:['many','are']},
    {t:'mc', q:'«A kilo of apples» nə deməkdir?', o:['Bir kilo alma','Bir alma','Çoxlu alma','Alma kilosu'], e:'a kilo of … — bir kilo …'},
    {t:'dict', en:'Two kilos of potatoes, please.', extra:['kilo','potato']},
    {t:'speak', en:'How much is it?', az:'Neçəyədir?'}
  ]},
  { id:'a1-u4-l5', title:'Sifariş vermək', items:[
    {t:'learn', title:'I\'d like…', body:'«I want» bəzən kobud səslənir. Restoranda nəzakətli forma: I\'d like… (= I would like). Sual: Would you like…?', ex:[["I'd like a cup of tea, please.",'Bir fincan çay istərdim.'],['Would you like some water?','Su istərdinizmi?'],['Can I have the menu, please?','Menyunu verə bilərsiniz?'],['The bill, please.','Hesabı gətirin, zəhmət olmasa.']]},
    {t:'mc', q:'Restoranda ən nəzakətli forma:', o:["I'd like a salad, please.","Give me a salad.","I want salad.","Salad!"], e:'I\'d like… — nəzakətli xahiş.'},
    {t:'mc', q:'«The bill, please» nə vaxt deyilir?', o:['Hesabı istəyəndə','Menyu istəyəndə','Su istəyəndə','Masa sifariş edəndə'], e:'Bill — hesab.'},
    {t:'listen', en:'Would you like some water?', o:['Would you like some water?','Would you like some tea?','Where is the water?']},
    {t:'order', az:'Menyunu verə bilərsiniz?', en:['Can I have the menu, please?','Can I have the menu?'], extra:['give','a']},
    {t:'dict', en:"I'd like a cup of coffee, please.", extra:['want','glass']},
    {t:'speak', en:'The bill, please.', az:'Hesabı gətirin, zəhmət olmasa.'}
  ]}],
'a1-u5':[
  { id:'a1-u5-l4', title:'Nəqliyyat', items:[
    {t:'learn', title:'by bus, on foot', body:'Nəqliyyat vasitəsi ilə «by» işlənir: by bus, by metro, by taxi. Piyada isə: on foot. «How do you get to…?» — …-ə necə gedirsən?', ex:[['I go to work by metro.','İşə metro ilə gedirəm.'],['She walks to school. / She goes on foot.','O, məktəbə piyada gedir.'],['How do you get to university?','Universitetə necə gedirsən?'],['The bus stop is near my house.','Avtobus dayanacağı evimə yaxındır.']]},
    {t:'mc', q:'I go to work ___ bus.', o:['by','with','on','in'], e:'Nəqliyyatla: by bus, by car, by train.'},
    {t:'mc', q:'«Piyada» ingiliscə necədir?', o:['on foot','by foot','with foot','in foot'], e:'İstisna: on foot.'},
    {t:'order', az:'Universitetə metro ilə gedirəm.', en:'I go to university by metro.', extra:['with','the']},
    {t:'listen', en:'How do you get to work?', o:['How do you get to work?','How do you go to bed?','When do you get to work?']},
    {t:'dict', en:'The bus stop is near the park.', extra:['next','station']},
    {t:'speak', en:'I usually go to work by bus.', az:'Adətən işə avtobusla gedirəm.'}
  ]},
  { id:'a1-u5-l5', title:'Hava', items:[
    {t:'learn', title:'Hava necədir?', body:'Hava haqqında «It is…» ilə danışırıq: It\'s sunny. It\'s raining (indi yağış yağır). Sual: What\'s the weather like?', ex:[["What's the weather like today?",'Bu gün hava necədir?'],["It's sunny and hot.",'Günəşli və istidir.'],["It's cold and windy.",'Soyuq və küləklidir.'],["It's raining.",'Yağış yağır.'],["It's snowing.",'Qar yağır.']]},
    {t:'mc', q:'«Küləkli» ingiliscə necədir?', o:['windy','rainy','sunny','cloudy'], e:'Wind — külək, windy — küləkli. Bakı külək şəhəridir: Baku is windy!'},
    {t:'mc', q:'Bu gün hava necədir? — sualı:', o:["What's the weather like today?","How is weather today?","What weather is today?","How the weather today?"], e:'What\'s the weather like? — sabit ifadədir.'},
    {t:'listen', en:"It's cold and cloudy today.", o:["It's cold and cloudy today.","It's hot and sunny today.","It's cold and windy today."]},
    {t:'order', az:'Bu gün yağış yağır.', en:["It's raining today.","It is raining today."], extra:['rain','is']},
    {t:'dict', en:"It's very hot in summer.", extra:['winter','cold']},
    {t:'speak', en:"It's windy in Baku today.", az:'Bu gün Bakıda külək var.'}
  ]}],
'a1-u6':[
  { id:'a1-u6-l4', title:'Gündəlik plan', items:[
    {t:'learn', title:'Vaxt ifadələri', body:'«From … to …» — …-dən …-ə qədər. «Before / after» — əvvəl / sonra. Saat 5:30 — half past five, 5:15 — quarter past five, 5:45 — quarter to six.', ex:[['I work from nine to five.','Doqquzdan beşə qədər işləyirəm.'],['I have lunch at half past one.','Saat 1:30-da nahar edirəm.'],['After work, I go to the gym.','İşdən sonra idman zalına gedirəm.'],["It's quarter to eight.",'Səkkizə on beş dəqiqə qalır.']]},
    {t:'mc', q:'7:30 necə deyilir?', o:['half past seven','half past eight','seven and half','half to seven'], e:'Half past seven — yeddinin yarısı.'},
    {t:'mc', q:'«quarter to six» neçədir?', o:['5:45','6:15','6:45','5:15'], e:'Quarter to six — altıya 15 dəqiqə qalır = 5:45.'},
    {t:'listen', en:'The lesson is from ten to twelve.', o:['The lesson is from ten to twelve.','The lesson is from two to twelve.','The lesson is at ten past twelve.']},
    {t:'order', az:'Dərsdən sonra kitabxanaya gedirəm.', en:'After class I go to the library.', extra:['before','at']},
    {t:'dict', en:'I get up at quarter past seven.', extra:['half','to']},
    {t:'speak', en:'I have lunch at one o\'clock.', az:'Saat birdə nahar edirəm.'}
  ]},
  { id:'a1-u6-l5', title:'Ad günü', items:[
    {t:'learn', title:'Tarixlər: sıra sayları', body:'Tarix sıra sayı ilə deyilir: first (1st), second (2nd), third (3rd), fourth (4th)… twenty-first (21st). «My birthday is on 5th May» — on May the fifth deyilir.', ex:[["When's your birthday?",'Ad günün nə vaxtdır?'],["It's on the third of March.",'Martın 3-dədir.'],['Happy birthday!','Ad günün mübarək!'],['the first, the second, the third','birinci, ikinci, üçüncü']]},
    {t:'mc', q:'«22-ci» necədir?', o:['twenty-second','twenty-two','twentieth-two','second-twenty'], e:'21st first, 22nd second, 23rd third.'},
    {t:'mc', q:'My birthday is ___ June.', o:['in','on','at','to'], e:'Ay ilə «in»: in June. Tam tarixlə «on»: on 5th June.'},
    {t:'listen', en:"My birthday is on the first of April.", o:["My birthday is on the first of April.","My birthday is on the third of April.","My birthday is in August."]},
    {t:'order', az:'Ad günün nə vaxtdır?', en:["When is your birthday?","When's your birthday?"], extra:['what','day']},
    {t:'dict', en:'Happy birthday! Here is a present for you.', extra:['gift','your']},
    {t:'speak', en:'My birthday is in May.', az:'Ad günüm maydadır.'}
  ]}],
'a1-u7':[
  { id:'a1-u7-l4', title:'Dillər və ölkələr', items:[
    {t:'learn', title:'Ölkə və dil', body:'Ölkə adları və dillər böyük hərflə yazılır: Azerbaijan → Azerbaijani, Turkey (Türkiyə) → Turkish, England → English, Germany → German, France → French.', ex:[['I can speak Azerbaijani and Russian.','Azərbaycan və rus dilində danışa bilirəm.'],["Can you speak German? — A little.",'Almanca danışa bilirsən? — Bir az.'],['She is from France. She speaks French.','O, Fransadandır. Fransızca danışır.'],['Where do they speak Spanish?','İspan dilində harada danışırlar?']]},
    {t:'mc', q:'Fransız dili:', o:['French','France','Frenchian','Francish'], e:'France — ölkə, French — dil və millət.'},
    {t:'mc', q:'Can you ___ English?', o:['speak','speaks','speaking','to speak'], e:'can + felin sadə forması: can speak.'},
    {t:'listen', en:'I can speak English a little.', o:['I can speak English a little.',"I can't speak English at all.",'I can speak English very well.']},
    {t:'order', az:'O, alman dilində danışa bilmir.', en:["He can't speak German.","He cannot speak German."], extra:['Germany','speaks']},
    {t:'dict', en:'My friend is from Turkey. She speaks Turkish.', extra:['Turk','speak']},
    {t:'speak', en:'I can speak three languages.', az:'Üç dildə danışa bilirəm.'}
  ]},
  { id:'a1-u7-l5', title:'Kömək istəmək', items:[
    {t:'learn', title:'Could you…?', body:'«Can you…?» sadə xahişdir, «Could you…?» daha nəzakətlidir. Razılaşmaq: Sure! / Of course. İmtina: Sorry, I can\'t.', ex:[['Could you help me, please?','Mənə kömək edə bilərsinizmi?'],['Can you open the window?','Pəncərəni aça bilərsən?'],['Sure, no problem.','Əlbəttə, problem deyil.'],["Sorry, I can't. I'm busy.",'Bağışla, bacarmaram. Məşğulam.']]},
    {t:'mc', q:'Ən nəzakətli xahiş:', o:['Could you help me, please?','Help me!','You help me.','Can help me?'], e:'Could you…, please? — nəzakətli forma.'},
    {t:'mc', q:'«Sure, no problem» nə deməkdir?', o:['Əlbəttə, problem deyil','Bəlkə sonra','Mən bilmirəm','Bu çətindir'], e:'Razılıq ifadəsidir.'},
    {t:'listen', en:'Could you open the door, please?', o:['Could you open the door, please?','Could you close the door, please?','Could you open the window, please?']},
    {t:'order', az:'Bağışla, bacarmaram.', en:["Sorry, I can't.","Sorry, I cannot."], extra:['can','not']},
    {t:'dict', en:'Can you speak more slowly, please?', extra:['slow','could']},
    {t:'speak', en:'Could you help me, please?', az:'Mənə kömək edə bilərsiniz?'}
  ]}],
'a1-u8':[
  { id:'a1-u8-l4', title:'Telefonda', items:[
    {t:'learn', title:'Telefon danışığı', body:'Telefonda «Who is it?» yox, «Who\'s calling?» deyilir. Özünü təqdim edərkən: «This is Kamal» (I am Kamal yox). İndi nə etdiyini deyəndə Present Continuous işlət.', ex:[["Hello, this is Kamal.",'Alo, Kamaldır.'],["Can I speak to Leyla, please?",'Leyla ilə danışa bilərəm?'],["Sorry, she's having a shower now.",'Bağışlayın, o, indi duş qəbul edir.'],["I'll call back later.",'Sonra yenidən zəng edərəm.']]},
    {t:'mc', q:'Telefonda özünü necə təqdim edirsən?', o:["Hello, this is Anar.","Hello, I'm Anar here is.","Hello, it Anar.","Hello, Anar speaking is."], e:'Telefonda: This is Anar. / Anar speaking.'},
    {t:'mc', q:'She can\'t talk now. She ___ dinner.', o:['is cooking','cooks','cook','cooking'], e:'İndi, bu an: is cooking.'},
    {t:'listen', en:"Can I speak to Leyla, please?", o:["Can I speak to Leyla, please?","Can I see Leyla, please?","Can Leyla speak English?"]},
    {t:'order', az:'Sonra yenidən zəng edərəm.', en:["I'll call back later.","I will call back later."], extra:['calling','after']},
    {t:'dict', en:"Sorry, he's driving right now.", extra:['drives','is']},
    {t:'speak', en:"Hello, this is Nigar. Can I speak to Tural?", az:'Alo, Nigardır. Turalla danışa bilərəm?'}
  ]},
  { id:'a1-u8-l5', title:'Şəkli təsvir et', items:[
    {t:'learn', title:'Şəkildə nə baş verir?', body:'Şəkli təsvir edərkən «In this picture…» ilə başla və Present Continuous işlət: people are walking, a man is reading.', ex:[['In this picture, I can see a park.','Bu şəkildə bir park görürəm.'],['Two children are playing.','İki uşaq oynayır.'],['A woman is sitting on a bench.','Bir qadın skamyada oturub.'],['The sun is shining.','Günəş parlayır.']]},
    {t:'mc', q:'Two boys ___ football.', o:['are playing','is playing','plays','playing'], e:'Cəm subyekt + are + -ing.'},
    {t:'mc', q:'«sit» sözünün -ing forması:', o:['sitting','siting','sitteing','sitng'], e:'Qısa sait + bir samit: samit ikiləşir — sitting, running, swimming.'},
    {t:'listen', en:'A man is reading a newspaper.', o:['A man is reading a newspaper.','A man is writing a letter.','A woman is reading a newspaper.']},
    {t:'order', az:'Bu şəkildə bir park görürəm.', en:['In this picture I can see a park.','In this picture, I can see a park.','I can see a park in this picture.'], extra:['seeing','am']},
    {t:'dict', en:'The children are swimming in the sea.', extra:['swim','is']},
    {t:'speak', en:'In this picture, people are walking in the park.', az:'Bu şəkildə insanlar parkda gəzirlər.'}
  ]}],
// ======================= A2 =======================
'a2-u1':[
  { id:'a2-u1-l4', title:'-ed tələffüzü', items:[
    {t:'learn', title:'-ed sonluğu necə oxunur?', body:'-ed üç cür səslənir: /t/ — worked, watched; /d/ — played, cleaned; /ɪd/ — yalnız t və d-dən sonra: wanted, needed. Səhv: «work-ed» kimi ayrıca heca demək.', ex:[['I worked late yesterday.','Dünən gec saata qədər işlədim. (/t/)'],['We played tennis.','Tennis oynadıq. (/d/)'],['She wanted a new phone.','O, yeni telefon istədi. (/ɪd/)'],['They visited their grandparents.','Onlar baba-nənələrinə baş çəkdilər. (/ɪd/)']]},
    {t:'mc', q:'Hansı sözdə -ed ayrıca heca kimi (/ɪd/) oxunur?', o:['needed','watched','played','cooked'], e:'Yalnız t / d-dən sonra: needed, started, wanted.'},
    {t:'mc', q:'I ___ my room last weekend.', o:['cleaned','clean','cleaning','cleans'], e:'Last weekend — keçmiş: cleaned.'},
    {t:'listen', en:'We watched a film last night.', o:['We watched a film last night.','We watch a film every night.','We want a film tonight.']},
    {t:'order', az:'Dünən axşam anama zəng etdim.', en:['I called my mother last night.','Last night I called my mother.'], extra:['call','yesterday']},
    {t:'dict', en:'She started a new job in March.', extra:['start','starts']},
    {t:'speak', en:'I visited my grandparents last weekend.', az:'Keçən həftəsonu baba-nənəmə baş çəkdim.'}
  ]},
  { id:'a2-u1-l5', title:'Vaxt ifadələri: ago', items:[
    {t:'learn', title:'ago, last, yesterday', body:'«Ago» — əvvəl, rəqəmdən SONRA gəlir: two days ago (iki gün əvvəl). «Last» — keçən: last week, last year. Bu sözlər Past Simple ilə işlənir.', ex:[['I moved to Baku two years ago.','İki il əvvəl Bakıya köçdüm.'],['We met last summer.','Keçən yay tanış olduq.'],['She called me an hour ago.','O, bir saat əvvəl mənə zəng etdi.'],['the day before yesterday','srağagün']]},
    {t:'mc', q:'«Üç il əvvəl» necədir?', o:['three years ago','ago three years','before three years','three years before ago'], e:'Rəqəm + zaman + ago.'},
    {t:'mc', q:'I ___ him last week.', o:['saw','see','have seen','am seeing'], e:'Last week — Past Simple: saw.'},
    {t:'listen', en:'We moved here five years ago.', o:['We moved here five years ago.','We will move here in five years.','We lived here for five years.']},
    {t:'order', az:'O, bir saat əvvəl getdi.', en:['She left an hour ago.','He left an hour ago.'], extra:['before','leaved']},
    {t:'dict', en:'I started learning English a month ago.', extra:['before','last']},
    {t:'speak', en:'I finished school two years ago.', az:'İki il əvvəl məktəbi bitirdim.'}
  ]}],
'a2-u2':[
  { id:'a2-u2-l4', title:'Bilet almaq', items:[
    {t:'learn', title:'Vağzalda', body:'«Single» — birtərəfli, «return» — gediş-gəliş bileti (ABŞ: one-way / round-trip). «Platform» — perron. «Which platform?» — Hansı perrondan?', ex:[['A return ticket to Ganja, please.','Gəncəyə gediş-gəliş bileti, zəhmət olmasa.'],['What time does the train leave?','Qatar saat neçədə yola düşür?'],['Which platform is it?','Hansı perrondur?'],['The train is delayed.','Qatar gecikir.']]},
    {t:'mc', q:'Gediş-gəliş bileti:', o:['a return ticket','a single ticket','a double ticket','a back ticket'], e:'Return — qayıdış da daxildir.'},
    {t:'mc', q:'«The train is delayed» nə deməkdir?', o:['Qatar gecikir','Qatar ləğv olunub','Qatar dolu','Qatar gəldi'], e:'Delayed — gecikmiş. Cancelled — ləğv edilmiş.'},
    {t:'listen', en:'The train leaves from platform four.', o:['The train leaves from platform four.','The train leaves at four.','The train arrives at platform fourteen.']},
    {t:'order', az:'Qatar saat neçədə yola düşür?', en:'What time does the train leave?', extra:['leaves','go']},
    {t:'dict', en:'A single ticket to Sheki, please.', extra:['return','tickets']},
    {t:'speak', en:'Which platform does the train leave from?', az:'Qatar hansı perrondan yola düşür?'}
  ]},
  { id:'a2-u2-l5', title:'Səyahət hekayəsi', items:[
    {t:'learn', title:'Hekayə bağlayıcıları', body:'Hekayəni ardıcıl danışmaq üçün: First (əvvəlcə), Then / After that (sonra), Finally (nəhayət). Hamısı Past Simple ilə.', ex:[['First, we flew to Istanbul.','Əvvəlcə İstanbula uçduq.'],['Then we took a ferry.','Sonra bərəyə mindik.'],['After that, we went to a museum.','Ondan sonra muzeyə getdik.'],['Finally, we came home tired but happy.','Nəhayət, yorğun, amma xoşbəxt evə qayıtdıq.']]},
    {t:'mc', q:'fly → keçmiş zaman:', o:['flew','flied','flown','flyed'], e:'Qaydasız fel: fly – flew – flown.'},
    {t:'mc', q:'Hekayənin sonunda hansı söz işlənir?', o:['Finally','First','Then','Before'], e:'Finally — nəhayət, sonda.'},
    {t:'listen', en:'After that, we went to the beach.', o:['After that, we went to the beach.','Before that, we went to the beach.','After that, we go to the beach.']},
    {t:'order', az:'Əvvəlcə Bakıya uçduq.', en:['First, we flew to Baku.','First we flew to Baku.'], extra:['fly','then']},
    {t:'dict', en:'Then we took a taxi to the hotel.', extra:['take','bus']},
    {t:'speak', en:'Finally, we came home on Sunday.', az:'Nəhayət, bazar günü evə qayıtdıq.'}
  ]}],
'a2-u3':[
  { id:'a2-u3-l4', title:'too / enough', items:[
    {t:'learn', title:'too və enough', body:'«Too» — həddindən artıq (problem var): too expensive. «Enough» — kifayət qədər, sifətdən SONRA gəlir: big enough. İsimdən isə ƏVVƏL: enough money.', ex:[["It's too expensive.",'Həddindən artıq bahadır.'],["These jeans aren't big enough.",'Bu cins şalvar kifayət qədər böyük deyil.'],["I don't have enough money.",'Kifayət qədər pulum yoxdur.'],['The shirt is too small for me.','Köynək mənə çox kiçikdir.']]},
    {t:'mc', q:'The jacket isn\'t warm ___.', o:['enough','too','very','so'], e:'Sifət + enough: warm enough.'},
    {t:'mc', q:'I can\'t buy it. It\'s ___ expensive.', o:['too','enough','very much','so much'], e:'Problem bildirir: too expensive.'},
    {t:'listen', en:'These shoes are too small for me.', o:['These shoes are too small for me.','These shoes are small enough for me.','Those shoes are too big for me.']},
    {t:'order', az:'Kifayət qədər vaxtım yoxdur.', en:["I don't have enough time.","I haven't got enough time."], extra:['too','times']},
    {t:'dict', en:'The bag is big enough for my laptop.', extra:['too','bigger']},
    {t:'speak', en:"It's too expensive for me.", az:'Bu, mənim üçün çox bahadır.'}
  ]},
  { id:'a2-u3-l5', title:'Paltar almaq', items:[
    {t:'learn', title:'Paltar mağazasında', body:'Geyinib yoxlamaq: «Can I try it on?» Ölçü: «What size are you?» Uyğun gəlmək: It fits (ölçü uyğundur), It suits you (sənə yaraşır).', ex:[['Can I try it on?','Geyinib yoxlaya bilərəm?'],['Where are the changing rooms?','Paltardəyişmə otaqları haradadır?'],["It doesn't fit. Do you have a bigger size?",'Ölçüm deyil. Daha böyük ölçünüz var?'],['That colour suits you.','O rəng sənə yaraşır.']]},
    {t:'mc', q:'«It suits you» nə deməkdir?', o:['Sənə yaraşır','Sənin ölçündür','Sənindir','Ucuzdur'], e:'Suit — yaraşmaq. Fit — ölçüyə uyğun gəlmək.'},
    {t:'mc', q:'Paltarı yoxlamaq istəyirsən:', o:['Can I try it on?','Can I wear it out?','Can I put it?','Can I try on it?'], e:'Try something on; əvəzlik ortada: try it on.'},
    {t:'listen', en:"It doesn't fit. Do you have a smaller size?", o:["It doesn't fit. Do you have a smaller size?","It fits well. I'll take it.","It doesn't suit me. Do you have another colour?"]},
    {t:'order', az:'Bunu götürəcəyəm.', en:["I'll take it.","I will take it."], extra:['taking','buy']},
    {t:'dict', en:'Where are the changing rooms?', extra:['room','is']},
    {t:'speak', en:'Can I try this jacket on?', az:'Bu gödəkçəni geyinib yoxlaya bilərəm?'}
  ]}],
'a2-u4':[
  { id:'a2-u4-l4', title:'Ehtimal: will / might', items:[
    {t:'learn', title:'Proqnoz: will, might', body:'«Will» — əminliklə proqnoz: It will be cold. «Might» — bəlkə, ehtimal: I might go. «Probably» — yəqin ki: I\'ll probably stay home.', ex:[["I think it will rain tomorrow.",'Məncə sabah yağış yağacaq.'],["I might go to the party.",'Bəlkə ziyafətə gedim.'],["I'll probably stay at home.",'Yəqin ki, evdə qalacağam.'],["She won't come. She's ill.",'O, gəlməyəcək. Xəstədir.']]},
    {t:'mc', q:'Əmin deyilsən: «Bəlkə kinoya gedim.»', o:['I might go to the cinema.','I will go to the cinema.','I go to the cinema.','I am going to the cinema.'], e:'Might — ehtimal, əmin deyil.'},
    {t:'mc', q:'«won\'t» nəyin qısaltmasıdır?', o:['will not','would not','want not','was not'], e:'won\'t = will not.'},
    {t:'listen', en:"I'll probably be late tomorrow.", o:["I'll probably be late tomorrow.","I was late yesterday.","I won't be late tomorrow."]},
    {t:'order', az:'Məncə, sabah isti olacaq.', en:['I think it will be hot tomorrow.',"I think it'll be hot tomorrow."], extra:['is','going']},
    {t:'dict', en:'We might visit my aunt on Sunday.', extra:['will','visiting']},
    {t:'speak', en:"I might stay at home tonight.", az:'Bəlkə bu axşam evdə qalım.'}
  ]},
  { id:'a2-u4-l5', title:'Görüş təyin etmək', items:[
    {t:'learn', title:'Vaxt razılaşdırmaq', body:'Görüş təklif et: «Are you free on…?», «How about…?», «Does 3 o\'clock suit you?» Razılaşma: «That works for me.» Uyğun deyilsə: «I\'m afraid I can\'t.»', ex:[['Are you free on Thursday?','Cümə axşamı boşsan?'],['How about Friday afternoon?','Bəs cümə günü günortadan sonra?'],['That works for me.','Mənə uyğundur.'],["I'm afraid I'm busy then.",'Təəssüf ki, o vaxt məşğulam.']]},
    {t:'mc', q:'«That works for me» nə deməkdir?', o:['Mənə uyğundur','Mən orada işləyirəm','Bu işləmir','Mən bunu edəcəm'], e:'Təklif olunan vaxta razılıq.'},
    {t:'mc', q:'Nəzakətlə imtina:', o:["I'm afraid I can't on Monday.","No. Monday bad.","I don't want Monday.","Monday is impossible for you."], e:'I\'m afraid… — təəssüf ki (nəzakətli).'},
    {t:'listen', en:'How about meeting on Saturday morning?', o:['How about meeting on Saturday morning?','How was the meeting on Saturday?','What about Saturday evening?']},
    {t:'order', az:'Cümə günü boşsan?', en:['Are you free on Friday?','Are you free on Friday?'], extra:['Do','be']},
    {t:'dict', en:"I'm afraid I'm busy on Monday.", extra:['free','Sunday']},
    {t:'speak', en:'Are you free on Thursday afternoon?', az:'Cümə axşamı günortadan sonra boşsan?'}
  ]}],
'a2-u5':[
  { id:'a2-u5-l4', title:'Bədən hissələri', items:[
    {t:'learn', title:'Ağrı haqqında danışmaq', body:'«-ache» sonluğu: headache, toothache, stomachache, backache. Digər hallarda: My knee hurts. / I\'ve got a pain in my leg.', ex:[["I've got a headache.",'Başım ağrıyır.'],['My back hurts.','Belim ağrıyır.'],["I've got a pain in my arm.",'Qolumda ağrı var.'],['I hurt my knee.','Dizimi zədələdim.']]},
    {t:'mc', q:'«Diş ağrısı»:', o:['toothache','teethache','toothpain','tooth hurt'], e:'Tooth + ache = toothache.'},
    {t:'mc', q:'My leg ___.', o:['hurts','hurt','is hurt me','aches me'], e:'Bədən hissəsi + hurts: My leg hurts.'},
    {t:'listen', en:"I've got a terrible stomachache.", o:["I've got a terrible stomachache.","I've got a terrible headache.","I've got a terrible cold."]},
    {t:'order', az:'Belim ağrıyır.', en:['My back hurts.','My back aches.','I have backache.',"I've got backache."], extra:['hurt','is']},
    {t:'dict', en:'She hurt her arm playing volleyball.', extra:['hurts','leg']},
    {t:'speak', en:"I've got a headache and a sore throat.", az:'Başım və boğazım ağrıyır.'}
  ]},
  { id:'a2-u5-l5', title:'Aptekdə', items:[
    {t:'learn', title:'Dərman almaq', body:'Aptekdə simptomu de və məsləhət soruş. «How often should I take it?» — Nə qədər tez-tez qəbul etməliyəm? «Twice a day» — gündə iki dəfə.', ex:[['Have you got anything for a cough?','Öskürək üçün nəyiniz var?'],['Take two tablets twice a day.','Gündə iki dəfə iki həb qəbul edin.'],['How often should I take it?','Nə qədər tez-tez qəbul etməliyəm?'],['You should see a doctor.','Həkimə getməlisiniz.']]},
    {t:'mc', q:'«Gündə üç dəfə»:', o:['three times a day','three day times','three times for day','third times a day'], e:'once, twice, three times a day.'},
    {t:'mc', q:'«Have you got anything for a cold?» harada deyilir?', o:['Aptekdə','Restoranda','Bankda','Hava limanında'], e:'Cold — soyuqdəymə.'},
    {t:'listen', en:'Take one tablet twice a day after meals.', o:['Take one tablet twice a day after meals.','Take two tablets once a day before meals.','Take one tablet three times a day.']},
    {t:'order', az:'Həkimə getməlisən.', en:['You should see a doctor.','You should go to a doctor.','You should go to the doctor.'], extra:['must','to']},
    {t:'dict', en:'Have you got anything for a sore throat?', extra:['something','has']},
    {t:'speak', en:'How often should I take this medicine?', az:'Bu dərmanı nə qədər tez-tez qəbul etməliyəm?'}
  ]}],
'a2-u6':[
  { id:'a2-u6-l4', title:'been və gone', items:[
    {t:'learn', title:'been to / gone to', body:'«He has been to Paris» — Parisdə olub və qayıdıb. «He has gone to Paris» — Parisə gedib, hələ oradadır.', ex:[["I've been to Istanbul twice.",'İki dəfə İstanbulda olmuşam.'],["She's gone to the shop. She'll be back soon.",'Mağazaya gedib. Tezliklə qayıdacaq.'],["Have you ever been to London?",'Heç Londonda olmusan?'],["They've never been abroad.",'Onlar heç vaxt xaricdə olmayıblar.']]},
    {t:'mc', q:'Ali isn\'t here. He has ___ to the bank.', o:['gone','been','went','go'], e:'Hələ qayıtmayıb: has gone.'},
    {t:'mc', q:'I have ___ to Gabala three times.', o:['been','gone','went','go'], e:'Təcrübə, qayıdıb: have been.'},
    {t:'listen', en:"Have you ever been to Georgia?", o:["Have you ever been to Georgia?","Have you ever gone to Georgia?","Did you go to Georgia last year?"]},
    {t:'order', az:'Heç vaxt xaricdə olmamışam.', en:["I have never been abroad.","I've never been abroad."], extra:['gone','ever']},
    {t:'dict', en:"She's gone to the library.", extra:['been','went']},
    {t:'speak', en:"I've been to Sheki twice.", az:'İki dəfə Şəkidə olmuşam.'}
  ]},
  { id:'a2-u6-l5', title:'Yeni nə var?', items:[
    {t:'learn', title:'Yeniliklər haqqında', body:'Yaxın keçmişdə baş verən və indi əhəmiyyəti olan xəbərlər üçün Present Perfect: «I\'ve found a job!» Nə vaxt olduğunu desən — Past Simple: I found it last week.', ex:[["Guess what! I've passed my driving test!",'Bil nə oldu? Sürücülük imtahanından keçdim!'],["Have you heard the news?",'Xəbəri eşitmisən?'],["I've just moved to a new flat.",'Təzəcə yeni mənzilə köçmüşəm.'],["Really? When did you move?",'Doğrudan? Nə vaxt köçdün?']]},
    {t:'mc', q:'«Guess what!» nə vaxt deyilir?', o:['Maraqlı xəbər verəndə','Sual verəndə','Üzr istəyəndə','Sağollaşanda'], e:'Guess what! — Bil nə oldu!'},
    {t:'mc', q:'I ___ a new job! I started last Monday.', o:["'ve got","got","get","'m getting"], e:'İndiki nəticə: I\'ve got a new job. «Started last Monday» isə Past Simple-dır.'},
    {t:'listen', en:"I've just finished my exams!", o:["I've just finished my exams!","I've just started my exams!","I'll finish my exams soon."]},
    {t:'order', az:'Xəbəri eşitmisən?', en:['Have you heard the news?'], extra:['Did','hear']},
    {t:'dict', en:"We've bought a new car.", extra:['buy','brought']},
    {t:'speak', en:"Guess what! I've found a new job!", az:'Bil nə oldu? Yeni iş tapmışam!'}
  ]}],
'a2-u7':[
  { id:'a2-u7-l4', title:'İcazə: can / be allowed to', items:[
    {t:'learn', title:'İcazə və qadağa', body:'«Can / be allowed to» — icazə var. «Can\'t / not allowed to» — qadağandır. «Mustn\'t» — qəti qadağa. «Don\'t have to» — vacib deyil (qadağa deyil!).', ex:[["You can use a dictionary.",'Lüğətdən istifadə edə bilərsən.'],["We aren't allowed to eat in the library.",'Kitabxanada yemək qadağandır.'],["You mustn't cheat in the exam.",'İmtahanda köçürmək olmaz.'],["You don't have to come early.",'Tez gəlmək məcburi deyil.']]},
    {t:'mc', q:'«Mustn\'t» və «don\'t have to» fərqi:', o:['mustn\'t — qadağa, don\'t have to — məcburi deyil','ikisi eynidir','mustn\'t — məcburi deyil','don\'t have to — qadağa'], e:'Çox vacib fərqdir!'},
    {t:'mc', q:'Students ___ use their phones during the exam.', o:["aren't allowed to","don't have to","needn't","isn't allowed to"], e:'Qadağa: aren\'t allowed to.'},
    {t:'listen', en:"You're not allowed to park here.", o:["You're not allowed to park here.","You don't have to park here.","You're allowed to park here."]},
    {t:'order', az:'Kitabxanada danışmaq olmaz.', en:["You mustn't talk in the library.","You must not talk in the library."], extra:['have','to']},
    {t:'dict', en:"We don't have to wear a uniform.", extra:['mustn\'t','has']},
    {t:'speak', en:'Are we allowed to use calculators?', az:'Kalkulyatordan istifadə etmək olar?'}
  ]},
  { id:'a2-u7-l5', title:'Müəllimə e-poçt', items:[
    {t:'learn', title:'Rəsmi e-poçt', body:'Müəllimə yazanda: «Dear Dr Aliyev,» ilə başla, səbəbi qısa yaz, «Could you…?» ilə xahiş et, «Kind regards,» ilə bitir. «Hey» rəsmi deyil.', ex:[['Dear Professor Huseynova,','Hörmətli professor Hüseynova,'],["I'm writing to ask about the deadline.",'Son tarix barədə soruşmaq üçün yazıram.'],['Could you please send me the slides?','Slaydları mənə göndərə bilərsinizmi?'],['Kind regards, Anar Mammadov','Hörmətlə, Anar Məmmədov']]},
    {t:'mc', q:'Müəllimə e-poçt üçün ən uyğun başlanğıc:', o:['Dear Dr Karimov,','Hey teacher!','Hi bro,','Yo!'], e:'Rəsmi: Dear + titul + soyad.'},
    {t:'mc', q:'Rəsmi e-poçtun sonu:', o:['Kind regards,','See ya!','Bye bye','Love,'], e:'Kind regards / Best regards — rəsmi.'},
    {t:'listen', en:"I'm writing to ask about the exam date.", o:["I'm writing to ask about the exam date.","I'm writing to tell you about my holiday.","I'm calling to ask about the exam date."]},
    {t:'order', az:'Slaydları mənə göndərə bilərsiniz?', en:['Could you send me the slides?','Could you please send me the slides?'], extra:['sending','can']},
    {t:'dict', en:"I'm sorry I missed the lecture on Monday.", extra:['miss','lesson']},
    {t:'speak', en:"I'm writing to ask about the deadline.", az:'Son tarix barədə soruşmaq üçün yazıram.'}
  ]}],
'a2-u8':[
  { id:'a2-u8-l4', title:'Hisslər', items:[
    {t:'learn', title:'-ed və -ing sifətlər', body:'«-ed» — insanın hissi: I\'m bored (darıxıram). «-ing» — hissə səbəb olan şey: The film is boring (darıxdırıcıdır). «I\'m boring» desən, «mən darıxdırıcı adamam» olur!', ex:[["I'm bored.",'Darıxıram.'],['The lesson was boring.','Dərs darıxdırıcı idi.'],["I was surprised.",'Təəccübləndim.'],['The news was surprising.','Xəbər təəccüblü idi.'],["She's interested in art.",'Onun sənətə marağı var.']]},
    {t:'mc', q:'The film was very ___. I nearly fell asleep.', o:['boring','bored','bore','bores'], e:'Filmin xüsusiyyəti: boring.'},
    {t:'mc', q:'I\'m ___ in history.', o:['interested','interesting','interest','interests'], e:'İnsanın hissi: interested in.'},
    {t:'listen', en:'I was really tired after the trip.', o:['I was really tired after the trip.','The trip was really tiring.','I was really bored on the trip.']},
    {t:'order', az:'Xəbər çox həyəcanlı idi.', en:['The news was very exciting.','The news was really exciting.'], extra:['excited','were']},
    {t:'dict', en:'We were very surprised by the result.', extra:['surprising','was']},
    {t:'speak', en:"I'm really excited about the trip.", az:'Səfər üçün çox həyəcanlıyam.'}
  ]},
  { id:'a2-u8-l5', title:'Gözlənilməz hadisə', items:[
    {t:'learn', title:'Hekayəni canlandır', body:'Hekayədə gərginlik yarat: «Suddenly…» (birdən), «Luckily…» (xoşbəxtlikdən), «Unfortunately…» (təəssüf ki), «In the end…» (sonda).', ex:[['I was walking home when suddenly it started to rain.','Evə gedirdim ki, birdən yağış başladı.'],['Unfortunately, I didn\'t have an umbrella.','Təəssüf ki, çətirim yox idi.'],['Luckily, a friend gave me a lift.','Xoşbəxtlikdən, bir dostum məni maşınla apardı.'],['In the end, everything was fine.','Sonda hər şey qaydasında oldu.']]},
    {t:'mc', q:'«Luckily» nə deməkdir?', o:['Xoşbəxtlikdən','Təəssüf ki','Birdən','Sonda'], e:'Luck — şans, luckily — xoşbəxtlikdən.'},
    {t:'mc', q:'I ___ TV when the lights went out.', o:['was watching','watched','am watching','watch'], e:'Uzun hərəkət (Past Continuous) + qısa hadisə (Past Simple).'},
    {t:'listen', en:'Suddenly, I heard a strange noise.', o:['Suddenly, I heard a strange noise.','Luckily, I heard a strange noise.','Suddenly, I saw a strange man.']},
    {t:'order', az:'Təəssüf ki, avtobusu qaçırdım.', en:['Unfortunately, I missed the bus.','Unfortunately I missed the bus.'], extra:['Luckily','lost']},
    {t:'dict', en:'In the end, we found the keys in my bag.', extra:['At','find']},
    {t:'speak', en:'Luckily, nobody was hurt.', az:'Xoşbəxtlikdən, heç kim xəsarət almadı.'}
  ]}],
// ======================= B1 =======================
'b1-u1':[
  { id:'b1-u1-l4', title:'How long…?', items:[
    {t:'learn', title:'How long have you…?', body:'Davam edən müddəti soruşmaq: «How long have you lived here?» Cavab: for (müddət) / since (başlanğıc nöqtəsi). Bitmiş müddət üçün Past Simple: How long did you live in Ganja?', ex:[['How long have you known each other?','Bir-birinizi nə vaxtdan tanıyırsınız?'],["We've known each other since school.",'Məktəbdən bəri tanışıq.'],['How long have you been learning English?','Nə vaxtdan ingilis dili öyrənirsən?'],['I lived in Ganja for ten years.','On il Gəncədə yaşadım (artıq yaşamıram).']]},
    {t:'mc', q:'How long ___ here? — Since 2020.', o:['have you worked','do you work','did you work','are you working'], e:'Hələ davam edir + since: Present Perfect.'},
    {t:'mc', q:'I lived in Turkey ___ three years, then I came back.', o:['for','since','during','ago'], e:'Bitmiş müddət: for three years (Past Simple).'},
    {t:'listen', en:"How long have you been waiting?", o:["How long have you been waiting?","How long did you wait?","How long will you wait?"]},
    {t:'order', az:'Onu universitetdən bəri tanıyıram.', en:["I have known him since university.","I've known him since university.","I have known her since university.","I've known her since university."], extra:['for','know']},
    {t:'dict', en:"She's been working here for six months.", extra:['since','worked']},
    {t:'speak', en:"I've been studying English for two years.", az:'İki ildir ingilis dili öyrənirəm.'}
  ]},
  { id:'b1-u1-l5', title:'Nailiyyətlər', items:[
    {t:'learn', title:'Nailiyyəti təqdim et', body:'CV və müsahibədə nailiyyəti Present Perfect və ya Past Simple + konkret nəticə ilə de: «I\'ve organised three events» (indiyədək), «Last year I led a team of five» (konkret vaxt).', ex:[["I've completed two online courses in data analysis.",'Data analizi üzrə iki onlayn kurs bitirmişəm.'],['Last year I led a team of five volunteers.','Keçən il 5 könüllüdən ibarət komandaya rəhbərlik etdim.'],["I've improved my English a lot this year.",'Bu il ingilis dilimi xeyli təkmilləşdirmişəm.'],['We raised 2,000 manats for charity.','Xeyriyyə üçün 2000 manat topladıq.']]},
    {t:'mc', q:'Konkret vaxt var: «Last summer I ___ an internship.»', o:['did','have done','have been doing','do'], e:'Last summer — Past Simple.'},
    {t:'mc', q:'Hansı cümlə nailiyyəti daha güclü göstərir?', o:['I organised a charity event that raised 2,000 manats.','I am good at events.','I like organising.','I did some events.'], e:'Konkret hərəkət + ölçülə bilən nəticə.'},
    {t:'listen', en:"I've completed three projects this year.", o:["I've completed three projects this year.","I completed three projects last year.","I'll complete three projects this year."]},
    {t:'order', az:'Bu il iki kurs bitirmişəm.', en:["I've completed two courses this year.","I have completed two courses this year.","I've finished two courses this year.","I have finished two courses this year."], extra:['complete','last']},
    {t:'dict', en:'Last year I led a team of five students.', extra:['lead','have']},
    {t:'speak', en:"I've organised two events at my university.", az:'Universitetimdə iki tədbir təşkil etmişəm.'}
  ]}],
'b1-u2':[
  { id:'b1-u2-l4', title:'Təkliflər və vədlər', items:[
    {t:'learn', title:'will: təklif, vəd, qərar', body:'«Will» danışıq anında verilən qərar, təklif və vəd üçün işlənir: «I\'ll help you.» Sual formasında təklif: «Shall I open the window?»', ex:[["Don't worry, I'll help you.",'Narahat olma, sənə kömək edəcəm.'],["I promise I'll call you.",'Söz verirəm, zəng edəcəm.'],['Shall I carry your bag?','Çantanı daşıyımmı?'],["The phone's ringing. — I'll get it!",'Telefon zəng çalır. — Mən götürərəm!']]},
    {t:'mc', q:'It\'s cold in here. — ___ close the window?', o:['Shall I','Will I','Do I','Am I going to'], e:'Təklif: Shall I…?'},
    {t:'mc', q:'Danışıq anında qərar: «Oh, we have no milk. I ___ some.»', o:["'ll buy","'m going to buy","buy","bought"], e:'Elə indi qərar verdin — will.'},
    {t:'listen', en:"I promise I won't be late again.", o:["I promise I won't be late again.","I promise I will be late again.","I'm sorry I was late again."]},
    {t:'order', az:'Narahat olma, sənə kömək edəcəm.', en:["Don't worry, I'll help you.","Don't worry, I will help you."], extra:['going','helping']},
    {t:'dict', en:"Shall I send you the report?", extra:['Will','sending']},
    {t:'speak', en:"I'll call you as soon as I arrive.", az:'Çatan kimi sənə zəng edəcəm.'}
  ]},
  { id:'b1-u2-l5', title:'Gələcəyin peşələri', items:[
    {t:'learn', title:'Gələcək haqqında ehtiyatlı danışmaq', body:'Proqnozda əminlik dərəcəsini göstər: «will definitely» (mütləq), «will probably» (yəqin), «may / might» (ola bilər), «probably won\'t» (yəqin ki, yox). Gələcək haqqında heç kim 100% əmin ola bilməz.', ex:[['Technology will definitely change many jobs.','Texnologiya mütləq bir çox peşəni dəyişəcək.'],['Some tasks will probably be automated.','Bəzi tapşırıqlar yəqin ki avtomatlaşdırılacaq.'],['New jobs may appear.','Yeni peşələr yarana bilər.'],["Human skills probably won't lose their value.",'İnsan bacarıqları yəqin ki dəyərini itirməyəcək.']]},
    {t:'mc', q:'Ən ehtiyatlı proqnoz hansıdır?', o:['New jobs may appear.','New jobs will definitely appear.','New jobs appear.','New jobs are appearing everywhere.'], e:'May — ehtimal; definitely — əminlik.'},
    {t:'mc', q:'«probably» sözünün yeri: «It ___ rain.»', o:["will probably","probably will not","will probably not to","probably wills"], e:'Təsdiqdə: will probably. İnkarda: probably won\'t.'},
    {t:'listen', en:'Some routine tasks will probably be automated.', o:['Some routine tasks will probably be automated.','All tasks will definitely be automated.','No tasks will be automated.']},
    {t:'order', az:'Yeni peşələr yarana bilər.', en:['New jobs may appear.','New jobs might appear.'], extra:['will','appears']},
    {t:'dict', en:"Communication skills probably won't lose their value.", extra:['will','lost']},
    {t:'speak', en:"I think AI will probably change my profession.", az:'Məncə süni intellekt yəqin ki mənim peşəmi dəyişəcək.'}
  ]}],
'b1-u3':[
  { id:'b1-u3-l4', title:'unless və in case', items:[
    {t:'learn', title:'unless, in case, as long as', body:'«Unless» = if not: Unless you hurry, you\'ll miss the bus. «In case» — ehtiyat üçün: Take an umbrella in case it rains. «As long as» — şərtilə: You can borrow it as long as you return it.', ex:[["Unless you study, you won't pass.",'Oxumasan, keçməyəcəksən.'],['Take some cash in case the card doesn\'t work.','Kart işləməsə deyə, bir az nağd pul götür.'],['You can go as long as you are back by ten.','Saat 10-a qədər qayıtmaq şərtilə gedə bilərsən.']]},
    {t:'mc', q:'___ you leave now, you\'ll be late.', o:['Unless','In case','As long as','If not'], e:'Unless = if you don\'t.'},
    {t:'mc', q:'Bring a jacket ___ it gets cold.', o:['in case','unless','as long as','so'], e:'Ehtiyat üçün: in case.'},
    {t:'listen', en:"You can use my laptop as long as you're careful.", o:["You can use my laptop as long as you're careful.","You can't use my laptop unless I'm here.","You can use my laptop in case you need it."]},
    {t:'order', az:'Tələsməsən, gecikəcəksən.', en:["Unless you hurry, you'll be late.","Unless you hurry, you will be late.","You'll be late unless you hurry.","You will be late unless you hurry."], extra:['if','don\'t']},
    {t:'dict', en:'Save the file in case the computer crashes.', extra:['unless','crash']},
    {t:'speak', en:"I won't go unless you come with me.", az:'Sən mənimlə gəlməsən, getməyəcəyəm.'}
  ]},
  { id:'b1-u3-l5', title:'Məsləhət: If I were you', items:[
    {t:'learn', title:'If I were you, I\'d…', body:'Məsləhət vermək üçün Second Conditional: «If I were you, I would…» (Mən sənin yerində olsaydım…). «I» ilə də «were» işlənir.', ex:[["If I were you, I'd apply for that job.",'Sənin yerində olsaydım, o işə müraciət edərdim.'],["If I were you, I wouldn't worry.",'Sənin yerində olsaydım, narahat olmazdım.'],['What would you do if you were me?','Mənim yerimdə olsaydın, nə edərdin?']]},
    {t:'mc', q:'If I ___ you, I\'d talk to the manager.', o:['were','am','was being','will be'], e:'Sabit forma: If I were you.'},
    {t:'mc', q:'Bu cümlə nə üçündür: «If I were you, I\'d rest.»', o:['Məsləhət vermək','Keçmişi təsvir etmək','Əmr vermək','Plan demək'], e:'Nəzakətli məsləhət.'},
    {t:'listen', en:"If I were you, I'd take the job.", o:["If I were you, I'd take the job.","If I was you, I took the job.","If you were me, you'd take the job."]},
    {t:'order', az:'Sənin yerində olsaydım, narahat olmazdım.', en:["If I were you, I wouldn't worry.","If I were you, I would not worry.","I wouldn't worry if I were you."], extra:['was','will']},
    {t:'dict', en:'What would you do if you were me?', extra:['will','was']},
    {t:'speak', en:"If I were you, I'd ask for feedback.", az:'Sənin yerində olsaydım, rəy istərdim.'}
  ]}],
'b1-u4':[
  { id:'b1-u4-l4', title:'Passiv: Present Perfect', items:[
    {t:'learn', title:'has / have been + V3', body:'Yeni nəticəni passivlə bildirmək: «The results have been published.» — Nəticələr dərc olunub. Kimin etdiyi önəmli deyil.', ex:[['The results have been published.','Nəticələr dərc olunub.'],['A new bridge has been built.','Yeni körpü tikilib.'],['Your order has been sent.','Sifarişiniz göndərilib.'],['Has the problem been solved?','Problem həll olunubmu?']]},
    {t:'mc', q:'The meeting ___ cancelled.', o:['has been','have been','has','is been'], e:'Meeting tək: has been + V3.'},
    {t:'mc', q:'Two new schools ___ opened this year.', o:['have been','has been','have','were being'], e:'Cəm: have been.'},
    {t:'listen', en:'Your application has been received.', o:['Your application has been received.','Your application was rejected.','Your application will be received.']},
    {t:'order', az:'Sifarişiniz göndərilib.', en:['Your order has been sent.','Your order has been shipped.'], extra:['have','sending']},
    {t:'dict', en:'The new rules have been announced.', extra:['has','announce']},
    {t:'speak', en:'The problem has been solved.', az:'Problem həll olunub.'}
  ]},
  { id:'b1-u4-l5', title:'Saxta xəbəri yoxla', items:[
    {t:'learn', title:'Mənbəni sorğula', body:'Xəbəri yoxlamaq üçün suallar: «Who wrote it? What is the source? Is it reported by other reliable media?» «Allegedly» — iddiaya görə (hələ sübut olunmayıb).', ex:[['What is the source of this information?','Bu məlumatın mənbəyi nədir?'],['The story was not confirmed.','Xəbər təsdiqlənmədi.'],['Allegedly, the company hid the data.','İddiaya görə, şirkət məlumatı gizlədib.'],['Check whether other media reported it.','Başqa medianın bunu yazıb-yazmadığını yoxla.']]},
    {t:'mc', q:'«Allegedly» nə deməkdir?', o:['İddiaya görə','Rəsmi olaraq','Mütləq','Gizli şəkildə'], e:'Hələ sübut olunmamış iddia.'},
    {t:'mc', q:'Xəbəri yoxlamağın ən yaxşı yolu:', o:['Bir neçə etibarlı mənbəni müqayisə etmək','Başlığı oxuyub paylaşmaq','Şərhlərə inanmaq','Dostlardan soruşmaq'], e:'Müxtəlif etibarlı mənbələrlə müqayisə.'},
    {t:'listen', en:'The report has not been confirmed yet.', o:['The report has not been confirmed yet.','The report was confirmed yesterday.','The report has been written.']},
    {t:'order', az:'Bu məlumatın mənbəyi nədir?', en:['What is the source of this information?',"What's the source of this information?"], extra:['who','sources']},
    {t:'dict', en:'The story was shared thousands of times.', extra:['share','were']},
    {t:'speak', en:'Is this information from a reliable source?', az:'Bu məlumat etibarlı mənbədəndir?'}
  ]}],
'b1-u5':[
  { id:'b1-u5-l4', title:'LinkedIn profili', items:[
    {t:'learn', title:'Professional başlıq və xülasə', body:'LinkedIn başlığı sadəcə «student» olmamalıdır: sahəni və dəyəri göstər. Xülasədə 1-ci şəxsdə qısa yaz: kimsən, nə bacarırsan, nə axtarırsan.', ex:[['Marketing student | Social media & content creation','Marketinq tələbəsi | Sosial media və kontent'],["I'm passionate about data and storytelling.",'Data və hekayə anlatma ilə çox maraqlanıram.'],["I'm currently looking for an internship in digital marketing.",'Hazırda rəqəmsal marketinq üzrə təcrübə proqramı axtarıram.'],['Feel free to connect with me.','Mənimlə əlaqə qurmaqdan çəkinməyin.']]},
    {t:'mc', q:'Ən güclü LinkedIn başlığı:', o:['Economics student | Data analysis & Excel','Student','Looking for job!!!','Hello, I am Anar'], e:'Sahə + konkret bacarıqlar.'},
    {t:'mc', q:'«I\'m currently looking for…» nəyi bildirir?', o:['Hazırda nə axtardığını','Keçmiş işini','Hobbini','Maaşını'], e:'Currently — hazırda.'},
    {t:'listen', en:"I'm currently looking for an internship in finance.", o:["I'm currently looking for an internship in finance.","I currently work in finance.","I was looking for a job in finance."]},
    {t:'order', az:'Data analizi ilə çox maraqlanıram.', en:["I'm passionate about data analysis.","I am passionate about data analysis.","I'm very interested in data analysis.","I am very interested in data analysis."], extra:['for','passion']},
    {t:'dict', en:'Feel free to connect with me.', extra:['feels','contact']},
    {t:'speak', en:"I'm a final-year student looking for an internship.", az:'Təcrübə proqramı axtaran son kurs tələbəsiyəm.'}
  ]},
  { id:'b1-u5-l5', title:'Networking', items:[
    {t:'learn', title:'Tədbirdə tanışlıq', body:'Networking — peşəkar əlaqələrin qurulması və inkişaf etdirilməsidir. Söhbəti açıq sualla başlat, qarşı tərəfi dinlə və sonda əlaqəni davam etdirməyi təklif et.', ex:[['What brings you to this event?','Sizi bu tədbirə nə gətirib?'],['How did you get into this field?','Bu sahəyə necə gəldiniz?'],['It was great talking to you.','Sizinlə danışmaq çox xoş idi.'],['Could I connect with you on LinkedIn?','LinkedIn-də sizinlə əlaqə qura bilərəm?']]},
    {t:'mc', q:'Söhbəti başlatmaq üçün ən yaxşı sual:', o:['What brings you to this event?','Can you give me a job?','How much do you earn?','Why are you here alone?'], e:'Açıq, nəzakətli sual.'},
    {t:'mc', q:'Söhbəti nəzakətlə bitirmək:', o:['It was great talking to you.','OK, bye.','I have to go now, sorry, boring.','Finished.'], e:'Müsbət və nəzakətli yekun.'},
    {t:'listen', en:'How did you get into this field?', o:['How did you get into this field?','How did you get to this event?','What field do you work in?']},
    {t:'order', az:'Sizinlə danışmaq çox xoş idi.', en:['It was great talking to you.','It was nice talking to you.'], extra:['talk','is']},
    {t:'dict', en:'Could I connect with you on LinkedIn?', extra:['Can','contact']},
    {t:'speak', en:'What brings you to this event?', az:'Sizi bu tədbirə nə gətirib?'}
  ]}],
'b1-u6':[
  { id:'b1-u6-l4', title:'Reporting fellər', items:[
    {t:'learn', title:'say-dən başqa fellər', body:'Söhbəti daha dəqiq ötürmək üçün: advise (məsləhət görmək), promise (vəd etmək), remind (xatırlatmaq) + to; suggest + -ing; apologise for + -ing.', ex:[['She advised me to apply early.','O, mənə tez müraciət etməyi məsləhət gördü.'],['He promised to send the file.','O, faylı göndərməyi vəd etdi.'],['They suggested meeting on Friday.','Onlar cümə günü görüşməyi təklif etdilər.'],['He apologised for being late.','O, gecikdiyi üçün üzr istədi.']]},
    {t:'mc', q:'She suggested ___ a break.', o:['taking','to take','take','took'], e:'Suggest + -ing.'},
    {t:'mc', q:'My teacher reminded me ___ my homework.', o:['to bring','bringing','bring','brought'], e:'Remind someone + to.'},
    {t:'listen', en:'He apologised for missing the meeting.', o:['He apologised for missing the meeting.','He promised to attend the meeting.','He suggested missing the meeting.']},
    {t:'order', az:'O, mənə kömək edəcəyini vəd etdi.', en:['She promised to help me.','He promised to help me.'], extra:['helping','my']},
    {t:'dict', en:'The doctor advised him to rest.', extra:['resting','suggested']},
    {t:'speak', en:'She advised me to update my CV.', az:'O, mənə CV-mi yeniləməyi məsləhət gördü.'}
  ]},
  { id:'b1-u6-l5', title:'Görüşün xülasəsi', items:[
    {t:'learn', title:'Kim nə dedi?', body:'Görüşdən sonra xülasə yazanda dolayı nitq işlənir: «The manager said that the deadline had changed.» «Agreed to» — razılaşdı; «asked us to» — bizdən xahiş etdi.', ex:[['The manager said that the budget was limited.','Menecer büdcənin məhdud olduğunu dedi.'],['Aysel asked whether we could finish by Friday.','Aysel cüməyə qədər bitirə biləcəyimizi soruşdu.'],['We agreed to meet again next week.','Gələn həftə yenidən görüşməyə razılaşdıq.'],['He asked us to send our ideas.','O, bizdən fikirlərimizi göndərməyi xahiş etdi.']]},
    {t:'mc', q:'"We can finish by Friday," she said. → She said they ___ finish by Friday.', o:['could','can','will','could have'], e:'can → could.'},
    {t:'mc', q:'"Is the report ready?" he asked. → He asked ___ the report was ready.', o:['whether','that','what','did'], e:'Bəli/xeyr sualı: if / whether.'},
    {t:'listen', en:'We agreed to meet again next Tuesday.', o:['We agreed to meet again next Tuesday.','We agreed to meet again last Tuesday.','We refused to meet again next Tuesday.']},
    {t:'order', az:'O, bizdən fikirlərimizi göndərməyi xahiş etdi.', en:['He asked us to send our ideas.','She asked us to send our ideas.'], extra:['sending','said']},
    {t:'dict', en:'The manager said that the deadline had changed.', extra:['has','says']},
    {t:'speak', en:'She said that the project was going well.', az:'O, layihənin yaxşı getdiyini dedi.'}
  ]}],
'b1-u7':[
  { id:'b1-u7-l4', title:'Əlavə məlumat: vergüllə', items:[
    {t:'learn', title:'Vergüllü relative clause', body:'Əlavə məlumat verəndə vergül qoyulur və «that» işlənmir: «My sister, who lives in Ganja, is a doctor.» Vergül yoxdursa, məlumat hansını kəsdiyimizi göstərir.', ex:[['My brother, who is a pilot, travels a lot.','Pilot olan qardaşım çox səyahət edir.'],['Baku, which is on the Caspian Sea, is windy.','Xəzər sahilində yerləşən Bakı küləklidir.'],['The book that you gave me is great.','Mənə verdiyin kitab əladır. (vergülsüz)']]},
    {t:'mc', q:'My father, ___ is 60, still works.', o:['who','that','which','whose'], e:'Vergüllü cümlədə «that» olmaz: who.'},
    {t:'mc', q:'Sheki, ___ is famous for halva, is very beautiful.', o:['which','that','who','where'], e:'Yer adı haqqında əlavə məlumat: which.'},
    {t:'listen', en:'My friend, who works in Dubai, is visiting next week.', o:['My friend, who works in Dubai, is visiting next week.','My friend who works in Dubai visited last week.','My friend works in Dubai and is moving next week.']},
    {t:'order', az:'Kimya oxuyan bacım Londonda yaşayır.', en:['My sister, who studies chemistry, lives in London.'], extra:['that','which']},
    {t:'dict', en:'Our teacher, who is from Canada, speaks four languages.', extra:['that','which']},
    {t:'speak', en:'Baku, which is my home town, is very windy.', az:'Doğma şəhərim olan Bakı çox küləklidir.'}
  ]},
  { id:'b1-u7-l5', title:'Mübahisəni həll etmək', items:[
    {t:'learn', title:'Münaqişədə ünsiyyət', body:'Mübahisədə «you always…» ittihamı yerinə öz hissini de: «I feel… when…». Qarşı tərəfi başa düşdüyünü göstər: «I see what you mean.» Həll təklif et: «How about we…?»', ex:[['I feel frustrated when plans change at the last minute.','Planlar son anda dəyişəndə əsəbiləşirəm.'],['I see what you mean.','Nə demək istədiyini başa düşürəm.'],['How about we split the tasks?','Bəs tapşırıqları bölüşdürək?'],["Let's find a solution that works for both of us.",'Hər ikimizə uyğun həll tapaq.']]},
    {t:'mc', q:'Hansı ifadə mübahisəni yumşaldır?', o:['I see what you mean, but…','You are always wrong.','Whatever.','It\'s your problem.'], e:'Qarşı tərəfi eşitdiyini göstərir.'},
    {t:'mc', q:'«I feel… when…» strukturu nə üçündür?', o:['İttiham etmədən hissini bildirmək','Əmr vermək','Keçmişi danışmaq','Üzr istəmək'], e:'«Mən» mesajı — konstruktiv ünsiyyət.'},
    {t:'listen', en:"Let's find a solution that works for both of us.", o:["Let's find a solution that works for both of us.","Let's forget the problem.","It's not my problem."]},
    {t:'order', az:'Nə demək istədiyini başa düşürəm.', en:['I see what you mean.','I understand what you mean.'], extra:['say','that']},
    {t:'dict', en:'How about we split the work equally?', extra:['What','divide']},
    {t:'speak', en:'I feel stressed when the deadline changes.', az:'Son tarix dəyişəndə stress keçirirəm.'}
  ]}],
'b1-u8':[
  { id:'b1-u8-l4', title:'Əvvəl və indi', items:[
    {t:'learn', title:'Dəyişiklikləri müqayisə et', body:'Keçmiş vəziyyət: «used to». İndiki: Present Simple. Dəyişiklik: «Now… / These days… / Nowadays…».', ex:[["People used to write letters. Now they send messages.",'İnsanlar əvvəllər məktub yazırdılar. İndi mesaj göndərirlər.'],["There didn't use to be a metro in this area.",'Əvvəllər bu ərazidə metro yox idi.'],['Nowadays, most students study online too.','İndi tələbələrin çoxu onlayn da oxuyur.']]},
    {t:'mc', q:'There ___ a cinema here, but now it\'s a shop.', o:['used to be','use to be','was used to','used to being'], e:'Keçmiş vəziyyət: used to be.'},
    {t:'mc', q:'Did you ___ play the piano?', o:['use to','used to','using to','uses to'], e:'Sual və inkarda: did … use to.'},
    {t:'listen', en:"I didn't use to like coffee, but now I love it.", o:["I didn't use to like coffee, but now I love it.","I used to love coffee, but now I don't.","I'm not used to drinking coffee."]},
    {t:'order', az:'İnsanlar əvvəllər məktub yazırdılar.', en:['People used to write letters.'], extra:['use','were']},
    {t:'dict', en:'Nowadays most people pay by card.', extra:['used','paid']},
    {t:'speak', en:'I used to be shy, but now I enjoy speaking in public.', az:'Əvvəllər utancaq idim, amma indi ictimaiyyət qarşısında danışmağı sevirəm.'}
  ]},
  { id:'b1-u8-l5', title:'Yeni yerə uyğunlaşmaq', items:[
    {t:'learn', title:'get used to', body:'«Get used to» — öyrəşmək prosesi: I\'m getting used to the new job. «Be used to» — artıq öyrəşmişəm. Hər ikisindən sonra isim və ya -ing gəlir.', ex:[["I'm getting used to living alone.",'Tək yaşamağa öyrəşirəm.'],["It took me a month to get used to the climate.",'İqlimə öyrəşmək bir ay çəkdi.'],["She isn't used to working at night.",'O, gecə işləməyə öyrəşməyib.']]},
    {t:'mc', q:'I\'m slowly getting used to ___ early.', o:['waking up','wake up','woke up','be waking'], e:'get used to + -ing.'},
    {t:'mc', q:'«be used to» nə deməkdir?', o:['Artıq öyrəşmək','Əvvəllər etmək','İstifadə olunmaq','Öyrənmək istəmək'], e:'I\'m used to it — buna öyrəşmişəm.'},
    {t:'listen', en:"It took me a while to get used to the new city.", o:["It took me a while to get used to the new city.","I used to live in a new city.","I'm not used to new cities."]},
    {t:'order', az:'Tək yaşamağa öyrəşirəm.', en:["I'm getting used to living alone.","I am getting used to living alone."], extra:['live','use']},
    {t:'dict', en:"She isn't used to working in a big team.", extra:['use','work']},
    {t:'speak', en:"I'm getting used to my new routine.", az:'Yeni gündəlik rejimimə öyrəşirəm.'}
  ]}],
// ======================= B2 =======================
'b2-u1':[
  { id:'b2-u1-l4', title:'should have done', items:[
    {t:'learn', title:'Keçmişə tənqid: should have', body:'«Should have + V3» — keçmişdə edilməli olan, amma edilməyən iş (peşmançılıq, tənqid). «Shouldn\'t have» — edilməməli idi, amma edildi.', ex:[['I should have started earlier.','Daha tez başlamalı idim.'],["You shouldn't have said that.",'Bunu deməməli idin.'],['We should have checked the data.','Məlumatları yoxlamalı idik.'],['He should have asked for help.','O, kömək istəməli idi.']]},
    {t:'mc', q:'I failed the test. I ___ more.', o:['should have studied','should study','had studied','should studied'], e:'Keçmişə peşmançılıq: should have + V3.'},
    {t:'mc', q:'«You shouldn\'t have bought it» mənası:', o:['Onu almamalı idin (amma aldın)','Onu almalısan','Onu ala bilməzsən','Onu alacaqsan'], e:'Keçmiş hərəkətin tənqidi.'},
    {t:'listen', en:'We should have booked the tickets earlier.', o:['We should have booked the tickets earlier.','We should book the tickets earlier.','We booked the tickets earlier.']},
    {t:'order', az:'Daha tez başlamalı idim.', en:['I should have started earlier.','I should have started sooner.'], extra:['start','had']},
    {t:'dict', en:"You shouldn't have sent that email.", extra:['send','mustn\'t']},
    {t:'speak', en:'I should have asked for feedback sooner.', az:'Daha tez rəy istəməli idim.'}
  ]},
  { id:'b2-u1-l5', title:'I\'d rather / It\'s time', items:[
    {t:'learn', title:'İstək bildirən strukturlar', body:'«I\'d rather + fel» — üstünlük verirəm: I\'d rather stay. «I\'d rather you + keçmiş zaman» — başqasından istək: I\'d rather you didn\'t smoke. «It\'s (high) time + keçmiş» — artıq vaxtıdır: It\'s time we left.', ex:[["I'd rather work from home today.",'Bu gün evdən işləməyi üstün tuturam.'],["I'd rather you didn't tell anyone.",'İstərdim ki, heç kimə deməyəsən.'],["It's high time we started saving.",'Artıq qənaət etməyə başlamağımızın vaxtıdır.']]},
    {t:'mc', q:'I\'d rather you ___ late again.', o:["didn't come","don't come","not to come","won't come"], e:'I\'d rather + you + keçmiş zaman.'},
    {t:'mc', q:'It\'s high time you ___ a job.', o:['found','find','will find','have found'], e:'It\'s time + keçmiş forma.'},
    {t:'listen', en:"I'd rather stay in tonight, if you don't mind.", o:["I'd rather stay in tonight, if you don't mind.","I'd rather go out tonight.","I'd stay in tonight if I could."]},
    {t:'order', az:'Artıq getməyimizin vaxtıdır.', en:["It's time we left.","It is time we left.","It's high time we left.","It is high time we left."], extra:['leave','to']},
    {t:'dict', en:"I'd rather you didn't share this information.", extra:['don\'t','shared']},
    {t:'speak', en:"I'd rather discuss this in person.", az:'Bunu üzbəüz müzakirə etməyi üstün tuturam.'}
  ]}],
'b2-u2':[
  { id:'b2-u2-l4', title:'Ehtimal sözləri', items:[
    {t:'learn', title:'likely, bound to, unlikely', body:'Modal fellərdən başqa ehtimal vasitələri: «is bound to» (mütləq olacaq), «is likely to» (yəqin), «is unlikely to» (çətin ki), «there\'s a good chance that…».', ex:[["Prices are bound to rise.",'Qiymətlər mütləq artacaq.'],["She's likely to get the job.",'O, yəqin ki işi alacaq.'],["It's unlikely to rain today.",'Bu gün yağış yağması çətin ki.'],["There's a good chance that we'll win.",'Qalib gəlmək şansımız yüksəkdir.']]},
    {t:'mc', q:'Ən yüksək ehtimal:', o:['is bound to','is likely to','might','is unlikely to'], e:'Bound to — demək olar ki, mütləq.'},
    {t:'mc', q:'The project ___ finish on time. We\'re far behind.', o:['is unlikely to','is bound to','is likely to','must'], e:'Gecikmə var — ehtimal azdır.'},
    {t:'listen', en:"There's a good chance that the meeting will be postponed.", o:["There's a good chance that the meeting will be postponed.","There's no chance of a meeting today.","The meeting was postponed yesterday."]},
    {t:'order', az:'O, yəqin ki gecikəcək.', en:["He's likely to be late.","He is likely to be late.","She's likely to be late.","She is likely to be late."], extra:['bound','will']},
    {t:'dict', en:'Interest in online learning is bound to grow.', extra:['likely','grows']},
    {t:'speak', en:"It's unlikely that we'll finish today.", az:'Bu gün bitirməyimiz çətin ki.'}
  ]},
  { id:'b2-u2-l5', title:'Nəticə çıxarmaq', items:[
    {t:'learn', title:'Sübutdan nəticəyə', body:'Sübuta əsaslanan nəticə: «judging by…» (…-a görə), «it seems that…», «apparently…» (eşitdiyimə görə). Keçmiş haqqında: «He must have forgotten.»', ex:[['Judging by his face, he must be tired.','Üzünə baxanda, yəqin yorğundur.'],["It seems that the email didn't arrive.",'Deyəsən, e-poçt çatmayıb.'],["Apparently, the shop has closed.",'Deyilənə görə, mağaza bağlanıb.'],["She can't have seen my message.",'O, mesajımı görmüş ola bilməz.']]},
    {t:'mc', q:'The lights are off. They ___ gone out.', o:['must have','can\'t have','should have','would have'], e:'Güclü sübut: must have + V3.'},
    {t:'mc', q:'«Apparently» nə deməkdir?', o:['Deyilənə görə / görünür','Mütləq','Heç vaxt','Təsadüfən'], e:'Eşidilən və ya görünən məlumat.'},
    {t:'listen', en:"She can't have seen my message. She hasn't replied.", o:["She can't have seen my message. She hasn't replied.","She must have seen my message. She replied.","She didn't send me a message."]},
    {t:'order', az:'Deyəsən, e-poçt çatmayıb.', en:["It seems that the email didn't arrive.","It seems the email didn't arrive.","It seems that the email hasn't arrived.","It seems the email hasn't arrived."], extra:['seem','arrived']},
    {t:'dict', en:'Judging by the queue, the film must be popular.', extra:['can\'t','judge']},
    {t:'speak', en:'He must have forgotten about the meeting.', az:'O, yəqin ki görüşü unudub.'}
  ]}],
'b2-u3':[
  { id:'b2-u3-l4', title:'Paraphrase və istinad', items:[
    {t:'learn', title:'Mənbəyə istinad', body:'Akademik yazıda başqasının fikrini öz sözlərinlə ver və mənbəni göstər: «According to Smith (2021)…», «Smith argues that…», «As noted by…». Kopyalamaq plagiatdır.', ex:[['According to the report, unemployment fell slightly.','Hesabata görə, işsizlik bir qədər azalıb.'],['Smith (2021) argues that soft skills are underestimated.','Smith (2021) yumşaq bacarıqların az qiymətləndirildiyini iddia edir.'],['As noted by several researchers, …','Bir neçə tədqiqatçının qeyd etdiyi kimi, …'],['This finding is consistent with earlier studies.','Bu nəticə əvvəlki tədqiqatlarla uyğundur.']]},
    {t:'mc', q:'Plagiatın qarşısını necə alırsan?', o:['Öz sözlərinlə yazıb mənbəni göstərməklə','Mətni tam kopyalayıb','Mənbəni gizlədib','Yalnız sözləri dəyişib'], e:'Paraphrase + istinad.'},
    {t:'mc', q:'«This is consistent with earlier studies» mənası:', o:['Bu, əvvəlki tədqiqatlarla uyğundur','Bu, əvvəlki tədqiqatları təkzib edir','Əvvəlki tədqiqatlar yoxdur','Bu, köhnə məlumatdır'], e:'Consistent with — uyğun.'},
    {t:'listen', en:'According to the latest report, the number of applicants increased.', o:['According to the latest report, the number of applicants increased.','The latest report did not mention applicants.','According to the report, the number of applicants fell.']},
    {t:'order', az:'Hesabata görə, satışlar artıb.', en:['According to the report, sales have increased.','According to the report, sales increased.','According to the report, sales have risen.'], extra:['accord','by']},
    {t:'dict', en:'The author argues that education should be more practical.', extra:['argue','says']},
    {t:'speak', en:'According to recent studies, sleep affects memory.', az:'Son tədqiqatlara görə, yuxu yaddaşa təsir edir.'}
  ]},
  { id:'b2-u3-l5', title:'Nəticə paraqrafı', items:[
    {t:'learn', title:'Esseni bitirmək', body:'Nəticədə yeni arqument gətirmə. Əsas fikirləri ümumiləşdir və mövqeyini qısa təkrar et: «In conclusion…», «Overall…», «Taking everything into account…».', ex:[['In conclusion, the benefits outweigh the drawbacks.','Nəticə olaraq, üstünlüklər çatışmazlıqlardan çoxdur.'],['Overall, the evidence suggests that…','Ümumilikdə, dəlillər göstərir ki…'],['Taking everything into account, a balanced approach is best.','Hər şeyi nəzərə alsaq, balanslı yanaşma ən yaxşısıdır.']]},
    {t:'mc', q:'Nəticə paraqrafında nə OLMAMALIDIR?', o:['Tamamilə yeni arqument','Əsas fikirlərin xülasəsi','Mövqeyin təkrarı','Ümumiləşdirici cümlə'], e:'Yeni fikir əsas hissədə olmalıdır.'},
    {t:'mc', q:'«outweigh» nə deməkdir?', o:['…-dan üstün olmaq, çox olmaq','çəki ölçmək','azaltmaq','müqayisə etmək'], e:'The benefits outweigh the drawbacks.'},
    {t:'listen', en:'Taking everything into account, I believe a balanced approach is best.', o:['Taking everything into account, I believe a balanced approach is best.','Taking everything into account, I disagree completely.','Without any evidence, I believe this approach is best.']},
    {t:'order', az:'Nəticə olaraq, üstünlüklər çatışmazlıqlardan çoxdur.', en:['In conclusion, the advantages outweigh the disadvantages.','In conclusion, the benefits outweigh the drawbacks.'], extra:['Conclude','over']},
    {t:'dict', en:'Overall, the evidence suggests a positive trend.', extra:['Over','suggest']},
    {t:'speak', en:'In conclusion, both sides have valid points.', az:'Nəticə olaraq, hər iki tərəfin əsaslı fikirləri var.'}
  ]}],
'b2-u4':[
  { id:'b2-u4-l4', title:'Söz növbəsi və kəsmək', items:[
    {t:'learn', title:'Müzakirəni idarə etmək', body:'Nəzakətlə söz almaq: «Sorry to interrupt, but…», «Can I just add something?» Sözə qayıtmaq: «As I was saying…». Başqasını cəlb etmək: «What do you think, Leyla?»', ex:[['Sorry to interrupt, but I think we\'re missing something.','Sözünüzü kəsdiyim üçün üzr istəyirəm, amma məncə nəyisə nəzərdən qaçırırıq.'],['Can I just add something here?','Burada bir şey əlavə edə bilərəm?'],['As I was saying, the cost is the main issue.','Dediyim kimi, əsas məsələ xərcdir.'],["We haven't heard from Kamal yet. What do you think?",'Kamalın fikrini hələ eşitmədik. Sən nə düşünürsən?']]},
    {t:'mc', q:'Nəzakətlə söz kəsmək:', o:['Sorry to interrupt, but…','Stop talking.','Be quiet, listen.','You are wrong, listen me.'], e:'Üzr + fikir.'},
    {t:'mc', q:'«As I was saying…» nə vaxt işlənir?', o:['Kəsilən fikrə qayıdanda','Müzakirəni başlayanda','Razılaşanda','Sağollaşanda'], e:'Öz sözünə qayıtmaq.'},
    {t:'listen', en:'Can I just add something before we move on?', o:['Can I just add something before we move on?','Can we move on to the next point?','Can I just ask a quick question?']},
    {t:'order', az:'Burada bir şey əlavə edə bilərəm?', en:['Can I just add something here?','Can I add something here?','Could I add something here?'], extra:['adding','say']},
    {t:'dict', en:"Sorry to interrupt, but I don't think that's correct.", extra:['interrupting','right']},
    {t:'speak', en:"What do you think, Aysel? We haven't heard from you.", az:'Sən nə düşünürsən, Aysel? Sənin fikrini eşitmədik.'}
  ]},
  { id:'b2-u4-l5', title:'Güzəşt və kompromis', items:[
    {t:'learn', title:'Ortaq nöqtə tapmaq', body:'Qismən razılıq: «I take your point, but…», «That\'s true to some extent.» Kompromis: «Let\'s meet halfway.», «Would you be willing to…?»', ex:[["I take your point, but the budget is limited.",'Fikrini qəbul edirəm, amma büdcə məhduddur.'],["That's true to some extent.",'Bu, müəyyən dərəcədə doğrudur.'],['Would you be willing to compromise on the deadline?','Son tarix məsələsində güzəştə getməyə hazırsınızmı?'],["Let's meet halfway.",'Ortada razılaşaq.']]},
    {t:'mc', q:'«to some extent» mənası:', o:['müəyyən dərəcədə','tamamilə','heç vaxt','dərhal'], e:'Qismən razılıq.'},
    {t:'mc', q:'Kompromis təklif edən cümlə:', o:["Let's meet halfway.","Absolutely not.","I'm right, as usual.","Forget it."], e:'Meet halfway — ortada razılaşmaq.'},
    {t:'listen', en:"I take your point, but we need to consider the cost.", o:["I take your point, but we need to consider the cost.","I don't understand your point at all.","I agree completely with the cost."]},
    {t:'order', az:'Bu, müəyyən dərəcədə doğrudur.', en:["That's true to some extent.","That is true to some extent."], extra:['extend','very']},
    {t:'dict', en:'Would you be willing to change the schedule?', extra:['will','changing']},
    {t:'speak', en:"I see your point, but let's meet halfway.", az:'Fikrini anlayıram, amma ortada razılaşaq.'}
  ]}],
'b2-u5':[
  { id:'b2-u5-l4', title:'Zəif tərəfin haqqında', items:[
    {t:'learn', title:'«What is your weakness?»', body:'Həqiqi, amma işə kritik olmayan zəiflik seç və onu necə inkişaf etdirdiyini göstər. «Perfectionism» kimi klişelərdən qaç.', ex:[['I used to find public speaking difficult.','Əvvəllər ictimai çıxış mənə çətin gəlirdi.'],["To work on it, I joined a debate club.",'Bunun üzərində işləmək üçün debat klubuna qoşuldum.'],["I'm still improving, but I'm much more confident now.",'Hələ də inkişaf edirəm, amma indi daha inamlıyam.'],['I sometimes take on too many tasks, so I now use a priority list.','Bəzən çox tapşırıq götürürəm, ona görə indi prioritet siyahısından istifadə edirəm.']]},
    {t:'mc', q:'Ən güclü cavab strukturu:', o:['Zəiflik + onu inkişaf etdirmək üçün addım + nəticə','«Mənim zəif tərəfim yoxdur»','«Çox mükəmməliyyətçiyəm» (izahsız)','Mövzunu dəyişmək'], e:'Özünüdərk + inkişaf göstərir.'},
    {t:'mc', q:'«take on too many tasks» mənası:', o:['Çox tapşırıq üzərinə götürmək','Tapşırıqları rədd etmək','Tapşırıqları başqasına vermək','Tapşırıqları unutmaq'], e:'Take on — öhdəsinə götürmək.'},
    {t:'listen', en:"I used to find presenting difficult, so I joined a debate club.", o:["I used to find presenting difficult, so I joined a debate club.","I find presenting easy, so I left the debate club.","I'm used to presenting in a debate club."]},
    {t:'order', az:'Hələ də inkişaf edirəm.', en:["I'm still improving.","I am still improving."], extra:['improve','yet']},
    {t:'dict', en:'I now use a priority list to manage my time.', extra:['used','managing']},
    {t:'speak', en:"I'm working on my public speaking skills.", az:'İctimai çıxış bacarıqlarım üzərində işləyirəm.'}
  ]},
  { id:'b2-u5-l5', title:'Müsahibədən sonra', items:[
    {t:'learn', title:'Təşəkkür məktubu', body:'Müsahibədən sonra 24 saat ərzində qısa təşəkkür məktubu göndərmək peşəkar təsir bağışlayır: təşəkkür, maraqlı bir məqama istinad, motivasiyanın təsdiqi.', ex:[['Thank you for taking the time to meet with me today.','Bu gün mənimlə görüşməyə vaxt ayırdığınız üçün təşəkkür edirəm.'],['I particularly enjoyed learning about your new project.','Xüsusilə yeni layihəniz haqqında öyrənmək mənə maraqlı oldu.'],['Our conversation confirmed my interest in the role.','Söhbətimiz bu vəzifəyə marağımı təsdiqlədi.'],['I look forward to hearing from you.','Cavabınızı səbirsizliklə gözləyirəm.']]},
    {t:'mc', q:'Təşəkkür məktubunu nə vaxt göndərmək yaxşıdır?', o:['24 saat ərzində','Bir aydan sonra','Müsahibədən əvvəl','Heç vaxt'], e:'Tez və qısa.'},
    {t:'mc', q:'I look forward to ___ from you.', o:['hearing','hear','heard','be hearing'], e:'Look forward to + -ing.'},
    {t:'listen', en:'Thank you for taking the time to meet with me today.', o:['Thank you for taking the time to meet with me today.','Thank you for the job offer.','Sorry for being late to the interview today.']},
    {t:'order', az:'Cavabınızı gözləyirəm.', en:['I look forward to hearing from you.'], extra:['hear','see']},
    {t:'dict', en:'Our conversation confirmed my interest in the role.', extra:['confirm','position']},
    {t:'speak', en:'I particularly enjoyed learning about your team.', az:'Xüsusilə komandanız haqqında öyrənmək xoşuma gəldi.'}
  ]}],
'b2-u6':[
  { id:'b2-u6-l4', title:'get + V3 passiv', items:[
    {t:'learn', title:'get passive', body:'Danışıqda «get + V3» passiv kimi işlənir, xüsusən gözlənilməz və ya şəxsi hadisələrdə: «He got promoted.» «My phone got stolen.»', ex:[['She got promoted last month.','O, keçən ay vəzifədə yüksəldi.'],['My bag got stolen on the bus.','Avtobusda çantam oğurlandı.'],["Don't get caught in the rain!",'Yağışa düşmə!'],['Our flight got cancelled.','Reysimiz ləğv olundu.']]},
    {t:'mc', q:'Formal yazıda hansı daha uyğundur?', o:['The flight was cancelled.','The flight got cancelled.','The flight got cancel.','The flight cancelled itself.'], e:'Get-passiv danışıq üslubudur.'},
    {t:'mc', q:'He ___ fired for being late every day.', o:['got','get','was get','has get'], e:'Get + V3: got fired.'},
    {t:'listen', en:'Our flight got cancelled because of the storm.', o:['Our flight got cancelled because of the storm.','Our flight got delayed because of the traffic.','We cancelled our flight because of the storm.']},
    {t:'order', az:'O, keçən ay vəzifədə yüksəldi.', en:['She got promoted last month.','He got promoted last month.','She was promoted last month.','He was promoted last month.'], extra:['promote','get']},
    {t:'dict', en:'My laptop got damaged during the move.', extra:['damage','was']},
    {t:'speak', en:'I got invited to a job interview.', az:'İş müsahibəsinə dəvət olundum.'}
  ]},
  { id:'b2-u6-l5', title:'Hesabat dili', items:[
    {t:'learn', title:'Obyektiv hesabat', body:'Hesabatda şəxsi ton yerinə passiv və obyektiv ifadələr: «It was found that…», «Data was collected from…», «The results are shown in Table 1.»', ex:[['Data was collected from 200 respondents.','Məlumatlar 200 respondentdən toplanılıb.'],['It was found that most users prefer mobile apps.','Məlum oldu ki, istifadəçilərin çoxu mobil tətbiqlərə üstünlük verir.'],['The results are shown in Figure 2.','Nəticələr Şəkil 2-də göstərilib.'],['Further research is recommended.','Əlavə tədqiqat tövsiyə olunur.']]},
    {t:'mc', q:'Hesabat üçün ən uyğun cümlə:', o:['Data was collected from 150 students.','I asked a lot of students stuff.','We got some data, I think.','Students told us things.'], e:'Obyektiv, dəqiq, passiv.'},
    {t:'mc', q:'«Further research is recommended» mənası:', o:['Əlavə tədqiqat tövsiyə olunur','Tədqiqat bitdi','Tədqiqat uğursuz oldu','Daha çox pul lazımdır'], e:'Hesabatın sonunda tipik ifadə.'},
    {t:'listen', en:'It was found that most participants preferred online classes.', o:['It was found that most participants preferred online classes.','It was found that few participants preferred online classes.','Most participants found the online classes.']},
    {t:'order', az:'Nəticələr Cədvəl 1-də göstərilib.', en:['The results are shown in Table 1.','The results are presented in Table 1.'], extra:['show','is']},
    {t:'dict', en:'Data was collected from two hundred respondents.', extra:['collect','were']},
    {t:'speak', en:'Further research is recommended in this area.', az:'Bu sahədə əlavə tədqiqat tövsiyə olunur.'}
  ]}],
'b2-u7':[
  { id:'b2-u7-l4', title:'Collocations: iş', items:[
    {t:'learn', title:'Söz birləşmələri', body:'Bəzi sözlər yalnız müəyyən fellərlə işlənir. Azərbaycan dilindən hərfi tərcümə səhv yaradır: «make a decision» (decision etmək yox), «do research», «meet a deadline», «take responsibility».', ex:[['make a decision','qərar vermək'],['do research','tədqiqat aparmaq'],['meet a deadline','son tarixə çatdırmaq'],['take responsibility','məsuliyyət götürmək'],['raise a question','sual qaldırmaq']]},
    {t:'mc', q:'We need to ___ a decision today.', o:['make','do','take a','give'], e:'Make a decision (BrE-də take a decision da işlənir, amma make daha geniş yayılıb).'},
    {t:'mc', q:'Did you ___ the deadline?', o:['meet','catch','reach to','do'], e:'Meet a deadline.'},
    {t:'listen', en:'She took full responsibility for the mistake.', o:['She took full responsibility for the mistake.','She made a big mistake.','She did her responsibility.']},
    {t:'order', az:'Bu mövzuda tədqiqat aparıram.', en:["I'm doing research on this topic.","I am doing research on this topic."], extra:['making','researches']},
    {t:'dict', en:'The report raised several important questions.', extra:['rose','asked']},
    {t:'speak', en:"We need to make a decision before Friday.", az:'Cüməyə qədər qərar verməliyik.'}
  ]},
  { id:'b2-u7-l5', title:'Daha çox idiom', items:[
    {t:'learn', title:'İş və həyat idiomları', body:'İdiomun mənası sözlərin cəmindən fərqlidir. Formal yazıda az işlət, danışıqda isə təbii səslənir.', ex:[["We're on the same page.",'Eyni fikirdəyik.'],["Let's call it a day.",'Bu günlük bəsdir.'],["It's not my cup of tea.",'Mənim zövqümə uyğun deyil.'],['She hit the ground running.','O, işə dərhal və enerjili başladı.'],["Don't beat around the bush.",'Sözü fırlatma, düz de.']]},
    {t:'mc', q:'«Let\'s call it a day» nə deməkdir?', o:['Bu günlük işi bitirək','Gələn gün zəng edək','Günə ad verək','Bütün günü işləyək'], e:'İşi dayandırmaq təklifi.'},
    {t:'mc', q:'«We\'re on the same page» mənası:', o:['Eyni fikirdəyik','Eyni kitabı oxuyuruq','Eyni səhifədəyik (internetdə)','Eyni yerdə işləyirik'], e:'Razılıq, ortaq anlayış.'},
    {t:'listen', en:"Don't beat around the bush. Just tell me.", o:["Don't beat around the bush. Just tell me.","Don't walk around the bush.","Let's call it a day. Just tell me."]},
    {t:'order', az:'Bu, mənim zövqümə uyğun deyil.', en:["It's not my cup of tea.","It isn't my cup of tea.","It is not my cup of tea."], extra:['glass','coffee']},
    {t:'dict', en:'The new manager hit the ground running.', extra:['hits','fast']},
    {t:'speak', en:"Great work, everyone. Let's call it a day.", az:'Hamıya əla iş üçün təşəkkür. Bu günlük bəsdir.'}
  ]}],
'b2-u8':[
  { id:'b2-u8-l4', title:'Data təsviri', items:[
    {t:'learn', title:'Qrafiki şərh etmək', body:'Dəyişikliyi təsvir et: rise / increase (artmaq), fall / decline (azalmaq), remain stable (sabit qalmaq). Dərəcə: slightly (bir qədər), significantly (əhəmiyyətli dərəcədə), sharply (kəskin).', ex:[['Sales rose sharply in March.','Martda satışlar kəskin artdı.'],['The number of users declined slightly.','İstifadəçilərin sayı bir qədər azaldı.'],['Prices remained stable throughout the year.','Qiymətlər il boyu sabit qaldı.'],['As you can see from the chart, …','Qrafikdən göründüyü kimi, …']]},
    {t:'mc', q:'«Kəskin azalma» necə ifadə olunur?', o:['a sharp decline','a slight rise','a stable fall','a sharp stable'], e:'Sharp — kəskin, decline — azalma.'},
    {t:'mc', q:'Prices ___ stable.', o:['remained','rose','declined','increased'], e:'Remain stable — sabit qalmaq.'},
    {t:'listen', en:'As you can see from the chart, profits increased significantly.', o:['As you can see from the chart, profits increased significantly.','As you can see from the chart, profits fell slightly.','The chart shows that profits remained stable.']},
    {t:'order', az:'Martda satışlar kəskin artdı.', en:['Sales rose sharply in March.','Sales increased sharply in March.'], extra:['raised','sharp']},
    {t:'dict', en:'The number of applicants declined slightly in 2024.', extra:['decline','slight']},
    {t:'speak', en:'As you can see, the numbers remained stable.', az:'Gördüyünüz kimi, rəqəmlər sabit qaldı.'}
  ]},
  { id:'b2-u8-l5', title:'Güclü sonluq', items:[
    {t:'learn', title:'Təqdimatı bitirmək', body:'Yaxşı sonluq: əsas mesajı bir cümlədə xatırlat, konkret addım və ya çağırış et, təşəkkür et və sual dəvəti ver.', ex:[["To sum up, the key message is simple: start small.",'Yekunlaşdırsaq, əsas mesaj sadədir: kiçikdən başla.'],["If you remember one thing from today, let it be this.",'Bu gündən bir şey yadda saxlasanız, qoy bu olsun.'],['Thank you for your attention.','Diqqətinizə görə təşəkkür edirəm.'],["I'd be happy to take any questions.",'Suallarınızı məmnuniyyətlə cavablandıraram.']]},
    {t:'mc', q:'Təqdimatın ən güclü sonluğu:', o:['Əsas mesaj + çağırış + təşəkkür','«Bu qədər, vəssalam»','Yeni mövzuya keçmək','Slaydı oxumaq'], e:'Aydın mesaj və hərəkətə çağırış.'},
    {t:'mc', q:'«I\'d be happy to take any questions» mənası:', o:['Suallarınızı məmnuniyyətlə cavablandıraram','Sual verməyin','Mənim sualım var','Sualları sonra yazın'], e:'Take questions — sualları qəbul etmək.'},
    {t:'listen', en:'If you remember one thing from today, let it be this.', o:['If you remember one thing from today, let it be this.','If you forget everything, remember this.','Remember to come back today.']},
    {t:'order', az:'Diqqətinizə görə təşəkkür edirəm.', en:['Thank you for your attention.','Thanks for your attention.'], extra:['attend','to']},
    {t:'dict', en:'To sum up, the key message is simple.', extra:['summary','keys']},
    {t:'speak', en:"Thank you for listening. I'd be happy to take any questions.", az:'Dinlədiyiniz üçün təşəkkür edirəm. Suallarınızı məmnuniyyətlə cavablandıraram.'}
  ]}]
};
// Əlavə dərsləri bölmələrə birləşdir + hər bölməyə «Təkrar» dərsi
(function(){
  const C = window.COURSE || [], X = window.COURSE_EXTRA || {};
  for (const lv of C) for (const u of lv.units) {
    if (!u.lessons) continue;
    for (const l of (X[u.id] || [])) if (!u.lessons.some(z => z.id === l.id)) u.lessons.push(l);
    if (!u.lessons.some(z => z.review)) u.lessons.push({ id: u.id + '-rev', title: 'Bölmə təkrarı', review: 1, items: [] });
  }
})();
