"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { blends, type Blend } from "@/lib/content";

const STORAGE_KEY = "glasquell-muster";

type CartLine = { slug: string; qty: number };

type CartContextValue = {
  ready: boolean;
  lines: { blend: Blend; qty: number; lineCents: number }[];
  totalCents: number;
  count: number;
  add: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        if (Array.isArray(parsed)) setItems(parsed.filter((line) => line.qty > 0));
      }
    } catch {
      setItems([]);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const value = useMemo<CartContextValue>(() => {
    const lines = items
      .map((line) => {
        const blend = blends.find((item) => item.slug === line.slug);
        if (!blend) return null;
        return { blend, qty: line.qty, lineCents: blend.cents * line.qty };
      })
      .filter((line): line is { blend: Blend; qty: number; lineCents: number } => line !== null);
    return {
      ready,
      lines,
      totalCents: lines.reduce((sum, line) => sum + line.lineCents, 0),
      count: lines.reduce((sum, line) => sum + line.qty, 0),
      add: (slug) =>
        setItems((current) => {
          const found = current.find((line) => line.slug === slug);
          if (!found) return [...current, { slug, qty: 1 }];
          return current.map((line) => (line.slug === slug ? { ...line, qty: line.qty + 1 } : line));
        }),
      setQty: (slug, qty) =>
        setItems((current) => {
          if (qty <= 0) return current.filter((line) => line.slug !== slug);
          return current.map((line) => (line.slug === slug ? { ...line, qty } : line));
        }),
      remove: (slug) => setItems((current) => current.filter((line) => line.slug !== slug)),
      clear: () => setItems([]),
    };
  }, [items, ready]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("Warenkorb fehlt");
  return value;
}
