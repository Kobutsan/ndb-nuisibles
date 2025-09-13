import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const devisSchema = z.object({
  propertyType: z.string(),
  surface: z.string().transform(Number),
  rooms: z.string().transform(Number),
  pestType: z.string(),
  infestationLevel: z.string(),
  firstTime: z.string().transform((val) => val === "true"),
  urgency: z.string(),
  preferredDate: z.string().optional(),
  preferredTime: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  zipCode: z.string(),
  estimatedPrice: z.string().transform(Number),
  comments: z.string().optional(),
  newsletter: z
    .string()
    .transform((val) => val === "true")
    .optional(),
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const data: any = {};

    // Extraction des données
    formData.forEach((value, key) => {
      if (key !== "photos") {
        data[key] = value;
      }
    });

    // Validation
    const validatedData = devisSchema.parse(data);

    // Traitement des photos (si présentes)
    const photos = formData.getAll("photos");
    const photoCount = photos.length;

    // Générer un ID unique pour le devis
    const devisId = `DEV-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Log pour suivi
    console.log("Nouveau devis:", {
      id: devisId,
      client: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      pestType: validatedData.pestType,
      urgency: validatedData.urgency,
      estimatedPrice: validatedData.estimatedPrice,
      photoCount,
      timestamp: new Date().toISOString(),
    });

    // Si urgence immédiate, log spécial
    if (validatedData.urgency === "immediate") {
      console.log("🚨 DEVIS URGENT:", {
        id: devisId,
        phone: validatedData.phone,
        address: validatedData.address,
      });
    }

    // En production, vous devriez :
    // 1. Sauvegarder les photos sur un service cloud (S3, Cloudinary, etc.)
    // 2. Envoyer un email au client et à l'équipe
    // 3. Sauvegarder en base de données
    // 4. Créer un PDF du devis

    // Simuler un délai de traitement
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: "Devis envoyé avec succès",
      devisId,
      estimatedPrice: validatedData.estimatedPrice,
    });
  } catch (error) {
    console.error("Devis API error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: error.errors },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Erreur lors de la création du devis" },
      { status: 500 },
    );
  }
}
