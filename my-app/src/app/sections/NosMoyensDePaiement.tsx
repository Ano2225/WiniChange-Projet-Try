import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Logo from '@/app/assets/logo.png';
import CircleTrans from './circleTrans';

const MoyensDePaiement = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 pt-10 md:pt-0">
      <div className="lg:container mx-auto px-4 md:py-24" id="countrysection">
        <div className="flex flex-col md:flex-row items-center justify-center md:p-8">
          <div className="w-full md:w-1/2 flex items-center justify-center md:mb-0">
            <div className="text-center md:text-start">
              <h3 className="text-xl md:text-3xl text-gray-900 font-bold mb-8">
                Plus de <span className="font-bold text-[#126e51] ">40 Moyens de paiement</span>
                <div className="mt-4 flex justify-center gap-2">
                    <div className="h-1 w-16 bg-[#126e51] rounded-full"></div>
                    <div className="h-1 w-4 bg-[#126e51]/60 rounded-full"></div>
                </div>
              </h3>
              <p className="text-sm lg:text-base md:text-start text-start font-medium mb-4 text-gray-600 leading-relaxed">
                Transférez de l'argent et échangez des cryptomonnaies à des taux avantageux avec plus de 40 moyens de paiement:
                <span className="ml-2 font-bold text-gray-800">MTN, MOOV, Orange, Airtel, Tmoney, Wave, Safaricom, et plus.</span>
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