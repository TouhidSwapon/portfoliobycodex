# Touhid Swapon Portfolio (AI-era Rebuild)

Modern Next.js + Tailwind + Framer Motion portfolio focused on AI-era positioning, leadership, mentorship, and product impact.

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS
- Framer Motion

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.

## Build for Production

```bash
npm run build
npm run start
```

## Folder Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  about.tsx
  assistant-orb.tsx
  capabilities.tsx
  contact.tsx
  experience.tsx
  fitness.tsx
  hero.tsx
  now-focus.tsx
  projects.tsx
  reveal.tsx
  site-nav.tsx
  thinking.tsx
  theme-toggle.tsx
data/
  profile.ts
```

## Personal Content Source

Content was extracted and modernized from your local legacy portfolio at:
`/Users/touhidswapon/Development/Portfolio/TouhidSwapon.github.io/index.html`

## Deployment

### Vercel (Recommended)

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Framework preset: `Next.js`.
4. Deploy.

### GitHub Pages

For GitHub Pages, use static export:

1. Add to `next.config.mjs`:
   ```ts
   const nextConfig = {
     reactStrictMode: true,
     output: "export"
   };
   ```
2. Build static output:
   ```bash
   npm run build
   ```
3. Deploy `out/` to your GitHub Pages branch.
