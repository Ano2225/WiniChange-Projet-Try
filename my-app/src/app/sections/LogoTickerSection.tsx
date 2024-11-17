'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
import nigeriaLogo from '@/app/assets/svgFlag/Flag_of_Nigeria.svg';

export const LogoTickerSection = () => {
  const images = [
    { src: beninLogo, alt: 'Benin', description: 'Benin' },
    { src: civLogo, alt: "CIV", description: 'Côte d\'Ivoire' },
    { src: togologo, alt: 'Togo', description: 'Togo' },
    { src: nigerLogo, alt: 'Niger', description: 'Niger' },
    { src: senegalLogo, alt: 'Sénégal', description: 'Sénégal' },
    { src: camerlogo, alt: 'Cameroun', description: 'Cameroun' },
    { src: bfLogo, alt: 'Burkina Faso', description: 'Burkina Faso' },
    { src: gabonLogo, alt: 'Gabon', description: 'Gabon' },
    { src: maliLogo, alt: 'Mali', description: 'Mali' },
    { src: kenyaLogo, alt: 'Kenya', description: 'Kenya' }, 
    { src: guineeLogo, alt: 'Guinee', description: 'Guinee' }, 
    { src: nigeriaLogo, alt: 'Nigeria', description: 'Nigeria' }, 
  ];

  const [paused, setPaused] = useState(false);

  const colors = [
    'rgb(240, 253, 244)', // vert très clair
    'rgb(220, 252, 231)', // vert pâle
    'rgb(209, 250, 229)', // menthe claire
    'rgb(236, 253, 245)', // vert pastel
    'rgb(243, 244, 246)', // gris très clair
    'rgb(249, 250, 251)', // gris pâle
    'rgb(255, 255, 255)', // blanc
  ];

  const getRandomColor = (index: number) => colors[index % colors.length];

  return (
    <div className=" text-gray-900 py-[20px] sm:py-24">
      <div className="container">
        <h2 className="text-xl md:text-2xl text-center text-[#126e51] mb-6 font-bold">
          Découvrez les pays que nous couvrons
        </h2>
        <div 
          className="flex overflow-hidden relative" 
          onMouseEnter={() => setPaused(true)} 
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            transition={{
              duration: 80,
              ease: "linear",
              repeat: Infinity,
              paused
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: paused ? 0 : "-50%" }}
            className="flex gap-8 flex-none pr-16 mt-10"
          >
            {[...images, ...images].map(({ src, alt, description }, index) => (
              <div
                key={`${alt}-${index}`}
                className="rounded-full shadow-md flex-none h-12 px-2 flex items-center justify-center relative w-fit hover:shadow-lg transition-shadow duration-300"
                style={{ backgroundColor: getRandomColor(index) }} 
              >
                <Image
                  src={src}
                  alt={alt}
                  width={30}
                  height={10}
                  priority
                />
                <div className="text-xs px-2 text-emerald-700 text-center mt-1 font-medium">
                  {alt}
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-center text-xs text-emerald-800 bg-white/95 p-1 rounded-b-md opacity-0 hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  {description}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}