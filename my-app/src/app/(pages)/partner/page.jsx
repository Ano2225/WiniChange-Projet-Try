'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRightLong, FaRegHandshake, FaUserCheck } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';
import AffiliateCondition from './AffiliateSection';
import partner2 from '@/app/assets/partner2.jpg';
import { Header } from '@/app/sections/Header';
import Footer from '@/app/sections/Footer';
import Cookies from '@/app/components/cookies';
import Link from 'next/link';

const affiliateConditions = [
  {
    id: "Inscription rapide",
    text: "Nous avons simplifié au maximum le processus d'inscription et de vérification de votre compte.",
    specialText: "Recevez votre premier lien d'affiliation ou votre code de parrainage en un rien de temps !",
    color: "green",
    icon: FaUserCheck,
  },
  {
    id: "Paiements faciles et rapides",
    text: "Le temps d'attente est réduit au minimum, et le montant de retrait minimum est de 500 XOF,",
    specialText: "vous permettant de retirer librement grâce à 40 options de paiement.",
    color: "yellow",
    icon: FaRegHandshake,
  },
];

const Partner = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col md:flex-row items-center justify-center w-full h-full pt-36 bg-gradient-to-tr from-[#126e51] to-black p-5 md:px-16">
        <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
          <Image
            src={partner2}
            width={500}
            height={500}
            alt="PartnerSmile"
            objectFit="cover"
            className="rounded-2xl shadow-xl mt-5 w-full md:w-auto"
          />
        </div>

        <div className="flex-1 w-full py-8 md:px-20 md:ml-5 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Programme d'Affiliation</h2>
          <p className="text-white/80 mb-8">Devenez partenaire direct et gagnez de l'argent en faisant la promotion de nos services</p>

          <div className="flex flex-col space-y-4">
            {affiliateConditions.map((item) => (
              <AffiliateCondition
                key={item.id}
                id={item.id}
                text={item.text}
                specialText={item.specialText}
                color={item.color}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
        <div className="py-16 container mx-auto flex flex-col items-center justify-center text-center px-6 lg:px-8">
          <div className="max-w-xl">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-8">
              Devenez notre partenaire dès aujourd'hui !
            </h1>
            <p className="text-white/80 mb-4">
              Gagnez de l'argent en promouvant nos services tout en profitant des meilleurs taux et d'une rapidité inégalée. Rejoignez dès maintenant notre réseau de confiance.
            </p>
            <div className='flex items-center justify-center'>
            <button className="flex items-center gap-3 rounded-full bg-yellow-500 text-white font-bold px-8 py-3 text-sm lg:text-base shadow-lg hover:bg-green-800 transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <span>Go</span>
              <FaArrowRightLong />
            </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-t-[5rem] py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#126e51] mb-8">Deviens Partenaire Maintenant</h2>
          <p className="text-black/80 mb-6">
            Vous êtes une Entreprise officiellement enregistrée, et votre activité fait appel à l’usage de la cryptomonnaie :
            <br />
            <span className="font-semibold">Exemples :</span> Trader, Revendeur de crypto…
          </p>
          <p className="text-black/80 mb-6">Votre activité implique l'usage des transferts d'argent.</p>
          <p className="text-black/80 mb-6">Vous êtes investisseur.</p>
          <p className="text-black/80 mb-6">
            Saisissez cette opportunité en nous envoyant soigneusement votre demande de partenariat à travers ce formulaire.
          </p>
          <Link href="#" className="inline-block bg-[#126e51] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#126e51f2] transition">
            Deviens Partenaire
          </Link>
        </div>
      </section>

      <Footer color="bg-white" />
      <Cookies />
    </>
  );
};

export default Partner;
