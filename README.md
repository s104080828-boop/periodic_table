# 元素週期表互動式學習（GitHub Pages 版）

這是一套可直接部署到 GitHub Pages 的互動式學習網站，適合國中理化到高中化學入門。

## 功能

- 中文元素週期表首頁
- 元素名稱在上、英文符號在下
- 點擊元素後進入獨立詳細頁
- 顯示原子序、原子量、族群、週期、常見應用、常見化合物
- 國中版／高中版切換
- 搜尋、族群篩選、隨機抽元素
- 闖關小測驗與學習徽章（使用 localStorage 記錄）
- 不依賴後端，可直接放在 GitHub Pages

## 建議資料來源

- IUPAC Periodic Table
- PubChem Element pages
- Royal Society of Chemistry periodic table
- 臺灣自然科學領域課程綱要與國高中理化／化學常見教學內容

## 上傳到 GitHub Pages

1. 建立新的 GitHub repository
2. 將本資料夾內所有檔案上傳到 repository 根目錄
3. 到 **Settings → Pages**
4. Source 選 **Deploy from a branch**
5. Branch 選 **main**，資料夾選 **/root**
6. 儲存後等待 GitHub 產生網站網址

## 檔案說明

- `index.html`：首頁週期表
- `detail.html`：元素詳細頁
- `data.js`：元素資料
- `script.js`：首頁互動程式
- `detail.js`：詳細頁互動程式
- `style.css`：整體樣式

## 可再擴充

- 加入每個元素的真實圖片連結或授權圖片素材
- 加入國中題庫／高中題庫分流
- 加入聲音、寶箱、積分與闖關動畫
- 加入英文模式與雙語切換
