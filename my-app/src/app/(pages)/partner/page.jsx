'use client'

import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import { FaArrowRightLong } from "react-icons/fa6"
import { twMerge } from 'tailwind-merge'
import AffiliateCondition from './AffiliateSection'
import partner2 from "@/app/assets/partner2.jpg"
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"
import Cookies from "@/app/components/cookies"
import Link from 'next/link'
import { FaRegHandshake, FaUserCheck } from 'react-icons/fa'


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
    text: "Le temps d'attente est réduit au minimum, et le montant de retrait minimum est de 500 XOF, ",
    specialText: "vous permettant de retirer librement grâce à 40 options de paiement.",
    color: "yellow",
    icon: FaRegHandshake
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
              width={600}
              height={400}
              alt="PartnerSmile"
              objectFit="cover"
              className="rounded-2xl shadow-xl mt-5 w-full md:w-auto"
            />
          </div>
          <div className="flex-1 w-full md:ml-5 py-8 md:px-20">
           <div className='text-center'>
           <h2 className="text-[#126e51] text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">Programme d'Affiliation</h2>
           <p className='text-black/80'>Devenez partenaire direct et gagnez de l'argent en faisant la promotion de nos services</p>
           </div>
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
        </section>
        
    <section className="bg-gradient-to-b from-white to-gray-50 rounded-t-[5rem] py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
      
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-[#126e51]">
              Deviens Partenaire Maintenant
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#126e51] to-green-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="p-6 bg-white border-2 border-[#126e51] rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-semibold uppercase text-[#126e51] mb-4">Entreprise Crypto</h3>
            <p className="text-gray-700">
              Vous êtes une Entreprise officiellement enregistrée, et votre activité fait appel à l'usage de la cryptomonnaie.
              <br />
              <span className="font-semibold">Exemples :</span> Trader, Revendeur de crypto…
            </p>
          </motion.div>

          <motion.div 
            className="p-6 bg-white border-2 border-[#126e51]  rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-semibold text-[#126e51] mb-4 uppercase">Services Financiers</h3>
            <p className="text-gray-700">
              Votre activité implique l'usage des transferts d'argent.
              Vous êtes investisseur professionnel.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="text-center p-8 max-w-2xl mx-auto"
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 mb-8">
            Saisissez cette opportunité en nous envoyant soigneusement votre demande de partenariat à travers ce formulaire.
          </p>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="#" 
              className="inline-flex items-center gap-2  bg-[#126e51] text-white py-4 px-8 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Deviens Partenaire
              <FaArrowRightLong />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
      <Footer color="bg-white"/>
      <Cookies />
    </>
  )
}

export default Partner;
