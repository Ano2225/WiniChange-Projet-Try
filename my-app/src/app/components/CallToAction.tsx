import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const CallToAction = () => {
  return (
    <div className="bg-black py-16">
      <div className="container mx-auto flex flex-col items-center justify-center text-center px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Rejoignez-nous dès aujourd'hui !
          </h1>
          <p className="text-base lg:text-lg text-gray-200 mb-8">
            Profitez des meilleurs taux et d'une rapidité inégalée pour vos transactions. Rejoignez la communauté qui fait confiance à Winichange pour tous ses échanges financiers.
          </p>
        <div className='flex items-center justify-center'>
            <button className="flex gap-3 rounded-full bg-[#126e51] text-white font-bold px-6 py-3 text-sm lg:text-base shadow-lg hover:bg-[#0e5741] transition duration-300 ease-in-out transform hover:scale-105">
                <span>Nous rejoindre</span>
                <FaArrowRightLong />
            </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;