"use client";

import { useEffect } from "react";
import { logger } from "@/lib/logger";

export default function PWARegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator && typeof window !== "undefined") {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            logger.debug("Service Worker enregistré", {
              scope: registration.scope
            });

            // Vérifier les mises à jour toutes les heures
            setInterval(
              () => {
                registration.update();
              },
              60 * 60 * 1000,
            );
          })
          .catch((error) => {
            logger.error("Erreur Service Worker", error);
          });
      });
    }
  }, []);

  return null;
}
