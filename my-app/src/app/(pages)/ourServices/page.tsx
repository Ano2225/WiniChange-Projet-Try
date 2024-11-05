'use client';

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import exchange from "@/app/assets/exchange-white.svg";
import binance from "@/app/assets/bnb.svg";
import sendMoney from "../../assets/img-1.png";
import Send from "../../assets/img-2.png";
import { Header } from "@/app/sections/Header";
import Footer from "@/app/sections/Footer";
import { FaArrowRight, FaExchangeAlt, FaBitcoin, FaMoneyBillWave, FaPhoneAlt } from "react-icons/fa";

const services = [
  {
    id: "1",
    image: exchange,
    text: "Nous simplifions vos achats et ventes de cryptomonnaies et de monnaies électroniques avec divers moyens de paiement.",
    title: "Achat et vente",
    icon: FaExchangeAlt,
    bgColor: "from-[#126e51] to-[#1a8a66]",
    stats: "1M+ Transactions"
  },
  {
    id: "2",
    image: binance,
    text: "Ce service vous permet de recharger instantanément votre wallet Binance depuis notre plateforme avec divers moyens de paiement.",
    title: "Binance Direct",
    icon: FaBitcoin,
    bgColor: "from-yellow-500 to-yellow-400",
    stats: "500K+ Recharges"
  },
  {
    id: "3",
    image: sendMoney,
    text: "Ce service vous permet de transférer de l'argent entre différents moyens de paiement, y compris à l'international, via notre plateforme et ses multiples options de paiement.",
    title: "Transfert d'argent",
    icon: FaMoneyBillWave,
    bgColor: "from-[#126e51] to-[#1a8a66]",
    stats: "50K+ Transferts/jour"
  },
  {
    id: "4",
    image: Send,
    text: "Ce service vous permet d'acheter du crédit de communication de la manière la plus simple, via notre plateforme et ses multiples moyens de paiement.",
    title: "Achat de crédit d'appel",
    icon: FaPhoneAlt,
    bgColor: "from-yellow-500 to-yellow-400",
    stats: "100K+ Recharges"
  },
];

const OurService = () => {
  return (  
    <>    
      <Header />    
            <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-block">
                <motion.span 
                  className="inline-block bg-[#126e51] text-white px-4 py-2 rounded-lg font-bold text-sm mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  NOS SERVICES
                </motion.span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Découvrez Nos Services <span className="text-[#126e51]">Exclusifs</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Chaque jour, nous mettons tout en œuvre pour vous offrir une expérience unique et répondre précisément à vos besoins. Profitez de nos services adaptés à vos attentes !
              </p>
            </div>

            <motion.div 
              className="relative lg:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#126e51]/20 to-green-400/20 rounded-3xl transform rotate-3 blur-xl"></div>
              <div className='flex items-center justify-center'>
              <Image
                src="/images/shot.jpg"
                width={300}
                height={300}
                alt="Services Overview"
                className="relative rounded-3xl shadow-2xl"
              />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-r ${service.bgColor}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16">
                  <div className="absolute inset-0 bg-white opacity-10 rounded-full"></div>
                </div>

                <div className="p-4 text-white">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <service.icon className="w-8 h-8" />
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="bg-white/10 p-2 rounded-full"
                    >
                      <FaArrowRight size={20} />
                    </motion.div>
                  </div>

                  <p className="text-white/90 mb-6 leading-relaxed">
                    {service.text}
                  </p>

                  <div className="flex items-center gap-2 text-sm bg-black/10 w-fit px-3 py-1.5 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    {service.stats}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#126e51] py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Rejoignez des milliers d'utilisateurs satisfaits et découvrez la simplicité de nos services.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="bg-white text-[#126e51] font-bold px-8 py-4 rounded-full shadow-lg inline-flex items-center gap-2"
          >
            Commencer maintenant
            <FaArrowRight />
          </motion.button>
        </motion.div>
      </section>

      <Footer color="bg-[#126e51]"/>
    </>
  );
};

export default OurService;