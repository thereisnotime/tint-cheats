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

## The template is the reference

`templates/sample-table/index.md` is the canonical example. Every field and
section is shown there with inline comments explaining what to write. When you
run `just new-table`, you get a copy of it. The fastest path is: open it, read
the comments, and replace the values with yours.

## Frontmatter reference

These live in the YAML block at the top of `index.md`. The authoritative schema
is [`src/content.config.ts`](src/content.config.ts); the build fails if anything
is wrong.

| Field | Required | What it is |
| --- | --- | --- |
| `title` | yes | Page title, e.g. `"20 Minutes Till Dawn Cheat Engine Table"`. |
| `game` | yes | The game's name. Also used to derive the file naming convention. |
| `slug` | no | Must equal the folder name if set. |
| `status` | yes | One of `working`, `outdated`, `wip`, `broken`. Be honest. |
| `table_version` | yes | Your table's version, e.g. `"1.7.0"`. |
| `author` / `author_url` | no | Your name/handle and an optional profile link. |
| `ce_version` | no | Minimum Cheat Engine version, default `">=7.5"`. |
| `game_versions` | yes | List of `{ version, store, build_id?, tested }`. List what you actually tested. |
| `platforms` | no | Default `[Windows]`. |
| `tags` | no | Lowercase keywords for browsing/search. |
| `cheats` | no | List of `{ name, hotkey?, description? }`. Renders the Cheats section. |
| `files` | yes | List of `{ name, label }`. `name` must be `tint-<game-slug>-<table_version>.ct`. |
| `cover` | no | Card/social image. See Media below. |
| `game_logo` | no | Transparent title logo, shown over the cover on cards. |
| `screenshots` | no | List of image paths, rendered as a gallery. |
| `trailer` | no | URL to the game's trailer or store page. |
| `game_description` | no | One or two sentences about the game (also used for SEO). |
| `description` | yes | Max 200 chars, used for meta/OG tags. |

## Documentation sections (the body)

Below the frontmatter, write these Markdown sections (the template has them all):
Overview, Notes/Usage, Requirements, Installation & Usage, Compatibility,
Known Issues, Changelog, Credits. Keep the cheat list in the `cheats:` frontmatter,
not as a Markdown table, so it renders as the styled Cheats section.

## Media

Put images in the table's `media/` folder and reference them with relative paths
like `./media/cover.jpg`.

- **cover** (`./media/cover.jpg`): wide art, roughly 16:9 or a store hero banner. Also used for social/OG previews.
- **game_logo** (`./media/logo.png`): the transparent title logo. Shown centered over the cover on the homepage cards.
- **screenshots** (`./media/screenshot-1.jpg`, ...): in-game shots. Add as many as you like; they become a gallery.

JPG or PNG are fine; the build optimizes them automatically. You do not need to
generate checksums or copy files anywhere, that happens during `just verify`.

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
