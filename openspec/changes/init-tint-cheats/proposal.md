# init-tint-cheats

## Why

There is no central, trustworthy home for the custom Cheat Engine tables. The
public space for "cheat engine tables" and "trainers" is dominated by scam sites
that gate downloads behind surveys, link shorteners, and bundled malware. We want
an open-source repository where every table ships with its source visible,
documented usage, version-compatibility info, and verifiable integrity
(checksums + VirusTotal), auto-published to a fast, SEO-strong site so legitimate
searchers find us instead of the scammers.

## What Changes

- New public repo `tint-cheats` containing all custom CE tables.
- Each table lives in `tables/<game-slug>/` with the `.CT` file(s), an `index.md`
  documenting it, and media. Adding a folder + committing auto-generates a page.
- Astro static site published to GitHub Pages via Actions on every push to `main`.
- Strong SEO: per-page meta, JSON-LD (`VideoGame` + `SoftwareApplication`),
  sitemap, RSS, Open Graph, canonical URLs, fast static output.
- Trust layer: site-wide no-gate banner, per-file SHA-256 checksums, derived
  VirusTotal links, single-player-only disclaimer, raw-file + git-history links.
- GitHub issue forms for "report an issue" and "request a cheat".
- Validation gates before deploy: frontmatter schema (Zod), table integrity
  checks (CT/media exist, slugs match), `astro check`, and a successful build.

## Impact

- Affected specs: `tables`, `site`, `seo`, `trust`, `ci`.
- Affected code: new repo (Astro project, content collection, scripts, workflows,
  issue templates).
