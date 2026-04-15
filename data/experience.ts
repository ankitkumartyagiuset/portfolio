export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "InnovateX Labs",
    role: "Senior Full Stack Developer",
    period: "2023 - Present",
    description: "Led platform modernization initiatives across customer-facing and internal analytics products.",
    achievements: [
      "Improved deployment frequency by 45% through CI/CD optimization.",
      "Reduced API latency by 37% using data-access refactoring and caching.",
      "Mentored 5 junior engineers on architecture and testing best practices.",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    company: "DataSprint Solutions",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description: "Built enterprise dashboards and workflow tools used by product and operations teams.",
    achievements: [
      "Shipped 10+ high-impact product features with strong customer adoption.",
      "Designed reusable component systems reducing UI delivery time by 30%.",
      "Introduced observability standards lowering incident response time by 25%.",
    ],
    tech: ["React", "TypeScript", "GraphQL", "Docker"],
  },
  {
    company: "Freelance",
    role: "Web Developer & Consultant",
    period: "2019 - 2021",
    description: "Delivered performant websites and custom web products for startups and SMB clients.",
    achievements: [
      "Completed 20+ client projects with 95% retention.",
      "Improved average Lighthouse performance scores to 90+.",
      "Created SEO and analytics playbooks for growth-stage teams.",
    ],
    tech: ["Next.js", "SEO", "Analytics", "Vercel"],
  },
];
