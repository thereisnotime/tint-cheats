#!/usr/bin/env python3
"""Lint every tables/**/*.ct so Cheat Engine can actually open it.

Cheat Engine's table parser is pickier than a generic XML parser. The two
failure modes that silently produce a "data error" on open are:

  1. A leading UTF-8 BOM (EF BB BF) before <?xml. This is *legal* XML, so a
     normal parser accepts it, but CE rejects it.
  2. A bare '<' or '&' inside an <AssemblerScript>/<LuaScript> body (Lua/ASM
     comparisons like `x < 1` or `a & b`). These must be &lt; / &amp;.

This script checks for both, plus general XML well-formedness. No dependencies
(uses only the standard library), so it runs anywhere Python 3 is available.
"""
import sys
import glob
import xml.etree.ElementTree as ET

GREEN, RED, YELLOW, RESET = "\033[32m", "\033[31m", "\033[33m", "\033[0m"


def check(path: str) -> list[str]:
    errors: list[str] = []
    with open(path, "rb") as fh:
        raw = fh.read()

    # 1. UTF-8 BOM — legal XML but CE refuses to open it.
    if raw.startswith(b"\xef\xbb\xbf"):
        errors.append("starts with a UTF-8 BOM (EF BB BF) - CE rejects this; "
                      "save the file as UTF-8 without BOM")

    # 2. General XML well-formedness. Catches bare '<' / raw '&' in script
    #    bodies, unbalanced tags, bad entities, invalid encoding, etc.
    try:
        ET.fromstring(raw)
    except ET.ParseError as exc:
        line, col = exc.position
        snippet = ""
        try:
            offending = raw.decode("utf-8", "replace").splitlines()[line - 1]
            snippet = f"  ->  {offending.strip()[:100]}"
        except IndexError:
            pass
        errors.append(f"not well-formed XML at line {line}, col {col}: {exc.code}"
                      f"\n        (often a bare '<' or '&' in a Lua/ASM script - "
                      f"escape them as &lt; / &amp;){snippet}")
    return errors


def main() -> int:
    files = sorted(glob.glob("tables/**/*.ct", recursive=True))
    if not files:
        print(f"{YELLOW}No .ct files found under tables/{RESET}")
        return 0

    print(f"\nChecking {len(files)} cheat table(s)\n")
    total = 0
    for path in files:
        problems = check(path)
        if problems:
            total += len(problems)
            print(f"{RED}FAIL{RESET} {path}")
            for p in problems:
                print(f"    {RED}-{RESET} {p}")
        else:
            print(f"{GREEN} OK {RESET} {path}")

    print()
    if total:
        print(f"{RED}{total} problem(s) found{RESET}")
        return 1
    print(f"{GREEN}all cheat tables OK{RESET}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
