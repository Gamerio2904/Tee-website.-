import type { Metadata } from "next";
import { AddToCart } from "@/components/AddToCart";
import { BlendCard } from "@/components/BlendCard";
import { SiteLink } from "@/components/SiteLink";
import { getBlend } from "@/lib/content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = { title: "Die Farbe kommt zuletzt" };

export default function CampaignPage() {
  const shown = ["lindenruhe", "nebelhang"].map((slug) => getBlend(slug)!);

  return (
    <article className="subpage">
      <div className="subpage-inner wide">
        <p className="flag">Studienprojekt · kein Verkauf · keine Lieferung</p>
        <p className="eyebrow">Kampagne</p>
        <h1>
          Das Wasser ist zuerst klar. <em>Die Farbe kommt zuletzt.</em>
        </h1>
        <p className="lede">Die Farbe kommt aus dem Blatt, nicht aus einem Versprechen.</p>
        <h2>Zwei Muster, an denen man die Farbe sieht</h2>
        <div className="cards cards-two">
          {shown.map((blend) => (
            <BlendCard key={blend.slug} blend={blend} />
          ))}
        </div>
        <h2>Lesen</h2>
        <p>
          <SiteLink href="/journal/farbe-im-glas">Die Farbe im Glas</SiteLink> folgt dem Aufguss von
          Nebelhang, ohne eine Wirkung zu behaupten.
        </p>
        <h2>Motive</h2>
        <div className="motive-row">
          <img src={`${basePath}/motive/kampagne-klar.svg`} alt="Motiv: Das Wasser ist zuerst klar. Darüber steht der Studienhinweis." />
          <img src={`${basePath}/motive/kampagne-farbe.svg`} alt="Motiv: Die Farbe kommt zuletzt. Darüber steht der Studienhinweis." />
          <img src={`${basePath}/motive/kampagne-blatt.svg`} alt="Motiv: Aus dem Blatt, nicht aus einem Versprechen. Darüber steht der Studienhinweis." />
        </div>
        <p>
          <SiteLink href="/email-kampagne">E-Mail-Muster zur Kampagne, wird nicht versendet</SiteLink>
        </p>
        <h2>Als Muster merken</h2>
        <p>Das ist die Handlung dieser Kampagne. Es entsteht kein Vertrag, es wird nichts berechnet.</p>
        <AddToCart slug="lindenruhe" />
        <AddToCart slug="nebelhang" />
      </div>
    </article>
  );
}
