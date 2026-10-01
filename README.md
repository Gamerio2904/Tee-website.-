# Glasquell

Studienprojekt für eine Tee-Website im Look einer Manufaktur. Es wird nichts verkauft, nichts berechnet und nichts geliefert.

Dieser Stand enthält Sprint 0 bis Sprint 2: Gestaltungsgrundlage und die Startseite mit sieben stehenden Kapiteln, Sortimentsauszug, Zubereitung und Journal-Auftakt. Die Filmszene ab Sprint 3 ist noch nicht gebaut.

## Lokal testen

Voraussetzung ist Node.js 22. Im entpackten Ordner:

```bash
npm install
npm run dev
```

Danach im Browser öffnen: http://localhost:3000

Die Seiten stehen als Quellcode in `app/`. `index.html` entsteht beim Build im Ordner `out/` und wird nicht ins Repository gelegt, weil der nächste Build sie neu schreibt. Eine Aktion für GitHub Pages liegt bereit. GitHub hat das Einschalten von Pages für diesen Zugang abgelehnt, deshalb gibt es noch keine Adresse unter github.io.

Die statische Fassung entsteht mit `npm run build`. Der Ordner `out/` lässt sich danach mit `npm start` ausliefern.

## Auf einem Tablet testen

`npm run dev` hört in diesem Projekt auf allen Netzwerkkarten, nicht nur auf diesem Rechner. Computer und Tablet müssen im selben WLAN sein. Ein Gastnetz trennt die Geräte oft voneinander.

1. Den Rechner starten und im Projektordner `npm run dev` laufen lassen.
2. Die lokale Adresse des Rechners ablesen.
   - Windows: in der Eingabeaufforderung `ipconfig`, die IPv4-Adresse des WLAN-Adapters.
   - macOS: im Terminal `ipconfig getifaddr en0`.
   - Linux: im Terminal `hostname -I`, die erste Adresse.
3. Auf dem Tablet im Browser `http://192.168.x.x:3000` öffnen. Die Zahlen sind die Adresse aus Schritt 2. `localhost` auf dem Tablet zeigt auf das Tablet selbst und funktioniert nicht.
4. Wenn die Seite nicht lädt, die Firewall des Rechners für Node.js und Port 3000 freigeben.

Unter 900 Pixel Breite, also beim Tablet im Hochformat, erscheint das schmale Menü. Ab 900 Pixel, meist im Querformat, steht die Navigation in der Kopfzeile.

Ohne Tablet geht dieselbe Breite in Chrome über die Entwicklertools: Geräteliste öffnen und ein iPad wählen.

## Download

Der Stand liegt auf dem Branch `cursor/tee-marketing-plan-a251`:

https://github.com/Gamerio2904/Tee-website.-/archive/refs/heads/cursor/tee-marketing-plan-a251.zip

## Planung

Der Gesamtplan steht in [docs/07-zusammenfassung.md](docs/07-zusammenfassung.md).

Die gestalterische Referenz ist dieses Reel:

https://www.instagram.com/reel/DcnCJjbS4fh/?stkn=MTVnYmQxYzZpNDZ1eA==

Nachgebaut wird der Aufbau, nicht die fremde Marke und nicht das fremde Bildmaterial. Die Szenenbeschreibung liegt in [docs/01-inspiration-scroll-website.md](docs/01-inspiration-scroll-website.md). Prompts und Antworten liegen in [docs/00-protokoll-prompts-und-antworten.md](docs/00-protokoll-prompts-und-antworten.md).
