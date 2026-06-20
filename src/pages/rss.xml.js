import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { url } from '../utils/url';

export async function GET(context) {
  const tables = (await getCollection('tables')).sort(
    (a, b) => b.data.updated.valueOf() - a.data.updated.valueOf()
  );

  return rss({
    title: 'tint-cheats — Cheat Engine Tables & Trainers',
    description:
      'Free, open-source Cheat Engine tables and trainers for single-player games. Checksum-verified and VirusTotal-scanned.',
    site: context.site,
    items: tables.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.updated,
      link: new URL(url('/tables/' + entry.id), context.site).href,
    })),
  });
}
