import Link from "next/link";
import { Phone, FileText, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-accent-brown to-accent-brown-light text-foreground">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Besoin d&apos;une Intervention Rapide ?
          </h2>
          <p className="text-xl mb-8 text-foreground/90">
            Nos experts sont disponibles 24h/24 et 7j/7 pour répondre à vos
            urgences
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-foreground font-semibold mb-2">
                Appel Direct
              </h3>
              <p className="text-sm text-foreground/80">Réponse immédiate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <FileText className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-foreground font-semibold mb-2">
                Devis Gratuit
              </h3>
              <p className="text-sm text-foreground/80">Sans engagement</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <MessageCircle className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-foreground font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm text-foreground/80">Chat instantané</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE_CONFIG.links.tel}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent-brown font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              {SITE_CONFIG.links.telDisplay}
            </a>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-foreground font-bold rounded-lg hover:bg-white hover:text-accent-brown transition-all duration-200"
            >
              <FileText className="w-5 h-5 mr-2" />
              Demander un Devis
            </Link>
            <a
              href={SITE_CONFIG.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-success text-foreground font-bold rounded-lg hover:bg-green-600 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </div>

          <p className="mt-8 text-sm text-foreground/70">
            Intervention rapide avec notre vélo cargo électrique dans tout Paris
            et l&apos;Île-de-France
          </p>
        </div>
      </div>
    </section>
  );
}
