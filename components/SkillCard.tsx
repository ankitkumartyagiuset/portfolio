"use client";

import { motion } from "framer-motion";

type SkillCardProps = {
  name: string;
  proficiency: number;
};

export default function SkillCard({ name, proficiency }: SkillCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm backdrop-blur transition-transform duration-300 hover:[transform:perspective(900px)_translateY(-4px)_rotateX(4deg)_rotateY(-4deg)] dark:border-slate-800 dark:bg-slate-900/60">
      <div className="mb-3 flex items-center justify-between text-sm font-semibold">
        <span>{name}</span>
        <span>{proficiency}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_12px_rgba(56,189,248,0.6)]"
          aria-label={`${name} proficiency ${proficiency}%`}
        />
      </div>
    </article>
  );
}
