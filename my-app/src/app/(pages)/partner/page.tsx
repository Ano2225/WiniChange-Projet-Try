'use client'

import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import walletSky from "@/app/assets/wallsky.png"
import { twMerge } from 'tailwind-merge'
import partner from "@/app/assets/servPhotos.png"
import crypPart from "@/app/assets/crypPart.webp"
import secured from "@/app/assets/SecureLogo.png"
import partner2 from "@/app/assets/partner2.jpg"
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
      text: "Être propriétaire d'une entreprise ",
      specialText:"officiellement enregistrée.",
      color:"blue",
    },
    {
      id: "2",
      text: "Avoir des activités qui impliquent l'utilisation de crypto-monnaies.", 
      specialText:"Ex : (être un trader de crypto-monnaies, un revendeur de crypto-monnaies...).",
      color:"indigo",
    },
  ];
  const becomePartner2 = [
    {
      id: "3",
      text: "Effectuez des transactions jusqu’à un volume moyen de ",
      specialText:"2 000 ou plus par semaine.",
      color:"green",
    },
    {
      id: "4",
      text: "Disposer de moyens de paiement tels que ",
      specialText:"Mobile Money ou compte bancaire.",
      color:"blue",
    },
  ];
  const Advantages = [
    {
      id:1,
      images: walletSky,
      title: "Meilleur taux",
      text:"Profitez d'un taux des plus avantageux.",
      color:"green"
    },
    {
      id:2,
      images: secured,
      title: "Nombreuses transactions",
      text:"Effectuez des transactions volumineuses en une seule fois et de manière sécurisée",
      color:"blue"
    },
    {
      id:3,
      images: paid,
      title: "Diversités de paiement",
      text:"Bénéficiez d'une large gamme de moyens de paiement",
      color:"indigo"
    }
  ];

  return (
    <>
      <Header />
      <div className='pt-10 md:py-24 h-full w-full'>
        <div className='container mx-auto px-5 lg:px-20 py-16 flex flex-col items-center gap-12'>
            <div className='lg:flex'>
              <div>
                <h5 className='text-[#126e51] text-lg lg:text-4xl font-semibold leading-normal mb-4'>
                  Devenir
                </h5>
                <h1 className='text-3xl lg:text-4xl font-semibold mb-4'>
                    Un Partenaire Winichange
                </h1>
                <p className='text-black/80 text-sm md:text-[1rem] md:leading-6'>
                Effectuez vos transactions en toute <span className='font-bold text-[#126e51]'>liberté, avec simplicité et aux meilleurs taux.</span>
              </p>
              <button className='rounded-xl bg-[#126e51] text-white mt-5 px-4 py-2 text-sm'>
                  <span>Devenir Partenaire</span>
                  
              </button>
              </div>
              
              <Image
                src={partner2}
                width={500}
                height={500}
                alt="PartnerSmile"
                objectFit="cover"
                className="rounded-2xl shadow-xl mt-5 items-center"
              />
            </div>
            <div className='flex flex-col items-center align-center'>
                <h1 className='font-bold text-sm md:text-3xl'>Condition Pour Devenir Un Partenaire</h1>
                {/* <div>
                  <div className='flex flex-col gap-5 md:flex-row items-center align-center'>
                      <Image
                      src={crypPart}
                      width={400}
                      height={400}
                      alt="PartnerSmile"
                      className='max-w-[400px] ml-10'
                      />
                      <div className='md:order-first'>
                        {
                          becomePartner1.map(items => (
                            <div key={items.id} className={
                              twMerge({
                                  blue: 'bg-blue-300',
                                    indigo: 'bg-indigo-300',
                                    green: 'bg-green-300',
                              }[items.color] || 'bg-gray-300', "p-2 rounded-lg mt-5 max-w-[350px]")
                            }>
                                <h1 className={
                                  twMerge({
                                    blue: 'text-blue-800',
                                    indigo: 'text-indigo-800',
                                    green: 'text-green-800',
                                  }[items.color] || 'text-gray-800', 'text-lg font-bold mb-2')
                                } >{items.id}</h1>
                                <p className='ml-5'>
                                  {items.text} <span className='font-bold'>{items.specialText}</span>
                                </p>
                            </div>
                          ))
                        }
                      </div>
                      <div>
                        {
                          becomePartner2.map(items => (
                            <div key={items.id} className={
                              twMerge({
                                  blue: 'bg-blue-300',
                                    indigo: 'bg-indigo-300',
                                    green: 'bg-green-300',
                              }[items.color] || 'bg-gray-300', "p-2 rounded-lg mt-5 max-w-[350px]")
                            }>
                                <h1 className={
                                  twMerge({
                                    blue: 'text-blue-800',
                                    indigo: 'text-indigo-800',
                                    green: 'text-green-800',
                                  }[items.color] || 'text-gray-800', 'text-lg font-bold mb-2')
                                } >{items.id}</h1>
                                <p className='ml-5'>
                                  {items.text} <span className='font-bold'>{items.specialText}</span>
                                </p>
                            </div>
                          ))
                        }
                      </div>
                  </div>
                </div> */}
                <div>
                <div className='flex flex-col gap-5 md:flex-row items-center'>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={imageVariants}
                      className="md:order-first"  // Classe pour changer l'ordre
                    >
                      <Image
                        src={crypPart}
                        width={400}
                        height={400}
                        alt="PartnerSmile"
                        className='max-w-[400px] ml-10'
                      />
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
                            <h1
                              className={twMerge(
                                {
                                  blue: 'text-blue-800',
                                  indigo: 'text-indigo-800',
                                  green: 'text-green-800',
                                }[items.color] || 'text-gray-800',
                                'text-lg font-bold mb-2'
                              )}
                            >
                              {items.id}
                            </h1>
                            <p className='ml-5'>
                              {items.text} <span className='font-bold'>{items.specialText}</span>
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
                            <h1
                              className={twMerge(
                                {
                                  blue: 'text-blue-800',
                                  indigo: 'text-indigo-800',
                                  green: 'text-green-800',
                                }[items.color] || 'text-gray-800',
                                'text-lg font-bold mb-2'
                              )}
                            >
                              {items.id}
                            </h1>
                            <p className='ml-5'>
                              {items.text} <span className='font-bold'>{items.specialText}</span>
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                </div>
            </div>
            </div>
            <div className='flex flex-col items-center align-center'>
                <h1 className='font-bold text-sm md:text-3xl'>Avantages du partenariat WinChange</h1>
                <div className='flex flex-col gap-5 my-10 md:flex-row md:ml-40'>
                  {
                    Advantages.map((items, index) => (
                      <motion.div
                        key={items.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }} // Le conteneur sera révélé lorsque 20% est visible
                        custom={index} // Passer l'index pour le délai
                        variants={itemVariants} // Appliquer les variantes
                        className='flex flex-col'
                      >
                        <div className={twMerge(
                          {
                            blue: 'bg-blue-400',
                            indigo: 'bg-indigo-400',
                            green: 'bg-green-400',
                          }[items.color] || 'bg-green-400', "p-2 center w-[70px] h-[70px] rounded-full"
                        )}>
                          <Image
                            src={items.images}
                            width={400}
                            height={400}
                            alt="PartnerSmile"
                            className='translate-y-1'
                          />
                        </div>
                        <div className='mt-5 max-w-[350px]'>
                          <h5 className='text-lg font-bold'>{items.title}</h5>
                          <p>{items.text}</p>
                        </div>
                      </motion.div>
                    ))
                  }
                </div>
            </div>
            <div className='lg:flex'>
              <div>
                <h5 className='text-[#126e51] text-lg lg:text-4xl font-semibold leading-normal mb-4'>
                  Devenir
                </h5>
                <h1 className='text-3xl lg:text-4xl font-semibold mb-4'>
                    Un Partenaire Winichange
                </h1>
                <p className='text-black/80 text-sm md:text-[1rem] md:leading-6'>
                Effectuez vos transactions en toute <span className='font-bold text-[#126e51]'>liberté, avec simplicité et aux meilleurs taux.</span>
              </p>
              <button className='rounded-xl bg-[#126e51] text-white mt-5 px-4 py-2 text-sm'>
                  <span>Devenir Partenaire</span>
                  
              </button>
              </div>
              
              <Image
                src={partner}
                width={500}
                height={500}
                alt="PartnerSmile"
                objectFit="cover"
              />
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Partner
