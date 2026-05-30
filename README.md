# 🌾 KrishiMitra — AI Agriculture Assistant

AI-powered agriculture platform for Indian farmers.

---

## 📁 Exact Folder Structure

Place every file EXACTLY as shown below:

```
krishimitra/                        ← main folder (create on Desktop)
│
├── index.html                      ← ROOT
├── package.json                    ← ROOT
├── vite.config.js                  ← ROOT
├── tailwind.config.js              ← ROOT
├── postcss.config.js               ← ROOT
│
├── public/                         ← create this folder
│   └── favicon.svg
│
└── src/                            ← create this folder
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    │
    ├── components/                 ← create inside src/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   └── UIComponents.jsx
    │
    ├── pages/                      ← create inside src/
    │   ├── Home.jsx
    │   ├── Dashboard.jsx
    │   ├── CropRecommendation.jsx
    │   ├── FertilizerRecommendation.jsx
    │   ├── DiseaseDetection.jsx
    │   └── GovernmentSchemes.jsx
    │
    ├── services/                   ← create inside src/
    │   └── api.js
    │
    └── data/                       ← create inside src/
        └── dummyData.js
```

---

## 🚀 Run Commands (after placing all files)

```bash
# 1. Open terminal inside the krishimitra folder
# 2. Install dependencies (only once)
npm install

# 3. Start the app
npm run dev

# 4. Open browser at:
# http://localhost:5173
```

---

## 🔧 Troubleshooting

| Error | Fix |
|-------|-----|
| `main.jsx not found` | Check that `main.jsx` is inside `src/` folder |
| `Cannot find module` | Check all files are in correct subfolders |
| `npm install` fails | Run `npm install --legacy-peer-deps` |
| Port in use | Run `npm run dev -- --port 3000` |
| Blank white page | Press `Ctrl+Shift+R` to hard refresh |

---

## 📄 Pages & Routes

| URL | Page |
|-----|------|
| `/` | Home — Hero, features, testimonials |
| `/dashboard` | Dashboard — Weather, AI services, activity |
| `/crop-recommendation` | Crop AI — Soil form → crop result |
| `/fertilizer` | Fertilizer — NPK form → fertilizer result |
| `/disease-detection` | Disease — Drag & drop image → diagnosis |
| `/schemes` | Schemes — Filterable government cards |
