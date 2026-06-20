#!/usr/bin/env node
// Generate src/data/checksums.json from the .CT files declared in each table.
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync, statSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const tablesDir = join(root, 'tables');
const outFile = join(root, 'src', 'data', 'checksums.json');
// .CT files are copied here so they download from our own origin. GitHub raw
// URLs serve the file inline (text/plain), which opens in the browser instead
// of downloading. A same-origin file + the `download` attribute forces a save.
const downloadsDir = join(root, 'public', 'downloads');

const RAW_BASE = 'https://raw.githubusercontent.com/thereisnotime/tint-cheats/main/tables';
const HISTORY_BASE = 'https://github.com/thereisnotime/tint-cheats/commits/main/tables';
const VT_BASE = 'https://www.virustotal.com/gui/file';

const strict = !!process.env.STRICT;
let warnings = 0;

function listTableFolders() {
  if (!existsSync(tablesDir)) return [];
  return readdirSync(tablesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

function declaredFiles(folder) {
  const idx = join(tablesDir, folder, 'index.md');
  const names = new Set();
  if (existsSync(idx)) {
    try {
      const { data } = matter(readFileSync(idx, 'utf8'));
      if (Array.isArray(data.files)) {
        for (const f of data.files) {
          if (f && typeof f.name === 'string') names.add(f.name);
        }
      }
    } catch (err) {
      console.warn(`warning: could not parse ${folder}/index.md: ${err.message}`);
      warnings++;
    }
  }
  // safety net: include any *.CT present in the folder
  const dir = join(tablesDir, folder);
  if (existsSync(dir)) {
    for (const entry of readdirSync(dir)) {
      if (entry.toLowerCase().endsWith('.ct')) names.add(entry);
    }
  }
  return [...names];
}

function hashFile(path) {
  const buf = readFileSync(path);
  return { sha256: createHash('sha256').update(buf).digest('hex'), size: buf.length };
}

const out = {};
let counted = 0;

for (const folder of listTableFolders()) {
  for (const name of declaredFiles(folder)) {
    const key = `${folder}/${name}`;
    const filePath = join(tablesDir, folder, name);
    if (!existsSync(filePath) || !statSync(filePath).isFile()) {
      console.warn(`warning: declared file missing: ${key}`);
      warnings++;
      continue;
    }
    const { sha256, size } = hashFile(filePath);
    // Copy into public/downloads/<folder>/<name> for same-origin downloads.
    const destDir = join(downloadsDir, folder);
    mkdirSync(destDir, { recursive: true });
    copyFileSync(filePath, join(destDir, name));
    out[key] = {
      sha256,
      size,
      virustotal: `${VT_BASE}/${sha256}`,
      download: `/downloads/${folder}/${name}`,
      raw: `${RAW_BASE}/${folder}/${name}`,
      history: `${HISTORY_BASE}/${folder}/${name}`,
    };
    counted++;
  }
}

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, JSON.stringify(out, null, 2) + '\n');

console.log(`checksums: wrote ${counted} entr${counted === 1 ? 'y' : 'ies'} to ${outFile.replace(root + '/', '')}`);
if (warnings) console.log(`checksums: ${warnings} warning(s)`);

if (warnings && strict) process.exit(1);
process.exit(0);
