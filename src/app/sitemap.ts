import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ndbnuisibles.com";

  // Pages statiques
  const staticPages = [
    "",
    "/qui-sommes-nous",
    "/services/deratisation",
    "/services/punaises-de-lit",
    "/services/desinsectisation",
    "/services/professionnels",
    "/tarifs",
    "/processus",
    "/contact",
    "/devis",
    "/chroniques",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Articles de blog (hardcodés pour l'instant)
  const blogPosts = [
    "/chroniques/reconnaitre-punaises-lit",
    "/chroniques/prevention-rats-paris",
    "/chroniques/traitement-ecologique-cafards",
    "/chroniques/guide-prevention-nuisibles",
    "/chroniques/velo-cargo-ecologie-paris",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Pages légales
  const legalPages = [
    "/mentions-legales",
    "/politique-confidentialite",
    "/cgv",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...staticPages, ...blogPosts, ...legalPages];
}
