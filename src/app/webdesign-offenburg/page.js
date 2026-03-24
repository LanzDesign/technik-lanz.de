import LandingPage from "../../components/LandingPage";

export const metadata = {
  title: "Webdesign Offenburg – moderne Website für dein Business",
  description:
    "Professionelles Webdesign in Offenburg. Ich gestalte dir eine moderne Website, die auf allen Geräten super aussieht und neue Kunden bringt. Jetzt kostenlos beraten lassen.",
  keywords: [
    "Webdesign Offenburg",
    "Webdesigner Offenburg",
    "Website Offenburg",
    "Homepage Offenburg",
    "Internetseite Offenburg",
    "Webseite gestalten Offenburg",
  ],
  alternates: {
    canonical: "https://technik-lanz.de/webdesign-offenburg",
  },
};

export default function WebdesignOffenburg() {
  return (
    <LandingPage
      city="Offenburg"
      region="Ortenau"
      slug="webdesign-offenburg"
      heroTitle="Webdesign aus Offenburg, das Kunden bringt"
      heroSubtitle="Nicht nur schön – sondern eine Website, die für dich arbeitet."
      introText={`
        Deine Website ist das Erste, was potenzielle Kunden von dir sehen. Wenn die nicht überzeugt –
        sind sie schneller weg als du gucken kannst.

        Ich bin Daniel Lanz, Webdesigner aus Offenburg, und ich gestalte Websites, die nicht nur gut aussehen,
        sondern auch gefunden werden und Anfragen bringen.

        Ob du eine komplett neue Website brauchst oder deine alte endlich mal ein Update verdient hat –
        ich kümmere mich drum. Persönlich, direkt hier in Offenburg.

        Meine Kunden sind Handwerker, Gastronomen, Ärzte, Selbstständige und kleine Unternehmen aus Offenburg
        und der Ortenau. Sie alle wollten eine Website, die einfach funktioniert – und genau das bekommen sie.
      `}
      benefits={[
        "Modernes Design, das auf jedem Gerät perfekt aussieht",
        "Schnelle Ladezeiten – keine Kunden verlieren durch Warten",
        "SEO-optimiert – damit dich Leute bei Google auch finden",
        "Du kannst Texte und Bilder selbst ändern, wann du willst",
        "Faire Festpreise ab 1.500€ – du weißt vorher, was es kostet",
        "Direkt vor Ort in Offenburg – kein anonymes Call-Center",
      ]}
      testimonialArea="Offenburg"
      ctaText="Jetzt unverbindlich anfragen"
    />
  );
}
