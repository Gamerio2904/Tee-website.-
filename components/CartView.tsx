"use client";

import { SiteLink } from "@/components/SiteLink";
import { formatEuro } from "@/lib/content";
import { useCart } from "@/lib/cart";

export function CartView() {
  const { ready, lines, totalCents, setQty, remove } = useCart();

  if (!ready) return <p>Die Musterliste wird im Browser gelesen.</p>;

  if (lines.length === 0) {
    return (
      <div className="empty-cart">
        <p>Die Musterliste ist leer. Es liegt nichts zum Versenden bereit.</p>
        <SiteLink className="btn btn-gold" href="/sortiment">
          Zum Sortiment
        </SiteLink>
      </div>
    );
  }

  return (
    <>
      <ul className="cart-list">
        {lines.map((line) => (
          <li key={line.blend.slug}>
            <div className="cart-swatch" style={{ color: line.blend.hue }} aria-hidden="true" />
            <div>
              <h2>{line.blend.name}</h2>
              <p className="taste">{line.blend.taste}</p>
              <p className="price-note">
                {formatEuro(line.lineCents)} Beispielsumme, kein Angebot
              </p>
            </div>
            <div className="qty">
              <button type="button" onClick={() => setQty(line.blend.slug, line.qty - 1)} aria-label="Weniger">
                −
              </button>
              <span>{line.qty}</span>
              <button type="button" onClick={() => setQty(line.blend.slug, line.qty + 1)} aria-label="Mehr">
                +
              </button>
            </div>
            <button className="text-link qty-remove" type="button" onClick={() => remove(line.blend.slug)}>
              Entfernen
            </button>
          </li>
        ))}
      </ul>
      <p className="cart-total">
        <span>Beispielsumme</span>
        <strong>{formatEuro(totalCents)}</strong>
      </p>
      <p className="price-note">Kein Angebot. Es wird nichts berechnet.</p>
      <SiteLink className="btn btn-gold" href="/demo-kasse">
        Demo ansehen
      </SiteLink>
    </>
  );
}
