import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutz" };

export default function DatenschutzPage() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <p className="flag">Stand dieser Fassung</p>
        <h1>Datenschutz</h1>
        <p>
          Diese Fassung bindet keine Analysewerkzeuge ein, setzt keine Marketing-Cookies und legt keine
          Bestellung an. Ein Cookie-Banner entfällt, solange nichts eingewilligt werden muss.
        </p>
        <p>
          Der Demo-Warenkorb ist noch nicht gebaut. Sobald eine Musterliste nur im Browser liegt, wird
          diese Erklärung um diesen Punkt ergänzt. Es gibt kein Formular, das eine E-Mail-Adresse
          einsammelt.
        </p>
        <p>
          Die verantwortliche Stelle ist dieselbe Person wie im Impressum und steht noch nicht fest.
          Betroffenenrechte nach der DSGVO — Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch
          und Beschwerde bei einer Aufsichtsbehörde — setzen diese bestätigte Kontaktstelle voraus.
        </p>
        <p>Die Seiten sind mit <strong>noindex</strong> gekennzeichnet und sollen nicht in Suchmaschinen erscheinen.</p>
      </div>
    </article>
  );
}
