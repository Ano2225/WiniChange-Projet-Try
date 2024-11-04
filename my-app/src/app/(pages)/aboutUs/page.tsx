'use client'

import React from 'react'
import Image from "next/image"
import photo1 from "../../assets/p2.png"
import photo2 from "../../assets/winIMG.svg"
import photo4 from "../../assets/photo4.jpg"
import { Header } from "../../sections/Header"
import Footer from "../../sections/Footer"

const Apropos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
  
      <main className="flex-1 w-full pt-16 md:pt-24">
        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="order-1 lg:order-1 space-y-6 mt-4 md:mt-0 text-center lg:text-left">
              <h1 className="text-[#126e51] text-3xl md:text-4xl font-extrabold leading-tight">
                À Propos de <br className="hidden md:block" /> WiniChange
              </h1>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Winichange est une plateforme innovante d'achat et de vente de cryptomonnaies et de transfert d'argent en Afrique. Notre vision est de promouvoir l'inclusion financière des populations africaines.
              </p>
              <div className="hidden lg:block mt-12 transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src={photo2}
                  width={500}
                  height={300}
                  alt="Winichange illustration"
                  className="w-full max-w-md mx-auto lg:mx-0"
                />
              </div>
            </div>
            
            <div className="order-2 lg:order-2">
              <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src={photo1}
                  fill
                  alt="Support"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Séparateur */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-3/4 mx-auto border-t-4 border-[#126e51] rounded-full"></div>
          </div>
        </div>

        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-[#126e51] text-3xl md:text-4xl font-extrabold leading-tight">
                Rejoignez <br className="hidden md:block" /> notre équipe
              </h2>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Vous êtes passionné par la finance ou le numérique ? Rejoignez Winichange, une entreprise en pleine croissance, et vivez une aventure professionnelle enrichissante.
              </p>
              <div className="group">
                <p className="text-lg md:text-xl text-gray-700">
                  Envoyez votre candidature à{' '}
                  <a 
                    href="mailto:recrutement@winichange.com"
                    className="text-[#126e51] font-semibold group-hover:underline inline-flex items-center gap-1 transition-all duration-300"
                  >
                    info@winichange.com
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={photo4}
                fill
                alt="Rejoignez notre équipe"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Apropos;
