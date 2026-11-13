# Editing Content

This site is data-driven. Adding content means editing a data file or dropping in an MDX file — no layout code changes needed.

## Add a Project

Edit `src/data/projects.ts` and add an object to the `PROJECTS` array:

```ts
{
  title: "Project Name",
  slug: "project-slug",
  categories: ["ml", "web"],       // appears under these filter tabs
  description: "One-line description.",
  tags: ["React", "Python"],
  links: {
    github: "https://github.com/...",  // optional
    live: "https://...",               // optional
    paper: "https://...",              // optional — shows "Publication" link on card
  },
  pinned: false,                      // true = appears on home page
  year: 2026,
}
```

- Set `links: {}` for non-public projects (card flips to show "Not public")
- A project with multiple categories appears under each filter tab
- Available categories: `ml`, `systems`, `web`, `research`, `experiments`
- To add a new category, add it to `PROJECT_CATEGORIES` in the same file

## Add a Writing / Essay

Create a new `.mdx` file in `content/writings/`:

```
content/writings/your-slug.mdx
```

The filename becomes the URL: `/writing/your-slug`

Required frontmatter:

```mdx
---
title: "Your Title"
date: "2026-11-13"
tags: ["tag1", "tag2"]
excerpt: "One-line summary for previews."
---

Your content here. Full markdown supported.
```

The essay auto-appears on `/writing` and on the home page workbench (most recent 3).

## Add a Timeline Entry

Edit `src/data/timeline.ts` and add to the `TIMELINE` array:

```ts
{
  date: "Nov 2026",
  title: "What Happened",
  description: "Short description.",
}
```

Keep the array in reverse chronological order (newest first). The first two entries show on the home page trajectory widget.

## Edit Muse / Now Page

Edit `src/data/muse.ts`:

- `considering` — the big question at the top
- `reading` — array of `{ title, author }` books
- `learning` — title, description, and `progress` (0-100, renders as a gradient bar)
- `awayFromKeys` — free text about hobbies
- `lastTended` — date string shown at the top

## Edit Site Info

Edit `src/data/site.ts` for name, title, bio, location, email.

## Edit Social Links

Edit `src/data/social.ts` for footer links (GitHub, LinkedIn, Resume).

## Contact Form

The contact form uses [Web3Forms](https://web3forms.com) to deliver submissions to your email. The access key is in `app/contact/ContactForm.tsx`. To change the receiving email, update the key at web3forms.com.

## Update Resume

Replace `public/resume.pdf` with your updated file.

## Theme

Colors are CSS custom properties in `app/globals.css` under `:root` (light) and `.dark` (dark). Key tokens: `--bg`, `--bg-card`, `--text`, `--text-muted`, `--border`, `--accent`.
