/* =========================================================
   結 -YUI-  お知らせ・ブログ  データ & 表示エンジン
   ---------------------------------------------------------
   ■ 記事の「公開」について
     恒久的に公開する記事は、下の SEED_POSTS 配列に追加します。
     （blog-compose.html の「公開用コードをコピー」で生成した
       オブジェクトを、この配列の先頭に貼り付けるだけ）

   ■ ブラウザ投稿（お試し）について
     blog-compose.html から投稿すると localStorage に保存され、
     その端末のブラウザでだけ一覧・記事に即時反映されます。
     （サーバーには保存されないデモ機能です）

   body は1つの文字列です。空行で段落が分かれ、「## 」で始まる
   行は小見出しになります。
   ========================================================= */

const CATEGORIES = ['お知らせ', '季節の便り', '周辺だより', '宿のこと'];

const SEED_POSTS = [
  {
    id: 'seed-2026-06-12-firefly',
    date: '2026-06-12',
    category: '周辺だより',
    title: '結里の棚田で、蛍が舞いはじめました',
    image: 'images/tatiana-tochilova-RUFlyKnu-O4-unsplash.jpg',
    pinned: false,
    excerpt: '宿から歩いて5分の棚田で、今年も蛍が舞いはじめました。見頃は6月中旬から下旬の、風のない曇りの夜です。',
    body:
`梅雨の晴れ間、宿のすぐ近くにある結里（ゆいさと）の棚田で、今年も蛍が舞いはじめました。日が落ちて20時を過ぎたころ、水路の上をふわりふわりと光が流れていきます。

## いちばんの見頃
見頃は例年6月中旬から下旬。風がなく、少し蒸し暑い曇りの夜がもっともよく舞います。懐中電灯の光は控えめに、足元だけを照らしてそっと近づくのがコツです。

宿の縁側で涼みながら、虫の声と蛍のあかりを眺める——そんな夜を、ぜひ体験してください。長靴とタオルは玄関にご用意しています。`
  },
  {
    id: 'seed-2026-06-01-summer',
    date: '2026-06-01',
    category: 'お知らせ',
    title: '【夏の連泊プラン】2泊以上で10%OFF・地元食材のお届け付き',
    image: 'images/winged-jedi--nY6A292lBQ-unsplash.jpg',
    pinned: true,
    excerpt: '7〜9月のご予約限定で、2泊以上の連泊が10%OFFに。中日の清掃と、地元直売所の朝採れ野菜のお届けが1回無料で付きます。',
    body:
`いつも結 -YUI- をご覧いただきありがとうございます。夏のあいだ、ゆっくりと里山で過ごしていただける連泊プランをご用意しました。

## プランの内容
・2泊以上のご予約で宿泊料金が10%OFF
・中日（連泊の間の日）の簡易清掃サービス
・地元直売所「みのり」の朝採れ野菜セットを1回無料でお届け

対象は2026年7月1日〜9月30日のご宿泊です。ご予約時に「連泊プラン希望」とお書き添えください。空室状況は予約ページのカレンダーからご確認いただけます。

暑い季節こそ、川遊びや夕涼み、星空観察と楽しみが盛りだくさん。どうぞお気軽にお問い合わせください。`
  },
  {
    id: 'seed-2026-05-20-green',
    date: '2026-05-20',
    category: '季節の便り',
    title: '新緑の庭と、苔の手入れのこと',
    image: 'images/richard-hedrick-1IIVRnfDMYM-unsplash.jpg',
    pinned: false,
    excerpt: 'ゴールデンウィークが過ぎ、庭の苔がいちばん美しい季節になりました。雨上がりの朝、しっとりと光る緑をどうぞ。',
    body:
`新緑がまぶしい季節になりました。結 -YUI- の庭は、この時期がいちばんの見頃です。とりわけ雨上がりの朝、苔がしっとりと光をふくむ様子は格別です。

苔は意外とデリケートで、落ち葉をこまめに払い、夏は朝夕に水をやります。先代から受け継いだこの庭を、できるだけそのままの姿でお見せできるよう、少しずつ手をいれています。

縁側に腰かけて、ただ庭を眺めるだけの時間。何もしない贅沢を、ぜひ味わってください。`
  },
  {
    id: 'seed-2026-05-03-irori',
    date: '2026-05-03',
    category: '宿のこと',
    title: '囲炉裏の使い方と、火のある夜の楽しみ方',
    image: 'images/ksenia-yakovleva-SUj9CDNWAb0-unsplash.jpg',
    pinned: false,
    excerpt: '土間の囲炉裏は、宿でいちばん人気の場所。薪と炭はご用意しています。安全な使い方と、おすすめの過ごし方をご紹介します。',
    body:
`結 -YUI- の土間には、本物の囲炉裏があります。火を囲んで語らう夜は、この宿でいちばん思い出に残るひととき。薪と炭は無料でご用意しています。

## 使い方のご案内
着火の道具と説明書きは囲炉裏の脇に置いています。換気のため、ご利用中は小窓を少し開けてください。就寝前には必ず火の始末をお願いします。

串に刺したお餅やお野菜を炙ったり、鉄瓶でお湯を沸かしてお茶を淹れたり。直売所で買った地のものを、ゆっくり焼きながらいただく夜は格別です。`
  },
  {
    id: 'seed-2026-04-15-market',
    date: '2026-04-15',
    category: '周辺だより',
    title: '朝の直売所「みのり」で、春の食材を',
    image: 'images/pexels-anntarazevich-5620893.jpg',
    pinned: false,
    excerpt: '車で10分の農産物直売所「みのり」。朝採れの野菜や卵、手づくり味噌が並びます。夕食の食材はここで揃います。',
    body:
`自炊できるのが一棟貸しの楽しみ。食材は、車で10分ほどの農産物直売所「みのり」がおすすめです。9時の開店と同時に、朝採れの野菜や卵、手づくりの味噌やお漬物が並びます。

春は山菜やアスパラ、たけのこが豊富。何を作ろうか迷うのも旅の楽しみです。宿のキッチンには調理器具と食器を一通り揃えていますので、手ぶらでお越しいただけます。

おすすめの食材や、簡単なレシピもお渡しできます。チェックインの際にお気軽にお尋ねください。`
  },
  {
    id: 'seed-2026-01-10-winter',
    date: '2026-01-10',
    category: 'お知らせ',
    title: '冬期の薪ストーブと、雪見のご案内',
    image: 'images/pexels-luis-ruiz-4022438.jpg',
    pinned: false,
    excerpt: '冬の結 -YUI- は、薪ストーブと雪見の檜風呂が主役。底冷えする里山ですが、館内はあたたかくお過ごしいただけます。',
    body:
`冬の里山は、しんと静まりかえって格別の趣があります。結 -YUI- では、寒い季節は薪ストーブに火を入れてお迎えします。

雪の日には、檜風呂の窓の向こうに雪化粧した坪庭が広がります。底冷えする土地ですが、床暖房と薪ストーブで館内はあたたかく。あたたかい服装と、滑りにくい靴でお越しください。

雪道の運転に不安がある方は、最寄り駅までの無料送迎も承っています。前日までにご相談ください。`
  }
];

