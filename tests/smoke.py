"""Addım — tam smoke test. Bütün əsas funksiyaları telefon ölçüsündə yoxlayır.
İstifadə: node --no-warnings tests/server.mjs . &  sonra  python3 tests/smoke.py"""
import json, sys, urllib.request
from playwright.sync_api import sync_playwright

BASE = 'http://localhost:8790'
UA = {
  'iphone_safari':  'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/604.1',
  'iphone_safari26':'Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.1 Mobile/15E148 Safari/604.1',
  'iphone_chrome':  'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/131.0.6778.73 Mobile/15E148 Safari/604.1',
  'iphone_instagram':'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 357.0.0.25.101 (iPhone15,3; iOS 18_1; az_AZ; az; scale=3.00; 1290x2796)',
  'iphone_tiktok':  'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 musical_ly_37.5.0 BytedanceWebview/d8a21c6',
  'android_instagram':'Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/131.0.0.0 Mobile Safari/537.36 Instagram 357.0.0.25.101 Android',
  'android_chrome': 'Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36',
}
fails = []
def check(name, cond, info=''):
    print(('  OK  ' if cond else '  FAIL ') + name + (('  — ' + info) if info and not cond else ''))
    if not cond: fails.append(name)
def post(path, body):
    r = urllib.request.Request(BASE + path, data=json.dumps(body).encode(), headers={'content-type': 'application/json'})
    try: return json.load(urllib.request.urlopen(r))
    except urllib.error.HTTPError as e: return json.load(e)
def close_overlays(m):
    m.evaluate("['sheet','cel','strike'].forEach(i=>document.getElementById(i).classList.remove('on'))")

def play_lesson(m):
    seen = set()
    for _ in range(90):
        close_overlays(m)
        if m.locator('#lGoNext, .res').count(): return seen
        if m.locator('#kMic').count(): seen.add('speak'); m.click('#kSkip'); continue
        if m.locator('#lNext').count() and m.locator('#lNext').is_visible(): m.click('#lNext'); continue
        if m.locator('#oBank').count():
            seen.add('dict' if m.locator('#lPlay').count() else 'order'); m.click('#oBank .chip >> nth=0'); m.click('#oChk'); continue
        if m.locator('#lBox .opt').count():
            seen.add('listen' if m.locator('#lPlay').count() else 'mc'); m.click('#lBox .opt >> nth=0'); continue
        if m.locator('#lBox .learn').count(): seen.add('learn')
        m.wait_for_timeout(50)
    return seen

