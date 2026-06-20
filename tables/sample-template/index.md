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
files:
  - name: "sample-template.CT"
    label: "Sample table (v0.1.0)"
cover: ./media/cover.png
description: "Template table showing the structure every tint-cheats entry follows. Copy this folder to start a new table."
---

## Overview

A short paragraph describing what this table does and which game it targets. Mention the
genre, whether it is story-focused, and what kind of cheats it provides. Keep it honest:
if the table is a work in progress, say so here.

This folder is the canonical template. Copy it with `just new-table <slug> "<Game Name>"`,
then replace everything below with the real details for your table.

## Features

List every cheat the table exposes. The table below renders nicely on the site and in the
repo, so keep one row per cheat.

| Cheat | Description | Hotkey | Notes |
| --- | --- | --- | --- |
| Godmode | Player takes no damage | F1 | Disable before cutscenes if you see glitches |
| Infinite Money | Currency never decreases when spending | F2 | Re-enable after loading a save |
| Infinite Stamina | Stamina bar stays full | F3 | Safe to leave on |

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
