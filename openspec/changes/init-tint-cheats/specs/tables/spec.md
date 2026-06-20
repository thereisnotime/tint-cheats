# tables (delta)

## ADDED Requirements

### Requirement: Folder-per-table content model
Each cheat table SHALL live in `tables/<game-slug>/` containing an `index.md`,
one or more `.CT` files, and a `media/` directory.

#### Scenario: Adding a table
- **WHEN** a maintainer commits a new `tables/<slug>/index.md` with valid
  frontmatter and a referenced `.CT` file
- **THEN** the build generates a page at `/tables/<slug>/` with no further work

### Requirement: Validated frontmatter
Table frontmatter SHALL be validated against a schema covering game, status,
table/CE/game versions, files, tags, and description. A build SHALL fail when
frontmatter is invalid.

#### Scenario: Invalid frontmatter blocks deploy
- **WHEN** a table is missing a required field or uses an out-of-enum status
- **THEN** `astro check`/build fails and deploy does not run

### Requirement: Documentation sections
Every table page SHALL render Overview, Features, Requirements, Compatibility,
Installation, Known Issues, Changelog, and Credits.

#### Scenario: Consistent pages
- **WHEN** a table page is generated
- **THEN** the fixed sections plus auto-injected disclaimer and checksums appear
