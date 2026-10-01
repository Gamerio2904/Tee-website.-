import { Mark } from "@/components/Mark";

const links = [
  { href: "/#zutaten", label: "Zutaten" },
  { href: "/#aufguss", label: "Aufguss" },
  { href: "/#guss", label: "Guss" },
  { href: "/#muster", label: "Muster" },
];

export function Header() {
  return (
    <div className="bar">
      <a className="logo" href="/">
        <Mark />
        <span>Glasquell</span>
      </a>
      <nav className="nav-desktop" aria-label="Kapitel">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="bar-end">
        <a className="btn btn-outline" href="/#sortiment">
          <span className="label-long">Zum Sortiment</span>
          <span className="label-short">Sortiment</span>
        </a>
        <details className="nav-mobile">
          <summary>Menü</summary>
          <nav aria-label="Kapitel, schmale Breite">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </div>
  );
}
