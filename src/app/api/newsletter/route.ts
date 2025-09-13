import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Email invalide"),
  name: z.string().optional(),
});

// Simulation d'une base de données en mémoire pour le développement
const subscribers = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = newsletterSchema.parse(body);

    // Vérifier si déjà inscrit
    const isAlreadySubscribed = await checkSubscription(email);

    if (isAlreadySubscribed) {
      return NextResponse.json(
        { error: "Cet email est déjà inscrit à notre newsletter" },
        { status: 409 },
      );
    }

    // Ajouter à la liste
    await addToNewsletter(email, name);

    // Envoyer email de bienvenue (simulé)
    await sendWelcomeEmail(email, name);

    console.log("Newsletter subscription:", {
      email,
      name,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Inscription réussie ! Vérifiez votre boîte mail.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Erreur lors de l'inscription" },
      { status: 500 },
    );
  }
}

async function checkSubscription(email: string): Promise<boolean> {
  // En production, vérifier dans la base de données ou service email
  return subscribers.has(email);
}

async function addToNewsletter(email: string, name?: string) {
  // En production, ajouter à Mailchimp, SendGrid, etc.
  subscribers.add(email);

  // Simuler un délai d'API
  await new Promise((resolve) => setTimeout(resolve, 100));
}

async function sendWelcomeEmail(email: string, name?: string) {
  // En production, envoyer un vrai email de bienvenue
  console.log("Welcome email sent to:", email);

  // Simuler un délai d'envoi
  await new Promise((resolve) => setTimeout(resolve, 100));
}
