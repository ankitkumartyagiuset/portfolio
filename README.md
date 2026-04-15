# Premium Developer Portfolio

An advanced, production-ready portfolio built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **React Hook Form**, and **Three.js**.

## Features

- Interactive 3D floating background (Three.js via React Three Fiber)
- Premium hero with animated CTAs and resume download
- Smooth page transitions and scroll progress indicator
- Comprehensive sections: About, Skills, Experience, Projects, Blog, Contact
- 3D project cards with depth hover effects
- Skill proficiency bars with animated progress
- Project filtering by category/tech + search
- Blog search
- Dark/light mode with system preference detection and persistence
- Accessible form validation with React Hook Form
- SEO metadata and responsive design

## Project Structure

```text
/app
  page.tsx
  about/page.tsx
  skills/page.tsx
  experience/page.tsx
  projects/page.tsx
  blog/page.tsx
  contact/page.tsx
  layout.tsx
  template.tsx
/components
  Navbar.tsx
  Hero.tsx
  ProjectCard.tsx
  SkillCard.tsx
  ExperienceTimeline.tsx
  TestimonialCard.tsx
  ContactForm.tsx
  Footer.tsx
  ScrollProgress.tsx
  ThemeToggle.tsx
  FloatingBackground.tsx
/data
  projects.ts
  skills.ts
  experience.ts
  testimonials.ts
  blogs.ts
/lib
  animations.ts
  constants.ts
/public
  resume.pdf
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run lint
npm run build
```

Deploy directly to Vercel.
