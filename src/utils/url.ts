/**
 * Site-wide URL helpers.
 *
 * `SITE` is the canonical origin used for absolute URLs (sitemap, RSS, OG tags).
 * `BASE` is the configured base path (e.g. `/tint-cheats`) from astro.config.mjs.
 * `url()` joins `BASE` with a relative path, collapsing duplicate slashes and
 * guaranteeing exactly one leading slash so links work under the GitHub Pages
 * subpath without doubling separators.
 */

export const SITE = 'https://thereisnotime.github.io';
export const BASE = import.meta.env.BASE_URL;

/**
 * Build a root-relative URL under the site base path.
 *
 * @param path - A path fragment to append to the base (with or without a leading slash).
 * @returns A normalized path beginning with a single `/`.
 *
 * @example
 * url();              // "/tint-cheats"
 * url('tables');      // "/tint-cheats/tables"
 * url('/tables/foo'); // "/tint-cheats/tables/foo"
 */
export function url(path = ''): string {
  const joined = `/${BASE}/${path}`;
  return joined.replace(/\/{2,}/g, '/').replace(/(.)\/$/, '$1');
}
