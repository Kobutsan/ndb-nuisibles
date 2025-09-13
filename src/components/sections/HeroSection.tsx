"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, FileText, Shield } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Rats", "Souris", "Punaises", "Cafards", "Guêpes"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/velo-cargo.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container px-4 relative z-20 text-foreground text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center space-x-2 bg-success/20 backdrop-blur-sm border border-success/30 rounded-full px-6 py-2">
            <Shield className="w-5 h-5 text-success" />
            <span className="text-sm font-medium">Certifié Certibiocide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Dératisation Premium & Écologique
            <span className="block text-accent-brown-light mt-2">à Paris</span>
          </h1>

          <p className="text-xl sm:text-2xl mb-8 text-gray-100">
            Éliminez vos{" "}
            <span className="inline-block min-w-[120px] text-warning font-bold">
              {texts[textIndex]}
            </span>{" "}
            avec le vélo cargo
          </p>

          <p className="text-lg mb-12 text-gray-200">
            Le vélo cargo au service de votre tranquillité - Intervention rapide
            et sans pollution
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="btn-primary">
              <FileText className="w-5 h-5 mr-2" />
              Devis Gratuit
            </Link>
            <a href={`tel:${SITE_CONFIG.links.tel}`} className="btn-urgent">
              <Phone className="w-5 h-5 mr-2" />
              Urgence 24/7
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-warning">24/7</div>
              <div className="text-sm text-gray-200">Disponibilité</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">100%</div>
              <div className="text-sm text-gray-200">Écologique</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-brown-light">
                Paris
              </div>
              <div className="text-sm text-gray-200">& Île-de-France</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
