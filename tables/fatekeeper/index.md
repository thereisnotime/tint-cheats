---
title: "Fatekeeper Cheat Engine Table"
game: "Fatekeeper"
slug: "fatekeeper"
status: wip
table_version: "1.0.1"
author: "TINT"
author_url: "https://github.com/thereisnotime"
ce_version: ">=7.5"
game_versions:
  - version: "Current Steam build"
    store: Steam
    tested: true
platforms: [Windows]
singleplayer_only: true
updated: 2026-06-20
released: 2026-06-02
tags: [action, rpg, first-person, sword-and-sorcery, god-mode]
cheats:
  - name: "God Mode"
    hotkey: "F1"
    description: "Keeps the player topped up by forcing health high on the shared damage-write hook. AOB-based, so it relocates itself after game patches."
  - name: "Disable All Cheats"
    hotkey: "F12"
    description: "Panic key: turns every active cheat back off at once."
files:
  - name: "tint-fatekeeper-1.0.1.ct"
    label: "Fatekeeper Trainer (v1.0.1)"
cover: ./media/cover.jpg
game_description: "Venture into a handcrafted world where ruins whisper of past cataclysms. Master the art of sword and sorcery and forge your path with relics, spells and choices that shape who you become in this first-person RPG. By Paraglacial (published by THQ Nordic)."
trailer: "https://store.steampowered.com/app/2186990/Fatekeeper/"
screenshots:
  - ./media/screenshot-1.jpg
  - ./media/screenshot-2.jpg
  - ./media/screenshot-3.jpg
  - ./media/screenshot-4.jpg
description: "Free, open-source Cheat Engine table for Fatekeeper: AOB-based God Mode that self-heals across game patches, plus a panic disable-all hotkey. Auto-attaches to the game."
---

## Overview

A Cheat Engine table for **Fatekeeper**, a first-person sword-and-sorcery RPG
(Unreal Engine). It provides a God Mode that hooks the game's shared health-write
routine and keeps the player topped up.
The hook is located with an AOB scan every time it is enabled, so it re-finds the
right instruction after game updates instead of silently breaking.

This is an early table (work in progress). The source is plain text in this repo,
the file is checksummed, and there are no paywalls, surveys, or download gates.

## Notes

- God Mode and the game's own damage system share the same write instruction; the
  table only forces the player's health high and leaves the original store intact
  for everything else.
- F12 is a panic key that disables every active cheat at once.

## Requirements

- [Cheat Engine](https://www.cheatengine.org/) 7.5 or newer.
- Fatekeeper on Steam (Windows).
- Single-player session only.

## Installation & Usage

1. Install Cheat Engine 7.5 or newer.
2. Download `tint-fatekeeper-1.0.1.ct` from the download box on this page.
3. Verify the SHA-256 shown here (optional but recommended).
4. Launch Fatekeeper.
5. Open the `.CT` file in Cheat Engine. It auto-attaches to the game.
6. Tick **God Mode**, or press **F1** in game. Press **F12** to switch everything off.

## Compatibility

God Mode uses an AOB scan rather than a hardcoded address, so it survives the kind
of code-shifting patches that break offset-based tables. If a future update changes
the instruction pattern itself and God Mode stops working, please
[open an issue](https://github.com/thereisnotime/tint-cheats/issues/new?template=report-issue.yml)
with your game version.

## Known Issues

- Work in progress: God Mode is the only gameplay function so far.

## Changelog

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
