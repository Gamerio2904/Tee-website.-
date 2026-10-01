# Rechtliche Leitplanken

Das Projekt soll aussehen wie ein ernsthafter Herstellerauftritt und darf dabei niemanden zum Kauf verleiten. Die folgenden Regeln gelten für Konzept, Texte, Design und die spätere Umsetzung. Sie ersetzen keine Rechtsberatung. Vor einer öffentlichen Freigabe soll die Betreuung der Lehrveranstaltung die Kennzeichnung und das Impressum gegenlesen.

## Grundsatz

Es gibt keinen Verkauf, keine Lieferbereitschaft und keinen Zahlungsfluss. Jede Oberfläche, die nach Shop aussieht, sagt im selben Blickfeld, dass es ein Studienprojekt ist und dass nichts berechnet oder verschickt wird.

## Kennzeichnung

- Ein dauerhaft sichtbarer Hinweis auf jeder Seite: **Studienprojekt · kein Verkauf · keine Lieferung**.
- Der Hinweis steht nicht nur im Footer. Auf Startseite, Sortiment, Produktdetail, Warenkorb und Demo-Kasse ist er zusätzlich im Seitenkopf oder direkt am Handlungsbutton.
- Der Button heißt nicht „Kaufen“ oder „Zahlungspflichtig bestellen“. Er heißt **Demo beenden**.
- Die Bestätigung sagt in klarem Deutsch: Es kommt kein Vertrag zustande, es wird nichts abgebucht, es wird nichts geliefert.
- Meta-Robots: `noindex, nofollow`, bis die Betreuung eine Indexierung ausdrücklich freigibt. Ein fiktiver Shop in der Google-Suche ist das größte Irreführungsrisiko.

## Preise und Angebot

- Preise dürfen als Gestaltungsbeispiel stehen, weil eine industrieähnliche Produktseite sonst unglaubwürdig wirkt.
- Jeder Preis trägt daneben den Zusatz **Beispielpreis, kein Angebot**.
- Keine durchgestrichenen „Statt“-Preise, keine Countdown-Rabatte, kein „nur noch 2 auf Lager“, kein erfundener Lagerdruck.
- Die Preisangabenverordnung wird nicht dadurch erfüllt, dass man einen Scheinshop baut. Sie wird vermieden, indem kein entgeltliches Angebot gemacht wird.

## Kasse und Daten

- Kein Zahlungsdienst, keine Kreditkartenfelder, kein PayPal, kein Klarna, keine IBAN.
- Karteneingaben wären selbst als Attrappe gefährlich, weil Besucher echte Nummern eintippen könnten.
- Die Demo-Kasse fragt höchstens nach einem Vornamen für die persönliche Bestätigungsansicht. Dieser Wert bleibt im Browser und wird nicht an einen Server gesendet.
- Kein Newsletter-Versand. Ein Formular, das E-Mail-Adressen einsammelt, entfällt. Ein nicht absendbares Muster darf nur existieren, wenn es vor dem Feld sagt, dass nichts gespeichert und nichts versendet wird.
- Keine Analysewerkzeuge von Drittanbietern, keine Marketing-Pixel, keine Schriftarten von Google-Servern zur Laufzeit. Schriften werden lokal ausgeliefert.
- Der Demo-Warenkorb liegt in `localStorage`. Die Datenschutzerklärung beschreibt das in einem kurzen Absatz.

## Impressum und Datenschutz

- Öffentlich erreichbare Seiten, die wie ein geschäftlicher Auftritt wirken, bekommen ein Impressum nach § 5 DDG: Name der verantwortlichen Person, ladungsfähige Anschrift, Kontakt. Erfundene Adressen sind unzulässig. Ob die Hochschulanschrift genutzt werden darf, klärt das Sprint-0-Gespräch mit der Betreuung.
- Datenschutzerklärung nach DSGVO, auch wenn kaum Daten verarbeitet werden: Verantwortliche Stelle, Hosting und Server-Logs des Betreibers, lokale Speicherung des Warenkorbs, Betroffenenrechte, Kontakt.
- Kein Cookie-Banner, solange nur technisch erforderliche Speicherung genutzt wird. Ein Banner ohne einwilligungspflichtige Cookies wäre selbst irreführend.
- Keine Widerrufsbelehrung, die einen Fernabsatzvertrag vortäuscht. Stattdessen ein kurzer Satz auf der Pflichtseite: Es werden keine Verträge geschlossen, ein Widerrufsrecht entsteht nicht.

## Werbung und Produktaussagen

- Keine Heilversprechen, keine „Detox“-, „Heiltee“- oder Krankheitsaussagen. Erlaubt sind Geschmack, Duft, Farbe und Zubereitung.
- Keine erfundenen Kundenstimmen, Sterne oder Presselogos. Soziale Bewährtheit darf im Konzept als leere Fläche geplant und muss dann weggelassen oder klar als Gestaltungsdummy ohne Personenbezug markiert werden. Für die Abgabe gilt: keine Testimonials.
- Keine echten Marken als eigene Produkte. Keine Nachahmung von Auréa, keine Übernahme von Packungsfotos bekannter Hersteller.
- Vor der Veröffentlichung eine Zeichenrecherche beim DPMA für den endgültigen Markennamen. Bis dahin ist **Glasquell** ein Arbeitstitel.
- Bilder: eigene Fotos, selbst erstellte Renderings oder Medien mit einer Lizenz, die Bearbeitung und Veröffentlichung im Hochschulkontext erlaubt. KI-Bilder werden im Projektnachweis gekennzeichnet und nicht als Aufnahmen einer echten Ernte ausgegeben.
- Das Reel wird nicht ins Repository gelegt und nicht auf der Website eingebettet.

## Barrierefreiheit als Qualitätsmaß

Ziel ist WCAG 2.2 auf Niveau AA, soweit es ein Studienprojekt tragen kann:

- Kontrast der cremefarbenen Schrift auf dunklem Grund mindestens 4,5:1, große Überschriften mindestens 3:1.
- Volle Tastaturbedienung, sichtbarer Fokus.
- `prefers-reduced-motion` ersetzt die Scroll-Szene durch stehende Kapitelbilder.
- Alternativtexte für Produktbilder. Die dekorative Filmszene bekommt einen kurzen zusammenfassenden Text und wird nicht Bild für Bild vorgelesen.
- Die Kapitel sind auch ohne Animation erreichbar, über die Navigation und als Textliste unter der Bühne.
