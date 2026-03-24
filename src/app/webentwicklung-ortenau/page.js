import LandingPage from "../../components/LandingPage";

export const metadata = {
  title: "Website erstellen lassen in der Ortenau – Technik-Lanz",
  description:
    "Professionelle Websites für Unternehmen in der Ortenau. Homepage erstellen lassen in Offenburg, Lahr, Kehl, Achern, Oberkirch, Gengenbach. Faire Preise, persönliche Betreuung.",
  keywords: [
    "Website erstellen Ortenau",
    "Webdesign Ortenau",
    "Homepage erstellen Ortenaukreis",
    "Internetseite Ortenau",
    "Webentwicklung Ortenau",
    "Website Kehl",
    "Homepage Achern",
    "Webseite Oberkirch",
    "Internetseite Gengenbach",
  ],
  alternates: {
    canonical: "https://technik-lanz.de/webentwicklung-ortenau",
  },
};

export default function WebentwicklungOrtenau() {
  return (
    <LandingPage
      city="der Ortenau"
      region="Ortenaukreis"
      slug="webentwicklung-ortenau"
      heroTitle="Neue Website für dein Unternehmen in der Ortenau"
      heroSubtitle="Von Offenburg bis Lahr, von Kehl bis Achern – ich bin dein Webentwickler vor Ort."
      introText={`
        Ob in Offenburg, Lahr, Kehl, Achern, Oberkirch oder Gengenbach – wenn du ein Unternehmen
        in der Ortenau hast, brauchst du eine Website, die funktioniert.

        Ich bin Daniel Lanz und baue seit Jahren Websites für Betriebe in der Region.
        Persönliche Treffen direkt bei dir vor Ort sind kein Problem – ich bin in der Ortenau zuhause.

        Was mich von großen Agenturen unterscheidet? Bei mir hast du einen Ansprechpartner, der dein
        Projekt von Anfang bis Ende betreut. Keine Praktikanten, kein Durchreichen, keine Warteschleifen.

        Ich baue dir eine moderne Website, die auf dem Handy perfekt aussieht, bei Google gefunden wird
        und deine Kunden überzeugt. Punkt.
      `}
      benefits={[
        "Vor-Ort-Betreuung in der gesamten Ortenau",
        "Websites für Handwerker, Gastro, Praxen, Selbstständige",
        "Responsive Design – perfekt auf allen Geräten",
        "Suchmaschinenoptimierung (SEO) inklusive",
        "Content-Management – Inhalte selbst bearbeiten",
        "Langfristige Wartung und Support verfügbar",
      ]}
      testimonialArea="den Ortenaukreis"
      ctaText="Jetzt Projekt besprechen"
    />
  );
}
