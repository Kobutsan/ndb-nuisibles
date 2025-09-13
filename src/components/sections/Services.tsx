"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bug,
  Rat,
  Shield,
  Building2,
  Home,
  Phone,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem, rotateOnHover } from "@/lib/animations";
import { SITE_CONFIG } from "@/lib/constants";

const services = [
  {
    id: "deratisation",
    title: "Dératisation",
    description:
      "Élimination définitive des rats et souris avec des méthodes écologiques",
    icon: Rat,
    href: "/services/deratisation",
    color: "text-accent-brown",
    bgColor: "bg-accent-brown/10",
    features: ["Diagnostic gratuit", "Traitement adapté", "Garantie 3 mois"],
  },
  {
    id: "punaises",
    title: "Punaises de lit",
    description:
      "Traitement professionnel et radical contre les punaises de lit",
    icon: Bug,
    href: "/services/punaises-de-lit",
    color: "text-danger",
    bgColor: "bg-danger/10",
    features: [
      "Détection canine",
      "Traitement thermique",
      "Suivi personnalisé",
    ],
  },
  {
    id: "cafards",
    title: "Cafards & Blattes",
    description:
      "Éradication complète des cafards et blattes dans votre habitat",
    icon: Bug,
    href: "/services/desinsectisation",
    color: "text-warning",
    bgColor: "bg-warning/10",
    features: ["Gel professionnel", "Traitement préventif", "Sans danger"],
  },
  {
    id: "guepes",
    title: "Guêpes & Frelons",
    description: "Destruction sécurisée des nids de guêpes et frelons",
    icon: Shield,
    href: "/services/desinsectisation",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    features: ["Intervention rapide", "Équipement pro", "Sécurité garantie"],
  },
  {
    id: "professionnels",
    title: "Professionnels",
    description:
      "Solutions adaptées pour entreprises, restaurants et commerces",
    icon: Building2,
    href: "/services/professionnels",
    color: "text-primary",
    bgColor: "bg-primary/10",
    features: [
      "Contrats annuels",
      "Interventions discrètes",
      "Reporting détaillé",
    ],
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-bg-light">
      <div className="container px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={staggerItem}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Nos <span className="text-accent-brown">Services</span> Experts
            </h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto">
              Des solutions professionnelles et écologiques pour tous vos
              problèmes de nuisibles. Intervention rapide avec notre vélo cargo
              électrique.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={staggerItem}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Link href={service.href}>
                    <Card className="h-full cursor-pointer group overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <div
                          className={`inline-flex p-4 rounded-xl ${service.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className={`w-8 h-8 ${service.color}`} />
                        </div>
                        <CardTitle className="text-2xl mb-2 group-hover:text-accent-brown transition-colors">
                          {service.title}
                        </CardTitle>
                        <p className="text-text-light">{service.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-success rounded-full mr-3 flex-shrink-0" />
                              <span className="text-text-light">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center text-accent-brown font-semibold group-hover:gap-3 transition-all">
                          <span>En savoir plus</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}

            {/* CTA Card */}
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <Card className="h-full bg-gradient-to-br from-accent-brown to-primary-dark text-foreground">
                <CardHeader>
                  <Home className="w-12 h-12 mb-4" />
                  <CardTitle className="text-2xl mb-4 text-foreground">
                    Besoin d&apos;aide ?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-foreground/90">
                    Nos experts sont disponibles 24h/24 et 7j/7 pour répondre à
                    vos urgences.
                  </p>
                  <a href={`tel:${SITE_CONFIG.links.tel}`}>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full bg-white text-accent-brown hover:bg-gray-100 border-white"
                    >
                      Appeler Maintenant
                    </Button>
                  </a>
                  <p className="text-center mt-4 text-sm text-foreground/70">
                    Devis gratuit par téléphone
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
