import type { Metadata } from "next";
import { SiteLink } from "@/components/SiteLink";

export const metadata: Metadata = { title: "Journal" };

export default function JournalPage() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <p className="eyebrow">Journal</p>
        <h1>Ein Text, keine erfundenen Folgen.</h1>
        <p>Weitere Artikel werden nicht als Platzhalter mit falschen Daten angelegt.</p>
        <h2>
          <SiteLink href="/journal/langsam-aufgiessen">Langsam aufgießen</SiteLink>
        </h2>
        <p>Wie Lindenruhe im Glas Farbe annimmt, und wann der Aufguss beendet ist.</p>
      </div>
    </article>
  );
}
