# CLAUDE.md

Guidance for AI assistants (Claude Code and similar) working in this repository.
This file summarizes the architecture, workflows, and conventions so you can make
changes that fit the project. For contributor-facing prose see `README.md` and
`CONTRIBUTING.md`; this file is the fast, accurate technical reference.

## What this is

**Solid Solutions** (`solidsolutions.africa`) is the public marketing/product
website for an African SME technology studio. It is a **single-page React
application** (client-side routed) served as static files, plus **one Vercel
serverless function** that backs the on-site chat widget.

- **Live:** https://solidsolutions.africa
- **Emergency alias:** https://solidsolutions-africa.vercel.app
- **Repo:** `YassinAliYassin/solidsolutions.africa` (this is the canonical repo)

## Tech stack

| Layer      | Choice                                                        |
|------------|---------------------------------------------------------------|
| Framework  | React 19 + TypeScript                                         |
| Build      | Vite 8 (ESM, `type: module`)                                  |
| Types      | TypeScript 7 (`tsgo`) — `tsc --noEmit` only, no emit          |
| Styling    | Tailwind CSS 4 via `@tailwindcss/vite` + `@theme` in CSS      |
| Routing    | React Router 7, `BrowserRouter`, lazy-loaded routes          |
| Animation  | `motion` (Framer Motion successor), `lenis` smooth scroll     |
| Icons      | `lucide-react` (preferred) and Font Awesome (legacy pockets)  |
| Chat API   | Vercel Node serverless function → OpenRouter                 |
| Hosting    | Vercel (primary); cPanel + GitHub Pages as best-effort mirrors|

**Node.js 22+ is required** (CI pins Node 22).

## Commands

```bash
npm install          # install deps
npm run dev          # Vite dev server on http://localhost:3000 (host 0.0.0.0)
npm run build        # production build → dist/
npm run preview      # serve the built dist/ locally
npm run lint         # TypeScript type check (tsc --noEmit) — this is the "test"
npm run clean        # rm -rf dist
npm run screenshot   # capture README homepage screenshot (maintainer utility)
```

There is **no unit test runner and no ESLint/Prettier** configured. The quality
gate is `npm run lint` (type check) + `npm run build` (must succeed). Always run
both before considering a change done — CI runs exactly these.

## Repository layout

```
src/
  main.tsx            # React root; wraps <App/> in ErrorBoundary + StrictMode
  App.tsx             # BrowserRouter + all <Route>s; lazy-loads every page but Home
  ErrorBoundary.tsx   # top-level error boundary
  index.css           # Tailwind import, @theme tokens, shared utility classes
  vite-env.d.ts
  pages/              # one component per route (Home, SolidAI, SolidLLM, …)
  components/
    home/             # sections of the Home page (Hero, Offerings, Sectors, …)
    solidai/          # SolidAI-page subcomponents
    ChatBot.tsx       # the chat widget (rule-based replies + /api/chat call)
    DeferredChatBot.tsx  # idle-time lazy loader + FAB shell for ChatBot
    Footer.tsx, Logo.tsx, Reveal.tsx, MobileNav.tsx, …  # shared UI
  hooks/
    useDocumentTitle.ts  # sets "<title> | Solid Solutions" per route
api/
  chat.js             # Vercel serverless function (plain JS, see note below)
public/               # static assets copied verbatim (images, robots.txt, sitemap, .htaccess, og-image)
scripts/              # deploy.sh, capture-screenshot.mjs, test-chatbot.mjs
prisma/               # schema.prisma (SQLite) — reserved for future CMS, not wired up
.github/workflows/    # ci.yml, main.yml (Auto Deploy), gh-pages.yml
```

## Routing

All routes live in `src/App.tsx`. Every page **except `Home`** is lazy-loaded via
`React.lazy` + `<Suspense>`. When adding a page:

