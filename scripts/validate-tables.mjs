#!/usr/bin/env node
// Structural validation of every tables/*/index.md. Runs before deploy.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const tablesDir = join(root, 'tables');

const STATUSES = ['working', 'outdated', 'wip', 'broken'];

const green = (s) => `\x1b[32m${s}\x1b[0m`;
const red = (s) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s) => `\x1b[33m${s}\x1b[0m`;
const bold = (s) => `\x1b[1m${s}\x1b[0m`;

function folders() {
  if (!existsSync(tablesDir)) return [];
  return readdirSync(tablesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function fileExists(folder, rel) {
  // strip leading ./ and normalize, resolve relative to the table folder
  const clean = rel.replace(/^\.\//, '');
  const p = normalize(join(tablesDir, folder, clean));
  return existsSync(p) && statSync(p).isFile();
}

let totalErrors = 0;
let okCount = 0;
let warnCount = 0;

const results = [];

for (const folder of folders()) {
  const idx = join(tablesDir, folder, 'index.md');
  const errors = [];
  const warnings = [];

  if (!existsSync(idx)) {
    // a folder without index.md is not a table; skip silently
    continue;
  }

  let data;
  try {
    ({ data } = matter(readFileSync(idx, 'utf8')));
  } catch (err) {
    errors.push(`could not parse frontmatter: ${err.message}`);
    results.push({ folder, errors, warnings });
    totalErrors += errors.length;
    continue;
  }

  // required fields
  for (const field of ['title', 'game', 'status', 'table_version', 'description']) {
    if (data[field] === undefined || data[field] === null || data[field] === '') {
      errors.push(`missing required field: ${field}`);
    }
  }
  if (!Array.isArray(data.files) || data.files.length === 0) {
    errors.push('files must be a non-empty array');
  }

  // status enum
  if (data.status !== undefined && !STATUSES.includes(data.status)) {
    errors.push(`status "${data.status}" not in [${STATUSES.join(', ')}]`);
  }

  // slug must match folder
  if (data.slug !== undefined && data.slug !== folder) {
    errors.push(`slug "${data.slug}" must equal folder name "${folder}"`);
  }

  // description length
  if (typeof data.description === 'string' && data.description.length > 200) {
    errors.push(`description is ${data.description.length} chars (max 200)`);
  }

  // files exist
  if (Array.isArray(data.files)) {
    for (const f of data.files) {
      if (!f || typeof f.name !== 'string') {
        errors.push('a files[] entry is missing a "name"');
        continue;
      }
      if (!fileExists(folder, f.name)) {
        errors.push(`files[].name not found in folder: ${f.name}`);
      }
      // naming convention: tint-<game-slug>-<version>.ct
      if (/\.ct$/i.test(f.name) && data.game && data.table_version) {
        const prefix = `tint-${slugify(data.game)}-`;
        const canonical = `${prefix}${data.table_version}.ct`;
        if (!f.name.toLowerCase().startsWith(prefix)) {
          errors.push(`"${f.name}" must follow tint-<game>-<version>.ct (expected like "${canonical}")`);
        } else if (f.name !== f.name.toLowerCase()) {
          errors.push(`"${f.name}" should be lowercase (expected like "${canonical}")`);
        }
      }
    }
  }

  // cover exists
  if (data.cover !== undefined && data.cover !== null && data.cover !== '') {
    if (typeof data.cover !== 'string' || !fileExists(folder, data.cover)) {
      errors.push(`cover image not found: ${data.cover}`);
    }
  }

  // game_versions
  if (!Array.isArray(data.game_versions) || data.game_versions.length === 0) {
    errors.push('at least one game_versions[] entry is required');
  } else if (!data.game_versions.some((g) => g && g.tested === true)) {
    warnings.push('no game_versions[] entry is marked tested:true');
  }

  // updated parses
  if (data.updated === undefined || data.updated === null || data.updated === '') {
    errors.push('missing required field: updated');
  } else if (isNaN(new Date(data.updated).getTime())) {
    errors.push(`updated is not a valid date: ${data.updated}`);
  }

  results.push({ folder, errors, warnings });
  totalErrors += errors.length;
  warnCount += warnings.length;
  if (errors.length === 0) okCount++;
}

console.log(bold('\nValidating tables\n'));

if (results.length === 0) {
  console.log(yellow('No tables found under tables/'));
}

for (const { folder, errors, warnings } of results) {
  if (errors.length === 0) {
    console.log(`${green('✓')} ${folder}`);
  } else {
    console.log(`${red('✗')} ${folder}`);
    for (const e of errors) console.log(`    ${red('✗')} ${e}`);
  }
  for (const w of warnings) console.log(`    ${yellow('!')} ${w}`);
}

console.log('');
const tableWord = results.length === 1 ? 'table' : 'tables';
if (totalErrors === 0) {
  console.log(green(`${okCount}/${results.length} ${tableWord} OK`) + (warnCount ? yellow(` (${warnCount} warning${warnCount === 1 ? '' : 's'})`) : ''));
  process.exit(0);
} else {
  console.log(red(`${okCount}/${results.length} ${tableWord} OK, ${totalErrors} error${totalErrors === 1 ? '' : 's'}`) + (warnCount ? yellow(`, ${warnCount} warning${warnCount === 1 ? '' : 's'}`) : ''));
  process.exit(1);
}
