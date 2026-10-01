import type { Metadata } from "next";
import { SiteLink } from "@/components/SiteLink";

export const metadata: Metadata = { title: "Langsam aufgießen" };

export default function ArticlePage() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <p className="eyebrow">Journal</p>
        <h1>Langsam aufgießen.</h1>
        <p>
          Studienprojekt. Dieser Text verkauft nichts und beschreibt keine Wirkung auf den Körper. Es geht
          um Wasser, Glas und Farbe.
        </p>
        <p>
          Das Wasser für <SiteLink href="/mischung/lindenruhe">Lindenruhe</SiteLink> bleibt knapp unter dem
          Siedepunkt. Zwei Gramm liegen im Glas, die Blüten sind noch trocken. In den ersten Sekunden steigt
          nur Duft auf.
        </p>
        <p>
          Danach sinken Kamille und Linde. Das Wasser wird hellgelb, nicht braun. Wer zu lange wartet, verliert
          die Helligkeit. Fünf Minuten reichen. Dann wird abgeseiht, ohne die Blüten auszudrücken.
        </p>
        <p>
          Dieselbe Ruhe gilt für die anderen Muster, nur Temperatur und Zeit unterscheiden sich. Die Schritte
          stehen auf der <SiteLink href="/ritual">Ritualseite</SiteLink>.
        </p>
        <p>
          <SiteLink className="text-link" href="/journal">
            Zurück zum Journal
          </SiteLink>
        </p>
      </div>
    </article>
  );
}
