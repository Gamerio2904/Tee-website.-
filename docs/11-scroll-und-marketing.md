# Erweiterung: langes Scrollen, Inhalte, Oberfläche, Online-Marketing

Stand: 1. Oktober 2026. Dieser Plan folgt auf die Sprints 0 bis 6. Er beschreibt die nächsten vier Sprints. Gebaut wird er erst, wenn die Umsetzung freigegeben ist.

## Was gerade schiefläuft

Die Startseite pinnt ein Fenster über etwa sieben Viewport-Höhen. `ScrollStage` rechnet aus dem Scrollfortschritt ein Kapitel und ersetzt in diesem Fenster Überschrift, Text und Zeichnung auf einmal. Der vorherige Satz verschwindet, statt nach oben aus dem Blick zu wandern. Das liest sich als Seitenwechsel.

Die Sprungmarken sitzen auf unsichtbaren Punkten in diesem Block. „Zutaten“, „Aufguss“, „Guss“ und „Muster“ springen deshalb in der gepinnten Fläche, sie scrollen kein sichtbares Kapitel heran. Manufaktur, Sortiment, Zubereitung und Journal kommen erst nach dem Block.

Gewollt ist wieder ein langes Scrollen: eine Seite, ein Dokument, sieben Kapitel untereinander.

## Sprint 7, die Szene als langes Dokument

Ziel der Review: Vom ersten Kapitel bis zum Journal scrollt man durch eine Seite. Kein Kapitel ersetzt ein anderes im selben Rahmen.

24. Als Besucherin will ich die sieben Kapitel untereinander lesen. Akzeptanz: der Text des vorigen Kapitels bleibt sichtbar, bis er oben aus dem Fenster wandert. Es gibt keinen Moment, in dem im selben Rahmen eine andere Überschrift eingeblendet wird. Die gepinnte Bühne entfällt.
25. Als Besucherin will ich über die Kopfzeile zu sichtbaren Kapiteln springen. Akzeptanz: Zutaten, Aufguss, Guss und Muster landen auf den Abschnitten 2, 3, 6 und 7. „Szene von vorn“ scrollt zum ersten Kapitel derselben Seite.
26. Als Besucherin will ich nach dem Ritual ohne Bruch bei der Manufaktur, dem Sortiment, der Zubereitung und dem Journal ankommen.
27. Als Besucherin auf dem Telefon will ich die Überschrift unter dem Glas. Akzeptanz: bei 390 Pixel Breite überdeckt kein Text das Gefäß. Bei 1440 Pixel liegt der Text neben dem Glas, nicht darauf.
28. Als Besucherin mit reduzierter Bewegung will ich dasselbe Dokument, ohne Klebe-Effekt und ohne automatische Animation.

Das Glas bleibt eine eigene Zeichnung pro Kapitel. Eine Bildfolge aus dem Reel kommt nicht ins Repository.

## Sprint 8, Sortiment mit erfundenen, konkreten Mischungen

Ziel der Review: Neun Muster lesen sich wie ein kleines, durchdachtes Sortiment. Jede Angabe ist erfunden und als Studienprojekt gekennzeichnet. Keine Mischung behauptet eine echte Anbauregion oder eine Wirkung auf den Körper.

Die fünf bestehenden Muster bleiben: Lindenruhe, Feuerblatt, Nachtminze, Waldbeere, Bergkraut. Dazu kommen vier weitere. Alle Preise sind Beispielpreise, kein Angebot.

| Muster | Art | Sensorik | Aufguss | Beispielpreis |
| --- | --- | --- | --- | --- |
| Lindenruhe | Kräuter | Kamille, Linde, mild und hell | etwa 90 °C, fünf Minuten | 8,50 € / 50 g |
| Feuerblatt | Kräuter | Ingwer, Zitronenverbene, warm und klar | etwa 95 °C, sechs Minuten | 9,00 € / 50 g |
| Nachtminze | Kräuter | Pfefferminze, Apfel, kühl | etwa 85 °C, vier Minuten | 7,50 € / 50 g |
| Waldbeere | Früchte | Hagebutte, Hibiskus, säuerlich | etwa 95 °C, sechs Minuten | 8,00 € / 50 g |
| Bergkraut | Kräuter | Melisse, Salbei, Kräuterwiese | etwa 90 °C, fünf Minuten | 8,50 € / 50 g |
| Nebelhang | Grüntee | Frühes Blatt, grasig, hellgrün in der Tasse | etwa 70 °C, zwei Minuten | 9,50 € / 50 g |
| Kupferzweig | Schwarztee | Malzig, kupferfarben, wenig Gerbstoff | etwa 95 °C, drei Minuten | 8,90 € / 50 g |
| Nachtfunken | Rooibos | Honigbusch, Orangenschale, ohne Koffein | etwa 98 °C, sechs Minuten | 8,20 € / 50 g |
| Jasminstill | Grüntee | Jasminblüte, weich, blassgold | etwa 75 °C, zwei Minuten | 10,00 € / 50 g |

„Ohne Koffein“ bei Nachtfunken ist eine Aussage über den Rohstoff Rooibos, keine Gesundheitsaussage. Medizinische Pflanzen und Wirkversprechen bleiben draußen.

Jede Mischung bekommt in `lib/content.ts` dieselben Felder: Zutaten, Wassertemperatur, Zeit, Menge (zwei Gramm auf eine Tasse, soweit nicht anders angegeben), Tassenfarbe, ein Satz zur fiktiven Herkunft, eine kurze Geschichte. Die Herkunft heißt „Hof am Glasquell“ und ist ausdrücklich erfunden. Es werden keine echten Anbaugebiete, Genossenschaften oder Gütesiegel genannt.

