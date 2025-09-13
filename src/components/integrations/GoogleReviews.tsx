"use client";

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    author: "Marie L.",
    rating: 5,
    date: "Il y a 1 semaine",
    text: "Service exceptionnel ! Intervention rapide en vélo cargo, le technicien était très professionnel. Les punaises de lit ont complètement disparu. Je recommande vivement !",
    verified: true,
  },
  {
    id: 2,
    author: "Thomas D.",
    rating: 5,
    date: "Il y a 2 semaines",
    text: "Problème de rats résolu en une seule intervention. Prix correct et garantie respectée. L'approche écologique est un vrai plus.",
    verified: true,
  },
  {
    id: 3,
    author: "Sophie M.",
    rating: 5,
    date: "Il y a 3 semaines",
    text: "Très satisfaite ! Intervention le jour même pour une urgence cafards. Produits sans danger pour mes enfants et mon chat.",
    verified: true,
  },
  {
    id: 4,
    author: "Restaurant Le Marais",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Contrat professionnel impeccable. Passages réguliers, documentation HACCP fournie, équipe discrète et efficace.",
    verified: true,
  },
  {
    id: 5,
    author: "Jean-Pierre R.",
    rating: 4,
    date: "Il y a 1 mois",
    text: "Bonne intervention pour des fourmis. Délai respecté, technicien sympathique. Un peu cher mais efficace.",
    verified: true,
  },
  {
    id: 6,
    author: "Hôtel Boutique 11e",
    rating: 5,
    date: "Il y a 2 mois",
    text: "Service professionnel pour notre établissement. Intervention discrète, rapide et efficace. Excellent suivi.",
    verified: true,
  },
];

export default function GoogleReviews({ limit = 3 }: { limit?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayedReviews = reviews.slice(currentIndex, currentIndex + limit);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - limit));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(reviews.length - limit, prev + limit));
  };

  const averageRating = (
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div className="w-full">
      {/* Header avec statistiques */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="text-2xl font-bold">{averageRating}</span>
        </div>
        <p className="text-gray-600">Basé sur {reviews.length} avis Google</p>
        <Badge className="mt-2 bg-blue-100 text-blue-800">
          <svg className="w-4 h-4 mr-1 inline" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Avis vérifiés Google
        </Badge>
      </div>

      {/* Reviews */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {displayedReviews.map((review) => (
          <Card
            key={review.id}
            className="p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-foreground font-semibold">{review.author}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
              {review.verified && (
                <Badge variant="outline" className="text-xs">
                  Vérifié
                </Badge>
              )}
            </div>

            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>

            <Quote className="w-6 h-6 text-gray-300 mb-2" />
            <p className="text-sm text-gray-600 line-clamp-3">{review.text}</p>
          </Card>
        ))}
      </div>

      {/* Navigation */}
      {reviews.length > limit && (
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Précédent
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: Math.ceil(reviews.length / limit) }).map(
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * limit)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    Math.floor(currentIndex / limit) === i
                      ? "bg-primary"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ),
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleNext}
            disabled={currentIndex + limit >= reviews.length}
          >
            Suivant
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      )}

      {/* CTA Google Reviews */}
      <div className="text-center mt-8">
        <a
          href="https://g.page/ndbnuisibles/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          Voir tous les avis sur Google
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
