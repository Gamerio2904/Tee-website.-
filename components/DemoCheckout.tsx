"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatEuro } from "@/lib/content";
import { useCart } from "@/lib/cart";
import { SiteLink } from "@/components/SiteLink";

const DEMO_KEY = "glasquell-demo";

export function DemoCheckout() {
  const { ready, lines, totalCents, clear } = useCart();
  const [name, setName] = useState("");
  const router = useRouter();

  if (!ready) return <p>Die Musterliste wird im Browser gelesen.</p>;

  if (lines.length === 0) {
    return (
      <>
        <p>Ohne Muster gibt es nichts zu zeigen.</p>
        <SiteLink className="btn btn-gold" href="/sortiment">
          Zum Sortiment
        </SiteLink>
      </>
    );
  }

  return (
    <form
      className="demo-form"
      onSubmit={(event) => {
        event.preventDefault();
        const number = `GQ-${Date.now().toString(36).toUpperCase()}`;
        const payload = {
          number,
          name: name.trim(),
          total: formatEuro(totalCents),
          lines: lines.map((line) => `${line.qty} × ${line.blend.name}`),
        };
        sessionStorage.setItem(DEMO_KEY, JSON.stringify(payload));
        clear();
        router.push("/demo-bestaetigung");
      }}
    >
      <ul className="cart-list">
        {lines.map((line) => (
          <li key={line.blend.slug}>
            <div>
              <h2>{line.blend.name}</h2>
              <p className="taste">
                {line.qty} × {formatEuro(line.blend.cents)}
              </p>
            </div>
            <p>{formatEuro(line.lineCents)}</p>
          </li>
        ))}
      </ul>
      <p className="cart-total">
        <span>Beispielsumme</span>
        <strong>{formatEuro(totalCents)}</strong>
      </p>
      <label htmlFor="vorname">Vorname, optional, nur für diese Ansicht</label>
      <input
        id="vorname"
        name="vorname"
        autoComplete="off"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <p>
        Dies ist ein Studienprojekt. Es wird nichts verkauft, nichts berechnet und nichts geliefert. Es gibt
        keine Zahlungsfelder.
      </p>
      <button className="btn btn-gold" type="submit">
        Demo beenden
      </button>
    </form>
  );
}
