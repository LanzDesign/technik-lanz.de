import LandingPage from "../../components/LandingPage";

export const metadata = {
  title: "Homepage erstellen lassen Offenburg – ab 1.500€",
  description:
    "Du brauchst eine Homepage für dein Unternehmen in Offenburg? Professionell, bezahlbar und schnell online. Ich baue dir eine Seite, die Kunden bringt. Kostenlose Beratung.",
  keywords: [
    "Homepage erstellen lassen Offenburg",
    "Homepage Offenburg",
    "günstige Homepage erstellen lassen",
    "Homepage für Unternehmen Offenburg",
    "Homepage für Selbstständige",
    "Firmenhomepage erstellen",
  ],
  alternates: {
    canonical: "https://technik-lanz.de/homepage-erstellen-offenburg",
  },
};

export default function HomepageErstellenOffenburg() {
  return (
    <LandingPage
      city="Offenburg"
      region="Ortenau"
      slug="homepage-erstellen-offenburg"
      heroTitle="Homepage erstellen lassen in Offenburg"
      heroSubtitle="Professionell, schnell und zum fairen Preis. Damit dein Geschäft online durchstartet."
      introText={`
        Du bist selbstständig oder hast ein kleines Unternehmen in Offenburg und brauchst eine Homepage?
        Vielleicht hast du noch gar keine – oder die alte ist so peinlich, dass du sie lieber nicht zeigst?

        Ich kenne das. Viele meiner Kunden kamen genau mit diesem Problem zu mir. Und jetzt haben sie
        eine professionelle Homepage, die sie stolz jedem zeigen können.

        Ich bin Daniel Lanz und ich baue Homepages für Betriebe in Offenburg und der Ortenau.
        Nicht kompliziert, nicht teuer – sondern genau so, wie du es brauchst.

        Du musst von Websites nichts verstehen. Das ist mein Job. Du sagst mir, was dein Geschäft macht,
        wer deine Kunden sind und was du dir vorstellst – ich kümmere mich um alles andere.
      `}
      benefits={[
        "Homepage ab 1.500€ – fair und transparent kalkuliert",
        "In 2-4 Wochen online – du wartest nicht ewig",
        "Sieht professionell aus – auf Handy, Tablet und PC",
        "Google findet dich – lokale Suchmaschinenoptimierung inklusive",
        "Du kannst Texte selbst ändern – ich zeige dir alles",
        "Ich bin hier in Offenburg – persönlich erreichbar",
      ]}
      testimonialArea="Offenburg"
      ctaText="Jetzt Homepage anfragen"
    />
  );
}