1. Create `src/pages/MyPage.tsx` (default export, functional component).
2. Add `const MyPage = lazy(() => import("./pages/MyPage"));` in `App.tsx`.
3. Register `<Route path="/my-page" element={<MyPage />} />`.
4. Call `useDocumentTitle("My Page")` inside the page for the tab title.
5. Update the **Site routes** table in `README.md`.

Current routes: `/`, `/solid-llm`, `/solid-llm/about`, `/solidai`,
`/solidai/docs`, `/documentation`, `/beta`, `/coming-soon`, `/gallery`, and `*`
(NotFound). Because routing is client-side, hosts must rewrite unknown paths to
`index.html` — this is configured in `vercel.json` (root + `public/`) and
`public/.htaccess` for cPanel.

## Styling conventions

- **Tailwind CSS 4** is driven by the `@tailwindcss/vite` plugin. Theme tokens
  and custom utilities are defined in **`src/index.css`** using the `@theme`
  block, *not* a JS config. Design tokens include `charcoal`, `bg-main`,
  `bg-dark`, `brand-accent`, and the `Inter` / `JetBrains Mono` font families.
- **`tailwind.config.ts` is legacy/vestigial** — it references `daisyui` and a
  `primary` palette that are **not installed and not used** (Tailwind v4 reads
  `@theme` from CSS, not this file). Do not rely on it or add to it; prefer
  `index.css` for tokens.
- Reuse shared utility classes from `index.css`: `glass-card`, `hover-lift`,
  `reveal` / `reveal-visible`, `grid-pattern`, `glow-accent`, `fade-page`.
- Use the `<Reveal>` component (IntersectionObserver-based) for scroll-in
  animations rather than hand-rolling observers.
- Test layouts at mobile / tablet / desktop widths; the design is mobile-first.

## Components & code style

- **TypeScript for all new source**; functional components with hooks only.
- Some files carry an `@license SPDX-License-Identifier: Apache-2.0` header —
  preserve existing headers; you don't need to add them to every new file.
- Prefer existing shared components (`Footer`, `Logo`, `Reveal`, `MobileNav`)
  before creating new ones.
- Home-page sections live in `src/components/home/`; page-specific subcomponents
  can live in a page-named subfolder (e.g. `src/components/solidai/`).
- Use `lucide-react` for new icons. Font Awesome exists in some files — stay
  consistent within the file you're editing rather than mixing icon sets.
- Keep changes scoped: one concern per PR, no drive-by refactors or reformatting.

## Performance patterns (don't regress these)

The site is tuned for fast first paint; several deliberate deferral patterns exist:

- **Route splitting:** every page but Home is `lazy()`-imported in `App.tsx`.
- **`DeferredChatBot`:** the chat widget only hydrates on `requestIdleCallback`
  (2.5–3s fallback). It renders a lightweight FAB shell first so layout doesn't
  jump. Heavy deps (`motion`) load with it.
- **Manual chunks** (`vite.config.ts`): `react-router` → `router`,
  React runtime → `react-vendor`.
- **`modulePreload` filtering:** chunks named in `DEFERRED_CHUNKS`
  (`motion`, `lenis`, `SolidAI`, `SolidLLM`, `ChatBot`, `Documentation`,
  `BetaAccess`, `ComingSoon`) are excluded from `<link modulepreload>` so they
  aren't eagerly fetched. If you rename those chunks/pages, update this list.
- Static assets under `/assets/` are served `immutable` with a 1-year cache
  (see `vercel.json`); `index.html` is `must-revalidate`.

## The chat widget & `/api/chat`

`src/components/ChatBot.tsx` provides an on-site assistant with two tiers:

1. It POSTs to the same-origin **`/api/chat`** endpoint.
2. If that fails or returns non-OK, it falls back to **`replyFor()`** — a local,
   offline, rule-based knowledge base (pricing, contact, services, SolidAI, …).

