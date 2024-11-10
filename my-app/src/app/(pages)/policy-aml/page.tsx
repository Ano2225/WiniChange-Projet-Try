'use client'

import React from 'react'
import Image from "next/image"
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"

const PolicyAML = () => {
  

  return (
    <>
      <Header />
      <div className='pb-5'>
          <h1 className=' pt-56 text-black text-3xl text-center '>
            <span className='font-semibold text-white py-0.5 px-2 bg-[#126e51]'>Politiques de conformité AML</span>
          </h1>
      </div>
      <div className='pt-10 md:py-20 h-full w-full'>
        <div className='container mx-auto px-5 lg:px-20 py-10 '>
        <div>
        <h1 className='font-bold text-2xl text-black'>Dispositions Générales</h1>
        <p className='mt-2 text-black/80'>
            Winichange est une plateforme de E-ÉCHANGE détenue par la société Godwin Corp. (GCORP), une SARLU (société à responsabilité limitée unipersonnelle) dont le siège social est situé à Abidjan. Constituée en vertu des lois de la République de Côte d’Ivoire, cette plateforme agit en tant qu'intermédiaire facilitant l'interopérabilité des solutions de transfert d'argent. Elle connecte les cryptomonnaies aux services de transfert mobile et bancaire en Afrique et dans le monde, permettant ainsi une utilisation fluide et sécurisée des fonds pour les utilisateurs. Les clients sont tenus de se conformer aux lois locales relatives à la prévention du blanchiment d'argent et du financement du terrorisme, ainsi qu'à toute autre loi ou réglementation pertinente concernant les opérations de Winichange. Les clients doivent strictement se conformer aux politiques et procédures énoncées dans ce document (ci-après dénommé "la Politique"). Winichange élabore cette politique et peut y apporter des modifications et des ajouts à sa discrétion, en supervisant le respect de ses dispositions et exigences. Les clients doivent lire la politique avant d'accepter les conditions générales de Winichange. Le consentement du client aux conditions générales, et par conséquent, l'engagement de transactions dans le système Winichange après acceptation des conditions générales, signifie l'acceptation par le client de toutes les dispositions de la version actuelle de cette politique.
        </p>
      </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-black'>Responsable de Conformité</h1>
            <p className='mt-2 text-black/80'>
                Pour superviser et exécuter les procédures prévues dans la politique, Winichange nomme un responsable de la conformité. Le Responsable de Conformité est chargé de collecter, d'analyser et d'enquêter sur les informations concernant toute activité suspecte et la conduite des employés de l'entreprise en ce qui concerne les procédures pertinentes. Le responsable des services aux commerçants établit les directives et règles pour l'identification des clients, l'examen et la surveillance des transactions inhabituelles, ainsi que les aspects techniques de la mise en œuvre de cette politique par Winichange.
            </p>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-black'>Politique d'identification du client</h1>
            <p className='mt-2 text-black/80'>
                Pour l'identification des clients, Winichange demande les documents suivants :
            </p>
            <ul className='flex flex-col gap-1'>
                <li className='bg-green-700 text-white p-1'>Un justificatif d'identité (passeport, permis de conduire, carte nationale d'identité) </li>
                <li className='bg-green-700 text-white p-1'>Un justificatif de domicile (relevé bancaire, facture de services publics)</li>
            </ul>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-black'>Politique KYC (Know Your Customer)</h1>
            <p className='mt-2 text-black/80'>
                Winichange effectue les procédures de vérification KYC pour éviter le risque d'être tenu responsable et se protéger contre toute tentative d'utilisation de l'entreprise pour des activités illégales. Winichange évalue les transactions des clients et collecte et stocke des données et des faits essentiels relatifs aux clients, aux clients potentiels et à leurs transactions dans le cadre des procédures KYC. Après l'identification d'un client, Winichange stocke les informations obtenues dans le dossier du client. La société s'engage à n'effectuer qu'une seule fois les démarches d'identification liées à un client. Winichange s'engage à protéger les droits des clients et la confidentialité de leurs données. Les informations personnelles ne seront divulguées à des tiers que dans des circonstances limitées, conformément aux lois applicables et aux accords entre Winichange et le client.
            </p>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-black'>Identification et detection des activités suspectes</h1>
            <p className='mt-2 text-black/80'>
                Toute transaction pouvant être liée à des activités de blanchiment d'argent sera considérée comme suspecte. Les domaines permettant de déterminer qu'une transaction spécifique est suspecte peuvent être les vues et l'expérience personnelles des employés de la Société ainsi que les informations reçues ou identifiées. Le responsable des services aux commerçants doit continuellement observer et mettre à jour les systèmes de l'entreprise pour détecter les activités suspectes. Conformément aux lois applicables et aux exigences des organisations internationales, la Société peut, le cas échéant et sans obligation d'obtenir l'accord du Client ou d'en informer le client, notifier aux organismes de réglementation et/ou d'application de la loi toute transaction suspecte. Winichange doit périodiquement se référer et consulter les listes publiées par les responsables locaux et les organisations internationales, qui comprennent des listes de terroristes connus ou de personnes soupçonnées d'activités terroristes, d'organisations terroristes, de pays à haut risque, ainsi qu'une liste limitée de pays soumis aux sanctions de l'OFAC.
            </p>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-black'>Tiers</h1>
            <p className='mt-2 text-black/80'>
                Winichange peut faire appel à des prestataires de services tiers pour certaines de ses fonctions commerciales. Elle s'efforcera de déterminer, lors du processus de diligence raisonnable initial et en cours, s'il existe une enquête admise et des poursuites intentées contre de tels prestataires de services tiers.
            </p>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-black'>Sanction civile et pénale</h1>
            <p className='mt-2 text-black/80'>
            Les autorités gouvernementales de divers pays et, dans certains cas, les organisations internationales peuvent imposer de lourdes sanctions civiles et pénales à toute personne qui enfreint les lois et directives mentionnées dans la Politique. Les entreprises peuvent être considérées comme pénalement responsables des actes de leurs salariés dans certaines conditions.
            </p>
        </div>
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-black'>Déclaration de conformité</h1>
            <p className='mt-2 text-black/80'>
                Le Client certifie qu'il a pris connaissance et a accepté cet avis, et qu'il fonctionnera en totale conformité avec les termes et normes décrits dans la Politique et se conformera à toutes les lois et autres lois applicables, ordonnances et conditions régissant ses activités en tant que Client. Le client confirme qu'il est responsable de ses actes conformément aux lois en vigueur dans le domaine abordé dans la présente politique et qu'il assumera la responsabilité en cas de non-respect de ces lois.
            </p>
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PolicyAML
