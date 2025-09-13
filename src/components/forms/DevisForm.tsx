"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Home,
  Bug,
  Calendar,
  User,
  CheckCircle,
  Upload,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

// Schema multi-step
const devisSchema = z.object({
  // Step 1: Type de bien
  propertyType: z.enum(["appartement", "maison", "local_commercial", "autre"]),
  surface: z
    .number()
    .min(10, "Surface minimum 10m²")
    .max(1000, "Surface maximum 1000m²"),
  rooms: z.number().min(1).max(20),

  // Step 2: Nuisible
  pestType: z.enum([
    "rats",
    "souris",
    "punaises",
    "cafards",
    "guepes",
    "fourmis",
    "autre",
  ]),
  infestationLevel: z.enum(["leger", "moyen", "severe"]),
  firstTime: z.boolean(),

  // Step 3: Timing
  urgency: z.enum(["immediate", "24h", "48h", "semaine", "preventif"]),
  preferredDate: z.string().optional(),
  preferredTime: z.enum(["matin", "apres-midi", "soir", "flexible"]),

  // Step 4: Contact
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/),
  address: z.string().min(5),
  zipCode: z.string().regex(/^[0-9]{5}$/),

  // Options
  photos: z.array(z.instanceof(File)).optional(),
  comments: z.string().optional(),
  newsletter: z.boolean().default(false),
});

type DevisFormData = z.infer<typeof devisSchema>;

const steps = [
  { id: "property", title: "Votre bien", icon: Home },
  { id: "pest", title: "Le problème", icon: Bug },
  { id: "timing", title: "Quand", icon: Calendar },
  { id: "contact", title: "Vos coordonnées", icon: User },
];

