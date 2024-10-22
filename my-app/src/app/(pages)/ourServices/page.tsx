// 'use client';

// import React from 'react';
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { twMerge } from 'tailwind-merge';
// import exchange from "@/app/assets/exchangee.webp";
// import binance from "@/app/assets/Binance.png";
// import sendMoney from "@/app/assets/ph2.webp";
// import Send from "@/app/assets/Send.png";
// import { Header } from "@/app/sections/Header";
// import Footer from "@/app/sections/Footer";
// import { FaArrowRightLong } from 'react-icons/fa6';

// const OurService = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.5 * i,
//       },
//     }),
//   };
  
//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };
  
//   const imageVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: -10, transition: { duration: 0.6 } },
//   };

//   const becomePartner1 = [
//     {
//       id: "1",
//       image: exchange,
//       text: "Nous simplifions vos achats et ventes de cryptomonnaies et de monnaies électroniques avec divers moyens de paiement.",
//       specialText: "officiellement enregistrée.",
//       color: "blue",
//       title: "Achat et vente",
//     },
//     {
//       id: "2",
//       image: binance,
//       text: "Ce service vous permet de recharger instantanément votre wallet Binance depuis notre plateforme avec divers moyens de paiement.",
//       specialText: "Par exemple : trader ou revendeur de crypto-monnaies.",
//       color: "indigo",
//       title:"Binance Direct"
//     },
//   ];

//   const becomePartner2 = [
//     {
//       id: "3",
//       image: sendMoney,
//       text: "Ce service vous permet de transférer de l'argent entre différents moyens de paiement, y compris à l'international, via notre plateforme et ses multiples options de paiement.",
//       color: "green",
//       title: "Transfert d'argent",
//     },
//     {
//       id: "4",
//       image: Send,
//       text: "Ce service vous permet d'acheter du crédit de communication de la manière la plus simple, via notre plateforme et ses multiples moyens de paiement.",
//       color: "blue",
//       title: "Achat de crédit d'appel"
//     },
//   ];
  
//   return (
//     <>
//       <Header />
//       <div className='min-h-20'>
//       </div>
//       <div className='pt-10 md:py-16 h-full w-full min-h-48'>
//         <div className='container mx-auto px-5 lg:px-20 py-0 flex flex-col items-center gap-20'>
//           <div className='flex flex-col items-center'>
//             <h1 className='font-bold text-4xl md:text-5xl text-white'>Nos services</h1>
//             <p className='max-w-xl text-center text-white/80 mt-10'>Chaque jour, nous travaillons pour vous garantir la meilleure expérience possible et répondre au mieux à vos besoins.</p>
//             <div className='my-8'>
//               <div className='flex justify-center flex-col gap-10 lg:flex-row items-center'>
//                 <motion.div
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, amount: 0.2 }}
//                   variants={containerVariants}
//                 >
//                   {becomePartner1.map((item, index) => (
//                     <motion.div
//                       key={item.id}
//                       custom={index}
//                       variants={itemVariants}
//                       className={twMerge(
//                         {
//                           blue: 'bg-blue-300',
//                           indigo: 'bg-indigo-300',
//                           green: 'bg-green-300',
//                         }[item.color] || 'bg-gray-300',
//                         'p-2 rounded-lg mt-5 max-w-[450px]'
//                       )}
//                     >
//                       <motion.div variants={imageVariants}>
//                      <div className='flex items-center gap-4'>
//                         <Image
//                             src={item.image}
//                             width={400}
//                             height={400}
//                             alt="PartnerSmile"
//                             className='max-w-[70px] mb-5 rounded-2xl'
//                           />
//                           <span className='text-black font-bold text-xl'>{item.title}</span>
//                      </div>
//                       </motion.div>
//                       <p className='ml-5'>
//                         {item.text} <span className='text-black'>{item.specialText}</span>
//                       </p>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 <motion.div
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, amount: 0.2 }}
//                   variants={containerVariants}
//                 >
//                   {becomePartner2.map((item, index) => (
//                     <motion.div
//                       key={item.id}
//                       custom={index}
//                       variants={itemVariants}
//                       className={twMerge(
//                         {
//                           blue: 'bg-blue-300',
//                           indigo: 'bg-indigo-300',
//                           green: 'bg-green-300',
//                         }[item.color] || 'bg-gray-300',
//                         'p-2 rounded-lg mt-5 max-w-[450px]'
//                       )}
//                     >
//                       <motion.div variants={imageVariants}>
//                       <div className='flex items-center gap-4'>
//                         <Image
//                             src={item.image}
//                             width={400}
//                             height={400}
//                             alt="PartnerSmile"
//                             className='max-w-[70px] mb-5 rounded-2xl'
//                           />
//                           <span className='text-black font-bold text-xl'>{item.title}</span>
//                      </div>
//                       </motion.div>
//                       <p className='ml-5'>
//                         {item.text}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </div>
//               <div className='py-10 mt-4 lg:mt-10'>
//               <div className="container  mx-auto flex flex-col items-center justify-center text-center px-6 lg:px-8 lg:flex-row-reverse">
//                 <div className="max-w-xl">
//                   <h1 className="text-white text-3xl lg:text-4xl font-extrabold  leading-tight my-10">
//                     Rejoignez-nous dès aujourd'hui !
//                   </h1>
//                   <p className="text-base lg:text-lg text-white/80 mb-8">
//                     Profitez des meilleurs taux et d'une rapidité inégalée pour vos transactions. 
//                     </p>
//                   <div className='flex items-center justify-center'>
//                       <button className="flex gap-3 rounded-full bg-white text-[#126e51] font-bold px-6 py-3 text-sm lg:text-base shadow-lg hover:bg-[#0e5741] transition duration-300 ease-in-out transform hover:scale-105">
//                           <span>Je m'inscris</span>
//                           <FaArrowRightLong />
//                       </button>
//                   </div>
//                  </div>
//                  <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center mx-4">
//                   <Image
//                     src="/images/black-men.jpg"
//                     alt="Join Us"
//                     width={500}
//                     height={500}
//                     className="rounded-2xl shadow-xl"
//                   />
//                 </div>
//             </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default OurService;

