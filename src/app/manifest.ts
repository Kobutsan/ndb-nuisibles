import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NDB Nuisibles - Dératisation Écologique Paris",
    short_name: "NDB Nuisibles",
    description:
      "Service de dératisation et désinsectisation écologique à Paris. Intervention rapide 24/7 en vélo cargo.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#8B4513",
    orientation: "portrait-primary",
    dir: "ltr",
    lang: "fr-FR",
    icons: [
      {
        src: "/icons/icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-128x128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/screenshots/mobile-home.jpg",
        sizes: "750x1334",
        type: "image/jpeg",
        label: "Page d'accueil sur mobile",
      },
      {
        src: "/screenshots/mobile-services.jpg",
        sizes: "750x1334",
        type: "image/jpeg",
        label: "Services sur mobile",
      },
      {
        src: "/screenshots/desktop-home.jpg",
        sizes: "1920x1080",
        type: "image/jpeg",
        label: "Page d'accueil sur desktop",
      },
    ],
    shortcuts: [
      {
        name: "Urgence 24/7",
        short_name: "Urgence",
        description: "Appeler pour une urgence",
        url: "/urgence",
        icons: [{ src: "/icons/urgence.png", sizes: "96x96" }],
      },
      {
        name: "Devis gratuit",
        short_name: "Devis",
        description: "Demander un devis",
        url: "/devis",
        icons: [{ src: "/icons/devis.png", sizes: "96x96" }],
      },
    ],
    categories: ["business", "utilities", "lifestyle"],
    prefer_related_applications: false,
    related_applications: [],
  };
}
