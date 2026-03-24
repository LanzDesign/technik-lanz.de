import LandingPage from "../../components/LandingPage";

export const metadata = {
  title: "Online-Shop erstellen lassen – Offenburg, Lahr & Ortenau",
  description:
    "Du willst deine Produkte online verkaufen? Ich baue dir einen modernen Online-Shop mit sicherer Bezahlung, Produktverwaltung und allem was dazugehört. Für Unternehmen in der Ortenau.",
  keywords: [
    "Online-Shop erstellen lassen",
    "Online-Shop erstellen Offenburg",
    "E-Commerce Offenburg",
    "Webshop erstellen lassen",
    "Online verkaufen",
    "Shop-Website erstellen",
  ],
  alternates: {
    canonical: "https://technik-lanz.de/online-shop-erstellen-lassen",
  },
};

export default function OnlineShopErstellen() {
  return (
    <LandingPage
      city="Offenburg, Lahr & der Ortenau"
      region="Ortenau"
      slug="online-shop-erstellen-lassen"
      heroTitle="Deinen eigenen Online-Shop erstellen lassen"
      heroSubtitle="Verkaufe deine Produkte online – einfach, sicher und professionell."
      introText={`
        Du hast tolle Produkte, aber noch keinen Online-Shop? Oder dein bestehender Shop
        ist kompliziert, langsam oder sieht nicht professionell aus?

        Ich baue dir einen modernen Online-Shop, mit dem du sofort loslegen kannst.
        Sichere Bezahlung, einfache Produktverwaltung und ein Design, das deine Kunden überzeugt.

        Egal ob du 10 oder 1.000 Produkte hast – ich finde die richtige Lösung für dich.
        Und das Beste: Du kannst neue Produkte und Preise ganz einfach selbst pflegen,
        ohne dass du jedes Mal einen Entwickler brauchst.
      `}
      benefits={[
        "Moderner Online-Shop mit sicherer Bezahlung (Stripe, PayPal)",
        "Produkte, Preise und Bilder selbst verwalten",
        "Responsive – perfektes Shopping-Erlebnis auf dem Handy",
        "SEO-optimiert – damit Kunden deinen Shop finden",
        "Automatische Bestellbestätigungen und -verwaltung",
        "Professionelles Design, das Vertrauen schafft",
      ]}
      testimonialArea="die Ortenau"
      ctaText="Shop-Projekt besprechen"
    />
  );
}
