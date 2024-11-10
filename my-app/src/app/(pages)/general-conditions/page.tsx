'use client'

import React from 'react'
import Image from "next/image"
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"

const GeneralConditions = () => {
  
    const items = [
        {
          questions: "Qu'est-ce que Winichange ?", 
          answers:"Winichange est une plateforme qui permet l'interopérabilité entre les solutions de transfert d'argent, en reliant les cryptomonnaies aux services de transfert mobile et bancaire en Afrique et à l'international. Notre mission est de faciliter les échanges d'argent de manière simple, rapide et sécurisée",
        },
        {
          questions: "Comment puis-je m'inscrire sur la plateforme ", 
          answers: "Pour vous inscrire, cliquez sur le bouton S'inscrire en haut de la page d'accueil. Suivez les étapes pour créer un compte en fournissant vos informations personnelles et un moyen de vérification"
        },
        {
          questions: "Comment puis-je m'inscrire sur la plateforme ", 
          answers: "Pour vous inscrire, cliquez sur le bouton S'inscrire en haut de la page d'accueil. Suivez les étapes pour créer un compte en fournissant vos informations personnelles et un moyen de vérification"
        },
        {
          questions: "Comment puis-je m'inscrire sur la plateforme ", 
          answers: "Pour vous inscrire, cliquez sur le bouton S'inscrire en haut de la page d'accueil. Suivez les étapes pour créer un compte en fournissant vos informations personnelles et un moyen de vérification"
        },
      ]

      const AccordionItem = ({ questions, answers}:{questions: string, answers:string}) => {
        const [isOpen, setIsOpen ] = useState(false);
        return (
          <div className='cursor-pointer border-b border-black/60 py-7' onClick={() => setIsOpen(!isOpen)}>
          <div className='flex items-center'>
            <span className='flex-1 text-[16px] font-bold'>{questions}</span>
            {isOpen ? <FaMinus className='text-[#126e51]' /> : <FaPlus className='text-[#126e51]' />}
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div 
              initial={{
                opacity: 0,
                height: 0,
                marginTop: 0,
              }}
              animate={{
                opacity:1,
                height:'auto',
                marginTop: "16px"
              }}
              exit={{
                opacity: 0,
                height: 0,
                marginTop: 0,
              }}
              >
              {answers}
            </motion.div>
            )}
          </AnimatePresence>
        </div> 
        )
      }

  return (
    <>
      <Header />
      <div className='pb-5'>
          <h1 className=' pt-56 text-black text-3xl text-center '>
            <span className='font-semibold text-white py-0.5 px-2 bg-[#126e51]'>NOS CONDITIONS D'UTILSATIONS</span>
          </h1>
      </div>
      <div className='pt-10 md:py-20 h-full w-full'>
        <div className='container mx-auto px-5 lg:px-20 py-10 '>
        <div>
    <p className='mt-2 text-black/80'>
          Il est recommandé de lire attentivement ces conditions d'utilisation avant d'accéder ou d'utiliser notre site. En accédant ou en utilisant n'importe quel aspect de notre site Web, vous consentez à être limité par ces conditions d'utilisation. Dans le cas où vous n'acceptez pas tous les termes et conditions de cet accord, vous ne pourrez alors pas accéder au site ni utiliser aucun service. Dans le cas où ces conditions de service sont considérées comme une offre, la reconnaissance est explicitement limitée à ces conditions de service.
      Toutes les fonctionnalités ou outils nouvellement ajoutés et répertoriés sur notre plateforme actuelle dépendront également des conditions d'utilisation. Vous pouvez consulter les conditions d'utilisation les plus récentes à tout moment sur cette page.
      Nous revendiquons toute autorité pour mettre à jour, modifier ou supplanter tout aspect de ces conditions d'utilisation en publiant des mises à jour ou des modifications potentielles sur notre site. Il est de votre seule responsabilité de vérifier cette page par intermittence pour les modifications apportées par nous. Vous êtes précédé de l'utilisation ou de l'admission au site Web après la publication de toute progression, ce qui établit la reconnaissance de ces modifications dans les termes et conditions.
    </p>
      </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-black'>Restrictions d'âge</h1>
            <p className='mt-2 text-black/80'>
              En acceptant ces conditions d'utilisation, vous avez atteint l'âge d'éligibilité dans votre état ou votre résidence ou que vous avez atteint l'âge de la majorité dans votre état ou zone d'habitation et vous nous avez donné votre consentement pour permettre à l'un de vos pupilles mineurs d'utiliser ce site.
              Vous ne pouvez pas utiliser nos produits pour une raison illégale ou non approuvée et vous ne pouvez pas non plus, dans l'utilisation du Service, abuser des lois qui relèvent de votre compétence (y compris, mais sans se limiter aux lois sur le droit d'auteur).
              Vous ne devez communiquer aucun ver, bug ou code de nature ruineuse.
              Toute violation ou violation de l'une des Conditions entraînera la fin rapide de vos Services par Winichange.
            </p>
        </div>
        <div className='mt-10'>
        <div>
            <h1 className='font-bold text-2xl text-black'>Conditions Générales</h1>
            <div className='mt-5'>
              Nous conservons toute autorité pour refuser toute assistance à quiconque, de quelque manière que ce soit, à tout moment. Vous comprenez que votre contenu (à l'exclusion des données de carte de crédit) peut être transféré, décodé et inclus :
              <ul className='flex flex-col gap-1'>
                <li className='bg-green-700 text-white p-1'>A. Les Transmissions sur différentes organisations </li>
                <li className='bg-green-700 text-white p-1'>B. Les Modifications pour s'adapter et s'adapter aux nécessités spécialisées des organisations ou des gadgets d'interface. Les données des cartes de crédit sont constamment brouillées lors du transfert entre organisations.</li>
              </ul>              
            </div>
        </div>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-black'>Informations individuelles</h1>
            <p className='mt-2 text-black/80'>
              Tous les détails et informations personnels que vous envoyez via la plateforme sont représentés par notre politique de confidentialité. Vous pouvez consulter notre Politique de confidentialité pour en savoir plus à ce sujet.
            </p>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-black'>Utilisation restreintes</h1>
            <p className='mt-2 text-black/80'>
              Nonobstant les différents refus mentionnés dans les Conditions d'utilisation, il vous est interdit d'utiliser la page Web ou son contenu.
            </p>
            <ul className='flex flex-col gap-1'>
                <li className='bg-green-700 text-white p-1'>A. Pour toute raison illégale ; </li>
                <li className='bg-green-700 text-white p-1'>B. Demander à d’autres d’effectuer ou de participer à des manifestations illégales ;</li>
                <li className='bg-green-700 text-white p-1'>C. Ignorer les directives, règles, lois ou lois voisines mondiales, gouvernementales, courantes ou étatiques ;</li>
                <li className='bg-green-700 text-white p-1'>D. Empiéter sur ou ignorer nos droits d'innovation sous licence ou les privilèges d'innovation sous licence de tiers ;</li>
                <li className='bg-green-700 text-white p-1'>E. Pour soumettre des données fausses ou trompeuses ;</li>
                <li className='bg-green-700 text-white p-1'>F. Pour transférer ou envoyer des virus ou tout autre type de code malveillant qui sera ou pourrait être utilisé à quelque titre que ce soit qui influencera l'utilité ou l'activité du Service ou de tout site connecté, différents sites ou Internet</li>
                <li className='bg-green-700 text-white p-1'>G. Pour recueillir ou suivre les données individuelles d'autrui ;</li>
                <li className='bg-green-700 text-white p-1'>H. Pour spammer, phishing, pharm., déguisement, arachnide, ramper ou gratter ;</li>
                <li className='bg-green-700 text-white p-1'>I. Pour toute raison vulgaire ou inappropriée ;</li>
                <li className='bg-green-700 text-white p-1'>J. Intervenir ou contourner les fonctionnalités de sécurité du Service ou de tout site connecté, différents sites ou Internet. Nous conservons toute autorité nécessaire pour mettre fin à votre utilisation du Service ou de tout site connecté pour abus de l'une des utilisations restreintes.</li>
            </ul>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-black'>Limitations de responsabilité</h1>
            <p className='mt-2 text-black/80'>
              Nous ne garantissons pas, ne déclarons pas et ne garantissons pas que votre utilisation de notre plateforme sera continue, idéale, sécurisée ou sans erreur.
              Nous ne garantissons pas que les résultats qui pourraient être obtenus grâce à l'utilisation de notre plateforme seront exacts ou solides.
              Vous convenez que nous pouvons occasionnellement éliminer la plateforme pour des délais non concluants ou abandonner la plateforme à tout moment, sans vous en aviser.
            </p>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-black'>Accord</h1>
            <p className='mt-2 text-black/80'>
              Notre déception de pratiquer ou de mettre en œuvre tout privilège ou arrangement des présentes conditions de service ne constituera pas une renonciation à ce droit ou à cet arrangement.
              Ces conditions d'utilisation et toutes les approches ou normes de travail publiées par nous sur ce site ou concernant le service comprennent l'ensemble de l'accord et de la compréhension entre vous et nous et supervisent votre mise en œuvre du service, supplantant tous les arrangements, correspondances et recommandations antérieurs ou contemporains. , que ce soit verbal ou écrit,entre vous et nous (en comptant, mais sans interdiction, toutes les formes antérieures des Conditions d'utilisation). Toute ambiguïté dans la traduction des présentes Conditions de Service ne sera pas interprétée à l'encontre de la partie rédactrice.
            </p>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-black'>Liens Tiers</h1>
            <p className='mt-2 text-black/80'>
            Certaines substances, articles et services accessibles via notre service peuvent incorporer des matériaux provenant de tiers
          Les connexions de tiers sur cette page Web peuvent vous guider vers des sites tiers qui ne sont pas nos filiales. Nous ne sommes pas responsables de l'analyse ou de l'évaluation de la substance ou de l'exactitude et nous ne garantissons pas et n'aurons aucune obligation ou devoir concernant tout matériel ou site tiers, ou pour certains autres matériels, articles ou services de tiers.
          Nous ne courons aucun risque de méfait ou de préjudice lié à l'achat ou à l'utilisation de produits, services, actifs, contenus ou à certaines autres transactions effectuées concernant des sites tiers. Si cela ne vous dérange pas, examinez attentivement les approches et pratiques du tiers et assurez-vous de les comprendre avant de participer à une transaction. Les protestations, réclamations, préoccupations ou questions concernant les produits de tiers doivent être coordonnées au tiers.
            </p>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-black'>Resiliation</h1>
            <p className='mt-2 text-black/80'>
                Winichange peut, à notre discrétion, résilier ou interrompre l'accès à votre compte. L'accès peut être résilié pour plusieurs raisons, y compris, mais sans s'y limiter, la violation des conditions de services et une mauvaise utilisation. Aucun préavis n’est requis pour mettre fin à l’accès au service.
                Si vous souhaitez mettre fin à l'utilisation du service, vous devez en informer Winichange.
                Toutes les dispositions des Conditions qui, de par leur nature, devraient continuer à être résiliées, subiront la résiliation, y compris, sans limitation, les dispositions sur la propriété, les clauses de non- responsabilité, l'indemnisation et les limitations de responsabilité.
            </p>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-black'>Modifications des frais</h1>
            <p className='mt-2 text-black/80'>
              Winichange, à sa seule discrétion et à tout moment, peut modifier les frais. Toute modification des frais entrera en vigueur immédiatement.
              Une fois que la modification des frais est entrée en vigueur, votre utilisation continue du Service regroupe votre accord de payer les frais modifiés.
            </p>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-black'>Changement</h1>
            <p className='mt-2 text-black/80'>
              À notre seule discrétion, nous avons le droit de réviser ou de remplacer ces conditions à tout moment. Si un changement est important, nous donnerons un préavis d'au moins 30 jours avant l'entrée en vigueur de toute nouvelle condition. Ce qui constitue un changement important sera conclu à notre seule discrétion.
              En reprenant l'accès ou l'utilisation de notre Service après l'entrée en vigueur des modifications, vous consentez à être lié par les conditions modifiées. Si vous ne vous conformez pas aux nouvelles conditions, vous n'êtes plus autorisé à utiliser le Service.
            </p>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-black'>Contactez-nous</h1>
            <p className='mt-2 text-black/80'>
              Si vous avez des questions concernant ces conditions, veuillez nous contacter à <a href="mailto:info@winichange.com" className='text-[#126e51] hover:font-bold transition-all duration-200 ease-in-out'>info@winichange.com</a>
            </p>
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default GeneralConditions
