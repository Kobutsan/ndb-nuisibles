"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function ServicesGrid() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="section-padding">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Nos <span className="text-accent-brown">Services</span>
          </h2>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            Des solutions professionnelles adaptées à tous vos problèmes de
            nuisibles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className={cn(
                "group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300",
                "hover:shadow-2xl hover:-translate-y-2",
              )}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-accent-brown/10 to-accent-brown/5 p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-heading font-bold text-text mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-dark mb-4">
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight
                    className={cn(
                      "w-8 h-8 text-accent-brown transition-all duration-300",
                      hoveredService === service.id && "translate-x-2",
                    )}
                  />
                </div>
              </div>

              <div
                className={cn(
                  "absolute inset-x-0 bottom-0 bg-accent-brown text-foreground p-6 transform transition-all duration-300",
                  hoveredService === service.id
                    ? "translate-y-0"
                    : "translate-y-full",
                )}
              >
                <h4 className="text-foreground font-semibold mb-3">
                  Points forts :
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent-brown-light flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="btn-secondary">
            Découvrir tous nos services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
