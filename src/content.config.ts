import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  // Protocols and lab manual (rendered by Starlight)
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      // Extra frontmatter for protocol and recipe pages (shown under the title, see src/components/PageTitle.astro).
      // `lastUpdated` is Starlight's own field and is used as is.
      extend: z.object({
        version: z.union([z.string(), z.number()]).transform(String).optional(),   // e.g. "1.1" (use quotes for e.g. "1.10")
        authors: z.union([z.string(), z.array(z.string())]).optional(),            // one name, or a list
        firstPosted: z.coerce.date().optional(),                                   // e.g. 2026-11-14
      }),
    }),
  }),
  // Code tutorials (rendered by the main site, see src/pages/code/[slug].astro)
  tutorials: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/tutorials' }) }),
};
