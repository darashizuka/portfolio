# Portfolio

Personal portfolio built with Next.js 16, React 19, Tailwind CSS v4, and MDX.

## Tech Stack

- **Framework**: Next.js 16.3.2 (App Router)
- **Styling**: Tailwind CSS v4 with CSS custom properties for theming
- **Fonts**: Instrument Sans (display) + IBM Plex Mono (technical)
- **Content**: MDX via `next-mdx-remote/rsc`, data files in `src/data/`
- **Hosting**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
app/                    # Pages and components (App Router)
  components/           # Shared UI components
  builds/               # /builds - all projects with category filter
  past/                 # /past - timeline wheel
  writing/              # /writing - essays list + [slug] pages
  muse/                 # /muse - now page
  contact/              # /contact - contact form + links
src/data/               # Data files (projects, timeline, muse, social, site)
content/writings/       # MDX essay files (auto-discovered)
lib/                    # Utilities (MDX parsing, types)
public/                 # Static assets (photo, resume)
```

## Adding Content

See [EDITING.md](EDITING.md) for how to add projects, essays, timeline entries, and other content.
