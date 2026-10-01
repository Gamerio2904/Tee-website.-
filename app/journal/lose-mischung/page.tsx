import type { Metadata } from "next";
import { SiteLink } from "@/components/SiteLink";

export const metadata: Metadata = { title: "Was eine lose Mischung ist" };

export default function LoseMischungArticle() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <p className="eyebrow">Journal</p>
        <h1>Was eine lose Mischung ist.</h1>
        <p>
          Studienprojekt. Der Text erklärt eine Form, nicht einen Nutzen. Es wird nichts verkauft.
        </p>
        <p>
          Eine lose Mischung liegt ohne Beutel im Glas. Bei{" "}
          <SiteLink href="/mischung/waldbeere">Waldbeere</SiteLink> sind das Hagebutte und Hibiskus. Beides
          bleibt erkennbar, bis das Wasser rot wird.
        </p>
        <p>
          Nach sechs Minuten bei etwa 95 °C wird abgeseiht. Die Früchte werden nicht ausgedrückt. Was im Glas
          war, ist dann in der Kanne nur noch Farbe und Geschmack.
        </p>
        <p>
          Dieselbe Form gilt für Kräuter, Grüntee, Schwarztee und Rooibos im Sortiment. Jede Mischung ist
          erfunden.
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
