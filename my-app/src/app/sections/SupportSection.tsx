'use client';

import Image from 'next/image';
import { FaRegQuestionCircle, FaComments, FaCircle } from 'react-icons/fa';
import support from '@/app/assets/support/SVG/support.svg';
import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from 'react';

const SupportSection = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    { text: "👋 Bienvenue ! Comment puis-je vous accompagner aujourd'hui ?", type: 'received' },
    { text: "J'aimerais en savoir plus sur vos services", type: 'sent' },
    { text: "Bien sûr ! Notre équipe est là pour vous guider 24h/24.", type: 'received' },
    { text: "N'hésitez pas si vous avez d'autres questions ! 😊", type: 'received' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        setIsTyping(false);
      } else if (currentMessageIndex < messages.length - 1) {
        setIsTyping(true);
        setTimeout(() => {
          setCurrentMessageIndex((prevIndex) => prevIndex + 1);
        }, 2000);
      } else {
        setCurrentMessageIndex(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isTyping, currentMessageIndex]);

  const supportOptions = [
    {
      title: 'Centre d\'aide',
      description: 'Accédez à notre base de connaissances complète avec guides détaillés.',
      icon: FaRegQuestionCircle,
      link: '/faq',
      color: "primary"
    },
    {
      title: 'Contacter le Support',
      description: 'Assistance personnalisée. Réponse garantie en moins de 5 minutes.',
      icon: FaComments,
      link: '/contact',
      color: "secondary"
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="lg:w-1/2 w-full">
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full overflow-hidden rounded-xl shadow-xl bg-[#126e51]">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 z-10"></div>
            <Image
              src={support}
              alt="Support"
              layout="fill"
              objectFit="cover"
              data-critical="true" 
              className="rounded-xl transform hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute top-3 right-3 flex items-center space-x-2 bg-black p-1.5 sm:p-2 rounded-full shadow-lg backdrop-blur-sm">
              <FaCircle className="text-emerald-500 h-2 w-2 sm:h-3 sm:w-3 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-gray-100">Support en ligne</span>
            </div>
            <div className="absolute bottom-3 left-3 space-y-2 w-[85%]">
              {messages.slice(0, currentMessageIndex + 1).map((message, index) => (
                <div
                  key={index}
                  className={`px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm shadow-lg max-w-xs backdrop-blur-sm transition-all duration-300 ${
                    message.type === 'sent' 
                      ? 'bg-white text-[#126e51] ml-4 sm:ml-6 hover:bg-gray-100' 
                      : 'bg-[#126e51] text-white border border-white/10 hover:bg-[#0d503b]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
              {isTyping && (
                <div className="px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm shadow-lg max-w-xs bg-white text-[#126e51] border border-white/10 backdrop-blur-sm">
                  <span className="animate-pulse">En cours de rédaction...</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 leading-tight text-gray-900">
            <span className='text-[#126e51]'>Une assistance premium</span>
            {' '}disponible à chaque instant
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {supportOptions.map((option) => (
              <a
                key={option.title}
                href={option.link}
                className="group flex items-center p-3 sm:p-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 bg-[#126e51] hover:bg-[#0d503b] shadow-lg hover:shadow-xl"
              >
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-white">
                  <option.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#126e51]" aria-hidden="true" />
                </div>
                <div className="ml-3 sm:ml-4 flex-1">
                  <h3 className="text-base sm:text-lg font-bold mb-0.5 text-white group-hover:text-white/90">
                    {option.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{option.description}</p>
                </div>
                
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;