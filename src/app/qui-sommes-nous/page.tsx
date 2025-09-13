import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Award,
  Leaf,
  Users,
  Target,
  Heart,
  Phone,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Qui Sommes-Nous | NDB Nuisibles",
  description:
    "Découvrez NDB Nuisibles, votre expert en dératisation écologique à Paris. Une approche unique avec notre vélo cargo électrique.",
};

const valeurs = [
  {
    icon: Leaf,
    titre: "Écologie",
    description:
      "Engagement total pour l'environnement avec notre vélo cargo électrique",
  },
  {
    icon: Target,
    titre: "Efficacité",
    description:
      "Solutions rapides et durables pour tous vos problèmes de nuisibles",
  },
  {
    icon: Heart,
    titre: "Proximité",
    description:
      "Service personnalisé et relation de confiance avec nos clients",
  },
  {
    icon: Shield,
    titre: "Expertise",
    description: "Professionnels certifiés avec des années d'expérience",
  },
];

const certifications = [
  {
    nom: "Certibiocide",
    organisme: "Ministère de la Transition Écologique",
    annee: "2023",
  },
  {
    nom: "Certification HACCP",
    organisme: "Pour interventions en milieu alimentaire",
    annee: "2023",
  },
  {
    nom: "Assurance RC Pro",
    organisme: "Couverture complète jusqu'à 2M€",
    annee: "2024",
  },
];

export default function QuiSommesNousPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-brown/10 to-white py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="default" className="mb-4">
              Notre Histoire
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Qui Sommes-<span className="text-accent-brown">Nous</span> ?
            </h1>
            <p className="text-xl text-text-light">
              L&apos;expertise de la dératisation alliée à l&apos;innovation
              écologique
            </p>
          </div>
        </div>
      </section>

      {/* Histoire de l'entreprise */}
      <section className="section-padding">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Notre <span className="text-accent-brown">Histoire</span>
              </h2>
              <div className="space-y-4 text-text-light">
                <p className="text-foreground">
                  Fondée en 2022 par Nicolas et Ondina,{" "}
                  <strong>NDB Nuisibles</strong> est née d&apos;une vision
                  simple mais révolutionnaire : transformer le secteur de la
                  dératisation en alliant efficacité professionnelle et respect
                  total de l&apos;environnement.
                </p>
                <p className="text-foreground">
                  Après des années d&apos;expérience dans le domaine, nous avons
                  constaté que les méthodes traditionnelles généraient trop de
                  pollution. C&apos;est pourquoi nous sommes devenus les{" "}
                  <strong>premiers à Paris</strong> à utiliser un vélo cargo
                  électrique pour nos interventions.
                </p>
                <p className="text-foreground">
                  Cette approche unique nous permet d&apos;intervenir rapidement
                  dans tout Paris, d&apos;accéder aux zones difficiles, et
                  surtout de réduire notre empreinte carbone à zéro. Notre
                  engagement écologique ne s&apos;arrête pas là : nous utilisons
                  exclusivement des produits certifiés et respectueux de
                  l&apos;environnement.
                </p>
                <p className="text-foreground">
                  Aujourd&apos;hui, avec plus de{" "}
                  <strong>1850 interventions réussies</strong> et un taux de
                  satisfaction de 100%, nous sommes fiers d&apos;être reconnus
                  comme les leaders de la dératisation écologique à Paris.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button variant="default">Découvrir nos services</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Nous contacter</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
                  alt="Équipe NDB Nuisibles"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent-brown text-foreground rounded-xl p-6 shadow-xl">
                <div className="text-4xl font-bold">2+</div>
                <div className="text-sm">Années d&apos;expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-padding bg-bg-light">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Nos <span className="text-accent-brown">Valeurs</span>
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Les principes qui guident chacune de nos interventions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((valeur) => {
              const Icon = valeur.icon;
              return (
                <Card key={valeur.titre}>
                  <CardContent className="text-center py-8">
                    <div className="inline-flex p-4 rounded-full bg-accent-brown/10 mb-4">
                      <Icon className="w-8 h-8 text-accent-brown" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {valeur.titre}
                    </h3>
                    <p className="text-text-light text-sm">
                      {valeur.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="section-padding">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Notre <span className="text-accent-brown">Équipe</span>
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Des professionnels passionnés et certifiés à votre service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full bg-accent-brown/10 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-accent-brown" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Nicolas D.</h3>
                <Badge variant="default" className="mb-3">
                  Co-fondateur & Expert Technique
                </Badge>
                <p className="text-text-light text-sm">
                  Plus de 10 ans d&apos;expérience dans la lutte contre les
                  nuisibles. Certifié Certibiocide et passionné par
                  l&apos;innovation écologique.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full bg-accent-brown/10 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-accent-brown" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ondina B.</h3>
                <Badge variant="default" className="mb-3">
                  Co-fondatrice & Relation Client
                </Badge>
                <p className="text-text-light text-sm">
                  Experte en gestion client et développement durable. Garante de
                  la qualité de service et de la satisfaction client.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-bg-light">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Nos <span className="text-accent-brown">Certifications</span>
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Des garanties professionnelles pour votre tranquillité
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <Card key={cert.nom} className="text-center">
                <CardContent className="py-8">
                  <Award className="w-12 h-12 text-accent-brown mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{cert.nom}</h3>
                  <p className="text-sm text-text-light mb-2">
                    {cert.organisme}
                  </p>
                  <Badge
                    variant="default"
                    className="bg-green-100 text-green-800"
                  >
                    Valide {cert.annee}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-accent-brown to-primary-dark text-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Prêt à Découvrir la Différence NDB ?
            </h2>
            <p className="text-xl mb-8 text-foreground/90">
              Rejoignez les centaines de clients satisfaits qui ont choisi
              l&apos;expertise et l&apos;écologie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-accent-brown hover:bg-gray-100 border-white"
                >
                  Demander un devis gratuit
                </Button>
              </Link>
              <a href={`tel:${SITE_CONFIG.links.tel}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-foreground hover:bg-white hover:text-accent-brown"
                >
                  {SITE_CONFIG.links.telDisplay}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
