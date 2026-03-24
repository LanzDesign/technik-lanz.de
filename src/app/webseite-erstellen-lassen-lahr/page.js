import LandingPage from "../../components/LandingPage";

export const metadata = {
  title: "Webseite erstellen lassen in Lahr – modern & bezahlbar",
  description:
    "Neue Website für dein Geschäft in Lahr gesucht? Ich erstelle dir eine professionelle Internetseite mit allem drum und dran. Persönlich, vor Ort, zum fairen Preis.",
  keywords: [
    "Webseite erstellen lassen Lahr",
    "Website Lahr",
    "Homepage erstellen Lahr",
    "Internetseite Lahr Schwarzwald",
    "neue Website Lahr",
  ],
  alternates: {
    canonical: "https://technik-lanz.de/webseite-erstellen-lassen-lahr",
  },
};

export default function WebseiteErstellenLahr() {
  return (
    <LandingPage
      city="Lahr"
      region="Ortenau"
      slug="webseite-erstellen-lassen-lahr"
      heroTitle="Neue Webseite für dein Geschäft in Lahr"
      heroSubtitle="Professionell gemacht, ohne dass du dich um irgendwas kümmern musst."
      introText={`
        Du willst endlich eine eigene Website – oder deine alte Homepage loswerden?
        Ich baue dir eine neue Seite, die wirklich was bringt.

        Als Webentwickler aus der Region kenne ich die Bedürfnisse von Unternehmen in Lahr
        und Umgebung. Egal ob Handwerker, Dienstleister, Arztpraxis oder Einzelhändler –
        ich weiß, was deine Kunden online erwarten.

        Du musst dich um nichts kümmern: Ich übernehme Design, Texte, Bilder und alles Technische.
        Du sagst mir nur, was du willst – ich mache den Rest. Und wenn die Seite steht,
        zeige ich dir, wie du Änderungen ganz einfach selbst machen kannst.
      `}
      benefits={[
        "Alles aus einer Hand: Design, Inhalte, Technik, SEO",
        "Website fertig in 2-4 Wochen – keine ewige Wartezeit",
        "Funktioniert perfekt auf Handy, Tablet und PC",
        "Wirst bei Google in Lahr und Umgebung gefunden",
        "Faire Festpreise – du weißt vorher was es kostet",
        "Persönliche Betreuung – kein anonymer Großstadt-Service",
      ]}
      testimonialArea="Lahr"
      ctaText="Kostenlos beraten lassen"
    />
  );
}
