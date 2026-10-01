import { Mark } from "@/components/Mark";
import { SiteLink } from "@/components/SiteLink";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Mark />
        <p>Glasquell. Ein Blatt. Ein stilles Glas.</p>
      </div>
      <nav aria-label="Seitenende">
        <SiteLink href="/#zutaten">Zutaten</SiteLink>
        <SiteLink href="/#aufguss">Aufguss</SiteLink>
        <SiteLink href="/#guss">Guss</SiteLink>
        <SiteLink href="/sortiment">Sortiment</SiteLink>
        <SiteLink href="/warenkorb">Musterliste</SiteLink>
        <SiteLink href="/ritual">Ritual</SiteLink>
        <SiteLink href="/journal">Journal</SiteLink>
      </nav>
      <nav aria-label="Pflichtangaben">
        <SiteLink href="/impressum">Impressum</SiteLink>
        <SiteLink href="/datenschutz">Datenschutz</SiteLink>
        <SiteLink href="/studienhinweis">Studienhinweis</SiteLink>
        <SiteLink href="/barrierefreiheit">Barrierefreiheit</SiteLink>
        <SiteLink href="/faq">Fragen</SiteLink>
      </nav>
    </footer>
  );
}
