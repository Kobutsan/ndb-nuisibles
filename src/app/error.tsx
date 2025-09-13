'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home, RotateCcw } from 'lucide-react';
import { logger } from '@/lib/logger';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error('Erreur capturée par error boundary', {
      message: error.message,
      digest: error.digest
    });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="text-center max-w-md">
        <AlertTriangle className="h-20 w-20 text-warning mx-auto mb-6 animate-pulse" />
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Oops ! Un problème est survenu
        </h1>
        <p className="text-gray-600 mb-8">
          Ne vous inquiétez pas, nos équipes sont sur le coup. 
          Vous pouvez réessayer ou retourner à l&apos;accueil.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-accent-brown hover:bg-accent-brown/90 flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Réessayer
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Accueil
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-8">
          Besoin d&apos;aide immédiate ? Appelez-nous au{' '}
          <a href="tel:0663614157" className="text-accent-brown font-semibold">
            06 63 61 41 57
          </a>
        </p>
      </div>
    </div>
  );
}