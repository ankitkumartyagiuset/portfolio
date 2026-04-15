import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

export default function SkillsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Skills & Proficiency</h1>
        <p className="max-w-2xl text-slate-700 dark:text-slate-300">
          Categorized technical skills with proficiency indicators spanning frontend, backend, devops,
          and workflow tooling.
        </p>
      </header>
      <section className="grid gap-6 lg:grid-cols-2">
        {skills.map((group) => (
          <article
            key={group.category}
            className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
          >
            <h2 className="text-xl font-semibold">{group.category}</h2>
            <div className="mt-4 space-y-3">
              {group.skills.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} proficiency={skill.proficiency} />
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
