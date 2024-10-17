import Link from 'next/link';
import React from 'react';

const NonTrouve = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center p-10">
      <div className="text-center">
        <h1 className="mb-4 text-6xl md:text-8xl font-semibold text-red-500">404</h1>
        <p className="mb-4 text-lg text-gray-600 md:text-2xl">Oups! On dirait que vous êtes perdu.</p>
        <div className="animate-bounce md:py-2">
          <svg className="mx-auto h-16 md:h-20 md:w-20 w-16 transform rotate-180 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
        </div>
        <p className="mt-4 text-gray-600 md:text-[18px]">
          Ramenez-vous <Link href="/" className="text-[#126e51] hover:text-green-900 underline font-bold">à la maison</Link>.
        </p>
      </div>
    </div>
  );
};

export default NonTrouve;