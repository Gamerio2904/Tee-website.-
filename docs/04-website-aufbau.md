# Website-Aufbau

Die Seite soll sich anfühlen wie der Auftritt einer kleinen Premium-Manufaktur. Das Reel liefert die Startsequenz. Alles darunter ist der Shop-Körper, den eine vollständige Website braucht und den das Reel nicht zeigt.

## Seiten

| Pfad | Aufgabe |
| --- | --- |
| `/` | Scroll-Bühne, danach Sortimentsauszug, Ritual in drei Schritten, Journal-Auftakt, Footer |
| `/sortiment` | Fünf Musterkarten mit Beispielpreis und Studienhinweis |
| `/mischung/lindenruhe` und vier weitere | Sensorik, Zutaten, Zubereitung, Beispielpreis, Button „Als Muster merken“ |
| `/ritual` | Zubereitung in Ruhe, ohne Gesundheitsaussagen |
| `/journal` und `/journal/langsam-aufgiessen` | Ein fertiger Artikel, weitere Titel nur als angekündigte leere Zustände ohne Fake-Inhalt |
| `/warenkorb` | Lokale Musterliste, Mengenänderung, Leerer-Zustand |
| `/demo-kasse` | Zusammenfassung, Vornamenfeld optional, Button „Demo beenden“ |
| `/demo-bestaetigung` | Klartext: kein Vertrag, keine Lieferung, keine Zahlung |
| `/faq` | Studiencharakter, Beispielpreise, Zubereitung |
| `/impressum` | Echte Verantwortliche, keine erfundene Firma |
| `/datenschutz` | Hosting, lokale Speicherung, Rechte |
| `/studienhinweis` | Ausführliche Einordnung für Prüfer und Besucher |
| `/barrierefreiheit` | Bekannter Stand, Kontakt bei Barrieren |

Nicht gebaut: Benutzerkonten, Passwörter, Wunschlisten mit Server, Gutscheine, Bewertungen, Live-Chat, Mehrsprachigkeit. Englisch ist eine spätere Erweiterung, kein Bestandteil der Abgabe.

## Startseite, Abschnitt für Abschnitt

### Feste Kopfzeile

Höhe etwa 72 Pixel auf dem Desktop, durchscheinend dunkel, beim Scrollen der Bühne unverändert. Links die Wortmarke Glasquell in Versalien mit einem selbst gezeichneten, sehr kleinen Glas- oder Blattzeichen. In der Mitte vier Sprungmarken: **Zutaten**, **Aufguss**, **Guss**, **Muster**. Rechts der Umriss-Button **Zum Sortiment**. Auf schmalen Screens werden die Sprungmarken zu einem Menü, der Button bleibt als Icon oder kurze Beschriftung erhalten. Der Studienhinweis sitzt als schmale Leiste direkt unter oder über der Kopfzeile und lässt sich nicht wegklicken.

### Pin-Bühne

Die Bühne füllt den ersten Viewport und bleibt stehen, während der Besucher scrollt. Der Fortschritt der Filmszene hängt am Scrollweg, nicht an einem Autoplay. Rechts und links davon liegen die Kapiteltexte. Unter 900 Pixel Breite wandert der Text unter das Bild, die Szene bleibt oben im Ausschnitt.

Sieben Kapitel, eigene Texte:

1. **Der erste Blick.** Überschrift „Ein Blatt. Ein stilles Glas.“ Button „Das Ritual ansehen“. Hinweis „Zum Aufguss scrollen“.
2. **Die Zutaten.** „Offen auf dem Tisch.“ Kurze Aufzählung der Kräuter der gerade gezeigten Mischung.
3. **Ins Glas.** „Sichtbar bis zum Grund.“
4. **Das Wasser.** „Es bewegt sich, bevor es Farbe annimmt.“
5. **Die Farbe.** „Von klar zu bernstein.“
6. **Der Guss.** „Langsam, in ein doppeltes Glas.“
7. **Der Moment.** „Dampf, Licht, und dann die Tasse.“ Button „Muster ansehen“ und Textlink „Szene von vorn“.

Die Sprungmarken der Navigation fassen die Kapitel: Zutaten führt zu Kapitel 2, Aufguss zu Kapitel 3, Guss zu Kapitel 6, Muster zu Kapitel 7 und danach weiter ins Sortiment.

