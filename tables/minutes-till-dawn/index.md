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
cheats:
  - name: "XP Boost"
    hotkey: "F1"
    description: "Multiplies XP gained per drop. Set the value to control how fast you level."
  - name: "Ammo Lock"
    hotkey: "F2"
    description: "Locks ammo to infinite, or to a value you set."
  - name: "Max Pickup Range"
    hotkey: "F3"
    description: "Greatly increases the pickup range for drops."
  - name: "Soul Vacuum"
    hotkey: "F4"
    description: "Pulls in all souls and drops on the map."
  - name: "Unlimited Souls"
    hotkey: "F5"
    description: "Keeps your soul count from dropping."
  - name: "Freeze Hearts"
    hotkey: "F6"
    description: "Locks your current health (hearts)."
  - name: "Freeze Timer"
    hotkey: "F7"
    description: "Stops the round timer from advancing."
  - name: "Set Timer to X"
    hotkey: "F8"
    description: "Sets the round timer to a chosen number of seconds."
  - name: "Speed Boost"
    hotkey: "F9"
    description: "Movement speed multiplier, configurable (default 4x)."
  - name: "Rapid Fire + Boost Damage"
    hotkey: "F10"
    description: "Increases fire rate and damage."
  - name: "One-Hit Enemies"
    hotkey: "F11"
    description: "Enemies die in a single hit."
  - name: "Disable All Cheats"
    hotkey: "F12"
    description: "Turns every active script back off."
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

## Notes

The full cheat list with hotkeys is shown in the Cheats section above. Hotkeys
map to F1 through F12 directly, and you can change or remove any of them inside
Cheat Engine if they clash with the game.

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
