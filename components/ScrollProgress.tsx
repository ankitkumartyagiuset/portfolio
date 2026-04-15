"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [announcement, setAnnouncement] = useState("Page loaded");

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = height > 0 ? (window.scrollY / height) * 100 : 0;
      const bounded = Math.max(0, Math.min(100, ratio));
      setProgress(bounded);

      if (bounded >= 100) setAnnouncement("100% of page viewed");
      else if (bounded >= 75) setAnnouncement("75% of page viewed");
      else if (bounded >= 50) setAnnouncement("50% of page viewed");
      else if (bounded >= 25) setAnnouncement("25% of page viewed");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div aria-hidden className="fixed left-0 top-0 z-[70] h-1 w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>
    </>
  );
}
