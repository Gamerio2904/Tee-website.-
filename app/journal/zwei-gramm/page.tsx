import type { Metadata } from "next";
import { SiteLink } from "@/components/SiteLink";

export const metadata: Metadata = { title: "Zwei Gramm" };

export default function ZweiGrammArticle() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <p className="eyebrow">Journal</p>
        <h1>Zwei Gramm.</h1>
        <p>
          Studienprojekt. Dieser Text beschreibt eine Menge im Glas. Er beschreibt keine Wirkung und verkauft
          nichts.
        </p>
        <p>
          Zwei Gramm auf 200 Milliliter sind die Menge für jede Mischung auf dieser Seite. Bei{" "}
          <SiteLink href="/mischung/kupferzweig">Kupferzweig</SiteLink> sieht man die Blätter noch, wenn das
          Wasser kommt. Ein Beutel würde sie verdecken.
        </p>
        <p>
          Mehr Blatt macht die Tasse nicht automatisch klarer. Kupferzweig wird in drei Minuten kupferfarben.
          Wer die Menge verdoppelt, verliert die Durchsicht, bevor die Zeit um ist.
        </p>
        <p>
          <SiteLink className="text-link" href="/ritual">
            Zur Aufgussfolge
          </SiteLink>
        </p>
      </div>
    </article>
  );
}
