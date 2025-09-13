"use client";

import { useState } from "react";
import { Phone, Search, Wrench, FileCheck, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const PROCESS_STEPS = [
  {
    id: 1,
    title: "Contact Initial",
    description:
      "Appelez-nous 24/7 pour une prise en charge immédiate de votre problème",
    icon: Phone,
    details:
      "Notre équipe est disponible jour et nuit pour répondre à vos urgences. Nous prenons le temps de comprendre votre situation.",
  },
  {
    id: 2,
    title: "État des Lieux",
    description: "Diagnostic gratuit et complet de votre situation",
    icon: Search,
    details:
      "Nos experts analysent l'ampleur de l'infestation et identifient les points d'entrée pour établir un plan d'action personnalisé.",
  },
  {
    id: 3,
    title: "Traitement Adapté",
    description: "Intervention écologique avec notre vélo cargo",
    icon: Wrench,
    details:
      "Nous utilisons des méthodes respectueuses de l'environnement et adaptées à votre situation spécifique.",
  },
  {
    id: 4,
    title: "Suivi Personnalisé",
    description: "Accompagnement jusqu'à résolution complète",
    icon: Shield,
    details:
      "Nous restons à vos côtés avec des visites de contrôle et des conseils pour éviter toute nouvelle infestation.",
  },
  {
    id: 5,
    title: "Rapport d'Intervention",
    description: "Documentation complète de notre intervention",
    icon: FileCheck,
    details:
      "Vous recevez un rapport détaillé avec photos, actions réalisées et recommandations pour l'avenir.",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="section-padding bg-neutral-light">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Notre <span className="text-accent-brown">Processus</span>{" "}
            d&apos;Intervention
          </h2>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            Un protocole rigoureux pour garantir l&apos;efficacité de nos
            interventions
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent-brown/20 hidden lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={cn(
                    "relative lg:grid lg:grid-cols-2 lg:gap-8",
                    isEven ? "lg:text-right" : "lg:text-left",
                  )}
                >
                  <div
                    className={cn(
                      "bg-white rounded-xl p-6 shadow-lg cursor-pointer transition-all duration-300",
                      isActive && "shadow-2xl scale-105",
                      isEven ? "lg:col-start-1" : "lg:col-start-2",
                    )}
                    onClick={() => setActiveStep(isActive ? null : step.id)}
                  >
                    <div
                      className={cn(
                        "flex items-start",
                        isEven && "lg:flex-row-reverse",
                      )}
                    >
                      <div
                        className={cn(
                          "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center",
                          "bg-accent-brown text-foreground",
                          isEven ? "lg:ml-4 mr-4 lg:mr-0" : "mr-4",
                        )}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold mb-2">
                          Étape {step.id}: {step.title}
                        </h3>
                        <p className="text-neutral-dark mb-3">
                          {step.description}
                        </p>
                        {isActive && (
                          <p className="text-sm text-neutral-dark animate-fade-in">
                            {step.details}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-accent-brown rounded-full" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-accent-brown mb-4">
            Temps moyen d&apos;intervention complète
          </p>
          <div className="text-4xl font-bold text-text">48-72h</div>
          <p className="text-neutral-dark mt-2">
            De la prise de contact à la résolution du problème
          </p>
        </div>
      </div>
    </section>
  );
}
