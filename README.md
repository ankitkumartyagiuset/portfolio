# Developer Portfolio

A production-ready developer portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Features

- Sticky, responsive navigation with Home, Projects, and Contact links
- Home hero section with featured top 3 projects
- Dedicated projects page with reusable project cards
- Centralized project data source in `data/projects.ts`
- Dark mode toggle with persisted preference
- Tech stack filtering on projects page
- Mobile-first, fast, and Vercel-deployable

## Project Structure

```text
/portfolio
├── /app
│   ├── page.tsx
│   ├── /projects
│   │   └── page.tsx
│   └── layout.tsx
├── /components
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   └── Footer.tsx
├── /data
│   └── projects.ts
├── /public
├── /styles
├── package.json
└── README.md
```

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production Build

```bash
npm run build
npm run start
```

## Deploy

Deploy directly to Vercel without additional configuration.
