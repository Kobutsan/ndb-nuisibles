"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, CheckCircle } from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

// Schema de validation
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères"),

  email: z.string().email("Email invalide").min(5, "Email requis"),

  phone: z
    .string()
    .regex(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      "Numéro de téléphone invalide",
    )
    .transform((val) => val.replace(/\s/g, "")),

  subject: z.enum(["deratisation", "punaises", "cafards", "guepes", "autre"], {
    errorMap: () => ({ message: "Veuillez sélectionner un sujet" }),
  }),

  urgency: z.enum(["urgent", "normal", "preventif"], {
    errorMap: () => ({ message: "Veuillez indiquer l'urgence" }),
  }),

  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(1000, "Le message ne peut pas dépasser 1000 caractères"),

  address: z.string().optional(),

  consent: z
    .boolean()
    .refine((val) => val === true, "Vous devez accepter les conditions"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      urgency: "normal",
    },
  });

  const urgency = watch("urgency");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Erreur lors de l'envoi");

      setIsSuccess(true);
      reset();
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });

      // Si urgent, afficher le numéro
      if (data.urgency === "urgent") {
        toast({
          title: "Urgence détectée",
          description:
            "Pour une urgence, appelez directement le 06 63 61 41 57",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Erreur lors de l'envoi. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Message envoyé !</h3>
        <p className="text-gray-600 mb-6">
          Nous vous répondrons dans les plus brefs délais.
        </p>
        <Button onClick={() => setIsSuccess(false)}>
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Urgence Banner */}
      {urgency === "urgent" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 font-medium">
            🚨 Pour une urgence, appelez directement le 06 63 61 41 57
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Nom */}
        <div>
          <Label htmlFor="name">Nom complet *</Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Jean Dupont"
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="jean@example.com"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Téléphone */}
        <div>
          <Label htmlFor="phone">Téléphone *</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="06 12 34 56 78"
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Sujet */}
        <div>
          <Label htmlFor="subject">Type de nuisible *</Label>
          <Select onValueChange={(value) => setValue("subject", value as any)}>
            <SelectTrigger className={errors.subject ? "border-red-500" : ""}>
              <SelectValue placeholder="Sélectionnez..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deratisation">Rats/Souris</SelectItem>
              <SelectItem value="punaises">Punaises de lit</SelectItem>
              <SelectItem value="cafards">Cafards/Blattes</SelectItem>
              <SelectItem value="guepes">Guêpes/Frelons</SelectItem>
              <SelectItem value="autre">Autre</SelectItem>
            </SelectContent>
          </Select>
          {errors.subject && (
            <p className="text-red-500 text-xs mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      {/* Urgence */}
      <div>
        <Label>Niveau d&apos;urgence *</Label>
        <RadioGroup
          defaultValue="normal"
          onValueChange={(value) => setValue("urgency", value as any)}
          className="flex gap-4 mt-2"
        >
          <div className="flex items-center">
            <RadioGroupItem value="urgent" id="urgent" />
            <Label
              htmlFor="urgent"
              className="ml-2 text-red-600 font-medium cursor-pointer"
            >
              Urgent (sous 24h)
            </Label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem value="normal" id="normal" />
            <Label htmlFor="normal" className="ml-2 cursor-pointer">
              Normal (sous 48h)
            </Label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem value="preventif" id="preventif" />
            <Label htmlFor="preventif" className="ml-2 cursor-pointer">
              Préventif
            </Label>
          </div>
        </RadioGroup>
        {errors.urgency && (
          <p className="text-red-500 text-xs mt-1">{errors.urgency.message}</p>
        )}
      </div>

      {/* Adresse */}
      <div>
        <Label htmlFor="address">Adresse (optionnel)</Label>
        <Input
          id="address"
          {...register("address")}
          placeholder="123 rue de la Paix, 75001 Paris"
        />
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message">Décrivez votre problème *</Label>
        <Textarea
          id="message"
          {...register("message")}
          rows={5}
          placeholder="Décrivez votre situation, la zone affectée, depuis combien de temps..."
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Consent */}
      <div className="flex items-start space-x-2">
        <Checkbox
          id="consent"
          onCheckedChange={(checked) => setValue("consent", checked as boolean)}
        />
        <Label htmlFor="consent" className="text-sm text-gray-600">
          J&apos;accepte que mes données soient utilisées pour traiter ma
          demande. *
        </Label>
      </div>
      {errors.consent && (
        <p className="text-red-500 text-xs mt-1">{errors.consent.message}</p>
      )}

      {/* Submit */}
      <div className="flex justify-center">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="min-w-[200px]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Envoyer le message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
