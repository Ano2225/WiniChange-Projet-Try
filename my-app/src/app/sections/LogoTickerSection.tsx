'use client';

import beninLogo from '@/app/assets/svgFlag/Flag_of_Benin.svg';
import civLogo from "@/app/assets/svgFlag/Flag_of_Côte_d'Ivoire.svg";
import camerlogo from '@/app/assets/svgFlag/Flag_of_Cameroon.svg';
import nigerLogo from '@/app/assets/svgFlag/Flag_of_Niger.svg';
import senegalLogo from '@/app/assets/svgFlag/Flag_of_Senegal.svg';
import togologo from '@/app/assets/svgFlag/Flag_of_Togo.svg';
import bfLogo from '@/app/assets/svgFlag/Flag_of_Burkina_Faso.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const LogoTickerSection = () => {
  const images = [
    { src: beninLogo, alt: 'Benin', description: 'Benin' },
    { src: civLogo, alt: 'Côte d\'Ivoire', description: 'Côte d\'Ivoire' },
    { src: togologo, alt: 'Togo', description: 'Togo' },
    { src: nigerLogo, alt: 'Niger', description: 'Niger' },
    { src: senegalLogo, alt: 'Sénégal', description: 'Sénégal' },
    { src: camerlogo, alt: 'Cameroun', description: 'Cameroun' },
    { src: bfLogo, alt: 'Burkina Faso', description: 'Burkina Faso' }
  ];

  const [paused, setPaused] = useState(false);

  return (
    <div className="bg-black text-white py-6 sm:py-12">
      <div className="md:container mx-auto">
        <h2 className="text-lg sm:text-xl text-center text-white/70 mb-4 sm:mb-6">
          Découvrez les pays que nous couvrons
        </h2>
        <div 
          className="flex overflow-hidden relative" 
          onMouseEnter={() => setPaused(true)} 
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            transition={{
              duration: 60, 
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: paused ? 0 : "-100%" }}
            className="flex gap-4 sm:gap-8 flex-none pr-8 mt-4"
          >
            {images.concat(images).map(({ src, alt, description }, index) => (
              <div
                key={`${alt}-${index}`}
                className="rounded-md shadow-md flex-none text-black h-12 bg-white px-2 flex items-center justify-center relative brightness-90 hover:brightness-100 w-32 sm:w-40"
              >
                <div className="flex justify-center items-center space-x-2 h-[30px]">
                  <Image
                    src={src}
                    alt={alt}
                    className="h-auto w-auto max-w-[40px] sm:max-w-[50px]"
                    priority
                  />
                  <span className="text-xs sm:text-sm">{description}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-center text-xs text-black bg-white/80 p-1 rounded-b-md opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {description}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
