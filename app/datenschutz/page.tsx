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
          Bestellung an. Ein Cookie-Banner entfällt, weil nichts eingewilligt werden muss.
        </p>
        <p>
          Die Musterliste liegt im lokalen Speicher dieses Browsers unter dem Schlüssel „glasquell-muster“.
          Sie enthält nur die gewählten Musternamen und Mengen. Ein optionaler Vorname für die Demo-Ansicht
          bleibt in der Sitzung und wird nicht an einen Server gesendet. Es wird keine E-Mail-Adresse
          abgefragt.
        </p>
        <p>
          Kommt das siebte Kapitel ins Blickfeld, kann der Browser zusätzlich die Markierung
          „glasquell-kapitel-7“ setzen. Auch die bleibt auf dem Gerät.
        </p>
        <p>
          Die verantwortliche Stelle ist dieselbe Person wie im Impressum und steht noch nicht fest.
          Betroffenenrechte nach der DSGVO setzen diese bestätigte Kontaktstelle voraus.
        </p>
        <p>
          Die Seiten sind mit <strong>noindex</strong> gekennzeichnet und sollen nicht in Suchmaschinen
          erscheinen.
        </p>
      </div>
    </article>
  );
}
