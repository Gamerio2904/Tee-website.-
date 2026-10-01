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
            <h1>{blend.name}</h1>
            <p>{blend.story}</p>
            <PriceLine price={blend.price} unit={blend.unit} />
            <AddToCart slug={blend.slug} />
          </div>
        </div>
        <h2>Zutaten</h2>
        <ul>
          {blend.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Zubereitung</h2>
        <p>
          Wasser {blend.water}. Zwei Gramm auf 200 Milliliter. {blend.time} ziehen lassen, dann abseihen.
        </p>
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
