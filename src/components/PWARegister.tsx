"use client";

import { useEffect } from "react";

export default function PWARegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator && typeof window !== "undefined") {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("Service Worker enregistré:", registration.scope);

            // Vérifier les mises à jour toutes les heures
            setInterval(
              () => {
                registration.update();
              },
              60 * 60 * 1000,
            );
          })
          .catch((error) => {
            console.error("Erreur Service Worker:", error);
          });
      });
    }
  }, []);

  return null;
}
