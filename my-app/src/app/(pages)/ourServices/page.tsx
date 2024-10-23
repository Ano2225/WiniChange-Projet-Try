'use client';

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { twMerge } from 'tailwind-merge';
import CircleTrans from '@/app/sections/circleTrans'
import exchange from "@/app/assets/exchangee.webp";
import binance from "@/app/assets/Binance.png";
import sendMoney from "@/app/assets/ph2.webp";
import Send from "@/app/assets/Send.png";
import { Header } from "@/app/sections/Header";
import Footer from "@/app/sections/Footer";
import { FaArrowRightLong } from 'react-icons/fa6';

const OurService = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: -10, transition: { duration: 0.6 } },
  };

  const becomePartner1 = [
    {
      id: "1",
      image: exchange,
      text: "Nous simplifions vos achats et ventes de cryptomonnaies et de monnaies électroniques avec divers moyens de paiement.",
      specialText: "officiellement enregistrée.",
      color: "blue",
      title: "Achat et vente",
    },
    {
      id: "2",
      image: binance,
      text: "Ce service vous permet de recharger instantanément votre wallet Binance depuis notre plateforme avec divers moyens de paiement.",
      specialText: "Par exemple : trader ou revendeur de crypto-monnaies.",
      color: "indigo",
      title:"Binance Direct"
    },
  ];

  const becomePartner2 = [
    {
      id: "3",
      image: sendMoney,
      text: "Ce service vous permet de transférer de l'argent entre différents moyens de paiement, y compris à l'international, via notre plateforme et ses multiples options de paiement.",
      color: "green",
      title: "Transfert d'argent",
    },
    {
      id: "4",
      image: Send,
      text: "Ce service vous permet d'acheter du crédit de communication de la manière la plus simple, via notre plateforme et ses multiples moyens de paiement.",
      color: "blue",
      title: "Achat de crédit d'appel"
    },
  ];
  
  return (  
      <>    
          <Header />    
          <div className=' min-h-48 py-28 text-white'>
           <div className='container lg:flex items-center justify-center'>
             <div>
              <h1 className='text-[#126e51] bg-white p-2 w-fit font-bold mb-5 text-4xl'>Nos services</h1>
               <h1 className='text-3xl lg:text-4xl font-semibold mb-4'>
                    Découvrez Tous Nos Services Exclusifs
                </h1>
               <p>Chaque jour, nous mettons tout en œuvre pour vous offrir une expérience unique et répondre précisément à vos besoins. Profitez de nos services adaptés à vos attentes !</p>
             </div>
             <div className='mr-5'>
                <CircleTrans />
             </div>
           </div>
       </div>
       <div className='pt-10 md:py-24 h-full w-full'>
         <div className='container mx-auto px-5 lg:px-20 py-16 flex flex-col items-center gap-20'>
             <div className='flex flex-col items-center align-center'>
                 <h1 className='font-bold text-xl md:text-3xl text-white'>Tous nos services</h1>              
                 <div className='mt-10'>
                 <div className='flex flex-col gap-10 lg:flex-row items-center'>
                     <motion.div
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.2 }}
                       variants={imageVariants}
                       className="md:order-first"  // Classe pour changer l'ordre
                     >
                       {/* <Image
                         src={crypPart}
                         width={400}
                         height={400}
                         alt="PartnerSmile"
                         className='max-w-[400px] rounded-2xl shadow-xl mt-5 items-center'
                       /> */}
                     </motion.div>
                     <motion.div
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.2 }}
                       variants={containerVariants}
                     >
                       <div>
                         {becomePartner1.map((items, index) => (
                           <motion.div
                             key={items.id}
                             custom={index}
                             variants={itemVariants}
                             className={twMerge(
                               {
                                 blue: 'bg-blue-300',
                                 indigo: 'bg-indigo-300',
                                 green: 'bg-green-300',
                               }[items.color] || 'bg-gray-300',
                               'p-2 rounded-lg mt-5 max-w-[350px] hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-yellow-500 duration-300 cursor-pointer'
                             )}
                           >
                               <Image
                                 src={items.image}
                                 width={400}
                                 height={400}
                                 alt="PartnerSmile"
                                 className='max-w-[70px] mb-5 items-center'
                               /> 
                             <p className='ml-5'>
                               {items.text}
                             </p>
                           </motion.div>
                         ))}
                       </div>
                     </motion.div>
                     <motion.div
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.2 }}
                       variants={containerVariants}
                     >
                       <div>
                       {becomePartner2.map((items, index) => (
                           <motion.div
                             key={items.id}
                             custom={index}
                             variants={itemVariants}
                             className={twMerge(
                               {
                                 blue: 'bg-blue-300',
                                 indigo: 'bg-indigo-300',
                                 green: 'bg-green-300',
                               }[items.color] || 'bg-gray-300',
                               'p-2 rounded-lg mt-5 max-w-[350px] hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-yellow-500 duration-300 cursor-pointer'
                             )}
                           >
                               <Image
                                 src={items.image}
                                 width={400}
                                 height={400}
                                 alt="PartnerSmile"
                                 className='max-w-[70px] mb-5 items-center rounded-2xl'
                               /> 
                             <p className='ml-5'>
                               {items.text}
                             </p>
                           </motion.div>
                         ))}
                       </div>
                     </motion.div>
                 </div>
             </div>
             </div>
         </div>
       </div>
      <Footer />
    </>
  );
};

 export default OurService;