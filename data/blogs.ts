export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  tags: string[];
  publishedAt: string;
};

export const blogs: BlogPost[] = [
  {
    id: "nextjs-performance-checklist",
    title: "A Practical Next.js Performance Checklist",
    excerpt: "Actionable techniques to improve Core Web Vitals and app responsiveness in production.",
    url: "https://medium.com/@ankittyagi/nextjs-performance-checklist",
    tags: ["Next.js", "Performance", "Web"],
    publishedAt: "2026-02-10",
  },
  {
    id: "shipping-reliable-ci-cd",
    title: "Shipping Reliable CI/CD for Fast-Moving Teams",
    excerpt: "How to design guarded deployment pipelines without slowing delivery.",
    url: "https://medium.com/@ankittyagi/reliable-ci-cd",
    tags: ["DevOps", "CI/CD", "Engineering"],
    publishedAt: "2026-01-18",
  },
  {
    id: "product-analytics-from-zero",
    title: "Building Product Analytics From Zero",
    excerpt: "A step-by-step guide to event instrumentation, metric models, and actionable dashboards.",
    url: "https://medium.com/@ankittyagi/product-analytics-zero",
    tags: ["Analytics", "Data", "Product"],
    publishedAt: "2025-12-04",
  },
];
