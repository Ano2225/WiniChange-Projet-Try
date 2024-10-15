'use client'

import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import walletSky from "@/app/assets/wallsky.png"
import { FaArrowRightLong } from "react-icons/fa6";
import Logo from '@/app/assets/logo.png';
import Cookies  from "@/app/components/cookies"
import { twMerge } from 'tailwind-merge'
import partner from "@/app/assets/p2.png"
import crypPart from "@/app/assets/p4.jpg"
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
      text: "Détenir une entreprise ",
      specialText:"officiellement enregistrée.",
      color:"blue",
    },
    {
      id: "2",
      text: "Exercer des activités nécessitant l'utilisation de crypto-monnaies.", 
      specialText:"Par exemple : trader ou revendeur de crypto-monnaies.",
      color:"indigo",
    },
  ];
  const becomePartner2 = [
    {
      id: "3",
      text: "Réalisez des transactions allant jusqu'à ",
      specialText:"2 000 ou plus par semaine, en toute simplicité et sécurité.",
      color:"green",
    },
    {
      id: "4",
      text: "Accédez à des options de paiement variées telles que ",
      specialText:"Mobile Money ou votre compte bancaire, pour plus de flexibilité dans vos transactions.",
      color:"blue",
    },
  ];
  const Advantages = [
    {
      id:1,
      images: walletSky,
      title: "Taux imbattables",
      text:"Bénéficiez des meilleurs taux du marché pour maximiser vos gains à chaque transaction.",
      color:"green"
    },
    {
      id:2,
      images: secured,
      title: "Transaction simplifiée",
      text:"Simplifiez vos opérations en traitant des volumes importants rapidement et sans compromis sur la sécurité.",
      color:"blue"
    },
    {
      id:3,
      images: paid,
      title: "Multiples options de paiement",
      text:"Profitez d'une diversité de solutions de paiement adaptées à vos besoins.",
      color:"indigo"
    }
  ];

  return (
    <>
      <Header />
      <div className='bg-gradient-to-tl from-[#126e51]  to-black min-h-48 py-28 text-white text-3xl'>
          <div className='container lg:flex overflow-hidden'>
              <div>
                <div className='flex flex-col gap-1'>
                <div className='flex flex-col gap-1 py-8'>
                  <h5 className='text-white text-lg lg:text-4xl font-semibold leading-normal mb-4'>
                  Saisissez de 
                  </h5>
                  <h1 className='text-3xl lg:text-4xl font-semibold mb-4'>
                    nouvelles opportunités avec WiniChange !
                  </h1>
                </div>
                <p className='text-white text-sm md:text-[1rem] md:leading-6'>
                  Un partenariat gagnant-gagnant, avec <br /> <span className='font-semibold bg-white py-0.5 px-2 text-green-700 '>des conditions d'accès simplifiées et des taux imbattables.</span>
                  {/* Effectuez vos transactions en toute <span className='font-semibold text-white'>liberté, avec simplicité et aux meilleurs taux.</span> */}
                </p>
                <p className='text-white text-sm md:text-[1rem] md:leading-6 mt-2'>
                  Effectuez vos transactions en toute <span className='font-semibold text-[#126e51] bg-white py-0.5 px-2'>liberté, avec une simplicité et aux meilleurs taux.</span>
                </p>
              <button className='flex gap-2 items-center rounded-xl bg-white text-[#126e51] font-bold mt-5 px-4 py-2 text-sm shadow-sm border-2 border-green-00'>
                  <span>Devenir partenaire </span>
                  <FaArrowRightLong/> 
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
            {/* <div className='absolute -right-20 md:absolute md:-right-3 md:top-25 overflow-hidden'>
              <Image src={Logo} alt="logo Izichange" width={200} height={200} className='max-w-[50px] w-1/2 md:w-full'/>
            </div> */}
      </div>
      <div className='pt-10 md:py-24 h-full w-full'>
        <div className='container mx-auto px-5 lg:px-20 py-16 flex flex-col items-center gap-20'>
            <div className='flex flex-col items-center align-center'>
                <h1 className='font-bold text-xl md:text-3xl'>Condition Pour Devenir Un Partenaire</h1>
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
                <div className='mt-10'>
                <div className='flex flex-col gap-10 lg:flex-row items-center'>
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
                        className='max-w-[400px] rounded-2xl shadow-xl mt-5 items-center'
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
                <h1 className='font-bold text-xl md:text-3xl'>Avantages du partenariat WinChange</h1>
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
                WiniChange vous offre <span className='font-bold text-[#126e51]'>une solution flexible et accessible, pour des transactions rapides et sécurisées à l'échelle internationale.</span>
              </p>
              <button className='rounded-xl bg-[#126e51] text-white mt-5 px-4 py-2 text-sm hover:bg-white '>
                  <span>Devenir Partenaire</span>
                  
              </button>
              </div>
              
              <Image
                src={partner}
                width={400}
                height={400}
                alt="PartnerSmile"
                objectFit="cover"
                className='rounded-2xl shadow-xl mt-5 items-center ml-5'
              />
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Partner
