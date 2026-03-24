import "./globals.css";
import "../App.css";
import Footer from "../components/Footer";
import NavbarWrapper from "../components/NavbarWrapper";
import CookieBannerWrapper from "../components/CookieBannerWrapper";
import CookieSettingsWrapper from "../components/CookieSettingsWrapper";
import AccessibilityWrapper from "../components/AccessibilityWrapper";
import ThemeToggleWrapper from "../components/ThemeToggleWrapper";

export const metadata = {
  metadataBase: new URL("https://technik-lanz.de"),
  title: {
    default: "Webdesign & Webentwicklung Offenburg, Lahr & Ortenau | Technik-Lanz",
    template: "%s | Technik-Lanz",
  },
  description:
    "Professionelle Webentwicklung & Webdesign in Offenburg, Lahr & Ortenau. Website erstellen lassen vom Full-Stack Entwickler. React, Django, moderne Websites & Apps. Kostenlose Beratung.",
  keywords: [
    "Webdesign Offenburg",
    "Webentwickler Offenburg",
    "Website erstellen lassen Offenburg",
    "Homepage erstellen Offenburg",
    "Webentwicklung Lahr",
    "Webdesign Lahr",
    "Website erstellen lassen Lahr",
    "Webdesign Ortenau",
    "Webentwicklung Ortenau",
    "React Entwickler Offenburg",
    "Django Entwickler",
    "Full-Stack Entwickler Ortenau",
    "Webseite erstellen lassen",
    "Internetagentur Offenburg",
    "Webdesigner Offenburg",
    "Homepage erstellen lassen",
    "SEO Offenburg",
  ],
  authors: [{ name: "Daniel Lanz - Technik-Lanz" }],
  creator: "Daniel Lanz",
  openGraph: {
    title: "Webdesign & Webentwicklung Offenburg, Lahr & Ortenau | Technik-Lanz",
    description:
      "Professionelle Webentwicklung & Webdesign in Offenburg, Lahr & Ortenau. Website erstellen lassen vom Full-Stack Entwickler.",
    url: "https://technik-lanz.de",
    siteName: "Technik-Lanz",
    images: [{ url: "/images/logo.png", width: 800, height: 600 }],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign & Webentwicklung Offenburg, Lahr & Ortenau | Technik-Lanz",
    description:
      "Professionelle Webentwicklung & Webdesign in Offenburg, Lahr & Ortenau. Website erstellen lassen vom Full-Stack Entwickler.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "https://technik-lanz.de",
  },
  other: {
    "geo.region": "DE-BW",
    "geo.placename": "Offenburg",
    "geo.position": "48.4721;7.9416",
    ICBM: "48.4721, 7.9416",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Technik-Lanz - Webdesign & Webentwicklung Offenburg",
      alternateName: "Technik-Lanz",
      image: "https://technik-lanz.de/images/logo.png",
      description:
        "Professionelles Webdesign & Webentwicklung in Offenburg, Lahr und der Ortenau. Website erstellen lassen vom Full-Stack Entwickler.",
      telephone: "+49-174-263-8614",
      email: "kontakt@technik-lanz.de",
      url: "https://technik-lanz.de",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Vogelbeerweg 5",
        addressLocality: "Offenburg",
        addressRegion: "Baden-Württemberg",
        postalCode: "77656",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "48.4721",
        longitude: "7.9416",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      priceRange: "€€",
      areaServed: [
        { "@type": "City", name: "Offenburg" },
        { "@type": "City", name: "Lahr" },
        { "@type": "City", name: "Kehl" },
        { "@type": "City", name: "Achern" },
        { "@type": "City", name: "Oberkirch" },
        { "@type": "City", name: "Gengenbach" },
        { "@type": "City", name: "Haslach im Kinzigtal" },
        { "@type": "City", name: "Ettenheim" },
        { "@type": "AdministrativeArea", name: "Ortenaukreis" },
        { "@type": "AdministrativeArea", name: "Baden-Württemberg" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Webdesign & Webentwicklung Dienstleistungen",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Webdesign & Website erstellen",
              description:
                "Professionelles Webdesign und moderne Website-Erstellung. Responsive Design, SEO-optimiert.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full-Stack Webentwicklung",
              description:
                "Komplette Webanwendungen mit React Frontend und Django/Node.js Backend.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Homepage erstellen lassen",
              description:
                "Professionelle Homepage erstellen lassen. Von der Landingpage bis zur komplexen Webanwendung.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO & Performance-Optimierung",
              description:
                "Suchmaschinenoptimierung und Performance-Optimierung für bessere Google-Rankings.",
            },
          },
        ],
      },
      founder: {
        "@type": "Person",
        name: "Daniel Lanz",
        jobTitle: "Full-Stack Webentwickler & Webdesigner",
      },
      sameAs: ["https://github.com/LanzDesign"],
    },
    {
      "@type": "WebSite",
      name: "Technik-Lanz - Webdesign & Webentwicklung",
      url: "https://technik-lanz.de",
      description:
        "Professionelles Webdesign & Webentwicklung in Offenburg, Lahr & Ortenau",
      publisher: {
        "@type": "Organization",
        name: "Technik-Lanz",
        logo: {
          "@type": "ImageObject",
          url: "https://technik-lanz.de/images/logo.png",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Was kostet eine professionelle Website in Offenburg?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eine einfache Website erstellen lassen kostet ab 1.500€. Umfangreichere Projekte mit CMS beginnen ab 3.500€. Kostenlose Erstberatung in Offenburg, Lahr und der Ortenau.",
          },
        },
        {
          "@type": "Question",
          name: "Wie lange dauert die Entwicklung einer Website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eine einfache Website ist in 2-4 Wochen fertig. Full-Stack-Projekte benötigen 6-12 Wochen.",
          },
        },
        {
          "@type": "Question",
          name: "Welche Technologien verwendet Technik-Lanz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "React, Next.js (Frontend) sowie Django und Node.js (Backend). Für CMS: Sanity CMS oder WordPress.",
          },
        },
        {
          "@type": "Question",
          name: "Wo bist du als Webdesigner tätig?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In Offenburg, Lahr, Kehl, Achern, Oberkirch, Gengenbach und der gesamten Ortenau. Remote bundesweit.",
          },
        },
        {
          "@type": "Question",
          name: "Bietest du auch E-Commerce Lösungen an?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja! Moderne E-Commerce-Websites mit Stripe-Integration, Produktverwaltung und sicherer Zahlungsabwicklung.",
          },
        },
        {
          "@type": "Question",
          name: "Sind deine Websites SEO-optimiert?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Alle Websites werden mit SEO Best Practices entwickelt: schnelle Ladezeiten, mobile Optimierung, Schema.org Markup und lokale SEO.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#00d4ff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="App">
          <NavbarWrapper />
          <ThemeToggleWrapper />
          <AccessibilityWrapper />
          <CookieSettingsWrapper />
          <main className="main-content">{children}</main>
          <Footer />
          <CookieBannerWrapper />
        </div>
      </body>
    </html>
  );
}
