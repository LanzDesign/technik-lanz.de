import LandingPage from "../../components/LandingPage";

export const metadata = {
  title: "Website erstellen lassen in Offenburg – professionell & bezahlbar",
  description:
    "Du brauchst eine neue Website für dein Geschäft in Offenburg? Ich baue dir eine professionelle Internetseite, die auf dem Handy funktioniert, bei Google gefunden wird und Kunden bringt. Kostenlose Erstberatung.",
  keywords: [
    "Website erstellen lassen Offenburg",
    "Homepage erstellen lassen Offenburg",
    "Internetseite erstellen Offenburg",
    "neue Website Offenburg",
    "Website für Unternehmen Offenburg",
    "Webdesign Offenburg",
    "günstige Homepage Offenburg",
  ],
  alternates: {
    canonical: "https://technik-lanz.de/website-erstellen-lassen-offenburg",
  },
};

export default function WebsiteErstellenOffenburg() {
  return (
    <LandingPage
      city="Offenburg"
      region="Ortenau"
      slug="website-erstellen-lassen-offenburg"
      heroTitle="Du brauchst eine neue Website in Offenburg?"
      heroSubtitle="Ich baue dir eine, die wirklich funktioniert – und die deine Kunden auch finden."
      introText={`
        Du bist selbstständig oder hast ein Unternehmen in Offenburg und brauchst endlich eine richtige Website?
        Oder deine alte Seite sieht auf dem Handy furchtbar aus und bringt dir keine Anfragen?

        Ich bin Daniel Lanz, Webentwickler aus Offenburg, und ich helfe dir dabei.
        Keine komplizierte Technik-Sprache, keine endlosen Meetings – ich baue dir eine moderne Website,
        die gut aussieht, schnell lädt und bei Google gefunden wird.

        Egal ob du einen Handwerksbetrieb, ein Restaurant, eine Praxis oder ein anderes Geschäft in Offenburg hast –
        ich erstelle dir eine Website, die zu dir passt und Kunden bringt.
      `}
      benefits={[
        "Professionelle Website ab 1.500€ – faire Preise, keine versteckten Kosten",
        "In 2-4 Wochen online – du musst nicht monatelang warten",
        "Sieht auf Handy, Tablet und PC perfekt aus",
        "Wird bei Google gefunden – SEO ist bei mir inklusive",
        "Du kannst deine Texte und Bilder selbst ändern",
        "Persönlicher Ansprechpartner direkt in Offenburg",
      ]}
      testimonialArea="Offenburg und Umgebung"
      ctaText="Kostenloses Erstgespräch vereinbaren"
    />
  );
}
