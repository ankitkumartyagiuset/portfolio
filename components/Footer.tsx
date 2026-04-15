import { siteConfig } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/70 bg-white/70 py-8 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex items-center gap-4 font-medium">
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
    </footer>
  );
}
