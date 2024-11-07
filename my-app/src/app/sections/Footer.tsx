'use client'

import Logo from '@/app/assets/logo.png'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function Footer({color}: any) {
  return (
    <footer className={`${color}`}>
      <div className='bg-gradient-to-bl from-[#126e51]  to-black pt-14 pb-2 rounded-t-[1rem] md:rounded-t-[4rem]'>
        <div className="w-full px-2 md:container text-white rounded-lg" id="footerCustom py-14">
          <div className="flex flex-col md:flex-row justify-between p-4 flex-wrap">
            <div className="flex flex-col items-start mb-8 space-y-2">
              <div className="w-full h-full mb-4 flex items-center md:justify-center">
                <a href='/' className='flex'>
                  <Image src={Logo.src} alt="Logo" width={30} height={30} className='cursor-pointer'/>
                  <h1 className='text-xl text-white font-bold mx-2'>WiniChange</h1>
                </a>
              </div>
              <div className="mb-4 mt-8">
                <h5 className="text-xl text-white font-bold ">Contactez-Nous</h5>
                <div className="mt-2 text-white/80">
                  <a href="tel:+2250749665503" className="text-white flex items-center mb-4">
                    <span className="mr-2">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.80868 1.72969C2.86519 1.67318 2.89345 1.64492 2.91835 1.62204C3.53047 1.05958 4.47136 1.05958 5.08349 1.62204C5.10838 1.64492 5.13664 1.67318 5.19316 1.72969L6.35971 2.89625C7.00135 3.53789 7.18486 4.50688 6.82227 5.33871C6.45968 6.17054 6.64319 7.13953 7.28483 7.78117L9.20228 9.69862C9.84392 10.3403 10.8129 10.5238 11.6447 10.1612C12.4766 9.79859 13.4456 9.9821 14.0872 10.6237L15.2538 11.7903C15.3103 11.8468 15.3385 11.8751 15.3614 11.9C15.9239 12.5121 15.9239 13.453 15.3614 14.0651C15.3385 14.09 15.3103 14.1183 15.2538 14.1748L14.5447 14.8838C13.9672 15.4613 13.1348 15.7037 12.3377 15.5265C6.90598 14.3195 2.66395 10.0775 1.45691 4.6458C1.27977 3.84863 1.52217 3.0162 2.0996 2.43877L2.80868 1.72969Z"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                    +225 0749665503
                  </a>
                  <a href="mailto:info@winichange.com" className="text-white flex items-center">
                    <span className="mr-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 27 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M19.9551 0.152281C18.5494 -1.78814e-05 16.7776 -9.88738e-06 14.5172 1.62876e-07H11.9443C9.68396 -9.88738e-06 7.91214 -1.78814e-05 6.50643 0.152281C5.07192 0.3077 3.90961 0.630553 2.91721 1.35157C2.31642 1.78807 1.78807 2.31642 1.35157 2.91721C1.15258 3.1911 0.982168 3.48038 0.836764 3.78827C0.391488 4.73113 0.192874 5.82445 0.0960796 7.12822C-5.54782e-06 8.42244 -2.99159e-06 10.0089 1.62876e-07 11.965V12.0557C-9.88738e-06 14.316 -1.78814e-05 16.0879 0.152281 17.4936C0.3077 18.9281 0.630553 20.0904 1.35157 21.0828C1.78807 21.6836 2.31642 22.2119 2.91721 22.6484C3.90961 23.3694 5.07192 23.6923 6.50643 23.8477C7.91211 24 9.68389 24 11.9442 24H14.5173C16.7776 24 18.5494 24 19.9551 23.8477C21.3896 23.6923 22.5519 23.3694 23.5443 22.6484C24.1451 22.2119 24.6735 21.6836 25.11 21.0828C25.831 20.0904 26.1538 18.9281 26.3093 17.4936C26.4616 16.0879 26.4615 14.3161 26.4615 12.0558V11.9642C26.4615 9.99474 26.4615 8.39982 26.3634 7.10036C26.2644 5.79084 26.0613 4.69389 25.6057 3.74826C25.4645 3.45519 25.3003 3.17912 25.11 2.91721C24.6735 2.31642 24.1451 1.78807 23.5443 1.35157C22.5519 0.630553 21.3896 0.3077 19.9551 0.152281ZM4.00235 2.84514C4.62759 2.39088 5.42786 2.12609 6.70529 1.98769C7.99999 1.84742 9.67191 1.84615 12 1.84615H14.4615C16.7896 1.84615 18.4615 1.84742 19.7563 1.98769C21.0337 2.12609 21.8339 2.39088 22.4592 2.84514C22.903 3.16762 23.2934 3.55792 23.6159 4.00172L21.2809 6.33675C19.2112 8.40648 17.7231 9.89173 16.4397 10.871C15.1775 11.834 14.2223 12.4281 13.2438 12.8439L7.4348 16.6813L8.84465 18.091L12.7936 14.6066C13.7934 13.6341 15.2233 12.2575 17.0383 10.9008C18.4615 9.89825 19.756 8.75242 21.0525 7.50932L23.5154 5.0361L23.5167 7.75762C23.5167 9.21123 23.5167 10.6464 23.5167 12.0556V12.0557C23.5167 14.0548 23.5167 15.1966 23.3081 16.1649C23.086 17.1949 22.6374 18.1324 22.0508 18.7977C21.1656 19.7118 19.9281 20.3092 18.5302 20.3114C17.0428 20.3136 15.7517 19.8782 14.6495 19.1777C13.5169 18.4456 12.3107 17.5351 11.2056 16.3447L10.0342 15.1439C9.53778 14.6027 9.19374 14.1935 8.77587 13.9348L5.97288 11.6206L5.20764 12.5714L3.71783 11.0347C4.1489 10.6541 4.82791 9.97373 4.81737 8.90331C4.80515 7.74405 3.6031 5.15404 3.34909 4.71561C2.56312 3.06661 1.94638 2.84264 2.37956 1.72193C2.67735 1.09549 3.48043 1.69143 4.00235 2.84514Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    info@winichange.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mb-8">
              <h5 className="text-xl text-white font-bold  mb-4">A propos</h5>
              <ul className="list-none space-y-2 text-white/60">
                <li>
                  <a href="/aboutUs" >À propos </a>
                </li>
                <li>
                  <a href="/faq" >FAQ</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start  mb-8">
              <h5 className="text-xl text-white font-bold  mb-4">Services</h5>
              <ul className="list-none space-y-2 text-white/60">
                <li>
                  <a href="#" >Achat et Vente</a>
                </li>
                <li>
                  <a href="#" >Binance Direct</a>
                </li>
                <li>
                  <a href="#" >Transfert d'Argent</a>
                </li>
                <li>
                  <a href="#" >Achat de Crédit <br /> d'appel</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start mb-8">
              <h5 className="text-xl text-white font-bold  mb-4">Légal</h5>
              <ul className="list-none none space-y-2 text-white/60">
                <li>
                  <a href="/general-conditions" >Condition d'utilisation</a>
                </li>
                <li>
                  <a href="#" >Politique de conformité AML</a>
                </li>
                <li>
                  <a href="/general-conditions" >Politique <br /> de confidentialité</a>
                </li>
                <li>
                  <a href="/cookies" >Cookie</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start mb-4">
              <h5 className="text-xl text-white font-bold  mb-4">Suivez-Nous</h5>
              <ul className='flex items-center justify-center text-white text-3xl gap-4'>
                <li>
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" >
                    <FaInstagram/>
                  </a>
                </li>
                <li>
                  <a href="#" >
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center py-4 text-white text-sm items-center justify-center">
            © 2024 Winichange. Tous droits réservés. | <a href="#">CGU</a> - <a href="#">Politique de confidentialité</a>
          </div>
      </div>
      </div>
    </footer>
  );
}
