"use client";

import { useState } from "react";
import { SiteLink } from "@/components/SiteLink";
import { useCart } from "@/lib/cart";

export function AddToCart({ slug }: { slug: string }) {
  const { add } = useCart();
  const [noted, setNoted] = useState(false);

  return (
    <div className="actions">
      <button
        className="btn btn-gold"
        type="button"
        onClick={() => {
          add(slug);
          setNoted(true);
        }}
      >
        Als Muster merken
      </button>
      {noted ? (
        <SiteLink className="text-link" href="/warenkorb">
          In der Musterliste ansehen
        </SiteLink>
      ) : (
        <p className="price-note">Beispielpreis, kein Angebot</p>
      )}
    </div>
  );
}
