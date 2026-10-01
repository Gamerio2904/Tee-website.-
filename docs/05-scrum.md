# Scrum

## Produktziel

Eine öffentlich vorführbare Website der fiktiven Marke Glasquell, die wie ein durchgestalteter Manufakturauftritt wirkt und an jeder kaufnahen Stelle unmissverständlich ein Studienprojekt ohne Verkauf bleibt.

## Rollen

- **Product Owner:** verantwortet Markenaussage, Texte, Priorität im Backlog und die Abnahme gegen die rechtlichen Leitplanken. Das ist eine Person aus dem Marketing-Teil der Gruppe.
- **Scrum Master:** hält das Board, die Review und die Retrospektive. Die Rolle wechselt nach jedem Sprint, damit sie nicht an einer Person hängen bleibt.
- **Umsetzung:** die übrige Gruppe, aufgeteilt in Gestaltung, Frontend und Inhalte. Eine Person bleibt in jedem Sprint ausdrücklich für die rechtliche Kennzeichnung zuständig.

Wenn die Arbeit allein entsteht, bleiben die drei Hüte trotzdem getrennt: erst die Abnahme-Kriterien schreiben, dann bauen, dann gegen die Kriterien prüfen.

## Spielregeln

- Ein Sprint dauert eine Kalenderwoche der Lehrveranstaltung. Die Länge ist der Arbeitsrhythmus, keine Aufwandsschätzung.
- Jeder Sprint hat ein Ziel, das in der Review an der laufenden Seite gezeigt wird.
- Priorität ist die Reihenfolge im Backlog. Es werden keine Story-Punkte erfunden.
- Definition of Done für jede Story: auf Deutsch, Studienhinweis an kaufnahen Stellen, Tastatur erreichbar, eigener Text, keine fremden Bilder, auf schmaler und breiter Breite angeschaut, im Protokoll der Sprint-Review notiert.

## Epics

1. **Rahmen.** Recht, Markenname, Repo, Qualitätsregeln.
2. **Gestaltungsgrundlage.** Raster, Farbe, Schrift, Komponenten.
3. **Scroll-Startseite.** Sieben Kapitel, erst stehend, dann als Bildfolge.
4. **Sortiment.** Liste und fünf Detailseiten.
5. **Demo-Abschluss.** Warenkorb, Demo-Kasse, Bestätigung.
6. **Pflicht und Inhalt.** Impressum, Datenschutz, FAQ, Ritual, ein Journal-Artikel.
7. **Prüfung.** Nutzertest, Social-Motive, E-Mail-Muster, Abgabedokument.
8. **Auftritt mit Tiefe.** Langes Scrollen, neun Mischungen, Herkunft und Journal, Kampagne „Die Farbe kommt zuletzt“. Der Plan steht in `docs/11-scroll-und-marketing.md`.

## Backlog

Die Reihenfolge ist die Umsetzungsreihenfolge.

### Sprint 0, Rahmen

1. Als Product Owner will ich den Arbeitstitel Glasquell und die fünf Mischungen festgeschrieben haben, damit Texte nicht in jeder Seite neu erfunden werden. Akzeptanz: `docs/03-marke-und-marketing.md` ist die Quelle, Änderungen nur darüber.
2. Als verantwortliche Person will ich wissen, welcher Name und welche Anschrift ins Impressum dürfen, damit keine erfundene Firma online steht. Akzeptanz: Ergebnis des Betreuungsgesprächs ist im Sprint-Review protokolliert. Bis dahin bleibt das Impressum ein klar markierter Entwurf ohne erfundene Adresse.
3. Als Besucher will ich auf jeder späteren Seite einen nicht wegklickbaren Studienhinweis, damit die Regel schon in den ersten Entwürfen sichtbar ist. Akzeptanz: Hinweistext ist freigegeben und als Komponente skizziert.

### Sprint 1, Gestaltungsgrundlage

4. Als Besucherin will ich eine ruhige dunkle Fläche mit Serif-Überschriften und einer goldenen Pille, damit der Auftritt nach Manufaktur und nicht nach Template wirkt. Akzeptanz: die Werte aus `docs/04-website-aufbau.md` sind in einer Beispielseite sichtbar, Kontrast geprüft.
5. Als Tastaturnutzer will ich Fokus und Sprungmarken sehen, damit die spätere Bühne nicht nur mit der Maus funktioniert. Akzeptanz: Beispielseite komplett ohne Maus bedienbar.
6. Als Gestalter will ich Karte, Preiszeile, Kopfzeile und Footer als wiederverwendbare Bausteine, damit Sortiment und Startseite dieselbe Sprache sprechen.

### Sprint 2, Startseite ohne Film

