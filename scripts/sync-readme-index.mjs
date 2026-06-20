#!/usr/bin/env node
// Regenerate the tables index block in README.md between the TABLES markers.
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const tablesDir = join(root, 'tables');
const readmePath = join(root, 'README.md');

const START = '<!-- TABLES:START -->';
const END = '<!-- TABLES:END -->';

const STATUS_LABEL = {
  working: '✅ Working',
  outdated: '⚠️ Outdated',
  wip: '🚧 WIP',
  broken: '❌ Broken',
};

function folders() {
  if (!existsSync(tablesDir)) return [];
  return readdirSync(tablesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

function fmtDate(d) {
  if (!d) return '';
  const date = new Date(d);
  if (isNaN(date.getTime())) return String(d);
  return date.toISOString().slice(0, 10);
}

function testedVersions(data) {
  const gv = Array.isArray(data.game_versions) ? data.game_versions : [];
  const tested = gv.filter((g) => g && g.tested === true).map((g) => g.version);
  const pick = tested.length ? tested : gv.map((g) => g && g.version).filter(Boolean);
  return pick.length ? pick.join(', ') : '—';
}

const rows = [];
for (const folder of folders()) {
  const idx = join(tablesDir, folder, 'index.md');
  if (!existsSync(idx)) continue;
  let data;
  try {
    ({ data } = matter(readFileSync(idx, 'utf8')));
  } catch {
    continue;
  }
  rows.push({
    folder,
    game: data.game || data.title || folder,
    status: STATUS_LABEL[data.status] || data.status || '',
    tableVersion: data.table_version || '',
    testedVersion: testedVersions(data),
    updated: data.updated ? new Date(data.updated).getTime() : 0,
    updatedStr: fmtDate(data.updated),
  });
}

rows.sort((a, b) => b.updated - a.updated);

let block;
if (rows.length === 0) {
  block = '_No tables yet. Be the first to add one._';
} else {
  const header = '| Game | Status | Table ver | Tested game ver | Updated | Link |';
  const sep = '| --- | --- | --- | --- | --- | --- |';
  const body = rows.map((r) =>
    `| ${r.game} | ${r.status} | ${r.tableVersion} | ${r.testedVersion} | ${r.updatedStr} | [open](tables/${r.folder}/) |`
  );
  block = [header, sep, ...body].join('\n');
}

if (!existsSync(readmePath)) {
  console.error('error: README.md not found');
  process.exit(1);
}

const readme = readFileSync(readmePath, 'utf8');
const startIdx = readme.indexOf(START);
const endIdx = readme.indexOf(END);
if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
  console.error(`error: markers ${START} / ${END} not found (or out of order) in README.md`);
  process.exit(1);
}

const before = readme.slice(0, startIdx + START.length);
const after = readme.slice(endIdx);
const updated = `${before}\n\n${block}\n\n${after}`;

if (updated === readme) {
  console.log('sync-readme: README.md already up to date');
} else {
  writeFileSync(readmePath, updated);
  console.log(`sync-readme: updated README.md with ${rows.length} table(s)`);
}
process.exit(0);
