// Addım — Məşq bölməsi: dinləmə epizodları və oxu mətnləri (A1–B2)
// listening: {id, lvl, title, place, lines:[[danışan, mətn, 'airy'(qadın)|'rounded'(kişi)]], qs:[[sual, [DÜZGÜN, ...səhvlər], izah]]}
// reading:   {id, lvl, title, text, gl:{söz:'tərcümə'}, qs:[...]}
window.PRAC = {
listening: [
// ---------- A1 ----------
{ id:'ls-a1-1', lvl:'a1', title:'Kafedə', lines:[
  ['Customer','Hi! Can I have a coffee, please?','airy'],['Barista','Sure. Small or large?','rounded'],['Customer','Large, please. How much is it?','airy'],['Barista',"It's four manats.",'rounded'],['Customer','Here you are. Thank you!','airy']],
  qs:[["What does the customer order?",["A large coffee","A small coffee","A large tea","Two coffees"],"«Large, please» — böyük qəhvə."],
      ["How much is it?",["Four manats","Two manats","Fourteen manats","Forty manats"],"«It's four manats.» Diqqət: four (4) və fourteen (14) tez qarışdırılır."],
      ["What does «Here you are» mean?",["Buyurun (bir şey verəndə)","Siz buradasınız","Mən buradayam","Burada gözləyin"],"«Here you are» — bir şeyi kiməsə uzadanda deyilir: buyurun."]]},
{ id:'ls-a1-2', lvl:'a1', title:'Yeni qrup yoldaşı', lines:[
  ['Leyla',"Hi! I'm Leyla. Are you new here?",'airy'],['Tom',"Yes, I am. My name is Tom. I'm from London.",'rounded'],['Leyla','Nice to meet you, Tom! What do you study?','airy'],['Tom','I study economics. And you?','rounded'],['Leyla','I study English. My classroom is on the second floor.','airy'],['Tom','Great. See you later!','rounded']],
  qs:[["Where is Tom from?",["London","Baku","Leyla's city","Paris"],"«I'm from London.»"],
      ["What does Tom study?",["Economics","English","History","Medicine"],"«I study economics.» — iqtisadiyyat."],
      ["Where is Leyla's classroom?",["On the second floor","On the first floor","Next to the library","In another building"],"«on the second floor» — ikinci mərtəbədə."]]},
{ id:'ls-a1-3', lvl:'a1', title:'Mağazada', lines:[
  ['Assistant','Good afternoon. Can I help you?','rounded'],['Aysel','Yes, please. I want a T-shirt.','airy'],['Assistant','What colour do you want?','rounded'],['Aysel','Blue, please. Size medium.','airy'],['Assistant','Here it is. It is twenty manats.','rounded'],['Aysel',"OK. Can I pay by card?",'airy'],['Assistant','Yes, of course.','rounded']],
  qs:[["What does Aysel want?",["A blue T-shirt","A red T-shirt","A blue bag","Blue shoes"],"«I want a T-shirt… Blue, please.»"],
      ["What size is it?",["Medium","Small","Large","Extra large"],"«Size medium» — orta ölçü."],
      ["How does she pay?",["By card","In cash","She doesn't pay","By phone"],"«Can I pay by card?» — «Yes, of course.»"]]},
{ id:'ls-a1-4', lvl:'a1', title:'Telefon zəngi: saat neçədə?', lines:[
  ['Murad','Hello, Sara! Are you free on Saturday?','rounded'],['Sara',"Hi, Murad. Yes, I am. Why?",'airy'],['Murad',"Let's go to the cinema. The film starts at seven.",'rounded'],['Sara','Seven in the evening? Great!','airy'],['Murad',"Let's meet at the metro station at half past six.",'rounded'],['Sara','OK. See you on Saturday!','airy']],
  qs:[["When do they go to the cinema?",["On Saturday","On Sunday","On Friday","Today"],"«Are you free on Saturday?»"],
      ["What time does the film start?",["At seven","At six","At half past six","At eleven"],"«The film starts at seven.»"],
      ["Where do they meet?",["At the metro station","At the cinema","At Sara's house","At the bus stop"],"«Let's meet at the metro station at half past six» — 6:30-da metroda."]]},
{ id:'ls-a1-5', lvl:'a1', title:'Ailə şəkli', lines:[
  ['Nigar','Look! This is a photo of my family.','airy'],['Emil',"Who is this man?",'rounded'],['Nigar',"That's my father. He is a doctor.",'airy'],['Emil','And who is the girl next to him?','rounded'],['Nigar',"She's my sister, Lala. She is twelve.",'airy'],['Emil','Have you got a brother?','rounded'],['Nigar',"No, I haven't. But I have two cousins.",'airy']],
  qs:[["What is Nigar's father's job?",["A doctor","A teacher","A driver","An engineer"],"«He is a doctor.»"],
      ["How old is Lala?",["Twelve","Twenty","Two","Eleven"],"«She is twelve.» Diqqət: twelve (12) və twenty (20)."],
      ["Has Nigar got a brother?",["No, she hasn't","Yes, one brother","Yes, two brothers","We don't know"],"«No, I haven't. But I have two cousins.» — qardaşı yox, iki əmisi/dayısı uşağı var."]]},
// ---------- A1 (əlavə) ----------
{ id:'ls-a1-6', lvl:'a1', title:'Ünvan soruşmaq', lines:[
  ['Tourist','Excuse me, is there a pharmacy near here?','airy'],['Man','Yes, there is. Go straight on and turn right at the bank.','rounded'],['Tourist','Is it far?','airy'],['Man',"No, it's about five minutes on foot. It's opposite the park.",'rounded'],['Tourist','Thank you very much!','airy'],['Man',"You're welcome.",'rounded']],
  qs:[["What is the tourist looking for?",["A pharmacy","A bank","A park","A hotel"],"«Is there a pharmacy near here?»"],
      ["Where should she turn right?",["At the bank","At the park","At the pharmacy","At the traffic lights"],"«turn right at the bank»."],
      ["Where is the pharmacy?",["Opposite the park","Next to the bank","Behind the park","Far from here"],"«It's opposite the park» — parkın qarşısında."]]},
{ id:'ls-a1-7', lvl:'a1', title:'Hava proqnozu', lines:[
  ['Presenter',"Good morning! Here is today's weather.",'airy'],['Presenter',"In Baku it's sunny and windy. The temperature is twenty degrees.",'airy'],['Presenter',"In Sheki it's cloudy, and in the evening it's going to rain.",'airy'],['Presenter',"Tomorrow it's going to be cold everywhere. Wear a jacket!",'airy']],
  qs:[["What's the weather like in Baku?",["Sunny and windy","Cloudy and rainy","Cold and snowy","Hot and cloudy"],"«In Baku it's sunny and windy.»"],
      ["What is going to happen in Sheki in the evening?",["It's going to rain","It's going to snow","It's going to be sunny","Nothing"],"«in the evening it's going to rain»."],
      ["What does she suggest for tomorrow?",["Wear a jacket","Take sunglasses","Go to the beach","Stay at home"],"«Wear a jacket!» — soyuq olacaq."]]},
{ id:'ls-a1-8', lvl:'a1', title:'Restoranda', lines:[
  ['Waiter','Good evening. Are you ready to order?','rounded'],['Customer',"Yes, I'd like the chicken soup, please.",'airy'],['Waiter','And to drink?','rounded'],['Customer','A glass of orange juice, please.','airy'],['Waiter','Anything else?','rounded'],['Customer','No, thank you. Can I have the bill later?','airy']],
  qs:[["What does the customer order to eat?",["Chicken soup","Fish soup","A chicken salad","Rice"],"«I'd like the chicken soup.»"],
      ["What does she drink?",["Orange juice","Apple juice","Water","Tea"],"«A glass of orange juice.»"],
      ["«Anything else?» means:",["Başqa bir şey?","Hər şey yaxşıdır?","Hamısı budur?","Nə vaxt?"],"Ofisiant əlavə sifariş olub-olmadığını soruşur."]]},
{ id:'ls-a1-9', lvl:'a1', title:'Dünən harada idin?', lines:[
  ['Kamal','Hi, Nigar! Where were you yesterday?','rounded'],['Nigar','I was at home. I was ill.','airy'],['Kamal','Oh no! Are you OK now?','rounded'],['Nigar',"Yes, I'm fine now, thanks. Was the lesson interesting?",'airy'],['Kamal','Yes, it was. Our homework is on page twenty.','rounded']],
  qs:[["Where was Nigar yesterday?",["At home","At school","At the cinema","At work"],"«I was at home.»"],
      ["Why was she at home?",["She was ill","She was tired","She was busy","It was Sunday"],"«I was ill.» — xəstə idi."],
      ["Where is the homework?",["On page twenty","On page twelve","On page two","On the board"],"«on page twenty» — iyirminci səhifədə."]]},
{ id:'ls-a1-10', lvl:'a1', title:'Həftəsonu planı', lines:[
  ['Aysel',"What are you going to do this weekend?",'airy'],['Tural',"I'm going to visit my grandparents in Guba.",'rounded'],['Aysel','That sounds nice! How are you going to get there?','airy'],['Tural',"By bus. It takes about three hours. And you?",'rounded'],['Aysel',"I'm going to stay at home and study for my exam.",'airy']],
  qs:[["Where is Tural going?",["To Guba","To Ganja","To Sheki","To Baku"],"«visit my grandparents in Guba»."],
      ["How is he going to travel?",["By bus","By car","By train","By plane"],"«By bus.»"],
      ["What is Aysel going to do?",["Study for her exam","Visit Guba","Go to a party","Work"],"«stay at home and study for my exam»."]]},
// ---------- A2 ----------
{ id:'ls-a2-1', lvl:'a2', title:'Həftəsonu necə keçdi?', lines:[
  ['Kamran','Hi, Ayan! How was your weekend?','rounded'],['Ayan','It was great, thanks. I went to Sheki with my friends.','airy'],['Kamran','Really? How did you get there?','rounded'],['Ayan','We took the bus. It took about five hours.','airy'],['Kamran','What did you do there?','rounded'],['Ayan','We visited the Khan\'s Palace and ate piti. It was delicious!','airy'],['Kamran','Sounds amazing. I stayed at home and studied.','rounded']],
  qs:[["Where did Ayan go?",["To Sheki","To Ganja","To Baku","To Guba"],"«I went to Sheki with my friends.»"],
      ["How did they travel?",["By bus","By train","By car","By plane"],"«We took the bus.»"],
      ["What did Kamran do?",["He stayed at home and studied","He went to Sheki","He visited a palace","He worked"],"«I stayed at home and studied.»"],
      ["«It took about five hours» means:",["Yol təxminən 5 saat çəkdi","5 saat qaldılar","Saat 5-də getdilər","5 saat yatdılar"],"«It took…» — vaxt aparmaq: yol 5 saat çəkdi."]]},
{ id:'ls-a2-2', lvl:'a2', title:'Hava limanında', lines:[
  ['Agent','Good morning. Can I see your passport, please?','airy'],['Passenger','Here you are.','rounded'],['Agent','Thank you. Are you checking in any bags?','airy'],['Passenger','Just one suitcase.','rounded'],['Agent','Would you like a window seat or an aisle seat?','airy'],['Passenger','A window seat, please.','rounded'],['Agent','Here is your boarding pass. Your gate is B12 and boarding starts at ten fifteen.','airy']],
  qs:[["How many bags does the passenger check in?",["One","Two","None","Three"],"«Just one suitcase.»"],
      ["Which seat does he choose?",["A window seat","An aisle seat","A middle seat","He doesn't choose"],"«A window seat, please.» — pəncərə kənarı. Aisle — keçid tərəfi."],
      ["When does boarding start?",["At 10:15","At 10:50","At 12:00","At 10:00"],"«boarding starts at ten fifteen» — 10:15. Fifteen (15) və fifty (50) qarışdırma."]]},
{ id:'ls-a2-3', lvl:'a2', title:'Həkim qəbulunda', lines:[
  ['Doctor','Hello. What seems to be the problem?','rounded'],['Patient',"I've got a sore throat and a headache.",'airy'],['Doctor','How long have you felt like this?','rounded'],['Patient','Since Monday. I also feel very tired.','airy'],['Doctor',"You've got a cold. You should drink a lot of water and rest.",'rounded'],['Patient','Should I stay at home?','airy'],['Doctor',"Yes, you shouldn't go to work for two days.",'rounded']],
  qs:[["What is the patient's problem?",["A sore throat and a headache","A stomachache","A broken arm","A toothache"],"«I've got a sore throat and a headache» — boğaz ağrısı və baş ağrısı."],
      ["Since when has she felt ill?",["Since Monday","For two days","Since yesterday","Since last week"],"«Since Monday.»"],
      ["What is the doctor's advice?",["Drink water, rest and stay at home","Go to work","Take a long walk","Eat more sugar"],"«You should drink a lot of water and rest… you shouldn't go to work for two days.»"]]},
{ id:'ls-a2-4', lvl:'a2', title:'Dəvət', lines:[
  ['Rashad',"Hi, Gunel. What are you doing on Friday evening?",'rounded'],['Gunel',"Nothing special. Why?",'airy'],['Rashad',"I'm having a small birthday party. Would you like to come?",'rounded'],['Gunel',"I'd love to! What time does it start?",'airy'],['Rashad','At eight. My new flat is near Nizami Street.','rounded'],['Gunel','Should I bring anything?','airy'],['Rashad','Just bring a good mood!','rounded']],
  qs:[["What is Rashad planning?",["A birthday party","A trip","A football match","A study group"],"«I'm having a small birthday party.»"],
      ["Does Gunel accept the invitation?",["Yes, she does","No, she is busy","She isn't sure","She invites him instead"],"«I'd love to!» — məmnuniyyətlə: dəvəti qəbul edir."],
      ["What should Gunel bring?",["Nothing, just a good mood","A cake","Drinks","A present"],"«Just bring a good mood!» — sadəcə yaxşı əhval-ruhiyyə."]]},
{ id:'ls-a2-5', lvl:'a2', title:'Yol soruşmaq', lines:[
  ['Tourist','Excuse me, how can I get to the Maiden Tower?','airy'],['Local',"Go straight along this street and turn left at the traffic lights.",'rounded'],['Tourist','Is it far?','airy'],['Local',"No, it's about ten minutes on foot.",'rounded'],['Tourist','Is it next to the metro?','airy'],['Local',"Yes, it's opposite Icherisheher metro station. You can't miss it.",'rounded'],['Tourist','Thank you so much!','airy']],
  qs:[["Where does the tourist want to go?",["To the Maiden Tower","To the metro","To a hotel","To the airport"],"«How can I get to the Maiden Tower?»"],
      ["Where should she turn left?",["At the traffic lights","At the metro","At the bank","At the corner shop"],"«turn left at the traffic lights» — svetoforda sola dön."],
      ["How far is it?",["About ten minutes on foot","About ten minutes by car","One hour","Two minutes"],"«about ten minutes on foot» — piyada 10 dəqiqə."]]},
// ---------- B1 ----------
{ id:'ls-b1-1', lvl:'b1', title:'Təcrübə proqramına müsahibə', lines:[
  ['Interviewer','Thanks for coming. Could you tell me a bit about yourself?','airy'],['Farid',"Sure. I'm a final-year marketing student. I've been working on social media projects for about two years.",'rounded'],['Interviewer','Why are you interested in this internship?','airy'],['Farid',"I'd like to get real experience in digital marketing, and your company has a strong online presence.",'rounded'],['Interviewer','What would you say is your main strength?','airy'],['Farid',"I'm good at analysing data. For example, I increased our student club's followers by forty percent in six months.",'rounded']],
  qs:[["What does Farid study?",["Marketing","Economics","Computer science","Design"],"«I'm a final-year marketing student.»"],
      ["How long has he worked on social media projects?",["About two years","Six months","Forty months","One year"],"«for about two years» — Present Perfect Continuous: hələ də davam edir."],
      ["What example does he give?",["He increased a club's followers by 40%","He managed a company","He won a competition","He wrote a book"],"Konkret nəticə göstərir: 6 ayda izləyicilər 40% artıb. Müsahibədə rəqəm və nəticə güclü təsir bağışlayır."]]},
{ id:'ls-b1-2', lvl:'b1', title:'Xəbər: yeni velosiped yolları', lines:[
  ['Presenter',"Good evening. The city council has announced that twenty kilometres of new bike lanes will be built next year.",'airy'],['Reporter',"That's right. The first lanes will be opened along the seaside boulevard in spring.",'rounded'],['Presenter','How have people reacted?','airy'],['Reporter',"Most cyclists are delighted, but some drivers are worried that traffic will get worse.",'rounded'],['Presenter','And what about the cost?','airy'],['Reporter',"The project is being paid for partly by an international environmental fund.",'rounded']],
  qs:[["How many kilometres of bike lanes will be built?",["Twenty","Twelve","Two","Seventy"],"«twenty kilometres of new bike lanes will be built» — passiv gələcək zaman."],
      ["Where will the first lanes be opened?",["Along the seaside boulevard","In the city centre","Near the airport","Around the university"],"«along the seaside boulevard in spring»."],
      ["Why are some drivers worried?",["They think traffic will get worse","Parking will be expensive","The lanes are dangerous","The project is too slow"],"«some drivers are worried that traffic will get worse»."]]},
{ id:'ls-b1-3', lvl:'b1', title:'Planları dəyişmək', lines:[
  ['Nail',"Hi, Sevda. I'm afraid I can't make it to the meeting tomorrow.",'rounded'],['Sevda','Oh no. What happened?','airy'],['Nail',"My manager has asked me to travel to Ganja for a client visit.",'rounded'],['Sevda',"I see. Could we move the meeting to Thursday?",'airy'],['Nail',"Thursday works for me. If the train is on time, I'll be back by noon.",'rounded'],['Sevda',"OK. Let's say two o'clock, just in case.",'airy']],
  qs:[["Why can't Nail come to the meeting?",["He has to visit a client in Ganja","He is ill","He forgot","He has an exam"],"«My manager has asked me to travel to Ganja for a client visit.»"],
      ["When is the new meeting?",["On Thursday at two","On Thursday at noon","Tomorrow at two","On Friday"],"Cümə axşamı, saat 2-də — «just in case» (hər ehtimala qarşı)."],
      ["«I can't make it» means:",["Gələ bilməyəcəm","Bunu edə bilmirəm","Hazırlaya bilmərəm","Başa düşmürəm"],"«Can't make it» — görüşə, tədbirə gələ bilməmək."]]},
{ id:'ls-b1-4', lvl:'b1', title:'Mənzil kirayəsi', lines:[
  ['Agent',"The flat has two bedrooms and it was renovated last year.",'airy'],['Elvin',"How much is the rent?",'rounded'],['Agent',"Five hundred manats a month. Bills aren't included.",'airy'],['Elvin',"Is there a deposit?",'rounded'],['Agent',"Yes, one month's rent. If you sign the contract this week, the owner will lower it to four hundred and eighty.",'airy'],['Elvin',"That sounds reasonable. Can I see the kitchen again?",'rounded']],
  qs:[["How much is the rent?",["500 manats a month","480 manats a week","50 manats a month","5,000 manats a year"],"«Five hundred manats a month.»"],
      ["Are bills included?",["No, they aren't","Yes, they are","Only electricity","Only water"],"«Bills aren't included» — kommunal xərclər daxil deyil."],
      ["What happens if Elvin signs this week?",["The rent will be lower","He gets a free month","The deposit disappears","He can move in today"],"First Conditional: If you sign…, the owner will lower it."]]},
{ id:'ls-b1-5', lvl:'b1', title:'Köhnə dostlar', lines:[
  ['Rena',"Do you remember when we used to walk to school together?",'airy'],['Orkhan',"Of course! We would always stop at that little bakery.",'rounded'],['Rena',"I used to be so shy back then.",'airy'],['Orkhan',"You? You were the one who talked to everyone!",'rounded'],['Rena',"Only to people I knew. Now I've got used to speaking in public because of my job.",'airy'],['Orkhan',"That's a big change. I'm still not used to it!",'rounded']],
  qs:[["Where would they always stop?",["At a bakery","At a park","At a library","At a café"],"«We would always stop at that little bakery» — keçmişdə təkrarlanan hərəkət: would."],
      ["How was Rena in the past?",["Shy","Lazy","Loud","Angry"],"«I used to be so shy» — used to: keçmişdə belə idi, indi yox."],
      ["What has Rena got used to?",["Speaking in public","Walking to work","Eating bread","Living alone"],"«be/get used to + -ing» — bir şeyə öyrəşmək."]]},
// ---------- B2 ----------
{ id:'ls-b2-1', lvl:'b2', title:'Layihə gecikir', lines:[
  ['Manager',"We're two weeks behind schedule. What went wrong?",'airy'],['Developer',"Honestly, we underestimated the testing phase. If we had planned for it properly, we wouldn't be in this situation.",'rounded'],['Manager',"Fair enough. What can we realistically deliver by the end of the month?",'airy'],['Developer',"The core features, definitely. The reporting module might have to be postponed.",'rounded'],['Manager',"Then let's be transparent with the client and propose a phased launch.",'airy']],
  qs:[["Why is the project late?",["They underestimated testing","The client changed the plan","A developer left","The budget was cut"],"«we underestimated the testing phase»."],
      ["What might be postponed?",["The reporting module","The core features","The whole launch","The testing"],"«The reporting module might have to be postponed.»"],
      ["What does the manager suggest?",["A phased launch and honesty with the client","Hiding the delay","Cancelling the project","Hiring more people"],"«be transparent with the client and propose a phased launch» — mərhələli təqdimat."],
      ["«If we had planned for it properly, we wouldn't be in this situation» is:",["Qarışıq şərt cümləsi","First Conditional","Passive voice","Reported speech"],"Keçmiş şərt (had planned) + indiki nəticə (wouldn't be) — mixed conditional."]]},
{ id:'ls-b2-2', lvl:'b2', title:'Debat: uzaqdan iş', lines:[
  ['Host',"Today's question: should remote work become the norm?",'airy'],['Speaker A',"I'd argue that it should. Studies suggest many people are at least as productive at home, and they save hours on commuting.",'rounded'],['Speaker B',"I see your point, but I'm not entirely convinced. Junior staff often learn by watching experienced colleagues.",'airy'],['Speaker A',"That's a fair point. Perhaps a hybrid model would address that.",'rounded'],['Speaker B',"Exactly. Flexibility, rather than a single rule, seems to be the answer.",'airy']],
  qs:[["What is Speaker A's first argument?",["People save time on commuting and stay productive","Offices are expensive","Managers prefer it","It is better for juniors"],"Məhsuldarlıq və yolda vaxt itkisinin azalması."],
      ["What is Speaker B's concern?",["Junior staff learn from experienced colleagues","Internet is slow","People work too much","Salaries will fall"],"«Junior staff often learn by watching experienced colleagues.»"],
      ["What do they finally agree on?",["A flexible, hybrid model","Everyone in the office","Remote work for everyone","No change"],"Hər ikisi hibrid/çevik modelə razılaşır."],
      ["«I'm not entirely convinced» means:",["Tam əmin deyiləm","Tamamilə razıyam","Heç maraqlanmıram","Mən səhv etdim"],"Nəzakətli etiraz ifadəsi."]]},
{ id:'ls-b2-3', lvl:'b2', title:'Təqdimatın sonu', lines:[
  ['Presenter',"To sum up, our survey of three hundred students suggests that most of them want more practical training.",'airy'],['Presenter',"That brings me to my recommendation: universities should involve employers in designing courses.",'airy'],['Student',"Thank you. How reliable is a sample of three hundred?",'rounded'],['Presenter',"That's a good question. It isn't representative of all students, so I'd treat the results as an indication rather than proof.",'airy']],
  qs:[["How many students were surveyed?",["Three hundred","Thirty","Three thousand","Thirteen hundred"],"«our survey of three hundred students»."],
      ["What does the presenter recommend?",["Involving employers in course design","Cancelling exams","More online lectures","Bigger classrooms"],"«universities should involve employers in designing courses»."],
      ["How does she answer the question about reliability?",["She admits the limits of the sample","She ignores it","She says it is perfect","She changes the topic"],"Ehtiyatlı dil (hedging): nəticələr sübut deyil, göstəricidir."]]},
{ id:'ls-b2-4', lvl:'b2', title:'Maaş danışığı', lines:[
  ['HR',"We'd like to offer you the position with a starting salary of one thousand two hundred manats.",'airy'],['Candidate',"Thank you, I'm really pleased. Based on my research and my experience, I was expecting something closer to fourteen hundred.",'rounded'],['HR',"I understand. The budget is fairly fixed, but we could review your salary after six months.",'airy'],['Candidate',"That would work if the review criteria were agreed in writing.",'rounded'],['HR',"That sounds reasonable. I'll have it added to the contract.",'airy']],
  qs:[["What salary is offered first?",["1,200 manats","1,400 manats","2,100 manats","1,000 manats"],"«one thousand two hundred manats»."],
      ["What does the candidate ask for?",["Closer to 1,400","A car","More holidays","Remote work"],"«something closer to fourteen hundred» — 1400."],
      ["What compromise do they reach?",["A salary review after six months, in writing","An immediate raise","A bonus","A shorter contract"],"Altı aydan sonra yazılı meyarlarla yenidən baxılma — «I'll have it added» (have something done)."]]},
{ id:'ls-b2-5', lvl:'b2', title:'Podkast: yeni vərdişlər', lines:[
  ['Host',"So, why do most New Year's resolutions fail?",'airy'],['Guest',"Mainly because people set goals that are far too vague. 'Get fit' isn't a plan, it's a wish.",'rounded'],['Host',"So what should they do instead?",'airy'],['Guest',"Break it down. Instead of 'read more', say 'read ten pages after dinner'. Link the new habit to something you already do every day.",'rounded'],['Host',"And if they slip up?",'airy'],['Guest',"Don't give up. Missing one day hardly matters; missing two in a row is what breaks the habit.",'rounded']],
  qs:[["Why do resolutions usually fail, according to the guest?",["The goals are too vague","People are lazy","They are too expensive","Nobody helps them"],"«people set goals that are far too vague»."],
      ["What is his main tip?",["Make goals specific and link them to existing routines","Set bigger goals","Only start on Mondays","Tell everyone your goals"],"Konkret hədəf + mövcud vərdişə bağlamaq."],
      ["What really breaks a habit?",["Missing two days in a row","Missing one day","Starting late","Changing the goal"],"«missing two in a row is what breaks the habit»."],
      ["«slip up» means:",["Kiçik səhv etmək, büdrəmək","Sürüşüb yıxılmaq","Tez oyanmaq","İmtina etmək"],"Phrasal verb: slip up — kiçik səhv etmək, planı pozmaq."]]}
],
reading: [
// ---------- A1 ----------
{ id:'rd-a1-1', lvl:'a1', title:'My day', text:"My name is Ali. I am nineteen years old and I live in Sumgait. Every day I get up at seven o'clock. I have breakfast with my mother. Then I take the bus to Baku. I study computer science at university. My classes start at nine and finish at three. In the evening I play football with my friends. I go to bed at eleven.",
  gl:{get:'qalxmaq (get up — yuxudan qalxmaq)',breakfast:'səhər yeməyi',take:'(nəqliyyata) minmək',study:'oxumaq, təhsil almaq',classes:'dərslər',start:'başlamaq',finish:'bitmək',evening:'axşam',friends:'dostlar'},
  qs:[["Where does Ali live?",["In Sumgait","In Baku","In Ganja","At university"],"«I live in Sumgait.»"],
      ["How does he go to Baku?",["By bus","By car","On foot","By train"],"«I take the bus to Baku.»"],
      ["What does he do in the evening?",["He plays football","He studies","He watches TV","He works"],"«In the evening I play football with my friends.»"]]},
{ id:'rd-a1-2', lvl:'a1', title:'My flat', text:"I live in a small flat in the city centre. There is one bedroom, a living room, a kitchen and a bathroom. In the living room there is a big sofa and a TV. There are two windows, so it is very light. My favourite place is the kitchen because I like cooking. There isn't a garden, but there is a nice park next to my building.",
  gl:{flat:'mənzil',centre:'mərkəz',bedroom:'yataq otağı',kitchen:'mətbəx',bathroom:'hamam otağı',light:'işıqlı',favourite:'sevimli',cooking:'yemək bişirmək',garden:'bağ, həyət',building:'bina'},
  qs:[["How many bedrooms are there?",["One","Two","Three","None"],"«There is one bedroom.»"],
      ["Why is the flat light?",["There are two windows","There is a big lamp","It is on the top floor","There is a garden"],"«There are two windows, so it is very light.»"],
      ["What is next to the building?",["A park","A garden","A school","A shop"],"«there is a nice park next to my building»."]]},
{ id:'rd-a1-3', lvl:'a1', title:'A message from Sabina', text:"Hi Kenan! I'm at the library now. I can't find my English book. Is it in your bag? Can you bring it to the café at four o'clock? I'm sorry, I know you are busy today. Thank you! See you later. Sabina",
  gl:{library:'kitabxana',find:'tapmaq',bring:'gətirmək',busy:'məşğul',sorry:'bağışla, üzr istəyirəm',later:'sonra'},
  qs:[["Where is Sabina now?",["At the library","At the café","At home","In class"],"«I'm at the library now.»"],
      ["What does she need?",["Her English book","Her bag","Her phone","Some money"],"«I can't find my English book.»"],
      ["When and where do they meet?",["At the café at four","At the library at four","At the café at two","At school at four"],"«bring it to the café at four o'clock»."]]},
// ---------- A1 (əlavə) ----------
{ id:'rd-a1-4', lvl:'a1', title:'My best friend', text:"My best friend is Murad. He is twenty years old and he is a student. He studies engineering. Murad is tall and he has short black hair. He is very funny and kind. We meet every Saturday. We play football in the park or watch films. Murad can play the guitar very well. I like him because he always helps me.",
  gl:{engineering:'mühəndislik',tall:'hündür',funny:'zarafatcıl',kind:'mehriban',meet:'görüşürük',guitar:'gitara',always:'həmişə',helps:'kömək edir'},
  qs:[["What does Murad study?",["Engineering","Medicine","English","Music"],"«He studies engineering.»"],
      ["What do they do on Saturdays?",["Play football or watch films","Study together","Go shopping","Cook dinner"],"«We play football in the park or watch films.»"],
      ["Why does the writer like Murad?",["He always helps","He is tall","He has a car","He is rich"],"«because he always helps me»."]]},
{ id:'rd-a1-5', lvl:'a1', title:'A postcard from Gabala', text:"Hi Leyla! I'm on holiday in Gabala with my family. The weather is sunny but cold in the evening. Our hotel is near the mountains and the view is beautiful. Yesterday we were at the lake. Today we are going to take the cable car. The food is great too! See you next week. Love, Sabina",
  gl:{holiday:'tətil',weather:'hava',near:'yaxınlığında',mountains:'dağlar',view:'mənzərə',beautiful:'gözəl',lake:'göl',cable:'kanat (cable car — kanat yolu)'},
  qs:[["Who is Sabina with?",["Her family","Her friends","Leyla","Her classmates"],"«with my family»."],
      ["Where were they yesterday?",["At the lake","In the mountains","At the hotel","In Baku"],"«Yesterday we were at the lake.»"],
      ["What are they going to do today?",["Take the cable car","Go swimming","Go home","Visit a museum"],"«Today we are going to take the cable car.»"]]},
{ id:'rd-a1-6', lvl:'a1', title:'Notice: English club', text:"Do you want to speak English better? Come to our English club! We meet every Wednesday at five o'clock in Room 204. We play games, watch short videos and talk about different topics. The club is free for all students. Please bring a notebook and a pen. For more information, write to englishclub@uni.az.",
  gl:{better:'daha yaxşı',club:'klub',every:'hər',games:'oyunlar',videos:'videolar',topics:'mövzular',free:'pulsuz',bring:'gətirin',notebook:'dəftər',information:'məlumat'},
  qs:[["When does the club meet?",["Every Wednesday at five","Every Friday at five","Every day at four","On Saturdays"],"«every Wednesday at five o'clock»."],
      ["How much does it cost?",["Nothing, it's free","Five manats","Ten manats","It isn't written"],"«The club is free for all students.»"],
      ["What should students bring?",["A notebook and a pen","A laptop","A dictionary","Money"],"«Please bring a notebook and a pen.»"]]},
// ---------- A2 ----------
{ id:'rd-a2-1', lvl:'a2', title:'My first week at university', text:"My name is Nigar. I am from Ganja, but now I study in Baku. My first week at university was busy. On Monday, I met my groupmates. They were friendly and we had lunch together. On Wednesday, I couldn't find my classroom, so I asked a teacher for help. Every evening I study for two hours in the library. It is quiet there. Next week I want to join the English club because I want to speak more confidently.",
  gl:{busy:'məşğul',groupmates:'qrup yoldaşları',friendly:'mehriban',"couldn't":'bacarmadım (can-ın keçmişi, inkar)',asked:'soruşdum, xahiş etdim',library:'kitabxana',quiet:'sakit',join:'qoşulmaq',confidently:'inamla, özünəinamla',met:'tanış oldum (meet → met)',together:'birlikdə',because:'çünki'},
  qs:[["Where is Nigar from?",["Ganja","Baku","Sheki","London"],"Mətndə: «I am from Ganja, but now I study in Baku» — Gəncədəndir, Bakıda oxuyur."],
      ["What happened on Wednesday?",["She couldn't find her classroom","She met her groupmates","She joined a club","She had an exam"],"«On Wednesday, I couldn't find my classroom» — sinif otağını tapa bilmədi."],
      ["Why does she want to join the English club?",["To speak more confidently","To meet a teacher","Because it is quiet","To study in the library"],"«…because I want to speak more confidently» — daha inamla danışmaq üçün."]]},
{ id:'rd-a2-2', lvl:'a2', title:'A trip to Gabala', text:"Last summer my family and I went to Gabala for five days. We stayed in a small hotel near the mountains. The weather was warm during the day but cold at night. On the second day we took the cable car. It was a little scary, but the views were amazing. We also visited a waterfall and had a picnic by the river. Next year we are going to visit Lankaran because my father wants to see the tea fields.",
  gl:{stayed:'qaldıq',mountains:'dağlar',weather:'hava',during:'ərzində',"cable":'kanat (cable car — kanat yolu)',scary:'qorxulu',views:'mənzərələr',amazing:'heyrətamiz',waterfall:'şəlalə',river:'çay',fields:'sahələr, plantasiyalar'},
  qs:[["How long did they stay in Gabala?",["Five days","Two days","A week","One month"],"«for five days»."],
      ["How did the writer feel on the cable car?",["A little scared","Bored","Very tired","Sad"],"«It was a little scary» — bir az qorxulu idi."],
      ["Why are they going to visit Lankaran?",["The father wants to see the tea fields","For the beach","To visit a waterfall","For a wedding"],"«my father wants to see the tea fields»."]]},
{ id:'rd-a2-3', lvl:'a2', title:'Tips for exam week', text:"Exam week can be stressful, but a few simple habits help. First, you should make a timetable and study a little every day. You shouldn't study all night before the exam, because your brain needs sleep to remember information. Take short breaks every hour and go for a walk. You should also eat healthy food and drink enough water. Finally, don't compare yourself with others. Everyone learns in a different way.",
  gl:{stressful:'stresli, gərgin',habits:'vərdişlər',timetable:'cədvəl',brain:'beyin',remember:'yadda saxlamaq',breaks:'fasilələr',healthy:'sağlam',enough:'kifayət qədər',compare:'müqayisə etmək',different:'fərqli'},
  qs:[["What should you make first?",["A timetable","A list of friends","Coffee","A new notebook"],"«you should make a timetable»."],
      ["Why shouldn't you study all night?",["Your brain needs sleep to remember","It is boring","The library closes","It is expensive"],"«your brain needs sleep to remember information»."],
      ["What is the final tip?",["Don't compare yourself with others","Study with friends","Drink coffee","Sleep less"],"«don't compare yourself with others»."]]},
// ---------- B1 ----------
{ id:'rd-b1-1', lvl:'b1', title:'Volunteering abroad', text:"Last year Aynur spent three months volunteering at an environmental project in Georgia. She had never lived abroad before, so the first weeks were challenging. She was used to her mother's cooking and found it hard to cook for herself. However, she soon got used to the new routine. The volunteers planted trees, cleaned river banks and taught children about recycling. Aynur says the experience has changed the way she sees her career. If she hadn't joined the project, she would probably still be unsure about her future. Now she is applying for a master's degree in environmental management.",
  gl:{volunteering:'könüllü fəaliyyət',environmental:'ekoloji',abroad:'xaricdə',challenging:'çətin, sınaqlı',routine:'gündəlik rejim',planted:'əkdilər',banks:'sahillər (river banks)',recycling:'təkrar emal',applying:'müraciət edir',degree:'dərəcə',unsure:'əmin olmayan'},
  qs:[["Why were the first weeks difficult?",["She had never lived abroad","The work was dangerous","She didn't like the people","She was ill"],"«She had never lived abroad before.»"],
      ["What did the volunteers NOT do?",["Build houses","Plant trees","Clean river banks","Teach children"],"Mətndə ev tikmək yoxdur."],
      ["How did the project affect her?",["It helped her choose her career direction","She decided to stop studying","She moved to Georgia","She became a chef"],"Magistr təhsili üçün müraciət edir — karyera istiqaməti aydınlaşıb."]]},
{ id:'rd-b1-2', lvl:'b1', title:'Why we procrastinate', text:"Most of us have put off an important task at least once. Researchers suggest that procrastination is not simply a time-management problem; it is often an emotional one. When a task makes us feel anxious or bored, we look for something more pleasant, such as checking our phones. The relief is immediate, but the stress returns later and is usually stronger. One useful technique is to start with just five minutes. Once you have started, continuing is much easier. Another is to remove distractions: if your phone is in another room, you are less likely to pick it up.",
  gl:{procrastination:'işləri təxirə salmaq vərdişi',anxious:'narahat',pleasant:'xoş',relief:'rahatlama',immediate:'dərhal olan',technique:'üsul',distractions:'diqqəti yayındıran şeylər',likely:'ehtimal olunan',emotional:'emosional'},
  qs:[["According to the text, procrastination is often…",["an emotional problem","a lack of intelligence","caused by sleep","a modern illness"],"«it is often an emotional one»."],
      ["What happens after the immediate relief?",["The stress returns, often stronger","The task disappears","We feel happy all day","We finish faster"],"«the stress returns later and is usually stronger»."],
      ["Which technique is mentioned?",["Start with five minutes","Work all night","Ask a friend to do it","Reward yourself with your phone"],"«start with just five minutes»."]]},
{ id:'rd-b1-3', lvl:'b1', title:'A job advert', text:"Junior Data Analyst (internship, 6 months). We are looking for a curious, detail-oriented student or recent graduate to join our analytics team. You will be responsible for cleaning data, preparing weekly reports and presenting findings to the marketing team. Requirements: good knowledge of Excel, basic SQL, and good communication skills in English. Experience with Power BI is an advantage but not essential. The internship is paid and may lead to a full-time position. To apply, send your CV and a short cover letter explaining why you are interested in data analysis.",
  gl:{curious:'maraqlı, öyrənməyə həvəsli',"detail-oriented":'detallara diqqətli',graduate:'məzun',responsible:'məsul',findings:'nəticələr, tapıntılar',requirements:'tələblər',advantage:'üstünlük',essential:'mütləq vacib',"full-time":'tam ştat',apply:'müraciət etmək'},
  qs:[["Which skill is NOT required?",["Power BI","Excel","Basic SQL","English communication"],"Power BI — «an advantage but not essential» (üstünlükdür, mütləq deyil)."],
      ["What will the intern present?",["Findings to the marketing team","Sales to clients","Lectures to students","Products at a fair"],"«presenting findings to the marketing team»."],
      ["What should the cover letter explain?",["Why you are interested in data analysis","Your salary expectations","Your hobbies","Your exam results"],"«a short cover letter explaining why you are interested in data analysis»."]]},
// ---------- B2 ----------
{ id:'rd-b2-1', lvl:'b2', title:'Is AI changing graduate jobs?', text:"Entry-level jobs have traditionally been where graduates learn the basics of their profession. However, many routine tasks, such as summarising documents or drafting simple reports, can now be done by AI tools. Some analysts argue that this will reduce the number of junior positions. Others believe that the nature of these roles will change rather than disappear: graduates may be expected to check, interpret and improve AI-generated work. What seems clear is that skills such as critical thinking, communication and the ability to learn quickly are becoming more valuable. Nevertheless, it is too early to draw firm conclusions, since reliable long-term data is still limited.",
  gl:{"entry-level":'başlanğıc səviyyəli',routine:'adi, təkrarlanan',drafting:'qaralama hazırlamaq',interpret:'şərh etmək',valuable:'dəyərli',nevertheless:'buna baxmayaraq',conclusions:'nəticələr',reliable:'etibarlı',limited:'məhdud',nature:'mahiyyət, xarakter'},
  qs:[["What do some analysts fear?",["Fewer junior positions","Higher salaries","More exams","Longer degrees"],"«this will reduce the number of junior positions»."],
      ["What might graduates be expected to do?",["Check and improve AI-generated work","Build AI tools","Work only with paper","Avoid technology"],"«check, interpret and improve AI-generated work»."],
      ["What is the writer's overall attitude?",["Cautious — it is too early for firm conclusions","Very pessimistic","Completely optimistic","Uninterested"],"Hedging: «it is too early to draw firm conclusions»."]]},
{ id:'rd-b2-2', lvl:'b2', title:'The myth of multitasking', text:"Many people claim to be good at multitasking, but research in cognitive psychology suggests otherwise. What we call multitasking is usually rapid switching between tasks, and each switch has a cost. Although the delay may last only a fraction of a second, these costs add up, particularly when tasks are complex. Moreover, frequent switching appears to increase errors. This does not mean that we can never do two things at once: walking while talking, for instance, is effortless because one of the activities is automatic. The practical lesson is that focused blocks of work are likely to be more productive than a day full of constant interruptions.",
  gl:{claim:'iddia etmək',cognitive:'koqnitiv, idrak',otherwise:'əksini',rapid:'sürətli',switching:'keçid etmək',fraction:'kəsr, çox kiçik hissə',particularly:'xüsusilə',moreover:'bundan əlavə',errors:'səhvlər',effortless:'zəhmətsiz',interruptions:'yarımçıq kəsilmələr'},
  qs:[["What is 'multitasking' really, according to the text?",["Rapid switching between tasks","Doing everything faster","Working in a team","Using two screens"],"«usually rapid switching between tasks»."],
      ["Why can we walk and talk at the same time?",["Walking is automatic","Talking is easy","We practise a lot","We are young"],"«one of the activities is automatic»."],
      ["What is the practical conclusion?",["Work in focused blocks","Never talk while walking","Do more tasks at once","Take longer breaks"],"«focused blocks of work are likely to be more productive»."]]},
{ id:'rd-b2-3', lvl:'b2', title:'A STAR answer', text:"Interviewer: Tell me about a time you dealt with a difficult situation. Candidate: In my third year, I was leading a team of four students on a marketing project (Situation). Two weeks before the deadline, one member left the university, and we had to cover his part (Task). I reorganised the workload, set up short daily check-ins and took on the data analysis myself (Action). As a result, we submitted the project on time and received the highest grade in our group. I also learned that clear communication matters more under pressure (Result).",
  gl:{"dealt":'öhdəsindən gəldi (deal with)',deadline:'son tarix',cover:'əvəz etmək, öhdəsinə götürmək',reorganised:'yenidən təşkil etdi',workload:'iş yükü','check-ins':'qısa yoxlama görüşləri',submitted:'təhvil verdik',pressure:'təzyiq',grade:'qiymət'},
  qs:[["What was the problem?",["A team member left before the deadline","The topic changed","The teacher was ill","They lost their data"],"«one member left the university»."],
      ["Which part is the 'Action'?",["Reorganising work and daily check-ins","Leading a team of four","Getting the highest grade","Learning about communication"],"Action — namizədin özünün etdikləri."],
      ["Why is this a strong answer?",["It shows specific actions and a measurable result","It is very short","It blames others","It avoids details"],"STAR: konkret hərəkət + ölçülə bilən nəticə."]]}
]
};
