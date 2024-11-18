'use client'

import React from 'react'
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"
import { IoIosAlert } from "react-icons/io";

interface TermsSectionProps {
  title: string
  children: React.ReactNode
}

interface Section {
  title: string
  content: string
  list?: string[]
}

const TermsSection: React.FC<TermsSectionProps> = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
      {title}
    </h2>
    <div className="text-gray-600 leading-relaxed space-y-4">
      {children}
    </div>
  </div>
)

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start space-x-3 bg-emerald-50 p-3 rounded-lg mb-2 hover:bg-emerald-100 transition-colors">
    <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
      ✓
    </span>
    <span className="text-gray-700">{children}</span>
  </li>
)

const GeneralConditions: React.FC = () => {
  const sections: Section[] = [
    {
      title: "Introduction",
      content: `Il est recommandé de lire attentivement ces conditions d'utilisation avant d'accéder ou d'utiliser notre site. En accédant ou en utilisant n'importe quel aspect de notre site Web, vous consentez à être limité par ces conditions d'utilisation. Toutes les fonctionnalités ou outils nouvellement ajoutés et répertoriés sur notre plateforme actuelle dépendront également des conditions d'utilisation. Vous pouvez consulter les conditions d'utilisation les plus récentes à tout moment sur cette page.`
    },
    {
      title: "Restrictions d'âge",
      content: `En acceptant ces conditions d'utilisation, vous avez atteint l'âge d'éligibilité dans votre état ou votre résidence ou que vous avez atteint l'âge de la majorité dans votre état ou zone d'habitation et vous nous avez donné votre consentement pour permettre à l'un de vos pupilles mineurs d'utiliser ce site. Vous ne pouvez pas utiliser nos produits pour une raison illégale ou non approuvée et vous ne pouvez pas non plus, dans l'utilisation du Service, abuser des lois qui relèvent de votre compétence. Toute violation ou violation de l'une des Conditions entraînera la fin rapide de vos Services par Winichange.`
    },
    {
      title: "Conditions Générales",
      content: "Nous conservons toute autorité pour refuser toute assistance à quiconque, de quelque manière que ce soit, à tout moment. Vous comprenez que votre contenu (à l'exclusion des données de carte de crédit) peut être transféré, décodé et inclus :",
      list: [
        "Les Transmissions sur différentes organisations",
        "Les Modifications pour s'adapter aux nécessités spécialisées des organisations ou des gadgets d'interface"
      ]
    },
    {
      title: "Informations individuelles",
      content: "Tous les détails et informations personnels que vous envoyez via la plateforme sont représentés par notre politique de confidentialité. Vous pouvez consulter notre Politique de confidentialité pour en savoir plus à ce sujet."
    },
    {
      title: "Utilisation restreintes",
      content: "Nonobstant les différents refus mentionnés dans les Conditions d'utilisation, il vous est interdit d'utiliser la page Web ou son contenu pour :",
      list: [
        "Pour toute raison illégale",
        "Demander à d'autres d'effectuer ou de participer à des manifestations illégales",
        "Ignorer les directives, règles, lois ou lois voisines mondiales",
        "Empiéter sur ou ignorer nos droits d'innovation sous licence",
        "Pour soumettre des données fausses ou trompeuses",
        "Pour transférer ou envoyer des virus ou tout autre type de code malveillant",
        "Pour recueillir ou suivre les données individuelles d'autrui",
        "Pour spammer, phishing, pharm., déguisement, arachnide, ramper ou gratter",
        "Pour toute raison vulgaire ou inappropriée",
        "Intervenir ou contourner les fonctionnalités de sécurité du Service"
      ]
    },
    {
      title: "Limitations de responsabilité",
      content: `Nous ne garantissons pas, ne déclarons pas et ne garantissons pas que votre utilisation de notre plateforme sera continue, idéale, sécurisée ou sans erreur. Nous ne garantissons pas que les résultats qui pourraient être obtenus grâce à l'utilisation de notre plateforme seront exacts ou solides. Vous convenez que nous pouvons occasionnellement éliminer la plateforme pour des délais non concluants ou abandonner la plateforme à tout moment, sans vous en aviser.`
    },
    {
      title: "Liens Tiers",
      content: `Les connexions de tiers sur cette page Web peuvent vous guider vers des sites tiers qui ne sont pas nos filiales. Nous ne sommes pas responsables de l'analyse ou de l'évaluation de la substance ou de l'exactitude et nous ne garantissons pas et n'aurons aucune obligation ou devoir concernant tout matériel ou site tiers. Nous ne courons aucun risque de méfait ou de préjudice lié à l'achat ou à l'utilisation de produits, services, actifs, contenus ou à certaines autres transactions effectuées concernant des sites tiers.`
    },
    {
      title: "Résiliation",
      content: `Winichange peut, à notre discrétion, résilier ou interrompre l'accès à votre compte. L'accès peut être résilié pour plusieurs raisons, y compris, mais sans s'y limiter, la violation des conditions de services et une mauvaise utilisation. Aucun préavis n'est requis pour mettre fin à l'accès au service. Si vous souhaitez mettre fin à l'utilisation du service, vous devez en informer Winichange.`
    },
    {
      title: "Modifications des frais",
      content: `Winichange, à sa seule discrétion et à tout moment, peut modifier les frais. Toute modification des frais entrera en vigueur immédiatement. Une fois que la modification des frais est entrée en vigueur, votre utilisation continue du Service regroupe votre accord de payer les frais modifiés.`
    },
    {
      title: "Changements",
      content: `À notre seule discrétion, nous avons le droit de réviser ou de remplacer ces conditions à tout moment. Si un changement est important, nous donnerons un préavis d'au moins 30 jours avant l'entrée en vigueur de toute nouvelle condition. En reprenant l'accès ou l'utilisation de notre Service après l'entrée en vigueur des modifications, vous consentez à être lié par les conditions modifiées.`
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="relative bg-gradient-to-r from-emerald-800 to-emerald-600 py-32">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="mt-0 md:mt-8 text-4xl md:text-5xl font-bold text-white mb-6">
            Conditions d'utilisation
          </h1>
          <p className="text-emerald-50 text-lg max-w-2xl mx-auto">
            Informations importantes concernant l'utilisation de nos services
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16 -mt-10">
        <div className="bg-red-400 rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <p className="text-white leading-relaxed">
            Veuillez lire attentivement ces conditions avant d'utiliser notre plateforme. 
            En accédant à nos services, vous acceptez d'être lié par ces termes.
          </p>
        </div>

        {sections.map((section, index) => (
          <TermsSection key={index} title={section.title}>
            <p className="text-gray-600">{section.content}</p>
            {section.list && (
              <ul className="space-y-2 mt-4">
                {section.list.map((item, i) => (
                  <ListItem key={i}>{item}</ListItem>
                ))}
              </ul>
            )}
          </TermsSection>
        ))}
        <div className="bg-gradient-to-br from-emerald-50 to-white rounded-lg p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Des questions ?
          </h2>
          <p className="text-gray-600 mb-4">
            Nous sommes là pour vous aider avec toute question concernant nos conditions d'utilisation.
          </p>
          <a 
            href="mailto:info@winichange.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Contactez-nous
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default GeneralConditions