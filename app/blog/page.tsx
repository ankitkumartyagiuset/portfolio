"use client";

import { useMemo, useState } from "react";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  const [query, setQuery] = useState("");

  const filteredBlogs = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) {
      return blogs;
    }

    return blogs.filter((post) =>
      [post.title, post.excerpt, post.tags.join(" ")].join(" ").toLowerCase().includes(keyword),
    );
  }, [query]);

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Blog & Articles</h1>
        <p className="max-w-2xl text-slate-700 dark:text-slate-300">
          Technical writing on performance, architecture, and product engineering systems.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
        <label htmlFor="blog-search" className="mb-2 block text-sm font-semibold">
          Search articles
        </label>
        <input
          id="blog-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by title, excerpt, or tag"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none ring-cyan-500/60 focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
        />
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((post) => (
          <article
            key={post.id}
            className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
          >
            <p className="text-xs text-slate-500 dark:text-slate-400">{post.publishedAt}</p>
            <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{post.excerpt}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-300 px-2 py-1 text-xs dark:border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a href={post.url} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-medium text-cyan-700 hover:text-cyan-600 dark:text-cyan-300">
              Read article ↗
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
