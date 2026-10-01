import type { Chapter } from "@/lib/content";
import { Vessel } from "@/components/Vessel";

export function ChapterBlock({ chapter }: { chapter: Chapter }) {
  return (
    <section id={chapter.id} className={chapter.flip ? "chapter flip" : "chapter"} aria-labelledby={`${chapter.id}-title`}>
      <div className="chapter-copy">
        <p className="eyebrow">
          <span>{chapter.number}</span>
          {chapter.eyebrow}
        </p>
        <h2 id={`${chapter.id}-title`}>
          {chapter.title} <em>{chapter.accent}</em>
        </h2>
        <p className="lede">{chapter.body}</p>
        {chapter.primary || chapter.secondary ? (
          <div className="actions">
            {chapter.primary ? (
              <a className="btn btn-gold" href={chapter.primary.href}>
                {chapter.primary.label}
              </a>
            ) : null}
            {chapter.secondary ? (
              <a className="text-link" href={chapter.secondary.href}>
                {chapter.secondary.label}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
      <Vessel scene={chapter.scene} />
    </section>
  );
}
