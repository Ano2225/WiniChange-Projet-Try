'use client';

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { twMerge } from 'tailwind-merge';
import exchange from "@/app/assets/exchangee.webp";
import binance from "@/app/assets/Binance.png";
import sendMoney from "@/app/assets/ph2.webp";
import Send from "@/app/assets/Send.png";
import { Header } from "@/app/sections/Header";
import Footer from "@/app/sections/Footer";
import CallToAction from '@/app/components/CallToAction';
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
      text: "Découvrez une plateforme intuitive pour acheter et vendre des cryptomonnaies avec facilité.",
      specialText: "officiellement enregistrée.",
      color: "blue",
    },
    {
      id: "2",
      image: binance,
      text: "Accédez à Binance directement depuis notre plateforme pour des transactions simplifiées.",
      specialText: "Par exemple : trader ou revendeur de crypto-monnaies.",
      color: "indigo",
    },
  ];

  const becomePartner2 = [
    {
      id: "3",
      image: sendMoney,
      text: "Envoyez de l'argent à vos proches rapidement et en toute sécurité.",
      color: "green",
    },
    {
      id: "4",
      image: Send,
      text: "Achetez facilement des crédits de communication pour rester connecté.",
      color: "blue",
    },
  ];
  
  return (
    <>
      <Header />
      <div className='bg-gradient-to-tl from-[#126e51] to-black min-h-48 py-28 text-white'>
      </div>
      <div className='pt-10 md:py-16 h-full w-full'>
        <div className='container mx-auto px-5 lg:px-20 py-0 flex flex-col items-center gap-20'>
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-4xl md:text-5xl'>Tous nos services</h1>
            <div className='my-8'>
              <div className='flex flex-col gap-10 lg:flex-row items-center'>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={containerVariants}
                >
                  {becomePartner1.map((item, index) => (
                    <motion.div
                      key={item.id}
                      custom={index}
                      variants={itemVariants}
                      className={twMerge(
                        {
                          blue: 'bg-blue-300',
                          indigo: 'bg-indigo-300',
                          green: 'bg-green-300',
                        }[item.color] || 'bg-gray-300',
                        'p-2 rounded-lg mt-5 max-w-[350px]'
                      )}
                    >
                      <motion.div variants={imageVariants}>
                        <Image
                          src={item.image}
                          width={400}
                          height={400}
                          alt="PartnerSmile"
                          className='max-w-[70px] mb-5 rounded-2xl'
                        />
                      </motion.div>
                      <p className='ml-5'>
                        {item.text} <span className='text-black'>{item.specialText}</span>
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={containerVariants}
                >
                  {becomePartner2.map((item, index) => (
                    <motion.div
                      key={item.id}
                      custom={index}
                      variants={itemVariants}
                      className={twMerge(
                        {
                          blue: 'bg-blue-300',
                          indigo: 'bg-indigo-300',
                          green: 'bg-green-300',
                        }[item.color] || 'bg-gray-00',
                        'p-2 rounded-lg mt-5 max-w-[350px]'
                      )}
                    >
                      <motion.div variants={imageVariants}>
                        <Image
                          src={item.image}
                          width={400}
                          height={400}
                          alt="PartnerSmile"
                          className='max-w-[70px] mb-5 rounded-2xl'
                        />
                      </motion.div>
                      <p className='ml-5'>
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <div className='py-10'>
              <div className="container mx-auto flex flex-col items-center justify-center text-center px-6 lg:px-8">
              <div className="max-w-xl">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-black leading-tight my-10">
                  Rejoignez-nous dès aujourd'hui !
                </h1>
                <p className="text-base lg:text-lg text-black/80 mb-8">
                  Profitez des meilleurs taux et d'une rapidité inégalée pour vos transactions. 
                  </p>
              <div className='flex items-center justify-center'>
                  <button className="flex gap-3 rounded-full bg-[#126e51] text-white font-bold px-6 py-3 text-sm lg:text-base shadow-lg hover:bg-[#0e5741] transition duration-300 ease-in-out transform hover:scale-105">
                      <span>Je m'inscris</span>
                      <FaArrowRightLong />
                  </button>
              </div>
              </div>
            </div>
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
