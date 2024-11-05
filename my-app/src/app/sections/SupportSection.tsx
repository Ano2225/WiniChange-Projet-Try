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
      color: "yellow",
      iconColor: "white",
      circleColor: "green",
      textColor: "green"
    },
    {
      title: 'Contacter le Support',
      description: 'Assistance personnalisée. Réponse garantie en moins de 5 minutes.',
      icon: FaComments,
      link: '/contact',
      color: "green",
      iconColor: "white",
      circleColor: "yellow",
      textColor: "yellow"
    },
  ];

  return (
    <section className="pb-20 md:py-20 bg-black">
      <div className="container md:max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden mt-8 lg:mt-14 rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-500/10 z-10"></div>
            <Image
              src={support}
              alt="Support"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 flex items-center space-x-2 bg-white/90 p-2 rounded-full shadow-lg backdrop-blur-sm">
              <FaCircle className="text-green-500 h-3 w-3 md:h-4 md:w-4 animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-black">Support en ligne</span>
            </div>
            <div className="absolute bottom-4 left-4 space-y-2 md:space-y-3 w-4/5">
              {messages.slice(0, currentMessageIndex + 1).map((message, index) => (
                <div
                  key={index}
                  className={`px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm shadow-xl max-w-xs backdrop-blur-sm transition-all duration-300 ${
                    message.type === 'sent' 
                      ? 'bg-[#126e51] text-white ml-6 md:ml-8 hover:bg-green-700' 
                      : 'bg-white/90 text-black hover:bg-white'
                  }`}
                >
                  {message.text}
                </div>
              ))}
              {isTyping && (
                <div className="px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm shadow-xl max-w-xs bg-white/90 text-black backdrop-blur-sm">
                  <span className="animate-pulse">En cours de rédaction...</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 max-w-xl w-full flex flex-col space-y-4 md:space-y-8 lg:pl-12 text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:mb-10 leading-tight">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-[#126e51]'>Une assistance premium</span>
            {' '}disponible à chaque instant
          </h2>
          <div className="space-y-4 md:space-y-6">
            {supportOptions.map((option) => (
              <a
                key={option.title}
                href={option.link}
                className={twMerge(
                  {
                    yellow: 'bg-yellow-500 hover:bg-yellow-400',
                    green: 'bg-[#126e51] hover:bg-[#12825e]',
                  }[option.color] || 'text-gray-300',
                  'flex items-center p-4 md:p-6 text-white rounded-xl shadow-xl'
                )}
              >
                <div className={twMerge(
                  {
                    yellow: 'bg-yellow-500',
                    green: 'bg-[#126e51]',
                  }[option.circleColor] || 'bg-gray-300',
                  'flex-shrink-0 flex items-center justify-center h-10 w-10 md:h-14 md:w-14 rounded-full shadow-lg'
                )}>
                  <option.icon className="h-5 w-5 md:h-7 md:w-7" aria-hidden="true" />
                </div>
                <div className="ml-4 md:ml-5">
                  <h3 className={twMerge(
                    {
                      yellow: 'text-yellow-500',
                      green: 'text-[#126e51]',
                    }[option.textColor] || 'text-gray-300',
                    'text-lg md:text-xl font-bold mb-0.5 md:mb-1'
                  )}>
                    {option.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-100 leading-relaxed">{option.description}</p>
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