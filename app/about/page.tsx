import ExperienceTimeline from "@/components/ExperienceTimeline";
import TestimonialCard from "@/components/TestimonialCard";
import { experience } from "@/data/experience";
import { testimonials } from "@/data/testimonials";

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        <p className="max-w-3xl text-slate-700 dark:text-slate-300">
          I&apos;m a full stack engineer focused on building premium digital experiences that blend
          performance, usability, and business outcomes. I specialize in product-driven development,
          modern frontend architecture, and scalable backend systems.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
        <h2 className="text-2xl font-semibold tracking-tight">Professional Timeline</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          My growth from freelance developer to senior full stack engineer.
        </p>
        <div className="mt-6">
          <ExperienceTimeline items={experience} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Social Proof</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
}
