import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Glasquell · Studienprojekt",
    template: "%s · Glasquell",
  },
  description:
    "Fiktive Teemanufaktur. Studienprojekt, kein Verkauf, keine Lieferung.",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <a className="skip" href="#inhalt">
          Zum Inhalt
        </a>
        <div className="top">
          <p className="notice">
            <span>Studienprojekt · kein Verkauf · keine Lieferung</span>
            <a href="/studienhinweis">Ausführlich lesen</a>
          </p>
          <Header />
        </div>
        <main id="inhalt">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
