import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Mail zur Kampagne",
  robots: { index: false, follow: false },
};

export default function CampaignEmailPage() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <p className="flag">Wird nicht versendet</p>
        <h1>E-Mail-Muster zur Kampagne</h1>
        <p>Betreff: Die Farbe kommt zuletzt. Studienprojekt Glasquell.</p>
        <div className="email-sheet">
          <p>
            <strong>Studienprojekt · kein Verkauf · keine Lieferung.</strong> Diese Nachricht ist ein
            Gestaltungsmuster und wird nicht verschickt.
          </p>
          <p>Das Wasser ist zuerst klar. Die Farbe kommt zuletzt, aus dem Blatt und nicht aus einem Versprechen.</p>
          <p>Lindenruhe wird hellgelb. Nebelhang bleibt hellgrün, wenn das Wasser bei etwa 70 °C bleibt.</p>
          <p>Es wird keine Adresse abgefragt und kein Versand eingerichtet.</p>
        </div>
      </div>
    </article>
  );
}
