# 🎯 孩子獎勵抽獎輪盤

一個專為家長設計的互動式抽獎輪盤應用程式，用於激勵孩子的良好行為。透過有趣的抽獎方式，讓孩子在完成任務或表現良好時獲得隨機獎勵，增加教育的趣味性和驚喜感。

## ✨ 特色功能

- 🎨 **豐富的視覺效果**：採用彩色漸層背景和多彩輪盤設計，吸引孩子注意力
- 🎡 **流暢的轉盤動畫**：使用 cubic-bezier 緩動函數實現自然的減速效果
- ⚙️ **自訂獎勵項目**：可新增、刪除和管理獎勵項目（2-12 個項目）
- 🎁 **預設獎勵範例**：內建多種獎勵選項（獎勵金、額外點心、選擇晚餐等）
- 📱 **響應式設計**：支援桌面和行動裝置，隨時隨地使用
- 🔄 **重置功能**：輕鬆將輪盤重置到初始位置
- 📝 **獎勵記錄表**：附帶可列印的 PDF 記錄表，追蹤孩子的良好行為

## 🛠️ 技術堆疊

- **前端框架**：React 19.1.0
- **建置工具**：Vite 6.3.5
- **樣式方案**：
  - Tailwind CSS 4.1.7
  - CSS Modules
  - Framer Motion（動畫效果）
- **UI 元件庫**：
  - Radix UI（無障礙元件）
  - Lucide React（圖示）
- **表單處理**：React Hook Form + Zod
- **包管理器**：pnpm 10.4.1

## 📦 安裝步驟

### 前置需求

- Node.js 18+
- pnpm 10+（推薦）或 npm/yarn

### 安裝專案

```bash
# 複製專案
git clone https://github.com/tinginde/lucky-wheel-kids.git
cd lucky-wheel-kids

# 進入應用程式目錄
cd lucky-wheel

# 安裝依賴套件
pnpm install
# 或使用 npm
npm install
```

## 🚀 使用方式

### 開發模式

```bash
# 啟動開發伺服器
pnpm dev
# 或
npm run dev
```

應用程式將在 `http://localhost:5173` 執行

### 建置生產版本

```bash
# 建置專案
pnpm build
# 或
npm run build

# 預覽建置結果
pnpm preview
# 或
npm run preview
```

建置檔案將輸出到 `dist/` 目錄

## 📖 使用說明

1. **新增獎勵項目**
   - 在右側「獎勵項目設定」面板輸入新獎勵
   - 按下 Enter 或點擊 ➕ 按鈕新增
   - 最多可新增 12 個項目

2. **移除獎勵項目**
   - 點擊項目右側的垃圾桶圖示
   - 至少需保留 2 個項目

3. **開始抽獎**
   - 點擊「開始抽獎！」按鈕
   - 輪盤將旋轉 5-10 圈後停止
   - 4 秒後顯示中獎結果

4. **重置輪盤**
   - 點擊「重置」按鈕讓輪盤回到初始位置

## 📁 專案結構

```
lucky-wheel-kids/
├── lucky-wheel/                 # 主應用程式
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/              # Radix UI 元件
│   │   ├── App.jsx              # 主應用程式元件
│   │   ├── main.jsx             # 應用程式入口
│   │   ├── App.css              # 主樣式
│   │   └── index.css            # 全域樣式
│   ├── dist/                    # 建置輸出目錄
│   ├── index.html               # HTML 範本
│   ├── package.json             # 專案依賴
│   └── vite.config.js           # Vite 設定
├── printable_reward_form.md     # 獎勵記錄表（Markdown）
├── printable_reward_form.pdf    # 獎勵記錄表（PDF）
└── README.md                    # 專案說明文件
```

## 🎨 預設獎勵項目

應用程式預設包含以下獎勵選項：

- 💰 獎勵金 10 元
- 💰 獎勵金 20 元
- 🍪 額外點心
- 🍽️ 選擇晚餐
- 😴 延後睡覺 30 分鐘
- 📺 看卡通 30 分鐘

你可以根據家庭需求自由調整這些項目。

## 📝 獎勵記錄表

專案包含一份可列印的獎勵記錄表（`printable_reward_form.pdf`），可用於：

- 記錄孩子的良好行為
- 追蹤獎勵發放日期
- 記錄獎勵方式（獎勵金或抽獎）
- 新增備註說明

## 🔧 開發

### 程式碼檢查

```bash
pnpm lint
# 或
npm run lint
```

### 主要依賴套件

- `react` & `react-dom`：核心框架
- `@radix-ui/*`：無障礙 UI 元件
- `tailwindcss`：樣式框架
- `framer-motion`：動畫庫
- `lucide-react`：圖示庫
- `vite`：建置工具

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request 來改進這個專案！

## 📄 授權

本專案目前未指定授權條款。

## 🙏 致謝

感謝所有開源套件的貢獻者，讓這個專案得以實現。

---

**享受與孩子互動的美好時光！** 🎉
