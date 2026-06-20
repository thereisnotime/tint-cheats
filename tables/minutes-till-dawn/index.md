---
title: "Minutes Till Dawn Cheat Engine Table"
game: "Minutes Till Dawn"
slug: "minutes-till-dawn"
status: working
table_version: "1.7.0"
ce_version: ">=7.5"
game_versions:
  - version: "Current Steam build"
    store: Steam
    tested: true
platforms: [Windows]
singleplayer_only: true
updated: 2026-06-20
released: 2026-06-20
tags: [roguelite, survival, shooter, unity, timer, ammo]
files:
  - name: "minutes-till-dawn.CT"
    label: "Minutes Till Dawn Trainer (v1.7)"
cover: ./media/cover.png
description: "Free, open-source Cheat Engine table for Minutes Till Dawn: XP boost, ammo lock, unlimited souls, freeze timer, rapid fire, one-hit kills and more."
---

## Overview

A Cheat Engine table for **Minutes Till Dawn**, the survival roguelite shooter.
Everything is hotkey driven (F1 to F12), so you can toggle effects mid-run
without alt-tabbing. The table is built for the single-player game only.

All twelve functions are listed below with their default hotkeys. The source is
plain text in this repo, the file is checksummed, and there is a VirusTotal link
on this page so you can verify the download before running it.

## Features

| Cheat | Hotkey | Description |
| --- | --- | --- |
| XP Boost | F1 | Multiplies XP gained per drop. Set the value to control how fast you level. |
| Ammo Lock | F2 | Locks ammo to infinite, or to a value you set. |
| Max Pickup Range | F3 | Greatly increases pickup range for drops. |
| Soul Vacuum | F4 | Pulls in all souls and drops on the map. |
| Unlimited Souls | F5 | Keeps your soul count from dropping. |
| Freeze Hearts | F6 | Locks your current health (hearts). |
| Freeze Timer | F7 | Stops the round timer from advancing. |
| Set Timer to X | F8 | Sets the round timer to a chosen number of seconds. |
| Speed Boost | F9 | Movement speed multiplier, configurable (default 4x). |
| Rapid Fire + Boost Damage | F10 | Increases fire rate and damage. |
| One-Hit Enemies | F11 | Enemies die in a single hit. |
| Disable All Cheats | F12 | Turns every active script back off. |

Hotkeys map to F1 through F12 directly. You can change or remove any hotkey
inside Cheat Engine if they clash with the game.

## Requirements

- [Cheat Engine](https://www.cheatengine.org/) 7.5 or newer.
- Minutes Till Dawn on Steam (Windows).
- Single-player session. Do not use this in any online or competitive context.

## Installation & Usage

1. Install Cheat Engine 7.5 or newer.
2. Download `minutes-till-dawn.CT` from the download box on this page.
3. Verify the SHA-256 against the value shown here (optional but recommended),
   or check the VirusTotal link.
4. Launch Minutes Till Dawn.
5. Open the `.CT` file in Cheat Engine (File, Open, or double-click it).
6. Click the glowing computer icon in Cheat Engine and select the game process.
7. Tick the boxes for the cheats you want, or use the F1 to F12 hotkeys in game.
8. Press F12 to switch everything off.

## Compatibility

The version matrix above is generated from this table's metadata. The trainer
targets the current Steam build of Minutes Till Dawn. If a game update moves
things around and a function stops working, please
[open an issue](https://github.com/thereisnotime/tint-cheats/issues/new/choose)
with your game version and which function broke.

## Known Issues

- After a large game patch, value-based features (XP, timer, souls) may need a
  table update if the game's internal layout changes.
- Speed and rapid-fire are intentionally strong defaults. Tune the values in
  Cheat Engine if they feel excessive.

## Changelog

### 1.7.0
- Twelve functions on F1 to F12: XP boost, ammo lock, pickup range, soul vacuum,
  unlimited souls, freeze hearts, freeze timer, set timer, speed boost, rapid
  fire + damage, one-hit enemies, and a disable-all toggle.

## Credits

- Table by TINT (thereisnotime).
- Minutes Till Dawn by flanne / Erabit Studios. This table is unofficial and not
  affiliated with the developers or publisher.
