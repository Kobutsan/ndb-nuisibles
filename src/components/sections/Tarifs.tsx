"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, TrendingUp, Shield, Clock, Phone } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { formatPrice, cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

const tarifs = {
  particuliers: [
    {
      id: "deratisation",
      nom: "Dératisation",
      prix: 150,
      garantie: 3,
      description: "Élimination complète des rats et souris",
      populaire: false,
    },
    {
      id: "punaises",
      nom: "Punaises de lit",
      prix: 250,
      garantie: 6,
      description: "Traitement radical et suivi personnalisé",
      populaire: true,
    },
    {
      id: "cafards",
      nom: "Cafards & Blattes",
      prix: 180,
      garantie: 3,
      description: "Éradication totale avec gel professionnel",
      populaire: false,
    },
    {
      id: "guepes",
      nom: "Guêpes & Frelons",
      prix: 120,
      garantie: 1,
      description: "Destruction sécurisée des nids",
      populaire: false,
    },
  ],
  professionnels: [
    {
      id: "deratisation-pro",
      nom: "Dératisation Pro",
      prix: 200,
      garantie: 6,
      description: "Service adapté aux entreprises",
      populaire: false,
    },
    {
      id: "punaises-pro",
      nom: "Punaises Pro",
      prix: 350,
      garantie: 12,
      description: "Protocole renforcé pour professionnels",
      populaire: true,
    },
    {
      id: "cafards-pro",
      nom: "Cafards Pro",
      prix: 250,
      garantie: 6,
      description: "Traitement haute performance",
      populaire: false,
    },
    {
      id: "contrat",
      nom: "Contrat Annuel",
      prix: 1500,
      garantie: 12,
      description: "Protection complète toute l'année",
      populaire: false,
    },
  ],
};

export default function Tarifs() {
  const [typeClient, setTypeClient] = useState<
    "particuliers" | "professionnels"
  >("particuliers");
  const [animatedPrices, setAnimatedPrices] = useState<Record<string, number>>(
    {},
  );

  const handleTypeChange = (type: "particuliers" | "professionnels") => {
    setTypeClient(type);
    // Reset animated prices
    setAnimatedPrices({});
    // Animate prices
    setTimeout(() => {
      const prices: Record<string, number> = {};
      tarifs[type].forEach((tarif) => {
        prices[tarif.id] = tarif.prix;
      });
      setAnimatedPrices(prices);
    }, 100);
  };

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
          <motion.div className="text-center mb-12" variants={staggerItem}>
            <Badge variant="default" className="mb-4">
              Tarifs Transparents
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Nos <span className="text-accent-brown">Tarifs</span> Sans
              Surprise
            </h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto">
              Des prix justes et transparents pour tous vos besoins. Devis
              gratuit et sans engagement.
            </p>
          </motion.div>

          {/* Toggle */}
          <motion.div
            className="flex justify-center mb-12"
            variants={staggerItem}
          >
            <div className="bg-white rounded-xl p-1 shadow-md inline-flex">
              <button
                onClick={() => handleTypeChange("particuliers")}
                className={cn(
                  "px-6 py-3 rounded-lg font-medium transition-all duration-300",
                  typeClient === "particuliers"
                    ? "bg-accent-brown text-foreground"
                    : "text-text-light hover:text-text",
                )}
              >
                Particuliers
              </button>
              <button
                onClick={() => handleTypeChange("professionnels")}
                className={cn(
                  "px-6 py-3 rounded-lg font-medium transition-all duration-300",
                  typeClient === "professionnels"
                    ? "bg-accent-brown text-foreground"
                    : "text-text-light hover:text-text",
                )}
              >
                Professionnels
              </button>
            </div>
          </motion.div>

          {/* Tarifs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="wait">
              {tarifs[typeClient].map((tarif, index) => (
                <motion.div
                  key={`${typeClient}-${tarif.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card
                    className={cn(
                      "h-full relative",
                      tarif.populaire &&
                        "border-2 border-accent-brown shadow-xl",
                    )}
                  >
                    {tarif.populaire && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge
                          variant="default"
                          className="bg-yellow-100 text-yellow-800"
                        >
                          Plus populaire
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center">
                      <CardTitle className="text-xl mb-2">
                        {tarif.nom}
                      </CardTitle>
                      <p className="text-sm text-text-light mb-4">
                        {tarif.description}
                      </p>

                      {/* Prix animé */}
                      <div className="mb-4">
                        <motion.div
                          className="text-4xl font-bold text-accent-brown"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.2 + index * 0.1,
                          }}
                        >
                          {formatPrice(animatedPrices[tarif.id] || 0)}
                        </motion.div>
                        <p className="text-sm text-text-light">À partir de</p>
                      </div>

                      {/* Garantie */}
                      <div className="flex items-center justify-center mb-4">
                        <Shield className="w-4 h-4 text-success mr-2" />
                        <span className="text-sm">
                          Garantie {tarif.garantie} mois
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent>
                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                          <span>Diagnostic gratuit</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                          <span>Intervention rapide</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                          <span>Produits certifiés</span>
                        </li>
                        {typeClient === "professionnels" && (
                          <li className="flex items-center text-sm">
                            <Check className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                            <span>Facture détaillée</span>
                          </li>
                        )}
                      </ul>

                      {/* CTA */}
                      <Button
                        variant={tarif.populaire ? "default" : "outline"}
                        size="default"
                        className="w-full"
                      >
                        Demander un devis
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Informations supplémentaires */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerItem}
          >
            <Card className="text-center bg-gradient-to-br from-success/10 to-white border-success/20">
              <CardContent className="py-6">
                <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
                <h3 className="text-foreground font-semibold mb-2">
                  Prix dégressifs
                </h3>
                <p className="text-sm text-text-light">
                  Tarifs préférentiels pour interventions multiples
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-warning/10 to-white border-warning/20">
              <CardContent className="py-6">
                <Clock className="w-8 h-8 text-warning mx-auto mb-3" />
                <h3 className="text-foreground font-semibold mb-2">
                  Urgence 24/7
                </h3>
                <p className="text-sm text-text-light">
                  Pas de majoration week-end et jours fériés
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-primary/10 to-white border-primary/20">
              <CardContent className="py-6">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-foreground font-semibold mb-2">
                  Satisfait ou remboursé
                </h3>
                <p className="text-sm text-text-light">
                  Garantie de résultat ou remboursement intégral
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Bottom */}
          <motion.div className="mt-12 text-center" variants={fadeInUp}>
            <p className="text-lg mb-6 text-text-light">
              Besoin d&apos;un devis personnalisé ? Contactez-nous !
            </p>
            <a href={`tel:${SITE_CONFIG.links.tel}`}>
              <Button size="lg" variant="default">
                Appeler pour un devis gratuit
              </Button>
            </a>
            <p className="text-sm text-text-light mt-4">
              Réponse immédiate • Sans engagement • Devis en 5 minutes
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
