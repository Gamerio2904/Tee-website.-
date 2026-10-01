import { Mark } from "@/components/Mark";
import { SiteLink } from "@/components/SiteLink";

const links = [
  { href: "/#zutaten", label: "Zutaten" },
  { href: "/#aufguss", label: "Aufguss" },
  { href: "/#guss", label: "Guss" },
  { href: "/#muster", label: "Muster" },
];

export function Header() {
  return (
    <div className="bar">
      <SiteLink className="logo" href="/">
        <Mark />
        <span>Glasquell</span>
      </SiteLink>
      <nav className="nav-desktop" aria-label="Kapitel">
        {links.map((link) => (
          <SiteLink key={link.href} href={link.href}>
            {link.label}
          </SiteLink>
        ))}
      </nav>
      <div className="bar-end">
        <SiteLink className="btn btn-outline" href="/#sortiment">
          <span className="label-long">Zum Sortiment</span>
          <span className="label-short">Sortiment</span>
        </SiteLink>
        <details className="nav-mobile">
          <summary>Menü</summary>
          <nav aria-label="Kapitel, schmale Breite">
            {links.map((link) => (
              <SiteLink key={link.href} href={link.href}>
                {link.label}
              </SiteLink>
            ))}
          </nav>
        </details>
      </div>
    </div>
  );
}
