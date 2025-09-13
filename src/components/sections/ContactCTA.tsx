import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactCTAProps {
  title: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
}

export default function ContactCTA({
  title,
  description,
  primaryCTA,
  secondaryCTA,
}: ContactCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl mb-8 text-foreground/90">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0663614157">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Phone className="mr-2" />
                {primaryCTA}
              </Button>
            </a>
            <Link href="/devis">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-foreground hover:bg-white hover:text-primary"
              >
                <FileText className="mr-2" />
                {secondaryCTA}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
