"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bike,
  Leaf,
  Zap,
  Volume2,
  MapPin,
  TrendingDown,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const avantages = [
  {
    icon: Leaf,
    titre: "Zéro Émission",
    description: "100% électrique, aucune pollution",
    couleur: "text-success",
    bgCouleur: "bg-success/10",
  },
  {
    icon: Zap,
    titre: "Ultra Rapide",
    description: "Évite les embouteillages parisiens",
    couleur: "text-warning",
    bgCouleur: "bg-warning/10",
  },
  {
    icon: Volume2,
    titre: "Silencieux",
    description: "Interventions discrètes garanties",
    couleur: "text-primary",
    bgCouleur: "bg-primary/10",
  },
  {
    icon: MapPin,
    titre: "Accessible",
    description: "Accès aux zones piétonnes et parkings difficiles",
    couleur: "text-accent-brown-light",
    bgCouleur: "bg-accent-brown-light/10",
  },
];

export default function VeloCargo() {
  const [kmParcourus, setKmParcourus] = useState(0);
  const [co2Economise, setCo2Economise] = useState(0);
  const [interventions, setInterventions] = useState(0);

  useEffect(() => {
    // Animation des compteurs
    const duration = 2000;
    const steps = 60;
    const kmTarget = 12500;
    const co2Target = 2.8;
    const interventionsTarget = 1850;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setKmParcourus(Math.floor(kmTarget * progress));
      setCo2Economise(Number((co2Target * progress).toFixed(1)));
      setInterventions(Math.floor(interventionsTarget * progress));

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B4513' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={staggerItem}>
            <Badge
              variant="default"
              className="mb-4 bg-green-100 text-green-800"
            >
              Innovation Écologique
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Le <span className="text-accent-brown">Vélo Cargo</span>{" "}
              Électrique
            </h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto">
              Premiers à Paris à utiliser un vélo cargo pour la dératisation.
              Une approche unique alliant efficacité et respect de
              l&apos;environnement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image/Video du vélo */}
            <motion.div variants={staggerItem} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop"
                  alt="Vélo cargo électrique NDB Nuisibles"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Badge sur l'image */}
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="default"
                    className="backdrop-blur-sm bg-green-100 text-green-800"
                  >
                    <Award className="w-4 h-4 mr-1" />
                    Innovation 2024
                  </Badge>
                </div>

                {/* Animation vélo */}
                <motion.div
                  className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-lg"
                  animate={{
                    x: [-100, 0],
                    opacity: [0, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <Bike className="w-6 h-6 text-accent-brown" />
                </motion.div>
              </div>
            </motion.div>

            {/* Avantages */}
            <motion.div variants={staggerItem}>
              <h3 className="text-2xl font-heading font-bold mb-8">
                4 Avantages Majeurs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {avantages.map((avantage, index) => {
                  const Icon = avantage.icon;
                  return (
                    <motion.div
                      key={avantage.titre}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Card className="h-full">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <div
                              className={`p-2 rounded-lg ${avantage.bgCouleur}`}
                            >
                              <Icon className={`w-5 h-5 ${avantage.couleur}`} />
                            </div>
                            <div>
                              <h4 className="text-foreground font-semibold mb-1">
                                {avantage.titre}
                              </h4>
                              <p className="text-sm text-text-light">
                                {avantage.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Statistiques animées */}
          <motion.div
            className="bg-gradient-to-r from-accent-brown to-primary-dark rounded-2xl p-8 lg:p-12 text-foreground"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-heading font-bold text-center mb-8">
              Notre Impact Écologique en 2024
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <motion.div
                  className="text-5xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  {kmParcourus.toLocaleString("fr-FR")}
                </motion.div>
                <p className="text-sm text-foreground/80">
                  Kilomètres parcourus
                </p>
                <div className="mt-2 flex items-center justify-center">
                  <TrendingDown className="w-4 h-4 mr-1 text-success" />
                  <span className="text-xs text-success">100% propres</span>
                </div>
              </div>

              <div className="text-center">
                <motion.div
                  className="text-5xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.4 }}
                >
                  {co2Economise}t
                </motion.div>
                <p className="text-sm text-foreground/80">CO₂ économisé</p>
                <div className="mt-2 flex items-center justify-center">
                  <Leaf className="w-4 h-4 mr-1 text-success" />
                  <span className="text-xs text-success">Zéro émission</span>
                </div>
              </div>

              <div className="text-center">
                <motion.div
                  className="text-5xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.6 }}
                >
                  {interventions}
                </motion.div>
                <p className="text-sm text-foreground/80">
                  Interventions réalisées
                </p>
                <div className="mt-2 flex items-center justify-center">
                  <Zap className="w-4 h-4 mr-1 text-warning" />
                  <span className="text-xs text-warning">15min en moyenne</span>
                </div>
              </div>
            </div>

            {/* Timeline animée */}
            <div className="mt-8 relative">
              <div className="absolute left-0 right-0 h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-success to-warning"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "easeOut" }}
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg mb-4">
                Rejoignez la révolution écologique de la dératisation
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-accent-brown hover:bg-gray-100 border-white"
              >
                Demander une intervention écologique
              </Button>
            </div>
          </motion.div>

          {/* Citation */}
          <motion.div className="mt-16 text-center" variants={fadeInUp}>
            <blockquote className="text-xl italic text-text-light max-w-3xl mx-auto">
              &ldquo;Avec notre vélo cargo électrique, nous prouvons qu&apos;il
              est possible d&apos;allier efficacité professionnelle et respect
              total de l&apos;environnement. C&apos;est notre engagement pour un
              Paris plus propre.&rdquo;
            </blockquote>
            <p className="text-foreground mt-4 font-semibold">
              Nicolas D., Fondateur de NDB Nuisibles
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
