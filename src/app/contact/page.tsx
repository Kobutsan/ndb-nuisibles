import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/forms/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact NDB Nuisibles Paris | Urgence 24/7 ☎️ 06 63 61 41 57",
  description:
    "Contactez NDB Nuisibles pour une intervention rapide à Paris. Disponible 24h/24 7j/7. Devis gratuit, réponse immédiate.",
  keywords: "contact dératisation Paris, urgence nuisibles, devis gratuit",
  openGraph: {
    title: "Contactez-nous - NDB Nuisibles",
    description: "Intervention rapide 24/7 à Paris. Appelez le 06 63 61 41 57",
    type: "website",
  },
  alternates: {
    canonical: "https://ndbnuisibles.com/contact",
  },
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "06 63 61 41 57",
      description: "Disponible 24h/24, 7j/7",
      action: "tel:0663614157",
      primary: true,
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "06 63 61 41 57",
      description: "Envoyez photos et localisation",
      action: "https://wa.me/33663614157",
      primary: false,
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "contact@ndbnuisibles.com",
      description: "Réponse sous 2h en journée",
      action: "mailto:contact@ndbnuisibles.com",
      primary: false,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Zone d'intervention",
      value: "Paris & Petite Couronne",
      description: "Intervention en vélo cargo",
      action: "#map",
      primary: false,
    },
  ];

  const horaires = [
    { jour: "Lundi - Vendredi", heures: "7h00 - 22h00", type: "semaine" },
    { jour: "Samedi", heures: "8h00 - 20h00", type: "weekend" },
    { jour: "Dimanche", heures: "9h00 - 19h00", type: "weekend" },
    { jour: "Urgences", heures: "24h/24, 7j/7", type: "urgence" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary/10 to-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <Badge className="mb-4 bg-red-100 text-red-800">
            Réponse rapide garantie
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contactez <span className="text-primary">NDB Nuisibles</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une urgence ? Une question ? Nous sommes là pour vous aider 24h/24,
            7j/7.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Link
                  key={index}
                  href={method.action}
                  target={
                    method.action.startsWith("http") ? "_blank" : undefined
                  }
                  className="block"
                >
                  <Card
                    className={`p-6 hover:shadow-lg transition-shadow cursor-pointer ${
                      method.primary ? "border-primary bg-primary/5" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                        method.primary
                          ? "bg-primary text-foreground"
                          : "bg-gray-100"
                      }`}
                    >
                      {method.icon}
                    </div>
                    <h3 className="text-foreground font-semibold mb-1">
                      {method.title}
                    </h3>
                    <p className="font-bold text-lg mb-1">{method.value}</p>
                    <p className="text-sm text-gray-600">
                      {method.description}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600 mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons
                  dans les plus brefs délais.
                </p>
                <Card className="p-6">
                  <ContactForm />
                </Card>
              </div>

              {/* Informations */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Informations pratiques
                </h2>

                {/* Horaires */}
                <Card className="p-6 mb-6">
                  <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Horaires d&apos;intervention
                  </h3>
                  <div className="space-y-3">
                    {horaires.map((horaire, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-600">{horaire.jour}</span>
                        <Badge
                          variant={
                            horaire.type === "urgence" ? "default" : "outline"
                          }
                          className={
                            horaire.type === "urgence" ? "bg-red-600" : ""
                          }
                        >
                          {horaire.heures}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Zone d'intervention */}
                <Card className="p-6 mb-6">
                  <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Zone d&apos;intervention
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Paris 1er",
                      "Paris 2e",
                      "Paris 3e",
                      "Paris 4e",
                      "Paris 5e",
                      "Paris 6e",
                      "Paris 7e",
                      "Paris 8e",
                      "Paris 9e",
                      "Paris 10e",
                      "Paris 11e",
                      "Paris 12e",
                      "Paris 13e",
                      "Paris 14e",
                      "Paris 15e",
                      "Paris 16e",
                      "Paris 17e",
                      "Paris 18e",
                      "Paris 19e",
                      "Paris 20e",
                    ].map((arr, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {arr}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    + Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne
                    (94)
                  </p>
                </Card>

                {/* Moyens de paiement */}
                <Card className="p-6">
                  <h3 className="text-foreground font-semibold mb-4">
                    Moyens de paiement acceptés
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Espèces", "CB", "Virement", "Chèque"].map((payment) => (
                      <Badge key={payment} variant="secondary">
                        {payment}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Paiement après intervention. Facture détaillée fournie.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="h-[400px] bg-gray-200">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Carte interactive Google Maps</p>
            <p className="text-sm text-gray-500">
              Zone d&apos;intervention : Paris et petite couronne
            </p>
          </div>
        </div>
      </section>

      {/* Urgence CTA */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">🚨 Urgence Nuisibles ?</h2>
            <p className="text-lg text-gray-700 mb-6">
              N&apos;attendez pas ! Appelez-nous immédiatement pour une
              intervention rapide.
            </p>
            <a
              href="tel:0663614157"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-foreground text-lg font-bold rounded-lg hover:bg-red-700 transition-colors"
            >
              <Phone className="mr-3" />
              06 63 61 41 57 - Appel Urgent
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
