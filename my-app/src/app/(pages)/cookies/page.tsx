'use client'

import React from 'react'
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"
import { BiCookie } from "react-icons/bi"

const TableOfContents = ({ items }:any) => (
  <div className="hidden lg:block sticky top-24 w-64 h-fit">
    <div className="flex gap-4">
      <div className="h-full w-1 bg-[#126e51] rounded-full"/>
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Dans cet article</h2>
        <nav className="flex flex-col gap-3">
          {items.map((item: { id: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined }):any => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex items-center text-sm hover:translate-x-1 transition-transform"
            >
              <span className="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-[#126e51] hover:text-white transition-colors duration-200 w-full">
                <BiCookie className="mr-2" />
                {item.title}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  </div>
)

const CookieSection = ({ title, text, index }:any) => (
  <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#126e51]/10 text-[#126e51] font-semibold">
        {index + 1}
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  </div>
)

const Cookies = () => {
  const cookies = [
    {
      title: "C'est quoi un Cookies ?",
      id: "cookies",
      text: "Les cookies sont de petits fichiers d'information qu'un serveur web génère et envoie à un navigateur web. Les navigateurs stockent les cookies qu'ils reçoivent pour une période prédéterminée ou pour la durée de la session d'un utilisateur sur un site web. Ils joignent les cookies pertinents à toutes les futures requêtes que l'utilisateur fait au serveur web. Les cookies permettent aux sites web de recueillir des informations sur l'utilisateur, ce qui permet de personnaliser l'expérience utilisateur. Par exemple, les sites d'e-commerce utilisent des cookies pour savoir quels articles les utilisateurs ont ajoutés à leurs paniers. De plus, certains cookies sont nécessaires à des fins de sécurité, comme les cookies d'authentification (voir ci-dessous). Les cookies utilisés sur Internet sont également appelés cookies HTTP. Comme une grande partie du web, les cookies sont envoyés via le protocole HTTP.",
    },
    {
      title: "Comment utilisons nous les cookies ?",
      id: "useCookies",
      text: "Nous intégrons des cookies pour diverses raisons essentielles, comme expliqué ci-dessous. Malheureusement, il n'existe souvent pas d'option standard pour désactiver les cookies sans compromettre les fonctionnalités et services que nous proposons sur ce site. Nous vous conseillons de garder tous les cookies activés si vous n'êtes pas sûr de leur nécessité, car ils sont souvent indispensables à la continuité de nos services.",
    },
    {
      title: "Vous souhaitez désactiver les Cookies",
      id: "enableCookies",
      text: "Si vous préférez empêcher l'activation des cookies, vous pouvez le faire en ajustant les paramètres de votre navigateur (référez-vous à la documentation d'aide de votre navigateur pour des instructions précises). Toutefois, veuillez garder à l'esprit que désactiver les cookies pourrait nuire à la fonctionnalité de notre site ainsi que de nombreux autres sites que vous visitez. Il est donc recommandé de ne pas désactiver les cookies.",
    },
    {
      title: "Cookies Tiers",
      id: "thirdCookies",
      text: "Dans certains cas, nous collaborons avec des tiers de confiance qui utilisent également des cookies. La section suivante fournit des détails sur les cookies de tiers que vous pourriez rencontrer sur notre site. Nous utilisons Google Analytics, une des solutions d'analyse les plus reconnues et fiables sur le web, pour mieux comprendre comment vous interagissez avec notre site et pour optimiser votre expérience. Ces cookies peuvent suivre des données telles que la durée de votre visite et les pages que vous consultez, nous permettant ainsi de créer un contenu toujours plus engageant. Pour plus d'informations sur les cookies de Google Analytics, consultez la page officielle de Google Analytics.",
    },
    {
      title: "En savoir plus sur WiniChange",
      id: "showmore",
      text: "Nous espérons que ces informations vous ont éclairé. Comme mentionné précédemment, si vous hésitez quant à l'activation des cookies, il est généralement plus prudent de les laisser activés, car ils peuvent interagir avec certaines fonctionnalités essentielles de notre site. Si vous souhaitez obtenir des informations supplémentaires, n'hésitez pas à nous contacter à l'adresse suivante :",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="relative bg-[#126e51] py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#126e51] to-emerald-800 opacity-90" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mt-8 font-bold text-white mb-6">
              Politique des Cookies
            </h1>
            <p className="text-lg text-white/80">
              Comprendre comment nous utilisons les cookies pour améliorer votre expérience
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-12">
          <TableOfContents items={cookies} />
          <main className="flex-1 max-w-3xl">
            <div className="space-y-8">
              {cookies.map((cookie, index) => (
                <section key={cookie.id} id={cookie.id}>
                  <CookieSection 
                    title={cookie.title}
                    text={cookie.text}
                    index={index}
                  />
                  {index === cookies.length - 1 && (
                    <a 
                      href="mailto:recrutement@winichange.com"
                      className="inline-block mt-4 text-[#126e51] hover:text-emerald-700 underline transition-colors"
                    >
                      recrutement@winichange.com
                    </a>
                  )}
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cookies