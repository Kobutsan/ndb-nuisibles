import { Loader2 } from 'lucide-react';

export default function RootLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="text-center">
        <div className="relative">
          <Loader2 className="h-16 w-16 animate-spin text-accent-brown mx-auto" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 bg-accent-brown/20 rounded-full animate-ping" />
          </div>
        </div>
        <p className="mt-4 text-gray-600 font-medium">Chargement en cours...</p>
        <p className="text-sm text-gray-500 mt-2">NDB Nuisibles</p>
      </div>
    </div>
  );
}