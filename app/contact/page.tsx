import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="max-w-xl text-slate-700 dark:text-slate-300">
          Let&apos;s discuss your next product, platform modernization effort, or collaboration.
        </p>
        <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
          <p className="text-sm"><span className="font-semibold">Email:</span> {siteConfig.email}</p>
          <p className="mt-2 text-sm"><span className="font-semibold">Location:</span> {siteConfig.location}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-300">
              GitHub ↗
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-300">
              LinkedIn ↗
            </a>
            <a href={siteConfig.resume} download className="hover:text-cyan-600 dark:hover:text-cyan-300">
              Resume ↓
            </a>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
