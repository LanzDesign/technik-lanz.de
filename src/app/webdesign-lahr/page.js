import LandingPage from "../../components/LandingPage";

export const metadata = {
  title: "Webdesign Lahr – Website erstellen lassen vom Profi",
  description:
    "Website erstellen lassen in Lahr/Schwarzwald. Modernes Webdesign für Handwerker, Restaurants, Praxen und Selbstständige. Persönliche Betreuung, faire Preise.",
  keywords: [
    "Webdesign Lahr",
    "Website erstellen lassen Lahr",
    "Homepage erstellen Lahr",
    "Internetseite Lahr",
    "Webseite Lahr Schwarzwald",
    "Webdesigner Lahr",
  ],
  alternates: {
    canonical: "https://technik-lanz.de/webdesign-lahr",
  },
};

export default function WebdesignLahr() {
  return (
    <LandingPage
      city="Lahr"
      region="Ortenau"
      slug="webdesign-lahr"
      heroTitle="Website erstellen lassen in Lahr"
      heroSubtitle="Professionell, bezahlbar und endlich eine Seite, die wirklich funktioniert."
      introText={`
        Du hast ein Geschäft in Lahr und noch keine Website? Oder deine Seite ist so alt,
        dass du dich fast schon schämst, die Adresse rauszugeben?

        Kein Problem – ich bin Daniel Lanz, Webentwickler aus der Region, und ich baue dir
        eine neue Website, auf die du stolz sein kannst.

        Ich betreue Unternehmen in Lahr, Friesenheim, Seelbach und der gesamten Ortenau.
        Ob Friseur, Handwerker, Arztpraxis oder Café – ich weiß, was deine Kunden online erwarten
        und baue dir genau das.

        Das Beste: Du musst dich um nichts kümmern. Ich mache alles – von der Gestaltung
        über die Texte bis hin zur Suchmaschinenoptimierung. Du sagst mir nur, was du brauchst.
      `}
      benefits={[
        "Komplett-Service: Design, Texte, Bilder, SEO – alles aus einer Hand",
        "Deine Website sieht auf dem Handy genauso gut aus wie am PC",
        "In 2-4 Wochen ist deine neue Seite online",
        "Einfach selbst bearbeiten – ich zeig dir wie",
        "Faire Preise ab 1.500€ – keine Überraschungen",
        "Persönliche Betreuung in Lahr und Umgebung",
      ]}
      testimonialArea="Lahr und Umgebung"
      ctaText="Jetzt kostenloses Erstgespräch"
    />
  );
}
