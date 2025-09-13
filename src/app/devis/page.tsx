import { Metadata } from "next";
import { Calculator, Clock, Shield, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import DevisForm from "@/components/forms/DevisForm";

export const metadata: Metadata = {
  title:
    "Devis Gratuit Dératisation Paris | Estimation Immédiate - NDB Nuisibles",
  description:
    "Obtenez un devis gratuit en ligne pour votre dératisation ou désinsectisation. Estimation immédiate, réponse sous 2h.",
  keywords:
    "devis dératisation, estimation prix, devis punaises de lit, tarif désinsectisation",
  openGraph: {
    title: "Devis Gratuit - NDB Nuisibles",
    description:
      "Calculez votre devis en ligne et obtenez une estimation immédiate.",
    type: "website",
  },
  alternates: {
    canonical: "https://ndbnuisibles.com/devis",
  },
};

export default function DevisPage() {
  const avantages = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Estimation immédiate",
      description: "Prix calculé en temps réel",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Réponse rapide",
      description: "Confirmation sous 2h",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sans engagement",
      description: "100% gratuit",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Prix garantis",
      description: "Pas de surprises",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[30vh] flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <Badge className="mb-4 bg-green-100 text-green-800">
            100% Gratuit
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Votre <span className="text-primary">Devis en Ligne</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Obtenez une estimation immédiate et personnalisée en quelques clics
          </p>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {avantages.map((avantage, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-3">
                    {avantage.icon}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">
                    {avantage.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {avantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <DevisForm />
            </Card>

            {/* Informations complémentaires */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-foreground font-semibold mb-4">
                  Comment ça marche ?
                </h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <span>Remplissez le formulaire avec vos informations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <span>Obtenez une estimation de prix immédiate</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <span>Recevez votre devis détaillé par email</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      4
                    </span>
                    <span>
                      Nous vous contactons pour planifier l&apos;intervention
                    </span>
                  </li>
                </ol>
              </Card>

              <Card className="p-6">
                <h3 className="text-foreground font-semibold mb-4">
                  Pourquoi choisir NDB Nuisibles ?
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Plus de 10 ans d&apos;expérience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Intervention en vélo cargo écologique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Produits certifiés et sans danger</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Garantie de résultat incluse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Prix transparents et fixes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Disponible 24h/24, 7j/7</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* FAQ rapide */}
            <Card className="mt-8 p-6 bg-blue-50 border-blue-200">
              <h3 className="text-foreground font-semibold mb-3">
                Questions fréquentes
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-gray-900">
                    Le devis est-il vraiment gratuit ?
                  </p>
                  <p className="text-gray-600">
                    Oui, le devis est 100% gratuit et sans engagement.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Combien de temps pour recevoir le devis ?
                  </p>
                  <p className="text-gray-600">
                    Vous recevez une estimation immédiate et le devis détaillé
                    sous 2h.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Les prix sont-ils fixes ?
                  </p>
                  <p className="text-gray-600">
                    Oui, les prix indiqués sont garantis, pas de surprises.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
