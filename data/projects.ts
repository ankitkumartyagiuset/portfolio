export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
};

export const projects: Project[] = [
  {
    title: "AI Dermal Disease Detection",
    description:
      "ML-driven web platform that analyzes skin images and predicts likely dermatological conditions with explainable outputs.",
    tech: ["Python", "TensorFlow", "Next.js", "PostgreSQL"],
    github: "https://github.com/ankitkumartyagiuset/ai-dermal-detection",
    live: "https://ai-dermal-detection.vercel.app",
  },
  {
    title: "Realtime Portfolio Analytics",
    description:
      "Interactive dashboard to monitor KPIs, campaign performance, and growth trends with live visualizations.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/ankitkumartyagiuset/realtime-portfolio-analytics",
    live: "https://realtime-portfolio-analytics.vercel.app",
  },
  {
    title: "TeamSync Task Manager",
    description:
      "Collaboration-first task management app with Kanban workflows, activity timeline, and role-based access.",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
    github: "https://github.com/ankitkumartyagiuset/teamsync-task-manager",
    live: "https://teamsync-task-manager.vercel.app",
  },
  {
    title: "DevHire Matching Platform",
    description:
      "Full-stack hiring platform that matches developers and startups through skills, assessments, and smart ranking.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com/ankitkumartyagiuset/devhire-matching-platform",
    live: "https://devhire-matching-platform.vercel.app",
  },
  {
    title: "Cloud Cost Optimizer",
    description:
      "Cost observability tool that identifies waste, forecasts spend, and recommends savings opportunities.",
    tech: ["Go", "React", "AWS", "Docker"],
    github: "https://github.com/ankitkumartyagiuset/cloud-cost-optimizer",
    live: "https://cloud-cost-optimizer.vercel.app",
  },
  {
    title: "Creator Commerce Suite",
    description:
      "E-commerce toolkit for creators with digital products, payment workflows, and audience insights.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/ankitkumartyagiuset/creator-commerce-suite",
    live: "https://creator-commerce-suite.vercel.app",
  },
];
