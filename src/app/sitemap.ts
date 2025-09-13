import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ndb-nuisibles.vercel.app';
  const currentDate = new Date();
  
  // Pages statiques avec leurs priorités
  const staticPages = [
    { path: '', priority: 1.0, changeFreq: 'daily' },
    { path: '/services', priority: 0.9, changeFreq: 'weekly' },
    { path: '/services/deratisation', priority: 0.9, changeFreq: 'weekly' },
    { path: '/services/punaises-de-lit', priority: 0.9, changeFreq: 'weekly' },
    { path: '/services/desinsectisation', priority: 0.9, changeFreq: 'weekly' },
    { path: '/services/professionnels', priority: 0.8, changeFreq: 'weekly' },
    { path: '/devis', priority: 0.9, changeFreq: 'monthly' },
    { path: '/contact', priority: 0.8, changeFreq: 'monthly' },
    { path: '/qui-sommes-nous', priority: 0.7, changeFreq: 'monthly' },
    { path: '/tarifs', priority: 0.8, changeFreq: 'weekly' },
  ];
  
  const urls: MetadataRoute.Sitemap = staticPages.map(({ path, priority, changeFreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: changeFreq as any,
    priority,
  }));
  
  return urls;
}
