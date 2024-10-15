'use client'
import React, { useEffect, useState } from 'react';
import { HiXCircle } from "react-icons/hi2";
import { toast } from 'react-hot-toast';

const Cookies = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Affiche la notification après le chargement de la page
    const timer = setTimeout(() => {
      setShowNotification(true);
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-fadeIn' : 'animate-fadeOut'
          } fixed bottom-0 left-0 right-0 w-full bg-gray-800 text-white p-4 shadow-lg border-t border-gray-700 flex flex-col gap-2 transition-all duration-500 ease-in-out
            rounded-lg
          `}
          style={{ zIndex: 9999 }}
        >
          <button className='pointer ml-auto' 
            onClick={() => {
              toast.dismiss(t.id);
              setShowNotification(false);
            }}
          >
            <HiXCircle />
          </button>
          <div className='flex flex-col md:flex-row justify-between items-center gap-2 md:gap-5'>
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                <p className="text-sm">
                  Afin de vous offrir une expérience personnalisée et optimale, nous utilisons <a href="/cookies" className="underline text-green-700">
                    des cookies
                  </a>  pour assurer le bon fonctionnement de notre plateforme, analyser le trafic et vous proposer des contenus adaptés à vos besoins. En poursuivant votre navigation, vous profitez pleinement de nos services
                  et acceptez <span>  </span> 
                  <a href="/general-conditions" className="underline text-green-700">
                    politique de confidentialité et conditions d'utilisation
                  </a>.
                  Nous utilisons des cookies pour améliorer votre expérience. En utilisant notre site, vous acceptez nos{' '}
                  et notre{' '}
                  .
                </p>
              </div>
              <div className="flex mt-5 md:mt-0 space-x-3">
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    setShowNotification(false);
                  }}
                  className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-500"
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
        </div>
      ), { duration: Infinity });
    }, 1000); // Affiche après 1 seconde

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default Cookies;
