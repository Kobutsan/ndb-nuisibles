"use client";

export default function StructuredData({ page = "home" }: { page?: string }) {
  // Schema Organisation (toutes pages)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "PestControl",
    "@id": "https://ndbnuisibles.com/#organization",
    name: "NDB Nuisibles",
    alternateName: "NDB Dératisation Paris",
    url: "https://ndbnuisibles.com",
    logo: {
      "@type": "ImageObject",
      url: "https://ndbnuisibles.com/logo.png",
      width: 512,
      height: 512,
    },
    image: [
      "https://ndbnuisibles.com/images/hero/velo-cargo.jpg",
      "https://ndbnuisibles.com/images/team.jpg",
    ],
    description:
      "Service de dératisation et désinsectisation écologique à Paris en vélo cargo électrique. Intervention 24/7, traitement garanti.",
    telephone: "+33663614157",
    email: "contact@ndbnuisibles.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1B rue de Bizerte",
      addressLocality: "Paris",
      postalCode: "75017",
      addressCountry: "FR",
      addressRegion: "Île-de-France",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8924,
      longitude: 2.3209,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.instagram.com/ndbnuisibles",
      "https://www.linkedin.com/company/ndbnuisibles",
      "https://www.facebook.com/ndbnuisibles",
      "https://g.page/ndbnuisibles",
    ],
    priceRange: "€€",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "Check"],
    currenciesAccepted: "EUR",
    areaServed: [
      {
        "@type": "City",
        name: "Paris",
        "@id": "https://www.wikidata.org/wiki/Q90",
      },
      {
        "@type": "AdministrativeArea",
        name: "Île-de-France",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services anti-nuisibles",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dératisation",
            description: "Élimination professionnelle de rats et souris",
            provider: {
              "@id": "https://ndbnuisibles.com/#organization",
            },
          },
          price: "150",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Traitement punaises de lit",
            description: "Éradication complète et garantie des punaises de lit",
            provider: {
              "@id": "https://ndbnuisibles.com/#organization",
            },
          },
          price: "250",
          priceCurrency: "EUR",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Marie L.",
        },
        datePublished: "2024-03-15",
        reviewBody: "Service exceptionnel! Intervention rapide en vélo cargo.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
      },
    ],
  };

  // Schema BreadcrumbList (navigation)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://ndbnuisibles.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://ndbnuisibles.com/services",
      },
    ],
  };

  // Schema FAQPage (pour pages avec FAQ)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte une dératisation à Paris?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le prix d'une dératisation démarre à 150€ pour un studio. Le tarif varie selon la surface et le niveau d'infestation. Devis gratuit sur place.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous en urgence?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous intervenons 24h/24 et 7j/7 pour les urgences. Notre vélo cargo nous permet d'arriver rapidement même dans les zones difficiles d'accès.",
        },
      },
    ],
  };

  // Schema LocalBusiness avec GeoCircle
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "NDB Nuisibles Paris",
    image: "https://ndbnuisibles.com/images/storefront.jpg",
    priceRange: "€€",
    servesCuisine: "",
    telephone: "+33663614157",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1B rue de Bizerte",
      addressLocality: "Paris",
      addressRegion: "IDF",
      postalCode: "75017",
      addressCountry: "FR",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 48.8566,
        longitude: 2.3522,
      },
      geoRadius: "20000",
    },
  };

  const schemas: any[] = [organizationSchema, breadcrumbSchema];
  if (page === "faq" || page === "service") schemas.push(faqSchema);
  if (page === "home") schemas.push(localBusinessSchema);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
