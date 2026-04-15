import type { ExperienceItem } from "@/data/experience";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <ol className="relative ml-3 space-y-8 border-l border-slate-300 pl-6 dark:border-slate-700">
      {items.map((item) => (
        <li key={`${item.company}-${item.period}`} className="relative">
          <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
          <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">{item.period}</p>
          <h3 className="mt-1 text-xl font-semibold">
            {item.role} · {item.company}
          </h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{item.description}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">
            {item.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tech.map((stack) => (
              <span
                key={stack}
                className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium dark:border-slate-700"
              >
                {stack}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
