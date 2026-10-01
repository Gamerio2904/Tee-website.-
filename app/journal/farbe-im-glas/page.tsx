import type { Metadata } from "next";
import { SiteLink } from "@/components/SiteLink";

export const metadata: Metadata = { title: "Die Farbe im Glas" };

export default function FarbeArticle() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <p className="eyebrow">Journal</p>
        <h1>Die Farbe im Glas.</h1>
        <p>
          Studienprojekt. Dieser Text verkauft nichts und beschreibt keine Wirkung auf den Körper. Es geht um
          Wasser, Blatt und Farbe.
        </p>
        <p>
          <SiteLink href="/mischung/nebelhang">Nebelhang</SiteLink> beginnt klar. Das frühe Blatt liegt am
          Grund, das Wasser hat etwa 70 °C. In den ersten Sekunden ist die Tasse noch durchsichtig.
        </p>
        <p>
          Nach einer Minute zieht ein helles Grün ein. Nach zwei Minuten ist die Farbe da und der Aufguss ist
          fertig. Länger wird das Glas dunkler, nicht besser. Die Kampagne sagt deshalb: die Farbe kommt
          zuletzt.
        </p>
        <p>
          Dieselbe Reihenfolge gilt für <SiteLink href="/mischung/lindenruhe">Lindenruhe</SiteLink>, nur wird
          die Tasse hellgelb statt hellgrün. Fünf Minuten, etwa 90 °C.
        </p>
        <p>
          <SiteLink className="text-link" href="/kampagne">
            Zur Kampagne
          </SiteLink>
        </p>
      </div>
    </article>
  );
}
