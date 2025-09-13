"use client";

import { useEffect, useRef } from "react";

interface GoogleMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  height?: string;
  showMarker?: boolean;
}

export default function GoogleMap({
  center = { lat: 48.8924, lng: 2.3209 }, // Paris 17e
  zoom = 12,
  height = "400px",
  showMarker = true,
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // En production, charger l'API Google Maps avec votre clé
    // Pour l'instant, affichage d'une carte statique ou placeholder

    if (mapRef.current) {
      // Simulation d'une carte
      mapRef.current.style.backgroundImage = `url('https://maps.googleapis.com/maps/api/staticmap?center=${center.lat},${center.lng}&zoom=${zoom}&size=800x400&maptype=roadmap&markers=color:red%7C${center.lat},${center.lng}&key=YOUR_API_KEY')`;
      mapRef.current.style.backgroundSize = "cover";
      mapRef.current.style.backgroundPosition = "center";
    }
  }, [center, zoom]);

  return (
    <div className="relative w-full" style={{ height }}>
      <div
        ref={mapRef}
        className="w-full h-full bg-gray-200 rounded-lg overflow-hidden"
      >
        {/* Placeholder en attendant la vraie carte */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="text-center p-8">
            <div className="mb-4">
              <svg
                className="w-16 h-16 mx-auto text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Zone d&apos;intervention
            </h3>
            <p className="text-gray-600 mb-4">Paris et Petite Couronne</p>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-700">Disponible 24/7</span>
            </div>

            {/* Zones couvertes */}
            <div className="mt-6 grid grid-cols-2 gap-2 max-w-xs mx-auto">
              <div className="bg-white/80 px-3 py-1 rounded text-xs text-gray-700">
                Paris (75)
              </div>
              <div className="bg-white/80 px-3 py-1 rounded text-xs text-gray-700">
                Hauts-de-Seine (92)
              </div>
              <div className="bg-white/80 px-3 py-1 rounded text-xs text-gray-700">
                Seine-Saint-Denis (93)
              </div>
              <div className="bg-white/80 px-3 py-1 rounded text-xs text-gray-700">
                Val-de-Marne (94)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay avec adresse */}
      {showMarker && (
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 max-w-xs">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-foreground">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-sm">NDB Nuisibles</p>
              <p className="text-xs text-gray-600">1B rue de Bizerte</p>
              <p className="text-xs text-gray-600">75017 Paris</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
