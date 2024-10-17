'use client'

import React from 'react'
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/app/sections/Header';
import Footer from '@/app/sections/Footer';


const Faq = () => {
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
        <Header/>
    <div className='text-[#2b2b2b] pt-40 pb-20 flex flex-col justify-center'>
      <div className='container mx-auto px-5 lg:px-20'>
        <h2 className='text-center text-3xl lg:text-4xl sm:max-w-[648px] mx-auto font-bold tracking-tighter'>Questions frequemment posées</h2>
        <div className='mt-12 max-w-[648px] mx-auto'>
          {items.map(({ questions, answers}) => (
            <AccordionItem key={questions}  questions={questions} answers={answers}/>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Faq
