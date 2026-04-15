import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import TestimonialCard from "@/components/TestimonialCard";
import { blogs } from "@/data/blogs";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { testimonials } from "@/data/testimonials";
import { stats } from "@/lib/constants";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <div className="space-y-16">
      <Hero />

      <section aria-label="Statistics dashboard" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 text-center backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
          >
            <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-300">{item.value}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.label}</p>
          </article>
        ))}
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
          <Link href="/projects" className="text-sm font-medium text-cyan-700 hover:text-cyan-600 dark:text-cyan-300">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Core Skills</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {skills.map((group) => (
            <article
              key={group.category}
              className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold">{group.category}</h3>
              <div className="mt-4 grid gap-3">
                {group.skills.slice(0, 3).map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Testimonials</h2>
          <Link href="/about" className="text-sm font-medium text-cyan-700 hover:text-cyan-600 dark:text-cyan-300">
            More about me →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Latest Articles</h2>
          <Link href="/blog" className="text-sm font-medium text-cyan-700 hover:text-cyan-600 dark:text-cyan-300">
            Read all →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {blogs.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
            >
              <p className="text-xs text-slate-500 dark:text-slate-400">{post.publishedAt}</p>
              <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{post.excerpt}</p>
              <a href={post.url} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-medium text-cyan-700 hover:text-cyan-600 dark:text-cyan-300">
                Read article ↗
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
