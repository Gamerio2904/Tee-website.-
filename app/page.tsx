import { BlendCard } from "@/components/BlendCard";
import { ChapterBlock } from "@/components/ChapterBlock";
import { blends, chapters, prepSteps } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <p className="sr-only">
        Sieben stehende Kapitel führen durch ein Aufgussritual. Es wird nichts verkauft.
      </p>
      {chapters.map((chapter) => (
        <ChapterBlock key={chapter.id} chapter={chapter} />
      ))}
      <section className="band" aria-labelledby="manufaktur-title">
        <div className="band-inner intro">
          <p className="eyebrow">Die Manufaktur</p>
          <h2 id="manufaktur-title">Glas ist der ganze Raum.</h2>
          <p>Glasquell ist ein Studienprojekt. Es wird nichts verkauft und nichts geliefert.</p>
          <p>
            Die fiktive Manufaktur zeigt lose Kräuter- und Früchteteemischungen als langsames Ritual.
          </p>
          <p>Die Zutaten bleiben im Glas sichtbar, vom ersten Blatt bis zur Farbe.</p>
        </div>
      </section>
      <section id="sortiment" className="band" aria-labelledby="sortiment-title">
        <div className="band-inner">
          <p className="eyebrow">Musterware</p>
          <h2 id="sortiment-title">Fünf Mischungen, kein Angebot.</h2>
          <div className="cards">
            {blends.map((blend) => (
              <BlendCard key={blend.slug} blend={blend} />
            ))}
          </div>
        </div>
      </section>
      <section id="zubereitung" className="band" aria-labelledby="zubereitung-title">
        <div className="band-inner">
          <p className="eyebrow">Zubereitung</p>
          <h2 id="zubereitung-title">Wasser, Menge, Zeit.</h2>
          <ol className="steps">
            {prepSteps.map((step, index) => (
              <li key={step.title}>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section id="journal" className="band" aria-labelledby="journal-title">
        <div className="band-inner journal">
          <div>
            <p className="eyebrow">Journal</p>
            <h2 id="journal-title">Langsam aufgießen.</h2>
          </div>
          <div>
            <p>
              Wasser knapp unter dem Siedepunkt, zwei Gramm auf eine Tasse, dann warten. Lindenruhe bleibt
              hell, wenn die Blüte Zeit bekommt.
            </p>
            <p>
              Dieser Text ist der Auftakt. Die eigene Artikelseite folgt später. Auch dort wird nichts
              verkauft.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
