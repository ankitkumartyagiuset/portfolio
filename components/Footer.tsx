export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-16 border-t border-slate-200 bg-white/80 py-8 dark:border-slate-800 dark:bg-slate-950/80"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-600 sm:flex-row sm:px-6 lg:px-8 dark:text-slate-300">
        <p>© {new Date().getFullYear()} Ankit Tyagi. All rights reserved.</p>
        <div className="flex items-center gap-4 font-medium">
          <a
            href="https://github.com/ankitkumartyagiuset"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/ankitkumartyagiuset"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
