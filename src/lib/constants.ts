export const SITE_CONFIG = {
  name: "NDB Nuisibles",
  description:
    "Dératisation Premium & Écologique à Paris - Le vélo cargo au service de votre tranquillité",
  url: "https://ndbnuisibles.com",
  ogImage: "/images/og-image.jpg",
  links: {
    tel: "0663614157",
    telDisplay: "06 63 61 41 57",
    email: "contact@ndbnuisibles.com",
    whatsapp: "https://wa.me/33663614157",
    instagram: "https://instagram.com/ndbnuisibles",
    linkedin: "https://linkedin.com/company/ndb-nuisibles",
  },
  address: {
    city: "Paris",
    region: "Île-de-France",
    country: "France",
  },
};

export const NAVIGATION_ITEMS = [
  { label: "Accueil", href: "/" },
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  {
    label: "Services",
    href: "/services",
    subItems: [
      { label: "Dératisation", href: "/services/deratisation" },
      { label: "Punaises de lit", href: "/services/punaises-de-lit" },
      { label: "Désinsectisation", href: "/services/desinsectisation" },
      { label: "Professionnels", href: "/services/professionnels" },
    ],
  },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Processus", href: "/processus-intervention" },
  { label: "Chroniques", href: "/chroniques" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "deratisation",
    title: "Dératisation",
    description: "Élimination efficace et durable des rats et souris",
    icon: "🐀",
    href: "/services/deratisation",
    features: ["Diagnostic gratuit", "Traitement adapté", "Garantie résultat"],
  },
  {
    id: "punaises",
    title: "Punaises de lit",
    description: "Traitement professionnel contre les punaises de lit",
    icon: "🛏️",
    href: "/services/punaises-de-lit",
    features: [
      "Détection canine",
      "Traitement thermique",
      "Suivi personnalisé",
    ],
  },
  {
    id: "desinsectisation",
    title: "Désinsectisation",
    description: "Éradication de tous types d'insectes nuisibles",
    icon: "🦟",
    href: "/services/desinsectisation",
    features: ["Cafards", "Fourmis", "Guêpes et frelons"],
  },
  {
    id: "professionnels",
    title: "Professionnels",
    description: "Solutions adaptées aux entreprises et commerces",
    icon: "🏢",
    href: "/services/professionnels",
    features: [
      "Contrats annuels",
      "Interventions discrètes",
      "Reporting détaillé",
    ],
  },
];

export const USP_POINTS = [
  {
    title: "Vélo Cargo Électrique",
    description:
      "Une approche écologique unique pour des interventions rapides et sans pollution",
    icon: "🚲",
  },
  {
    title: "Intervention 24/7",
    description: "Disponibles jour et nuit pour répondre à vos urgences",
    icon: "⚡",
  },
  {
    title: "Certifié Certibiocide",
    description: "Agréé par le Ministère de la Transition Écologique",
    icon: "✅",
  },
  {
    title: "Garantie Résultat",
    description: "Nous garantissons l'efficacité de nos interventions",
    icon: "🛡️",
  },
  {
    title: "Approche Écologique",
    description: "Produits respectueux de l'environnement et de votre santé",
    icon: "🌿",
  },
  {
    title: "Devis Gratuit",
    description: "Estimation transparente et sans engagement",
    icon: "📋",
  },
];
