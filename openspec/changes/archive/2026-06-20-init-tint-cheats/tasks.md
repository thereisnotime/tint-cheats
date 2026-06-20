# Tasks — init-tint-cheats

## 1. Foundation
- [ ] 1.1 `package.json`, `astro.config.mjs`, `tsconfig.json`
- [ ] 1.2 `src/content.config.ts` (Zod schema for tables collection)
- [ ] 1.3 `src/utils/url.ts` base-aware link helper
- [ ] 1.4 Repo meta: `.gitignore`, `.tool-versions`, `.nvmrc`, `.editorconfig`
- [ ] 1.5 `justfile` (colored, categorized, default list)
- [ ] 1.6 `README.md`, `LICENSE` (MIT), `CONTRIBUTING.md`, `CLAUDE.md`

## 2. UI
- [ ] 2.1 `Base.astro` layout (SEO head, OG, canonical, JSON-LD)
- [ ] 2.2 `TableLayout.astro`
- [ ] 2.3 Components: TrustBanner, Disclaimer, ChecksumBox, CompatibilityMatrix, TableCard, StatusBadge, Header, Footer
- [ ] 2.4 `src/styles/global.css`

## 3. Pages
- [ ] 3.1 `index.astro` (hub, grid, tag cloud, trust hero)
- [ ] 3.2 `tables/[...slug].astro` (+ JSON-LD VideoGame/SoftwareApplication/Breadcrumb)
- [ ] 3.3 `tags/[tag].astro`
- [ ] 3.4 `rss.xml.js`, `404.astro`

## 4. Content & Scripts
- [ ] 4.1 `scripts/gen-checksums.mjs`
- [ ] 4.2 `scripts/validate-tables.mjs`
- [ ] 4.3 `scripts/sync-readme-index.mjs`
- [ ] 4.4 Seed `tables/sample-template/` (valid `.CT`, cover, all sections) as the template

## 5. CI/CD & GitHub
- [ ] 5.1 `.github/workflows/ci.yml` (validate + check + build on PR)
- [ ] 5.2 `.github/workflows/deploy.yml` (verify + deploy Pages on main)
- [ ] 5.3 Issue forms: report-issue, request-cheat, config
- [ ] 5.4 `pull_request_template.md`

## 6. Verify & ship
- [ ] 6.1 `npm install`, `npm run verify` passes locally
- [ ] 6.2 Create public repo, push, enable Pages, confirm deploy
