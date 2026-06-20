---
title: "Fatekeeper Cheat Engine Table"
game: "Fatekeeper"
slug: "fatekeeper"
status: working
table_version: "1.1.0"
author: "TINT"
author_url: "https://github.com/thereisnotime"
ce_version: ">=7.5"
game_versions:
  - version: "Current Steam build"
    store: Steam
    tested: true
platforms: [Windows]
singleplayer_only: true
updated: 2026-06-21
released: 2026-06-02
tags: [action, rpg, first-person, sword-and-sorcery, god-mode, mana]
cheats:
  - name: "God Mode"
    hotkey: "F1"
    description: "Forces the player's health high on the shared damage-write hook so you don't die. AOB-based, so it relocates itself after game patches."
  - name: "Unlimited Mana"
    hotkey: "F2"
    description: "Pins mana (and other non-health resources like stamina) to full by writing max over current on the same shared hook. AOB-based; relocates after patches."
  - name: "Disable All Cheats"
    hotkey: "F12"
    description: "Panic key: turns every active cheat back off at once."
files:
  - name: "tint-fatekeeper-1.1.0.ct"
    label: "Fatekeeper Trainer (v1.1.0)"
cover: ./media/cover.jpg
game_description: "Venture into a handcrafted world where ruins whisper of past cataclysms. Master the art of sword and sorcery and forge your path with relics, spells and choices that shape who you become in this first-person RPG. By Paraglacial (published by THQ Nordic)."
trailer: "https://store.steampowered.com/app/2186990/Fatekeeper/"
screenshots:
  - ./media/screenshot-1.jpg
  - ./media/screenshot-2.jpg
  - ./media/screenshot-3.jpg
  - ./media/screenshot-4.jpg
description: "Free, open-source Cheat Engine table for Fatekeeper: AOB-based God Mode and Unlimited Mana that self-heal across game patches, plus a disable-all panic hotkey. Auto-attaches to the game."
---

## Overview

A Cheat Engine table for **Fatekeeper**, a first-person sword-and-sorcery RPG
(Unreal Engine). It provides **God Mode** (F1) and **Unlimited Mana** (F2), both
driven by a single shared code hook on the game's generic resource-write
instruction. The hook is located with an AOB scan every time it is enabled, so it
re-finds the right instruction after game updates instead of silently breaking.

The source is plain text in this repo, the file is checksummed, and there are no
paywalls, surveys, or download gates.

## Notes

- God Mode and Unlimited Mana share one write instruction. The game stores both
  health and mana through the same routine; the table tells them apart by the
  object's health-component flag and applies the right effect to each.
- God Mode forces health high; Unlimited Mana pins non-health resources (mana,
  stamina) to their maximum.
- Enabling F1 or F2 auto-installs the shared hook on demand — you don't need to
  toggle anything else.
- F12 is a panic key that disables every active cheat at once.

## Requirements

- [Cheat Engine](https://www.cheatengine.org/) 7.5 or newer.
- Fatekeeper on Steam (Windows).
- Single-player session only.

## Installation & Usage

1. Install Cheat Engine 7.5 or newer.
2. Download `tint-fatekeeper-1.1.0.ct` from the download box on this page.
3. Verify the SHA-256 shown here (optional but recommended).
4. Launch Fatekeeper.
5. Open the `.CT` file in Cheat Engine. It auto-attaches to the game.
6. Tick **God Mode** / **Unlimited Mana**, or press **F1** / **F2** in game.
   Press **F12** to switch everything off.

## Compatibility

Both cheats use an AOB scan rather than a hardcoded address, so they survive the
kind of code-shifting patches that break offset-based tables. (The original
offset-based hook died on a patch; the AOB now re-locates the instruction on every
enable.) If a future update changes the instruction pattern itself and a cheat
stops working, please
[open an issue](https://github.com/thereisnotime/tint-cheats/issues/new?template=report-issue.yml)
with your game version.

## Known Issues

- God Mode forces *every* health-bearing object high on the shared write, so
  enemies can become tanky while it is enabled. Toggle it off (or hit F12) when
  you want to fight normally.
- Both functions are value-write based; a large patch that reworks the resource
  system may need a table update.

## Changelog

### 1.1.0
- Added **Unlimited Mana** (F2): pins mana and other non-health resources to full
  through the same shared resource-write hook, distinguished from health by the
  object's health-component flag.
- Reworked God Mode and Unlimited Mana onto one self-healing "[ Core ]" AOB hook
  that auto-installs on demand; F1/F2 now just toggle their flags.

### 1.0.1
- Added the tint-cheats community/info rows (official site, Telegram, Matrix) and
  visual separators. No gameplay changes.

### 1.0.0
- God Mode (F1) via a self-healing AOB code hook, auto-attach watchdog, process-exit
  cleanup, and a disable-all panic key (F12).

## Credits

- Table by TINT (thereisnotime).
- Fatekeeper by Paraglacial (published by THQ Nordic). This table is unofficial and
  not affiliated with the developers or publisher.
