# tint-cheats — AI working notes

Open-source collection of Cheat Engine tables for single-player games, built with Astro 5 and published to GitHub Pages.

## Repo coordinates

- GitHub: `thereisnotime/tint-cheats`, branch `main`.
- Live site: `https://thereisnotime.github.io/tint-cheats`.
- Node pinned to `24.16.0` (current LTS "Krypton") via asdf (`.tool-versions`).

## Mental model

- **Folder-per-game.** Every table is one directory under `tables/<slug>/` containing `index.md` (frontmatter + notes), one or more `.CT` files, and a `media/` folder for the cover and screenshots.
- **Adding a table = adding a new folder.** No central registry to edit. The content collection picks up `tables/*/index.md` automatically. Use `just new-table <slug> "<Game>"` to scaffold.
- The entry id is the folder name; pages route on that id.

## Schema

The single source of truth for frontmatter is [`src/content.config.ts`](src/content.config.ts) — an Astro Content Layer collection named `tables` using the glob loader against the repo-root `tables/` dir. Do not invent fields; match the Zod schema exactly. Required fields include `title`, `game`, `status`, `table_version`, `updated`, `files` (at least one), and `description` (max 200 chars).

## Validation gate

Always run before pushing:

```bash
just verify        # == npm run verify == validate + check + build
```

- `npm run validate` — structural checks (`scripts/validate-tables.mjs`).
- `npm run check` — Astro type + content schema check.
- `npm run build` — runs `scripts/gen-checksums.mjs` then `astro build`.

Checksums live in `src/data/checksums.json`, keyed by `"<folder>/<filename>"`. Do not hand-edit; regenerate with `just checksums`.

## Trust requirements (non-negotiable)

- Every downloadable file must have a checksum and, where possible, a VirusTotal link (`virustotal` field).
- No surveys, paywalls, link shorteners, redirects, or download gates anywhere in the site or content.
- Single-player only. Reject multiplayer/online tables.

## SEO requirements

- Keep `site` and `base` correct in `astro.config.mjs` (`https://thereisnotime.github.io` + `/tint-cheats`); sitemap integration is enabled.
- Use the `url()` helper in `src/utils/url.ts` for all internal links so they resolve under the base path.
- Each table page should have a meaningful title and the `description` field populated for meta/OG tags.

## Git identity

- `git config user.name "thereisnotime"`
- `git config user.email "37583483+thereisnotime@users.noreply.github.com"`
- Use SSH remotes (`git@github.com:thereisnotime/tint-cheats.git`), not HTTPS.
- No `Co-Authored-By` trailers. Write commit messages in a natural, human tone.
