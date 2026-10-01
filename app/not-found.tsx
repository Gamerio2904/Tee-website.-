import { SiteLink } from "@/components/SiteLink";

export default function NotFound() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <p className="eyebrow">404</p>
        <h1>Diese Seite liegt nicht bereit.</h1>
        <p>Der gesuchte Pfad gehört nicht zum Sortiment.</p>
        <p>
          <SiteLink className="btn btn-gold" href="/sortiment">
            Zum Sortiment
          </SiteLink>
        </p>
      </div>
    </article>
  );
}
