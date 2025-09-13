import { Metadata } from "next";
import { Check, Phone, Calculator, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactCTA from "@/components/sections/ContactCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarifs Dératisation Paris | Prix Transparents - NDB Nuisibles",
  description:
    "Découvrez nos tarifs de dératisation et désinsectisation à Paris. Prix transparents, devis gratuit, intervention rapide. À partir de 150€.",
  keywords:
    "tarifs dératisation, prix désinsectisation, devis gratuit, tarif punaises de lit",
  openGraph: {
    title: "Nos Tarifs - NDB Nuisibles",
    description: "Tarifs transparents pour tous nos services anti-nuisibles.",
    type: "website",
  },
  alternates: {
    canonical: "https://ndbnuisibles.com/tarifs",
  },
};

export default function TarifsPage() {
  const tarifsParticuliers = [
    {
      service: "Dératisation",
      studio: "150€",
      t2: "200€",
      t3: "250€",
      maison: "Sur devis",
      garantie: "3 mois",
    },
    {
      service: "Punaises de lit",
      studio: "250€",
      t2: "350€",
      t3: "450€",
      maison: "Sur devis",
      garantie: "6 mois",
    },
    {
      service: "Cafards/Blattes",
      studio: "180€",
      t2: "230€",
      t3: "280€",
      maison: "Sur devis",
      garantie: "3 mois",
    },
    {
      service: "Fourmis",
      studio: "120€",
      t2: "150€",
      t3: "180€",
      maison: "Sur devis",
      garantie: "2 mois",
    },
    {
      service: "Guêpes/Frelons",
      studio: "150€",
      t2: "150€",
      t3: "150€",
      maison: "200€",
      garantie: "Immédiate",
    },
  ];

  const tarifsProfessionnels = [
    {
      name: "Contrat Essentiel",
      price: "100€/mois",
      description: "Pour les petits commerces",
      features: [
        "2 passages préventifs/an",
        "Intervention sous 24h",
        "Certificat de passage",
        "Rapport d'intervention",
      ],
    },
    {
      name: "Contrat Premium",
      price: "200€/mois",
      description: "Pour restaurants et hôtels",
      features: [
        "4 passages préventifs/an",
        "Intervention sous 4h",
        "Rapports HACCP",
        "Formation personnel",
        "Audit annuel",
      ],
      popular: true,
    },
    {
      name: "Contrat Sur-Mesure",
      price: "Sur devis",
      description: "Grandes surfaces",
      features: [
        "Fréquence personnalisée",
        "Intervention immédiate",
        "Consultant dédié",
        "Reporting complet",
        "Solutions innovantes",
      ],
    },
  ];

  const supplements = [
    { label: "Urgence week-end", price: "+50%" },
    { label: "Intervention nuit (20h-7h)", price: "+30%" },
    { label: "Jour férié", price: "+75%" },
    { label: "Traitement préventif", price: "-20%" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <Badge className="mb-4">Prix transparents</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nos <span className="text-primary">Tarifs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des prix justes et transparents pour tous nos services. Devis
            gratuit et sans engagement.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="particuliers" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="particuliers">Particuliers</TabsTrigger>
              <TabsTrigger value="professionnels">Professionnels</TabsTrigger>
            </TabsList>

            {/* Tarifs Particuliers */}
            <TabsContent value="particuliers" className="mt-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 font-semibold">Service</th>
                      <th className="text-center p-4 font-semibold">Studio</th>
                      <th className="text-center p-4 font-semibold">T2</th>
                      <th className="text-center p-4 font-semibold">T3+</th>
                      <th className="text-center p-4 font-semibold">Maison</th>
                      <th className="text-center p-4 font-semibold">
                        Garantie
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tarifsParticuliers.map((tarif, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-4 font-medium">{tarif.service}</td>
                        <td className="text-center p-4">{tarif.studio}</td>
                        <td className="text-center p-4">{tarif.t2}</td>
                        <td className="text-center p-4">{tarif.t3}</td>
                        <td className="text-center p-4">{tarif.maison}</td>
                        <td className="text-center p-4">
                          <Badge variant="outline">{tarif.garantie}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5 text-blue-600" />
                    Ce qui est inclus
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-sm">
                        Diagnostic complet gratuit
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-sm">Produits certifiés inclus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-sm">Garantie de résultat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-sm">Conseils de prévention</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-primary" />
                    Suppléments éventuels
                  </h3>
                  <ul className="space-y-2">
                    {supplements.map((supp, index) => (
                      <li key={index} className="flex justify-between text-sm">
                        <span>{supp.label}</span>
                        <span className="font-semibold">{supp.price}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </TabsContent>

            {/* Tarifs Professionnels */}
            <TabsContent value="professionnels" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                {tarifsProfessionnels.map((contrat, index) => (
                  <Card
                    key={index}
                    className={`p-6 relative ${contrat.popular ? "border-primary shadow-lg" : ""}`}
                  >
                    {contrat.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                        Populaire
                      </Badge>
                    )}
                    <h3 className="text-xl font-semibold mb-2">
                      {contrat.name}
                    </h3>
                    <p className="text-3xl font-bold text-primary mb-2">
                      {contrat.price}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      {contrat.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {contrat.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full"
                      variant={contrat.popular ? "default" : "outline"}
                    >
                      Demander un devis
                    </Button>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 p-6 bg-blue-50 border-blue-200">
                <h3 className="text-foreground font-semibold mb-2">
                  💼 Avantages Professionnels
                </h3>
                <p className="text-sm text-gray-700">
                  Tous nos contrats professionnels incluent : facturation
                  mensuelle, interlocuteur dédié, intervention prioritaire,
                  certificats de passage, et conformité réglementaire garantie.
                </p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Calculateur */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d&apos;un devis personnalisé ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Utilisez notre simulateur pour obtenir une estimation immédiate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis">
                <Button size="lg" className="min-w-[200px]">
                  <Calculator className="mr-2" />
                  Calculer mon devis
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="min-w-[200px]">
                <Phone className="mr-2" />
                06 63 61 41 57
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Informations importantes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Informations Importantes
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-foreground font-semibold mb-3">
                  Moyens de paiement
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Espèces</li>
                  <li>• Carte bancaire</li>
                  <li>• Virement</li>
                  <li>• Chèque</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-foreground font-semibold mb-3">
                  Conditions
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Devis gratuit sur place</li>
                  <li>• Paiement après intervention</li>
                  <li>• TVA incluse dans les prix</li>
                  <li>• Facture détaillée fournie</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-foreground font-semibold mb-3">
                  Zone d&apos;intervention
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Paris (tous arrondissements)</li>
                  <li>• Hauts-de-Seine (92)</li>
                  <li>• Seine-Saint-Denis (93)</li>
                  <li>• Val-de-Marne (94)</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-foreground font-semibold mb-3">
                  Garanties
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Résultat garanti</li>
                  <li>• Produits certifiés</li>
                  <li>• Assurance RC Pro</li>
                  <li>• Techniciens certifiés</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA
        title="Obtenez votre devis gratuit"
        description="Contactez-nous pour une estimation personnalisée"
        primaryCTA="Devis en ligne"
        secondaryCTA="Appeler maintenant"
      />
    </>
  );
}
