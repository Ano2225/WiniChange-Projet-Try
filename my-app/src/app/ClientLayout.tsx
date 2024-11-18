'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { twMerge } from "tailwind-merge";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-gray-50 to-white z-[9999] flex flex-col items-center justify-center">
      <div className="relative w-60 h-36 mb-8">
        <Image
          src="/images/log1.png"
          alt="WiniChange"
          fill
          className="object-contain animate-pulse"
          priority
        />
      </div>
      <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className="w-full h-full bg-[#126e51] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default function ClientLayout({
  children,
  skipLoadingScreen = false, // Nouvelle option pour ignorer l'écran
}: {
  children: React.ReactNode;
  skipLoadingScreen?: boolean;
}) {
  const [isLoading, setIsLoading] = useState(!skipLoadingScreen);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {

    if (skipLoadingScreen) return; // Pas de chargement si l'option est activée

    document.body.style.overflow = 'hidden'; // Désactiver le scroll

    const handleLoad = () => {
      setContentReady(true); // Contenu prêt
      setTimeout(() => {
        setIsLoading(false); // Retirer l'écran de chargement
        document.body.style.overflow = ''; // Réactiver le scroll
      }, 500); // Laisser une petite transition
    };

    // Utiliser DOMContentLoaded pour un chargement plus rapide
    const domContentLoaded = new Promise<void>((resolve) => {
      if (document.readyState === 'interactive' || document.readyState === 'complete') {
        resolve();
      } else {
        document.addEventListener('DOMContentLoaded', () => resolve(), { once: true });
      }
    });

    // Vérifier les images uniquement si elles existent
    const imagesLoading = new Promise<void>((resolve) => {
      const images = document.querySelectorAll('img');
      if (images.length === 0) {
        resolve(); // Pas d'images, terminé
        return;
      }

      let loadedImages = 0;
      images.forEach((img) => {
        if (img.complete) {
          loadedImages++;
          if (loadedImages === images.length) resolve();
        } else {
          img.onload = img.onerror = () => {
            loadedImages++;
            if (loadedImages === images.length) resolve();
          };
        }
      });
    });

    // Timeout global pour éviter les blocages
    const timeout = new Promise<void>((resolve) =>
      setTimeout(resolve, 10000) // 10 secondes maximum
    );

    Promise.race([Promise.all([domContentLoaded, imagesLoading]), timeout])
      .then(handleLoad)
      .catch(() => handleLoad()); // Toujours retirer l'écran, même en cas d'erreur

    return () => {
      document.body.style.overflow = ''; // Cleanup : Réactiver le scroll
    };
  }, [skipLoadingScreen]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <main
        className={twMerge(
          "antialiased bg-gradient-to-b from-gray-50 to-white min-h-screen",
          `transition-opacity duration-500 ${!contentReady ? 'opacity-0' : 'opacity-100'}`
        )}
      >
        {children}
      </main>
    </>
  );
}

