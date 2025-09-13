import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  Phone,
  MapPin,
  Star,
  Bug,
  Home,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/AccordionWrapper";
import ContactCTA from "@/components/sections/ContactCTA";
import ProcessSteps from "@/components/sections/ProcessSteps";

export const metadata: Metadata = {
  title: "Désinsectisation Paris | Tous Insectes - NDB Nuisibles",
  description:
    "Service complet de désinsectisation à Paris. Cafards, fourmis, mites, puces. Intervention écologique en vélo cargo. ☎️ 06 63 61 41 57",
  keywords:
    "désinsectisation Paris, cafards, blattes, fourmis, mites, puces, traitement insectes, extermination nuisibles",
  openGraph: {
    title: "Désinsectisation Paris - NDB Nuisibles",
    description:
      "Traitement professionnel contre tous types d'insectes. Intervention rapide et écologique.",
    images: ["/images/services/desinsectisation-og.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://ndbnuisibles.com/services/desinsectisation",
  },
};

// Données structurées Schema.org
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Désinsectisation",
  provider: {
    "@type": "LocalBusiness",
    name: "NDB Nuisibles",
    telephone: "+33663614157",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Paris",
  },
  description:
    "Service professionnel de désinsectisation pour tous types d'insectes",
  offers: {
    "@type": "Offer",
    price: "150",
    priceCurrency: "EUR",
    priceValidUntil: "2025-12-31",
  },
};

export default function DesinsectisationPage() {
  const insects = [
    {
      name: "Cafards/Blattes",
      description: "Traitement choc et préventif",
      price: "À partir de 150€",
      icon: <Bug className="w-8 h-8" />,
    },
    {
      name: "Fourmis",
      description: "Élimination des colonies",
      price: "À partir de 120€",
      icon: <Bug className="w-8 h-8" />,
    },
    {
      name: "Mites",
      description: "Alimentaires et textiles",
      price: "À partir de 100€",
      icon: <Bug className="w-8 h-8" />,
    },
    {
      name: "Puces",
      description: "Traitement complet logement",
      price: "À partir de 180€",
      icon: <Bug className="w-8 h-8" />,
    },
    {
      name: "Mouches/Moucherons",
      description: "Identification source et traitement",
      price: "À partir de 100€",
      icon: <Bug className="w-8 h-8" />,
    },
    {
      name: "Guêpes/Frelons",
      description: "Destruction nids en sécurité",
      price: "À partir de 150€",
      icon: <Bug className="w-8 h-8" />,
    },
  ];

  const treatmentSteps = [
    {
      title: "Diagnostic",
      description: "Identification précise de l'espèce et niveau d'infestation",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Traitement ciblé",
      description: "Application de produits spécifiques à chaque insecte",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Prévention",
      description: "Conseils et mesures pour éviter la réinfestation",
      icon: <Home className="w-6 h-6" />,
    },
    {
      title: "Suivi",
      description: "Contrôle après traitement et garantie",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  const faqItems = [
    {
      question: "Quels insectes traitez-vous ?",
      answer:
        "Nous traitons tous types d'insectes : cafards, blattes, fourmis, mites, puces, mouches, moucherons, guêpes, frelons, et bien d'autres. Notre expertise couvre l'ensemble des nuisibles volants et rampants.",
    },
    {
      question: "Les produits sont-ils dangereux ?",
      answer:
        "Nous utilisons des produits certifiés Certibiocide, sans danger pour les humains et animaux domestiques après séchage. Nous privilégions les méthodes écologiques quand c'est possible.",
    },
    {
      question: "Combien de temps dure une intervention ?",
      answer:
        "Une intervention standard dure entre 1 et 3 heures selon la surface et le type d'insecte. Pour les infestations importantes, plusieurs passages peuvent être nécessaires.",
    },
    {
      question: "Faut-il quitter le logement ?",
      answer:
        "Dans la plupart des cas, non. Il faut simplement quitter les pièces traitées pendant 2-3 heures. Pour certains traitements spécifiques, nous vous informerons des précautions à prendre.",
    },
    {
      question: "Quelle est votre zone d'intervention ?",
      answer:
        "Nous intervenons dans tout Paris et la petite couronne en vélo cargo électrique. Notre mobilité nous permet d'arriver rapidement même dans les zones difficiles d'accès.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Service de désinsectisation professionnelle"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-20"
            priority
          />
        </div>

        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800">
              Tous types d&apos;insectes
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              <span className="text-primary">Désinsectisation</span>{" "}
              Professionnelle
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Élimination rapide et durable de tous les insectes nuisibles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Phone className="mr-2" />
                06 63 61 41 57
              </Button>
              <Button size="lg" variant="outline">
                Identifier mon insecte
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Badge variant="outline" className="px-4 py-2">
                ✓ Intervention sous 2h
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                ✓ Produits certifiés
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                ✓ Garantie résultat
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                ✓ Devis gratuit
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'insectes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Insectes Traités
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Expertise complète pour tous types d&apos;insectes nuisibles
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insects.map((insect, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full flex-shrink-0">
                      {insect.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">
                        {insect.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {insect.description}
                      </p>
                      <p className="text-primary font-semibold">
                        {insect.price}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Votre insecte n&apos;est pas dans la liste ?
              </p>
              <Button variant="outline">
                Nous contacter pour un diagnostic
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Méthode */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Notre Protocole d&apos;Intervention
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Une approche méthodique pour une élimination définitive
            </p>

            <ProcessSteps steps={treatmentSteps} />

            {/* Méthodes de traitement */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Traitement Préventif
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Inspection régulière des zones à risque</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Application de barrières répulsives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Conseils personnalisés de prévention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Contrats d&apos;entretien régulier</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Traitement Curatif
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Élimination immédiate des nuisibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Traitement des nids et colonies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Destruction des œufs et larves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Garantie de résultat</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Intervention Rapide dans Tout Paris
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Mobilité Écologique
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <span>Tous les arrondissements de Paris</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <span>Petite couronne (92, 93, 94)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <span>Intervention sous 2 heures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-primary mt-0.5" />
                    <span>Vélo cargo 100% électrique</span>
                  </li>
                </ul>

                <Card className="mt-6 p-4 bg-green-50 border-green-200">
                  <p className="text-sm text-gray-700">
                    <strong>Avantage écologique :</strong> Notre vélo cargo nous
                    permet d&apos;intervenir rapidement sans pollution, même
                    dans les zones piétonnes ou à circulation restreinte.
                  </p>
                </Card>
              </div>

              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://placehold.co/800x600"
                  alt="Carte zone intervention Paris"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Questions Fréquentes
            </h2>

            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <ContactCTA
        title="Besoin d'une désinsectisation ?"
        description="Nos experts sont disponibles 7j/7 pour éliminer tous types d'insectes"
        primaryCTA="Appeler Maintenant"
        secondaryCTA="Devis Gratuit"
      />
    </>
  );
}
