'use client'

import React from 'react'
import Image from "next/image"
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"

const GeneralConditions = () => {
  
    const items = [
        {
          questions: "Qu'est-ce que Winichange ?", 
          answers:"Winichange est une plateforme qui permet l'interopérabilité entre les solutions de transfert d'argent, en reliant les cryptomonnaies aux services de transfert mobile et bancaire en Afrique et à l'international. Notre mission est de faciliter les échanges d'argent de manière simple, rapide et sécurisée",
        },
        {
          questions: "Comment puis-je m'inscrire sur la plateforme ", 
          answers: "Pour vous inscrire, cliquez sur le bouton S'inscrire en haut de la page d'accueil. Suivez les étapes pour créer un compte en fournissant vos informations personnelles et un moyen de vérification"
        },
        {
          questions: "Comment puis-je m'inscrire sur la plateforme ", 
          answers: "Pour vous inscrire, cliquez sur le bouton S'inscrire en haut de la page d'accueil. Suivez les étapes pour créer un compte en fournissant vos informations personnelles et un moyen de vérification"
        },
        {
          questions: "Comment puis-je m'inscrire sur la plateforme ", 
          answers: "Pour vous inscrire, cliquez sur le bouton S'inscrire en haut de la page d'accueil. Suivez les étapes pour créer un compte en fournissant vos informations personnelles et un moyen de vérification"
        },
      ]

      const AccordionItem = ({ questions, answers}:{questions: string, answers:string}) => {
        const [isOpen, setIsOpen ] = useState(false);
        return (
          <div className='cursor-pointer border-b border-black/60 py-7' onClick={() => setIsOpen(!isOpen)}>
          <div className='flex items-center'>
            <span className='flex-1 text-[16px] font-bold'>{questions}</span>
            {isOpen ? <FaMinus className='text-[#126e51]' /> : <FaPlus className='text-[#126e51]' />}
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div 
              initial={{
                opacity: 0,
                height: 0,
                marginTop: 0,
              }}
              animate={{
                opacity:1,
                height:'auto',
                marginTop: "16px"
              }}
              exit={{
                opacity: 0,
                height: 0,
                marginTop: 0,
              }}
              >
              {answers}
            </motion.div>
            )}
          </AnimatePresence>
        </div> 
        )
      }

  return (
    <>
      <Header />
      <div className='text-white/80'>
          <h1 className=' pt-56 text-white text-3xl text-center '>
            <span className='font-semibold text-white py-0.5 px-2'>TERMES, <br /> CONDITION D'UTILSATION & POLITIQUE DE CONFIDENTIALITES</span>
          </h1>
      </div>
      <div className='pt-10 md:py-20 h-full w-full'>
        <div className='container mx-auto px-5 lg:px-20 py-10 '>
        <div>
    <p className='mt-2 text-white/80'>
        Les présentes Conditions Générales d'Utilisation de ce site sont réparties en plusieurs sections. 
        Avant d'accepter ces conditions, il est essentiel de lire attentivement chacune des sections ci-dessous 
        et de consulter les liens correspondants. Ensemble, ces éléments constituent les Conditions Générales et 
        la Politique de Confidentialité de la plateforme WiniChange.
    </p>
      </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-white'>Qui Sommes-Nous ?</h1>
            <p className='mt-2 text-white/80'>
                WiniChange est une société par actions simplifiée (SAS) inscrite au RCCM de la République du Bénin 
                sous le numéro RB/ABC/21 B 4180. Son siège social se situe à Abomey-Calavi, Quartier TOKPA ZOUNGO, 
                dans l'Immeuble Fondation Suzane MEDE, 02 BP 348, Cotonou, Bénin.
            </p>
        </div>
        <div className='mt-10'>
        <div>
            <h1 className='font-bold text-2xl text-white'>Que faisons-nous ?</h1>
            <div className='mt-5'>
                <p className=' text-white/80'>
                    WiniChange SAS (ci-après « WiniChange ») permet aux particuliers (ci-après les « Utilisateurs » ou les « Clients ») d’accéder à des services liés aux crypto-actifs. Ces services, définis plus en détail dans le Lexique annexé, incluent notamment :
                </p>
                <ul className='text-white'>
                    <li>L'achat et la vente de crypto-actifs en échange de monnaies légales (monnaie fiat).</li>
                    <li>L'échange de crypto-actifs, autrement dit la conversion d’un crypto-actif en un autre.</li>
                </ul>
            </div>
            <p className=' text-white/80'>WiniChange propose ces services aux Utilisateurs via la présente plateforme WiniChange (ci-après « la Plateforme »).</p>
        </div>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-white'>Que contiennent ces Conditions Générales et quel est leur champ d’application ?</h1>
            <p className='mt-2 text-white/80'>
                Les présentes Conditions Générales incluent les Conditions Générales d'Utilisation (CGU) ainsi que les Conditions Générales de Service (ci-après désignées ensemble « Conditions Générales ») de la plateforme WiniChange. Ces conditions régissent l'utilisation des services offerts aux utilisateurs sur la plateforme. 
                Elles forment, avec la facture, les Conditions Particulières (le cas échéant), le document de Connaissance du Client (KYC), ou tout autre document pertinent, les seuls documents contractuels engageant les parties. Tout autre support (prospectus, présentation des services, catalogues ou photographies de crypto-actifs, etc.) est uniquement fourni à titre indicatif et n'a pas de valeur contractuelle. 
                Ces Conditions Générales sont applicables dans tous les pays où WiniChange opère. Toute utilisation de la Plateforme implique l'acceptation de ces Conditions Générales, ainsi que du Glossaire WiniChange et de la Politique de Confidentialité annexée. Ces documents font partie intégrante du cadre contractuel. Le Glossaire WiniChange précise les termes et concepts employés dans les Conditions Générales, tandis que la Politique de Confidentialité détaille les modalités de traitement des données personnelles collectées ou fournies par les utilisateurs.
            </p>
        </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default GeneralConditions
