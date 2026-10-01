import type { Metadata } from "next";
import { DemoCheckout } from "@/components/DemoCheckout";

export const metadata: Metadata = { title: "Demo" };

export default function DemoPage() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <p className="flag">Kein Verkauf</p>
        <h1>Demo ansehen</h1>
        <DemoCheckout />
      </div>
    </article>
  );
}
