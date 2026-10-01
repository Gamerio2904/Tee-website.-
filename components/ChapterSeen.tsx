"use client";

import { useEffect } from "react";

const CHAPTER_MARK = "glasquell-kapitel-7";

export function ChapterSeen() {
  useEffect(() => {
    const node = document.getElementById("muster");
    if (!node) return;
    const mark = () => {
      try {
        localStorage.setItem(CHAPTER_MARK, "erreicht");
      } catch {
        /* lokale Markierung ist optional */
      }
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) mark();
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return null;
}
