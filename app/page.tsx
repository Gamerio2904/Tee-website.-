import { BlendCard } from "@/components/BlendCard";
import { ChapterBlock } from "@/components/ChapterBlock";
import { ChapterSeen } from "@/components/ChapterSeen";
import { SiteLink } from "@/components/SiteLink";
import { articles, blends, chapters, prepSteps } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <p className="sr-only">
        Sieben Kapitel stehen untereinander und führen durch ein Aufgussritual. Es wird nichts verkauft.
      </p>
      <ChapterSeen />
      {chapters.map((chapter) => (
        <ChapterBlock key={chapter.id} chapter={chapter} />
      ))}
      <section className="band" aria-labelledby="manufaktur-title">
        <div className="band-inner intro">
          <p className="eyebrow">Die Manufaktur</p>
          <h2 id="manufaktur-title">Glas ist der ganze Raum.</h2>
          <p>Glasquell ist ein Studienprojekt. Es wird nichts verkauft und nichts geliefert.</p>
          <p>
            Die fiktive Manufaktur zeigt lose Kräuter-, Früchte- und Teemischungen als langsames Ritual. Der
            Hof am Glasquell ist erfunden.
          </p>
          <p>Die Zutaten bleiben im Glas sichtbar, vom ersten Blatt bis zur Farbe.</p>
        </div>
      </section>
      <section id="sortiment" className="band" aria-labelledby="sortiment-title">
        <div className="band-inner">
          <p className="eyebrow">Musterware</p>
          <h2 id="sortiment-title">Neun Mischungen, kein Angebot.</h2>
          <p className="lede">Sensorik, Aufguss und Beispielpreis. Die ausführliche Seite liegt hinter jeder Karte.</p>
          <div className="cards">
            {blends.map((blend) => (
              <BlendCard key={blend.slug} blend={blend} />
            ))}
          </div>
          <p className="actions">
            <SiteLink className="text-link" href="/sortiment">
              Ganzes Sortiment
            </SiteLink>
          </p>
        </div>
      </section>
      <section id="zubereitung" className="band" aria-labelledby="zubereitung-title">
        <div className="band-inner">
          <p className="eyebrow">Zubereitung</p>
          <h2 id="zubereitung-title">Menge, Temperatur, Zeit, Abseihen.</h2>
          <ol className="steps">
            {prepSteps.map((step, index) => (
              <li key={step.title}>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="actions">
            <SiteLink className="text-link" href="/ritual">
              Die Aufgussfolge
            </SiteLink>
          </p>
        </div>
      </section>
      <section className="band" aria-labelledby="herkunft-title">
        <div className="band-inner intro">
          <p className="eyebrow">Herkunft</p>
          <h2 id="herkunft-title">Ein erfundener Hof, ein klares Glas.</h2>
          <p>
            Der Hof am Glasquell liegt in keiner Karte. Erzählt wird, wie Blatt, Wasser und Glas
            zusammenkommen. Eine Anschrift steht hier nicht.
          </p>
          <SiteLink className="text-link" href="/herkunft">
            Die Herkunft lesen
          </SiteLink>
        </div>
      </section>
      <section id="journal" className="band" aria-labelledby="journal-title">
        <div className="band-inner">
          <p className="eyebrow">Journal und Kampagne</p>
          <h2 id="journal-title">Lesen, dann die Farbe sehen.</h2>
          <ul className="link-list">
            {articles.map((article) => (
              <li key={article.slug}>
                <SiteLink href={`/journal/${article.slug}`}>{article.title}</SiteLink>
                <p>{article.lede}</p>
              </li>
            ))}
          </ul>
          <p className="actions">
            <SiteLink className="btn btn-gold" href="/kampagne">
              Die Farbe kommt zuletzt
            </SiteLink>
            <SiteLink className="text-link" href="/journal">
              Zum Journal
            </SiteLink>
          </p>
        </div>
      </section>
    </>
  );
}
