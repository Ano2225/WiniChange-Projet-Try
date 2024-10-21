'use client'

import React from 'react'
import Image from "next/image"
import photo1 from "@/app/assets/ph1.webp"
import photo2 from "@/app/assets/ph2.webp"
import photo4 from "@/app/assets/photo4.jpg"
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"

const Apropos = () => {
  return (
    <>
      <Header />
      <div className='pt-24 md:py-24 h-full w-full'>
        <div className='container mx-auto px-5 lg:px-20 py-16 flex flex-col lg:flex-row-reverse items-center gap-12'>
          <div className='flex-1'>
            <Image
              src={photo1}
              width={500}
              height={500}
              alt="Support"
              objectFit="cover"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className='flex-1 text-center lg:text-left space-y-5'>
            <h1 className='text-white text-3xl lg:text-4xl font-extrabold leading-normal mb-4'>
              À Propos de <br /> WiniChange
            </h1>
            <p className='text-white/80 text-sm md:text-[1rem] md:leading-6'>
              Winichange est une plateforme d'achat et de vente de cryptomonnaies en Afrique.
              Notre vision est de promouvoir l'inclusion financière pour les populations africaines.
            </p>
            <Image
              src={photo2}
              width={500}
              height={300}
              alt="Support"
              objectFit="cover"
              className="rounded-2xl shadow-lg hidden lg:block mt-5"
            />
          </div>
        </div>
        <div className='bg-[#126e51] h-1 w-3/4 mx-auto rounded-full my-10'></div>
        <div className='container mx-auto px-5 lg:px-20 flex flex-col lg:flex-row items-center gap-12 py-16'>
          <div className='flex-1'>
            <Image
              src={photo4}
              width={500}
              height={500}
              alt="Support"
              objectFit="cover"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className='flex-1 text-center lg:text-left space-y-5'>
          <h1 className='text-white text-3xl md:text-4xl font-extrabold leading-normal mb-4'>
            Rejoignez <br /> notre équipe chez WiniChange
          </h1>
          <p className='text-white/80 text-sm md:text-[1rem] md:leading-6'>
            Vous êtes passionné par la finance ou la technologie numérique ? Vous avez des compétences dans ces domaines ? 
            WiniChange vous offre l'opportunité de rejoindre une équipe dynamique et de participer à une aventure professionnelle enrichissante.
          </p>
          <p className='text-sm md:text-lg text-white/80'>
            Envoyez votre candidature à : 
            <span className='text-white underline ml-2 hover:text-green-800 transition'>
              <a href="mailto:recrutement@winichange.com">info@winichange.com</a>
            </span>
          </p>
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Apropos
