import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full blur-3xl opacity-60 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-emerald-50 to-teal-50 rounded-full blur-3xl opacity-60 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center text-center px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-6">
            <span className="text-[#126e51]">Rejoignez-nous</span> dès aujourd'hui !
          </h1>
          
          <p className="text-sm lg:text-base text-gray-600 mb-10 leading-relaxed">
          Bénéficiez des taux les plus compétitifs et d'une rapidité hors du commun pour vos transactions.
           Faites comme de nombreux utilisateurs et choisissez Winichange pour tous vos échanges financiers.
          </p>

          <div className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="flex gap-2">
                <div className="h-1 w-16 bg-emerald-500 rounded-full"></div>
                <div className="h-1 w-4 bg-emerald-300 rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="group flex items-center gap-3 rounded-full bg-[#126e51] text-white font-bold px-6  py-3 text-base 
                               shadow-lg hover:bg-emerald-700 transition-all duration-300 ease-in-out 
                               hover:shadow-emerald-500/20 hover:shadow-xl relative overflow-hidden">
                <span className="relative z-10">Nous rejoindre</span>
                <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Rejoignez plus de 10,000 utilisateurs satisfaits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;