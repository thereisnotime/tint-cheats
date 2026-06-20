---
title: "Sample Game Cheat Engine Table"
game: "Sample Game"
slug: "sample-template"
status: wip
table_version: "0.1.0"
ce_version: ">=7.5"
game_versions:
  - version: "1.0.0"
    store: Steam
    build_id: "0000000"
    tested: false
platforms:
  - Windows
singleplayer_only: true
updated: 2026-06-20
released: 2026-06-20
tags:
  - template
  - example
# Cheats render as a rich, hotkey-labelled list in the "Cheats" section.
# One entry per cheat. hotkey and description are optional but recommended.
cheats:
  - name: "Godmode"
    hotkey: "F1"
    description: "Player takes no damage. Disable before cutscenes if you see glitches."
  - name: "Infinite Money"
    hotkey: "F2"
    description: "Currency never decreases when spending."
  - name: "Infinite Stamina"
    hotkey: "F3"
    description: "Stamina bar stays full. Safe to leave on."
files:
  - name: "sample-template.CT"
    label: "Sample table (v0.1.0)"
cover: ./media/cover.png
# Optional media/info fields (remove any you do not use):
game_logo: ./media/logo.png          # transparent PNG works best
game_description: "A one or two sentence description of the game itself (genre, premise). Shown near the top of the page and used for SEO."
trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"   # link to the game's trailer
screenshots:
  - ./media/screenshot-1.png
  - ./media/screenshot-2.png
description: "Template table showing the structure every tint-cheats entry follows. Copy this folder to start a new table."
---

## Overview

A short paragraph describing what this table does and which game it targets. Mention the
genre, whether it is story-focused, and what kind of cheats it provides. Keep it honest:
if the table is a work in progress, say so here.

This folder is the canonical template. Copy it with `just new-table <slug> "<Game Name>"`,
then replace everything below with the real details for your table.

## Notes

List every cheat in the `cheats:` frontmatter above (name, hotkey, description). It
renders as the "Cheats" section on the site, so you do not need a markdown table here.
Use this space for anything that does not fit a single cheat row, such as combos,
recommended toggles, or warnings.

## Requirements

- Cheat Engine 7.5 or newer.
- A legitimate, single-player copy of the game.
- The game version listed in the matrix above. Other versions may need address updates.

## Installation & Usage

1. Install Cheat Engine from the official site (cheatengine.org).
2. Download `sample-template.CT` from this folder.
3. Launch the game and load into your save.
4. Open Cheat Engine and open the `.CT` file (File > Open).
5. Attach Cheat Engine to the running game process (click the computer icon, pick the game).
6. Tick the boxes next to the scripts you want, or use the hotkeys listed above.

## Compatibility

The version matrix at the top of this page is generated automatically from the frontmatter,
so you do not need to repeat it here. Add any extra compatibility notes that do not fit the
matrix, for example known-good DLC combinations or mods that conflict with the table.

## Known Issues

- Document anything that misbehaves so users are not surprised.
- Note any scripts that must be toggled off before saving or loading.
- If a cheat only works under specific conditions, spell them out.

## Changelog

### 0.1.0 - initial template

- Initial template scaffold. Replace with your real release notes.

## Credits

- Table author: your name or handle here.
- Credit anyone whose pointers, scripts, or research you built on.
