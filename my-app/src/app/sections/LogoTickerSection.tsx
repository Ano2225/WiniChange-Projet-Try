'use client';

import beninLogo from '@/app/assets/svgFlag/Flag_of_Benin.svg';
import civLogo from "@/app/assets/svgFlag/Flag_of_Côte_d'Ivoire.svg";
import camerlogo from '@/app/assets/svgFlag/Flag_of_Cameroon.svg';
import nigerLogo from '@/app/assets/svgFlag/Flag_of_Niger.svg';
import senegalLogo from '@/app/assets/svgFlag/Flag_of_Senegal.svg';
import togologo from '@/app/assets/svgFlag/Flag_of_Togo.svg';
import bfLogo from '@/app/assets/svgFlag/Flag_of_Burkina_Faso.svg';
import gabonLogo from '@/app/assets/svgFlag/Flag_of_Gabon.svg';
import maliLogo from '@/app/assets/svgFlag/Flag_of_Mali.svg';
import kenyaLogo from '@/app/assets/svgFlag/Flag_of_Kenya.svg';
import guineeLogo from '@/app/assets/svgFlag/Flag_of_Guinea.svg';
import rdcLogo from '@/app/assets/svgFlag/Flag_of_the_Democratic_Republic_of_the_Congo.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const LogoTickerSection = () => {
  const images = [
    { src: beninLogo, alt: 'Benin', description: 'Benin Flag' },
    { src: civLogo, alt: 'Côte d\'Ivoire', description: 'Côte d\'Ivoire Flag' },
    { src: togologo, alt: 'Togo', description: 'Togo Flag' },
    { src: nigerLogo, alt: 'Niger', description: 'Niger Flag' },
    { src: senegalLogo, alt: 'Sénégal', description: 'Sénégal Flag' },
    { src: camerlogo, alt: 'Cameroun', description: 'Cameroun Flag' },
    { src: bfLogo, alt: 'Burkina Faso', description: 'Burkina Faso Flag' },
    { src: gabonLogo, alt: 'Gabon', description: 'Gabon Flag' },
    { src: maliLogo, alt: 'Mali', description: 'Mali Flag' },
    { src: kenyaLogo, alt: 'Kenya', description: 'Kenya Flag' }, 
    { src: guineeLogo, alt: 'Guinee', description: 'Guinee Flag' }, 
    { src: rdcLogo, alt: 'République démocratique du Congo', description: 'RDC Flag' }, 
  ];

  const [paused, setPaused] = useState(false);

  return (
    <div className="bg-black text-white py-[20px] sm:py-24">
      <div className="md:container mx-5 ">
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
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: paused ? 0 : "-50%" }}
            className="flex gap-8 flex-none pr-16 mt-10"
          >
            {images.map(({ src, alt, description }, index) => (
              <div
                key={`${alt}-${index}`}
                className="rounded-full shadow-xl flex-none text-black h-12 bg-white px-2 flex items-center justify-center relative brightness-90 hover:brightness-100"
              >
                <div className='flex justify-center align-center space-x-1 h-[30px] text-green'>
                  <Image
                    src={src}
                    alt={description}
                    className="h-auto w-auto"
                    priority
                  />
                  <span className='mt-1'> {alt} </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-center text-xs text-black bg-white/80 p-1 rounded-b-md opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {description}
                </div>
              </div>
            ))}
            {images.map(({ src, alt, description }, index) => (
              <div
                key={`${alt}-${index}`}
                className="rounded-full shadow-xl flex-none text-black h-12 bg-white px-2 flex items-center justify-center relative brightness-90 hover:brightness-100"
              >
                <div className='flex justify-center align-center space-x-1 h-[30px] text-green'>
                  <Image
                    src={src}
                    alt={description}
                    className="h-auto w-auto"
                    priority
                  />
                  <span className='mt-1'> {alt} </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-center text-xs text-black bg-white/80 p-1 rounded-b-md opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {alt}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
