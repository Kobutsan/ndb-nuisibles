"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  ClipboardCheck,
  Shield,
  UserCheck,
  FileText,
  ChevronDown,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    title: "Contact Initial",
    description: "Appelez-nous 24/7 pour une prise en charge immédiate",
    icon: Phone,
    details:
      "Notre équipe est disponible jour et nuit pour répondre à vos urgences. Nous prenons le temps de comprendre votre situation et planifions une intervention rapide.",
    color: "text-accent-brown",
    bgColor: "bg-accent-brown/10",
    duration: "5 min",
  },
  {
    id: 2,
    title: "État des Lieux",
    description: "Diagnostic gratuit et complet de votre situation",
    icon: ClipboardCheck,
    details:
      "Nos experts analysent l'ampleur de l'infestation, identifient les points d'entrée et établissent un plan d'action personnalisé adapté à vos besoins.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    duration: "30 min",
  },
  {
    id: 3,
    title: "Traitement Adapté",
    description: "Intervention écologique avec notre vélo cargo",
    icon: Shield,
    details:
      "Nous utilisons des méthodes respectueuses de l'environnement et de votre santé. Notre vélo cargo nous permet d'intervenir rapidement sans pollution.",
    color: "text-success",
    bgColor: "bg-success/10",
    duration: "1-2h",
  },
  {
    id: 4,
    title: "Suivi Personnalisé",
    description: "Accompagnement jusqu'à résolution complète",
    icon: UserCheck,
    details:
      "Nous restons à vos côtés avec des visites de contrôle régulières et des conseils pour éviter toute nouvelle infestation.",
    color: "text-warning",
    bgColor: "bg-warning/10",
    duration: "3 mois",
  },
  {
    id: 5,
    title: "Rapport d'Intervention",
    description: "Documentation complète de notre intervention",
    icon: FileText,
    details:
      "Vous recevez un rapport détaillé avec photos avant/après, actions réalisées et recommandations pour maintenir votre environnement sain.",
    color: "text-accent-brown-light",
    bgColor: "bg-accent-brown-light/10",
    duration: "24h",
  },
];

export default function ProcessusIntervention() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="container px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={staggerItem}>
            <Badge variant="default" className="mb-4">
              Notre Méthode
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Processus d&apos;
              <span className="text-accent-brown">Intervention</span>
            </h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto">
              Un protocole rigoureux en 5 étapes pour garantir l&apos;efficacité
              de nos interventions
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Ligne de connexion */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-brown via-primary to-accent-brown-light" />

            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                const isActive = activeStep === step.id;

                return (
                  <motion.div
                    key={step.id}
                    variants={staggerItem}
                    className={cn(
                      "relative grid grid-cols-2 gap-8",
                      isEven ? "text-right" : "text-left",
                    )}
                  >
                    {/* Card */}
                    <div className={cn(isEven ? "col-start-1" : "col-start-2")}>
                      <Card
                        className={cn(
                          "cursor-pointer transition-all duration-300",
                          isActive && "shadow-2xl scale-105",
                        )}
                        onClick={() => setActiveStep(isActive ? null : step.id)}
                      >
                        <div
                          className={cn(
                            "flex items-start",
                            isEven && "flex-row-reverse",
                          )}
                        >
                          <div
                            className={cn(
                              "flex-shrink-0 p-3 rounded-xl",
                              step.bgColor,
                              isEven ? "ml-4" : "mr-4",
                            )}
                          >
                            <Icon className={cn("w-6 h-6", step.color)} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-heading font-bold">
                                {step.title}
                              </h3>
                              <Badge variant="default">{step.duration}</Badge>
                            </div>
                            <p className="text-text-light mb-3">
                              {step.description}
                            </p>
                            <AnimatePresence>
                              {isActive && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <p className="text-sm text-text-light pt-3 border-t">
                                    {step.details}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                            <div
                              className={cn(
                                "flex items-center mt-2 text-sm text-accent-brown",
                                isEven && "justify-end",
                              )}
                            >
                              <span>{isActive ? "Masquer" : "Voir plus"}</span>
                              <ChevronDown
                                className={cn(
                                  "w-4 h-4 ml-1 transition-transform",
                                  isActive && "rotate-180",
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Point central */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                          isActive
                            ? "bg-accent-brown scale-125"
                            : "bg-white border-4 border-accent-brown",
                        )}
                      >
                        <span
                          className={cn(
                            "font-bold",
                            isActive ? "text-foreground" : "text-accent-brown",
                          )}
                        >
                          {step.id}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <motion.div key={step.id} variants={staggerItem}>
                  <Card
                    className={cn(
                      "cursor-pointer transition-all duration-300",
                      isActive && "shadow-2xl",
                    )}
                    onClick={() => setActiveStep(isActive ? null : step.id)}
                  >
                    <div className="flex items-start">
                      <div
                        className={cn(
                          "flex-shrink-0 p-3 rounded-xl mr-4",
                          step.bgColor,
                        )}
                      >
                        <Icon className={cn("w-6 h-6", step.color)} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <Badge variant="default" className="mb-2">
                              Étape {step.id}
                            </Badge>
                            <h3 className="text-xl font-heading font-bold">
                              {step.title}
                            </h3>
                          </div>
                          <Badge
                            variant="default"
                            className="bg-green-100 text-green-800"
                          >
                            {step.duration}
                          </Badge>
                        </div>
                        <p className="text-text-light mb-3">
                          {step.description}
                        </p>
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="text-sm text-text-light pt-3 border-t">
                                {step.details}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <div className="flex items-center mt-2 text-sm text-accent-brown">
                          <span>{isActive ? "Masquer" : "Voir plus"}</span>
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 ml-1 transition-transform",
                              isActive && "rotate-180",
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-16 text-center bg-gradient-to-r from-accent-brown to-primary-dark rounded-2xl p-8 text-foreground"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-heading font-bold mb-2">
              Intervention Express Garantie
            </h3>
            <p className="text-lg mb-2 text-foreground/90">
              De la prise de contact à la résolution complète
            </p>
            <div className="text-5xl font-bold mb-4">48-72h</div>
            <p className="text-sm text-foreground/70">
              Satisfaction garantie ou remboursement intégral
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
