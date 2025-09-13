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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/AccordionWrapper";
import ContactCTA from "@/components/sections/ContactCTA";
import ProcessSteps from "@/components/sections/ProcessSteps";

export const metadata: Metadata = {
  title: "Traitement Punaises de Lit Paris | NDB Nuisibles - Expert Certifié",
  description:
    "Élimination garantie des punaises de lit à Paris. Intervention rapide en vélo cargo, traitement écologique, garantie 6 mois. Devis gratuit ☎️ 06 63 61 41 57",
  keywords:
    "punaises de lit Paris, traitement punaises, extermination punaises de lit, désinsectisation Paris, traitement thermique punaises",
  openGraph: {
    title: "Expert Punaises de Lit Paris - NDB Nuisibles",
    description:
      "Traitement professionnel et garanti des punaises de lit. Intervention écologique et discrète.",
    images: ["/images/services/punaises-lit-og.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://ndbnuisibles.com/services/punaises-de-lit",
  },
};

// Données structurées Schema.org
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Traitement Punaises de Lit",
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
    "Service professionnel de traitement des punaises de lit avec garantie",
  offers: {
    "@type": "Offer",
    price: "250",
    priceCurrency: "EUR",
    priceValidUntil: "2025-12-31",
  },
};

export default function PunaisesDeLitPage() {
  const symptoms = [
    "Piqûres groupées sur la peau, souvent en ligne",
    "Démangeaisons intenses, surtout la nuit",
    "Petites taches de sang sur les draps",
    "Présence de petits points noirs (déjections) sur le matelas",
    "Odeur douceâtre désagréable dans la chambre",
    "Observation directe des insectes (4-7mm, bruns)",
  ];

  const treatmentSteps = [
    {
      title: "Inspection complète",
      description:
        "Identification des zones infestées et du niveau d'infestation",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Préparation du traitement",
      description:
        "Protection des zones sensibles et mise en place du protocole",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Traitement thermique et/ou chimique",
      description: "Application ciblée selon le niveau d'infestation",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Suivi et garantie",
      description: "Contrôle après 15 jours et garantie 6 mois",
      icon: <Star className="w-6 h-6" />,
    },
  ];

  const faqItems = [
    {
      question: "Comment savoir si j'ai des punaises de lit ?",
      answer:
        "Les signes principaux sont : piqûres groupées sur la peau, taches de sang sur les draps, petits points noirs sur le matelas, et parfois une odeur douceâtre. Une inspection professionnelle permet de confirmer leur présence.",
    },
    {
      question: "Le traitement est-il dangereux pour ma famille ?",
      answer:
        "Nos traitements sont certifiés et sans danger lorsque les consignes sont respectées. Nous privilégions les méthodes thermiques et utilisons des produits homologués uniquement si nécessaire.",
    },
    {
      question: "Combien de temps dure le traitement ?",
      answer:
        "L'intervention dure entre 2 et 4 heures selon la surface. Il faut généralement 2 passages à 15 jours d'intervalle pour une éradication complète.",
    },
    {
      question: "Quelle est votre garantie ?",
      answer:
        "Nous offrons une garantie de 6 mois sur nos traitements punaises de lit. Si le problème persiste, nous revenons gratuitement.",
    },
    {
      question: "Quel est le prix du traitement ?",
      answer:
        "Le tarif démarre à 250€ pour un studio, avec devis gratuit selon la surface et le niveau d'infestation. Les professionnels bénéficient de tarifs préférentiels.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 to-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Traitement professionnel punaises de lit"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-20"
            priority
          />
        </div>

        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-100 text-red-800">Urgence 24/7</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Traitement <span className="text-primary">Punaises de Lit</span>{" "}
              Paris
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Éradication garantie avec notre protocole certifié
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Phone className="mr-2" />
                Urgence: 06 63 61 41 57
              </Button>
              <Button size="lg" variant="outline">
                Devis Gratuit en Ligne
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Badge variant="outline" className="px-4 py-2">
                ✓ Garantie 6 mois
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                ✓ Intervention sous 2h
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                ✓ Traitement écologique
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                ✓ Certibiocide
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Alerte Section */}
      <section className="bg-red-50 border-y border-red-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-red-800">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="text-lg font-medium">
              Les punaises de lit se propagent rapidement. Une intervention
              rapide est essentielle pour éviter l&apos;infestation totale.
            </p>
          </div>
        </div>
      </section>

      {/* Symptômes et Identification */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Comment Identifier une Infestation
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Signes d&apos;Infestation
                </h3>
                <ul className="space-y-4">
                  {symptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{symptom}</span>
                    </li>
                  ))}
                </ul>

                <Card className="mt-8 p-6 bg-orange-50 border-orange-200">
                  <h4 className="text-foreground font-semibold mb-2">
                    ⚠️ Attention
                  </h4>
                  <p className="text-sm text-gray-700">
                    Les punaises de lit ne transmettent pas de maladies mais
                    peuvent causer stress, insomnie et réactions allergiques.
                    Une intervention professionnelle est recommandée.
                  </p>
                </Card>
              </div>

              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://placehold.co/800x600"
                  alt="Inspection professionnelle punaises de lit"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Méthode */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Notre Protocole de Traitement
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Un protocole en 4 étapes pour une éradication complète et durable
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {treatmentSteps.map((step, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Étape {index + 1}: {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </Card>
              ))}
            </div>

            {/* Méthodes de traitement */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Traitement Thermique
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Chauffe à 60°C pour tuer œufs et adultes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>100% écologique, sans produits chimiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Efficace dès le premier passage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Idéal pour textiles et mobilier</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Traitement Chimique
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Produits certifiés Certibiocide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Action rémanente longue durée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Traitement des zones cachées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Sans danger après séchage</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Tarifs Transparents
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Studio</h3>
                <p className="text-3xl font-bold text-primary mb-4">250€</p>
                <p className="text-gray-600">Jusqu&apos;à 25m²</p>
              </Card>

              <Card className="p-6 text-center border-primary shadow-lg relative">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                  Plus populaire
                </Badge>
                <h3 className="text-xl font-semibold mb-2">2-3 Pièces</h3>
                <p className="text-3xl font-bold text-primary mb-4">350€</p>
                <p className="text-gray-600">25-60m²</p>
              </Card>

              <Card className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">4+ Pièces</h3>
                <p className="text-3xl font-bold text-primary mb-4">
                  Sur devis
                </p>
                <p className="text-gray-600">Plus de 60m²</p>
              </Card>
            </div>

            <p className="text-center mt-8 text-gray-600">
              ✓ Devis gratuit • ✓ Garantie 6 mois • ✓ Paiement après
              intervention
            </p>
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
        title="Besoin d'une intervention rapide ?"
        description="Nos experts sont disponibles 24/7 pour traiter votre problème de punaises de lit"
        primaryCTA="Appeler Maintenant"
        secondaryCTA="Devis en Ligne"
      />
    </>
  );
}
