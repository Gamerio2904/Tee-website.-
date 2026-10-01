import type { Blend } from "@/lib/content";

export function PriceLine({ price, unit }: { price: string; unit: string }) {
  return (
    <p className="price">
      <span className="price-amount">{price}</span>
      <span className="price-unit">{unit}</span>
      <span className="price-note">Beispielpreis, kein Angebot</span>
    </p>
  );
}

export function BlendCard({ blend }: { blend: Blend }) {
  return (
    <article className="card">
      <div className="card-visual" style={{ color: blend.hue }} aria-hidden="true">
        <svg viewBox="0 0 120 120">
          <rect x="8" y="8" width="104" height="104" rx="8" fill="none" stroke="currentColor" strokeOpacity="0.45" />
          <path d="M60 28c10 14 18 22 18 34a18 18 0 1 1-36 0c0-12 8-20 18-34z" fill="currentColor" opacity="0.85" />
          <path d="M60 62v28" stroke="#f3efe6" strokeWidth="1.4" />
        </svg>
      </div>
      <h3>{blend.name}</h3>
      <p className="taste">{blend.taste}</p>
      <PriceLine price={blend.price} unit={blend.unit} />
    </article>
  );
}
