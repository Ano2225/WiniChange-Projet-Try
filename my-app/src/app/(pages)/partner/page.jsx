'use client'

import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import { FaArrowRightLong } from "react-icons/fa6"
import { twMerge } from 'tailwind-merge'
import AffiliateCondition from './AffiliateSection'

// Assets
import walletSky from "@/app/assets/wallsky.png"
import Logo from '@/app/assets/logo.png'
import partner from "@/app/assets/p2.png"
import crypPart from "@/app/assets/p4.jpg"
import secured from "@/app/assets/SecureLogo.png"
import partner2 from "@/app/assets/partner2.jpg"
import paid from "@/app/assets/paid.png"

// Components
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"
import Cookies from "@/app/components/cookies"
import Link from 'next/link'

// Variants for animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5 * i,
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const becomePartner1 = [
  {
    id: "1",
    text: "Détenir une entreprise",
    specialText: "officiellement enregistrée.",
    color: "blue",
  },
  {
    id: "2",
    text: "Exercer des activités nécessitant l'utilisation de crypto-monnaies.",
    specialText: "Par exemple : trader ou revendeur de crypto-monnaies.",
    color: "indigo",
  },
];

const becomePartner2 = [
  {
    id: "3",
    text: "Réalisez des transactions allant jusqu'à",
    specialText: "2 000 ou plus par semaine, en toute simplicité et sécurité.",
    color: "green",
  },
  {
    id: "4",
    text: "Accédez à des options de paiement variées telles que",
    specialText: "Mobile Money ou votre compte bancaire, pour plus de flexibilité dans vos transactions.",
    color: "blue",
  },
];


const advantages = [
  {
    id: 1,
    images: walletSky,
    title: "Taux imbattables",
    text: "Bénéficiez des meilleurs taux du marché pour maximiser vos gains à chaque transaction.",
    color: "green",
  },
  {
    id: 2,
    images: secured,
    title: "Transaction simplifiée",
    text: "Simplifiez vos opérations en traitant des volumes importants rapidement et sans compromis sur la sécurité.",
    color: "blue",
  },
  {
    id: 3,
    images: paid,
    title: "Multiples options de paiement",
    text: "Profitez d'une diversité de solutions de paiement adaptées à vos besoins.",
    color: "indigo",
  },
];

const affiliateConditions = [
  {
    id: "🚀  Inscription rapide",
    text: "Nous avons simplifié au maximum votre inscription et la vérification de votre compte. Recevez ",
    specialText: "votre premier lien d'affiliation en ou votre code de parrainage un rien de temps !",
    color: "blue",
  },
  {
    id: "Paiements rapides et faciles",
    text: "Nous avons réduit nos temps d'attente au strict minimum, ainsi que la limite de retrait minimum du programme . Vous pouvez maintenant retirer n'importe quel montant ",
    specialText: "à partir de 500 XOF à travers un choix de 40 options de paiement.",
    color: "indigo",
  }
];

const Partner = () => {
  return (
    <>
      <Header />
   
        <section className="md:px-16 flex flex-col md:flex-row pt-36 items-center justify-center p-5 h-full w-full">
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
          <div className="flex-1 w-full md:ml-5 py-8 md:px-20">
           <div className='text-center'>
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">Programme d'Affiliation</h2>
           <p className='text-black/80'>Devenez partenaire direct et gagnez de l'argent en faisant la promotion de nos services</p>
           </div>
            <div className="flex flex-col space-y-4">
              {affiliateConditions.map((item) => (
                <AffiliateCondition
                  key={item.id}
                  id={item.id}
                  text={item.text}
                  specialText={item.specialText}
                  color={item.color}
                />
              ))}
            </div>
          </div>
          
        </section>
        <div className="py-16">
      <div className="container mx-auto flex flex-col items-center justify-center text-center px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-6">
            Rejoignez-nous  !
          </h1>
          <p className="text-base lg:text-lg text-black/80 mb-8">
            Devenez partenaire de Winichange et profitez des meilleurs taux ainsi que d'une rapidité inégalée pour vos transactions. Rejoignez notre réseau de partenaires de confiance dès aujourd'hui.
          </p>
        <div className='flex items-center justify-center'>
            <button className="flex gap-3 rounded-full bg-[#126e51] text-white font-bold px-6 py-3 text-sm lg:text-base shadow-lg hover:bg-[#0e5741] transition duration-300 ease-in-out transform hover:scale-105">
                <span>Je me lance</span>
                <FaArrowRightLong />
            </button>
        </div>
        </div>
      </div>
    </div>
    <section className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Deviens Partenaire Maintenant</h2>
        <p className="text-black/80 mb-6">
          Vous êtes une Entreprise officiellement enregistrée, et votre activité fait appel à l’usage de la cryptomonnaie :
          <br />
          <span className="font-semibold">Exemples :</span> Trader, Revendeur de crypto…
        </p>
        <p className="text-gray-600 mb-6">
          Votre activité implique l’usage des transferts d’argent.
        </p>
        <p className="text-gray-600 mb-6">
          Vous êtes investisseur.
        </p>
        <p className="text-gray-600 mb-6">
          Saisissez cette opportunité en nous envoyant soigneusement votre demande de partenariat à travers ce formulaire.
        </p>
        <Link href="#" className="inline-block bg-[#126e51] text-white py-3 px-6 rounded-lg shadow-lg  transition">
            Deviens Partenaire
        </Link>
      </div>
     </section>
      <Footer />
      <Cookies />
    </>
  )
}

export default Partner;
