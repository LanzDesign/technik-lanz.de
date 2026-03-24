import HomeClient from "../components/HomeClient";

export const metadata = {
  title: "Website erstellen lassen in Offenburg – Technik-Lanz",
  description:
    "Du brauchst eine neue Website? Ich baue dir eine, die wirklich funktioniert. Homepage erstellen lassen in Offenburg, Lahr & Ortenau. Kostenlose Erstberatung.",
  keywords: [
    "Website erstellen lassen Offenburg",
    "Homepage erstellen lassen",
    "neue Website beauftragen",
    "Internetseite erstellen lassen",
    "Website für mein Unternehmen",
    "Homepage für Selbstständige",
    "Webdesign Offenburg",
  ],
  alternates: {
    canonical: "https://technik-lanz.de",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