export default function DevisForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const { toast } = useToast();

  const form = useForm<DevisFormData>({
    resolver: zodResolver(devisSchema),
    mode: "onChange",
    defaultValues: {
      firstTime: true,
      newsletter: false,
      preferredTime: "flexible",
    },
  });

  // Calcul estimation prix
  const calculateEstimate = (data: Partial<DevisFormData>) => {
    let basePrice = 150;

    // Ajustement surface
    if (data.surface) {
      if (data.surface > 50) basePrice += 50;
      if (data.surface > 100) basePrice += 100;
    }

    // Ajustement nuisible
    const pestPrices: Record<string, number> = {
      punaises: 250,
      cafards: 180,
      rats: 150,
      souris: 120,
      guepes: 120,
      fourmis: 100,
      autre: 150,
    };

    if (data.pestType) {
      basePrice = pestPrices[data.pestType];
    }

    // Ajustement niveau infestation
    if (data.infestationLevel === "moyen") basePrice *= 1.3;
    if (data.infestationLevel === "severe") basePrice *= 1.6;

    // Ajustement urgence
    if (data.urgency === "immediate") basePrice *= 1.5;
    if (data.urgency === "24h") basePrice *= 1.2;

    setEstimatedPrice(Math.round(basePrice));
  };

  const nextStep = async () => {
    const fields = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fields as any);

    if (isValid) {
      calculateEstimate(form.getValues());
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const getFieldsForStep = (step: number) => {
    switch (step) {
      case 0:
        return ["propertyType", "surface", "rooms"];
      case 1:
        return ["pestType", "infestationLevel", "firstTime"];
      case 2:
        return ["urgency", "preferredDate", "preferredTime"];
      case 3:
        return ["name", "email", "phone", "address", "zipCode"];
      default:
        return [];
    }
  };

  const onSubmit = async (data: DevisFormData) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === "photos" && value) {
          (value as File[]).forEach((file) => {
            formData.append("photos", file);
          });
        } else {
          formData.append(key, String(value));
        }
      });

      formData.append("estimatedPrice", String(estimatedPrice));

      const response = await fetch("/api/devis", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Erreur");

      toast({
        title: "Devis envoyé !",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });

      // Redirection vers page de confirmation
      setTimeout(() => {
        window.location.href = "/devis/confirmation";
      }, 2000);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex-1 flex flex-col items-center ${
                index <= currentStep ? "text-primary" : "text-gray-400"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  index <= currentStep
                    ? "bg-primary text-foreground"
                    : "bg-gray-200"
                }`}
              >
                <step.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium hidden sm:block">
                {step.title}
              </span>
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Steps */}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {/* Step 1: Property */}
          {currentStep === 0 && (
            <motion.div
              key="property"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold mb-6">
                Informations sur votre bien
              </h2>

              <div>
                <Label>Type de bien *</Label>
                <RadioGroup
                  onValueChange={(value) =>
                    form.setValue("propertyType", value as any)
                  }
                  className="grid grid-cols-2 gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2 border rounded-lg p-3">
                    <RadioGroupItem value="appartement" id="appartement" />
                    <Label htmlFor="appartement" className="cursor-pointer">
                      Appartement
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-3">
                    <RadioGroupItem value="maison" id="maison" />
                    <Label htmlFor="maison" className="cursor-pointer">
                      Maison
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-3">
                    <RadioGroupItem
                      value="local_commercial"
                      id="local_commercial"
                    />
                    <Label
                      htmlFor="local_commercial"
                      className="cursor-pointer"
                    >
                      Local commercial
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-3">
                    <RadioGroupItem value="autre" id="autre_bien" />
                    <Label htmlFor="autre_bien" className="cursor-pointer">
                      Autre
                    </Label>
                  </div>
                </RadioGroup>
                {form.formState.errors.propertyType && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.propertyType.message}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="surface">Surface (m²) *</Label>
                  <Input
                    id="surface"
                    type="number"
                    {...form.register("surface", { valueAsNumber: true })}
                    placeholder="50"
                  />
                  {form.formState.errors.surface && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.surface.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="rooms">Nombre de pièces *</Label>
                  <Input
                    id="rooms"
                    type="number"
                    {...form.register("rooms", { valueAsNumber: true })}
                    placeholder="3"
                  />
                  {form.formState.errors.rooms && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.rooms.message}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Pest */}
          {currentStep === 1 && (
            <motion.div
              key="pest"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold mb-6">
                Quel est votre problème ?
              </h2>

              <div>
                <Label>Type de nuisible *</Label>
                <Select
                  onValueChange={(value) =>
                    form.setValue("pestType", value as any)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le type de nuisible" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rats">Rats</SelectItem>
                    <SelectItem value="souris">Souris</SelectItem>
                    <SelectItem value="punaises">Punaises de lit</SelectItem>
                    <SelectItem value="cafards">Cafards</SelectItem>
                    <SelectItem value="guepes">Guêpes</SelectItem>
                    <SelectItem value="fourmis">Fourmis</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.pestType && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.pestType.message}
                  </p>
                )}
              </div>

              <div>
                <Label>Niveau d&apos;infestation *</Label>
                <RadioGroup
                  onValueChange={(value) =>
                    form.setValue("infestationLevel", value as any)
                  }
                  className="space-y-2 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="leger" id="leger" />
                    <Label htmlFor="leger" className="cursor-pointer">
                      Léger - Quelques individus observés
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="moyen" id="moyen" />
                    <Label htmlFor="moyen" className="cursor-pointer">
                      Moyen - Présence régulière
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="severe" id="severe" />
                    <Label htmlFor="severe" className="cursor-pointer">
                      Sévère - Infestation importante
                    </Label>
                  </div>
                </RadioGroup>
                {form.formState.errors.infestationLevel && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.infestationLevel.message}
                  </p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="firstTime"
                  onCheckedChange={(checked) =>
                    form.setValue("firstTime", checked as boolean)
                  }
                  defaultChecked={true}
                />
                <Label htmlFor="firstTime" className="cursor-pointer">
                  C&apos;est la première fois que j&apos;ai ce problème
                </Label>
              </div>
            </motion.div>
          )}

          {/* Step 3: Timing */}
          {currentStep === 2 && (
            <motion.div
              key="timing"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold mb-6">
                Quand souhaitez-vous l&apos;intervention ?
              </h2>

              <div>
                <Label>Urgence *</Label>
                <RadioGroup
                  onValueChange={(value) =>
                    form.setValue("urgency", value as any)
                  }
                  className="space-y-2 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="immediate" id="immediate" />
                    <Label
                      htmlFor="immediate"
                      className="cursor-pointer text-red-600 font-medium"
                    >
                      Immédiat - Urgence absolue
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="24h" id="24h" />
                    <Label htmlFor="24h" className="cursor-pointer">
                      Sous 24h
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="48h" id="48h" />
                    <Label htmlFor="48h" className="cursor-pointer">
                      Sous 48h
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="semaine" id="semaine" />
                    <Label htmlFor="semaine" className="cursor-pointer">
                      Dans la semaine
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="preventif" id="preventif" />
                    <Label htmlFor="preventif" className="cursor-pointer">
                      Préventif - Pas urgent
                    </Label>
                  </div>
                </RadioGroup>
                {form.formState.errors.urgency && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.urgency.message}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="preferredDate">
                    Date souhaitée (optionnel)
                  </Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    {...form.register("preferredDate")}
                  />
                </div>

                <div>
                  <Label>Créneau préféré *</Label>
                  <Select
                    onValueChange={(value) =>
                      form.setValue("preferredTime", value as any)
                    }
                    defaultValue="flexible"
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="matin">Matin (8h-12h)</SelectItem>
                      <SelectItem value="apres-midi">
                        Après-midi (12h-18h)
                      </SelectItem>
                      <SelectItem value="soir">Soir (18h-20h)</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Afficher estimation */}
              {estimatedPrice && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-foreground font-semibold mb-2">
                    Estimation tarifaire
                  </h3>
                  <p className="text-3xl font-bold text-green-600">
                    À partir de {estimatedPrice}€
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    * Prix indicatif, devis définitif après inspection
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* Step 4: Contact */}
          {currentStep === 3 && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold mb-6">Vos coordonnées</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    {...form.register("name")}
                    placeholder="Jean Dupont"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    placeholder="jean@example.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...form.register("phone")}
                    placeholder="06 12 34 56 78"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="zipCode">Code postal *</Label>
                  <Input
                    id="zipCode"
                    {...form.register("zipCode")}
                    placeholder="75001"
                  />
                  {form.formState.errors.zipCode && (
                    <p className="text-red-500 text-xs mt-1">
                      {form.formState.errors.zipCode.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="address">Adresse complète *</Label>
                <Input
                  id="address"
                  {...form.register("address")}
                  placeholder="123 rue de la Paix, 75001 Paris"
                />
                {form.formState.errors.address && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.address.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="comments">Commentaires (optionnel)</Label>
                <Textarea
                  id="comments"
                  {...form.register("comments")}
                  rows={3}
                  placeholder="Informations complémentaires..."
                />
              </div>

              {/* Upload photos */}
              <div>
                <Label>Photos (optionnel)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mt-2">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600">
                    Ajoutez des photos pour un devis plus précis
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    id="photos"
                    onChange={(e) => {
                      if (e.target.files) {
                        form.setValue("photos", Array.from(e.target.files));
                      }
                    }}
                  />
                  <label
                    htmlFor="photos"
                    className="mt-2 inline-block px-4 py-2 bg-primary text-foreground rounded cursor-pointer hover:bg-primary/90"
                  >
                    Choisir des photos
                  </label>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  onCheckedChange={(checked) =>
                    form.setValue("newsletter", checked as boolean)
                  }
                />
                <Label htmlFor="newsletter" className="cursor-pointer text-sm">
                  Je souhaite recevoir des conseils et offres par email
                </Label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Précédent
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button type="button" onClick={nextStep}>
              Suivant
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Recevoir mon devis
                  <CheckCircle className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
