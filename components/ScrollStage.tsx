"use client";

import { useEffect, useRef, useState } from "react";
import { chapters } from "@/lib/content";
import { ChapterBlock } from "@/components/ChapterBlock";
import { Vessel } from "@/components/Vessel";
import { SiteLink } from "@/components/SiteLink";

const CHAPTER_MARK = "glasquell-kapitel-7";

export function ScrollStage() {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const placeAnchors = () => {
      const element = scroller.current;
      if (!element) return;
      const header = document.querySelector(".top")?.getBoundingClientRect().height ?? 0;
      const total = Math.max(element.offsetHeight - window.innerHeight, 1);
      const last = chapters.length - 1;
      element.querySelectorAll<HTMLElement>(".stage-anchor").forEach((anchor, itemIndex) => {
        anchor.style.top = `${(itemIndex / last) * total + header}px`;
      });
    };
    const onScroll = () => {
      const element = scroller.current;
      if (!element) return;
      const total = element.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-element.getBoundingClientRect().top, 0), Math.max(total, 0));
      const progress = total > 0 ? scrolled / total : 0;
      const next = Math.min(chapters.length - 1, Math.max(0, Math.round(progress * (chapters.length - 1))));
      setIndex(next);
      if (next === chapters.length - 1) {
        try {
          localStorage.setItem(CHAPTER_MARK, "erreicht");
        } catch {
          /* lokale Markierung ist optional */
        }
      }
    };
    placeAnchors();
    const hash = window.location.hash.slice(1);
    if (hash) document.getElementById(hash)?.scrollIntoView();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", placeAnchors);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", placeAnchors);
    };
  }, [reduced]);

  if (reduced) {
    return (
      <>
        {chapters.map((chapter) => (
          <ChapterBlock key={chapter.id} chapter={chapter} />
        ))}
      </>
    );
  }

  const chapter = chapters[index];

  return (
    <div className="stage-scroll" ref={scroller}>
      {chapters.map((item, itemIndex) => (
        <div key={item.id} id={item.id} className="stage-anchor" />
      ))}
      <div className="stage-pin">
        <div className={`chapter-copy ${chapter.flip ? "copy-end" : ""}`}>
          <p className="eyebrow">
            <span>{chapter.number}</span>
            {chapter.eyebrow}
          </p>
          <h2>
            {chapter.title} <em>{chapter.accent}</em>
          </h2>
          <p className="lede">{chapter.body}</p>
          {chapter.primary || chapter.secondary ? (
            <div className="actions">
              {chapter.primary ? (
                <SiteLink className="btn btn-gold" href={chapter.primary.href}>
                  {chapter.primary.label}
                </SiteLink>
              ) : null}
              {chapter.secondary ? (
                <SiteLink className="text-link" href={chapter.secondary.href}>
                  {chapter.secondary.label}
                </SiteLink>
              ) : null}
            </div>
          ) : null}
        </div>
        <Vessel scene={chapter.scene} />
        <p className="stage-progress" aria-hidden="true">
          {chapter.number} / 07
        </p>
      </div>
    </div>
  );
}
