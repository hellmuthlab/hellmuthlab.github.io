// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ExpressiveCodeTheme } from '@astrojs/starlight/expressive-code';
import { readFileSync } from 'node:fs';

// Protocol sections live in one file: add a line there (and a folder) for a new section.
const sections = JSON.parse(readFileSync(new URL('./src/data/protocol-sections.json', import.meta.url), 'utf8'));

// Code theme: one text colour; only strings (red), numbers (teal) and comments (grey italic) are coloured.
const codeTheme = (type, bg, fg, str, num, com) =>
  ExpressiveCodeTheme.fromJSONString(JSON.stringify({
    name: `hellmuth-${type}`, type,
    colors: { 'editor.background': bg, 'editor.foreground': fg },
    tokenColors: [
      { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: com, fontStyle: 'italic' } },
      { scope: ['string', 'punctuation.definition.string'], settings: { foreground: str } },
      { scope: ['constant.numeric'], settings: { foreground: num } },
    ],
  }));

// https://astro.build/config
export default defineConfig({
  // Until the domain is switched over this still works at hellmuthlab.github.io
  site: 'https://hellmuthlab.org',
  integrations: [
    starlight({
      title: 'Hellmuth Lab Manual',
      description: 'Onboarding, protocols and lab organization of the Hellmuth Lab.',
      logo: {
        light: './src/assets/logo.svg',
        dark: './src/assets/logo-dark.svg',
        alt: 'Hellmuth Lab Manual',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      customCss: [
        '@fontsource-variable/open-sans',
        './src/styles/brand.css',
        './src/styles/docs.css',
      ],
      expressiveCode: {
        themes: [
          codeTheme('dark', '#232447', '#e8e9ef', '#f0868f', '#5fd0c4', '#8b93b8'),
          codeTheme('light', '#f4f4f4', '#24292f', '#d14', '#099', '#998'),
        ],
        useStarlightUiThemeColors: false,
        minSyntaxHighlightingColorContrast: 0,   // keep the exact colours above
        styleOverrides: { borderRadius: '3px', frames: { frameBoxShadowCssValue: false } },
      },
      sidebar: [
        {
          label: 'Lab manual',
          collapsed: true,   // only the group you are currently in stays open
          items: [
            { label: 'Lab manual home', link: '/lab-manual/' },
            { label: 'Onboarding', link: '/lab-manual/onboarding/' },
            { label: 'Organization & inventory', collapsed: true, items: [{ autogenerate: { directory: 'lab-manual/organization' } }] },
          ],
        },
        {
          label: 'Protocols',
          collapsed: true,   // only the group you are currently in stays open
          items: [
            { label: 'Overview', link: '/protocols/' },
            ...sections.map((sec) => ({
              label: sec.label,
              collapsed: true,
              items: [{ autogenerate: { directory: `protocols/${sec.slug}` } }],
            })),
          ],
        },
        { label: '← Lab website', link: '/' },
      ],
    }),
  ],
});
