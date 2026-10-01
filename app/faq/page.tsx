import type { Metadata } from "next";

export const metadata: Metadata = { title: "Fragen" };

export default function FaqPage() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <h1>Fragen</h1>
        <h2>Ist das ein Shop?</h2>
        <p>Nein. Glasquell ist ein Studienprojekt. Es wird nichts verkauft und nichts geliefert.</p>
        <h2>Sind die Preise ernst gemeint?</h2>
        <p>Nein. Jeder Preis ist ein Beispielpreis und kein Angebot.</p>
        <h2>Wie wird aufgegossen?</h2>
        <p>Zwei Gramm auf 200 Milliliter, Wasser je nach Muster zwischen 85 und 95 °C, vier bis sechs Minuten.</p>
        <h2>Was wird gespeichert?</h2>
        <p>
          Die Musterliste liegt nur in diesem Browser. Ein optionaler Vorname bleibt nur für die
          Demo-Ansicht in der Sitzung. Beides geht nicht an einen Server.
        </p>
      </div>
    </article>
  );
}
