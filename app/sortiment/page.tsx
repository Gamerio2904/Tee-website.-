import type { Metadata } from "next";
import { BlendCard } from "@/components/BlendCard";
import { blends } from "@/lib/content";

export const metadata: Metadata = { title: "Sortiment" };

export default function SortimentPage() {
  return (
    <article className="subpage">
      <div className="subpage-inner wide">
        <p className="flag">Musterware</p>
        <h1>Fünf Mischungen, kein Angebot.</h1>
        <p>
          Glasquell ist ein Studienprojekt. Die Preise sind Beispielpreise. Es wird nichts verkauft und
          nichts geliefert.
        </p>
        <div className="cards">
          {blends.map((blend) => (
            <BlendCard key={blend.slug} blend={blend} />
          ))}
        </div>
      </div>
    </article>
  );
}
