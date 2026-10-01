import type { Metadata } from "next";
import { SiteLink } from "@/components/SiteLink";
import { blends, prepSteps } from "@/lib/content";

export const metadata: Metadata = { title: "Ritual" };

export default function RitualPage() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <p className="eyebrow">Zubereitung</p>
        <h1>Langsam aufgießen.</h1>
        <p>
          Glasquell ist ein Studienprojekt. Die folgenden Schritte beschreiben Farbe, Duft und Zeit. Sie
          versprechen keine Wirkung.
        </p>
        <ol className="steps steps-stack">
          {prepSteps.map((step, index) => (
            <li key={step.title}>
              <span>0{index + 1}</span>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <h2>Passende Muster</h2>
        <ul>
          {blends.map((blend) => (
            <li key={blend.slug}>
              <SiteLink href={`/mischung/${blend.slug}`}>{blend.name}</SiteLink>
              {": "}
              {blend.water}, {blend.time}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
