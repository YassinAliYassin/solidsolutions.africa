# Contributing to Solid Solutions

Thank you for helping improve [solidsolutions.africa](https://solidsolutions.africa). This guide covers how to set up your environment, submit changes, and match the project's conventions.

---

## Ways to contribute

You do not need to write code to help. Useful contributions include:

- Bug reports and reproduction steps
- Copy and documentation improvements
- UI/UX fixes (mobile layout, contrast, keyboard navigation)
- Performance work (bundle size, lazy loading, image optimization)
- Accessibility improvements (ARIA, focus states, semantic HTML)
- New pages or components that fit the Solid Solutions brand

---

## Development setup

**Requirements:** Node.js 22+, npm

```bash
# Fork on GitHub, then clone your fork
git clone https://github.com/<your-username>/solidsolutions.africa.git
cd solidsolutions.africa

# Add upstream remote
git remote add upstream https://github.com/YassinAliYassin/solidsolutions.africa.git

npm install
cp .env.example .env.local   # optional
npm run dev                    # http://localhost:3000
```

Keep your fork up to date:

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

---

## Branch workflow

Create a focused branch from `main`:

```bash
git checkout main
git pull upstream main
git checkout -b type/short-description
```

**Branch naming examples:**

| Prefix | Use for |
|--------|---------|
| `fix/` | Bug fixes |
| `feat/` | New features or pages |
| `docs/` | Documentation only |
| `perf/` | Performance improvements |
| `a11y/` | Accessibility work |

---

## Before you submit

Run these checks locally:

```bash
npm run lint    # TypeScript type check
npm run build   # Production build must succeed
```

Optional but recommended:

```bash
npm run preview   # Smoke-test the built site
```

**Do not commit:**

- `node_modules/`
- `dist/` or build artifacts
- `.env`, `.env.local`, or any secrets
- Unrelated formatting or drive-by refactors

---

## Code conventions

### General

- Use **TypeScript** for all new source files.
- Prefer **functional React components** with hooks.
- Keep changes scoped — one concern per pull request when possible.
- Reuse existing components (`Footer`, `Logo`, `Reveal`, etc.) before adding new ones.

### Styling

- Use **Tailwind CSS 4** utility classes.
- Follow the existing palette: `charcoal`, `bg-main`, `slate-*`.
- Use shared classes from `src/index.css` where appropriate (`glass-card`, `hover-lift`, etc.).
- Test layouts at mobile, tablet, and desktop widths.

### Routing

New pages belong in `src/pages/`. Register them in `src/App.tsx` with **lazy loading**:

```tsx
const MyPage = lazy(() => import("./pages/MyPage"));
// ...
<Route path="/my-page" element={<MyPage />} />
```

If you add a route, update the **Site routes** table in `README.md`.

### Components

- Place shared UI in `src/components/`.
- Page-specific subcomponents can live beside their page or in a subfolder (see `src/components/solidai/`).
- Defer heavy widgets when appropriate (see `DeferredChatBot.tsx`).

### Icons

Use **Lucide React** for new icons. Font Awesome is already used in some places — stay consistent within the file you edit.

---

## Pull requests

1. Push your branch to your fork.
2. Open a PR against `main` on [YassinAliYassin/solidsolutions.africa](https://github.com/YassinAliYassin/solidsolutions.africa).
3. Fill in the PR description:
   - **What** changed
   - **Why** it was needed
   - **How** to verify (steps or screenshots)
4. Link any related issues (`Fixes #123`).

**PR checklist:**

- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] Changes are focused and documented
- [ ] New routes added to `README.md` (if applicable)
- [ ] No secrets or build output committed

Merging to `main` triggers the **Auto Deploy** workflow. Maintainers may request changes before merge.

---

## Reporting issues

Use the repository issue templates when possible:

- [Bug report](.github/ISSUE_TEMPLATE/bug_report.yml)
- [Feature request](.github/ISSUE_TEMPLATE/feature_request.yml)

For issues filed without a template, include:

- Clear title
- Steps to reproduce (for bugs)
- Expected vs actual behaviour
- Browser, OS, and device (for UI issues)
- Screenshots or screen recordings when helpful

**Security:** Follow [SECURITY.md](SECURITY.md). Do not open public issues for vulnerabilities.

---

## Code of conduct

Be respectful and constructive. Solid Solutions builds tools for African SMEs — keep discussions practical, inclusive, and focused on real-world impact.

Harassment, discrimination, and bad-faith behaviour are not tolerated.

---

## Maintainer: regenerate README screenshot

```bash
npm run build
npm run preview -- --port 4173
npx playwright install chromium
node scripts/capture-screenshot.mjs
```

---

## Questions

- **Email:** [info@solidsolutions.africa](mailto:info@solidsolutions.africa)
- **Telegram:** [@solidsolutions](https://t.me/solidsolutions)
- **Issues:** [github.com/YassinAliYassin/solidsolutions.africa/issues](https://github.com/YassinAliYassin/solidsolutions.africa/issues)

---

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE) that covers this project.