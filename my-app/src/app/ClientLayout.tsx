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
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    // Bloquer le scroll quand le composant est monté
    document.body.style.overflow = 'hidden';
    
    // Function pour réactiver le scroll
    const enableScroll = () => {
      document.body.style.overflow = originalStyle;
    };

    Promise.all([
      new Promise((resolve) => {
        const images = document.querySelectorAll('img');
        let loadedImages = 0;
        
        if (images.length === 0) {
          resolve(true);
          return;
        }

        images.forEach(img => {
          if (img.complete) {
            loadedImages++;
            if (loadedImages === images.length) resolve(true);
          } else {
            img.onload = () => {
              loadedImages++;
              if (loadedImages === images.length) resolve(true);
            };
            img.onerror = () => {
              loadedImages++;
              if (loadedImages === images.length) resolve(true);
            };
          }
        });
      }),
      new Promise(resolve => setTimeout(resolve, 2000))
    ])
    .then(() => {
      setContentReady(true);
      setTimeout(() => {
        setIsLoading(false);
        enableScroll(); 
      }, 500);
    })
    .catch(error => {
      console.error('Erreur lors du chargement:', error);
      setContentReady(true);
      setIsLoading(false);
      enableScroll(); 
    });

    // Cleanup : réactiver le scroll si le composant est démonté
    return () => {
      enableScroll();
    };
  }, []);

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