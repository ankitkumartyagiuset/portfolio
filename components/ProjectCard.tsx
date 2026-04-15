"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
      transition={{ duration: 0.35 }}
      className="group relative flex h-full transform-gpu flex-col rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-300/20 [transform-style:preserve-3d] dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/20"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-cyan-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mb-4 inline-flex w-fit rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold dark:border-slate-700">
        {project.category}
      </div>
      <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{project.description}</p>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{project.longDescription}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((stackItem) => (
          <li
            key={stackItem}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {stackItem}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-4 text-sm font-medium">
        <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-300">
          GitHub ↗
        </a>
        <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-emerald-600 dark:hover:text-emerald-300">
          Live Demo ↗
        </a>
      </div>
    </motion.article>
  );
}
