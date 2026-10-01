import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Mail-Muster",
  robots: { index: false, follow: false },
};

export default function EmailMockPage() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <p className="flag">Wird nicht versendet</p>
        <h1>E-Mail-Muster</h1>
        <p>Betreff: Studienprojekt Glasquell, kein Verkauf</p>
        <div className="email-sheet">
          <p>
            <strong>Studienprojekt · kein Verkauf · keine Lieferung.</strong> Diese Nachricht ist ein
            Gestaltungsmuster und wird nicht verschickt.
          </p>
          <p>Ein Blatt. Ein stilles Glas. Die Zutaten bleiben sichtbar, bis das Wasser Farbe annimmt.</p>
          <p>Es wird keine Adresse abgefragt und kein Versand eingerichtet.</p>
        </div>
      </div>
    </article>
  );
}
