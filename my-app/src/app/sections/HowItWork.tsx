'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: 'Étape 1: Créez un Compte',
    description: "Commencez par créer votre compte en quelques clics. C'est simple et rapide.",
    image: '/images/mockupIphone.png',
  },
  {
    id: 2,
    title: 'Étape 2: Vérification',
    description: "Vérifiez votre compte en moins de 24 heures en soumettant votre carte d'identité, votre passeport ou d'autres documents requis.",
    image: '/images/mockup2.png',
  },
  {
    id: 3,
    title: "Étape 3: 1ère Transaction",
    description: "Vous êtes prêt ! Connectez-vous et réalisez votre première transaction.",
    image: '/images/mockup2.png',
  },
];

export default function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedStep((prevStep) => (prevStep === steps.length ? 1 : prevStep + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const selectedContent = steps.find((step) => step.id === selectedStep);

  const handleSwipe = (direction: number) => {
    if (direction === 1 && selectedStep < steps.length) {
      setSelectedStep(selectedStep + 1);
    } else if (direction === -1 && selectedStep > 1) {
      setSelectedStep(selectedStep - 1);
    }
  };

  return (
    <div className="py-14">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-center mb-16 text-3xl md:text-4xl text-gray-900">
          Comment <span className='text-[#126e51]'>ça marche ?</span>
          <div className="mt-4 flex justify-center gap-2">
                    <div className="h-1 w-16 bg-[#126e51] rounded-full"></div>
                    <div className="h-1 w-4 bg-[#126e51]/60 rounded-full"></div>
              </div>
        </h2>

        {/* Mobile Section */}
        <div className="md:hidden flex flex-col items-center mt-8">
          <div className="relative mb-4 w-full max-w-[280px] flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-full w-60 h-60 opacity-50 blur-lg"></div>
            {selectedContent && (
              <Image
                src={selectedContent.image}
                alt={selectedContent.title}
                width={140}
                height={80}
                className="relative z-10 object-contain"
              />
            )}
          </div>
          <motion.div
            className="p-4 bg-white border-l-4 border-emerald-500 w-full max-w-[280px] rounded-lg shadow-md"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset }) => {
              if (offset.x > 50) handleSwipe(-1);
              if (offset.x < -50) handleSwipe(1);
            }}
          >
            {steps.map((step) => (
              <div
                key={step.id}
                className={`transition-opacity duration-300 ${selectedStep === step.id ? 'block' : 'hidden'}`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {step.id}
                  </div>
                  <h3 className="text-sm md:text-lg text-emerald-600 font-semibold">{step.title}</h3>
                </div>
                <p className="text-black/80 text-xs md:text-sm mt-2 ml-9">{step.description}</p>
              </div>
            ))}
            <div className="flex justify-center mt-3 space-x-1.5">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  className={`h-1 rounded-full cursor-pointer ${
                    selectedStep === step.id ? 'bg-emerald-500 w-4' : 'bg-gray-300 w-1'
                  }`}
                  onClick={() => setSelectedStep(step.id)}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop Section */}
        <div className="hidden md:grid grid-cols-2 gap-8 items-center mt-20">
          <div className="flex flex-col space-y-6">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className={`p-6 bg-white border-l-4 shadow-lg rounded-lg cursor-pointer transition-all duration-300 relative ${
                  selectedStep === step.id ? 'border-emerald-500 shadow-emerald-100' : 'border-transparent hover:border-emerald-200'
                }`}
                onClick={() => setSelectedStep(step.id)}
                whileHover={{ scale: 1.02, backgroundColor: 'rgb(243, 244, 246)' }}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg transition-all duration-300 text-white ${
                    selectedStep === step.id 
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-600'
                      : 'bg-gray-700 text-gray-600'
                  }`}>
                    {step.id}
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    selectedStep === step.id ? 'text-emerald-600' : 'text-gray-700'
                  }`}>
                    {step.title}
                  </h3>
                </div>
                <p className={`text-sm mt-2 ml-12 transition-colors duration-300 ${
                  selectedStep === step.id ? 'text-gray-600' : 'text-gray-500'
                }`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center items-center p-4 relative w-full h-full min-h-[400px]">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="absolute w-80 h-80 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-full opacity-40 blur-xl"></div>
            </div>
            <motion.div
              key={selectedContent?.id}
              className="relative z-10 flex flex-col items-center justify-center w-full h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
            >
              {selectedContent && (
                <Image
                  src={selectedContent.image}
                  alt={selectedContent.title}
                  width={200}
                  height={100}
                  className="relative z-20 drop-shadow-2xl"
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}