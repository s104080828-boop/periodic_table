
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
  viewed: 'pt_viewed_elements',
  quizScore: 'pt_quiz_score'
};

const table = document.getElementById('periodicTable');
const previewCard = document.getElementById('previewCard');
const searchInput = document.getElementById('searchInput');
const familyFilter = document.getElementById('familyFilter');
const modeSwitch = document.getElementById('modeSwitch');
const randomBtn = document.getElementById('randomBtn');
const resetBtn = document.getElementById('resetBtn');
const legend = document.getElementById('legend');
const viewedCount = document.getElementById('viewedCount');
const viewBar = document.getElementById('viewBar');
const quizScore = document.getElementById('quizScore');
const badgeWrap = document.getElementById('badgeWrap');
const quizBtn = document.getElementById('quizBtn');
const quizArea = document.getElementById('quizArea');

const modeText = {
  junior: '國中版',
  senior: '高中版'
};

function loadViewed(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.viewed) || '[]'); } catch { return []; }
}
function saveViewed(arr){ localStorage.setItem(STORAGE_KEYS.viewed, JSON.stringify([...new Set(arr)].sort((a,b)=>a-b))); }
function getQuizScore(){ return Number(localStorage.getItem(STORAGE_KEYS.quizScore) || '0'); }
function setQuizScore(v){ localStorage.setItem(STORAGE_KEYS.quizScore, String(v)); }
function getMode(){ return localStorage.getItem(STORAGE_KEYS.mode) || 'junior'; }
function setMode(mode){ localStorage.setItem(STORAGE_KEYS.mode, mode); }

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
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="520" height="280" viewBox="0 0 520 280">
    <rect width="520" height="280" rx="28" fill="${bg}"/>
    <circle cx="95" cy="90" r="52" fill="white" fill-opacity="0.66"/>
    <circle cx="425" cy="212" r="70" fill="white" fill-opacity="0.38"/>
    <text x="38" y="58" font-size="28" font-family="Arial, Noto Sans TC, sans-serif" fill="#2b2f38">${e.nameZh}</text>
    <text x="40" y="170" font-size="108" font-weight="700" font-family="Arial, Noto Sans TC, sans-serif" fill="#18212f">${e.symbol}</text>
    <text x="42" y="214" font-size="24" font-family="Arial, Noto Sans TC, sans-serif" fill="#334155">Atomic No. ${e.number}</text>
    <text x="42" y="246" font-size="22" font-family="Arial, Noto Sans TC, sans-serif" fill="#475569">${e.nameEn}</text>
    <text x="370" y="66" font-size="22" font-family="Arial, Noto Sans TC, sans-serif" fill="#475569">${e.category}</text>
  </svg>`;
  return encodeSVG(svg);
}

function getElementKeyText(e){ return `${e.number} ${e.nameZh} ${e.nameEn} ${e.symbol}`.toLowerCase(); }

const categories = [...new Set(ELEMENTS.map(e => e.category))];
categories.forEach(cat => {
  const op = document.createElement('option');
  op.value = cat;
  op.textContent = cat;
  familyFilter.appendChild(op);
  const item = document.createElement('div');
  item.className = 'legend-item';
  item.innerHTML = `<span class="legend-color ${CATEGORY_CLASS[cat]}"></span><span>${cat}</span>`;
  legend.appendChild(item);
});

function previewSummary(e, mode){
  return mode === 'junior'
    ? `${e.summary} 先記住它屬於${e.category}，再連到生活中的常見用途。`
    : `${e.summary} 高中可進一步觀察其在第 ${e.period > 7 ? '鑭／錒系' : e.period + ' 週期'}中的位置，連結電子排列、反應性與材料性質。`;
}

function renderPreview(number){
  const e = ELEMENTS.find(item => item.number === number);
  if(!e) return;
  const mode = getMode();
  const viewed = loadViewed();
  viewed.push(number);
  saveViewed(viewed);
  updateDashboard();

  previewCard.innerHTML = `
    <div class="preview-media"><img src="${elementSvg(e)}" alt="${e.nameZh} ${e.symbol} 示意圖"></div>
    <div class="preview-head">
      <div>
        <h2>${e.nameZh} <span>${e.symbol}</span></h2>
        <p>${e.nameEn} · 原子序 ${e.number} · 原子量 ${e.weight}</p>
      </div>
      <span class="chip ${CATEGORY_CLASS[e.category]}">${e.category}</span>
    </div>
    <p class="preview-text">${previewSummary(e, mode)}</p>
    <div class="mini-stats">
      <div><span>週期</span><strong>${e.period <= 7 ? `第 ${e.period} 週期` : (e.period === 8 ? '鑭系' : '錒系')}</strong></div>
      <div><span>代表化合物</span><strong>${e.compounds[0] || '—'}</strong></div>
    </div>
    <a class="detail-link" href="detail.html?element=${e.number}">開啟完整介紹頁</a>
  `;
}

function renderTable(){
  const cellMap = {};
  ELEMENTS.forEach(e => { cellMap[`${e.period}-${e.group}`] = e; });
  table.innerHTML = '';
  for(let row=1; row<=9; row++){
    for(let col=1; col<=18; col++){
      const data = cellMap[`${row}-${col}`];
      const cell = document.createElement(data ? 'button' : 'div');
      if(!data){
        cell.className = 'empty-cell';
        table.appendChild(cell);
        continue;
      }
      cell.className = `element ${CATEGORY_CLASS[data.category]}`;
      cell.dataset.number = data.number;
      cell.dataset.category = data.category;
      cell.dataset.search = getElementKeyText(data);
      cell.innerHTML = `
        <div class="number">${data.number}</div>
        <div class="name">${data.nameZh}</div>
        <div class="symbol">${data.symbol}</div>
      `;
      cell.addEventListener('mouseenter', () => renderPreview(data.number));
      cell.addEventListener('focus', () => renderPreview(data.number));
      cell.addEventListener('click', () => {
        renderPreview(data.number);
        window.location.href = `detail.html?element=${data.number}`;
      });
      table.appendChild(cell);
    }
  }
}

function applyFilters(){
  const keyword = searchInput.value.trim().toLowerCase();
  const family = familyFilter.value;
  const cards = [...document.querySelectorAll('.element')];
  cards.forEach(card => {
    const matchesKeyword = !keyword || card.dataset.search.includes(keyword);
    const matchesFamily = family === 'all' || card.dataset.category === family;
    card.classList.toggle('hidden', !(matchesKeyword && matchesFamily));
  });
}

function chooseRandomVisible(){
  const visible = [...document.querySelectorAll('.element:not(.hidden)')];
  if(!visible.length) return;
  const pick = visible[Math.floor(Math.random()*visible.length)];
  renderPreview(Number(pick.dataset.number));
  pick.scrollIntoView({behavior:'smooth', block:'nearest', inline:'nearest'});
}

function getBadges(viewed, score){
  return [
    {key:'starter', label:'新手探索者', ok:viewed >= 5},
    {key:'curious', label:'好奇觀察家', ok:viewed >= 20},
    {key:'collector', label:'元素收藏家', ok:viewed >= 50},
    {key:'quiz1', label:'理化暖身', ok:score >= 3},
    {key:'quiz2', label:'推理加速中', ok:score >= 8},
    {key:'quiz3', label:'元素達人', ok:score >= 15}
  ];
}

function updateDashboard(){
  const viewed = loadViewed().length;
  const score = getQuizScore();
  viewedCount.textContent = `${viewed} / ${ELEMENTS.length}`;
  viewBar.style.width = `${Math.min(100, viewed / ELEMENTS.length * 100)}%`;
  quizScore.textContent = score;
  badgeWrap.innerHTML = getBadges(viewed, score).map(b => `<span class="badge ${b.ok ? 'on' : ''}">${b.label}</span>`).join('');
}

function resetAll(){
  searchInput.value = '';
  familyFilter.value = 'all';
  applyFilters();
  previewCard.innerHTML = `
    <div class="placeholder">
      <div class="placeholder-icon">🧪</div>
      <h2>先選一個元素吧</h2>
      <p>例如：氫、碳、氧、鈉、矽、鐵、銅。</p>
    </div>`;
}

const QUIZ_BANK = [
  { q:'空氣中含量最高、且常用於製作氨的元素是？', choices:['氧','氮','氬','碳'], answer:'氮' },
  { q:'下列哪個元素最常用於導線？', choices:['銅','硫','氖','碘'], answer:'銅' },
  { q:'若課本談到半導體晶片，最常出現哪個元素？', choices:['矽','溴','氪','鉛'], answer:'矽' },
  { q:'食鹽的化學成分是氯化鈉，表示鈉和哪個元素結合？', choices:['氯','氧','硫','碳'], answer:'氯' },
  { q:'哪一族通常最不容易和其他元素反應？', choices:['鹼金屬','鹵素','惰性氣體','過渡金屬'], answer:'惰性氣體' },
  { q:'與骨骼、石灰石、貝殼最常連結的元素是？', choices:['鈣','氦','金','氟'], answer:'鈣' },
  { q:'不鏽鋼常會加入哪個元素以提升耐蝕性？', choices:['鉻','氖','磷','硼'], answer:'鉻' },
  { q:'高中常用來討論氧化態、觸媒與合金的代表金屬是？', choices:['鐵','氦','碳','氯'], answer:'鐵' }
];

function launchQuiz(){
  const mode = getMode();
  const item = QUIZ_BANK[Math.floor(Math.random() * QUIZ_BANK.length)];
  const prompt = mode === 'junior' ? item.q : `${item.q}（高中延伸：可再想想它在週期表的位置與族群性質）`;
  quizArea.innerHTML = `
    <div class="quiz-box">
      <div class="quiz-question"><strong>${prompt}</strong></div>
      <div class="quiz-options">
        ${item.choices.map(choice => `<button type="button">${choice}</button>`).join('')}
      </div>
      <div class="quiz-result" id="quizResult"></div>
    </div>
  `;
  quizArea.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const result = document.getElementById('quizResult');
      const correct = btn.textContent === item.answer;
      if(correct){
        const score = getQuizScore() + 1;
        setQuizScore(score);
        updateDashboard();
        result.textContent = '答對了，這題收進知識口袋。';
        result.className = 'quiz-result ok';
      } else {
        result.textContent = `這題答案是：${item.answer}`;
        result.className = 'quiz-result bad';
      }
    }, { once:true });
  });
}

searchInput.addEventListener('input', applyFilters);
familyFilter.addEventListener('change', applyFilters);
randomBtn.addEventListener('click', chooseRandomVisible);
resetBtn.addEventListener('click', resetAll);
quizBtn.addEventListener('click', launchQuiz);
modeSwitch.addEventListener('change', (e) => {
  setMode(e.target.value);
  if(previewCard.querySelector('h2')){
    const current = previewCard.querySelector('.detail-link')?.getAttribute('href');
    const match = current && current.match(/element=(\d+)/);
    if(match) renderPreview(Number(match[1]));
  }
});

modeSwitch.value = getMode();
renderTable();
updateDashboard();
renderPreview(6);
