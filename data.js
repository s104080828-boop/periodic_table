const ELEMENTS = [
  {
    "number": 1,
    "nameZh": "氫",
    "symbol": "H",
    "nameEn": "Hydrogen",
    "period": 1,
    "group": 1,
    "category": "非金屬",
    "weight": 1.008,
    "summary": "最輕的元素，常見於水與有機物中，也是酸鹼與氧化還原單元的重要角色。",
    "applications": "燃料電池、氨合成、油脂加氫、火箭燃料。",
    "compounds": [
      "水 H₂O",
      "鹽酸 HCl",
      "氨 NH₃"
    ],
    "imageEmoji": "🌿"
  },
  {
    "number": 2,
    "nameZh": "氦",
    "symbol": "He",
    "nameEn": "Helium",
    "period": 1,
    "group": 18,
    "category": "惰性氣體",
    "weight": 4.003,
    "summary": "惰性氣體，化學性質很不活潑，常用來說明電子層穩定。",
    "applications": "低溫冷卻、氣球、保護氣氛。",
    "compounds": [
      "液態氦",
      "氦氖雷射 He-Ne"
    ],
    "imageEmoji": "💡"
  },
  {
    "number": 3,
    "nameZh": "鋰",
    "symbol": "Li",
    "nameEn": "Lithium",
    "period": 2,
    "group": 1,
    "category": "鹼金屬",
    "weight": 6.941,
    "summary": "最輕的金屬之一，反應性高，國高中常見於週期趨勢與電池材料。",
    "applications": "鋰電池、耐熱玻璃、輕量合金。",
    "compounds": [
      "碳酸鋰 Li₂CO₃",
      "氫氧化鋰 LiOH",
      "氯化鋰 LiCl"
    ],
    "imageEmoji": "🔋"
  },
  {
    "number": 4,
    "nameZh": "鈹",
    "symbol": "Be",
    "nameEn": "Beryllium",
    "period": 2,
    "group": 2,
    "category": "鹼土金屬",
    "weight": 9.012,
    "summary": "鹼土金屬，質輕且剛硬；其化合物與材料安全議題常被提及。",
    "applications": "航太合金、X 光窗材。",
    "compounds": [
      "氧化鈹 BeO",
      "氯化鈹 BeCl₂"
    ],
    "imageEmoji": "🧱"
  },
  {
    "number": 5,
    "nameZh": "硼",
    "symbol": "B",
    "nameEn": "Boron",
    "period": 2,
    "group": 13,
    "category": "類金屬",
    "weight": 10.812,
    "summary": "類金屬，常用來做玻璃與半導體摻雜材料。",
    "applications": "耐熱玻璃、清潔劑、半導體摻雜。",
    "compounds": [
      "硼酸 H₃BO₃",
      "硼砂 Na₂B₄O₇·10H₂O",
      "三氧化二硼 B₂O₃"
    ],
    "imageEmoji": "💠"
  },
  {
    "number": 6,
    "nameZh": "碳",
    "symbol": "C",
    "nameEn": "Carbon",
    "period": 2,
    "group": 14,
    "category": "非金屬",
    "weight": 12.011,
    "summary": "生命化學核心元素，具多種同素異形體，國高中常以石墨、鑽石與石墨烯切入。",
    "applications": "燃料、電極材料、鉛筆芯、複合材料。",
    "compounds": [
      "二氧化碳 CO₂",
      "碳酸鈣 CaCO₃",
      "甲烷 CH₄"
    ],
    "imageEmoji": "🌿"
  },
  {
    "number": 7,
    "nameZh": "氮",
    "symbol": "N",
    "nameEn": "Nitrogen",
    "period": 2,
    "group": 15,
    "category": "非金屬",
    "weight": 14.007,
    "summary": "空氣中含量最高的主要成分之一；與蛋白質、肥料、酸雨等主題密切相關。",
    "applications": "液態氮冷凍、製氨、保護氣體。",
    "compounds": [
      "氨 NH₃",
      "硝酸 HNO₃",
      "二氧化氮 NO₂"
    ],
    "imageEmoji": "🌿"
  },
  {
    "number": 8,
    "nameZh": "氧",
    "symbol": "O",
    "nameEn": "Oxygen",
    "period": 2,
    "group": 16,
    "category": "非金屬",
    "weight": 15.999,
    "summary": "燃燒、呼吸與氧化反應的關鍵元素，國中理化常見。",
    "applications": "醫療供氧、煉鋼、切割焊接。",
    "compounds": [
      "水 H₂O",
      "二氧化碳 CO₂",
      "氧化鐵 Fe₂O₃"
    ],
    "imageEmoji": "🌿"
  },
  {
    "number": 9,
    "nameZh": "氟",
    "symbol": "F",
    "nameEn": "Fluorine",
    "period": 2,
    "group": 17,
    "category": "鹵素",
    "weight": 18.998,
    "summary": "最活潑的非金屬之一，反應性極高。",
    "applications": "含氟牙膏、氟化材料、蝕刻。",
    "compounds": [
      "氟化鈉 NaF",
      "氫氟酸 HF",
      "聚四氟乙烯 PTFE"
    ],
    "imageEmoji": "🧪"
  },
  {
    "number": 10,
    "nameZh": "氖",
    "symbol": "Ne",
    "nameEn": "Neon",
    "period": 2,
    "group": 18,
    "category": "惰性氣體",
    "weight": 20.18,
    "summary": "惰性氣體，放電時可發出鮮明紅橘光。",
    "applications": "霓虹燈、放電管。",
    "compounds": [
      "氖氣放電燈"
    ],
    "imageEmoji": "💡"
  },
  {
    "number": 11,
    "nameZh": "鈉",
    "symbol": "Na",
    "nameEn": "Sodium",
    "period": 3,
    "group": 1,
    "category": "鹼金屬",
    "weight": 22.99,
    "summary": "鹼金屬，與水劇烈反應，適合用來教金屬活性。",
    "applications": "鈉燈、冷卻劑、化工原料。",
    "compounds": [
      "氯化鈉 NaCl",
      "氫氧化鈉 NaOH",
      "碳酸鈉 Na₂CO₃"
    ],
    "imageEmoji": "🔋"
  },
  {
    "number": 12,
    "nameZh": "鎂",
    "symbol": "Mg",
    "nameEn": "Magnesium",
    "period": 3,
    "group": 2,
    "category": "鹼土金屬",
    "weight": 24.305,
    "summary": "人體必需元素之一，也是輕金屬材料代表。",
    "applications": "鎂合金、煙火、醫藥。",
    "compounds": [
      "氧化鎂 MgO",
      "氫氧化鎂 Mg(OH)₂",
      "硫酸鎂 MgSO₄"
    ],
    "imageEmoji": "🧱"
  },
  {
    "number": 13,
    "nameZh": "鋁",
    "symbol": "Al",
    "nameEn": "Aluminium",
    "period": 3,
    "group": 13,
    "category": "後過渡金屬",
    "weight": 26.982,
    "summary": "地殼中常見金屬，密度低、耐蝕。",
    "applications": "鋁箔、飛機材料、電纜。",
    "compounds": [
      "氧化鋁 Al₂O₃",
      "氫氧化鋁 Al(OH)₃",
      "硫酸鋁 Al₂(SO₄)₃"
    ],
    "imageEmoji": "🪙"
  },
  {
    "number": 14,
    "nameZh": "矽",
    "symbol": "Si",
    "nameEn": "Silicon",
    "period": 3,
    "group": 14,
    "category": "類金屬",
    "weight": 28.086,
    "summary": "半導體材料核心元素，亦常見於玻璃與岩石。",
    "applications": "晶片、太陽能板、玻璃。",
    "compounds": [
      "二氧化矽 SiO₂",
      "碳化矽 SiC",
      "矽酸鹽"
    ],
    "imageEmoji": "💠"
  },
  {
    "number": 15,
    "nameZh": "磷",
    "symbol": "P",
    "nameEn": "Phosphorus",
    "period": 3,
    "group": 15,
    "category": "非金屬",
    "weight": 30.974,
    "summary": "生物體與肥料中的重要元素。",
    "applications": "火柴、肥料、半導體摻雜。",
    "compounds": [
      "磷酸 H₃PO₄",
      "磷酸鈣 Ca₃(PO₄)₂",
      "五氧化二磷 P₄O₁₀"
    ],
    "imageEmoji": "🌿"
  },
  {
    "number": 16,
    "nameZh": "硫",
    "symbol": "S",
    "nameEn": "Sulfur",
    "period": 3,
    "group": 16,
    "category": "非金屬",
    "weight": 32.067,
    "summary": "與火山、蛋白質及酸雨單元常連結。",
    "applications": "硫酸製造、橡膠硫化、火藥。",
    "compounds": [
      "二氧化硫 SO₂",
      "硫酸 H₂SO₄",
      "硫化氫 H₂S"
    ],
    "imageEmoji": "🌿"
  },
  {
    "number": 17,
    "nameZh": "氯",
    "symbol": "Cl",
    "nameEn": "Chlorine",
    "period": 3,
    "group": 17,
    "category": "鹵素",
    "weight": 35.453,
    "summary": "常見於消毒與漂白，也常以食鹽中的氯離子切入。",
    "applications": "自來水消毒、PVC、生產漂白劑。",
    "compounds": [
      "氯化鈉 NaCl",
      "鹽酸 HCl",
      "次氯酸鈉 NaClO"
    ],
    "imageEmoji": "🧪"
  },
  {
    "number": 18,
    "nameZh": "氬",
    "symbol": "Ar",
    "nameEn": "Argon",
    "period": 3,
    "group": 18,
    "category": "惰性氣體",
    "weight": 39.948,
    "summary": "惰性氣體，常用於保護焊接與實驗。",
    "applications": "焊接保護氣、燈泡填充。",
    "compounds": [
      "氬氣 Ar"
    ],
    "imageEmoji": "💡"
  },
  {
    "number": 19,
    "nameZh": "鉀",
    "symbol": "K",
    "nameEn": "Potassium",
    "period": 4,
    "group": 1,
    "category": "鹼金屬",
    "weight": 39.098,
    "summary": "植物必需營養元素之一。",
    "applications": "肥料、鉀鹽工業。",
    "compounds": [
      "氯化鉀 KCl",
      "硝酸鉀 KNO₃",
      "高錳酸鉀 KMnO₄"
    ],
    "imageEmoji": "🔋"
  },
  {
    "number": 20,
    "nameZh": "鈣",
    "symbol": "Ca",
    "nameEn": "Calcium",
    "period": 4,
    "group": 2,
    "category": "鹼土金屬",
    "weight": 40.078,
    "summary": "骨骼與貝殼的主要元素來源之一。",
    "applications": "水泥、石灰、補鈣製劑。",
    "compounds": [
      "碳酸鈣 CaCO₃",
      "氧化鈣 CaO",
      "硫酸鈣 CaSO₄"
    ],
    "imageEmoji": "🧱"
  },
  {
    "number": 21,
    "nameZh": "鈧",
    "symbol": "Sc",
    "nameEn": "Scandium",
    "period": 4,
    "group": 3,
    "category": "過渡金屬",
    "weight": 44.956,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 22,
    "nameZh": "鈦",
    "symbol": "Ti",
    "nameEn": "Titanium",
    "period": 4,
    "group": 4,
    "category": "過渡金屬",
    "weight": 47.867,
    "summary": "兼具高強度、耐蝕與生物相容性。",
    "applications": "航太、人工植體、白色顏料。",
    "compounds": [
      "二氧化鈦 TiO₂",
      "四氯化鈦 TiCl₄"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 23,
    "nameZh": "釩",
    "symbol": "V",
    "nameEn": "Vanadium",
    "period": 4,
    "group": 5,
    "category": "過渡金屬",
    "weight": 50.944,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 24,
    "nameZh": "鉻",
    "symbol": "Cr",
    "nameEn": "Chromium",
    "period": 4,
    "group": 6,
    "category": "過渡金屬",
    "weight": 51.996,
    "summary": "常見於不鏽鋼與鍍層。",
    "applications": "不鏽鋼、鍍鉻。",
    "compounds": [
      "三氧化鉻 CrO₃",
      "氧化鉻(III) Cr₂O₃"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 25,
    "nameZh": "錳",
    "symbol": "Mn",
    "nameEn": "Manganese",
    "period": 4,
    "group": 7,
    "category": "過渡金屬",
    "weight": 54.938,
    "summary": "常見於乾電池與鋼材。",
    "applications": "電池、合金鋼。",
    "compounds": [
      "二氧化錳 MnO₂",
      "高錳酸鉀 KMnO₄"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 26,
    "nameZh": "鐵",
    "symbol": "Fe",
    "nameEn": "Iron",
    "period": 4,
    "group": 8,
    "category": "過渡金屬",
    "weight": 55.845,
    "summary": "人類文明中最重要的金屬之一，課本常見氧化還原與鏽蝕。",
    "applications": "鋼鐵、機械、建築。",
    "compounds": [
      "氧化鐵 Fe₂O₃",
      "硫酸亞鐵 FeSO₄",
      "氯化鐵 FeCl₃"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 27,
    "nameZh": "鈷",
    "symbol": "Co",
    "nameEn": "Cobalt",
    "period": 4,
    "group": 9,
    "category": "過渡金屬",
    "weight": 58.933,
    "summary": "過渡金屬，常見於磁性材料與電池。",
    "applications": "超合金、鋰電池、磁材。",
    "compounds": [
      "氧化鈷 CoO",
      "氯化鈷 CoCl₂"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 28,
    "nameZh": "鎳",
    "symbol": "Ni",
    "nameEn": "Nickel",
    "period": 4,
    "group": 10,
    "category": "過渡金屬",
    "weight": 58.693,
    "summary": "耐蝕且可做合金與催化材料。",
    "applications": "不鏽鋼、電鍍、催化劑。",
    "compounds": [
      "氧化鎳 NiO",
      "硫酸鎳 NiSO₄"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 29,
    "nameZh": "銅",
    "symbol": "Cu",
    "nameEn": "Copper",
    "period": 4,
    "group": 11,
    "category": "過渡金屬",
    "weight": 63.546,
    "summary": "導電導熱性佳，是常見的導線金屬。",
    "applications": "電線、馬達、散熱。",
    "compounds": [
      "硫酸銅 CuSO₄",
      "氧化銅 CuO",
      "氯化銅 CuCl₂"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 30,
    "nameZh": "鋅",
    "symbol": "Zn",
    "nameEn": "Zinc",
    "period": 4,
    "group": 12,
    "category": "過渡金屬",
    "weight": 65.39,
    "summary": "常用於防鏽鍍層。",
    "applications": "鍍鋅、防蝕、電池。",
    "compounds": [
      "氧化鋅 ZnO",
      "硫酸鋅 ZnSO₄",
      "氯化鋅 ZnCl₂"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 31,
    "nameZh": "鎵",
    "symbol": "Ga",
    "nameEn": "Gallium",
    "period": 4,
    "group": 13,
    "category": "後過渡金屬",
    "weight": 69.723,
    "summary": "金屬性明顯，常作為結構材料、鍍層或電子材料。",
    "applications": "常見於焊料、鍍層、電子封裝與光電元件。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硫化物"
    ],
    "imageEmoji": "🪙"
  },
  {
    "number": 32,
    "nameZh": "鍺",
    "symbol": "Ge",
    "nameEn": "Germanium",
    "period": 4,
    "group": 14,
    "category": "類金屬",
    "weight": 72.61,
    "summary": "兼具金屬與非金屬部分性質，常見於半導體與材料科學。",
    "applications": "常見於半導體、玻璃、熱電與阻燃材料。",
    "compounds": [
      "氧化物",
      "鹵化物",
      "酸鹽"
    ],
    "imageEmoji": "💠"
  },
  {
    "number": 33,
    "nameZh": "砷",
    "symbol": "As",
    "nameEn": "Arsenic",
    "period": 4,
    "group": 15,
    "category": "類金屬",
    "weight": 74.922,
    "summary": "兼具金屬與非金屬部分性質，常見於半導體與材料科學。",
    "applications": "常見於半導體、玻璃、熱電與阻燃材料。",
    "compounds": [
      "氧化物",
      "鹵化物",
      "酸鹽"
    ],
    "imageEmoji": "💠"
  },
  {
    "number": 34,
    "nameZh": "硒",
    "symbol": "Se",
    "nameEn": "Selenium",
    "period": 4,
    "group": 16,
    "category": "非金屬",
    "weight": 78.96,
    "summary": "常見於生命化學、氣體反應與共價鍵單元。",
    "applications": "常見於燃料、化工原料、生物分子與環境化學。",
    "compounds": [
      "氧化物",
      "氫化物",
      "酸類"
    ],
    "imageEmoji": "🌿"
  },
  {
    "number": 35,
    "nameZh": "溴",
    "symbol": "Br",
    "nameEn": "Bromine",
    "period": 4,
    "group": 17,
    "category": "鹵素",
    "weight": 79.904,
    "summary": "室溫下為液體非金屬。",
    "applications": "阻燃劑、攝影化學、消毒。",
    "compounds": [
      "溴化銀 AgBr",
      "氫溴酸 HBr"
    ],
    "imageEmoji": "🧪"
  },
  {
    "number": 36,
    "nameZh": "氪",
    "symbol": "Kr",
    "nameEn": "Krypton",
    "period": 4,
    "group": 18,
    "category": "惰性氣體",
    "weight": 83.8,
    "summary": "最外層電子殼接近穩定，化學反應性低。",
    "applications": "常見於照明、保護氣氛、低溫與高科技設備。",
    "compounds": [
      "元素單質",
      "少數特殊氟化物"
    ],
    "imageEmoji": "💡"
  },
  {
    "number": 37,
    "nameZh": "銣",
    "symbol": "Rb",
    "nameEn": "Rubidium",
    "period": 5,
    "group": 1,
    "category": "鹼金屬",
    "weight": 85.468,
    "summary": "屬第 1 族，反應性高，常以離子化合物形式存在。課堂常用來比較金屬活性與週期趨勢。",
    "applications": "常見於化工原料、電池、照明或特殊合金。",
    "compounds": [
      "氯化物",
      "氫氧化物",
      "碳酸鹽"
    ],
    "imageEmoji": "🔋"
  },
  {
    "number": 38,
    "nameZh": "鍶",
    "symbol": "Sr",
    "nameEn": "Strontium",
    "period": 5,
    "group": 2,
    "category": "鹼土金屬",
    "weight": 87.62,
    "summary": "屬第 2 族，常形成 +2 價離子，與礦物、骨骼或建材議題常有關。",
    "applications": "常見於合金、建材、醫藥與電子材料。",
    "compounds": [
      "氧化物",
      "碳酸鹽",
      "硫酸鹽"
    ],
    "imageEmoji": "🧱"
  },
  {
    "number": 39,
    "nameZh": "釔",
    "symbol": "Y",
    "nameEn": "Yttrium",
    "period": 5,
    "group": 3,
    "category": "過渡金屬",
    "weight": 88.906,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 40,
    "nameZh": "鋯",
    "symbol": "Zr",
    "nameEn": "Zirconium",
    "period": 5,
    "group": 4,
    "category": "過渡金屬",
    "weight": 91.224,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 41,
    "nameZh": "鈮",
    "symbol": "Nb",
    "nameEn": "Niobium",
    "period": 5,
    "group": 5,
    "category": "過渡金屬",
    "weight": 92.906,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 42,
    "nameZh": "鉬",
    "symbol": "Mo",
    "nameEn": "Molybdenum",
    "period": 5,
    "group": 6,
    "category": "過渡金屬",
    "weight": 95.94,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 43,
    "nameZh": "鎝",
    "symbol": "Tc",
    "nameEn": "Technetium",
    "period": 5,
    "group": 7,
    "category": "過渡金屬",
    "weight": 98.0,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 44,
    "nameZh": "釕",
    "symbol": "Ru",
    "nameEn": "Ruthenium",
    "period": 5,
    "group": 8,
    "category": "過渡金屬",
    "weight": 101.07,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 45,
    "nameZh": "銠",
    "symbol": "Rh",
    "nameEn": "Rhodium",
    "period": 5,
    "group": 9,
    "category": "過渡金屬",
    "weight": 102.906,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 46,
    "nameZh": "鈀",
    "symbol": "Pd",
    "nameEn": "Palladium",
    "period": 5,
    "group": 10,
    "category": "過渡金屬",
    "weight": 106.42,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 47,
    "nameZh": "銀",
    "symbol": "Ag",
    "nameEn": "Silver",
    "period": 5,
    "group": 11,
    "category": "過渡金屬",
    "weight": 107.868,
    "summary": "導電性與導熱性優良，也具抗菌性。",
    "applications": "飾品、導電膠、抗菌材料。",
    "compounds": [
      "硝酸銀 AgNO₃",
      "氯化銀 AgCl"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 48,
    "nameZh": "鎘",
    "symbol": "Cd",
    "nameEn": "Cadmium",
    "period": 5,
    "group": 12,
    "category": "過渡金屬",
    "weight": 112.412,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 49,
    "nameZh": "銦",
    "symbol": "In",
    "nameEn": "Indium",
    "period": 5,
    "group": 13,
    "category": "後過渡金屬",
    "weight": 114.818,
    "summary": "金屬性明顯，常作為結構材料、鍍層或電子材料。",
    "applications": "常見於焊料、鍍層、電子封裝與光電元件。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硫化物"
    ],
    "imageEmoji": "🪙"
  },
  {
    "number": 50,
    "nameZh": "錫",
    "symbol": "Sn",
    "nameEn": "Tin",
    "period": 5,
    "group": 14,
    "category": "後過渡金屬",
    "weight": 118.711,
    "summary": "常用於焊料與鍍層。",
    "applications": "焊接、鍍錫罐、合金。",
    "compounds": [
      "二氧化錫 SnO₂",
      "氯化亞錫 SnCl₂"
    ],
    "imageEmoji": "🪙"
  },
  {
    "number": 51,
    "nameZh": "銻",
    "symbol": "Sb",
    "nameEn": "Antimony",
    "period": 5,
    "group": 15,
    "category": "類金屬",
    "weight": 121.76,
    "summary": "兼具金屬與非金屬部分性質，常見於半導體與材料科學。",
    "applications": "常見於半導體、玻璃、熱電與阻燃材料。",
    "compounds": [
      "氧化物",
      "鹵化物",
      "酸鹽"
    ],
    "imageEmoji": "💠"
  },
  {
    "number": 52,
    "nameZh": "碲",
    "symbol": "Te",
    "nameEn": "Tellurium",
    "period": 5,
    "group": 16,
    "category": "類金屬",
    "weight": 127.6,
    "summary": "兼具金屬與非金屬部分性質，常見於半導體與材料科學。",
    "applications": "常見於半導體、玻璃、熱電與阻燃材料。",
    "compounds": [
      "氧化物",
      "鹵化物",
      "酸鹽"
    ],
    "imageEmoji": "💠"
  },
  {
    "number": 53,
    "nameZh": "碘",
    "symbol": "I",
    "nameEn": "Iodine",
    "period": 5,
    "group": 17,
    "category": "鹵素",
    "weight": 126.904,
    "summary": "人體微量必需元素之一，甲狀腺議題常提及。",
    "applications": "消毒、顯影、醫療造影。",
    "compounds": [
      "碘化鉀 KI",
      "碘酒",
      "碘酸鹽"
    ],
    "imageEmoji": "🧪"
  },
  {
    "number": 54,
    "nameZh": "氙",
    "symbol": "Xe",
    "nameEn": "Xenon",
    "period": 5,
    "group": 18,
    "category": "惰性氣體",
    "weight": 131.29,
    "summary": "惰性氣體，但在特定條件下可形成化合物。",
    "applications": "閃光燈、麻醉研究、離子推進。",
    "compounds": [
      "六氟化氙 XeF₆"
    ],
    "imageEmoji": "💡"
  },
  {
    "number": 55,
    "nameZh": "銫",
    "symbol": "Cs",
    "nameEn": "Cesium",
    "period": 6,
    "group": 1,
    "category": "鹼金屬",
    "weight": 132.905,
    "summary": "屬第 1 族，反應性高，常以離子化合物形式存在。課堂常用來比較金屬活性與週期趨勢。",
    "applications": "常見於化工原料、電池、照明或特殊合金。",
    "compounds": [
      "氯化物",
      "氫氧化物",
      "碳酸鹽"
    ],
    "imageEmoji": "🔋"
  },
  {
    "number": 56,
    "nameZh": "鋇",
    "symbol": "Ba",
    "nameEn": "Barium",
    "period": 6,
    "group": 2,
    "category": "鹼土金屬",
    "weight": 137.328,
    "summary": "屬第 2 族，常形成 +2 價離子，與礦物、骨骼或建材議題常有關。",
    "applications": "常見於合金、建材、醫藥與電子材料。",
    "compounds": [
      "氧化物",
      "碳酸鹽",
      "硫酸鹽"
    ],
    "imageEmoji": "🧱"
  },
  {
    "number": 57,
    "nameZh": "鑭",
    "symbol": "La",
    "nameEn": "Lanthanum",
    "period": 8,
    "group": 3,
    "category": "鑭系元素",
    "weight": 138.906,
    "summary": "稀土元素的一部分，常見於磁材、螢光與光學材料。",
    "applications": "常見於磁鐵、拋光粉、螢光體與雷射材料。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硝酸鹽"
    ],
    "imageEmoji": "🧲"
  },
  {
    "number": 58,
    "nameZh": "鈰",
    "symbol": "Ce",
    "nameEn": "Cerium",
    "period": 8,
    "group": 4,
    "category": "鑭系元素",
    "weight": 140.116,
    "summary": "稀土元素的一部分，常見於磁材、螢光與光學材料。",
    "applications": "常見於磁鐵、拋光粉、螢光體與雷射材料。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硝酸鹽"
    ],
    "imageEmoji": "🧲"
  },
  {
    "number": 59,
    "nameZh": "鐠",
    "symbol": "Pr",
    "nameEn": "Praseodymium",
    "period": 8,
    "group": 5,
    "category": "鑭系元素",
    "weight": 140.908,
    "summary": "稀土元素的一部分，常見於磁材、螢光與光學材料。",
    "applications": "常見於磁鐵、拋光粉、螢光體與雷射材料。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硝酸鹽"
    ],
    "imageEmoji": "🧲"
  },
  {
    "number": 60,
    "nameZh": "釹",
    "symbol": "Nd",
    "nameEn": "Neodymium",
    "period": 8,
    "group": 6,
    "category": "鑭系元素",
    "weight": 144.24,
    "summary": "稀土元素的一部分，常見於磁材、螢光與光學材料。",
    "applications": "常見於磁鐵、拋光粉、螢光體與雷射材料。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硝酸鹽"
    ],
    "imageEmoji": "🧲"
  },
  {
    "number": 61,
    "nameZh": "鉕",
    "symbol": "Pm",
    "nameEn": "Promethium",
    "period": 8,
    "group": 7,
    "category": "鑭系元素",
    "weight": 145.0,
    "summary": "稀土元素的一部分，常見於磁材、螢光與光學材料。",
    "applications": "常見於磁鐵、拋光粉、螢光體與雷射材料。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硝酸鹽"
    ],
    "imageEmoji": "🧲"
  },
  {
    "number": 62,
    "nameZh": "釤",
    "symbol": "Sm",
    "nameEn": "Samarium",
    "period": 8,
    "group": 8,
    "category": "鑭系元素",
    "weight": 150.36,
    "summary": "稀土元素的一部分，常見於磁材、螢光與光學材料。",
    "applications": "常見於磁鐵、拋光粉、螢光體與雷射材料。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硝酸鹽"
    ],
    "imageEmoji": "🧲"
  },
  {
    "number": 63,
    "nameZh": "銪",
    "symbol": "Eu",
    "nameEn": "Europium",
    "period": 8,
    "group": 9,
    "category": "鑭系元素",
    "weight": 151.964,
    "summary": "稀土元素的一部分，常見於磁材、螢光與光學材料。",
    "applications": "常見於磁鐵、拋光粉、螢光體與雷射材料。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硝酸鹽"
    ],
    "imageEmoji": "🧲"
  },
  {
    "number": 64,
    "nameZh": "釓",
    "symbol": "Gd",
    "nameEn": "Gadolinium",
    "period": 8,
    "group": 10,
    "category": "鑭系元素",
    "weight": 157.25,
    "summary": "稀土元素的一部分，常見於磁材、螢光與光學材料。",
    "applications": "常見於磁鐵、拋光粉、螢光體與雷射材料。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硝酸鹽"
    ],
    "imageEmoji": "🧲"
  },
  {
    "number": 65,
    "nameZh": "鋱",
    "symbol": "Tb",
    "nameEn": "Terbium",
    "period": 8,
    "group": 11,
    "category": "鑭系元素",
    "weight": 158.925,
    "summary": "稀土元素的一部分，常見於磁材、螢光與光學材料。",
    "applications": "常見於磁鐵、拋光粉、螢光體與雷射材料。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硝酸鹽"
    ],
    "imageEmoji": "🧲"
  },
  {
    "number": 66,
    "nameZh": "鏑",
    "symbol": "Dy",
    "nameEn": "Dysprosium",
    "period": 8,
    "group": 12,
    "category": "鑭系元素",
    "weight": 162.5,
    "summary": "稀土元素的一部分，常見於磁材、螢光與光學材料。",
    "applications": "常見於磁鐵、拋光粉、螢光體與雷射材料。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硝酸鹽"
    ],
    "imageEmoji": "🧲"
  },
  {
    "number": 67,
    "nameZh": "鈥",
    "symbol": "Ho",
    "nameEn": "Holmium",
    "period": 8,
    "group": 13,
    "category": "鑭系元素",
    "weight": 164.93,
    "summary": "稀土元素的一部分，常見於磁材、螢光與光學材料。",
    "applications": "常見於磁鐵、拋光粉、螢光體與雷射材料。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硝酸鹽"
    ],
    "imageEmoji": "🧲"
  },
  {
    "number": 68,
    "nameZh": "鉺",
    "symbol": "Er",
    "nameEn": "Erbium",
    "period": 8,
    "group": 14,
    "category": "鑭系元素",
    "weight": 167.26,
    "summary": "稀土元素的一部分，常見於磁材、螢光與光學材料。",
    "applications": "常見於磁鐵、拋光粉、螢光體與雷射材料。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硝酸鹽"
    ],
    "imageEmoji": "🧲"
  },
  {
    "number": 69,
    "nameZh": "銩",
    "symbol": "Tm",
    "nameEn": "Thulium",
    "period": 8,
    "group": 15,
    "category": "鑭系元素",
    "weight": 168.934,
    "summary": "稀土元素的一部分，常見於磁材、螢光與光學材料。",
    "applications": "常見於磁鐵、拋光粉、螢光體與雷射材料。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硝酸鹽"
    ],
    "imageEmoji": "🧲"
  },
  {
    "number": 70,
    "nameZh": "鐿",
    "symbol": "Yb",
    "nameEn": "Ytterbium",
    "period": 8,
    "group": 16,
    "category": "鑭系元素",
    "weight": 173.04,
    "summary": "稀土元素的一部分，常見於磁材、螢光與光學材料。",
    "applications": "常見於磁鐵、拋光粉、螢光體與雷射材料。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硝酸鹽"
    ],
    "imageEmoji": "🧲"
  },
  {
    "number": 71,
    "nameZh": "鎦",
    "symbol": "Lu",
    "nameEn": "Lutetium",
    "period": 8,
    "group": 17,
    "category": "鑭系元素",
    "weight": 174.967,
    "summary": "稀土元素的一部分，常見於磁材、螢光與光學材料。",
    "applications": "常見於磁鐵、拋光粉、螢光體與雷射材料。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硝酸鹽"
    ],
    "imageEmoji": "🧲"
  },
  {
    "number": 72,
    "nameZh": "鉿",
    "symbol": "Hf",
    "nameEn": "Hafnium",
    "period": 6,
    "group": 4,
    "category": "過渡金屬",
    "weight": 178.49,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 73,
    "nameZh": "鉭",
    "symbol": "Ta",
    "nameEn": "Tantalum",
    "period": 6,
    "group": 5,
    "category": "過渡金屬",
    "weight": 180.948,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 74,
    "nameZh": "鎢",
    "symbol": "W",
    "nameEn": "Tungsten",
    "period": 6,
    "group": 6,
    "category": "過渡金屬",
    "weight": 183.84,
    "summary": "熔點極高的金屬。",
    "applications": "燈絲、硬質合金、耐高溫工具。",
    "compounds": [
      "三氧化鎢 WO₃",
      "碳化鎢 WC"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 75,
    "nameZh": "錸",
    "symbol": "Re",
    "nameEn": "Rhenium",
    "period": 6,
    "group": 7,
    "category": "過渡金屬",
    "weight": 186.207,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 76,
    "nameZh": "鋨",
    "symbol": "Os",
    "nameEn": "Osmium",
    "period": 6,
    "group": 8,
    "category": "過渡金屬",
    "weight": 190.23,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 77,
    "nameZh": "銥",
    "symbol": "Ir",
    "nameEn": "Iridium",
    "period": 6,
    "group": 9,
    "category": "過渡金屬",
    "weight": 192.217,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 78,
    "nameZh": "鉑",
    "symbol": "Pt",
    "nameEn": "Platinum",
    "period": 6,
    "group": 10,
    "category": "過渡金屬",
    "weight": 195.078,
    "summary": "穩定且具催化能力。",
    "applications": "汽車觸媒、實驗電極、抗癌藥相關。",
    "compounds": [
      "氯鉑酸 H₂PtCl₆"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 79,
    "nameZh": "金",
    "symbol": "Au",
    "nameEn": "Gold",
    "period": 6,
    "group": 11,
    "category": "過渡金屬",
    "weight": 196.967,
    "summary": "化學性質穩定且具延展性。",
    "applications": "首飾、電子接點、金融儲值。",
    "compounds": [
      "氯金酸 HAuCl₄"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 80,
    "nameZh": "汞",
    "symbol": "Hg",
    "nameEn": "Mercury",
    "period": 6,
    "group": 12,
    "category": "過渡金屬",
    "weight": 200.59,
    "summary": "室溫液態金屬，需特別注意毒性。",
    "applications": "溫度計（歷史）、螢光燈、電化學。",
    "compounds": [
      "氧化汞 HgO",
      "氯化汞 HgCl₂"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 81,
    "nameZh": "鉈",
    "symbol": "Tl",
    "nameEn": "Thallium",
    "period": 6,
    "group": 13,
    "category": "後過渡金屬",
    "weight": 204.383,
    "summary": "金屬性明顯，常作為結構材料、鍍層或電子材料。",
    "applications": "常見於焊料、鍍層、電子封裝與光電元件。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硫化物"
    ],
    "imageEmoji": "🪙"
  },
  {
    "number": 82,
    "nameZh": "鉛",
    "symbol": "Pb",
    "nameEn": "Lead",
    "period": 6,
    "group": 14,
    "category": "後過渡金屬",
    "weight": 207.2,
    "summary": "重金屬，已逐步減少一般用途。",
    "applications": "蓄電池、輻射遮蔽。",
    "compounds": [
      "硫酸鉛 PbSO₄",
      "氧化鉛 PbO"
    ],
    "imageEmoji": "🪙"
  },
  {
    "number": 83,
    "nameZh": "鉍",
    "symbol": "Bi",
    "nameEn": "Bismuth",
    "period": 6,
    "group": 15,
    "category": "後過渡金屬",
    "weight": 208.98,
    "summary": "金屬性明顯，常作為結構材料、鍍層或電子材料。",
    "applications": "常見於焊料、鍍層、電子封裝與光電元件。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硫化物"
    ],
    "imageEmoji": "🪙"
  },
  {
    "number": 84,
    "nameZh": "釙",
    "symbol": "Po",
    "nameEn": "Polonium",
    "period": 6,
    "group": 16,
    "category": "類金屬",
    "weight": 209.0,
    "summary": "兼具金屬與非金屬部分性質，常見於半導體與材料科學。",
    "applications": "常見於半導體、玻璃、熱電與阻燃材料。",
    "compounds": [
      "氧化物",
      "鹵化物",
      "酸鹽"
    ],
    "imageEmoji": "💠"
  },
  {
    "number": 85,
    "nameZh": "砈",
    "symbol": "At",
    "nameEn": "Astatine",
    "period": 6,
    "group": 17,
    "category": "鹵素",
    "weight": 210.0,
    "summary": "第 17 族，常形成 -1 價陰離子，反應性高。",
    "applications": "常見於消毒、材料合成、照相與醫藥。",
    "compounds": [
      "鹽類",
      "氫鹵酸",
      "有機鹵化物"
    ],
    "imageEmoji": "🧪"
  },
  {
    "number": 86,
    "nameZh": "氡",
    "symbol": "Rn",
    "nameEn": "Radon",
    "period": 6,
    "group": 18,
    "category": "惰性氣體",
    "weight": 222.0,
    "summary": "最外層電子殼接近穩定，化學反應性低。",
    "applications": "常見於照明、保護氣氛、低溫與高科技設備。",
    "compounds": [
      "元素單質",
      "少數特殊氟化物"
    ],
    "imageEmoji": "💡"
  },
  {
    "number": 87,
    "nameZh": "鍅",
    "symbol": "Fr",
    "nameEn": "Francium",
    "period": 7,
    "group": 1,
    "category": "鹼金屬",
    "weight": 223.0,
    "summary": "屬第 1 族，反應性高，常以離子化合物形式存在。課堂常用來比較金屬活性與週期趨勢。",
    "applications": "常見於化工原料、電池、照明或特殊合金。",
    "compounds": [
      "氯化物",
      "氫氧化物",
      "碳酸鹽"
    ],
    "imageEmoji": "🔋"
  },
  {
    "number": 88,
    "nameZh": "鐳",
    "symbol": "Ra",
    "nameEn": "Radium",
    "period": 7,
    "group": 2,
    "category": "鹼土金屬",
    "weight": 226.0,
    "summary": "屬第 2 族，常形成 +2 價離子，與礦物、骨骼或建材議題常有關。",
    "applications": "常見於合金、建材、醫藥與電子材料。",
    "compounds": [
      "氧化物",
      "碳酸鹽",
      "硫酸鹽"
    ],
    "imageEmoji": "🧱"
  },
  {
    "number": 89,
    "nameZh": "錒",
    "symbol": "Ac",
    "nameEn": "Actinium",
    "period": 9,
    "group": 3,
    "category": "錒系元素",
    "weight": 227.0,
    "summary": "多為放射性元素，課堂多著重核能與放射性概念。",
    "applications": "主要用於核能、偵測與研究。",
    "compounds": [
      "氧化物",
      "氟化物",
      "硝酸鹽"
    ],
    "imageEmoji": "☢️"
  },
  {
    "number": 90,
    "nameZh": "釷",
    "symbol": "Th",
    "nameEn": "Thorium",
    "period": 9,
    "group": 4,
    "category": "錒系元素",
    "weight": 232.038,
    "summary": "多為放射性元素，課堂多著重核能與放射性概念。",
    "applications": "主要用於核能、偵測與研究。",
    "compounds": [
      "氧化物",
      "氟化物",
      "硝酸鹽"
    ],
    "imageEmoji": "☢️"
  },
  {
    "number": 91,
    "nameZh": "鏷",
    "symbol": "Pa",
    "nameEn": "Protactinium",
    "period": 9,
    "group": 5,
    "category": "錒系元素",
    "weight": 231.036,
    "summary": "多為放射性元素，課堂多著重核能與放射性概念。",
    "applications": "主要用於核能、偵測與研究。",
    "compounds": [
      "氧化物",
      "氟化物",
      "硝酸鹽"
    ],
    "imageEmoji": "☢️"
  },
  {
    "number": 92,
    "nameZh": "鈾",
    "symbol": "U",
    "nameEn": "Uranium",
    "period": 9,
    "group": 6,
    "category": "錒系元素",
    "weight": 238.029,
    "summary": "放射性元素，核能議題常會出現。",
    "applications": "核燃料、研究用途。",
    "compounds": [
      "二氧化鈾 UO₂",
      "六氟化鈾 UF₆"
    ],
    "imageEmoji": "☢️"
  },
  {
    "number": 93,
    "nameZh": "錼",
    "symbol": "Np",
    "nameEn": "Neptunium",
    "period": 9,
    "group": 7,
    "category": "錒系元素",
    "weight": 237.0,
    "summary": "多為放射性元素，課堂多著重核能與放射性概念。",
    "applications": "主要用於核能、偵測與研究。",
    "compounds": [
      "氧化物",
      "氟化物",
      "硝酸鹽"
    ],
    "imageEmoji": "☢️"
  },
  {
    "number": 94,
    "nameZh": "鈽",
    "symbol": "Pu",
    "nameEn": "Plutonium",
    "period": 9,
    "group": 8,
    "category": "錒系元素",
    "weight": 244.0,
    "summary": "多為放射性元素，課堂多著重核能與放射性概念。",
    "applications": "主要用於核能、偵測與研究。",
    "compounds": [
      "氧化物",
      "氟化物",
      "硝酸鹽"
    ],
    "imageEmoji": "☢️"
  },
  {
    "number": 95,
    "nameZh": "鋂",
    "symbol": "Am",
    "nameEn": "Americium",
    "period": 9,
    "group": 9,
    "category": "錒系元素",
    "weight": 243.0,
    "summary": "多為放射性元素，課堂多著重核能與放射性概念。",
    "applications": "主要用於核能、偵測與研究。",
    "compounds": [
      "氧化物",
      "氟化物",
      "硝酸鹽"
    ],
    "imageEmoji": "☢️"
  },
  {
    "number": 96,
    "nameZh": "鋦",
    "symbol": "Cm",
    "nameEn": "Curium",
    "period": 9,
    "group": 10,
    "category": "錒系元素",
    "weight": 247.0,
    "summary": "多為放射性元素，課堂多著重核能與放射性概念。",
    "applications": "主要用於核能、偵測與研究。",
    "compounds": [
      "氧化物",
      "氟化物",
      "硝酸鹽"
    ],
    "imageEmoji": "☢️"
  },
  {
    "number": 97,
    "nameZh": "鉳",
    "symbol": "Bk",
    "nameEn": "Berkelium",
    "period": 9,
    "group": 11,
    "category": "錒系元素",
    "weight": 247.0,
    "summary": "多為放射性元素，課堂多著重核能與放射性概念。",
    "applications": "主要用於核能、偵測與研究。",
    "compounds": [
      "氧化物",
      "氟化物",
      "硝酸鹽"
    ],
    "imageEmoji": "☢️"
  },
  {
    "number": 98,
    "nameZh": "鉲",
    "symbol": "Cf",
    "nameEn": "Californium",
    "period": 9,
    "group": 12,
    "category": "錒系元素",
    "weight": 251.0,
    "summary": "多為放射性元素，課堂多著重核能與放射性概念。",
    "applications": "主要用於核能、偵測與研究。",
    "compounds": [
      "氧化物",
      "氟化物",
      "硝酸鹽"
    ],
    "imageEmoji": "☢️"
  },
  {
    "number": 99,
    "nameZh": "鑀",
    "symbol": "Es",
    "nameEn": "Einsteinium",
    "period": 9,
    "group": 13,
    "category": "錒系元素",
    "weight": 252.0,
    "summary": "多為放射性元素，課堂多著重核能與放射性概念。",
    "applications": "主要用於核能、偵測與研究。",
    "compounds": [
      "氧化物",
      "氟化物",
      "硝酸鹽"
    ],
    "imageEmoji": "☢️"
  },
  {
    "number": 100,
    "nameZh": "鐨",
    "symbol": "Fm",
    "nameEn": "Fermium",
    "period": 9,
    "group": 14,
    "category": "錒系元素",
    "weight": 257.0,
    "summary": "多為放射性元素，課堂多著重核能與放射性概念。",
    "applications": "主要用於核能、偵測與研究。",
    "compounds": [
      "氧化物",
      "氟化物",
      "硝酸鹽"
    ],
    "imageEmoji": "☢️"
  },
  {
    "number": 101,
    "nameZh": "鍆",
    "symbol": "Md",
    "nameEn": "Mendelevium",
    "period": 9,
    "group": 15,
    "category": "錒系元素",
    "weight": 258.0,
    "summary": "多為放射性元素，課堂多著重核能與放射性概念。",
    "applications": "主要用於核能、偵測與研究。",
    "compounds": [
      "氧化物",
      "氟化物",
      "硝酸鹽"
    ],
    "imageEmoji": "☢️"
  },
  {
    "number": 102,
    "nameZh": "鍩",
    "symbol": "No",
    "nameEn": "Nobelium",
    "period": 9,
    "group": 16,
    "category": "錒系元素",
    "weight": 259.0,
    "summary": "多為放射性元素，課堂多著重核能與放射性概念。",
    "applications": "主要用於核能、偵測與研究。",
    "compounds": [
      "氧化物",
      "氟化物",
      "硝酸鹽"
    ],
    "imageEmoji": "☢️"
  },
  {
    "number": 103,
    "nameZh": "鐒",
    "symbol": "Lr",
    "nameEn": "Lawrencium",
    "period": 9,
    "group": 17,
    "category": "錒系元素",
    "weight": 262.0,
    "summary": "多為放射性元素，課堂多著重核能與放射性概念。",
    "applications": "主要用於核能、偵測與研究。",
    "compounds": [
      "氧化物",
      "氟化物",
      "硝酸鹽"
    ],
    "imageEmoji": "☢️"
  },
  {
    "number": 104,
    "nameZh": "鑪",
    "symbol": "Rf",
    "nameEn": "Rutherfordium",
    "period": 7,
    "group": 4,
    "category": "過渡金屬",
    "weight": 267.0,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 105,
    "nameZh": "𨧀",
    "symbol": "Db",
    "nameEn": "Dubnium",
    "period": 7,
    "group": 5,
    "category": "過渡金屬",
    "weight": 268.0,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 106,
    "nameZh": "𨭎",
    "symbol": "Sg",
    "nameEn": "Seaborgium",
    "period": 7,
    "group": 6,
    "category": "過渡金屬",
    "weight": 269.0,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 107,
    "nameZh": "𨨏",
    "symbol": "Bh",
    "nameEn": "Bohrium",
    "period": 7,
    "group": 7,
    "category": "過渡金屬",
    "weight": 270.0,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 108,
    "nameZh": "𨭆",
    "symbol": "Hs",
    "nameEn": "Hassium",
    "period": 7,
    "group": 8,
    "category": "過渡金屬",
    "weight": 269.0,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 109,
    "nameZh": "䥑",
    "symbol": "Mt",
    "nameEn": "Meitnerium",
    "period": 7,
    "group": 9,
    "category": "過渡金屬",
    "weight": 278.0,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 110,
    "nameZh": "鐽",
    "symbol": "Ds",
    "nameEn": "Darmstadtium",
    "period": 7,
    "group": 10,
    "category": "過渡金屬",
    "weight": 281.0,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 111,
    "nameZh": "錀",
    "symbol": "Rg",
    "nameEn": "Roentgenium",
    "period": 7,
    "group": 11,
    "category": "過渡金屬",
    "weight": 281.0,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 112,
    "nameZh": "鎶",
    "symbol": "Cn",
    "nameEn": "Copernicium",
    "period": 7,
    "group": 12,
    "category": "過渡金屬",
    "weight": 285.0,
    "summary": "位於 d 區，常見多種氧化態，和催化、電鍍、合金、顏色變化等主題關聯高。",
    "applications": "常見於鋼材、催化劑、鍍層、電池與高性能材料。",
    "compounds": [
      "氧化物",
      "硫酸鹽",
      "氯化物"
    ],
    "imageEmoji": "⚙️"
  },
  {
    "number": 113,
    "nameZh": "鉨",
    "symbol": "Nh",
    "nameEn": "Nihonium",
    "period": 7,
    "group": 13,
    "category": "後過渡金屬",
    "weight": 284.0,
    "summary": "金屬性明顯，常作為結構材料、鍍層或電子材料。",
    "applications": "常見於焊料、鍍層、電子封裝與光電元件。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硫化物"
    ],
    "imageEmoji": "🪙"
  },
  {
    "number": 114,
    "nameZh": "鈇",
    "symbol": "Fl",
    "nameEn": "Flerovium",
    "period": 7,
    "group": 14,
    "category": "後過渡金屬",
    "weight": 289.0,
    "summary": "金屬性明顯，常作為結構材料、鍍層或電子材料。",
    "applications": "常見於焊料、鍍層、電子封裝與光電元件。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硫化物"
    ],
    "imageEmoji": "🪙"
  },
  {
    "number": 115,
    "nameZh": "鏌",
    "symbol": "Mc",
    "nameEn": "Moscovium",
    "period": 7,
    "group": 15,
    "category": "後過渡金屬",
    "weight": 288.0,
    "summary": "金屬性明顯，常作為結構材料、鍍層或電子材料。",
    "applications": "常見於焊料、鍍層、電子封裝與光電元件。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硫化物"
    ],
    "imageEmoji": "🪙"
  },
  {
    "number": 116,
    "nameZh": "鉝",
    "symbol": "Lv",
    "nameEn": "Livermorium",
    "period": 7,
    "group": 16,
    "category": "後過渡金屬",
    "weight": 293.0,
    "summary": "金屬性明顯，常作為結構材料、鍍層或電子材料。",
    "applications": "常見於焊料、鍍層、電子封裝與光電元件。",
    "compounds": [
      "氧化物",
      "氯化物",
      "硫化物"
    ],
    "imageEmoji": "🪙"
  },
  {
    "number": 117,
    "nameZh": "Tennessine",
    "symbol": "Ts",
    "nameEn": "Tennessine",
    "period": 7,
    "group": 17,
    "category": "鹵素",
    "weight": 292.0,
    "summary": "第 17 族，常形成 -1 價陰離子，反應性高。",
    "applications": "常見於消毒、材料合成、照相與醫藥。",
    "compounds": [
      "鹽類",
      "氫鹵酸",
      "有機鹵化物"
    ],
    "imageEmoji": "🧪"
  },
  {
    "number": 118,
    "nameZh": "鿫",
    "symbol": "Og",
    "nameEn": "Oganesson",
    "period": 7,
    "group": 18,
    "category": "惰性氣體",
    "weight": 294.0,
    "summary": "目前已知元素中原子序最大的元素之一，屬超重元素，校園課程多作認識即可。",
    "applications": "主要用於基礎科學研究。",
    "compounds": [
      "尚無常見民生化合物"
    ],
    "imageEmoji": "💡"
  }
];