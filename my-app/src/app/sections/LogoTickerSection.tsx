'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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
    { src: civLogo, alt: 'Côte d\'Ivoire', description: 'Côte d\'Ivoire' },
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

  const colors = ['#F0F0F0', '#E5E5E5', '#D9D9D9', '#CCCCCC', '#FFFFFF', '#F7F7F7', '#EFEFEF'];


  const getRandomColor = (index: number) => colors[index % colors.length];

  return (
    <div className="bg-black text-white py-[20px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70 mb-6 font-bold">Découvrez les pays que nous couvrons</h2>
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
            {images.map(({ src, alt, description }, index) => (
              <div
                key={`${alt}-${index}`}
                className="rounded-full shadow-lg flex-none w-28 h-12  px-2 flex items-center justify-center relative"
                style={{ backgroundColor: getRandomColor(index) }} 
              >
                <Image
                  src={src}
                  alt={alt}
                  width={30}
                  height={10}
                  priority
                />
                <div className="text-xs px-2 text-[#126e51] text-center mt-1">{alt}</div>
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
                  width={30}
                  height={10}
                  priority
                />
                <div className="text-xs px-2 text-[#126e51] text-center mt-1">{alt}</div>
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
}