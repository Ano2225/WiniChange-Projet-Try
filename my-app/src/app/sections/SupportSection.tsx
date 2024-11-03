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
    { text: "Bonjour, comment puis-je vous aider ?", type: 'received' },
    { text: "Quels sont les horaires de votre support ?", type: 'sent' },
    { text: "Notre support est disponible 24h/24 et 7j/7 !", type: 'received' },
    { text: "Avez-vous d'autres questions ?", type: 'received' },
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
      title: 'Questions Fréquentes',
      description: 'Trouvez des réponses rapides à vos questions les plus courantes.',
      icon: FaRegQuestionCircle,
      link: '/faq',
      color: "yellow",
      iconColor: "white",
      circleColor: "green",
      textColor: "green"
    },
    {
      title: 'Contactez le Support',
      description: 'Notre équipe est prête à vous aider pour toute question spécifique.',
      icon: FaComments,
      link: '/contact',
      color: "green",
      iconColor: "white",
      circleColor: "yellow",
      textColor: "yellow"
    },
  ];

  return (
    <section className="pb-8 md:py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <div className="relative h-44 md:h-64 lg:h-80 w-full overflow-hidden mt-8 md:mt-14">
            <Image
              src={support}
              alt="Support"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute top-2 right-2 md:top-4 md:right-4 flex items-center space-x-2 bg-white p-1 md:p-2 rounded-full shadow-lg">
              <FaCircle className="text-green-500 h-3 w-3 md:h-4 md:w-4" />
              <span className="text-xs md:text-sm text-black">En ligne</span>
            </div>
            <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 space-y-1 md:space-y-2">
              {messages.slice(0, currentMessageIndex + 1).map((message, index) => (
                <div
                  key={index}
                  className={`px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm shadow-md max-w-[85%] ${
                    message.type === 'sent' ? 'bg-green-600 text-white ml-6 md:ml-8' : 'bg-white text-black'
                  }`}
                  style={{ animation: `fadeIn 0.5s ease-in-out` }}
                >
                  {message.text}
                </div>
              ))}
              {isTyping && (
                <div className="px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm shadow-md max-w-[85%] bg-white text-black">
                  <span className="animate-pulse">Est en train d'écrire...</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 max-w-xl w-full flex flex-col space-y-4 md:space-y-6 lg:pl-12 text-white">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">
            <span className="text-[#126e51]">Notre équipe dévouée</span> du service client est à votre disposition 24h/7
          </h2>
          {supportOptions.map((option) => (
            <a
              key={option.title}
              href={option.link}
              className={twMerge(
                {
                  yellow: 'bg-yellow-500',
                  green: 'bg-green-700',
                }[option.color] || 'text-gray-300',
                'flex items-center p-3 md:p-5 text-white rounded-lg shadow-md'
              )}
            >
              <div className={twMerge(
                    {
                      yellow: 'bg-yellow-500',
                      green: 'bg-green-700',
                    }[option.circleColor] || 'bg-gray-300',
                    'flex-shrink-0 flex items-center justify-center h-8 md:h-10 w-8 md:w-10 rounded-full'
                  )}
              >
                <option.icon className="h-4 w-4 md:h-6 md:w-6" aria-hidden="true" />
              </div>
              <div className="ml-2 md:ml-4">
                <h3 className={twMerge(
                    {
                      yellow: 'text-yellow-500',
                      green: 'text-green-700',
                    }[option.textColor] || 'text-gray-300',
                    'text-sm md:text-lg font-semibold'
                  )} 
                >{option.title}</h3>
                <p className="mt-1 text-xs md:text-sm text-black/80">{option.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
