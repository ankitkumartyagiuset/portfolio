"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const allTechStacks = Array.from(new Set(projects.flatMap((project) => project.tech))).sort();

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.tech.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">All Projects</h1>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">
          A curated collection of production-focused work spanning AI, analytics, cloud, and
          full-stack product engineering.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Filter by tech stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "All",
            ...allTechStacks,
          ].map((tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => setActiveFilter(tech)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                activeFilter === tech
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}
