export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  featured: boolean;
  category: "Web" | "AI" | "Analytics" | "Cloud";
};

export const projects: Project[] = [
  {
    id: "ai-dermal-disease-detection",
    title: "AI Dermal Disease Detection",
    description: "ML-driven web platform for skin disease prediction with explainable outputs.",
    longDescription:
      "Built an end-to-end AI healthcare workflow with image preprocessing, TensorFlow model inference, and clinician-friendly confidence scoring.",
    tech: ["Python", "TensorFlow", "Next.js", "PostgreSQL"],
    github: "https://github.com/ankitkumartyagiuset/ai-dermal-detection",
    live: "https://ai-dermal-detection.vercel.app",
    image: "/project-ai.jpg",
    featured: true,
    category: "AI",
  },
  {
    id: "realtime-portfolio-analytics",
    title: "Realtime Portfolio Analytics",
    description: "Interactive KPI dashboard with streaming analytics visualizations.",
    longDescription:
      "Designed a performant dashboard architecture with server-side aggregation, alerting thresholds, and role-specific analytics views.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/ankitkumartyagiuset/realtime-portfolio-analytics",
    live: "https://realtime-portfolio-analytics.vercel.app",
    image: "/project-analytics.jpg",
    featured: true,
    category: "Analytics",
  },
  {
    id: "teamsync-task-manager",
    title: "TeamSync Task Manager",
    description: "Collaboration-first task app with Kanban, timeline, and RBAC.",
    longDescription:
      "Implemented real-time collaboration with Socket.IO, detailed audit trails, and productivity dashboards for distributed engineering teams.",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
    github: "https://github.com/ankitkumartyagiuset/teamsync-task-manager",
    live: "https://teamsync-task-manager.vercel.app",
    image: "/project-teamsync.jpg",
    featured: true,
    category: "Web",
  },
  {
    id: "devhire-matching-platform",
    title: "DevHire Matching Platform",
    description: "Hiring platform matching developers and startups using smart ranking.",
    longDescription:
      "Developed candidate scoring pipelines, interview scheduling workflows, and subscription billing to support scalable recruitment operations.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com/ankitkumartyagiuset/devhire-matching-platform",
    live: "https://devhire-matching-platform.vercel.app",
    image: "/project-devhire.jpg",
    featured: false,
    category: "Web",
  },
  {
    id: "cloud-cost-optimizer",
    title: "Cloud Cost Optimizer",
    description: "Cost observability with waste detection and forecast recommendations.",
    longDescription:
      "Built cloud spend pipelines with anomaly detection and optimization playbooks, enabling engineering leaders to reduce infrastructure waste.",
    tech: ["Go", "React", "AWS", "Docker"],
    github: "https://github.com/ankitkumartyagiuset/cloud-cost-optimizer",
    live: "https://cloud-cost-optimizer.vercel.app",
    image: "/project-cloud.jpg",
    featured: false,
    category: "Cloud",
  },
  {
    id: "creator-commerce-suite",
    title: "Creator Commerce Suite",
    description: "Commerce toolkit for creators with payments and audience insights.",
    longDescription:
      "Delivered digital storefronts, subscription workflows, and campaign attribution dashboards for creator-led businesses.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/ankitkumartyagiuset/creator-commerce-suite",
    live: "https://creator-commerce-suite.vercel.app",
    image: "/project-commerce.jpg",
    featured: false,
    category: "Web",
  },
];
