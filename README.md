# Hellmuth Lab website

Astro + Starlight site for **hellmuthlab.org**, hosted on GitHub Pages (`hellmuthlab/hellmuthlab.github.io`).

- Main site (Team, Publications, Code, Contact): `src/pages/`
- Protocols (sorted by section): `src/content/docs/protocols/` · Lab manual (Onboarding, Organization): `src/content/docs/lab-manual/` – plain Markdown
- People, affiliations, publications: `src/data/*.json`
- Brand colors and fonts: `src/styles/brand.css`

## First-time setup (once, in Terminal on your Mac)

```bash
cd ~/github/hellmuthlab.github.io
npm install astro @astrojs/starlight @fontsource-variable/montserrat
npm run dev          # preview at http://localhost:4321
```

Search only works in a production build: `npm run build && npm run preview`.

## Publishing

```bash
git add -A && git commit -m "Describe the change" && git push
```

The GitHub Action in `.github/workflows/deploy.yml` builds and publishes the site. One-time GitHub setting:
repository **Settings → Pages → Source: GitHub Actions**.

## Switching the domain (when ready)

1. Add a file `public/CNAME` containing `hellmuthlab.org`.
2. Repo **Settings → Pages → Custom domain**: `hellmuthlab.org`; turn on *Enforce HTTPS*.
3. Squarespace DNS: GitHub's four `A` records for the apex domain and a `CNAME` for `www` → `hellmuthlab.github.io`
   (take the current IP addresses from GitHub's Pages documentation).
4. Verify the domain in the organization settings.

## Adding a code tutorial

Add a Markdown file to `src/content/tutorials/` (header: `title`, `description`, `order`; see the existing two). It appears
at `/code/<file-name>/`. To list it on the Code page, add an entry to the list at the top of `src/pages/code.astro`.

## Adding a protocol

1. Copy `src/content/docs/protocols/_protocol-template.mdx` into the right section folder, e.g.
   `src/content/docs/protocols/gene-expression/qpcr.mdx`, and fill it in (the `title:` line is required).
2. Check it in the local preview, then commit and push.

`draft: true` in the header keeps a page off the published site. New section: add a line to
`src/data/protocol-sections.json` and create the folder with an `index.md` (copy one from another section).

## Fonts

Lemon Milk is donationware: free for personal, educational and non-profit use; commercial use requires a donation
(see `lab_logo/lemon-milk-font/misc/READ_ME.txt`). It contains capital letters only, so it is used for headings and
navigation. Body text is Montserrat (open source).
