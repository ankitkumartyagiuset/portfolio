import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
      <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {project.description}
      </p>

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
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
        >
          GitHub ↗
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
        >
          Live Demo ↗
        </a>
      </div>
    </article>
  );
}