### Nach der Bühne

Erst hier wird die Seite wieder ein normales Dokument.

- Drei Sätze, was Glasquell ist, inklusive Studienhinweis im ersten Satz.
- Fünf Mischungskarten, quer scrollbar oder als ruhiges Raster.
- Drei Zubereitungsschritte: Wasser, Menge, Zeit.
- Ein Journal-Auftakt mit einem Artikel.
- Footer mit Markenzeile, Navigation, Impressum, Datenschutz, Studienhinweis, Barrierefreiheit. Keine Social-Icons ohne echte Profile.

## Sortiment und Produktdetail

Karten zeigen ein quadratisches Bild, den Namen, eine Geschmackszeile und den Beispielpreis mit dem Zusatz „Beispielpreis, kein Angebot“. Kein Herz-Icon, keine Sterne, kein „Bestseller“.

Die Detailseite ist zweispaltig. Links das Bild, rechts Name, Sensorik, Preiszeile, Menge als Muster im Warenkorb, Zutaten, Zubereitung. Darunter eine ruhige Zutatenliste und der Hinweis, dass die Mischung erfunden ist. Verwandte Mischungen als drei kleine Karten.

## Warenkorb und Demo-Kasse

Der Warenkorb ist eine schmale Liste: Bild, Name, Menge, Beispielsumme. Die Summe heißt **Beispielsumme**. Der weiterführende Button heißt **Demo ansehen**, nicht „Zur Kasse“.

Die Demo-Kasse wiederholt die Liste, bietet ein optionales Vornamenfeld und einen deutlichen Absatz zum Studiencharakter. Der einzige Absendebutton ist **Demo beenden**. Danach erscheint eine Bestätigungsseite mit einer lokal erzeugten Beispielnummer und den drei Verneinungen: kein Vertrag, keine Abbuchung, keine Lieferung.

## Gestaltungssystem

| Rolle | Wert |
| --- | --- |
| Hintergrund | `#14110e` |
| Fläche | `#1c1814` |
| Text | `#f3efe6` |
| Leiser Text | `#b7aa9a` |
| Gold | `#d7a15a` |
| Linie | `rgba(243, 239, 230, 0.16)` |
| Überschrift | Eine frei lizenzierte Serif, lokal, zum Beispiel „Fraunces“ oder „Newsreader“ |
| Text | Eine frei lizenzierte Sans, lokal, zum Beispiel „Outfit“ |
| Button primär | Goldene Pille, dunkle Schrift |
| Button sekundär | Nur Text mit Unterstreichung im Fokus |
| Radius | Pillen für Aktionen, 12 Pixel für Karten |
| Raster | 12 Spalten, Inhalt maximal 1200 Pixel, Bühne voller Viewport |

Bewegung ist langsam und an den Scroll gebunden. Nichts blinkt. Unter `prefers-reduced-motion` stehen die sieben Kapitel als normale Abschnitte mit je einem Standbild.

## Technische Richtung

- Next.js mit TypeScript, statisch auslieferbar, ohne Kunden-Backend.
- Inhalte der Mischungen und Kapitel in typisierten Daten, nicht im Layout verstreut.
- Die Scroll-Szene ist eine Bildfolge auf einem Canvas, gekoppelt an den Scroll-Fortschritt. Die Bilder werden selbst erstellt. Solange die Folge fehlt, zeigen die Kapitel ein einziges selbst erstelltes Standbild. Die Seite ist auch dann vollständig benutzbar.
- Warenkorb in `localStorage`.
- Keine externen Tracker.
- Qualitätsziel: Tastatur, reduzierte Bewegung, lesbare Kontraste, `noindex`, Lighthouse ohne offensichtliche rote Pflichtverletzungen bei Accessibility und Best Practices.

## Zustände, die mitgebaut werden

- Leerer Warenkorb mit einem Satz und einem Link ins Sortiment.
- Unbekannte Mischungsadresse mit einer ruhigen 404-Seite und Link zum Sortiment.
- Journal ohne weitere Artikel: ein fertiger Text, keine grauen Platzhalter mit falschen Daten.
- Schmale Breite, 390 Pixel, und Desktop, 1440 Pixel.
