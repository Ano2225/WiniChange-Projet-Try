'use client';

import beninLogo from '@/app/assets/benin-logo.png';
import civLogo from '@/app/assets/civ-logo.png';
import togoLogo from '@/app/assets/Togo-logo.png';
import nigerLogo from '@/app/assets/Niger-logo.png';
import senegalLogo from '@/app/assets/senegal-logo.png';
import camerLogo from '@/app/assets/Camer-logo.png';
import bfLogo from '@/app/assets/bf-logo.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const LogoTickerSection = () => {
  const images = [
    { src: beninLogo, alt: 'Benin', description: 'Benin' },
    { src: civLogo, alt: 'Côte d\'Ivoire', description: 'Côte d\'Ivoire' },
    { src: togoLogo, alt: 'Togo', description: 'Togo' },
    { src: nigerLogo, alt: 'Niger', description: 'Niger' },
    { src: senegalLogo, alt: 'Sénégal', description: 'Sénégal' },
    { src: camerLogo, alt: 'Cameroun', description: 'Cameroun' },
    { src: bfLogo, alt: 'Burkina Faso', description: 'Burkina Faso' }
  ];

  const [paused, setPaused] = useState(false);

  const colors = ['#F0F0F0', '#E5E5E5', '#D9D9D9', '#CCCCCC', '#FFFFFF', '#F7F7F7', '#EFEFEF'];


  const getRandomColor = (index: number) => colors[index % colors.length];

  return (
    <div className="bg-black text-white py-[20px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70 mb-6">Découvrez les pays que nous couvrons</h2>
        <div 
          className="flex overflow-hidden relative" 
          onMouseEnter={() => setPaused(true)} 
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              paused
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: paused ? 0 : "-50%" }}
            className="flex gap-8 flex-none pr-16 mt-10"
          >
            {images.map(({ src, alt, description }, index) => (
              <div
                key={`${alt}-${index}`}
                className="rounded-full shadow-lg flex-none w-28 h-12  px-2 flex items-center justify-center relative"
                style={{ backgroundColor: getRandomColor(index) }} 
              >
                <Image
                  src={src}
                  alt={alt}
                  className="h-auto w-auto"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 text-center text-xs text-black bg-white/80 p-1 rounded-b-md opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {description}
                </div>
              </div>
            ))}
            {images.map(({ src, alt, description }, index) => (
              <div
                key={`${alt}-${index}`}
                className="rounded-full shadow-lg flex-none w-28 h-12  px-2 flex items-center justify-center relative"
                style={{ backgroundColor: getRandomColor(index) }} 
              >
                <Image
                  src={src}
                  alt={alt}
                  className="h-auto w-auto"
                  priority
                />
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
