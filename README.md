# Solid Solutions

**African SME technology studio** — practical AI, cloud, and web systems for small and medium enterprises across Africa.

🌐 **Live site:** [solidsolutions.africa](https://solidsolutions.africa)  
📍 **Based in:** Harare, Zimbabwe  
📧 **Contact:** info@solidsolutions.africa

---

## About

Solid Solutions is a unified technology studio — not a collection of isolated tools. We combine strategy, design, automation, and infrastructure to help African SMEs look credible online, respond faster, and run cleaner operations.

**Core offerings:**

- **Web & brand presence** — fast, professional sites for SMEs, founders, NGOs, and service businesses
- **SolidAI** — sector-specific AI agents for agriculture, health, education, finance, legal, transport, energy, and retail
- **Solid Cloud** — managed workspaces and infrastructure for small teams
- **AionUI** — desktop and Telegram-connected command layer for agents and workflows

---

## Site routes

| Path | Page |
|------|------|
| `/` | Home — services, sectors, roadmap, contact |
| `/solid-llm` | SolidAI product overview |
| `/solid-llm/about` | SolidAI about |
| `/solidai` | SolidAI platform |
| `/solidai/docs` | SolidAI documentation |
| `/documentation` | General documentation |
| `/beta` | Developer beta access |
| `/gallery` | Picture gallery |
| `/coming-soon` | Coming soon |

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 |
| Routing | React Router 7 (lazy-loaded routes) |
| Animation | Motion, Lenis smooth scroll |
| Icons | Lucide React, Font Awesome |
| AI chat | Gemini API (optional, powers the site chatbot) |

---

## Local development

**Prerequisites:** Node.js 22+

```bash
# Clone the repo
git clone https://github.com/YassinAliYassin/solidsolutions.africa.git
cd solidsolutions.africa

# Install dependencies
npm install

# Copy environment template and add your Gemini key (optional — for ChatBot)
cp .env.example .env.local

# Start dev server (http://localhost:3000)
npm run dev
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server on port 3000 |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | TypeScript type check (`tsc --noEmit`) |
| `npm run clean` | Remove `dist/` |

---

## Environment variables

Create `.env.local` (or set in CI secrets):

```env
GEMINI_API_KEY=your_gemini_api_key   # Powers the on-site ChatBot
APP_URL=https://solidsolutions.africa # Used for self-referential links
```

`GEMINI_API_KEY` is injected at build time via Vite. The site runs without it; the ChatBot simply won't have AI responses.

---

## Deployment

Pushes to `main` trigger the **Auto Deploy** GitHub Actions workflow:

1. `npm ci` → `npm run build`
2. Upload `dist/` to cPanel via SFTP (`lftp`)
3. Post-deploy health check against the live domain

### Required GitHub secrets

| Secret | Purpose |
|--------|---------|
| `GEMINI_API_KEY` | Gemini API key for build-time ChatBot config |
| `FTP_PASSWORD` | SFTP password for the cPanel deploy user |

### Manual deploy trigger

```bash
gh workflow run "Auto Deploy" --repo YassinAliYassin/solidsolutions.africa
```

The `gh-pages` branch holds a static mirror for GitHub Pages. Production traffic is served from cPanel at [solidsolutions.africa](https://solidsolutions.africa).

---

## Project structure

```
solidsolutions.africa/
├── src/
│   ├── pages/          # Route-level page components
│   ├── components/     # Shared UI (Footer, ChatBot, Logo, …)
│   ├── App.tsx         # Router and lazy route definitions
│   └── index.css       # Global styles and Tailwind imports
├── public/             # Static assets (images, .htaccess)
├── dist/               # Build output (gitignored)
├── .github/workflows/  # CI/CD — Auto Deploy on push to main
└── vite.config.ts      # Vite config with manual chunk splitting
```

---

## Repository

This is the **canonical** repository for the Solid Solutions public website. Source lives on `main`; built assets deploy to cPanel automatically.

**GitHub:** [github.com/YassinAliYassin/solidsolutions.africa](https://github.com/YassinAliYassin/solidsolutions.africa)

---

## License

MIT © 2026 [Yassin Ali](https://github.com/YassinAliYassin)