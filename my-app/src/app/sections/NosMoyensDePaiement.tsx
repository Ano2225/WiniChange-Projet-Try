'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Logo from '@/app/assets/logo.png';
import GlobeImage from '../components/GlobeImage';
import MoyensDePaiementGlobe from '../components/MoyenDePaimentGlobe';

const MoyensDePaiement = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-800 to-black">
      <div className="mx-auto px-24 py-24 text-white" id="countrysection">
        <div className="flex flex-col md:flex-row items-center justify-center p-8">
          <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
            <div className="text-start">
              <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-gray-400">
                Plus de <span className="font-bold">40</span> Moyens <br /> de paiement
              </h3>
              <h6 className="text-lg font-medium mb-4 text-gray-300 leading-relaxed">
              Transférez de l'argent ou achetez et vendez de la cryptomonnaie à des taux préférentiels via plus de 40 moyens de paiement mobiles et bancaires : 
                <span className="ml-2 font-bold">MTN, MOOV, Orange, Airtel, Tmoney, Wave, Safaricom, Equity Bank, et bien d'autres.</span>
              </h6>
            </div>
          </div>
           <MoyensDePaiementGlobe />
          </div>
      </div>
    </div>
  );
};

export default MoyensDePaiement;
