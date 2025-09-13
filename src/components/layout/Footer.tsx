import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { SITE_CONFIG, NAVIGATION_ITEMS, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-foreground">
      <div className="container px-4 section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4 text-accent-brown-light">
              NDB Nuisibles
            </h3>
            <p className="text-gray-300 mb-4">
              Dératisation premium & écologique à Paris. Le vélo cargo au
              service de votre tranquillité.
            </p>
            <div className="flex space-x-4">
              <a
                href={SITE_CONFIG.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-brown-light transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-brown-light transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-accent-brown-light transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              Liens Rapides
            </h4>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.filter((item) => !item.subItems).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-accent-brown-light transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/devis"
                  className="text-gray-300 hover:text-accent-brown-light transition-colors duration-200"
                >
                  Devis Gratuit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent-brown-light flex-shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.links.tel}`}
                  className="text-gray-300 hover:text-accent-brown-light transition-colors duration-200"
                >
                  {SITE_CONFIG.links.telDisplay}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent-brown-light flex-shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.links.email}`}
                  className="text-gray-300 hover:text-accent-brown-light transition-colors duration-200"
                >
                  {SITE_CONFIG.links.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent-brown-light flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.region}
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Certifications:</p>
              <p className="text-sm text-accent-brown-light font-semibold">
                Agréé Certibiocide
              </p>
              <p className="text-xs text-gray-400">
                Ministère de la Transition Écologique
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} NDB Nuisibles. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/mentions-legales"
                className="text-sm text-gray-400 hover:text-accent-brown-light transition-colors duration-200"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-sm text-gray-400 hover:text-accent-brown-light transition-colors duration-200"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