'use client'

import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import CircleTrans from '@/app/sections/circleTrans'
import { FaArrowRightLong } from "react-icons/fa6";
import { twMerge } from 'tailwind-merge'
import exchange from "@/app/assets/exchangee.webp"
import binance from "@/app/assets/Binance.png"
import sendMoney from "@/app/assets/ph2.webp"
import Send from "@/app/assets/Send.png"
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"

const Partner = () => {
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
      image:exchange,
      text: "Découvrez une plateforme intuitive pour acheter et vendre des cryptomonnaies avec facilité. ",
      specialText:"officiellement enregistrée.",
      color:"blue",
    },
    {
      id: "2",
      image: binance,
      text: "Accédez à Binance directement depuis notre plateforme pour des transactions simplifiées.", 
      specialText:"Par exemple : trader ou revendeur de crypto-monnaies.",
      color:"indigo",
    },
  ];
  const becomePartner2 = [
    {
      id: "3",
      image: sendMoney,
      text: "Envoyez de l'argent à vos proches rapidement et en toute sécurité. ",
      color:"green",
    },
    {
      id: "4",
      image:Send,
      text: "Achetez facilement des crédits de communication pour rester connecté. ",
      color:"blue",
    },
  ];
  
  return (
    <>
      <Header />
      <div className='bg-gradient-to-tl from-[#126e51]  to-black min-h-48 py-28 text-white'>
          <div className='container lg:flex items-center justify-center'>
            <div>
              <h1 className='text-3xl lg:text-4xl font-semibold mb-4'>
                  C'est quoi WiniChange ?
                </h1>
              <p>Winichange est la solution idéale pour répondre à tous vos besoins de transfert d'argent. Quelques uns de nos moyens d'echanges</p>
              <button className='flex gap-2 items-center rounded-xl bg-white text-[#126e51] font-bold mt-5 px-4 py-2 text-sm shadow-sm border-2 border-green-00'>
                  <span>Nous rejoindre </span>
                  <FaArrowRightLong/> 
              </button>
            </div>
            <CircleTrans />
          </div>
      </div>
      <div className='pt-10 md:py-24 h-full w-full'>
        <div className='container mx-auto px-5 lg:px-20 py-16 flex flex-col items-center gap-20'>
            <div className='flex flex-col items-center align-center'>
                <h1 className='font-bold text-xl md:text-3xl'>Tous nos services</h1>
                
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
                              'p-2 rounded-lg mt-5 max-w-[350px]'
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
                              'p-2 rounded-lg mt-5 max-w-[350px]'
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
  )
}

export default Partner
