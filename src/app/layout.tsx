import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/integrations/WhatsAppButton";
import PWARegister from "@/components/PWARegister";
import { Toaster } from "@/components/ui/toaster";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "dératisation Paris",
    "punaises de lit Paris",
    "désinsectisation Paris",
    "nuisibles Paris",
    "vélo cargo dératisation",
    "dératisation écologique",
    "urgence nuisibles",
    "traitement nuisibles",
    "exterminateur Paris",
    "anti nuisibles",
  ],
  authors: [{ name: "NDB Nuisibles" }],
  creator: "NDB Nuisibles",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
        <PWARegister />
        <Toaster />
      </body>
    </html>
  );
}
