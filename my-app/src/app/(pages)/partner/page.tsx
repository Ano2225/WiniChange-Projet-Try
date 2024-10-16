'use client'

import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import { FaArrowRightLong } from "react-icons/fa6"
import { twMerge } from 'tailwind-merge'

// Assets
import walletSky from "@/app/assets/wallsky.png"
import Logo from '@/app/assets/logo.png'
import partner from "@/app/assets/p2.png"
import crypPart from "@/app/assets/p4.jpg"
import secured from "@/app/assets/SecureLogo.png"
import partner2 from "@/app/assets/partner2.jpg"
import paid from "@/app/assets/paid.png"

// Components
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"
import Cookies from "@/app/components/cookies"

// Variants for animation
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
    text: "Détenir une entreprise",
    specialText: "officiellement enregistrée.",
    color: "blue",
  },
  {
    id: "2",
    text: "Exercer des activités nécessitant l'utilisation de crypto-monnaies.",
    specialText: "Par exemple : trader ou revendeur de crypto-monnaies.",
    color: "indigo",
  },
];

const becomePartner2 = [
  {
    id: "3",
    text: "Réalisez des transactions allant jusqu'à",
    specialText: "2 000 ou plus par semaine, en toute simplicité et sécurité.",
    color: "green",
  },
  {
    id: "4",
    text: "Accédez à des options de paiement variées telles que",
    specialText: "Mobile Money ou votre compte bancaire, pour plus de flexibilité dans vos transactions.",
    color: "blue",
  },
];

const advantages = [
  {
    id: 1,
    images: walletSky,
    title: "Taux imbattables",
    text: "Bénéficiez des meilleurs taux du marché pour maximiser vos gains à chaque transaction.",
    color: "green",
  },
  {
    id: 2,
    images: secured,
    title: "Transaction simplifiée",
    text: "Simplifiez vos opérations en traitant des volumes importants rapidement et sans compromis sur la sécurité.",
    color: "blue",
  },
  {
    id: 3,
    images: paid,
    title: "Multiples options de paiement",
    text: "Profitez d'une diversité de solutions de paiement adaptées à vos besoins.",
    color: "indigo",
  },
];

const Partner = () => {
  return (
    <>
      <Header />
      <div className='bg-white min-h-48 py-28 text-black text-3xl'>
        <div className='container lg:flex overflow-hidden'>
          <div>
            <div className='flex flex-col gap-1'>
              <div className='flex flex-col gap-1 py-4'>
                <h5 className='text-black text-lg lg:text-4xl font-semibold leading-normal mb-4'>
                  Saisissez de
                </h5>
                <h1 className='text-3xl lg:text-4xl font-semibold mb-4'>
                  nouvelles opportunités avec WiniChange !
                </h1>
              </div>
              <p className=' text-sm md:text-[1rem] md:leading-6'>
                Un partenariat gagnant-gagnant, avec <br />
                <span className='font-semibold py-0.5 px-2 '>
                  des conditions d'accès simplifiées et des taux imbattables.
                </span>
              </p>
              <p className=' text-sm md:text-[1rem] md:leading-6 mt-2'>
                Effectuez vos transactions en toute 
                <span className='font-semibold  py-0.5 px-2'>
                  liberté, avec une simplicité et aux meilleurs taux.
                </span>
              </p>
              <button className='flex gap-2 w-[200px] items-center rounded-xl bg-black/80 text-white font-bold mt-5 px-4 py-2 text-sm shadow-sm border-2 border-green-00'>
                <span>Devenir partenaire</span>
                <FaArrowRightLong />
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
        </div>
        <div className='pt-10 md:py-24 h-full w-full'>
          <div className='container mx-auto px-5 lg:px-20 py-16 flex flex-col items-center gap-20'>
            <div className='flex flex-col items-center align-center'>
              <h1 className='font-bold text-xl md:text-3xl'>Condition Pour Devenir Un Partenaire</h1>
              <div className='mt-10'>
                <div className='flex flex-col gap-10 lg:flex-row items-center'>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={imageVariants}
                    className="md:order-first"
                  >
                    <Image
                      src={crypPart}
                      width={400}
                      height={400}
                      alt="Partner"
                      className='max-w-[400px] rounded-2xl shadow-xl mt-5 items-center'
                    />
                  </motion.div>
                  {[becomePartner1, becomePartner2].map((list, i) => (
                    <motion.div
                      key={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={containerVariants}
                    >
                      {list.map((item, index) => (
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
                          <h1
                            className={twMerge(
                              {
                                blue: 'text-blue-800',
                                indigo: 'text-indigo-800',
                                green: 'text-green-800',
                              }[item.color] || 'text-gray-800',
                              'text-lg font-bold mb-2'
                            )}
                          >
                            {item.id}
                          </h1>
                          <p className='ml-5 text-lg'>
                            {item.text} <span className='font-bold'>{item.specialText}</span>
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center align-center'>
              <h1 className='font-bold text-xl md:text-3xl'>Avantages du partenariat WinChange</h1>
              <div className='flex flex-col gap-5 my-10 md:flex-row md:ml-40'>
                {advantages.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={index}
                    variants={itemVariants}
                    className='flex flex-col'
                  >
                    <div className={twMerge(
                      {
                        blue: 'bg-blue-600',
                        indigo: 'bg-indigo-600',
                        green: 'bg-green-600',
                      }[item.color] || 'bg-green-600', "p-2 center w-[70px] h-[70px] rounded-full"
                    )}>
                      <Image
                        src={item.images}
                        width={400}
                        height={400}
                        alt={item.title}
                        className='translate-y-1'
                      />
                    </div>
                    <div className='mt-5 max-w-[350px]'>
                      <h5 className='text-lg font-bold'>{item.title}</h5>
                      <p className='text-2xl'>{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
              <div className='lg:flex'>
              <div>
                <h5 className=' text-lg lg:text-4xl font-semibold leading-normal mb-4'>
                  Rejoignez-nous aujourd'hui pour une expérience de partenariat exceptionnelle et fructueuse !
                </h5>
                <button className='flex gap-2 w-[200px] items-center rounded-xl bg-black/60 text-white font-bold mt-5 px-4 py-2 text-sm shadow-sm border-2 border-green-00'>
                  <span>Devenir partenaire</span>
                  <FaArrowRightLong />
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
          </div>
        </div>
      </div>
      <Footer />
      <Cookies />
    </>
  )
}

export default Partner;
