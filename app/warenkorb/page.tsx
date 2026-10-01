import type { Metadata } from "next";
import { CartView } from "@/components/CartView";

export const metadata: Metadata = { title: "Musterliste" };

export default function CartPage() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <p className="flag">Nur in diesem Browser</p>
        <h1>Musterliste</h1>
        <p>Die Liste bleibt auf diesem Gerät. Sie wird nicht an einen Server gesendet.</p>
        <CartView />
      </div>
    </article>
  );
}
