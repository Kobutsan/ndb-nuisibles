import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { logger } from "@/lib/logger";

// Schema de validation
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string(),
  subject: z.string(),
  urgency: z.string(),
  message: z.string(),
  address: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation
    const validatedData = contactSchema.parse(body);

    // En production, vous devriez configurer un service d'email comme SendGrid ou Resend
    // Pour l'instant, nous simulons l'envoi

    // Log pour suivi avec le logger centralisé
    logger.info("Contact form submission", {
      from: validatedData.email,
      urgency: validatedData.urgency,
      subject: validatedData.subject,
      timestamp: new Date().toISOString(),
    });

    // Si urgence, log spécial
    if (validatedData.urgency === "urgent") {
      logger.warn("⚠️ URGENT CONTACT", { phone: validatedData.phone });
    }

    // Simuler un délai d'envoi
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès",
    });
  } catch (error) {
    logger.error("Contact API error", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: error.errors },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 },
    );
  }
}
