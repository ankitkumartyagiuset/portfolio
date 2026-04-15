"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
const allTechStacks = ["All", ...Array.from(new Set(projects.flatMap((project) => project.tech))).sort()];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTech, setActiveTech] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return projects.filter((project) => {
      const byCategory = activeCategory === "All" || project.category === activeCategory;
      const byTech = activeTech === "All" || project.tech.includes(activeTech);
      const bySearch =
        keyword.length === 0 ||
        [project.title, project.description, project.longDescription, project.tech.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(keyword);

      return byCategory && byTech && bySearch;
    });
  }, [activeCategory, activeTech, search]);

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="max-w-2xl text-slate-700 dark:text-slate-300">
          Explore detailed case studies with advanced filtering and search across tech stack and
          categories.
        </p>
      </header>

      <section className="space-y-4 rounded-2xl border border-slate-200/70 bg-white/70 p-5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
        <label htmlFor="project-search" className="text-sm font-semibold">
          Search projects
        </label>
        <input
          id="project-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by project name, description, or tech"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none ring-cyan-500/60 focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
        />

        <div className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Filter by category
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                  activeCategory === category
                    ? "border-cyan-600 bg-cyan-600 text-white"
                    : "border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Filter by tech stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {allTechStacks.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => setActiveTech(tech)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                  activeTech === tech
                    ? "border-violet-600 bg-violet-600 text-white"
                    : "border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
}
