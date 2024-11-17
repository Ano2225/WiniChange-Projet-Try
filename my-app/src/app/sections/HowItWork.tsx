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
          Comment <span className='text-emerald-600'>ça marche ?</span>
        </h2>

        {/* Mobile Section */}
        <div className="md:hidden mt-10 md:mt-20 flex flex-col items-center justify-center">
          <div className="relative mb-6 w-full max-w-md flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-full lg:w-80 lg:h-80 opacity-50 blur-lg z-0"></div>
            {selectedContent && (
              <Image
                src={selectedContent.image}
                alt={selectedContent.title}
                width={200}
                height={100}
                className="relative z-10 rounded-lg "
              />
            )}
          </div>
          <motion.div
            className="p-4 bg-white border-l-4 border-emerald-500 w-full max-w-md rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset }) => {
              if (offset.x > 100) {
                handleSwipe(-1);
              } else if (offset.x < -100) {
                handleSwipe(1);
              }
            }}
          >
            {steps.map((step) => (
              <div
                key={step.id}
                className={`transition-opacity duration-300 ${selectedStep === step.id ? 'block' : 'hidden'}`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg">
                    {step.id}
                  </div>
                  <h3 className="text-xl text-emerald-600 font-semibold mb-2">{step.title}</h3>
                </div>
                <p className="text-black/80 text-sm mt-2 ml-12">{step.description}</p>
              </div>
            ))}
            <div className="flex justify-center mt-4 space-x-2">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  className={`h-1.5 rounded-full cursor-pointer ${
                    selectedStep === step.id ? 'bg-emerald-500 w-6' : 'bg-gray-700 w-1.5'
                  }`}
                  onClick={() => setSelectedStep(step.id)}
                  whileHover={{ scale: 1.2 }}
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