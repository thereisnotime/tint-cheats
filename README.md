# tint-cheats

An open, no-nonsense collection of **Cheat Engine tables** and **trainers** for single-player games, published as a static site to GitHub Pages.

Every table lives in this repo, in the open, with checksums and VirusTotal links so you can see exactly what you are running before you run it.

## The trust pledge

This project exists because finding clean tables online is a nightmare of surveys, paywalls, and sketchy link shorteners. None of that here.

- Always free. No donations gate, no premium tier.
- No surveys, no "click 3 ads to unlock", no waiting timers.
- No link shorteners or redirect chains. Files are served straight from the repo.
- No paywalls. Ever.
- Source is visible. Tables are committed as plain files in this repo.
- Checksums for every file, plus a VirusTotal link where available, so you can verify before you download.
- Single-player only. These tables are for offline, single-player use.

## Tables

<!-- TABLES:START -->

| Game | Status | Table ver | Tested game ver | Updated | Link |
| --- | --- | --- | --- | --- | --- |
| Minutes Till Dawn | ✅ Working | 1.7.0 | Current Steam build | 2026-06-20 | [open](tables/minutes-till-dawn/) |
| Sample Game | 🚧 WIP | 0.1.0 | 1.0.0 | 2026-06-20 | [open](tables/sample-template/) |

<!-- TABLES:END -->

## How to add a table

Each game gets its own folder under `tables/<slug>/`:

```
tables/<slug>/
  index.md        # frontmatter + notes (schema in src/content.config.ts)
  <table>.CT      # the Cheat Engine table itself
  media/          # cover image and screenshots
```

The fastest way to start:

```bash
just new-table <slug> "<Game Name>"
```

Fill in `index.md`, drop your `.CT` file and a cover image in, then run:

```bash
just verify
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full walkthrough.

## Local development

```bash
just setup    # asdf install + npm install
just dev      # start the dev server
just verify   # validate + type-check + build (run before pushing)
```

## Report or request

Found a broken table, or want one for a specific game? Open an issue:

https://github.com/thereisnotime/tint-cheats/issues/new/choose

## Disclaimer

These tables are intended for single-player, offline use only. They are provided for educational and personal use. Do not use them in online or competitive multiplayer games. Use at your own risk; the maintainers take no responsibility for anything that happens to your saves, your install, or your account.
