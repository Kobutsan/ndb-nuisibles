import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/uploads/",
          "/_next/",
          "/devis/confirmation",
          "*.json$",
          "/*?*",
        ],
        crawlDelay: 1,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
        crawlDelay: 0,
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/images/",
        disallow: "/uploads/",
      },
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        disallow: "/",
      },
    ],
    sitemap: "https://ndbnuisibles.com/sitemap.xml",
    host: "https://ndbnuisibles.com",
  };
}
