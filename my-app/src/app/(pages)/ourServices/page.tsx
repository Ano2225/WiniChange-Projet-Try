'use client';

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { twMerge } from 'tailwind-merge';
import CircleTrans from '@/app/sections/circleTrans'
import exchange from "@/app/assets/exchangee.webp";
import binance from "@/app/assets/Binance.png";
import sendMoney from "../../assets/img-1.png";
import Send from "../../assets/img-2.png";
import { Header } from "@/app/sections/Header";
import Footer from "@/app/sections/Footer";
import { FaArrowRight } from "react-icons/fa6";


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

  const becomePartner = [
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
          <div className=' min-h-48 py-28 '>
           <div className='container lg:flex items-center justify-center'>
           <div className="max-w-xl mb-8 lg:mb-0 lg:mr-8">
      <h1 className="text-white bg-[#126e51] p-2 w-fit font-bold mb-5 text-4xl rounded-lg">Nos services</h1>
      <h1 className="text-3xl lg:text-4xl font-semibold mb-4">
        Découvrez Tous Nos Services Exclusifs
      </h1>
      <p className="text-base lg:text-lg">
        Chaque jour, nous mettons tout en œuvre pour vous offrir une expérience unique et répondre précisément à vos besoins. Profitez de nos services adaptés à vos attentes !
      </p>
    </div>
    <div className="w-full lg:w-auto flex justify-center lg:justify-end">
      <Image
        src="/images/shot.jpg"
        width={400}
        height={400}
        alt="PartnerSmile"
        className="max-w-[250px] lg:max-w-[280px] rounded-2xl shadow-xl mt-5 lg:mt-0"
      />
    </div>
           </div>
       </div>
       <div className='md:py-4 h-full w-full'>
         <div className='container mx-auto px-5 lg:px-20 pb-16 flex flex-col items-center gap-20'>
             <div className='flex flex-row items-center align-center'>
             <motion.div
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.2 }}
                       variants={containerVariants}
                     >
                       <div className='flex gap-5 flex-col md:flex-row'>
                         {becomePartner.map((items, index) => (
                           <motion.div
                             key={items.id}
                             custom={index}
                             variants={itemVariants}
                             className={`p-2 rounded-lg mt-5 max-w-[350px] hover:shadow-2xl cursor-pointer ${becomePartner.indexOf(items)%2==0 ? "bg-[#126e51]" : "bg-yellow-500" }`}>
                               <div className=''>
                                <Image
                                  src={items.image}
                                  width={400}
                                  height={400}
                                  alt="PartnerSmile"
                                  className='max-w-[70px] mb-5 items-center rounded-lg'
                                />
                                <p className='font-semibold text-lg text-[#126e51] bg-white w-fit p-1 mb-3 rounded-lg'>{items.title}</p>  
                              </div>
                             <p className=''>
                               {items.text}
                             </p>
                             <FaArrowRight 
                             size={30}
                             className={`ml-auto ${becomePartner.indexOf(items)%2==0 ? "text-white" : "text-green-700"} self-end`}
                             />
                           </motion.div>
                         ))}
                       </div>
                     </motion.div>
             </div>
         </div>
       </div>
      <Footer />
    </>
  );
};

 export default OurService;