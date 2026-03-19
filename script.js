
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

const table = document.getElementById("periodicTable");
const detailPanel = document.getElementById("detailPanel");
const searchInput = document.getElementById("searchInput");
const familyFilter = document.getElementById("familyFilter");
const randomBtn = document.getElementById("randomBtn");
const resetBtn = document.getElementById("resetBtn");
const legend = document.getElementById("legend");
const quizBtn = document.getElementById("quizBtn");
const quizArea = document.getElementById("quizArea");

const categories = [...new Set(ELEMENTS.map(e => e.category))];
categories.forEach(cat => {
  const op = document.createElement("option");
  op.value = cat;
  op.textContent = cat;
  familyFilter.appendChild(op);

  const item = document.createElement("div");
  item.className = "legend-item";
  item.innerHTML = `<span class="legend-color ${CATEGORY_CLASS[cat]}"></span><span>${cat}</span>`;
  legend.appendChild(item);
});

function getElementKeyText(e){
  return `${e.number} ${e.nameZh} ${e.nameEn} ${e.symbol}`.toLowerCase();
}

function renderTable(){
  const cellMap = {};
  ELEMENTS.forEach(e => {
    cellMap[`${e.period}-${e.group}`] = e;
  });
  for(let row=1; row<=9; row++){
    for(let col=1; col<=18; col++){
      const data = cellMap[`${row}-${col}`];
      const cell = document.createElement("button");
      if(!data){
        cell.className = "empty-cell";
        cell.setAttribute("aria-hidden","true");
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
      cell.addEventListener("click", () => showDetail(data.number));
      table.appendChild(cell);
    }
  }
}

function showDetail(number){
  const e = ELEMENTS.find(item => item.number === number);
  document.querySelectorAll(".element").forEach(el => el.classList.toggle("active", Number(el.dataset.number) === number));
  detailPanel.innerHTML = `
    <div class="detail-head">
      <div class="icon-badge">${e.imageEmoji}</div>
      <div class="title-wrap">
        <h2>${e.nameZh}</h2>
        <div class="subline">${e.symbol} · ${e.nameEn}</div>
      </div>
    </div>
    <div class="stats">
      <div class="stat">
        <div class="stat-label">原子序</div>
        <div class="stat-value">${e.number}</div>
      </div>
      <div class="stat">
        <div class="stat-label">原子量</div>
        <div class="stat-value">${e.weight}</div>
      </div>
      <div class="stat">
        <div class="stat-label">週期</div>
        <div class="stat-value">第 ${e.period === 8 ? "鑭系列" : e.period === 9 ? "錒系列" : e.period + " 週期"}</div>
      </div>
      <div class="stat">
        <div class="stat-label">族群</div>
        <div class="stat-value">${e.category}</div>
      </div>
    </div>
    <div class="section-card">
      <h3>課堂重點</h3>
      <p>${e.summary}</p>
    </div>
    <div class="section-card">
      <h3>常見應用</h3>
      <p>${e.applications}</p>
    </div>
    <div class="section-card">
      <h3>常見化合物</h3>
      <ul>${e.compounds.map(c => `<li>${c}</li>`).join("")}</ul>
    </div>
    <div class="section-card">
      <h3>學習提醒</h3>
      <p>可從「位置 → 類型 → 性質 → 用途」的順序記憶：先看它位於哪一族與哪一週期，再連到活性、金屬／非金屬特徵，以及代表性化合物。</p>
    </div>
  `;
}

function applyFilters(){
  const keyword = searchInput.value.trim().toLowerCase();
  const family = familyFilter.value;
  const cards = [...document.querySelectorAll(".element")];
  cards.forEach(card => {
    const matchesKeyword = !keyword || card.dataset.search.includes(keyword);
    const matchesFamily = family === "all" || card.dataset.category === family;
    card.classList.toggle("hidden", !(matchesKeyword && matchesFamily));
  });
}

function chooseRandomVisible(){
  const visible = [...document.querySelectorAll(".element:not(.hidden)")];
  if(!visible.length) return;
  const pick = visible[Math.floor(Math.random()*visible.length)];
  pick.click();
  pick.scrollIntoView({behavior:"smooth", block:"nearest", inline:"nearest"});
}

function resetAll(){
  searchInput.value = "";
  familyFilter.value = "all";
  applyFilters();
  document.querySelectorAll(".element").forEach(el => el.classList.remove("active"));
  detailPanel.innerHTML = `
    <div class="placeholder">
      <div class="placeholder-icon">🧪</div>
      <h2>請先點選一個元素</h2>
      <p>例如：碳、氧、鈉、鐵、銅、矽。</p>
    </div>`;
}

searchInput.addEventListener("input", applyFilters);
familyFilter.addEventListener("change", applyFilters);
randomBtn.addEventListener("click", chooseRandomVisible);
resetBtn.addEventListener("click", resetAll);

const QUIZ_BANK = [
  { q:"下列哪一個元素最常用於製作電線，因為導電性佳？", choices:["銅","硫","氬","碘"], answer:"銅" },
  { q:"哪一族元素通常化學性質最不活潑？", choices:["鹼金屬","鹵素","惰性氣體","鑭系元素"], answer:"惰性氣體" },
  { q:"下列哪一個元素與半導體晶片最有關？", choices:["矽","氦","溴","鉛"], answer:"矽" },
  { q:"食鹽的主要成分是鈉和哪一個元素形成的化合物？", choices:["氯","氧","硫","碳"], answer:"氯" },
  { q:"與骨骼、石灰石最常連結的元素是？", choices:["鈣","氖","金","氟"], answer:"鈣" },
  { q:"課本中用來說明燃燒與呼吸的關鍵元素通常是？", choices:["氧","氙","錫","鈷"], answer:"氧" },
  { q:"哪一個元素常用於不鏽鋼與防蝕鍍層？", choices:["鉻","氖","硼","碳"], answer:"鉻" }
];

quizBtn.addEventListener("click", () => {
  const item = QUIZ_BANK[Math.floor(Math.random()*QUIZ_BANK.length)];
  quizArea.innerHTML = `
    <div class="quiz-box">
      <div><strong>${item.q}</strong></div>
      <div class="quiz-options">
        ${item.choices.map(choice => `<button>${choice}</button>`).join("")}
      </div>
      <div class="quiz-result" id="quizResult"></div>
    </div>
  `;
  quizArea.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      const result = document.getElementById("quizResult");
      if(btn.textContent === item.answer){
        result.textContent = "答對了。";
        result.style.color = "#067647";
      }else{
        result.textContent = `再試一次。正確答案是：${item.answer}`;
        result.style.color = "#b42318";
      }
    });
  });
});

renderTable();
showDetail(6);
