import type { Metadata } from "next";

export const metadata: Metadata = { title: "Barrierefreiheit" };

export default function BarrierefreiheitPage() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <h1>Barrierefreiheit</h1>
        <p>Ziel dieser Fassung ist WCAG 2.2 auf Niveau AA, soweit der Studienstand das trägt.</p>
        <ul>
          <li>Die Seite ist auf Deutsch ausgezeichnet.</li>
          <li>Text und Goldfläche sind auf Kontrast angelegt. Sichtbarer Fokus bei Tastatur.</li>
          <li>Ein Sprunglink führt zum Inhalt. Die Kapitel sind über die Kopfzeile erreichbar.</li>
          <li>
            Bei reduzierter Bewegung klebt die Kopfzeile nicht, die Seite springt nicht weich, und der
            Dampf steht still.
          </li>
          <li>Die Glaszeichnungen sind dekorativ. Die Kapiteltexte tragen die Information.</li>
        </ul>
        <p>
          Eine Kontaktadresse für Barrieren folgt mit dem bestätigten Impressum. Bis dahin ist diese
          Lücke bekannt und offen.
        </p>
      </div>
    </article>
  );
}
