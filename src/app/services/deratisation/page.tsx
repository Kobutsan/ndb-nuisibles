import { Metadata } from "next";
import Link from "next/link";
import { Phone, FileText, Shield, Clock, Zap, Leaf } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dératisation Paris",
  description:
    "Service de dératisation professionnel à Paris. Élimination efficace des rats et souris avec notre approche écologique en vélo cargo.",
};

export default function DeratisationPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-accent-brown/10 to-white py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Dératisation{" "}
              <span className="text-accent-brown">Professionnelle</span>
            </h1>
            <p className="text-xl text-neutral-dark mb-8">
              Élimination définitive des rats et souris avec notre approche
              écologique unique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.links.tel}`} className="btn-urgent">
                <Phone className="w-5 h-5 mr-2" />
                Intervention Urgente
              </a>
              <Link href="/devis" className="btn-secondary">
                <FileText className="w-5 h-5 mr-2" />
                Devis Gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Les Dangers des{" "}
                <span className="text-accent-brown">Rongeurs</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">
                      Risques sanitaires
                    </h3>
                    <p className="text-neutral-dark">
                      Transmission de maladies graves (leptospirose,
                      salmonellose, hantavirus)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">
                      Dégâts matériels
                    </h3>
                    <p className="text-neutral-dark">
                      Détérioration des câbles électriques, isolation,
                      tuyauterie
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">
                      Contamination alimentaire
                    </h3>
                    <p className="text-neutral-dark">
                      Souillure des denrées alimentaires et surfaces de
                      préparation
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">
                      Nuisances sonores
                    </h3>
                    <p className="text-neutral-dark">
                      Bruits dans les murs, plafonds et sous les planchers
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-accent-brown/5 rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-4 text-accent-brown">
                Signes d&apos;Infestation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="text-2xl">💩</span>
                  <span>Présence d&apos;excréments</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-2xl">🕳️</span>
                  <span>Trous dans les murs ou le mobilier</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-2xl">👣</span>
                  <span>Traces de passages (empreintes, traînées)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-2xl">🦷</span>
                  <span>Marques de dents sur les matériaux</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-2xl">👃</span>
                  <span>Odeur d&apos;ammoniaque caractéristique</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-light">
        <div className="container px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Notre <span className="text-accent-brown">Méthode</span>{" "}
            d&apos;Intervention
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Shield className="w-12 h-12 text-accent-brown mb-4" />
              <h3 className="text-xl font-semibold mb-2">Diagnostic Complet</h3>
              <p className="text-neutral-dark">
                Identification des points d&apos;entrée, évaluation de
                l&apos;ampleur de l&apos;infestation
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Leaf className="w-12 h-12 text-success mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Traitement Écologique
              </h3>
              <p className="text-neutral-dark">
                Utilisation de produits certifiés, respectueux de
                l&apos;environnement et de votre santé
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Zap className="w-12 h-12 text-warning mb-4" />
              <h3 className="text-xl font-semibold mb-2">Action Rapide</h3>
              <p className="text-neutral-dark">
                Intervention avec notre vélo cargo pour une arrivée rapide sur
                site
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Clock className="w-12 h-12 text-accent-brown mb-4" />
              <h3 className="text-xl font-semibold mb-2">Suivi Régulier</h3>
              <p className="text-neutral-dark">
                Visites de contrôle pour garantir l&apos;efficacité du
                traitement
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Shield className="w-12 h-12 text-success mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prévention</h3>
              <p className="text-neutral-dark">
                Conseils et solutions pour éviter toute nouvelle infestation
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <FileText className="w-12 h-12 text-accent-brown mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rapport Détaillé</h3>
              <p className="text-neutral-dark">
                Documentation complète de l&apos;intervention avec photos et
                recommandations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-accent-brown to-accent-brown-light text-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Intervention d&apos;Urgence 24/7
            </h2>
            <p className="text-xl mb-8 text-foreground/90">
              Ne laissez pas les rongeurs s&apos;installer. Contactez-nous
              immédiatement pour une intervention rapide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-4xl font-bold mb-2">30min</div>
                <p className="text-sm text-foreground/80">
                  Temps de réponse moyen
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-sm text-foreground/80">
                  Taux de satisfaction
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Garantie</div>
                <p className="text-sm text-foreground/80">Résultat assuré</p>
              </div>
            </div>
            <a
              href={`tel:${SITE_CONFIG.links.tel}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent-brown font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Appeler Maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
