import type { Metadata } from "next";
import { SiteLink } from "@/components/SiteLink";

export const metadata: Metadata = { title: "Herkunft" };

export default function HerkunftPage() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <p className="flag">Erfunden</p>
        <h1>Hof am Glasquell.</h1>
        <p>
          Studienprojekt. Diese Seite erzählt eine Werkstatt, die es nicht gibt. Sie enthält keine Anschrift
          und kein Gütesiegel.
        </p>
        <h2>Das Glas</h2>
        <p>
          Auf dem Hof steht das Glas vor der Dose. Lose Blätter, Blüten und Schalen bleiben sichtbar, bis das
          Wasser Farbe annimmt. Eine Tüte mit Aufdruck ersetzt das nicht.
        </p>
        <h2>Das Wasser</h2>
        <p>
          Der Name Glasquell bezeichnet in dieser Erzählung eine Quelle neben der Werkstatt. Die Temperatur
          steht auf jeder Mischung, von etwa 70 °C für Nebelhang bis etwa 98 °C für Nachtfunken. Gekocht wird
          nur, wenn die Mischung das verträgt.
        </p>
        <h2>Das Blatt</h2>
        <p>
          Kräuter, Früchte, Grüntee, Schwarztee und Rooibos liegen in neun erfundenen Mischungen. Keine davon
          stammt aus einem genannten Anbaugebiet. Der Hof ist die einzige Herkunft, und er ist erfunden.
        </p>
        <p>
          <SiteLink className="text-link" href="/sortiment">
            Zum Sortiment
          </SiteLink>
        </p>
      </div>
    </article>
  );
}
