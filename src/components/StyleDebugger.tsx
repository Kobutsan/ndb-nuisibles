"use client";

import { useEffect, useState } from "react";

export default function StyleDebugger() {
  const [issues, setIssues] = useState<string[]>([]);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    const checkStyles = () => {
      const problems: string[] = [];

      // Vérifier texte blanc sur blanc
      document.querySelectorAll("*").forEach((el) => {
        const styles = window.getComputedStyle(el);
        const bgColor = styles.backgroundColor;
        const textColor = styles.color;

        if (
          bgColor === "rgb(255, 255, 255)" &&
          textColor === "rgb(255, 255, 255)"
        ) {
          problems.push(
            `Texte blanc sur fond blanc: ${el.tagName}.${el.className}`,
          );
        }

        // Vérifier boutons trop petits
        if (el.tagName === "BUTTON") {
          const height = el.getBoundingClientRect().height;
          if (height < 44) {
            problems.push(`Bouton trop petit (${height}px): ${el.className}`);
          }
        }

        // Vérifier contrastes
        if (el.textContent && el.textContent.trim()) {
          const contrast = getContrast(bgColor, textColor);
          if (contrast < 4.5) {
            problems.push(`Contraste insuffisant: ${el.tagName}`);
          }
        }
      });

      setIssues(problems);
    };

    // Attendre que le DOM soit chargé
    setTimeout(checkStyles, 1000);
  }, []);

  function getContrast(bg: string, text: string): number {
    // Calcul simplifié du contraste
    // Pour une implémentation complète, il faudrait calculer le ratio WCAG
    if (bg === text) return 1;
    if (
      (bg.includes("255") && text.includes("0")) ||
      (bg.includes("0") && text.includes("255"))
    )
      return 21;
    return 10; // Valeur par défaut acceptable
  }

  if (process.env.NODE_ENV !== "development" || issues.length === 0)
    return null;

  return (
    <div className="fixed bottom-4 left-4 bg-red-500 text-white p-4 rounded-lg max-w-md z-50">
      <h3 className="font-bold mb-2">⚠️ Problèmes de style détectés:</h3>
      <ul className="text-sm space-y-1">
        {issues.slice(0, 5).map((issue, i) => (
          <li key={i}>• {issue}</li>
        ))}
      </ul>
      {issues.length > 5 && (
        <p className="text-xs mt-2">Et {issues.length - 5} autres...</p>
      )}
    </div>
  );
}
