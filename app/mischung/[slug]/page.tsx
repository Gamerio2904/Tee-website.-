import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/AddToCart";
import { BlendCard } from "@/components/BlendCard";
import { PriceLine } from "@/components/BlendCard";
import { blends, getBlend, relatedBlends } from "@/lib/content";

export function generateStaticParams() {
  return blends.map((blend) => ({ slug: blend.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const blend = getBlend(slug);
    return { title: blend ? blend.name : "Mischung" };
  });
}

export default async function BlendPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blend = getBlend(slug);
  if (!blend) notFound();
  const related = relatedBlends(blend.slug);

  return (
    <article className="subpage">
      <div className="subpage-inner wide">
        <p className="flag">Erfundene Mischung</p>
        <div className="product">
          <div className="card-visual product-visual" style={{ color: blend.hue }} aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <rect x="8" y="8" width="104" height="104" rx="8" fill="none" stroke="currentColor" />
              <path d="M60 28c10 14 18 22 18 34a18 18 0 1 1-36 0c0-12 8-20 18-34z" fill="currentColor" />
            </svg>
          </div>
          <div>
            <p className="eyebrow">{blend.kind}</p>
            <h1>{blend.name}</h1>
            <p>{blend.story}</p>
            <PriceLine price={blend.price} unit={blend.unit} />
            <AddToCart slug={blend.slug} />
          </div>
        </div>
        <dl className="facts">
          <div>
            <dt>Tassenfarbe</dt>
            <dd>{blend.cup}</dd>
          </div>
          <div>
            <dt>Herkunft</dt>
            <dd>{blend.origin}</dd>
          </div>
          <div>
            <dt>Menge</dt>
            <dd>{blend.dose}</dd>
          </div>
          <div>
            <dt>Wasser</dt>
            <dd>{blend.water}</dd>
          </div>
          <div>
            <dt>Zeit</dt>
            <dd>{blend.time}</dd>
          </div>
        </dl>
        <h2>Zutaten</h2>
        <ul>
          {blend.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Aufguss</h2>
        <ol className="steps steps-stack">
          <li>
            <span>01</span>
            <h3>Menge</h3>
            <p>{blend.dose}. Die Blätter bleiben im Glas sichtbar.</p>
          </li>
          <li>
            <span>02</span>
            <h3>Wasser</h3>
            <p>{blend.water}. Nicht kochen, wenn die Mischung ein Grüntee ist.</p>
          </li>
          <li>
            <span>03</span>
            <h3>Zeit</h3>
            <p>{blend.time} ziehen lassen. Die Tasse wird {blend.cup}.</p>
          </li>
          <li>
            <span>04</span>
            <h3>Abseihen</h3>
            <p>Abgießen, ohne die Blätter auszudrücken.</p>
          </li>
        </ol>
        <p>Die Mischung ist erfunden. Sie ist kein Lebensmittelangebot und kein Hinweis auf eine Wirkung.</p>
        <h2>Weitere Muster</h2>
        <div className="cards cards-three">
          {related.map((item) => (
            <BlendCard key={item.slug} blend={item} />
          ))}
        </div>
      </div>
    </article>
  );
}
