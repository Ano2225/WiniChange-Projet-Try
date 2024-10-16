'use client'

import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import CircleTrans from '@/app/sections/circleTrans'
import walletSky from "@/app/assets/wallsky.png"
import { FaArrowRightLong } from "react-icons/fa6";
import Logo from '@/app/assets/logo.png';
import Cookies  from "@/app/components/cookies"
import { twMerge } from 'tailwind-merge'
import exchange from "@/app/assets/exchangee.webp"
import binance from "@/app/assets/Binance.png"
import sendMoney from "@/app/assets/ph2.webp"
import Send from "@/app/assets/Send.png"
import paid from "@/app/assets/paid.png"
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
          <div className='container lg:flex items-center justify-center py-10'>
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
      <div className='pt-10 md:py-16 h-full w-full'>
        <div className='container mx-auto px-5 lg:px-20 py-0 flex flex-col items-center gap-20'>
            <div className='flex flex-col items-center align-center'>
                <h1 className='font-bold text-3xl md:text-4xl '>Tous nos services</h1>
                
                <div className='my-8'>
                <div className='flex flex-col gap-10 lg:flex-row items-center'>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={imageVariants}
                      className="md:order-first"  
                    >
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
