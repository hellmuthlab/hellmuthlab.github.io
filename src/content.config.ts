import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  // Protocols and lab manual (rendered by Starlight)
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  // Code tutorials (rendered by the main site, see src/pages/code/[slug].astro)
  tutorials: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/tutorials' }) }),
};
