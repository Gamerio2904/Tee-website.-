import type { Metadata } from "next";
import { SiteLink } from "@/components/SiteLink";
import { articles } from "@/lib/content";

export const metadata: Metadata = { title: "Journal" };

export default function JournalPage() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <p className="eyebrow">Journal</p>
        <h1>Vier Texte über Glas, Blatt und Zeit.</h1>
        <p>Studienprojekt. Keiner dieser Texte beschreibt eine Wirkung auf den Körper.</p>
        <ul className="link-list">
          {articles.map((article) => (
            <li key={article.slug}>
              <h2>
                <SiteLink href={`/journal/${article.slug}`}>{article.title}</SiteLink>
              </h2>
              <p>{article.lede}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
