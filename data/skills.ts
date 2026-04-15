export type SkillGroup = {
  category: "Frontend" | "Backend" | "DevOps" | "Tools";
  skills: {
    name: string;
    proficiency: number;
    icon?: string;
  }[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", proficiency: 92 },
      { name: "React", proficiency: 94 },
      { name: "TypeScript", proficiency: 90 },
      { name: "Tailwind CSS", proficiency: 93 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", proficiency: 88 },
      { name: "Python", proficiency: 89 },
      { name: "PostgreSQL", proficiency: 86 },
      { name: "Prisma", proficiency: 84 },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "AWS", proficiency: 82 },
      { name: "Docker", proficiency: 87 },
      { name: "CI/CD", proficiency: 85 },
      { name: "Monitoring", proficiency: 80 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "GitHub", proficiency: 93 },
      { name: "Figma", proficiency: 78 },
      { name: "Jira", proficiency: 83 },
      { name: "Postman", proficiency: 88 },
    ],
  },
];
