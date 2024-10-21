import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Logo from '@/app/assets/logo.png';
import GlobeImage from '../components/GlobeImage';
import MoyensDePaiementGlobe from '../components/MoyenDePaimentGlobe';
import CircleTrans from './circleTrans';

const MoyensDePaiement = () => {
  return (
    <div className="bg-gradient-to-b from-black to-black">
      <div className="lg:container mx-auto px-4 md:py-24 text-white" id="countrysection">
        <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
          <div className="w-full md:w-1/2 flex items-center justify-center md:mb-0">
            <div className="text-start">
              <h3 className="text-3xl md:text-4xl text-white font-bold mb-4 md:mb-8 bg-clip-text text-transparent">
                Plus de <span className="font-bold text-[#126e51]">40 Moyens <br /> de paiement</span>
              </h3>
              <p className="text-base md:text-lg text-center md:text-start font-medium mb-4 text-white/80 leading-relaxed">
                Transférez de l'argent, achetez et vendez de la cryptomonnaie à des taux préférentiels via plus de 40 moyens de paiement mobiles et bancaires :  
                <span className="ml-2 font-bold">MTN, MOOV, Orange, Airtel, Tmoney, Wave, Safaricom, Equity Bank….</span>
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <CircleTrans />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoyensDePaiement;