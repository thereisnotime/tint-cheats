---
title: "Arms of God Cheat Engine Table"
game: "Arms of God"
slug: "arms-of-god"
status: working
table_version: "1.2.1"
author: "TINT"
author_url: "https://github.com/thereisnotime"
ce_version: ">=7.5"
game_versions:
  - version: "1.0"
    store: Steam
    tested: true
platforms: [Windows]
singleplayer_only: true
updated: 2026-06-20
released: 2026-06-08
tags: [roguelite, bullet-heaven, autoshooter, action, rpg, resources]
cheats:
  - name: "Unlimited Resources"
    hotkey: "F3"
    description: "Locks all six resources (Ashes, Shards, Vows, Cores, Edicts, Relics) to a value you set. Edit the 'Lock value' child entry to choose the amount (default 9999)."
files:
  - name: "tint-arms-of-god-1.2.1.ct"
    label: "Arms of God Trainer (v1.2.1)"
cover: ./media/cover.jpg
game_description: "Gear up for a battle through hell in this roguelite Bullet Heaven Arena Autoshooter with Doom-inspired gore vibes, metal music, and a satisfying combat feel. Wield five weapons at once, upgrade and merge them to forge indestructible builds, and bring divine justice to a world on the brink of chaos. By Dark Jay Studio (published by Dark Jay Studio / Galaktus)."
trailer: "https://store.steampowered.com/app/3100310/Arms_of_God/"
screenshots:
  - ./media/screenshot-1.jpg
  - ./media/screenshot-2.jpg
  - ./media/screenshot-3.jpg
  - ./media/screenshot-4.jpg
description: "Free, open-source Cheat Engine table for Arms of God: lock all six resources to an editable value. Auto-attaches to the game and is fully hotkey driven."
---

## Overview

A Cheat Engine table for **Arms of God**, a roguelite bullet-heaven autoshooter
(Unreal Engine 5). It locks the six in-game resources — Ashes, Shards, Vows,
Cores, Edicts and Relics — to a value you choose, so you can stop grinding
upgrade currency and forge the build you want.

This is an early, single-function table (work in progress). The source is plain
text in this repo, the file is checksummed, and there are no paywalls, surveys,
or download gates anywhere.

## Notes

- The resource lock walks the live `GUObjectArray` to find the gameplay resource
  object every cycle, so it re-acquires the values automatically across saves and
  level transitions.
- Set your own amount with the **Lock value (edit me)** child entry under the
  cheat. It defaults to 9999.

## Requirements

- [Cheat Engine](https://www.cheatengine.org/) 7.5 or newer.
- Arms of God on Steam (Windows), game build 1.0.
- Single-player session only.

## Installation & Usage

1. Install Cheat Engine 7.5 or newer.
2. Download `tint-arms-of-god-1.2.1.ct` from the download box on this page.
3. Verify the SHA-256 shown here (optional but recommended).
4. Launch Arms of God.
5. Open the `.CT` file in Cheat Engine. It auto-attaches to the game.
6. Tick **Unlimited Resources**, or press **F3** in game.

## Compatibility

The pointer logic is built to survive patches by scanning for the resource object
at runtime rather than hardcoding an address. If a large update changes the object
layout and the cheat stops working, please
[open an issue](https://github.com/thereisnotime/tint-cheats/issues/new?template=report-issue.yml)
with your game version.

## Known Issues

- Work in progress: only the resource lock is implemented so far.
- The lock value is allocated in the game process on first attach; if you start the
  table before the game is running, it attaches automatically once the game opens.

## Changelog

### 1.2.1
- Added the tint-cheats community/info rows (official site, Telegram, Matrix) and
  visual separators. No gameplay changes.

### 1.2.0
- Unlimited Resources (F3) with an editable lock value, auto-attach watchdog, and
  process-exit cleanup.

## Credits

- Table by TINT (thereisnotime).
- Arms of God by Dark Jay Studio (published by Dark Jay Studio / Galaktus). This
  table is unofficial and not affiliated with the developers or publisher.
