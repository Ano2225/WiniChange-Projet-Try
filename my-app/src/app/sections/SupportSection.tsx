'use client';

import Image from 'next/image';
import { FaRegQuestionCircle, FaComments, FaCircle } from 'react-icons/fa';
import support from '@/app/assets/support/SVG/support.svg';
import { useEffect, useState } from 'react';

const SupportSection = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    { text: "Bonjour, comment puis-je vous aider ?", type: 'received' },
    { text: "Quels sont les horaires de votre support ?", type: 'sent' },
    { text: "Notre support est disponible 24h/24 et 7j/7 !", type: 'received' },
    { text: "Avez vous d'autres questions ?", type: 'received' },
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
      title: 'FAQ',
      description: 'Trouvez des réponses rapides à vos questions les plus courantes.',
      icon: FaRegQuestionCircle,
      link: '/faq',
    },
    {
      title: 'Contactez le Support',
      description: 'Notre équipe est prête à vous aider pour toute question spécifique.',
      icon: FaComments,
      link: '/contact',
    },
  ];

  return (
    <section className="pb-20 md:py-20 bg-black">
      <div className="container md:max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <div className="relative h-64 lg:h-80 w-full overflow-hidden mt-14">
            <Image
              src={support}
              alt="Support"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute top-4 right-4 flex items-center space-x-2 bg-white p-2 rounded-full shadow-lg">
              <FaCircle className="text-green-500 h-4 w-4" />
              <span className="text-sm text-black">En ligne</span>
            </div>
            <div className="absolute bottom-4 left-4 space-y-2">
              {messages.slice(0, currentMessageIndex + 1).map((message, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm shadow-md max-w-xs ${
                    message.type === 'sent' ? 'bg-green-600 text-white ml-8' : 'bg-white text-black'
                  }`}
                  style={{ animation: `fadeIn 0.5s ease-in-out` }}
                >
                  {message.text}
                </div>
              ))}
              {isTyping && (
                <div className="px-4 py-2 rounded-lg text-sm shadow-md max-w-xs bg-white text-black">
                  <span className="animate-pulse">Est entrain d'écrire...</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 max-w-xl w-full flex flex-col space-y-8 lg:pl-12 text-white">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 md:mb-4">
          <span className='text-[#126e51]'>Notre équipe dévouée</span> du service client est à votre disposition 24h/7 
          </h2>
          {supportOptions.map((option) => (
            <a
              key={option.title}
              href={option.link}
              className="flex items-center p-4 bg-[#126e51] text-white rounded-lg shadow-md hover:bg-[#106047] transition-colors duration-300"
            >
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 bg-white rounded-full">
                <option.icon className="h-6 w-6 text-[#126e51]" aria-hidden="true" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{option.title}</h3>
                <p className="mt-1 text-sm">{option.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
