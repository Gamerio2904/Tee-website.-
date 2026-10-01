import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SiteLink } from "@/components/SiteLink";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: {
    default: "Glasquell · Studienprojekt",
    template: "%s · Glasquell",
  },
  description:
    "Fiktive Teemanufaktur. Studienprojekt, kein Verkauf, keine Lieferung.",
  robots: { index: false, follow: false },
  icons: { icon: `${basePath}/favicon.svg` },
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
            <SiteLink href="/studienhinweis">Ausführlich lesen</SiteLink>
          </p>
          <Header />
        </div>
        <main id="inhalt">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
