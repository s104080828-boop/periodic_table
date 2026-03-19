
const CATEGORY_CLASS = {
  "鹼金屬":"alkali",
  "鹼土金屬":"alkaline",
  "過渡金屬":"transition",
  "後過渡金屬":"post",
  "類金屬":"metalloid",
  "非金屬":"nonmetal",
  "鹵素":"halogen",
  "惰性氣體":"noble",
  "鑭系元素":"lanthanide",
  "錒系元素":"actinide",
  "其他金屬":"other"
};

const STORAGE_KEYS = {
  mode: 'pt_mode',
  viewed: 'pt_viewed_elements'
};

function encodeSVG(svg){ return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg); }
function getCategoryTone(cat){
  const map = {
    '鹼金屬':'#ffe7c2','鹼土金屬':'#e6f4d7','過渡金屬':'#dfe9ff','後過渡金屬':'#f1e8ff',
    '類金屬':'#ffe6f0','非金屬':'#e3fbff','鹵素':'#fff0cf','惰性氣體':'#e9f0ff',
    '鑭系元素':'#fbe6ff','錒系元素':'#ffe4e4','其他金屬':'#ececec'
  };
  return map[cat] || '#f4f4f4';
}
function elementSvg(e){
  const bg = getCategoryTone(e.category);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="420" viewBox="0 0 900 420">
    <rect width="900" height="420" rx="36" fill="${bg}"/>
    <circle cx="160" cy="130" r="78" fill="white" fill-opacity="0.62"/>
    <circle cx="735" cy="300" r="120" fill="white" fill-opacity="0.32"/>
    <text x="70" y="88" font-size="40" font-family="Arial, Noto Sans TC, sans-serif" fill="#2b2f38">${e.nameZh} ${e.nameEn}</text>
    <text x="72" y="245" font-size="180" font-weight="700" font-family="Arial, Noto Sans TC, sans-serif" fill="#18212f">${e.symbol}</text>
    <text x="72" y="305" font-size="34" font-family="Arial, Noto Sans TC, sans-serif" fill="#334155">Atomic No. ${e.number}</text>
    <text x="72" y="354" font-size="30" font-family="Arial, Noto Sans TC, sans-serif" fill="#475569">${e.category} · 原子量 ${e.weight}</text>
  </svg>`;
  return encodeSVG(svg);
}

function getMode(){ return localStorage.getItem(STORAGE_KEYS.mode) || 'junior'; }
function setMode(mode){ localStorage.setItem(STORAGE_KEYS.mode, mode); }
function markViewed(number){
  let arr = [];
  try { arr = JSON.parse(localStorage.getItem(STORAGE_KEYS.viewed) || '[]'); } catch {}
  if(!arr.includes(number)){
    arr.push(number);
    localStorage.setItem(STORAGE_KEYS.viewed, JSON.stringify(arr.sort((a,b)=>a-b)));
  }
}

function seniorExtension(e){
  const periodText = e.period <= 7 ? `第 ${e.period} 週期` : (e.period === 8 ? '鑭系元素' : '錒系元素');
  const notesByCategory = {
    '鹼金屬':'位於第 1 族，通常價電子少、活性高，容易形成 +1 化合價。',
    '鹼土金屬':'位於第 2 族，常形成 +2 離子，與氧或鹵素形成離子化合物。',
    '過渡金屬':'d 軌域參與成鍵，常見多種氧化態、配位化學與觸媒性質。',
    '後過渡金屬':'常見金屬鍵與導電性，也可連結材料加工與合金概念。',
    '類金屬':'金屬與非金屬性質兼具，常用於半導體或功能材料討論。',
    '非金屬':'常形成共價鍵，是分子結構與生化物質的重要主角。',
    '鹵素':'第 17 族，反應性高，常形成 -1 離子並與金屬生成鹽類。',
    '惰性氣體':'最外層電子較穩定，常用來說明低反應性與穩定電子層。',
    '鑭系元素':'可延伸到磁性、光學材料與特殊合金。',
    '錒系元素':'可延伸到放射性、核能與元素穩定性議題。',
    '其他金屬':'可連結導電、延展與金屬鍵等通則。'
  };
  return `位置觀察：${e.nameZh} 位於${periodText}，分類屬於${e.category}。${notesByCategory[e.category] || ''}`;
}

function juniorFocus(e){
  return `${e.summary} 國中階段先掌握「元素位置、基本性質、生活應用」三件事。`;
}

function renderDetail(mode){
  const params = new URLSearchParams(location.search);
  const number = Number(params.get('element') || '6');
  const e = ELEMENTS.find(item => item.number === number) || ELEMENTS[5];
  markViewed(e.number);
  document.title = `${e.nameZh} ${e.symbol}｜元素詳細介紹`;
  document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode));

  const intro = mode === 'junior' ? juniorFocus(e) : seniorExtension(e);
  const levelTitle = mode === 'junior' ? '國中版重點' : '高中版延伸';
  const compare = mode === 'junior'
    ? '建議先從生活裡遇得到的材料來記，例如飲用水、空氣、食鹽、金屬器具、石灰石。'
    : '可進一步連結氧化態、電子排列、族群趨勢、導電性、反應性與材料工程用途。';

  const detailPage = document.getElementById('detailPage');
  detailPage.innerHTML = `
    <section class="detail-hero card">
      <div class="detail-media"><img src="${elementSvg(e)}" alt="${e.nameZh} ${e.symbol} 示意圖"></div>
      <div class="detail-main">
        <div class="detail-title-row">
          <div>
            <h1>${e.nameZh} <span>${e.symbol}</span></h1>
            <p>${e.nameEn}</p>
          </div>
          <span class="chip ${CATEGORY_CLASS[e.category]}">${e.category}</span>
        </div>
        <div class="stats-grid">
          <div class="stat-card"><span>原子序</span><strong>${e.number}</strong></div>
          <div class="stat-card"><span>原子量</span><strong>${e.weight}</strong></div>
          <div class="stat-card"><span>週期</span><strong>${e.period <= 7 ? `第 ${e.period} 週期` : (e.period === 8 ? '鑭系' : '錒系')}</strong></div>
          <div class="stat-card"><span>族群</span><strong>${e.category}</strong></div>
        </div>
      </div>
    </section>

    <section class="detail-grid">
      <article class="card">
        <h2>${levelTitle}</h2>
        <p>${intro}</p>
      </article>
      <article class="card">
        <h2>常見應用</h2>
        <p>${e.applications}</p>
      </article>
      <article class="card">
        <h2>常見化合物</h2>
        <ul class="compound-list">${e.compounds.map(c => `<li>${c}</li>`).join('')}</ul>
      </article>
      <article class="card">
        <h2>學習提示</h2>
        <p>${compare}</p>
      </article>
    </section>

    <section class="card nav-card">
      <h2>快速切換</h2>
      <div class="nav-buttons">
        <a class="nav-btn" href="detail.html?element=${Math.max(1, e.number - 1)}">上一個元素</a>
        <a class="nav-btn" href="detail.html?element=${Math.min(ELEMENTS.length, e.number + 1)}">下一個元素</a>
        <a class="nav-btn" href="index.html">回首頁</a>
      </div>
    </section>
  `;
}

document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const mode = btn.dataset.mode;
    setMode(mode);
    renderDetail(mode);
  });
});

renderDetail(getMode());
