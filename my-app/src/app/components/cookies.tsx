'use client';

import React, { useEffect, useState } from 'react';
import { HiXCircle } from 'react-icons/hi2';
import { toast } from 'react-hot-toast';

const Cookies = () => {
  const [showCookie, setShowCookie] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookiesAccepted');
    if (cookieAccepted) {
      setShowCookie(false);
    }
  }, []);

  useEffect(() => {
    if (!showCookie) return;

    const timer = setTimeout(() => {
      setShowNotification(true);
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-fadeIn' : 'animate-fadeOut'
          } fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-4 shadow-lg border-t border-gray-700 rounded-lg transition-all duration-500 ease-in-out max-w-md w-full`}
          style={{ zIndex: 9999 }}
        >
          <div className='flex items-start justify-between'>
            <div className="flex-1">
              <p className="text-sm">
                Afin de vous offrir une expérience personnalisée et optimale, nous utilisons <a href="/cookies" className="underline text-green-500 hover:text-green-400">
                  des cookies
                </a> pour assurer le bon fonctionnement de notre plateforme, analyser le trafic, et vous proposer des contenus adaptés à vos besoins. En poursuivant votre navigation, vous acceptez notre{' '}
                <a href="/general-conditions" className="underline text-green-500 hover:text-green-400">
                  politique de confidentialité et conditions d'utilisation
                </a>.
              </p>
            </div>
            <button
              className='ml-4 text-gray-300 hover:text-white'
              onClick={() => {
                toast.dismiss(t.id);
                setShowNotification(false);
              }}
            >
              <HiXCircle size={20} />
            </button>
          </div>
          <div className='flex justify-end mt-4 space-x-2'>
            <button
              onClick={() => {
                handleAccept();
                toast.dismiss(t.id);
                setShowNotification(false);
              }}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500"
            >
              Accepter
            </button>
            <button
              onClick={() => {
                toast.dismiss(t.id);
                setShowNotification(false);
              }}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
            >
              Refuser
            </button>
          </div>
        </div>
      ), { duration: Infinity });
    }, 1000);

    return () => clearTimeout(timer);
  }, [showCookie]);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookie(false);
  };

  if (!showCookie) return null;

  return null;
};

export default Cookies;
