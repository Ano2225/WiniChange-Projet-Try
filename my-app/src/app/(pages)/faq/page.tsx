"use client"

import Footer from '@/app/sections/Footer';
import { Header } from '@/app/sections/Header';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';

const Page = () => {
  const items = [
    {
      questions: "Comment faire une transaction ?",
      answers: "Pour effectuer une transaction, il faut :\n\n✔ Se connecter à son compte WINICHANGE\n✔ Sélectionner la rubrique 'je donne' et 'je reçois' selon votre convenance\n✔ Suivre les indications sur la plateforme afin d'être débité de votre compte et de recevoir de façon automatique votre paiement"
    },
    {
      questions: "Que faire lorsqu'une transaction de Bitcoin prend du temps ?",
      answers: "Les transactions de crypto-monnaies prennent du temps car il faut qu'elles soient à 2 confirmations au moins avant que le paiement ne passe sur WINICHANGE. Cet état de chose est lié à la technologie blockchain et il faut donc patienter un moment ou envoyer l'id (le hash) de la transaction au service client en ligne pour plus d'assistance lorsqu'après deux niveaux de confirmation, vous êtes restés sans suite de paiement."
    },
    {
      questions: "Que faire lorsque votre compte a été débité mais vous n'aviez pas été crédité en retour ?",
      answers: "Pour toute transaction où votre compte a été débité et vous n'aviez pas été crédité en retour, il faudra fournir au service client en ligne ou via Whatsapp ou Telegram au +2250749665503 :\n\n✔ La preuve de votre paiement (une capture d'écran qui montre que vous aviez réellement envoyé l'argent sur notre compte)\n✔ Le numéro avec lequel vous aviez validé le paiement (s'il s'agit d'un dépôt de FCFA)\n✔ L'adresse mail avec laquelle vous aviez fait l'opération sur WINICHANGE\n✔ La date d'envoi\n✔ L'id de la transaction/hash/Txhash/Hacher (s'il s'agit d'une vente de crypto monnaies pour recevoir du FCFA)\n✔ L'adresse de réception sur laquelle vous aimeriez recevoir"
    },
    {
      questions: "Comment faire la vérification du compte Winichange (KYC) ?",
      answers: "Vérifier son compte se fait en trois étapes :\n\n✔ Vérifier son identité avec une pièce valide donc qui porte les nom et prénoms renseignés lors de votre inscription\n✔ Envoyer un selfie tenant la pièce qui nous permet de savoir que vous existez réellement\n✔ Envoyer un document qui permet de vérifier votre adresse (certificat de résidence, une facture d'électricité qui porte votre nom ou qui vérifie que vous habitez dans tel ou tel domicile, ou encore un relevé bancaire)\n\nNB: Rappelons qu'après les deux premières étapes, Winichange vous offre la possibilité d'effectuer des transactions le temps que vous fassiez la vérification de votre adresse plus tard. N'empêche que cette vérification est bien importante. Aussi toute notification concernant votre vérification vous est envoyée dans votre adresse mail."
    },
    {
      questions: "Quel est le minimum pour effectuer les achats sur le site ?",
      answers: "Le minimum requis est l'équivalent en FCFA de 2$ sur la plateforme. Rappelons aussi que le minimum est fonction de la cryptomonnaie voulue et donc de la quantité à acheter; ce minimum n'est pas valable pour toutes les cryptomonnaies."
    },
    {
      questions: "Que vaut 1 dollar sur votre site ?",
      answers: "Nous avons une multitude de possibilités de transactions. Au risque de vous fournir des réponses erronées, il faut toujours consulter la calculatrice du site pour des estimations assez précises en temps réel."
    },
    {
      questions: "Quelles sont les documents que vous autorisez pour la vérification ?",
      answers: "Les pièces autorisées sont :\n\n✔ La CNI\n✔ Le permis de conduire\n✔ Le passeport\n✔ L'attestation"
    },
    {
      questions: "La vérification est-elle obligatoire pour faire un échange ?",
      answers: "Oui, la vérification est obligatoire avant toute transaction."
    },
    {
      questions: "Quelles sont vos heures de travail sur le site ? Puis-je faire des transactions sur le site après ces heures ?",
      answers: "Les opérations sur le site sont possibles 24h/7 Non-stop et Automatique."
    },
    {
      questions: "Je voudrais avoir des informations sur Winichange, êtes-vous un site d'investissement ?",
      answers: "Nous sommes un bureau d'échange de e-monnaies en ligne. Vous pouvez acheter, vendre et échanger vos différentes monnaies numériques et les échanger entre elles. Vous avez également la possibilité d'effectuer des transferts d'argent nationaux et internationaux."
    }
  ];

  const AccordionItem = ({ questions, answers }: { questions: string; answers: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="cursor-pointer border-b border-black/60 py-7" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center">
          <span className="flex-1 text-[16px] font-bold">{questions}</span>
          {isOpen ? <FaMinus className="text-[#126e51]" /> : <FaPlus className="text-[#126e51]" />}
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
                opacity: 1,
                height: "auto",
                marginTop: "16px"
              }}
              exit={{
                opacity: 0,
                height: 0,
                marginTop: 0,
              }}
              className="whitespace-pre-line text-black/80"
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
   <Header/>
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 mt-24">Questions Fréquentes</h1>
      <div className="space-y-2">
        {items.map((item, index) => (
          <AccordionItem key={index} questions={item.questions} answers={item.answers} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Page