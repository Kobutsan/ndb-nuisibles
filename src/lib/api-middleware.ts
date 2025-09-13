import { NextResponse } from 'next/server';
import { z } from 'zod';
import { logger } from '@/lib/logger';

export function withValidation<T>(
  schema: z.ZodSchema<T>,
  handler: (data: T, request: Request) => Promise<NextResponse>
) {
  return async (request: Request) => {
    try {
      const body = await request.json();
      const validatedData = schema.parse(body);
      
      return await handler(validatedData, request);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        logger.warn('Validation échouée', error.errors);
        return NextResponse.json(
          {
            success: false,
            message: 'Données invalides',
            errors: error.errors
          },
          { status: 400 }
        );
      }
      
      logger.error('Erreur API non gérée', error);
      return NextResponse.json(
        {
          success: false,
          message: 'Une erreur est survenue'
        },
        { status: 500 }
      );
    }
  };
}