29. Als Besucherin will ich auf der Karte Name, Sensorik, Aufguss und Beispielpreis sehen.
30. Als Besucherin will ich auf der Mischungsseite Zutaten, Aufgussschritte, Tassenfarbe, Herkunftssatz und Geschichte lesen und das Muster merken. Der Button bleibt „Als Muster merken“.
31. Als Besucherin will ich drei verwandte Muster sehen, ohne Sterne, Lagerzahl oder „Bestseller“.

## Sprint 9, Oberfläche und weitere Seiten

Ziel der Review: Die Seite wirkt wie ein durchgestalteter Manufakturauftritt, und die neuen Wege sind aus der Startseite erreichbar.

32. Als Besucherin will ich einen ruhigen Rhythmus: Abschnitt für Abschnitt, genug Abstand, dieselbe Eyebrow, dieselbe goldene Pille, Text nie auf dem Glas. Ziele für die Tastatur bleiben mindestens 44 Pixel hoch. Fokus ist sichtbar.
33. Als Leserin will ich eine Herkunftsseite `/herkunft`. Sie erzählt den fiktiven Hof, das Glas und das Wasser. Sie enthält keine Anschrift. Das Impressum bleibt der Entwurf ohne erfundene Adresse.
34. Als Leserin will ich die Ritualseite als Aufgussfolge: Menge, Temperatur, Zeit, Abseihen. Sie verlinkt auf die passenden Mischungen.
35. Als Leserin will ich im Journal vier eigene Artikel: „Langsam aufgießen“, „Die Farbe im Glas“, „Zwei Gramm“, „Was eine lose Mischung ist“. Jeder Artikel verlinkt auf eine Mischung und behauptet keine Wirkung.

Die Startseite endet nicht mehr mit einem einzelnen Artikelteaser. Sie zeigt das Ritual, einen Sortimentsauszug, einen Herkunftssatz und den Eingang ins Journal und in die Kampagne.

## Sprint 10, Online-Marketing ohne Verkauf

Ziel der Review: Eine Kampagne ist auf der Website, in einem E-Mail-Muster und in drei Motiven dieselbe Botschaft. Gemessen wird Verständnis, nicht Umsatz.

### Kampagne

Name: **Die Farbe kommt zuletzt.**

Botschaft: Das Wasser ist zuerst klar. Die Farbe kommt aus dem Blatt, nicht aus einem Versprechen.

Weg auf der Seite `/kampagne`:

1. Die Botschaft in einem Satz, darunter der Studienhinweis.
2. Zwei Mischungen, an denen man die Farbe sieht: Lindenruhe und Nebelhang.
3. Ein Journalartikel, „Die Farbe im Glas“.
4. Ein Abschluss, „Als Muster merken“, nicht „Kaufen“.

Es gibt kein Formular, keine Warteliste, keinen Gutschein, keinen Rabatt, keinen Countdown und keine Sterne.

### Trichter, nur zur Begründung der Seiten

| Stufe | Was die Person tut | Seite |
| --- | --- | --- |
| Aufmerksamkeit | Sieht das Ritual oder ein Motiv | Startseite, Social-Motiv |
| Interesse | Liest Herkunft oder Journal | `/herkunft`, `/journal` |
| Betrachtung | Vergleicht eine Mischung | `/sortiment`, `/mischung/…` |
| Handlung | Merkt ein Muster und beendet die Demo | `/warenkorb`, `/demo-kasse`, `/demo-bestaetigung` |

Die Handlung der Kampagne ist die Demo. Sie begründet keinen Vertrag.

### Kanäle

- Die Website ist der einzige laufende Kanal.
- Drei neue Motive zur Kampagne liegen unter `public/motive/`. Im Bild steht zuerst der Studienhinweis. Sie werden nicht auf einem echten Account veröffentlicht.
- Ein E-Mail-Muster zur Kampagne ersetzt nicht das bestehende Muster, es kommt dazu. Der erste Satz ist der Studienhinweis. Es wird nicht versendet und fragt keine Adresse ab.
- Keine Anzeigen, keine Zählpixel, keine eingebetteten Schriften von einem Fremdserver, `noindex` bleibt.

### Messung

Es bleibt bei den Kriterien aus `docs/03-marke-und-marketing.md`: vier von fünf Personen verstehen, dass nichts gekauft wird; vier von fünf erreichen das Sortiment; die Geschichte wird bis zum letzten Kapitel gesehen; die drei Wörter zur Marke kommen aus Ruhe, Glas, Wärme.

Das Protokoll in `docs/10-nutzertest.md` bleibt leer, bis fünf echte Personen die Seite bedienen. Für die neue Strecke kommt eine Zeile ins Protokollformular: „Kann die Person die Kampagne in einem Satz wiedergeben?“ Ergebnisse werden nicht erfunden.

36. Als Product Owner will ich die Kampagnenseite mit dem beschriebenen Weg.
37. Als Product Owner will ich das unversendete E-Mail-Muster und drei Motive mit Studienhinweis im ersten Blick.
38. Als Product Owner will ich das Testformular um die Kampagnenfrage ergänzt, ohne erfundene Antworten.

## Was nicht gebaut wird

Echte Zahlung, Kundendaten, Newsletter-Anmeldung, Lagerampel, Bewertungen, Heilversprechen, englische Claims, Material aus dem Reel, eine erfundene Impressumsanschrift, das Einschalten von Suchmaschinen.
