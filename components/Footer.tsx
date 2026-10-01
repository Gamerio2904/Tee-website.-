import { Mark } from "@/components/Mark";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Mark />
        <p>Glasquell. Ein Blatt. Ein stilles Glas.</p>
      </div>
      <nav aria-label="Seitenende">
        <a href="/#zutaten">Zutaten</a>
        <a href="/#aufguss">Aufguss</a>
        <a href="/#guss">Guss</a>
        <a href="/#sortiment">Sortiment</a>
      </nav>
      <nav aria-label="Pflichtangaben">
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
        <a href="/studienhinweis">Studienhinweis</a>
        <a href="/barrierefreiheit">Barrierefreiheit</a>
      </nav>
    </footer>
  );
}
