import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
      <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">“{testimonial.quote}”</p>
      <p className="mt-4 text-sm font-semibold">{testimonial.name}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
    </article>
  );
}
