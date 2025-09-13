import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Store,
  Hotel,
  Utensils,
  GraduationCap,
  Hospital,
  Shield,
  Clock,
  CheckCircle,
  Phone,
  FileText,
  Users,
  Award,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/AccordionWrapper";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Dératisation Professionnels Paris | Contrats Annuels - NDB Nuisibles",
  description:
    "Solutions anti-nuisibles pour professionnels. Restaurants, hôtels, bureaux. Contrats annuels, interventions préventives, rapports HACCP.",
  keywords:
    "dératisation professionnels, contrat annuel, HACCP, restaurants, hôtels, bureaux, prévention nuisibles",
  openGraph: {
    title: "Services Professionnels - NDB Nuisibles",
    description:
      "Solutions anti-nuisibles adaptées aux professionnels avec contrats annuels et garanties.",
    images: ["/images/services/professionnels-og.jpg"],
    type: "website",
  },
  alternates: {
    canonical: "https://ndbnuisibles.com/services/professionnels",
  },
};

// Données structurées Schema.org
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Services Professionnels Anti-Nuisibles",
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
    "Services de dératisation et désinsectisation pour professionnels avec contrats annuels",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "100",
    highPrice: "500",
    offerCount: "3",
  },
};

export default function ProfessionnelsPage() {
  const sectors = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Restauration",
      description: "Protocoles HACCP, interventions discrètes",
      clients: ["Restaurants", "Boulangeries", "Traiteurs"],
      color: "bg-orange-100",
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "Hôtellerie",
      description: "Prévention et traitement rapide",
      clients: ["Hôtels", "Airbnb", "Résidences"],
      color: "bg-blue-100",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Bureaux",
      description: "Interventions hors horaires",
      clients: ["Entreprises", "Coworking", "Administrations"],
      color: "bg-gray-100",
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Commerce",
      description: "Protection stocks et surfaces de vente",
      clients: ["Supermarchés", "Boutiques", "Entrepôts"],
      color: "bg-green-100",
    },
    {
      icon: <Hospital className="w-8 h-8" />,
      title: "Santé",
      description: "Protocoles stricts, produits adaptés",
      clients: ["Cliniques", "Cabinets", "EHPAD"],
      color: "bg-red-100",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Éducation",
      description: "Traitements vacances scolaires",
      clients: ["Écoles", "Crèches", "Universités"],
      color: "bg-purple-100",
    },
  ];

  const advantages = [
    "Contrat annuel avec tarifs préférentiels",
    "Interventions préventives programmées",
    "Disponibilité 24/7 en cas d'urgence",
    "Rapports détaillés après chaque passage",
    "Conformité réglementaire garantie",
    "Formation du personnel sur la prévention",
    "Certificats pour contrôles sanitaires",
    "Interlocuteur dédié",
  ];

  const contractTypes = [
    {
      name: "Contrat Essentiel",
      price: "À partir de 100€/mois",
      features: [
        "2 passages préventifs par an",
        "Intervention d'urgence sous 24h",
        "Rapport d'intervention",
        "Certificat de passage",
        "Hotline dédiée",
      ],
      recommended: false,
    },
    {
      name: "Contrat Premium",
      price: "À partir de 200€/mois",
      features: [
        "4 passages préventifs par an",
        "Intervention d'urgence sous 4h",
        "Rapports détaillés HACCP",
        "Formation du personnel incluse",
        "Audit annuel complet",
        "Produits écologiques prioritaires",
      ],
      recommended: true,
    },
    {
      name: "Contrat Sur-Mesure",
      price: "Sur devis",
      features: [
        "Fréquence personnalisée",
        "Intervention d'urgence immédiate",
        "Reporting personnalisé",
        "Formations illimitées",
        "Consultant dédié",
        "Solutions innovantes",
      ],
      recommended: false,
    },
  ];

  const testimonials = [
    {
      author: "Restaurant Le Marais",
      content:
        "Service impeccable, discret et efficace. Nos cuisines sont protégées toute l'année.",
      rating: 5,
    },
    {
      author: "Hôtel Boutique Paris 11",
      content:
        "Intervention rapide lors d'un problème urgent. Professionnalisme remarquable.",
      rating: 5,
    },
    {
      author: "Cabinet Médical Saint-Antoine",
      content:
        "Protocoles respectés à la lettre. Parfait pour notre environnement médical.",
      rating: 5,
    },
  ];

  const faqItems = [
    {
      question: "Quels sont les avantages d'un contrat annuel ?",
      answer:
        "Un contrat annuel vous garantit des tarifs préférentiels, des interventions prioritaires, un suivi régulier préventif, et la tranquillité d'esprit avec une protection continue contre les nuisibles.",
    },
    {
      question: "Comment gérez-vous les interventions en milieu alimentaire ?",
      answer:
        "Nous suivons strictement les protocoles HACCP, utilisons des produits homologués contact alimentaire, et fournissons tous les documents nécessaires pour vos contrôles sanitaires.",
    },
    {
      question: "Pouvez-vous intervenir sans perturber notre activité ?",
      answer:
        "Absolument. Nous adaptons nos horaires à vos contraintes : nuit, week-end, fermetures. Notre objectif est d'être invisibles pour vos clients.",
    },
    {
      question: "Quelles garanties offrez-vous ?",
      answer:
        "Nous garantissons l'efficacité de nos traitements, le respect des normes en vigueur, et une réactivité maximale. En cas de problème entre deux passages, nous intervenons gratuitement.",
    },
    {
      question: "Comment se passe la mise en place d'un contrat ?",
      answer:
        "Nous commençons par un audit gratuit de vos locaux, puis nous établissons un plan de prévention personnalisé. Le contrat est ensuite mis en place avec un calendrier d'interventions adapté.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Services professionnels anti-nuisibles"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-20"
            priority
          />
        </div>

        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Solutions B2B
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Services <span className="text-primary">Professionnels</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Protégez votre établissement avec nos contrats sur-mesure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2" />
                Devis Professionnel
              </Button>
              <Button size="lg" variant="outline">
                <FileText className="mr-2" />
                Télécharger Brochure
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Badge variant="outline" className="px-4 py-2">
                ✓ Certifié HACCP
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                ✓ Assurance RC Pro
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                ✓ Intervention 24/7
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                ✓ + 200 clients pros
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs d'activité */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Nos Secteurs d&apos;Expertise
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Des solutions adaptées à chaque secteur d&apos;activité
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`flex items-center justify-center w-16 h-16 ${sector.color} rounded-lg mb-4`}
                  >
                    {sector.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{sector.title}</h3>
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {sector.clients.map((client, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {client}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nos Contrats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Nos Formules de Contrats
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Choisissez la protection adaptée à vos besoins
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {contractTypes.map((contract, index) => (
                <Card
                  key={index}
                  className={`p-8 relative ${contract.recommended ? "border-primary shadow-lg" : ""}`}
                >
                  {contract.recommended && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                      Recommandé
                    </Badge>
                  )}
                  <h3 className="text-2xl font-semibold mb-2">
                    {contract.name}
                  </h3>
                  <p className="text-3xl font-bold text-primary mb-6">
                    {contract.price}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {contract.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${contract.recommended ? "bg-primary" : ""}`}
                  >
                    Demander un devis
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Pourquoi Choisir NDB Nuisibles ?
                </h2>
                <ul className="space-y-4">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{advantage}</span>
                    </li>
                  ))}
                </ul>

                <Card className="mt-8 p-6 bg-blue-50 border-blue-200">
                  <h4 className="text-foreground font-semibold mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Engagement Qualité
                  </h4>
                  <p className="text-sm text-gray-700">
                    Tous nos techniciens sont certifiés Certibiocide et formés
                    aux dernières normes en vigueur. Nous garantissons une
                    traçabilité complète de nos interventions.
                  </p>
                </Card>
              </div>

              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://placehold.co/800x1000"
                  alt="Technicien NDB Nuisibles en intervention"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Ils Nous Font Confiance
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Plus de 200 professionnels nous font confiance
              </p>
              <Button variant="outline">
                <Users className="mr-2" />
                Voir tous les témoignages
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Notre Process en 4 Étapes
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-foreground rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Audit Gratuit</h3>
                  <p className="text-gray-600">
                    Nous analysons vos locaux, identifions les zones à risque et
                    évaluons vos besoins spécifiques.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-foreground rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Plan Personnalisé
                  </h3>
                  <p className="text-gray-600">
                    Création d&apos;un protocole sur-mesure adapté à votre
                    activité et vos contraintes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-foreground rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mise en Place</h3>
                  <p className="text-gray-600">
                    Installation des dispositifs, première intervention et
                    formation de vos équipes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-foreground rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Suivi Continu</h3>
                  <p className="text-gray-600">
                    Interventions régulières, rapports détaillés et ajustements
                    selon l&apos;évolution de vos besoins.
                  </p>
                </div>
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
              Questions Fréquentes Professionnels
            </h2>

            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <ContactCTA
        title="Protégez votre établissement"
        description="Demandez votre audit gratuit et découvrez nos solutions professionnelles"
        primaryCTA="Audit Gratuit"
        secondaryCTA="Télécharger Brochure"
      />
    </>
  );
}
