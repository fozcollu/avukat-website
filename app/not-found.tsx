// Top-level fallback for paths that don't match /[locale]/... at all
// (e.g. a stray request outside the middleware matcher). Kept minimal since
// it can't rely on locale/message context.
export default function RootNotFound() {
  return (
    <html lang="tr">
      <body style={{ fontFamily: "sans-serif", padding: "4rem", textAlign: "center" }}>
        <h1>404 — Sayfa Bulunamadı</h1>
        <p>
          <a href="/tr">Ana sayfaya dön</a>
        </p>
      </body>
    </html>
  );
}