`api/chat.js` is a **Vercel Node serverless function** that proxies to
**OpenRouter** (`OPENROUTER_API_KEY`, optional `SOLID_LLM_MODEL`, default
`meta-llama/llama-3.3-70b-instruct`). Important notes:

- It is **plain JavaScript on purpose** — this project pins TypeScript 7 (`tsgo`),
  whose compiler the Vercel Node builder can't use to transpile a `.ts` function.
- It carries an embedded `SOLID_KNOWLEDGE` grounding string and per-sector system
  prompts (agriculture, health, education, finance, legal, transport, energy).
  Keep this in sync with the sibling `solidai-platform` copy noted in the file
  header if you change company facts.
- The API key lives **server-side only** and is never shipped to the browser.
- `plain vercel deploy dist` would drop the function — deploys must use Vercel's
  prebuilt flow (see below) so `/api` ships alongside the static site.

If the endpoint is unconfigured, the widget still works via `replyFor()`, so the
site never hard-depends on the API key.

## Environment variables

Copy `.env.example` → `.env.local` for local dev (the site runs without any):

| Var                  | Where     | Purpose                                             |
|----------------------|-----------|-----------------------------------------------------|
| `GEMINI_API_KEY`     | build     | Reserved for future AI integrations (defined in Vite)|
| `APP_URL`            | build     | Canonical URL for metadata/self-links               |
| `OPENROUTER_API_KEY` | server    | Required for the live `/api/chat` LLM path          |
| `SOLID_LLM_MODEL`    | server    | Optional OpenRouter model override                  |
| `DATABASE_URL`       | prisma    | Only relevant if the (currently dormant) Prisma DB is used |

Never commit `.env` / `.env.local` or any secret. `.gitignore` blocks `.env*`
(except `.env.example`) and all build output.

## Build / deploy pipeline

`main` is the deploy branch. Three workflows in `.github/workflows/`:

- **`ci.yml`** — on push/PR to `main`: `npm ci` → `npm run lint` → `npm run build`
  → assert `dist/index.html` exists. This is the required check.
- **`main.yml` (Auto Deploy)** — on push to `main`: lint + build, then deploy to
  **Vercel** using the prebuilt flow (`vercel pull` → `vercel build --prod` →
  `vercel deploy --prebuilt --prod`), syncing `OPENROUTER_API_KEY` into Vercel's
  prod env. Then it verifies SPA routes return 200 with `id="root"`, and makes a
  **best-effort** cPanel SFTP mirror (skipped if host `102.208.231.11:22` is down).
- **`gh-pages.yml`** — mirrors the production build to the `gh-pages` branch
  (force-pushed orphan branch containing only `dist/`).

Manual/local deploy helpers: `scripts/deploy.sh` (Vercel + optional cPanel),
`sync-to-github.sh` (pull --rebase then push `main`), and `.cpanel.yml`
(cPanel git-deploy copies `dist/*` to `public_html/`).

**Never commit `dist/`, `node_modules/`, `/assets/`, or `/images/` at the repo
root** — `.gitignore` guards these; source lives in `src/` + `public/` only.

## Prisma / database

`prisma/schema.prisma` defines a single SQLite `SiteInfo` model, and
`prisma.config.ts` wires it up. This is **scaffolding for a possible future CMS
and is not currently used by the app or the deployed site** — don't assume a live
database. `prisma` isn't in `package.json` deps; treat this as dormant unless a
task explicitly activates it.

## Working conventions for changes

- Match the surrounding code's style, naming, and structure in any file you edit.
- After code changes, run `npm run lint` and `npm run build` and report real
  results — both must pass.
- When you add a route, update `README.md`'s Site routes table.
- If you rename a lazy chunk/page, update `DEFERRED_CHUNKS` in `vite.config.ts`.
- Do **not** open a pull request unless explicitly asked. The repo has a PR
  template at `.github/pull_request_template.md` and issue templates under
  `.github/ISSUE_TEMPLATE/`.
- Report security issues per `SECURITY.md`, never via public issues.