7. Als Besucherin will ich die sieben Kapitel auch ohne Bildfolge lesen können, damit die Geschichte nicht an fehlenden Renderings scheitert. Akzeptanz: jedes Kapitel hat Eyebrow, Überschrift, höchstens zwei Zeilen und die in der Aufbau-Datei genannten Buttons.
8. Als Besucherin will ich über die Kopfzeile zu Zutaten, Aufguss, Guss und Muster springen. Akzeptanz: die vier Sprungmarken landen auf Kapitel 2, 3, 6 und 7.
9. Als Besucherin mit reduzierter Bewegung will ich stehende Abschnitte statt einer gepinnten Szene. Akzeptanz: unter `prefers-reduced-motion` klebt nichts und nichts spielt automatisch.
10. Als Besucherin will ich unter der Bühne den Sortimentsauszug, drei Zubereitungsschritte und den Journal-Auftakt sehen.

### Sprint 3, Filmszene

11. Als Besucherin will ich, dass das Glas in der Mitte bleibt und die Handlung beim Scrollen weiterläuft. Akzeptanz: eine eigene Bildfolge oder, falls sie noch nicht fertig ist, ein dokumentierter Ersatz aus Standbildern. Kein Material aus dem Reel.
12. Als Besucherin will ich die Szene neu starten können. Akzeptanz: „Szene von vorn“ setzt den Fortschritt auf Kapitel 1.
13. Als Besucherin auf dem Telefon will ich den Text unter dem Bild und nicht darüber. Akzeptanz: bei 390 Pixel Breite überdeckt keine Überschrift das Gefäß.

### Sprint 4, Sortiment

14. Als Besucherin will ich fünf Mischungen mit Geschmack und Beispielpreis sehen. Akzeptanz: jeder Preis sagt „Beispielpreis, kein Angebot“. Keine Sterne, keine Lagerangst.
15. Als Besucherin will ich auf der Detailseite Zutaten und Zubereitung lesen und das Muster merken. Akzeptanz: der Button heißt „Als Muster merken“.
16. Als Besucherin will ich bei einer unbekannten Adresse aufs Sortiment zurückfinden.

### Sprint 5, Demo-Abschluss und Pflichtseiten

17. Als Besucherin will ich den Warenkorb leer und gefüllt sehen, Mengen ändern und Muster entfernen. Akzeptanz: Speicher nur lokal, Summe heißt Beispielsumme.
18. Als Besucherin will ich die Demo beenden, ohne Zahlungsdaten einzugeben. Akzeptanz: keine Kartenfelder, Button „Demo beenden“, Bestätigung mit den drei Verneinungen: kein Vertrag, keine Abbuchung, keine Lieferung.
19. Als Prüferin will ich Impressum, Datenschutz, FAQ, Studienhinweis und Barrierefreiheit aufrufen können. Akzeptanz: Impressum enthält nur bestätigte Angaben oder einen als Entwurf markierten Platzhalter bis zum Betreuungsgespräch.
20. Als Leserin will ich eine Ritualseite und einen Journal-Artikel, die auf Mischungen verlinken und keine Heilwirkung behaupten.

### Sprint 6, Marketing-Abgabe

21. Als Product Owner will ich fünf Nutzertests nach dem Leitfaden in der Markendatei. Akzeptanz: Protokoll mit den drei Erfolgskriterien und den gefundenen Brüchen.
22. Als Product Owner will ich drei Social-Motive und ein nicht versendetes E-Mail-Muster mit Studienhinweis im ersten Satz.
23. Als Abgabe will ich die laufende Seite auf schmaler und breiter Breite, `noindex` im Seitenkopf und einen kurzen Abgabebericht, der auf diese Dokumentation zeigt.

### Sprint 7 bis 10, Auftritt mit Tiefe

Die Stories 24 bis 38, die Abnahme und die Grenzen stehen in [11-scroll-und-marketing.md](11-scroll-und-marketing.md). Kurz: Sprint 7 macht die Startseite wieder zu einem langen Dokument. Sprint 8 erweitert das Sortiment auf neun erfundene Mischungen. Sprint 9 schärft die Oberfläche und ergänzt Herkunft und Journal. Sprint 10 trägt die Kampagne „Die Farbe kommt zuletzt“ ohne Formular und ohne Messung durch Pixel.

## Zeremonien

- **Planung:** eine Stunde, Sprintziel in einem Satz, nur Stories aus der nächsten Gruppe.
- **Review:** die Seite wird bedient, nicht nur beschrieben. Die Kennzeichnung wird ab dem ersten kaufnahen Screen in jeder Review mitgeprüft.
- **Retrospektive:** eine Beobachtung, was die Kennzeichnung schwächer gemacht hat, und eine Änderung für den nächsten Sprint.

## Risiken

| Risiko | Antwort |
| --- | --- |
| Die Seite wirkt wie ein echter Shop | Hinweis nicht wegklickbar, Button-Texte aus diesem Backlog, `noindex` |
| Die Bildfolge wird nicht fertig | Kapitel funktionieren mit Standbildern, Film ist eine eigene Story |
| Fremdes Reel-Material rutscht ins Repository | Review prüft die Medienliste, das Video bleibt außerhalb des Repository |
| Impressum mit erfundener Adresse | Veröffentlichung stoppt, bis die Betreuung die Angaben bestätigt |
| Gesundheitsaussagen im Journal | Abnahme durch die Person mit der Rechtsaufgabe |
