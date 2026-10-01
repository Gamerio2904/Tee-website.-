# Gesamtplan

Glasquell ist ein Studienprojekt: eine Website, die aussieht wie der Auftritt einer kleinen Teemanufaktur und an der nichts verkauft wird. Dieser Text ist der gesamte Plan in einer Fassung. Die Herleitung steht in den übrigen Dateien unter `docs/`.

## Auftrag

Es entsteht eine Marketing-Arbeit mit einer industrieähnlich gestalteten Website für Tee. Der rechtliche Rahmen ist eng: keine echten Produkte, kein Vertrag, keine Zahlung, keine Lieferung, keine Irreführung. Prompts und Antworten dieses Projekts werden in `docs/00-protokoll-prompts-und-antworten.md` fortgeschrieben. Die ER-Diagramme aus der ersten Nachricht bleiben draußen.

## Inspiration

Dokumentierter Link, wie vorgegeben:

https://www.instagram.com/reel/DcnCJjbS4fh/?stkn=MTVnYmQxYzZpNDZ1eA==

Kanonische Adresse: https://www.instagram.com/reel/DcnCJjbS4fh/

Das Reel von @designby.abhay vom 29. August 2026 dauert knapp elf Sekunden. Es zeigt ein MacBook in einem dunklen Raum. Auf dem Display läuft eine einzige Startseite der Marke Auréa, keine ganze Shop-Strecke. Eine feste Leiste trägt links die Wortmarke, in der Mitte die Punkte Ingredients, The Brew, The Pour und Order, rechts den Umriss-Button ORDER NOW. Die Bühne bleibt stehen. In der Mitte steht eine Glasteekanne, später eine doppelwandige Tasse. Scrollen spult eine vorher gerenderte Szene vor.

Die Kapitel in Blickreihenfolge:

1. Hero. Der Teebeutel senkt sich in die Kanne. Überschrift „Brewed in gold.“ Goldene Pille „Discover the ritual“, darunter „Scroll to brew“.
2. Der Beutel öffnet sich, Kräuter fallen. Überschrift „Nature, unwrapped.“
3. Die Botanicals sinken ins Wasser. Überschrift „Into the glass.“
4. Das Wasser bewegt sich. Überschrift „The water stirs.“
5. Der Aufguss färbt sich bernsteinfarben, Dampf steigt. Überschrift „A colour of gold.“
6. Schnitt auf die Tasse, ein langsamer Strahl von oben rechts, Minzblatt links. Überschrift „Poured, slowly.“
7. Dieselbe Szene mit zentrierter Überschrift „Your moment of calm.“, einem goldenen Abschlussbutton und „Watch again“.

Farben: fast schwarzes Braun, cremeweiße Serif, goldene Kursive, warmes Seitenlicht. Text liegt nie auf dem Glas, sondern abwechselnd links und rechts. Kleine Fließtexte sind auf der Aufnahme nur sinngemäß erkennbar.

Nachgebaut wird dieses Baumuster. Nicht nachgebaut werden der Name Auréa, die englischen Sätze, das Packungsbild und die Einzelbilder des Films. Das Reel zeigt weder Preise noch Warenkorb noch Kasse noch Footer. Diese Teile planen wir zusätzlich, weil eine vollständige Website sie braucht.

Die ausführliche Szenenbeschreibung steht in `docs/01-inspiration-scroll-website.md`.

## Eigene Marke

Arbeitstitel **Glasquell**, fiktive Manufaktur für lose Kräuter- und Früchteteemischungen. Vor einer Veröffentlichung außerhalb der Lehrveranstaltung wird der Name beim DPMA geprüft. Positionierung: Premium-Ritual, ruhiger Ton, Deutsch, sinnlich über Farbe und Zubereitung, ohne Heilversprechen.

Fünf Muster, alle mit dem Zusatz „Beispielpreis, kein Angebot“:

- Lindenruhe, 8,50 € / 50 g
- Feuerblatt, 9,00 € / 50 g
- Nachtminze, 7,50 € / 50 g
- Waldbeere, 8,00 € / 50 g
- Bergkraut, 8,50 € / 50 g

Personas für die Kampagnenbegründung: Mara, 34, trinkt Tee als Abendritual. Jonas, 41, sucht ein gegenständliches Geschenk. Es werden keine echten Kundendaten erhoben.

Erfolg im Marketing-Sinn, geprüft an fünf Kommilitoninnen oder Kommilitonen: vier von fünf verstehen, dass nichts gekauft wird; vier von fünf finden das Sortiment ohne Hilfe; die Mehrheit erreicht Kapitel 7; die freien Markenwörter liegen bei Ruhe, Glas oder Wärme.

## Recht, kurz und verbindlich

