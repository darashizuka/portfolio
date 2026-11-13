<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio Site — Agent Context

## Stack

- Next.js 16.3.2 with App Router, React 19, TypeScript strict
- Tailwind CSS v4 via `@tailwindcss/postcss`
- `next-mdx-remote/rsc` for server-component MDX rendering
- `gray-matter` for frontmatter, `reading-time` for read time
- Fonts: Instrument Sans (display, `--font-sans`) + IBM Plex Mono (technical, `--font-mono`) via `next/font/google`
- Deployed on Vercel free tier — keep bundle size small, no heavy libraries

## Next.js 16 Rules

- `params` in dynamic routes is a Promise — always `await params`
- Use `PageProps<'/path/[slug]'>` type helpers (globally available)
- `mdx-components.tsx` must exist at project root
- `data-scroll-behavior="smooth"` on `<html>` (not CSS `scroll-behavior`)

## Architecture

This site is data-driven. Content lives in:
- `src/data/*.ts` — TypeScript arrays for projects, timeline, muse, social, site config
- `content/writings/*.mdx` — MDX files with frontmatter, auto-discovered by `lib/mdx.ts`

**Adding content never requires changing layout code.** See `EDITING.md`.

## Theming

- Class-based dark mode: `.dark` class on `<html>`, toggled via `ThemeProvider`
- Anti-flash script in `<head>` reads localStorage before paint
- All colors use CSS custom properties defined in `app/globals.css` (`:root` for light, `.dark` for dark)
- Key tokens: `--bg`, `--bg-card`, `--text`, `--text-muted`, `--border`, `--accent`, `--signal`, `--acid`, `--grid`
- Selection color: `--selection-bg: #c8ff00` (lime green, both themes)

## Key Components

- `ScrollMeter` — fixed 3px progress bar at top of viewport, fills on scroll
- `ProjectCard` — supports multi-category projects, card flip for non-public projects (empty `links`)
- `TimelineWheel` — arc wheel on desktop, vertical swipe layout on mobile (<640px)
- `Trajectory` — home page widget showing first 2 timeline entries with dot-line-dot interaction
- `CategoryFilter` — client component filtering projects by `categories.includes()`
- `ContactForm` — fields build a mailto href live; submit button is an `<a>` tag (not `<form>` submit) to satisfy browser user-gesture requirements
- `FadeIn` — IntersectionObserver scroll-reveal wrapper

## Important Patterns

- Projects use `categories: string[]` (not a single category) — they appear under multiple filter tabs
- Non-public projects have `links: {}` — clicking their card triggers a CSS 3D flip showing "Not public"
- The `PINNED_PROJECTS` filter controls what shows on the home page Selected Work section
- The `TIMELINE` array (newest first) feeds both `/past` wheel and home page trajectory
- `getRecentPosts(3)` from `lib/mdx.ts` feeds the home page workbench section
- `mailto:` links must not have `target="_blank"` — that opens them as URLs instead of triggering the email client

## Navigation Order

```
01 Home     /
02 Builds   /builds
03 Past     /past
04 Writing  /writing
05 Muse now /muse
06 Contact  /contact
```

## File Conventions

- Page section labels use the format "NUMBER / LABEL" (e.g., "01 / Selected Work")
- Each standalone page has its own label style (e.g., "Garden / 05", "Signal / 06", "Archive / 03")
- Mono elements use `text-[11px] uppercase tracking-[0.15em] font-mono`
- Headings use `font-bold` with `letterSpacing: "-0.03em"` and `lineHeight: 1.1`