/* ===== localStorage（ブラウザ投稿）ヘルパー ===== */
const LS_KEY = 'yui_blog_posts';

function getLocalPosts() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; }
  catch (e) { return []; }
}
function saveLocalPosts(arr) { localStorage.setItem(LS_KEY, JSON.stringify(arr)); }
function addLocalPost(post) { const a = getLocalPosts(); a.unshift(post); saveLocalPosts(a); }
function deleteLocalPost(id) { saveLocalPosts(getLocalPosts().filter(p => p.id !== id)); }

/* ===== 取得・整列 ===== */
function getAllPosts() {
  const locals = getLocalPosts().map(p => ({ ...p, _local: true }));
  const all = [...locals, ...SEED_POSTS];
  // ピン留めを上に、その後は日付の新しい順
  return all.sort((a, b) => {
    if (!!a.pinned !== !!b.pinned) return a.pinned ? -1 : 1;
    return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
  });
}
function getPost(id) { return getAllPosts().find(p => p.id === id); }

/* ===== ユーティリティ ===== */
function fmtDate(d) { return (d || '').replace(/-/g, '.'); }

// 画像URLの簡易サニタイズ（images/ または http(s) のみ許可）
function safeImg(url) {
  if (!url) return '';
  return /^(images\/|https?:\/\/)/.test(url) ? url : '';
}

