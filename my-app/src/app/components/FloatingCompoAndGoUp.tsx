'use client'

import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButtons: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const openChat = () => {
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
    setMessage('');
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    const whatsappUrl = `https://wa.me/+22549665503?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    closeChat();
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <div
        onClick={openChat}
        className="fixed bottom-20 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors cursor-pointer z-50"
      >
        <FaWhatsapp className="w-8 h-8" />
      </div>

      {isChatOpen && (
        <div className="fixed bottom-32 right-5 bg-[#126e51]  border rounded-lg shadow-lg p-4 w-72 z-50">
          <h2 className="text-lg font-bold mb-2 text-white">Alors , nous pouvons discuter 😊</h2>
          <textarea
            className="w-full h-24 p-2 border rounded-lg mb-2"
            placeholder="Écrivez votre message..."
            value={message}
            onChange={handleMessageChange}
          />
          <button
            onClick={sendMessage}
            className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors w-full mb-2"
          >
            Envoyer sur WhatsApp
          </button>
          <button
            onClick={closeChat}
            className="bg-gray-300 text-gray-700 p-2 rounded-lg  w-full"
          >
            Annuler
          </button>
        </div>
      )}

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-black/80 text-white/30 p-3 rounded-full shadow-lg hover:bg-black transition-colors z-50"
        >
          <svg
            className="w-8 h-8 transform rotate-180 text-white py-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.293 9.293a1 1 0 011.414 0L12 13.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z" />
          </svg>
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