- Dauerhafter, nicht wegklickbarer Hinweis: „Studienprojekt · kein Verkauf · keine Lieferung“.
- Buttons: „Als Muster merken“, „Demo ansehen“, „Demo beenden“. Niemals „Kaufen“ oder „Zahlungspflichtig bestellen“.
- Keine Karteneingabe, kein Zahlungsdienst, kein Newsletter, keine Tracker, keine erfundenen Bewertungen, keine Lagerknappheit.
- Warenkorb nur im Browser. Bestätigung sagt: kein Vertrag, keine Abbuchung, keine Lieferung.
- Impressum nur mit bestätigter Person und echter Anschrift. Bis zum Betreuungsgespräch bleibt es ein markierter Entwurf.
- Datenschutz für Hosting-Logs und lokale Speicherung. Kein Cookie-Banner ohne einwilligungspflichtige Cookies.
- `noindex, nofollow`, bis die Betreuung etwas anderes freigibt.
- Eigene Bilder. Das Reel liegt nicht im Repository.
- Ziel WCAG 2.2 AA, inklusive einer stehenden Kapitelansicht bei reduzierter Bewegung.

## Website

Technik: Next.js und TypeScript, statisch, ohne Kunden-Backend, Schriften lokal.

Seiten: Start, Sortiment, fünf Mischungen, Ritual, ein Journal-Artikel, Warenkorb, Demo-Kasse, Bestätigung, FAQ, Impressum, Datenschutz, Studienhinweis, Barrierefreiheit, ruhige 404.

Die Startseite beginnt mit der gepinnten Bühne und sieben eigenen Kapiteln:

1. „Ein Blatt. Ein stilles Glas.“
2. „Offen auf dem Tisch.“
3. „Sichtbar bis zum Grund.“
4. „Es bewegt sich, bevor es Farbe annimmt.“
5. „Von klar zu bernstein.“
6. „Langsam, in ein doppeltes Glas.“
7. „Dampf, Licht, und dann die Tasse.“

Die Navigation heißt Zutaten, Aufguss, Guss, Muster und springt auf die Kapitel 2, 3, 6 und 7. Danach folgen Sortimentsauszug, drei Zubereitungsschritte, Journal-Auftakt und Footer. Die Bildfolge ist eine eigene Aufnahme oder ein selbst erstelltes Rendering. Fehlt sie, tragen Standbilder die Kapitel. Die Seite bleibt in beiden Fällen benutzbar.

Gestaltung: Hintergrund `#14110e`, Text `#f3efe6`, Gold `#d7a15a`, frei lizenzierte Serif und Sans, goldene Pille, Inhalt bis 1200 Pixel, Bühne über den ganzen Viewport. Geprüft wird bei 390 und bei 1440 Pixel Breite.

## Scrum und Roadmap

Rollen: Product Owner für Marke und Abnahme, Scrum Master im Wechsel, Umsetzung für Gestaltung, Frontend und Inhalt, dazu in jedem Sprint eine Person für die Kennzeichnung. Sprintlänge: eine Kalenderwoche der Lehrveranstaltung. Fertig ist eine Story, wenn sie auf Deutsch ist, kaufnahe Stellen kennzeichnet, per Tastatur geht, eigene Texte und Bilder nutzt und auf schmaler wie breiter Breite angeschaut wurde.

| Sprint | Ziel | Review |
| --- | --- | --- |
| 0 | Rahmen: Marke, Mischungen, Impressumsfragen, Hinweistext | Festlegungen und Gesprächsprotokoll |
| 1 | Gestaltungsgrundlage | Dunkle Beispielseite, per Tastatur bedienbar |
| 2 | Startseite als lesbares Dokument | Sieben Kapitel, erster vorführbarer Stand |
| 3 | Eigene Filmszene | Scroll-Geschichte, auch auf dem Telefon |
| 4 | Sortiment | Fünf Karten, Detailseiten, korrekte Preiszeile |
| 5 | Demo-Abschluss und Pflichtseiten | Weg bis zur Bestätigung ohne Zahlungsfelder |
| 6 | Marketing-Abgabe | Nutzertest, drei Motive, E-Mail-Muster, Bericht |

Nach Sprint 6, und nur mit Freigabe: Englisch, weitere Artikel, Indexierung. Ausgeschlossen bleiben echte Zahlung, echte Kundendaten und Heilversprechen.

## Ablage

| Datei | Inhalt |
| --- | --- |
| `docs/00-protokoll-prompts-und-antworten.md` | Prompts und Antworten |
| `docs/01-inspiration-scroll-website.md` | Link und Szenenaufbau |
| `docs/02-rechtliche-leitplanken.md` | Regeln für die Umsetzung |
| `docs/03-marke-und-marketing.md` | Marke, Sortiment, Test |
| `docs/04-website-aufbau.md` | Seiten, Gestaltung, Technik |
| `docs/05-scrum.md` | Rollen, Backlog, Abnahme |
| `docs/06-roadmap.md` | Sprintfolge |
| `docs/07-zusammenfassung.md` | Dieser Plan |
