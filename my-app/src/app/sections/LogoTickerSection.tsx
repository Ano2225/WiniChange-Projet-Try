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
    <div className="bg-black text-white py-[20px] sm:py-24">
      <div className="md:container">
        <h2 className="text-xl text-center text-white/70 mb-6">Découvrez les pays que nous couvrons</h2>
        <div 
          className="flex overflow-hidden relative" 
          onMouseEnter={() => setPaused(true)} 
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            transition={{
              duration: 100,
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: paused ? 0 : "-50%" }}
            className="flex gap-8 flex-none pr-16 mt-10"
          >
            {images.map(({ src, alt, description }, index) => (
              <div
                key={`${alt}-${index}`}
                className="rounded-[10px] shadow-xl flex-none text-black h-12 bg-white px-2 flex items-center justify-center relative brightness-90 hover:brightness-100"
              >
                <div className='flex justify-center align-center space-x-2 h-[30px] text-green'>
                  <Image
                    src={src}
                    alt={alt}
                    className="h-auto w-auto"
                    priority
                  />
                  <span className='mt-1'> {description} </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-center text-xs text-black bg-white/80 p-1 rounded-b-md opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {description}
                </div>
              </div>
            ))}
            {images.map(({ src, alt, description }, index) => (
              <div
                key={`${alt}-${index}`}
                className="rounded-[10px] shadow-xl flex-none text-black h-12 bg-white px-2 flex items-center justify-center relative brightness-90 hover:brightness-100"
              >
                <div className='flex justify-center align-center space-x-2 h-[30px] text-green'>
                  <Image
                    src={src}
                    alt={alt}
                    className="h-auto w-auto"
                    priority
                  />
                  <span className='mt-1'> {description} </span>
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
