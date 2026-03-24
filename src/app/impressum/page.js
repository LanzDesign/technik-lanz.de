import Impressum from "../../components/Impressum";

export const metadata = {
  title: "Impressum",
  description: "Impressum von Technik-Lanz - Webdesign & Webentwicklung in Offenburg.",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return <Impressum />;
}
