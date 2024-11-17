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
    <section className="py-20">
      <div className="container md:max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 w-full">
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-2xl shadow-xl bg-[#126e51]">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 z-10"></div>
            <Image
              src={support}
              alt="Support"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl transform hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black p-2 rounded-full shadow-lg backdrop-blur-sm">
              <FaCircle className="text-emerald-500 h-3 w-3 md:h-4 md:w-4 animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-gray-100">Support en ligne</span>
            </div>
            <div className="absolute bottom-4 left-4 space-y-2 md:space-y-3 w-4/5">
              {messages.slice(0, currentMessageIndex + 1).map((message, index) => (
                <div
                  key={index}
                  className={`px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm shadow-lg max-w-xs backdrop-blur-sm transition-all duration-300 ${
                    message.type === 'sent' 
                      ? 'bg-white text-[#126e51] ml-6 md:ml-8 hover:bg-gray-100' 
                      : 'bg-[#126e51] text-white border border-white/10 hover:bg-[#0d503b]'
                  }`}
                >
                  {message.text}
                </div>
              ))}
              {isTyping && (
                <div className="px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm shadow-lg max-w-xs bg-[#126e51] text-white border border-white/10 backdrop-blur-sm">
                  <span className="animate-pulse">En cours de rédaction...</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 max-w-xl w-full flex flex-col">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 lg:mb-10 leading-tight text-gray-900">
            <span className='text-[#126e51]'>Une assistance premium</span>
            {' '}disponible à chaque instant
          </h2>

          <div className="space-y-4 md:space-y-6">
            {supportOptions.map((option) => (
              <a
                key={option.title}
                href={option.link}
                className="group flex items-center p-4 md:p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 bg-[#126e51] hover:bg-[#0d503b] shadow-lg hover:shadow-xl"
              >
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-xl bg-white">
                  <option.icon className="h-5 w-5 md:h-6 md:w-6 text-[#126e51]" aria-hidden="true" />
                </div>
                <div className="ml-4 md:ml-5 flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-1 text-white group-hover:text-white/90 transition-colors duration-300">
                    {option.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed">{option.description}</p>
                </div>
                <div className="ml-4">
                  <svg 
                    className="w-5 h-5 text-white/50 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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