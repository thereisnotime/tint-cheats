import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tables = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './tables', generateId: ({ entry }) => entry.replace(/\/index\.md$/, '') }),
  schema: ({ image }) => z.object({
    title: z.string(),
    game: z.string(),
    slug: z.string().optional(),
    status: z.enum(['working', 'outdated', 'wip', 'broken']),
    table_version: z.string(),
    ce_version: z.string().default('>=7.5'),
    game_versions: z.array(z.object({
      version: z.string(),
      store: z.enum(['Steam', 'Epic', 'GOG', 'GamePass', 'Other']).default('Steam'),
      build_id: z.string().optional(),
      tested: z.boolean().default(true),
    })).default([]),
    platforms: z.array(z.string()).default(['Windows']),
    singleplayer_only: z.boolean().default(true),
    updated: z.coerce.date(),
    released: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    cheats: z.array(z.object({
      name: z.string(),
      hotkey: z.string().optional(),
      description: z.string().optional(),
    })).default([]),
    files: z.array(z.object({ name: z.string(), label: z.string() })).min(1),
    virustotal: z.string().url().optional(),
    cover: image().optional(),
    game_logo: image().optional(),
    screenshots: z.array(image()).default([]),
    trailer: z.string().url().optional(),
    game_description: z.string().optional(),
    description: z.string().max(200),
  }),
});

export const collections = { tables };
