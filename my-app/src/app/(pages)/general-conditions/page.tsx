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
      <div className='pt-10 md:py-20 h-full w-full'>
        <div className='container mx-auto px-5 lg:px-20 py-10 '>
            <div className='flex flex-col gap-12'>
                <div>
                    <h1 className='font-bold text-2xl text-green-800'>Termes, Conditions d'utilisation et police de confidentialité</h1>
                    <p className='mt-5'>
                        Les conditions générales d'utilisation de ce site web sont structurées en plusieurs sections.
                        Avant d'accepter ces conditions, il est impératif de prendre connaissance des sections suivantes
                        et de consulter les liens figurant dans la boîte ci-dessous. Ensemble, ces sections constituent les Conditions Générales et 
                        la Politique de Confidentialité de la plateforme WiniChange.
                    </p>
                </div>
                <div>
                    <h1 className='font-bold text-2xl text-green-800'>Qui Sommes-Nous ?</h1>
                    <p className='mt-5'>
                        WiniChange est une société par actions simplifiée (SAS) enregistrée au RCCM de la République du Bénin
                        sous le numéro RB/ABC/21 B 4180 et dont le siège social est situé à Abomey-Calavi Quartier TOKPA ZOUNGO Immeuble Fondation Suzane MEDE 02 BP 348 Cotonou Bénin.
                    </p>
                </div>
                <div>
                    <h1 className='font-bold text-2xl text-green-800'>Que faisons-nous ?</h1>
                    <p className='mt-5'>
                        WiniChange SAS (ci-après « WiniChange ») permet aux personnes physiques (ci-après les « Utilisateurs » ou les « Clients ») d’accéder à des Services (tel que ce terme est défini dans le Lexique en annexe) relatifs aux Crypto-actifs. Sans préjudice de la définition du terme « Services », ceux-ci comprennent exclusivement :
                        <ul>
                            <li>L’achat et la vente de crypto-actifs en contrepartie de monnaies ayant cours légal (monnaie fiat).</li>
                            <li>L’échange de crypto-actifs, autrement dit la conversion d’un crypto-actif contre un autre.</li>
                        </ul>
                    </p>
                    <p>WiniChange permet aux Utilisateurs de bénéficier des Services qu’il propose à travers la présente Plateforme WiniChange (ci-après « la Plateforme »).</p>
                </div>
                <div>
                    <h1 className='font-bold text-2xl text-green-800'>Que contiennent ces Conditions Générales et quel est leur champ d’application ?</h1>
                    <p className='mt-5'>Les présentes Conditions Générales incluent les Conditions Générales d’Utilisation (CGU) ainsi que les Conditions Générales de Service (l’ensemble desdits documents étant ci-après désigné sous le terme « Conditions Générales ») de la Plateforme WiniChange. Ces Conditions Générales régissent les Services offerts à tout Utilisateur sur la Plateforme. Elles constituent, avec la facture, les Conditions Particulières, le cas échéant, et le document de Connaissance du Client (KYC) ou tout autre document en lieu et place, les seuls documents contractuels liant les Parties, à l'exclusion de tout autre document/support (prospectus, présentation des Services, catalogues ou photographies de Crypto-actifs, etc.) qui sont seulement indicatifs et non contractuels. Ces Conditions Générales sont applicables dans tous les pays où l’Éditeur propose ses services. Toute utilisation de la présente Plateforme est soumise au respect des présentes Conditions Générales, ainsi qu’au Glossaire WiniChange et à la Politique de Confidentialité en annexes. Ces documents font partie intégrante des documents contractuels. Le Glossaire WiniChange définit les termes, notions et concepts utilisés dans les présentes Conditions Générales. La Politique de Confidentialité définit les conditions dans lesquelles WiniChange traite les données personnelles que l’Utilisateur collecte ou que l’Utilisateur fournit à la plateforme.</p>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default GeneralConditions
