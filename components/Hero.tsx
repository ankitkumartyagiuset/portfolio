"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { siteConfig } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/40 p-8 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/40 sm:p-12">
      <motion.p
        {...fadeInUp}
        className="mb-4 inline-flex rounded-full border border-cyan-300/60 bg-cyan-200/40 px-4 py-1 text-sm font-semibold text-cyan-900 dark:border-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-100"
      >
        Available for impactful engineering roles
      </motion.p>
      <motion.h1
        {...fadeInUp}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl"
      >
        {siteConfig.name} — {siteConfig.title}
      </motion.h1>
      <motion.p
        {...fadeInUp}
        transition={{ duration: 0.45, delay: 0.12 }}
        className="mt-5 max-w-3xl text-lg text-slate-700 dark:text-slate-200"
      >
        I craft performant, design-forward web experiences with strong product thinking, data-driven
        decision-making, and scalable cloud-native architecture.
      </motion.p>
      <motion.div
        {...fadeInUp}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="mt-8 flex flex-wrap gap-4"
      >
        <Link
          href="/projects"
          className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          Explore Projects
        </Link>
        <Link
          href="/contact"
          className="rounded-xl border border-slate-400/50 bg-white/60 px-5 py-3 text-sm font-semibold transition hover:scale-[1.02] hover:bg-white dark:border-slate-600 dark:bg-slate-900/60 dark:hover:bg-slate-900"
        >
          Let&apos;s Collaborate
        </Link>
        <a
          href={siteConfig.resume}
          className="rounded-xl border border-cyan-500/60 px-5 py-3 text-sm font-semibold text-cyan-800 transition hover:scale-[1.02] hover:bg-cyan-100/60 dark:text-cyan-300 dark:hover:bg-cyan-900/30"
          download
        >
          Download Resume
        </a>
      </motion.div>
      <div className="pointer-events-none absolute -right-10 -top-8 h-44 w-44 rounded-full bg-cyan-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-6 h-44 w-44 rounded-full bg-violet-500/20 blur-3xl" />
    </section>
  );
}
