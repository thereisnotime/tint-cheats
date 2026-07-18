---
title: "SWAPMEAT Cheat Engine Table"
game: "SWAPMEAT"
slug: "swapmeat"
status: working
table_version: "0.4.4"
author: "TINT"
author_url: "https://github.com/thereisnotime"
ce_version: ">=7.5"
game_versions:
  - version: "Current Steam build (Early Access)"
    store: Steam
    tested: true
platforms: [Windows]
singleplayer_only: true
updated: 2026-07-18
released: 2026-07-18
tags: [roguelite, third-person-shooter, co-op, unity, mono, early-access, ammo, currency, xp]
cheats:
  - name: "Infinite Ammo"
    hotkey: "F1"
    description: "Your magazines never run dry — a single code patch stops ammo from decrementing for any weapon, so no reloading is ever needed."
  - name: "God Mode"
    hotkey: "F2"
    description: "Freezes your character's health at maximum, so you take no damage. Re-scans for your live player object every few seconds."
  - name: "Currency"
    hotkey: "F3"
    description: "Freezes Glizzy, Incentive Points, Cent, and Obtanium to values you set (default 99999). Edit each amount in the child rows under this cheat."
  - name: "XP Per Kill"
    hotkey: "F5"
    description: "Multiplies the XP granted on every enemy kill by an editable amount (default 100x) for fast level-ups."
  - name: "Disable All Cheats"
    hotkey: "F12"
    description: "Panic key: turns every active cheat back off at once."
files:
  - name: "tint-swapmeat-0.4.4.ct"
    label: "SWAPMEAT Trainer (v0.4.4)"
cover: ./media/cover.jpg
game_description: "SWAPMEAT is a roguelite third-person shooter where you harvest alien body parts — heads, torsos and legs, each with its own power — to improvise new builds mid-fight. Play solo or in 4-player co-op. By One More Game."
trailer: "https://store.steampowered.com/app/2790700/SWAPMEAT/"
screenshots:
  - ./media/screenshot-1.png
description: "Free, open-source Cheat Engine table for SWAPMEAT: infinite ammo, god mode, currency and XP-per-kill freezes with editable values. Solo/host only. Auto-attaches to the game."
---

## Overview

A Cheat Engine table for **SWAPMEAT**, the roguelite body-part-swapping
third-person shooter (Unity/Mono). It provides **Infinite Ammo** (F1),
**God Mode** (F2), a **Currency** freeze with editable values (F3), and
**XP Per Kill** for fast level-ups (F5). Everything is hotkey driven, and the
table auto-attaches to the game and re-finds the live objects for you.

> **Solo / host only.** SWAPMEAT is server-authoritative (FishNet), so these
> cheats only affect *your own* solo or hosted session — client edits revert when
> you join someone else's game. Do not attempt to use this against other players.

The source is plain text in this repo, the file is checksummed, and there are no
paywalls, surveys, or download gates.

## Notes

- **Solo / host only.** If you join another player's game, the server owns the
  state and your edits revert — this table is for single-player / your own host.
- **Mono must be active.** The table launches Cheat Engine's Mono data collector
  on enable. If it wedges (nothing happens / "Mono init failed"), close CE and the
  game, reopen both fresh, then use CE's menu **Mono → Activate** before enabling.
- Enable the object-based cheats (God Mode, Currency, XP) **once you are in a run**
  so the objects exist to be found; they re-scan periodically on a timer.
- Currency values and the XP multiplier are editable child rows — double-click a
  value to change it (default currency 99999, default XP 100x).

## Requirements

- [Cheat Engine](https://www.cheatengine.org/) 7.5 or newer.
- SWAPMEAT on Steam (Windows), Early Access.
- A solo or self-hosted session. Do not use in someone else's game.

## Installation & Usage

1. Install Cheat Engine 7.5 or newer.
2. Download `tint-swapmeat-0.4.4.ct` from the download box on this page.
3. Verify the SHA-256 shown here (optional but recommended).
4. Launch SWAPMEAT and start a solo or hosted run.
5. Open the `.CT` file in Cheat Engine. It auto-attaches to the game.
6. Tick the cheats you want, or use the hotkeys: F1 ammo, F2 god mode, F3 currency,
   F5 XP per kill. Press **F12** to switch everything off.

## Compatibility

The cheats resolve their targets at runtime through Mono (class vtables and
JIT-compiled methods are re-found on every enable), so they tolerate address
shifts better than hardcoded offsets. SWAPMEAT is in Early Access, though, so a
larger update that renames or restructures the `Omg.Rog` classes may require a
table update. If something stops working, please
[open an issue](https://github.com/thereisnotime/tint-cheats/issues/new?template=report-issue.yml)
with your game version.

## Known Issues

- **Multiplayer:** anything you change is local and reverts the moment you join
  another host's session — by design (server-authoritative). Host or play solo.
- The Mono collector can occasionally wedge on first launch; a clean restart of CE
  and the game (then **Mono → Activate**) fixes it.
- Early Access: game patches can move the internal classes and break a function
  until the table is updated.

## Changelog

### 0.4.4 - initial release
- Infinite Ammo (F1), God Mode (F2), Currency freeze with editable
  Glizzy/Incentive/Cent/Obtanium values (F3), XP Per Kill with an editable
  multiplier (F5), and a disable-all panic key (F12).
- Mono-based: re-resolves classes and JIT methods each enable; auto-attach
  watchdog and process-exit cleanup. Solo / host only.

## Credits

- Table by TINT (thereisnotime).
- SWAPMEAT by One More Game. This table is unofficial and not affiliated with the
  developers or publisher.
