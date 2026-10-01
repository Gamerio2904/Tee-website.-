export default function NotFound() {
  return (
    <article className="subpage">
      <div className="subpage-inner">
        <p className="eyebrow">404</p>
        <h1>Diese Seite liegt nicht bereit.</h1>
        <p>Der gesuchte Pfad gehört nicht zu diesem Stand der Startseite.</p>
        <p>
          <a className="btn btn-gold" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/`}>
            Zurück zum Ritual
          </a>
        </p>
      </div>
    </article>
  );
}
