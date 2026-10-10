# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Quote request form with a mailto fallback, an FAQ drawn from published copy, and a light/dark theme toggle.
- Hero panel that links straight to the four existing services.

### Changed
- First load no longer waits on Google Fonts, Lenis, Font Awesome, or the chat animation library. The assistant answers in the browser, so the site ships with no serverless function.
- Navigation stays sticky, marks the section in view, and includes SolidAI and the FAQ.
- Public site copy, brand voice, and UX polish across home, SolidAI, contact, and beta.
- Replaced the "24/7 Support" metric and chatbot price/trial claims with honest studio facts.
- Tightened navigation, CTAs, spacing, and form placeholders for African SME visitors.

### Added
- `CODE_OF_CONDUCT.md`, `CHANGELOG.md`, `.editorconfig`, `.prettierrc`.

## [0.1.0] - Site live

### Added
- Public website for Solid Solutions (React, Vite, Tailwind), live at solidsolutions.africa.
- AI chat assistant wired to live LLM via same-origin `/api/chat`.
- CI/CD: `main.yml` (build + deploy), `ci.yml`, `gh-pages.yml`.
- Prisma data layer + scripts.

### Fixed
- Removed fabricated claims; wired beta form; added SEO titles.
