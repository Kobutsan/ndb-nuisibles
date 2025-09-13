"use client";

import { useEffect, useRef } from "react";
import { USP_POINTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function USPSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 },
    );

    const cards = sectionRef.current?.querySelectorAll(".usp-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-neutral-light" ref={sectionRef}>
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Pourquoi Choisir{" "}
            <span className="text-accent-brown">NDB Nuisibles</span> ?
          </h2>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            Une approche unique alliant efficacité, écologie et innovation pour
            résoudre vos problèmes de nuisibles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {USP_POINTS.map((point, index) => (
            <div
              key={point.title}
              className={cn(
                "usp-card bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 transform hover:scale-105",
                index === 0 &&
                  "lg:col-span-1 bg-gradient-to-br from-success/10 to-white border-2 border-success/20",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-heading font-bold mb-2 text-text">
                {point.title}
              </h3>
              <p className="text-neutral-dark">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-accent-brown rounded-2xl p-8 text-foreground text-center">
          <h3 className="text-2xl font-heading font-bold mb-4">
            Le Vélo Cargo : Notre Différence
          </h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Premiers à Paris à utiliser un vélo cargo électrique pour nos
            interventions. Rapide, silencieux, écologique : nous arrivons
            partout, même dans les zones difficiles d&apos;accès.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-accent-brown-light">
                0
              </div>
              <div className="text-sm">Émission CO2</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-brown-light">
                15min
              </div>
              <div className="text-sm">Temps moyen d&apos;arrivée</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-brown-light">
                100%
              </div>
              <div className="text-sm">Mobilité urbaine</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
