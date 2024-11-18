'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { twMerge } from "tailwind-merge";

type LoadingScreenProps = {
  progress: number;
  status: string;
};

const LoadingScreen = ({ progress, status }: LoadingScreenProps) => {
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
      <div className="w-64 h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-[#126e51] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
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
  const [status, setStatus] = useState("Chargement...");

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const headerLogo = document.querySelector('img[src="/images/log1.png"]');
    
    if (headerLogo) {
      setProgress(50);
      setStatus("Chargement du logo...");
      
      if ((headerLogo as HTMLImageElement).complete) {
        finishLoading();
      } else {
        (headerLogo as HTMLImageElement).onload = finishLoading;
        (headerLogo as HTMLImageElement).onerror = finishLoading;
      }
    } else {
      finishLoading();
    }

    function finishLoading() {
      setProgress(100);
      setStatus("Prêt !");
      setContentReady(true);
      
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = originalStyle;
      }, 300);
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

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