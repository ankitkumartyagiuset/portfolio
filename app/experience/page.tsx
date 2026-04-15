import ExperienceTimeline from "@/components/ExperienceTimeline";
import { experience } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Experience</h1>
        <p className="max-w-2xl text-slate-700 dark:text-slate-300">
          Career timeline highlighting leadership, engineering delivery, and measurable product impact.
        </p>
      </header>
      <section className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
        <ExperienceTimeline items={experience} />
      </section>
    </div>
  );
}
