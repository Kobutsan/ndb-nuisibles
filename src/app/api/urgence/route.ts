import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const urgenceSchema = z.object({
  phone: z.string(),
  message: z.string(),
  location: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phone, message, location } = urgenceSchema.parse(body);

    // En production, utiliser Twilio pour envoyer WhatsApp/SMS
    // Pour l'instant, simulation

    console.log("🚨 URGENCE NDB Nuisibles:", {
      client: phone,
      localisation: location,
      message: message,
      timestamp: new Date().toISOString(),
    });

    // Simuler l'envoi WhatsApp à l'équipe
    await simulateWhatsAppToTeam({
      from: phone,
      location,
      message,
    });

    // Simuler SMS de confirmation au client
    await simulateSMSToClient(phone);

    return NextResponse.json({
      success: true,
      message:
        "Urgence transmise ! Nous vous contactons dans quelques minutes.",
    });
  } catch (error) {
    console.error("Urgence API error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: error.errors },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'urgence" },
      { status: 500 },
    );
  }
}

async function simulateWhatsAppToTeam(data: any) {
  // En production : Twilio WhatsApp API
  console.log("WhatsApp envoyé à l'équipe:", {
    message: `🚨 URGENCE NDB Nuisibles
Client: ${data.from}
Localisation: ${data.location}
Message: ${data.message}
Répondre rapidement!`,
  });

  await new Promise((resolve) => setTimeout(resolve, 200));
}

async function simulateSMSToClient(phone: string) {
  // En production : Twilio SMS API
  console.log("SMS envoyé au client:", {
    to: phone,
    message:
      "NDB Nuisibles: Votre demande urgente a été transmise. Nous vous contactons dans quelques minutes.",
  });

  await new Promise((resolve) => setTimeout(resolve, 200));
}