// 本文（文字列）を安全にDOMへ描画。空行で段落、行頭「## 」で小見出し。
function renderBody(container, raw) {
  container.innerHTML = '';
  const blocks = (raw || '').split(/\n{2,}/);
  blocks.forEach(block => {
    let para = [];
    const flush = () => {
      if (!para.length) return;
      const p = document.createElement('p');
      para.forEach((line, i) => {
        if (i > 0) p.appendChild(document.createElement('br'));
        p.appendChild(document.createTextNode(line));
      });
      container.appendChild(p);
      para = [];
    };
    block.split('\n').forEach(line => {
      const t = line.trim();
      if (t.startsWith('## ')) {
        flush();
        const h = document.createElement('h3');
        h.textContent = t.slice(3).trim();
        container.appendChild(h);
      } else if (t !== '') {
        para.push(line);
      }
    });
    flush();
  });
}

/* ===== カード生成（一覧用） ===== */
function buildPostCard(p) {
  const card = document.createElement('article');
  card.className = 'post-card';

  const thumb = document.createElement('a');
  thumb.className = 'post-thumb';
  thumb.href = 'blog-post.html?id=' + encodeURIComponent(p.id);
  const ph = document.createElement('div');
  ph.className = 'photo';
  const img = safeImg(p.image);
  if (img) { ph.classList.add('has-img'); ph.style.backgroundImage = "url('" + img + "')"; }
  else { ph.classList.add('p-green'); }
  thumb.appendChild(ph);

  const body = document.createElement('div');
  body.className = 'post-body';

  const meta = document.createElement('div');
  meta.className = 'post-meta';
  const date = document.createElement('span');
  date.className = 'post-date'; date.textContent = fmtDate(p.date);
  const cat = document.createElement('span');
  cat.className = 'post-cat'; cat.textContent = p.category || 'お知らせ';
  meta.appendChild(date); meta.appendChild(cat);
  if (p.pinned) { const pin = document.createElement('span'); pin.className = 'post-pin'; pin.textContent = '📌 重要'; meta.appendChild(pin); }
  if (p._local) { const b = document.createElement('span'); b.className = 'badge-local'; b.textContent = 'この端末の下書き'; meta.appendChild(b); }

  const h2 = document.createElement('h2');
  const titleLink = document.createElement('a');
  titleLink.href = 'blog-post.html?id=' + encodeURIComponent(p.id);
  titleLink.textContent = p.title || '(無題)';
  h2.appendChild(titleLink);

  const ex = document.createElement('p');
  ex.className = 'excerpt';
  ex.textContent = p.excerpt || '';

  const more = document.createElement('a');
  more.className = 'read-more';
  more.href = 'blog-post.html?id=' + encodeURIComponent(p.id);
  more.textContent = 'つづきを読む →';

  body.appendChild(meta); body.appendChild(h2); body.appendChild(ex); body.appendChild(more);
  card.appendChild(thumb); card.appendChild(body);
  return card;
}

/* ===== 一覧描画 ===== */
function renderBlogList(listEl, filter) {
  listEl.innerHTML = '';
  let posts = getAllPosts();
  if (filter && filter !== 'all') posts = posts.filter(p => p.category === filter);
  if (posts.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'blog-empty';
    empty.textContent = 'この カテゴリーの記事はまだありません。';
    listEl.appendChild(empty);
    return;
  }
  posts.forEach(p => listEl.appendChild(buildPostCard(p)));
}

/* ===== カテゴリ件数 ===== */
function categoryCounts() {
  const counts = {};
  CATEGORIES.forEach(c => counts[c] = 0);
  getAllPosts().forEach(p => { if (counts[p.category] != null) counts[p.category]++; });
  return counts;
}
