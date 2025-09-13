import { Metadata } from "next";
import { CheckCircle, Phone, Mail, Clock, FileText, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Devis Envoyé - NDB Nuisibles",
  description:
    "Votre demande de devis a été envoyée avec succès. Nous vous contacterons dans les plus brefs délais.",
  robots: "noindex, nofollow",
};

export default function DevisConfirmationPage() {
  const nextSteps = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email de confirmation",
      description:
        "Vous allez recevoir un email récapitulatif dans quelques minutes",
      delay: "2 minutes",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Devis détaillé",
      description: "Notre équipe prépare votre devis personnalisé",
      delay: "Sous 2h",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Contact téléphonique",
      description: "Un conseiller vous appellera pour planifier l'intervention",
      delay: "Sous 24h",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Intervention",
      description: "Nous intervenons selon vos disponibilités",
      delay: "À convenir",
    },
  ];

  return (
    <>
      {/* Success Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Demande envoyée avec succès !
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Votre demande de devis a bien été reçue. Nous vous contacterons
              très rapidement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" variant="outline">
                  <Home className="mr-2" />
                  Retour à l&apos;accueil
                </Button>
              </Link>
              <a href="tel:0663614157">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Phone className="mr-2" />
                  Appeler maintenant
                </Button>
              </a>
            </div>

            <Badge className="mt-8 bg-green-100 text-green-800">
              Numéro de référence : #DEV-{Date.now().toString().slice(-6)}
            </Badge>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Les prochaines étapes
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {nextSteps.map((step, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-foreground font-semibold mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {step.description}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {step.delay}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-primary">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Informations importantes
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-foreground font-semibold mb-3">
                    Ce que nous avons reçu :
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Vos coordonnées complètes</li>
                    <li>✓ La description de votre problème</li>
                    <li>✓ Vos disponibilités</li>
                    <li>✓ Les photos (si fournies)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-foreground font-semibold mb-3">
                    Ce que nous allons faire :
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Analyser votre demande en détail</li>
                    <li>✓ Préparer un devis personnalisé</li>
                    <li>✓ Vous proposer des créneaux d&apos;intervention</li>
                    <li>✓ Répondre à toutes vos questions</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Conseil :</strong> Vérifiez votre boîte mail (y
                  compris les spams) pour notre email de confirmation. Si vous
                  ne le recevez pas sous 10 minutes, n&apos;hésitez pas à nous
                  appeler.
                </p>
              </div>
            </Card>

            {/* Contact urgence */}
            <Card className="mt-8 p-6 bg-red-50 border-red-200">
              <h3 className="font-semibold mb-3 text-red-900">
                C&apos;est urgent ?
              </h3>
              <p className="text-sm text-red-800 mb-4">
                Si votre situation nécessite une intervention immédiate,
                n&apos;attendez pas et appelez-nous directement.
              </p>
              <a href="tel:0663614157">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Phone className="mr-2" />
                  06 63 61 41 57 - Urgence
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Questions fréquentes
            </h2>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-foreground font-semibold mb-2">
                  Je n&apos;ai pas reçu l&apos;email de confirmation
                </h3>
                <p className="text-gray-600">
                  Vérifiez votre dossier spam/courrier indésirable. Si vous ne
                  trouvez toujours pas l&apos;email après 10 minutes,
                  appelez-nous au 06 63 61 41 57.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-foreground font-semibold mb-2">
                  Puis-je modifier ma demande ?
                </h3>
                <p className="text-gray-600">
                  Bien sûr ! Appelez-nous ou répondez à l&apos;email de
                  confirmation pour apporter des modifications à votre demande.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-foreground font-semibold mb-2">
                  Le devis est-il définitif ?
                </h3>
                <p className="text-gray-600">
                  Le devis que vous recevrez est une estimation basée sur les
                  informations fournies. Le prix final sera confirmé après
                  inspection sur place, mais nous garantissons qu&apos;il ne
                  dépassera pas le devis sauf découverte d&apos;éléments non
                  mentionnés.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
