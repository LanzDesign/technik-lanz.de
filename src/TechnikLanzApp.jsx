import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const blogPosts = [
  {
    slug: 'it-sicherheitstipps-kleine-unternehmen',
    title: '5 IT-Sicherheitstipps für kleine Unternehmen',
    date: '2025-08-20',
    excerpt: 'Erfahren Sie, wie Sie die IT-Sicherheit in Ihrem kleinen Unternehmen verbessern können.',
    content: (
      <>
        <p>Kleine Unternehmen sind oft Ziel von Cyberangriffen, weil sie nicht ausreichend geschützt sind. In diesem Beitrag geben wir fünf einfache Tipps, um Ihre IT-Sicherheit zu verbessern.</p>
        <ol>
          <li>Regelmäßige Software-Updates und Patches einspielen.</li>
          <li>Starke Passwörter verwenden und Passwort-Manager einsetzen.</li>
          <li>Firewall und Antivirus-Lösungen nutzen.</li>
          <li>Regelmäßige Backups erstellen und testen.</li>
          <li>Mitarbeiter für Sicherheitsrisiken sensibilisieren.</li>
        </ol>
      </>
    ),
  },
  {
    slug: 'microsoft-365-vs-google-workspace',
    title: 'Microsoft 365 oder Google Workspace – welche Lösung passt für kleine Unternehmen?',
    date: '2025-08-20',
    excerpt: 'Vergleich der beiden großen Cloud-Büropakete für kleine Unternehmen.',
    content: (
      <>
        <p>Microsoft 365 und Google Workspace bieten leistungsstarke Tools für Büroarbeit. Wir vergleichen Funktionen, Kosten und Einsatzmöglichkeiten für kleine Unternehmen.</p>
      </>
    ),
  },
  {
    slug: 'backups-nebengewerbe-wichtig',
    title: 'Warum regelmäßige Backups für Nebengewerbe überlebenswichtig sind',
    date: '2025-08-20',
    excerpt: 'Backups sind wichtig, um Datenverlust zu vermeiden. Wir erklären, warum und wie Sie regelmäßige Backups einrichten.',
    content: (
      <>
        <p>Datenverlust kann teuer werden. Mit regelmäßigen Backups schützen Sie Ihr Nebengewerbe vor Ausfällen und stellen sicher, dass Ihre Kunden vertrauen können.</p>
      </>
    ),
  },
];

function Layout({ children }) {
  return (
    <div className="app-container">
      <header className="bg-gray-100 border-b">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="font-bold text-lg">
            <Link to="/">Technik-Lanz</Link>
          </div>
          <div className="space-x-4">
            <Link to="/">Start</Link>
            <Link to="/leistungen">Leistungen</Link>
            <Link to="/ueber-uns">Über uns</Link>
            <Link to="/kontakt">Kontakt</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto p-4">{children}</main>
      <footer className="bg-gray-100 border-t">
        <div className="container mx-auto flex justify-center space-x-4 p-4 text-sm">
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Technik-Lanz – IT-Dienstleistungen für kleine Unternehmen</title>
        <meta
          name="description"
          content="Zuverlässige IT-Dienstleistungen für kleine Unternehmen und Nebengewerbe. Ehrlich beraten, fair betreut."
        />
      </Helmet>
      <section>
        <h1 className="text-3xl font-bold mb-4">Willkommen bei Technik-Lanz</h1>
        <p className="mb-4">
          Wir unterstützen kleine Unternehmen und Nebengewerbe mit zuverlässigen IT-Lösungen – von Netzwerken über Software bis hin zu Sicherheitskonzepten.
        </p>
      </section>
    </>
  );
}

