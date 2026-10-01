# PIXEL STUDIO

Cinematic portfolio for a creative studio working across web development and
professional photography. Concept: CINEMA × PHOTOGRAPHY × CODE × PIXELS.

## Setup

```bash
bun install
bun run dev      # http://localhost:8080
bun run build    # production build
```

Stack: React 19 + TypeScript, TanStack Start (Vite), Tailwind CSS v4 with CSS
variable tokens, Motion (Framer Motion), Lenis smooth scroll, Canvas 2D for the
pixel effects, react-hook-form + zod for the contact form.

## Folder structure

```
src/
  styles.css                  design tokens, type scale, pixel/grain utilities
  data/                       ALL copy and image URLs live here
    site.ts                   nav, hero, intro, about, webdev, contact, socials
    services.ts               the three service cards
    projects.ts               hero image, about image, selected work
    gallery.ts                photography gallery + categories
  components/
    layout/                   navbar, footer
    sections/                 hero, intro, services, selected-work,
                              photography, web-development, about, contact
    ui/                       smart-image, reveal, pixel-canvas,
                              pixel-particles, depixelate-canvas, lightbox,
                              custom-cursor
  hooks/                      reduced motion, fine pointer, smooth scroll,
                              active section
  routes/index.tsx            page composition + SEO head tags
```

## Replacing images and copy

Everything editable lives in `src/data/`. Components receive content via props
and never hardcode text or URLs.

- Text: edit the matching object in `src/data/site.ts` or `services.ts`.
- Photos: edit `url`, `alt` and `credit` in `projects.ts` / `gallery.ts`.
  Current photos are free remote stock images (Unsplash) marked
  `TODO: Replace with real PIXEL STUDIO photography`.
- Keep width/quality params on remote URLs (e.g.
  `?w=1600&q=80&auto=format&fit=crop`); use smaller widths for thumbnails.
- Broken or blocked URLs degrade gracefully: `SmartImage` shows a dark
  `#111111` surface with a subtle pixel grid instead of a broken image.

## Connecting the contact form

`src/components/sections/contact.tsx` validates with zod and submits through a
marked stub (`onSubmit`, see the `TODO`). Replace the stub body with a POST to
your endpoint, inbox service or form provider; loading, error and success
states are already wired.

Contact details and social links in `src/data/site.ts` are placeholders.

## Deploy

Any platform that runs the Vite build output works. In Lovable, use Publish.

## Design decisions

- Near-black `#080808` base with a single violet accent, cyan as secondary and
  magenta reserved for rare details. Neon appears only on hover, focus rings,
  thin lines and particles — never as a large fill.
- Oversized light-weight display type (200–400) against generous negative
  space; monospace micro-labels carry the technical, editorial voice.
- Asymmetric grids in Selected Work and the gallery so the page reads like a
  photo book rather than a template.
- The pixel is the bridge motif: 1px grids at 3–6% opacity, crop marks, tiny
  glowing points, a hover pixel-block effect on project images and a
  de-pixelating canvas in About.
- Motion is cinematic and restrained: opacity/transform only, 800ms
  `cubic-bezier(0.22,1,0.36,1)`, parallax limited to the hero and mockups.
- `prefers-reduced-motion` disables Lenis, parallax, particles, the custom
  cursor and all canvas effects; canvas work also pauses off-screen.
