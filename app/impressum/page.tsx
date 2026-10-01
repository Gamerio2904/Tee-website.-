import type { Metadata } from "next";

export const metadata: Metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <p className="flag">Entwurf</p>
        <h1>Impressum</h1>
        <p>
          Diese Seite ist ein Studienprojekt und wird nicht von einer Firma betrieben. Eine erfundene
          Gesellschaft oder eine erfundene Adresse steht hier bewusst nicht.
        </p>
        <p>Offen, bis die Betreuung der Lehrveranstaltung es bestätigt:</p>
        <ul>
          <li>Name der verantwortlichen Person</li>
          <li>ladungsfähige Anschrift</li>
          <li>Kontakt für Anfragen</li>
        </ul>
        <p>
          <strong>Glasquell</strong> ist ein Arbeitstitel, kein Firmenname. Es wird nichts verkauft und
          nichts geliefert.
        </p>
      </div>
    </article>
  );
}
