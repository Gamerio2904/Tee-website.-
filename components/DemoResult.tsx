"use client";

import { useEffect, useState } from "react";
import { SiteLink } from "@/components/SiteLink";

type Demo = { number: string; name: string; total: string; lines: string[] };

export function DemoResult() {
  const [demo, setDemo] = useState<Demo | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("glasquell-demo");
      if (raw) setDemo(JSON.parse(raw) as Demo);
    } catch {
      setDemo(null);
    }
    setReady(true);
  }, []);

  if (!ready) return <p>Die Ansicht wird im Browser gelesen.</p>;

  if (!demo) {
    return (
      <>
        <p>Es gibt keine abgeschlossene Demo in diesem Browser.</p>
        <SiteLink className="btn btn-gold" href="/sortiment">
          Zum Sortiment
        </SiteLink>
      </>
    );
  }

  return (
    <>
      <p className="eyebrow">Beispielnummer {demo.number}</p>
      <h1>{demo.name ? `${demo.name}, das war nur eine Demo.` : "Das war nur eine Demo."}</h1>
      <ul>
        {demo.lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <p>Beispielsumme {demo.total}. Kein Angebot.</p>
      <p>
        <strong>Es kommt kein Vertrag zustande.</strong>
      </p>
      <p>
        <strong>Es wird nichts abgebucht.</strong>
      </p>
      <p>
        <strong>Es wird nichts geliefert.</strong>
      </p>
      <SiteLink className="text-link" href="/">
        Zurück zum Ritual
      </SiteLink>
    </>
  );
}
