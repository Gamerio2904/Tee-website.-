import type { Metadata } from "next";
import { DemoResult } from "@/components/DemoResult";

export const metadata: Metadata = { title: "Demo beendet" };

export default function DemoDonePage() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <DemoResult />
      </div>
    </article>
  );
}