with sync_playwright() as p:
    b = p.chromium.launch()
    errs = []
    def page(ua_key, **kw):
        ctx = b.new_context(viewport={'width': 390, 'height': 844}, user_agent=UA[ua_key], is_mobile=True, has_touch=True, **kw)
        m = ctx.new_page(); m.on('pageerror', lambda e: errs.append(f'{ua_key}: {e}')); return m

    print('1. Quraşdırma təlimatı — hər brauzer')
    expect = {'iphone_safari': 'iPhone-a yüklə', 'iphone_chrome': 'iPhone-a yüklə (Chrome)', 'iphone_instagram': 'Əvvəlcə brauzerdə aç',
              'iphone_tiktok': 'Əvvəlcə brauzerdə aç', 'android_instagram': 'Əvvəlcə brauzerdə aç'}
    for k, title in expect.items():
        m = page(k); m.goto(BASE + '/#home'); m.wait_for_timeout(600)
        check(f'{k}: yükləmə zolağı görünür', m.locator('#install').is_visible())
        m.click('#getApp'); m.wait_for_timeout(200)
        got = m.locator('#shT').inner_text()
        check(f'{k}: düzgün təlimat «{title}»', got == title, got)
        if 'brauzerdə' in title or k == 'iphone_chrome':
            check(f'{k}: link kopyalama sahəsi var', m.locator('#instLink').count() == 1)
        if k == 'iphone_safari':
            check('iphone_safari: «Ana ekrana əlavə et» addımı', 'Ana ekrana əlavə et' in m.locator('#shBody').inner_text())
            check('iphone_safari: iOS 26 qeydi', 'iOS 26' in m.locator('#shBody').inner_text())
        m.context.close()
    m = page('iphone_safari26'); m.goto(BASE + '/#home'); m.wait_for_timeout(600)
    m.click('#getApp'); m.wait_for_timeout(200)
    body = m.locator('#shBody').inner_text()
    check('iOS 26 Safari: əvvəl ••• sonra Paylaş', body.index('•••') < body.index('Paylaş') and 'Ana ekrana əlavə et' in body, body[:80])
    check('iOS 26 Safari: pəncərə yuxarıda, ox aşağıda görünür', 'ios26' in m.get_attribute('#sheet','class') and m.locator('#iosPoint').is_visible())
    bx = m.locator('#iosPoint').bounding_box()
    check('iOS 26 Safari: ox sağ aşağı küncdədir', bx['x'] + bx['width'] > 370 and bx['y'] + bx['height'] > 780, str(bx))
    m.click('#shClose'); m.wait_for_timeout(200)
    check('iOS 26 Safari: bağlandıqdan sonra ox qalır', not m.locator('#sheet').is_visible() and m.locator('#iosPoint').is_visible())
    m.context.close()
    m = page('iphone_safari'); m.goto(BASE + '/#home'); m.wait_for_timeout(500); m.click('#getApp'); m.wait_for_timeout(200)
    check('köhnə iOS Safari: ox göstərilmir', not m.locator('#iosPoint').is_visible()); m.context.close()
    m = page('iphone_instagram'); m.goto(BASE + '/#profile'); m.wait_for_timeout(500)
    m.click('#pInstall'); m.wait_for_timeout(200)
    check('profil «Yüklə» düyməsi təlimatı açır', m.locator('#shT').inner_text() == 'Əvvəlcə brauzerdə aç'); m.context.close()

    print('2. Giriş testi və səviyyə seçimi')
    m = page('android_chrome'); m.goto(BASE + '/'); m.wait_for_timeout(700)
    check('ilk girişdə xoş gəldin ekranı', m.locator('#ptGo').is_visible())
    m.click('#ptGo')
    asked = 0
    for _ in range(24):
        if not m.locator('#wBox .opt').count(): break
        m.click('#wBox .opt >> nth=0'); m.wait_for_timeout(230); asked += 1
    check('adaptiv test: səhvlər çox olanda tez bitir və ya 24 sual', 6 <= asked <= 24, str(asked))
    check('nəticədə səviyyə qrafiki göstərilir', m.locator('.ptbars .ptb').count() == 5)
    check('test nəticəsi və tövsiyə', m.locator('.lvopt.rec').count() == 1)
    m.click('.lvopt[data-l="a1"]'); m.wait_for_timeout(500)
    check('kurs səhifəsi açıldı', m.evaluate('location.hash') == '#course')

    print('3. Dərslər (A1 və B2)')
    m.click('#units .node.cur'); m.wait_for_timeout(200)
    check('dairəyə toxunanda 4 dərs + ümumi praktika görünür', m.locator('.prts .prt').count() == 5 and m.locator('.prt.cur').count() == 1)
    m.click('.prt.cur'); seen = play_lesson(m)
    check('A1 dərsi sona çatdı', m.locator('.res').count() == 1)
    check('dairə: 1/4 dərs keçildi, «Növbəti: Dərs 2» düyməsi', m.evaluate("partsDone('a1-u1-l1')") == 1 and m.locator('#lGoPart').count() == 1)
    check('A1 dərsində danışma tapşırığı', 'speak' in seen, str(seen))
    check('dərs sonunda video kartı', m.locator('#vidLesson .vid').count() == 1)
    m.wait_for_timeout(1600)
    check('ilk gün: şimşək çaxır (seriya animasiyası)', m.locator('#strike.on').is_visible() and m.locator('#stkN').inner_text() == '1')
    check('başlıqda şimşək ikonu', m.locator('#stIco').get_attribute('href') == '#boltI')
    m.click('#stkGo'); m.wait_for_timeout(200)
    check('şimşək pəncərəsi bağlanır', not m.locator('#strike').is_visible())
    m.evaluate("location.hash='home'"); m.wait_for_timeout(300)
    check('ana səhifədə şimşək personajı yanır', 'off' not in (m.get_attribute('#bigBolt', 'class') or ''))
    m.evaluate("location.hash='course'"); m.wait_for_timeout(200)
    m.evaluate("location.hash='course'"); m.wait_for_timeout(200); m.click('.lvl[data-l="b2"]'); m.wait_for_timeout(200)
    nodes = m.locator('#units .node:not(.lock)').count()
    check('B2 dərsləri görünür', nodes >= 1, str(nodes))

    m.evaluate("location.hash='course'"); m.wait_for_timeout(200); m.click('.lvl[data-l="a1"]'); m.wait_for_timeout(200)
    check('növbəti dairə hələ bağlıdır (4 dərs bitməyib)', m.locator('#units .node[data-id="a1-u1-l2"].lock').count() == 1)
    m.evaluate("S.goalDone[today()]=1;save()"); close_overlays(m)
    en0 = m.evaluate("enNow()")
    check('şimşəkciklər: dərs başlanğıcı 2 aparıb, başlıqda göstərilir', en0 < 20 and m.inner_text('#enN') == str(en0), str(en0))
    m.evaluate("S.en={n:1,t0:Date.now()};save();drawEnergy()")
    m.evaluate("startLesson('a1-u1-l1',1)"); m.wait_for_timeout(200)
    check('şimşəkcik bitəndə yeni dərs açılmır, pəncərə çıxır', m.evaluate("location.hash") != '#lesson' and 'bitdi' in m.locator('#shT').inner_text())
    close_overlays(m)
    m.evaluate("S.en.t0=Date.now()-12.5*3600e3;save()")
    check('12 saatdan sonra şimşəkciklər tam dolur', m.evaluate("enNow()") == 20)
    m.evaluate("S.en={n:999,t0:0};save()")
    for part in (1, 2, 3):
        m.evaluate(f"startLesson('a1-u1-l1',{part})"); m.wait_for_timeout(200); play_lesson(m); close_overlays(m)
    check('4 dərsdən sonra növbəti dairə açılır', m.evaluate("partsDone('a1-u1-l1')") == 4 and m.locator('#lGoPrac').count() == 1)
    m.evaluate("startLesson('a1-u1-l1',4)"); m.wait_for_timeout(200)
    check('ümumi praktika: qarışıq tapşırıqlar, izah kartı yoxdur', m.evaluate("LS.items.length>=8&&!LS.items.some(i=>i.t==='learn')"))
    play_lesson(m); close_overlays(m)
    check('praktikadan sonra dairə tamamlanır (5/5)', m.evaluate("partsDone('a1-u1-l1')") == 5 and 'Dairə tamamlandı' in m.locator('#lBox').inner_text())
    m.evaluate("location.hash='course'"); m.wait_for_timeout(300)
    check('tamamlanmış dairənin rəngi dəyişir (qızılı)', m.locator('#units .node.gold[data-id="a1-u1-l1"]').count() == 1 and m.locator('#units .node[data-id="a1-u1-l2"].lock').count() == 0)

    lc = m.evaluate("(()=>{const c=window.COURSE;return c.map(l=>l.units.reduce((a,u)=>a+u.lessons.length,0))})()")
    check('dərs sayları: hər səviyyə 136 (A1–C1)', lc == [136, 136, 136, 136, 136], str(lc))
    # Səhv cavab → «Səhvlərim»; bölmə təkrarı
    m.evaluate("location.hash='course'"); m.wait_for_timeout(200); m.click('.lvl[data-l="a1"]'); m.wait_for_timeout(200)
    m.evaluate("COURSE[0].units[0].lessons.filter(l=>!l.review).forEach(l=>S.course[l.id]=90);save();renderCourse()")
    m.click('#units .node[data-id="a1-u1-rev"]'); m.wait_for_timeout(300)
    check('bölmə təkrarı açılır (qarışıq tapşırıqlar)', m.evaluate('LS&&LS.a.x.review===1&&LS.items.length>=8&&!LS.items.some(i=>i.t==="learn")'))
    wrong = m.evaluate("(()=>{const it=LS.items.find(i=>i.t==='mc');return it?it.src:null})()")
    m.evaluate("(()=>{const k=LS.items.findIndex(i=>i.t==='mc');LS.i=k;renderStep()})()"); m.wait_for_timeout(150)
    right = m.evaluate("LS.items[LS.i].o[0]")
    m.evaluate("(r)=>[...document.querySelectorAll('#lBox .opt')].find(b=>b.textContent.trim()!==r).click()", right); m.wait_for_timeout(200)
    check('səhv cavab «Səhvlərim» siyahısına düşür', m.evaluate(f"S.mist.includes({wrong!r})"))
    m.evaluate("LS=null;location.hash='practice'"); m.wait_for_timeout(300)
    check('Məşq səhifəsində «Səhvlərin üzərində iş» kartı', m.locator('#mistGo').is_visible())
    m.click('#mistGo'); m.wait_for_timeout(300)
    m.evaluate("(()=>{const k=LS.items.findIndex(i=>i.src===%r);LS.i=k;renderStep()})()" % wrong); m.wait_for_timeout(150)
    m.evaluate("(r)=>[...document.querySelectorAll('#lBox .opt')].find(b=>b.textContent.trim()===r).click()", right); m.wait_for_timeout(200)
    check('düzgün cavab verəndə səhv siyahıdan silinir', not m.evaluate(f"S.mist.includes({wrong!r})"))
    m.evaluate("LS=null;location.hash='practice'"); m.wait_for_timeout(200)

    m.evaluate("location.hash='home'"); m.wait_for_timeout(300); close_overlays(m); m.click('#nextCard'); m.wait_for_timeout(500)
    check('ana səhifədəki dərs kartı kurs səhifəsini açır (dərsə birbaşa atmır)', m.evaluate('location.hash') == '#course' and m.locator('#units .node.cur').count() == 1)
    print('3c. Şimşəklə oyun, səviyyə testi, medallar')
    m.evaluate("location.hash='home'"); m.wait_for_timeout(200)
    m.evaluate("(()=>{const t=today();S.days[t]=0;save();renderHome()})()"); m.click('#boltBtn'); m.wait_for_timeout(150)
    check('dərs keçilməyib: şimşək əsəbiləşir («dərsini et»)', m.locator('#boltSay.on.mad').count() == 1 and 'm-grr' in m.get_attribute('#bigBolt','class'))
    for _ in range(2): m.click('#boltBtn'); m.wait_for_timeout(80)
    check('çox toxunanda daha çox əsəbiləşir', 'm-angry' in m.get_attribute('#bigBolt','class'))
    m.wait_for_timeout(4100)
    m.evaluate("(()=>{S.days[today()]=60;save();renderHome()})()"); m.click('#boltBtn'); m.wait_for_timeout(150)
    cls = m.get_attribute('#bigBolt','class')
    check('XP yığılıb: şirin reaksiya (sevgi / gülüş / göz vurma)', any(x in cls for x in ['m-love','m-laugh','m-wink']) and m.locator('#boltSay.mad').count() == 0, cls)
    m.wait_for_timeout(1800)
    n_pl = m.evaluate('PLACEMENT.length')
    check('səviyyə testində 30 sual (hər səviyyədə 6)', n_pl == 30 and m.evaluate("['a1','a2','b1','b2','c1'].every(l=>PLACEMENT.filter(q=>q.lv===l).length===6)"))
    recs = m.evaluate("""(()=>{const r=[];for(const sc of [{a1:1,a2:0,b1:0,b2:0,c1:0},{a1:6,a2:2,b1:0,b2:0,c1:0},{a1:6,a2:5,b1:3,b2:0,c1:0},{a1:6,a2:6,b1:5,b2:2,c1:0},{a1:6,a2:6,b1:6,b2:5,c1:2},{a1:6,a2:6,b1:6,b2:6,c1:6}]){r.push(ptResult({score:sc,seen:{a1:6,a2:sc.a1>=3?6:0,b1:sc.a2>=3?6:0,b2:sc.b1>=3?6:0,c1:sc.b2>=3?6:0}}))}return r})()""")
    check('nəticəyə görə fərqli səviyyə tövsiyə olunur', recs == ['a1','a2','b1','b2','c1','c1'], str(recs))
    check('medal nişanı qurulur', 'Qızıl medal' in m.evaluate("medalsHTML([2,0,1])"))

    print('3b. Dinləmə və oxu: epizodlar, tamamlama, növbəti')
    for kind, box in [('listening', '#lsBox'), ('reading', '#rdBox')]:
        close_overlays(m); m.evaluate(f"location.hash='{kind}'"); m.wait_for_timeout(300)
        n = m.locator(f'{box} .ep').count()
        check(f'{kind}: A1 siyahısında 3+ epizod', n >= 3, str(n))
        m.click(f'{box} .ep >> nth=0'); m.wait_for_timeout(250)
        first = m.locator(f'{box} h2').first.inner_text()
        for q in range(m.locator('#epQs .opts').count()):
            close_overlays(m); m.locator(f'#epQs .opts >> nth={q}').locator('.opt').first.click(); m.wait_for_timeout(60)
        m.wait_for_timeout(600)
        check(f'{kind}: tamamlama ekranı görünür', m.locator('#epEnd .res').count() == 1)
        check(f'{kind}: «Növbəti» düyməsi var', m.locator('#epNext').count() == 1)
        m.wait_for_timeout(900); close_overlays(m); m.click('#epNext'); m.wait_for_timeout(300)
        check(f'{kind}: növbəti epizod açıldı', m.locator(f'{box} h2').first.inner_text() != first)
        close_overlays(m); m.click('#epBack'); m.wait_for_timeout(200)
        check(f'{kind}: keçilən epizod işarələnib', m.locator(f'{box} .ep.done').count() == 1)
        m.click(f'{box} .lvl[data-l="b2"]'); m.wait_for_timeout(200)
        check(f'{kind}: B2 epizodları', m.locator(f'{box} .ep').count() >= 3)

    print('4. Liqa, profil, premium')
    m.evaluate("location.hash='profile'"); m.wait_for_timeout(300)
    m.fill('#pName', 'Tester'); m.click('#pSave'); m.wait_for_timeout(600)
    m.click('.avb[data-a="dragon"]'); m.wait_for_timeout(200)
    check('kilidli avatar Premium səhifəsinə aparır', m.evaluate('location.hash') == '#premium')
    check('Premium qiyməti 5,9 AZN', '5,9 AZN' in m.locator('#prBox').inner_text())
    check('kart nömrəsi göstərilir', m.locator('#cardNo').count() == 1)
    code = post('/api/admin', {'key': 'test-admin-key-123', 'action': 'create', 'days': 7, 'count': 1})['codes'][0]
    m.fill('#prCode', code); m.click('#prGo'); m.wait_for_timeout(900); close_overlays(m)
    check('kod aktivləşdi (tac görünür)', m.locator('#hdAv .cr').count() == 1)
    check('eyni kod ikinci dəfə işləmir', post('/api/premium', {'id': 'other-user-9999', 'code': code}).get('error') == 'used')
    check('səhv admin açarı rədd olunur', post('/api/admin', {'key': 'wrong', 'action': 'list'}).get('error') == 'forbidden')
    m.evaluate("location.hash='league'"); m.wait_for_timeout(800)
    check('liqa cədvəli yükləndi', 'liqası' in m.locator('#boardM').inner_text())
    check("danışıq yoxlaması: I am = I'm, 7 = seven, adlar sayılmır", m.evaluate("""speechScore("I'm Leyla. It's 7 o'clock.",['i am layla its seven oclock']).pct""") == 100)
    check('danışıq yoxlaması: səhv cümlə keçmir', m.evaluate("speechScore('Good afternoon!',['but after']).pct") < 70)
    fb = post('/api/feedback', {'uid': m.evaluate('S.uid'), 'kind': 'item', 'q': 'test', 'right': 'a', 'mine': 'b', 'text': 'Bu cavab da düzgündür'})
    check('təklif / şikayət göndərilir', fb.get('ok') is True, str(fb))
    fl = post('/api/admin', {'key': 'test-admin-key-123', 'action': 'feedback'})
    check('admin təklifləri görür', any(x['text'] == 'Bu cavab da düzgündür' for x in fl.get('items', [])))
    check('boş təklif qəbul olunmur', post('/api/feedback', {'uid': m.evaluate('S.uid'), 'kind': 'general', 'text': ' '}).get('error') == 'empty')
    bd = json.load(urllib.request.urlopen(BASE + '/api/board?league=c1'))
    check('boş liqada da ən az 12 iştirakçı görünür (virtual)', bd['total'] >= 12 and len(bd['top']) >= 10 and bd.get('virtual', 0) >= 10, str(bd['total']))
    gt = json.load(urllib.request.urlopen(BASE + '/__test/gtoken?sub=smoke-1&email=smoke@gmail.com'))['token']
    au = post('/api/auth', {'credential': gt, 'uid': 'smoke-device-0001'})
    check('Google ilə giriş: hesab yaranır, cihazın uid-si qalır', au.get('isNew') is True and au.get('uid') == 'smoke-device-0001', str(au)[:120])
    sy = post('/api/sync', {'token': au.get('token'), 'state': {'days': {'2026-01-01': 5}}})
    gs = json.load(urllib.request.urlopen(BASE + '/api/sync?token=' + au.get('token', '')))
    check('irəliləyiş hesabda saxlanılır və geri gəlir', sy.get('ok') and gs.get('state', {}).get('days', {}).get('2026-01-01') == 5)
    bad = json.load(urllib.request.urlopen(BASE + '/__test/gtoken?sub=smoke-1&email=x@gmail.com&aud=other'))['token']
    check('başqa Client ID üçün token rədd olunur', post('/api/auth', {'credential': bad}).get('error') == 'bad_token')
    check('saxta sessiya ilə yazmaq olmur', post('/api/sync', {'token': 'a' * 48, 'state': {}}).get('error') == 'auth')
    check('gəzən şimşək: qol-ayaqlı element var', m.evaluate("!!document.querySelector('#walker .arm.ar') && !!document.querySelector('#bigBolt .leg.ll')"))

    pj0 = json.load(urllib.request.urlopen(BASE + '/__test/prevweek'))
    # Diqqət: medallar həftənin ilk sorğusunda bir dəfə hesablanır — testdə bu, keçən həftə əlavə edildikdən sonra baş verməlidir
    r = json.load(urllib.request.urlopen(BASE + '/api/board?league=a1&id=medal-gold-0001'))
    check('keçən həftənin 1-cisi qızıl medal alır', (r.get('medal') or {}).get('place') == 1 and r.get('medals') == [1, 0, 0], str(r.get('medal')))
    r3 = json.load(urllib.request.urlopen(BASE + '/api/board?league=a1&id=medal-bron-0003'))
    r4 = json.load(urllib.request.urlopen(BASE + '/api/board?league=a1&id=medal-four-0004'))
    check('3-cü bürünc alır, 4-cü medal almır', (r3.get('medal') or {}).get('place') == 3 and r4.get('medal') is None)

    print('5. Admin paneli')
    a = b.new_page(viewport={'width': 900, 'height': 900}); a.on('pageerror', lambda e: errs.append(f'admin: {e}'))
    a.goto(BASE + '/admin.html'); a.fill('#key', 'test-admin-key-123'); a.click('#sload'); a.wait_for_timeout(900)
    check('statistika yükləndi', a.locator('.tile').count() == 6)
    a.click('#gen'); a.wait_for_timeout(700)
    check('kod yaradıldı', a.locator('#out .code').count() == 1)

    print('6. Səsləndirmə: dayandırma və səs seçimi')
    # real telefondakı kimi: səs uzun davam edir, cancel() onu dayandırır
    FAKE_TTS = '''(()=>{const ss={_q:[],paused:false,speaking:false,
      speak(u){this._q.push(u);this.speaking=true},
      cancel(){const q=this._q;this._q=[];this.speaking=false;q.forEach(u=>u.onerror&&u.onerror({}))},
      getVoices(){return [{name:'Samantha (Enhanced)',lang:'en-US'},{name:'Daniel',lang:'en-GB'}]},
      addEventListener(){},resume(){},pause(){}};
      Object.defineProperty(window,'speechSynthesis',{value:ss,configurable:true})})()'''
    m.context.close()
    m = page('android_chrome'); m.add_init_script(FAKE_TTS)
    m.goto(BASE + '/'); m.wait_for_timeout(500)
    if m.locator('#ptA1').count(): m.click('#ptA1'); m.wait_for_timeout(400)
    # bu bölmə cihazın öz səsini yoxlayır
    m.evaluate("()=>{const s=JSON.parse(localStorage.getItem('addim2'));s.voiceSrc='device';localStorage.setItem('addim2',JSON.stringify(s))}"); m.reload(); m.wait_for_timeout(500)
    m.evaluate("location.hash='listening'"); m.wait_for_timeout(300); m.click('#lsBox .ep >> nth=0'); m.wait_for_timeout(600)
    check('dinləmə özü avtomatik başlayır («Dayandır» görünür)', 'Dayandır' in m.locator('#play').inner_text())
    m.click('#play'); m.wait_for_timeout(150)
    check('ikinci toxunuş səsi dayandırır', 'Dayandır' not in m.locator('#play').inner_text())
    m.click('#slow'); m.wait_for_timeout(100); m.click('#play'); m.wait_for_timeout(100)
    check('başqa səs başlayanda əvvəlki dayanır', 'Dayandır' not in m.locator('#slow').inner_text() and 'Dayandır' in m.locator('#play').inner_text())
    m.evaluate("location.hash='home'"); m.wait_for_timeout(200)
    check('səhifə dəyişəndə səs dayanır', m.evaluate("document.querySelectorAll('.playing').length") == 0)
    m.evaluate("location.hash='profile'"); m.wait_for_timeout(300)
    check('profildə səs bölməsi var', 'Səsləndirmə' in m.locator('#voiceCard').inner_text())
    check('ən təbii səs ilk seçilib (★)', 'Samantha' in m.locator('#vSel').input_value())
    m.evaluate("S.prem={until:Date.now()+1e9};save();startLesson('a1-u1-l1',2)"); m.wait_for_timeout(400)
    for _ in range(12):
        if m.locator('#lPlay').count(): break
        close_overlays(m)
        if m.locator('#lNext').count() and m.locator('#lNext').is_visible(): m.click('#lNext'); continue
        if m.locator('#oBank').count(): m.click('#oBank .chip >> nth=0'); m.click('#oChk'); continue
        if m.locator('#lBox .opt').count(): m.click('#lBox .opt >> nth=0'); continue
    check('dərsdə dinləmə avtomatik başlayır (dayandır ikonu)', m.locator('#lPlay.playing').count() == 1)
    m.click('#lPlay'); m.wait_for_timeout(100)
    check('dərsdə dinləməni dayandırmaq olur', m.locator('#lPlay.playing').count() == 0)

    print('7. Təbii səs (süni intellekt)')
    import urllib.parse
    def get(path):
        try:
            r = urllib.request.urlopen(BASE + path); return r.status, r.headers.get('x-tts'), len(r.read())
        except urllib.error.HTTPError as e: return e.code, None, 0
    def ai(q=''): return json.load(urllib.request.urlopen(BASE + '/__test/ai' + q))
    get('/__test/ai?fail=0')
    st, src, n = get('/api/tts?v=orion&t=' + urllib.parse.quote('Turn left.'))
    check('kurs cümləsi təbii səslə yaradılır', st == 200 and src == 'new' and n > 500, f'{st} {src} {n}')
    c1 = ai()['aiCalls']
    st2, src2, _ = get('/api/tts?v=orion&t=' + urllib.parse.quote('Turn left.'))
    check('ikinci dəfə bazadan gəlir (AI yenidən çağırılmır)', st2 == 200 and src2 == 'cache' and ai()['aiCalls'] == c1)
    check('Aura-2 modeli və kişi səsi (Apollo) işlənir', ai()['lastModel'] == '@cf/deepgram/aura-2-en:apollo', ai()['lastModel'])
    get('/__test/ai?mp3=1')
    st5, _, n5 = get('/api/tts?v=asteria&t=' + urllib.parse.quote('Thank you. How reliable is a sample of three hundred?'))
    check('MP3-ün əvvəlinə 0.25 san. sükut əlavə olunur (50+11 kadr)', st5 == 200 and n5 == 61 * 144, str(n5))
    check('qadın səsi Thalia', ai()['lastModel'].endswith(':thalia'))
    get('/__test/ai?mp3=0&garble=1'); c0 = ai()['aiCalls']
    st6, _, _ = get('/api/tts?v=asteria&t=' + urllib.parse.quote("Don't give up. Missing one day hardly matters; missing two in a row is what breaks the habit."))
    check('səhv eşidilən səs avtomatik yenidən yaradılır (3 cəhd)', st6 == 200 and ai()['aiCalls'] - c0 == 6, str(ai()['aiCalls'] - c0))
    get('/__test/ai?garble=0'); c0 = ai()['aiCalls']
    get('/api/tts?v=asteria&t=' + urllib.parse.quote('Fair enough. What can we realistically deliver by the end of the month?'))
    check('düzgün eşidilən səs bir cəhddə qəbul olunur', ai()['aiCalls'] - c0 == 2, str(ai()['aiCalls'] - c0))
    chk = json.load(urllib.request.urlopen(BASE + '/api/ttscheck?v=asteria&t=' + urllib.parse.quote('Thank you. How reliable is a sample of three hundred?')))
    check('səs yoxlaması (Whisper) eşidilən mətni və balı qaytarır', chk.get('heard') == 'Thank you. How reliable is a sample of three hundred?' and chk.get('score') == 1, str(chk))
    c2 = ai()['aiCalls']; chk2 = json.load(urllib.request.urlopen(BASE + '/api/ttscheck?v=asteria&t=' + urllib.parse.quote('Thank you. How reliable is a sample of three hundred?')))
    check('səs yoxlaması bir dəfə aparılır (təkrar çağırış pulsuz)', chk2.get('cached') and ai()['aiCalls'] == c2)
    st3, _, _ = get('/api/tts?v=asteria&t=' + urllib.parse.quote('Say something random that is not in the course'))
    check('kursda olmayan mətn rədd olunur', st3 == 403)
    get('/__test/ai?fail=1')
    st4, _, _ = get('/api/tts?v=orion&t=' + urllib.parse.quote('Exactly. Flexibility, rather than a single rule, seems to be the answer.'))
    check('limit bitəndə 503 qaytarır', st4 == 503)
    m2 = page('android_chrome'); m2.goto(BASE + '/'); m2.wait_for_timeout(500)
    if m2.locator('#ptA1').count(): m2.click('#ptA1'); m2.wait_for_timeout(900); close_overlays(m2)
    m2.evaluate("location.hash='listening'"); m2.wait_for_timeout(300); m2.click('#lsBox .lvl[data-l="b1"]'); m2.wait_for_timeout(200); m2.click('#lsBox .ep >> nth=2'); m2.wait_for_timeout(1800)
    check('AI əlçatmaz olanda cihaz səsinə keçir (10 dəq. AI yoxlanılmır)', m2.evaluate('AI_DOWN_UNTIL>Date.now()'))
    get('/__test/ai?fail=0')
    reqs = []
    m3 = page('android_chrome'); m3.on('request', lambda r: reqs.append(r.url) if '/api/tts' in r.url else None)
    m3.goto(BASE + '/'); m3.wait_for_timeout(500)
    if m3.locator('#ptA1').count(): m3.click('#ptA1'); m3.wait_for_timeout(900); close_overlays(m3)
    m3.evaluate("location.hash='listening'"); m3.wait_for_timeout(300); m3.click('#lsBox .ep >> nth=0'); m3.wait_for_timeout(900)
    check('dinlə təbii səs faylını istəyir', any('t=Hi' in u for u in reqs), str(reqs[:2]))
    check('dialoqun qalan replikaları əvvəlcədən yüklənir', len(set(u for u in reqs if '/api/tts' in u)) >= 3, str(len(reqs)))
    check('AI səsi çalarkən «Dayandır» görünür', 'Dayandır' in m3.locator('#play').inner_text())
    m3.wait_for_timeout(1500)
    check('cari replika transkriptdə işarələnir', m3.locator('#tr .line.cur').count() == 1 and 'Replika 2' in m3.locator('#lsPos').inner_text(), m3.locator('#lsPos').inner_text())
    m3.click('#play'); m3.wait_for_timeout(200)
    check('AI səsini dayandırmaq olur → «Davam et»', 'Davam et' in m3.locator('#play').inner_text() and m3.evaluate('AEL.paused'))
    m3.click('#play'); m3.wait_for_timeout(300)
    check('«Davam et» qaldığı replikadan davam edir (əvvəldən yox)', 'Small' in m3.evaluate('AEL.src'), m3.evaluate('AEL.src')[-40:])
    m3.click('#restart'); m3.wait_for_timeout(300)
    check('«Əvvəldən» birinci replikadan başlayır', 't=Hi' in m3.evaluate('AEL.src'))
    m3.click('#play'); m3.wait_for_timeout(150)
    m3.click('#play'); m3.wait_for_timeout(150)
    get('/__test/ai?delay=5000')
    m3.evaluate("""(()=>{window.__nat=0;const o=speechSynthesis.speak.bind(speechSynthesis);speechSynthesis.speak=u=>{window.__nat++;o(u)};__speak([{text:"Hello, this is Nigar. Can I speak to Tural?"}],1)})()""")
    m3.wait_for_timeout(3200)
    check('səs gecikəndə (2.5 san.) dərhal cihaz səsi ilə oxuyur', m3.evaluate('__nat') >= 1 and m3.evaluate('AI_DOWN_UNTIL') == 0, str(m3.evaluate('__nat')))
    get('/__test/ai?delay=0'); m3.evaluate('stopSpeech()')
    m3.evaluate("location.hash='profile'"); m3.wait_for_timeout(300)
    check('profildə «Təbii səs» seçimi var', 'Təbii səs' in m3.locator('#voiceCard').inner_text())
    m3.click('#vSrc .chipx[data-s=device]'); m3.wait_for_timeout(100)
    check('cihaz səsinə keçmək olur', m3.locator('#vSrc .chipx[data-s=device][aria-pressed=true]').count() == 1)

    print('7b. Bildirişlər')
    def pj(path): return json.load(urllib.request.urlopen(BASE + path))
    key = pj('/api/push')['key']
    check('VAPID açarı verilir (65 bayt)', len(key) == 87, str(len(key)))
    check('açar sabitdir', pj('/api/push')['key'] == key)
    s1, s2, s3 = pj('/__test/pushsub?n=alice'), pj('/__test/pushsub?n=bob'), pj('/__test/pushsub?n=old-gone')
    for uid, sb, st in [('push-user-alice', s1, 5), ('push-user-bob00', s2, 0), ('push-user-gone0', s3, 2)]:
        r = post('/api/push', {'action': 'subscribe', 'uid': uid, 'sub': sb, 'hour': 20, 'streak': st})
    check('abunə qəbul olunur', r.get('ok') is True, str(r))
    check('səhv abunə rədd olunur', post('/api/push', {'action': 'subscribe', 'uid': 'push-user-xxxx', 'sub': {'endpoint': 'http://evil'}}).get('error') == 'bad_sub')
    post('/api/push', {'action': 'done', 'uid': 'push-user-bob00', 'streak': 1})
    r0 = pj('/api/push-run?hour=19')
    check('xatırlatma vaxtından əvvəl göndərilmir', r0.get('sent') == 0, str(r0))
    r1 = pj('/api/push-run?hour=20'); log = pj('/__test/pushlog')
    check('saat 20:00: dərs keçməyənə bildiriş gedir, keçənə getmir', r1.get('sent') == 1 and any('alice' in x['url'] for x in log) and not any('bob' in x['url'] for x in log), str(r1))
    check('bildiriş şifrələnib (aes128gcm) və VAPID imzalıdır', all(x['enc'] == 'aes128gcm' and x['auth'].startswith('vapid t=') for x in log))
    check('etibarsız abunə (410) silinir', r1.get('gone') == 1)
    r2 = pj('/api/push-run?hour=21')
    check('gündə yalnız bir bildiriş', r2.get('sent') == 0, str(r2))
    check('gecə saatlarında göndərilmir', pj('/api/push-run?hour=23').get('quiet') is True)
    m4 = page('android_chrome'); m4.goto(BASE + '/'); m4.wait_for_timeout(500)
    if m4.locator('#ptA1').count(): m4.click('#ptA1'); m4.wait_for_timeout(900); close_overlays(m4)
    m4.evaluate("location.hash='profile'"); m4.wait_for_timeout(300)
    check('profildə «Gündəlik xatırlatma» — standart olaraq açıq', m4.locator('#nTgl.on').count() == 1)
    m4.click('#nTgl'); m4.wait_for_timeout(200)
    check('xatırlatmanı söndürmək olur', m4.locator('#nTgl.on').count() == 0 and m4.evaluate('S.notif') == 0)
    m4.click('#nTgl'); m4.wait_for_timeout(200); m4.click('#nHours .chipx[data-h="21"]'); m4.wait_for_timeout(200)
    check('xatırlatma saatını seçmək olur', m4.evaluate('S.nHour') == 21)
    m4.context.close()
    mi = page('iphone_safari'); mi.goto(BASE + '/#profile'); mi.wait_for_timeout(500)
    check('iPhone Safari tabında: ana ekrana əlavə etmək tövsiyəsi', 'ana ekrana' in mi.locator('#notifCard').inner_text())
    mi.context.close()

    print('8. JS xətaları')
    check('heç bir JavaScript xətası yoxdur', not errs, '; '.join(errs[:3]))
    b.close()

print('\nNƏTİCƏ:', 'HAMISI KEÇDİ' if not fails else f'{len(fails)} TEST UĞURSUZ: ' + ', '.join(fails))
sys.exit(1 if fails else 0)
