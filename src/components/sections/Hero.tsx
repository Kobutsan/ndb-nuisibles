"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, FileText, Shield, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, pulseAnimation } from "@/lib/animations";
import { SITE_CONFIG } from "@/lib/constants";

const nuisibles = [
  "Rats",
  "Souris",
  "Punaises",
  "Cafards",
  "Guêpes",
  "Fourmis",
  "Frelons",
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % nuisibles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background avec Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
        >
          <source src="/videos/velo-cargo.mp4" type="video/mp4" />
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop')",
            }}
          />
        </video>
      </div>

      {/* Content */}
      <div className="container relative z-20 text-white text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Badge Certibiocide */}
          <motion.div variants={fadeInUp}>
            <Badge
              variant="default"
              className="mb-8 backdrop-blur-sm bg-green-100 text-green-800"
            >
              <Shield className="w-4 h-4 mr-1 inline" />
              Certifié Certibiocide - Ministère de la Transition Écologique
            </Badge>
          </motion.div>

          {/* Titre principal avec animation */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight text-white"
            variants={fadeInUp}
          >
            Dératisation Premium
            <span className="block text-accent-brown-light mt-3">
              & Écologique à Paris
            </span>
          </motion.h1>

          {/* Sous-titre avec texte animé */}
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl mb-6 text-gray-100"
            variants={fadeInUp}
          >
            Éliminez vos{" "}
            <span className="inline-block min-w-[140px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-warning font-bold"
                >
                  {nuisibles[textIndex]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            avec le vélo cargo
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg lg:text-xl mb-12 text-gray-200 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Le vélo cargo électrique au service de votre tranquillité.
            Intervention rapide, écologique et sans pollution dans tout Paris.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={fadeInUp}
          >
            <Link href="/devis">
              <Button size="lg">
                <FileText className="w-5 h-5" />
                Devis Gratuit Immédiat
              </Button>
            </Link>
            <a href={`tel:${SITE_CONFIG.links.tel}`}>
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white"
              >
                <Phone className="w-5 h-5" />
                Urgence 24/7 - {SITE_CONFIG.links.telDisplay}
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
              <div className="text-3xl sm:text-4xl font-bold text-warning mb-1">
                24/7
              </div>
              <div className="text-sm sm:text-base text-gray-200">
                Disponibilité
              </div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
              <div className="text-3xl sm:text-4xl font-bold text-success mb-1">
                100%
              </div>
              <div className="text-sm sm:text-base text-gray-200">
                Écologique
              </div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
              <div className="text-3xl sm:text-4xl font-bold text-accent-brown-light mb-1">
                15min
              </div>
              <div className="text-sm sm:text-base text-gray-200">
                Temps d&apos;arrivée
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <div className="flex flex-col items-center text-white/80">
          <span className="text-sm mb-2">Découvrir</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
