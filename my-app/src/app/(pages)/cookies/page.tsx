'use client'

import React from 'react'
import Image from "next/image"
import { useState } from 'react';
import { BiCookie } from "react-icons/bi";
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"

const GeneralConditions = () => {
  
    const cookies = [
        {
            title: "C'est quoi un Cookies ?", 
            id:"cookies",
            text:"Les cookies sont de petits fichiers d'information qu'un serveur web génère et envoie à un navigateur web. Les navigateurs stockent les cookies qu'ils reçoivent pour une période prédéterminée ou pour la durée de la session d'un utilisateur sur un site web. Ils joignent les cookies pertinents à toutes les futures requêtes que l'utilisateur fait au serveur web. Les cookies permettent aux sites web de recueillir des informations sur l'utilisateur, ce qui permet de personnaliser l'expérience utilisateur. Par exemple, les sites d'e-commerce utilisent des cookies pour savoir quels articles les utilisateurs ont ajoutés à leurs paniers. De plus, certains cookies sont nécessaires à des fins de sécurité, comme les cookies d'authentification (voir ci-dessous). Les cookies utilisés sur Internet sont également appelés cookies HTTP. Comme une grande partie du web, les cookies sont envoyés via le protocole HTTP.",
        },
        {
          title: "Comment utilisons nous les cookies ?", 
          id:"useCookies",
          text:"Nous intégrons des cookies pour diverses raisons essentielles, comme expliqué ci-dessous. Malheureusement, il n'existe souvent pas d'option standard pour désactiver les cookies sans compromettre les fonctionnalités et services que nous proposons sur ce site. Nous vous conseillons de garder tous les cookies activés si vous n'êtes pas sûr de leur nécessité, car ils sont souvent indispensables à la continuité de nos services.",
        },
        {
          title: "Vous souhaitez désactiver les Cookies",
          id:"enableCookies", 
          text:"Si vous préférez empêcher l’activation des cookies, vous pouvez le faire en ajustant les paramètres de votre navigateur (référez-vous à la documentation d'aide de votre navigateur pour des instructions précises). Toutefois, veuillez garder à l'esprit que désactiver les cookies pourrait nuire à la fonctionnalité de notre site ainsi que de nombreux autres sites que vous visitez. Il est donc recommandé de ne pas désactiver les cookies.",
        },
        {
          title: "Cookies Tiers", 
          id:"thirdCookies",
          text:"Dans certains cas, nous collaborons avec des tiers de confiance qui utilisent également des cookies. La section suivante fournit des détails sur les cookies de tiers que vous pourriez rencontrer sur notre site. Nous utilisons Google Analytics, une des solutions d'analyse les plus reconnues et fiables sur le web, pour mieux comprendre comment vous interagissez avec notre site et pour optimiser votre expérience. Ces cookies peuvent suivre des données telles que la durée de votre visite et les pages que vous consultez, nous permettant ainsi de créer un contenu toujours plus engageant. Pour plus d'informations sur les cookies de Google Analytics, consultez la page officielle de Google Analytics.Nous intégrons également des boutons et des plugins de réseaux sociaux qui vous permettent de vous connecter facilement à vos plateformes sociales. Pour faciliter cette connexion avec des réseaux tels que Twitter et Facebook, nous utilisons des cookies qui peuvent enrichir votre profil sur leurs sites et contribuer aux données qu'ils détiennent, conformément à leurs politiques de confidentialité respectives.",
        },
        {
          title: "En savoir plus sur WiniChange", 
          id:"showmore",
          text:"Nous espérons que ces informations vous ont éclairé. Comme mentionné précédemment, si vous hésitez quant à l'activation des cookies, il est généralement plus prudent de les laisser activés, car ils peuvent interagir avec certaines fonctionnalités essentielles de notre site. Si vous souhaitez obtenir des informations supplémentaires, n'hésitez pas à nous contacter à l'adresse suivante :",
        },
      ]

  return (
    <>
      <Header />
      <div>
          <h1 className='bg-gradient-to-tl from-[#126e51]  to-black min-h-56 py-56 text-white text-[70px] text-center overflow-hidden'>
              <span className='font-semibold text-[#126e51] bg-white py-0.5 px-2'>COOKIES</span>
          </h1>
      </div>
      <div className='pt-10 h-full w-full'>
          <div className='py-10 flex gap-10 px-5 lg:px-20'>
              <div>
                <h1 className='font-bold text-white bg-green-700 py-2 px-0.5 text-3xl'>Winichange Cookies</h1>
                {
                    cookies.map(items=>(
                        <div className='mt-10' key={cookies.indexOf(items)} id={items.id}>
                            <div className='flex '>
                                <h1 className='font-semibold'>
                                    <span className='mr-2'>{cookies.indexOf(items)+1}.</span>
                                    {items.title}
                                </h1>
                            </div>
                            <p className='mt-2'>
                                {items.text}
                            </p>
                        </div>
                    ))
                }
                <a href='mailto:recrutement@winichange.com' className='text-blue-700'>recrutement@winichange.com</a>
              </div>
              <div className='hidden md:order-first md:min-w-[200px] md:flex gap-0.5'>
                  <div className='h-full w-1 bg-green-700 mt-1'></div>
                  <div>
                    <h1 className='mb-2 text-xl'>Dans cette article</h1>
                    <div className='flex flex-col gap-5'>
                      {
                        cookies.map(items=>(
                          <div>
                            <a href={`#${items.id}`} className='font-normal text-white bg-green-700 py-0.5 px-0.5 hover:font-semibold hover:shadow-lg'> {items.title}</a>
                          </div>
                        ))
                      }
                    </div>
                  </div>
              </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default GeneralConditions
