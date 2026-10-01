import type { Metadata } from "next";

export const metadata: Metadata = { title: "Studienhinweis" };

export default function StudienhinweisPage() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <h1>Studienhinweis</h1>
        <p>
          Glasquell ist die fiktive Marke eines Hochschulprojekts. Die Mischungen sind erfunden. Die
          Preise sind Beispielpreise und kein Angebot im rechtlichen Sinn.
        </p>
        <p>
          Es kommt kein Vertrag zustande. Es wird nichts abgebucht, nichts bestellt und nichts geliefert.
          Zahlungsdaten werden nicht abgefragt.
        </p>
        <p>
          Der Auftritt soll wie eine kleine Manufaktur wirken, damit Gestaltung und Führung geprüft werden
          können. Der Hinweis „Studienprojekt · kein Verkauf · keine Lieferung“ bleibt auf jeder Seite
          stehen und lässt sich nicht schließen.
        </p>
      </div>
    </article>
  );
}
