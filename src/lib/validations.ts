import { z } from 'zod';

// Schémas réutilisables
const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
const postalCodeRegex = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;

export const contactSchema = z.object({
  name: z.string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères'),
  email: z.string()
    .email('Email invalide'),
  phone: z.string()
    .regex(phoneRegex, 'Numéro de téléphone invalide'),
  subject: z.string()
    .min(2, 'Le sujet doit contenir au moins 2 caractères'),
  urgency: z.string(),
  message: z.string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères'),
  address: z.string().optional(),
  honeypot: z.string().optional() // Anti-spam
});

export const devisSchema = z.object({
  // Informations personnelles
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string(),
  
  // Adresse
  address: z.string().min(5).max(200),
  zipCode: z.string(),
  
  // Propriété
  propertyType: z.string(),
  surface: z.string().transform(Number),
  rooms: z.string().transform(Number),
  
  // Service
  pestType: z.string(),
  infestationLevel: z.string(),
  firstTime: z.string().transform((val) => val === "true"),
  
  // Timing
  urgency: z.string(),
  preferredDate: z.string().optional(),
  preferredTime: z.string(),
  
  // Prix et options
  estimatedPrice: z.string().transform(Number),
  comments: z.string().optional(),
  newsletter: z.string().transform((val) => val === "true").optional()
});

export const urgenceSchema = z.object({
  phone: z.string()
    .regex(phoneRegex, 'Numéro de téléphone invalide'),
  message: z.string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(500, 'Le message ne peut pas dépasser 500 caractères'),
  location: z.string()
    .min(5, 'L\'adresse doit contenir au moins 5 caractères'),
  coordinates: z.object({
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180)
  }).optional()
});

export const newsletterSchema = z.object({
  email: z.string().email('Email invalide'),
  name: z.string().optional(),
  preferences: z.array(z.string()).optional()
});