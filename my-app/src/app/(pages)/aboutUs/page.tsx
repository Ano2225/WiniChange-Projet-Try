'use client'

import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import photo1 from "../../assets/p2.png"
import photo2 from "../../assets/winIMG.svg"
import photo4 from "../../assets/photo4.jpg"
import { Header } from "../../sections/Header"
import Footer from "../../sections/Footer"
import { FaUsers, FaRocket, FaGlobe } from 'react-icons/fa'

const stats = [
  { 
    value: '50K+', 
    label: 'Utilisateurs actifs', 
    icon: FaUsers 
  },
  { 
    value: '10+', 
    label: 'Pays desservis', 
    icon: FaGlobe 
  },
  { 
    value: '1M+', 
    label: 'Transactions', 
    icon: FaRocket 
  }
];

const Apropos = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
  
      <main className="flex-1 w-full pt-20 md:pt-28">
        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20">
          <motion.div 
            initial="initial"
            animate="animate"
            className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <motion.div {...fadeInUp} className="order-1 lg:order-1 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  À Propos de <br className="hidden md:block" />
                  <span className="text-[#126e51]">WiniChange</span>
                </h1>
                <div className="w-20 h-1 bg-[#126e51] mx-auto lg:mx-0 rounded-full"></div>
              </div>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                Winichange est une plateforme innovante d'achat et de vente de cryptomonnaies et de transfert d'argent en Afrique. Notre vision est de promouvoir l'inclusion financière des populations africaines.
              </p>
              <motion.div 
                className="hidden lg:block transform hover:scale-105 transition-transform duration-500"
                whileHover={{ rotate: -2 }}
              >
                <Image
                  src={photo2}
                  width={300}
                  height={300}
                  alt="Winichange illustration"
                  className="w-full max-w-md mx-auto lg:mx-0"
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              className="order-2 lg:order-2 relative"
            >
              <div className="absolute inset-0 bg-[#126e51]/10 rounded-3xl transform rotate-3"></div>
              <div className="relative h-[350px] md:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <Image
                  src={photo1}
                  fill
                  alt="Support"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </section>
        <section className="bg-[#126e51] py-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-white mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Rejoignez <br className="hidden md:block" />
                  <span className="text-[#126e51]">notre équipe</span>
                </h2>
                <div className="w-20 h-1 bg-[#126e51] mx-auto lg:mx-0 rounded-full"></div>
              </div>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                Vous êtes passionné par la finance ou le numérique ? Rejoignez Winichange, une entreprise en pleine croissance, et vivez une aventure professionnelle enrichissante.
              </p>
              <motion.div 
                className="group"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-xl text-gray-700">
                  Envoyez votre candidature à{' '}
                  <a 
                    href="mailto:info@winichange.com"
                    className="relative inline-flex items-center gap-2 text-[#126e51] font-semibold group-hover:text-[#126e51]/80 transition-colors"
                  >
                    info@winichange.com
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      →
                    </motion.span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#126e51] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </a>
                </p>
              </motion.div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#126e51]/10 rounded-3xl transform -rotate-3"></div>
              <div className="relative h-[350px] md:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={photo4}
                  fill
                  alt="Rejoignez notre équipe"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Apropos;