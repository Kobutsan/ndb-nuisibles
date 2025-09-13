import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Découvrez nos services de dératisation, désinsectisation et traitement des punaises de lit à Paris.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-accent-brown/10 to-white py-20">
        <div className="container px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-center mb-6">
            Nos <span className="text-accent-brown">Services</span>
          </h1>
          <p className="text-xl text-center text-neutral-dark max-w-3xl mx-auto">
            Solutions professionnelles et écologiques pour tous vos problèmes de
            nuisibles
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-accent-brown to-accent-brown-light p-8 text-foreground">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-heading font-bold mb-2">
                    {service.title}
                  </h2>
                  <p className="text-foreground/90">{service.description}</p>
                </div>
                <div className="p-8">
                  <h3 className="font-semibold text-lg mb-4 text-accent-brown">
                    Points forts de ce service :
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-accent-brown font-semibold hover:text-accent-brown-light transition-colors duration-200"
                  >
                    En savoir plus
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-neutral-light rounded-2xl p-8 lg:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Une Approche <span className="text-accent-brown">Unique</span>
              </h2>
              <p className="text-lg text-neutral-dark mb-8">
                Avec notre vélo cargo électrique, nous combinons efficacité et
                respect de l&apos;environnement. Nos interventions sont rapides,
                discrètes et sans pollution.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-brown mb-2">
                    100%
                  </div>
                  <p className="text-sm text-neutral-dark">
                    Produits certifiés
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-success mb-2">0</div>
                  <p className="text-sm text-neutral-dark">Émission CO2</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-warning mb-2">
                    24/7
                  </div>
                  <p className="text-sm text-neutral-dark">Disponibilité</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
