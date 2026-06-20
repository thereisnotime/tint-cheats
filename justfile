set shell := ["bash", "-uc"]

# ANSI color helpers
BOLD := '\033[1m'
DIM := '\033[2m'
RESET := '\033[0m'
RED := '\033[31m'
GREEN := '\033[32m'
YELLOW := '\033[33m'
BLUE := '\033[34m'
MAGENTA := '\033[35m'
CYAN := '\033[36m'

# Show the colorized, categorized menu (bare `just`)
default:
    #!/usr/bin/env bash
    set -uo pipefail
    printf "{{BOLD}}{{CYAN}}tint-cheats{{RESET}} {{DIM}}— Cheat Engine tables collection{{RESET}}\n\n"
    printf "{{BOLD}}{{MAGENTA}}SETUP{{RESET}}\n"
    printf "  {{GREEN}}%-22s{{RESET}} %s\n" "setup"            "asdf install + npm install"
    printf "  {{GREEN}}%-22s{{RESET}} %s\n" "install"          "npm install only"
    printf "  {{GREEN}}%-22s{{RESET}} %s\n" "new-table SLUG GAME" "scaffold a new table folder"
    printf "\n"
    printf "{{BOLD}}{{MAGENTA}}DEV{{RESET}}\n"
    printf "  {{GREEN}}%-22s{{RESET}} %s\n" "dev"              "start the Astro dev server"
    printf "  {{GREEN}}%-22s{{RESET}} %s\n" "preview"          "build then serve the static output"
    printf "\n"
    printf "{{BOLD}}{{MAGENTA}}VALIDATE{{RESET}}\n"
    printf "  {{GREEN}}%-22s{{RESET}} %s\n" "validate"         "structural checks on tables"
    printf "  {{GREEN}}%-22s{{RESET}} %s\n" "check"            "astro type + schema check"
    printf "  {{GREEN}}%-22s{{RESET}} %s\n" "lint"             "validate + check"
    printf "  {{GREEN}}%-22s{{RESET}} {{YELLOW}}%s{{RESET}}\n" "verify" "run this before you push"
    printf "\n"
    printf "{{BOLD}}{{MAGENTA}}BUILD{{RESET}}\n"
    printf "  {{GREEN}}%-22s{{RESET}} %s\n" "checksums"        "regenerate src/data/checksums.json"
    printf "  {{GREEN}}%-22s{{RESET}} %s\n" "build"            "checksums + astro build"
    printf "  {{GREEN}}%-22s{{RESET}} %s\n" "clean"            "remove dist and .astro"
    printf "\n"
    printf "{{BOLD}}{{MAGENTA}}RELEASE{{RESET}}\n"
    printf "  {{GREEN}}%-22s{{RESET}} %s\n" "sync-readme"      "refresh the README tables index"
    printf "\n"
    printf "{{DIM}}Run {{RESET}}{{BOLD}}just --list{{RESET}}{{DIM}} for the raw recipe list.{{RESET}}\n"

# SETUP: install the pinned toolchain then project deps
setup:
    asdf install
    npm install

# SETUP: install project dependencies only
install:
    npm install

# SETUP: scaffold a new table folder from the sample template
new-table slug game:
    #!/usr/bin/env bash
    set -euo pipefail
    src="tables/sample-template"
    dst="tables/{{slug}}"
    if [[ ! -d "$src" ]]; then
        printf "{{RED}}error:{{RESET}} template %s not found\n" "$src" >&2
        exit 1
    fi
    if [[ -e "$dst" ]]; then
        printf "{{RED}}error:{{RESET}} %s already exists\n" "$dst" >&2
        exit 1
    fi
    cp -r "$src" "$dst"
    mkdir -p "$dst/media"
    # Rename the starter .CT to the convention: tint-<game-slug>-<version>.ct
    gslug=$(printf '%s' "{{game}}" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+|-+$//g')
    newct="tint-${gslug}-0.1.0.ct"
    if [[ -f "$dst/tint-sample-game-0.1.0.ct" ]]; then
        mv "$dst/tint-sample-game-0.1.0.ct" "$dst/$newct"
    fi
    if [[ -f "$dst/index.md" ]]; then
        sed -i "s/^title:.*/title: \"{{game}} Cheat Engine Table\"/" "$dst/index.md"
        sed -i "s/^game:.*/game: \"{{game}}\"/" "$dst/index.md"
        sed -i "s/^slug:.*/slug: \"{{slug}}\"/" "$dst/index.md"
        sed -i "s/tint-sample-game-0.1.0.ct/${newct}/g" "$dst/index.md"
    fi
    printf "{{GREEN}}created{{RESET}} %s\n" "$dst"
    printf "{{DIM}}Next: replace the .CT and media, fill in index.md, then run {{RESET}}{{BOLD}}just verify{{RESET}}\n"

# DEV: start the Astro dev server
dev: checksums
    npm run dev

# DEV: build then serve the static output locally
preview:
    npm run build
    npm run preview

# VALIDATE: structural checks on table folders and frontmatter
validate:
    npm run validate

# VALIDATE: astro type and content schema check
check:
    npm run check

# VALIDATE: run validate + check together
lint:
    npm run validate
    npm run check

# VALIDATE: full pre-prod gate (validate + check + build) — run before pushing
verify:
    npm run verify

# BUILD: regenerate src/data/checksums.json
checksums:
    npm run checksums

# BUILD: generate checksums then build the site
build:
    npm run build

# BUILD: remove dist and .astro caches
clean:
    rm -rf dist .astro

# RELEASE: refresh the tables index block in README.md
sync-readme:
    npm run sync-readme
