# Contributing a table

Thanks for wanting to add a table. The process is short.

## Steps

1. Fork the repo and clone your fork.
2. Set up the toolchain and dependencies:
   ```bash
   just setup
   ```
3. Scaffold a folder for your game:
   ```bash
   just new-table <slug> "<Game Name>"
   ```
   This creates `tables/<slug>/` with a starter `index.md` and a `media/` folder.
4. Fill in `index.md`. Cover every section: the frontmatter fields (title, game, status, table version, tested game version, files, description) and the notes below it. The full schema lives in [`src/content.config.ts`](src/content.config.ts).
5. Drop your `.CT` file into the folder and a cover image into `media/`. List each downloadable file under `files:` in the frontmatter. **Name table files `tint-<game-slug>-<table_version>.ct`** (lowercase), e.g. `tint-20-minutes-till-dawn-1.7.0.ct`. The validator enforces this.
6. Test the table in Cheat Engine against a clearly stated game version, and record that version under `game_versions:`.
7. Run the full gate:
   ```bash
   just verify
   ```
   This validates structure, type-checks content, and builds the site.
8. Open a pull request describing the game, the tested version, and what the table does.

## Rules

- Single-player only. Tables for online or competitive multiplayer are not accepted.
- No malware, droppers, or anything that phones home.
- No DRM circumvention for piracy. Tables target legitimately owned games.
- Tables must be your own work, or properly credited to the original author with their permission where required.
- Keep it honest: state the real status (`working`, `outdated`, `wip`, `broken`) and the real tested version.

If something is unclear, open an issue before sinking time into a PR.

## Community

Questions or want help getting a table merged? Join the chat:

- Telegram: https://t.me/+xgtzaZBrKRA2OWI8
- Matrix: https://matrix.to/#/!GkVomrhlzPROGFzueG:matrix.org?via=matrix.org
