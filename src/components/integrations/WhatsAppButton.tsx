"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Afficher le bouton après 2 secondes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Afficher le tooltip après 5 secondes
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    // Masquer le tooltip après 10 secondes
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  const phoneNumber = "33663614157"; // Sans le +
  const message = encodeURIComponent(
    "Bonjour, j'ai besoin d'une intervention pour nuisibles.",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  if (!isVisible) return null;

  return (
    <>
      {/* Bouton WhatsApp */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          aria-label="Contactez-nous sur WhatsApp"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-full mr-3 bottom-1/2 translate-y-1/2 whitespace-nowrap"
              >
                <div className="bg-gray-900 text-foreground text-sm px-3 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <span>Besoin d&apos;aide ? Chattez avec nous !</span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setShowTooltip(false);
                      }}
                      className="hover:text-gray-300"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                    <div className="border-8 border-transparent border-l-gray-900" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bouton principal */}
          <div className="relative">
            {/* Effet de pulsation */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />

            {/* Bouton */}
            <div className="relative bg-green-500 hover:bg-green-600 text-foreground p-4 rounded-full shadow-lg transition-all hover:shadow-xl hover:scale-110">
              <MessageCircle className="w-6 h-6" fill="currentColor" />
            </div>

            {/* Badge de disponibilité */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
          </div>
        </a>
      </motion.div>

      {/* Style pour l'animation de pulsation */}
      <style jsx global>{`
        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  );
}
