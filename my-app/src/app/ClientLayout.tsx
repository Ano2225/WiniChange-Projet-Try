'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { twMerge } from "tailwind-merge";

type LoadingScreenProps = {
  progress: number;
  status: string;
};

const LoadingScreen = ({ progress, status }: LoadingScreenProps) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-gray-50 to-white z-[9999] flex flex-col items-center justify-center">
      {/* Logo avec animation améliorée */}
      <div className="relative w-60 h-36 mb-8">
        <Image
          src="/images/log1.png"
          alt="WiniChange"
          fill
          className="object-contain animate-pulse"
          priority
        />
      </div>

      {/* Barre de progression améliorée */}
      <div className="w-64 h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-[#126e51] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Status du chargement */}
      <p className="text-sm text-gray-600 animate-fade-in">
        {status}
      </p>
    </div>
  );
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initialisation...");

  // Gestionnaire de progression optimisé
  const updateProgress = useCallback((newProgress: number, newStatus: string) => {
    setProgress(newProgress);
    setStatus(newStatus);
  }, []);

  // Fonction pour charger les ressources avec suivi
  const loadResources = useCallback(async () => {
    try {
      // 1. Initialisation
      updateProgress(0, "Initialisation...");
      await new Promise(resolve => setTimeout(resolve, 300));

      // 2. Chargement des images critiques
      const criticalImages = Array.from(document.querySelectorAll('img[data-critical="true"]'));
      const totalResources = criticalImages.length;
      let loadedResources = 0;

      updateProgress(10, "Chargement des ressources essentielles...");

      await Promise.all(
        criticalImages.map(
          (img) =>
            new Promise((resolve) => {
              if ((img as HTMLImageElement).complete) {
                loadedResources++;
                updateProgress(
                  10 + (loadedResources / totalResources) * 40,
                  "Chargement des images..."
                );
                resolve(true);
              } else {
                (img as HTMLImageElement).onload = () => {
                  loadedResources++;
                  updateProgress(
                    10 + (loadedResources / totalResources) * 40,
                    "Chargement des images..."
                  );
                  resolve(true);
                };
                (img as HTMLImageElement).onerror = () => {
                  loadedResources++;
                  resolve(false);
                };
              }
            })
        )
      );

      // 3. Initialisation de l'application
      updateProgress(60, "Préparation de l'interface...");
      await new Promise(resolve => setTimeout(resolve, 300));

      // 4. Finalisation
      updateProgress(80, "Finalisation...");
      await new Promise(resolve => setTimeout(resolve, 200));

      // 5. Terminé
      updateProgress(100, "Prêt !");
      await new Promise(resolve => setTimeout(resolve, 200));

      return true;
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
      return false;
    }
  }, [updateProgress]);

  useEffect(() => {
    // Bloquer le scroll
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Démarrer le chargement
    loadResources().then((success) => {
      if (success) {
        setContentReady(true);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = originalStyle;
        }, 300);
      } else {
        // Gestion d'erreur
        setContentReady(true);
        setIsLoading(false);
        document.body.style.overflow = originalStyle;
      }
    });

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [loadResources]);

  return (
    <>
      {isLoading && <LoadingScreen progress={progress} status={status} />}
      <main
        className={twMerge(
          "antialiased bg-gradient-to-b from-gray-50 to-white min-h-screen",
          `transition-opacity duration-300 ${!contentReady ? 'opacity-0' : 'opacity-100'}`
        )}
      >
        {children}
      </main>
    </>
  );
}