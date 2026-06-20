# Design — init-tint-cheats

## Stack

- **Astro 5** static site (zero JS by default) for best Core Web Vitals / SEO.
- **Content Layer (`glob` loader)** points at the repo-root `tables/` directory so
  the markdown source of truth stays separate from `src/`.
- **Zod schema** in `src/content.config.ts` validates every table's frontmatter at
  build time — malformed tables fail CI instead of shipping.
- **Node** pinned via `.tool-versions` (asdf) + `.nvmrc` mirror. No global installs.
- **just** (`justfile`) for local dev/validation tasks, colorized and categorized,
  with a default recipe that lists everything.

## Content model

`tables/<game-slug>/`
- `index.md` — frontmatter (game, status, versions, files, tags, cover) + fixed
  documentation sections (Overview, Features, Requirements, Compatibility,
  Installation, Known Issues, Changelog, Credits).
- `<slug>.CT` — table file(s), tracked as text (CE tables are XML).
- `media/` — cover + screenshots.

## Integrity / trust

- `scripts/gen-checksums.mjs` runs pre-build, computes SHA-256 for each `.CT`, and
  writes `src/data/checksums.json`. Pages render the hash and derive the
  VirusTotal URL (`/gui/file/<sha256>`) automatically; frontmatter may override.
- Disclaimer + no-gate banner are injected by layout, not authored per table.

## Validation pipeline (before "prod")

1. `scripts/validate-tables.mjs` — structural checks (slug == folder, referenced
   `.CT`/cover exist, status in enum, at least one tested game version).
2. `astro check` — type + content schema validation.
3. `astro build` — fails on any unresolved reference or schema error.
   CI runs all three; deploy only happens if they pass on `main`.

## Deployment

GitHub Actions: `ci.yml` validates on PRs; `deploy.yml` validates + builds +
deploys to GitHub Pages on push to `main`. `site`/`base` configured for
`thereisnotime.github.io/tint-cheats`; a `url()` helper makes internal links
base-aware so a future custom domain is a one-line change.

## Decisions

- **Astro over Hugo/MkDocs/Jekyll**: best SEO ergonomics + build-time schema.
- **Folder-per-game**: self-contained, scales, easy diffs.
- **Derive VirusTotal from hash**: less manual frontmatter, fewer mistakes.
- **MIT license**, github.io URL to start (custom domain later via CNAME).
