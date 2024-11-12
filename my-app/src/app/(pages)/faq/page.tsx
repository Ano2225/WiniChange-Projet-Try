"use client"

import Footer from '@/app/sections/Footer';
import { Header } from '@/app/sections/Header';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaMinus, FaPlus, FaSearch } from 'react-icons/fa';
import { BiChevronRight } from 'react-icons/bi';

interface FAQItem {
  category?: string;
  questions: string;
  answers: string;
}

interface AccordionItemProps {
  questions: string;
  answers: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ questions, answers, isOpen, onToggle }) => {
  return (
    <motion.div 
      className={`
        bg-white rounded-lg shadow-sm border transition-colors duration-200
        ${isOpen ? 'border-[#126e51]' : 'border-gray-100 hover:border-gray-200'}
      `}
    >
      <button
        className="w-full px-6 py-5 flex items-center gap-4 cursor-pointer"
        onClick={onToggle}
      >
        <span className="shrink-0">
          {isOpen ? (
            <div className="w-8 h-8 rounded-full bg-[#126e51] flex items-center justify-center">
              <FaMinus className="text-white text-sm" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-[#126e51]/10 flex items-center justify-center">
              <FaPlus className="text-[#126e51] text-sm" />
            </div>
          )}
        </span>
        <span className={`flex-1 text-left font-medium ${isOpen ? 'text-[#126e51]' : 'text-gray-900'}`}>
          {questions}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="px-6 pb-5"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              className="pt-4 border-t text-gray-600 whitespace-pre-line"
            >
              {answers}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Page: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const items: FAQItem[] = [
    {
      category: "Transactions",
      questions: "Comment faire une transaction ?",
      answers: "Pour effectuer une transaction, il faut :\n\n✔ Se connecter à son compte WINICHANGE\n✔ Sélectionner la rubrique 'je donne' et 'je reçois' selon votre convenance\n✔ Suivre les indications sur la plateforme afin d'être débité de votre compte et de recevoir de façon automatique votre paiement"
    },
    {
      category: "Transactions",
      questions: "Que faire lorsqu'une transaction de Bitcoin prend du temps ?",
      answers: "Les transactions de crypto-monnaies prennent du temps car il faut qu'elles soient à 2 confirmations au moins avant que le paiement ne passe sur WINICHANGE. Cet état de chose est lié à la technologie blockchain et il faut donc patienter un moment ou envoyer l'id (le hash) de la transaction au service client en ligne pour plus d'assistance lorsqu'après deux niveaux de confirmation, vous êtes restés sans suite de paiement."
    },
    {
      category: "Support",
      questions: "Que faire lorsque votre compte a été débité mais vous n'aviez pas été crédité en retour ?",
      answers: "Pour toute transaction où votre compte a été débité et vous n'aviez pas été crédité en retour, il faudra fournir au service client en ligne ou via Whatsapp ou Telegram au +2250749665503 :\n\n✔ La preuve de votre paiement (une capture d'écran qui montre que vous aviez réellement envoyé l'argent sur notre compte)\n✔ Le numéro avec lequel vous aviez validé le paiement (s'il s'agit d'un dépôt de FCFA)\n✔ L'adresse mail avec laquelle vous aviez fait l'opération sur WINICHANGE\n✔ La date d'envoi\n✔ L'id de la transaction/hash/Txhash/Hacher (s'il s'agit d'une vente de crypto monnaies pour recevoir du FCFA)\n✔ L'adresse de réception sur laquelle vous aimeriez recevoir"
    },
    {
      category: "Compte",
      questions: "Comment faire la vérification du compte Winichange (KYC) ?",
      answers: "Vérifier son compte se fait en trois étapes :\n\n✔ Vérifier son identité avec une pièce valide donc qui porte les nom et prénoms renseignés lors de votre inscription\n✔ Envoyer un selfie tenant la pièce qui nous permet de savoir que vous existez réellement\n✔ Envoyer un document qui permet de vérifier votre adresse (certificat de résidence, une facture d'électricité qui porte votre nom ou qui vérifie que vous habitez dans tel ou tel domicile, ou encore un relevé bancaire)\n\nNB: Rappelons qu'après les deux premières étapes, Winichange vous offre la possibilité d'effectuer des transactions le temps que vous fassiez la vérification de votre adresse plus tard. N'empêche que cette vérification est bien importante. Aussi toute notification concernant votre vérification vous est envoyée dans votre adresse mail."
    },
    {
      category: "Transactions",
      questions: "Quel est le minimum pour effectuer les achats sur le site ?",
      answers: "Le minimum requis est l'équivalent en FCFA de 2$ sur la plateforme. Rappelons aussi que le minimum est fonction de la cryptomonnaie voulue et donc de la quantité à acheter; ce minimum n'est pas valable pour toutes les cryptomonnaies."
    },
    {
      category: "Transactions",
      questions: "Que vaut 1 dollar sur votre site ?",
      answers: "Nous avons une multitude de possibilités de transactions. Au risque de vous fournir des réponses erronées, il faut toujours consulter la calculatrice du site pour des estimations assez précises en temps réel."
    },
    {
      category: "Compte",
      questions: "Quelles sont les documents que vous autorisez pour la vérification ?",
      answers: "Les pièces autorisées sont :\n\n✔ La CNI\n✔ Le permis de conduire\n✔ Le passeport\n✔ L'attestation"
    },
    {
      category: "Compte",
      questions: "La vérification est-elle obligatoire pour faire un échange ?",
      answers: "Oui, la vérification est obligatoire avant toute transaction."
    },
    {
      category: "Général",
      questions: "Quelles sont vos heures de travail sur le site ? Puis-je faire des transactions sur le site après ces heures ?",
      answers: "Les opérations sur le site sont possibles 24h/7 Non-stop et Automatique."
    },
    {
      category: "Général",
      questions: "Je voudrais avoir des informations sur Winichange, êtes-vous un site d'investissement ?",
      answers: "Nous sommes un bureau d'échange de e-monnaies en ligne. Vous pouvez acheter, vendre et échanger vos différentes monnaies numériques et les échanger entre elles. Vous avez également la possibilité d'effectuer des transferts d'argent nationaux et internationaux."
    }
];

  const filteredItems = items.filter(item =>
    item.questions.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answers.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-200">
      <Header/>
      <div className="relative bg-[#126e51] py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#126e51] to-emerald-800 opacity-90" />
        <div className="absolute inset-x-0 -bottom-1">
          <svg className="w-full h-8 text-gray-50" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" />
          </svg>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl mt-10 font-bold text-white mb-6">
              Questions Fréquentes
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Trouvez rapidement des réponses à vos questions
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Rechercher une question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-white/40"
              />
              <FaSearch className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {filteredItems.map((item, index) => (
              <AccordionItem
                key={index}
                questions={item.questions}
                answers={item.answers}
                isOpen={openItemId === index}
                onToggle={() => setOpenItemId(openItemId === index ? null : index)}
              />
            ))}
          </div>
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucune question ne correspond à votre recherche.</p>
            </div>
          )}
          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Vous n'avez pas trouvé ce que vous cherchez ?
            </h2>
            <p className="text-gray-600 mb-6">
              N'hésitez pas à contacter notre équipe support
            </p>
            <a
              href="mailto:support@winichange.com"
              className="inline-flex items-center gap-2 px-4 md:px-6 md:py-3  py-2 bg-[#126e51] text-white rounded-full hover:bg-[#0d523d] transition-colors"
            >
              Contacter le support
              <BiChevronRight className="text-xl" />
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Page;