function LeistungenPage() {
  return (
    <>
      <Helmet>
        <title>Leistungen – Technik-Lanz</title>
        <meta
          name="description"
          content="Unsere IT-Leistungen: Beratung & Support, Netzwerktechnik & Sicherheit, Software- & Cloud-Lösungen."
        />
      </Helmet>
      <section>
        <h1 className="text-2xl font-bold mb-4">Unsere Leistungen</h1>
        <h2 className="text-xl font-semibold mt-4">IT-Beratung & Support</h2>
        <p>Praxisnahe Beratung und laufende Unterstützung, speziell für kleine Budgets.</p>
        <h2 className="text-xl font-semibold mt-4">Netzwerktechnik & Sicherheit</h2>
        <p>Planung, Einrichtung und Wartung Ihrer Netzwerke inklusive Sicherheitskonzepte und Backups.</p>
        <h2 className="text-xl font-semibold mt-4">Software & Cloud-Lösungen</h2>
        <p>Einrichtung und Betreuung von Office-Paketen, Cloud-Speicher und spezialisierten Branchenanwendungen.</p>
      </section>
    </>
  );
}

function UeberUnsPage() {
  return (
    <>
      <Helmet>
        <title>Über uns – Technik-Lanz</title>
        <meta
          name="description"
          content="Erfahren Sie mehr über Technik-Lanz: unsere Mission, unsere Werte und warum wir der ideale IT-Partner für Ihr kleines Unternehmen sind."
        />
      </Helmet>
      <section>
        <h1 className="text-2xl font-bold mb-4">Über uns</h1>
        <p>
          Technik-Lanz ist ein inhabergeführtes IT-Dienstleistungsunternehmen mit Fokus auf kleine Unternehmen und
          Nebengewerbe. Wir legen großen Wert auf persönliche Betreuung und praxisnahe Lösungen.
        </p>
      </section>
    </>
  );
}

function KontaktPage() {
  return (
    <>
      <Helmet>
        <title>Kontakt – Technik-Lanz</title>
        <meta name="description" content="Nehmen Sie Kontakt zu Technik-Lanz auf: telefonisch, per E-Mail oder über unser Kontaktformular." />
      </Helmet>
      <section>
        <h1 className="text-2xl font-bold mb-4">Kontakt</h1>
        <p>
          Haben Sie Fragen oder wünschen Sie ein unverbindliches Angebot? Schreiben Sie uns an{' '}
          <a href="mailto:info@technik-lanz.de" className="text-blue-600 underline">
            info@technik-lanz.de
          </a>
          .
        </p>
      </section>
    </>
  );
}

function ImpressumPage() {
  return (
    <>
      <Helmet>
        <title>Impressum – Technik-Lanz</title>
      </Helmet>
      <section>
        <h1 className="text-2xl font-bold mb-4">Impressum</h1>
        <p>Bitte tragen Sie hier Ihr vollständiges Impressum ein.</p>
      </section>
    </>
  );
}

function DatenschutzPage() {
  return (
    <>
      <Helmet>
        <title>Datenschutz – Technik-Lanz</title>
      </Helmet>
      <section>
        <h1 className="text-2xl font-bold mb-4">Datenschutz</h1>
        <p>Bitte tragen Sie hier Ihre Datenschutzerklärung ein.</p>
      </section>
    </>
  );
}

function BlogOverviewPage() {
  return (
    <>
      <Helmet>
        <title>Blog – Technik-Lanz</title>
      </Helmet>
      <section>
        <h1 className="text-2xl font-bold mb-4">Blog</h1>
        <ul className="space-y-4">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <h2 className="text-xl font-semibold">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-sm text-gray-600">{post.date}</p>
              <p>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return (
      <>
        <Helmet>
          <title>Beitrag nicht gefunden – Technik-Lanz</title>
        </Helmet>
        <section>
          <h1 className="text-2xl font-bold mb-4">Beitrag nicht gefunden</h1>
          <p>Der angeforderte Blogbeitrag konnte nicht gefunden werden.</p>
        </section>
      </>
    );
  }
  return (
    <>
      <Helmet>
        <title>{post.title} – Technik-Lanz</title>
      </Helmet>
      <section>
        <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
        <p className="text-sm text-gray-600 mb-4">{post.date}</p>
        <div className="space-y-4">{post.content}</div>
      </section>
    </>
  );
}

export default function TechnikLanzApp() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leistungen" element={<LeistungenPage />} />
            <Route path="/ueber-uns" element={<UeberUnsPage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="/blog" element={<BlogOverviewPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
