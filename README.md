# 🪙 Crypto Marketplace

A modern, responsive **cryptocurrency dashboard** built with React and Vite. The app pulls real-time market data to give users an at-a-glance view of cryptocurrency prices, trends, and market statistics — all wrapped in a clean, fast UI.

---

## 📌 Purpose

Crypto Marketplace is a single-page application (SPA) designed to help users monitor the cryptocurrency market at a glance. It provides live price data, interactive charts, and search/filter tools so users can quickly find and track the coins they care about — without needing an account or any setup beyond running the app locally.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📈 **Live Price Tracking** | Fetches and displays up-to-date cryptocurrency prices from a public market API |
| 🔍 **Search & Filter** | Quickly locate any coin by name or symbol using the search bar |
| 📊 **Interactive Charts** | Visualise historical price movement with responsive Recharts graphs |
| 💹 **Market Overview** | Summary cards showing key metrics such as market cap, 24h change, and volume |
| 🌐 **Multi-page Navigation** | Seamless routing between the dashboard, individual coin pages, and more via React Router |
| 📱 **Responsive Design** | Fully mobile-friendly layout using custom CSS |

---

## 🛠️ Tech Stack & Dependencies

### Core

| Package | Purpose |
|---|---|
| [React](https://react.dev/) | UI component library |
| [Vite](https://vitejs.dev/) | Fast development server & build tool |
| [React Router DOM](https://reactrouter.com/) | Client-side routing between pages |
| [Context API](https://react.dev/reference/react/createContext) | Global state management (currency, theme, etc.) |
| [Recharts](https://recharts.org/) | Composable charting library for price graphs |

### Dev / Tooling

| Package | Purpose |
|---|---|
| [ESLint](https://eslint.org/) | Code linting and style enforcement |
| [Vite Plugin React](https://github.com/vitejs/vite-plugin-react) | Fast Refresh & JSX transform for Vite |

> Full dependency list is available in [`package.json`](./package.json).

---

## 📁 Project Structure

```
crypto-marketplace/
├── public/             # Static assets (favicon, images)
├── src/
│   ├── components/     # Reusable UI components (Navbar, CoinCard, Chart, etc.)
│   ├── context/        # Context API providers (e.g. CryptoContext)
│   ├── pages/          # Route-level page components (Home, CoinDetail, etc.)
│   ├── App.jsx         # Root component with router setup
│   └── main.jsx        # Entry point — mounts React to the DOM
├── index.html          # HTML shell
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint rules
└── package.json        # Project metadata & dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher (comes with Node)

Verify your versions:

```bash
node -v
npm -v
```

### 1. Clone the Repository

```bash
git clone https://github.com/vel-sk98/crypto-marketplace.git
cd crypto-marketplace
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The app will be available at **https://blockquest-crypto-marketplace.vercel.app/**.

---

## 🏗️ Build for Production

To compile the app into optimised static files:

```bash
npm run build
```

Output is placed in the `dist/` folder. You can preview the production build locally with:

```bash
npm run preview
```

---

## ☁️ Deployment

The `dist/` folder contains plain static files and can be deployed to any static hosting provider.

### Deploy to Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Follow the CLI prompts. Vercel auto-detects Vite and sets the build command (`npm run build`) and output directory (`dist`) automatically.

### Deploy to Netlify

1. Push the repo to GitHub.
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import from Git**.
3. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site**.

### Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:

```bash
npm run deploy
```

> **Note:** For GitHub Pages, set `base: '/crypto-marketplace/'` in `vite.config.js` to ensure asset paths resolve correctly.

---

## 🧹 Linting

```bash
npm run lint
```

---

## 🗺️ Roadmap

- [ ] Portfolio tracker (add/remove coins, track holdings)
- [ ] Dark / light mode toggle
- [ ] Price alerts & notifications
- [ ] Unit and integration tests

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

