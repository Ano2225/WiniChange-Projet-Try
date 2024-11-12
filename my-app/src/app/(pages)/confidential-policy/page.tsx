'use client'

import React from 'react'
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"

interface PolicySectionProps {
  title: string
  children: React.ReactNode
}

interface Section {
  title: string
  content: string
  list?: string[]
  isImportant?: boolean
}

const PolicySection: React.FC<PolicySectionProps> = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
      {title}
    </h2>
    <div className="text-gray-600 leading-relaxed space-y-4">
      {children}
    </div>
  </div>
)

const ConfidentialPolicy: React.FC = () => {
  const sections: Section[] = [
    {
      title: "Introduction",
      content: `Winichange, détenue par la société Godwin Corp., accorde une grande importance à la protection de votre vie privée. Godwin Corp. (GCORP) est une SARLU (société à responsabilité limitée unipersonnelle) basée en Côte d'Ivoire, constituée en vertu des lois ivoiriennes.`,
      isImportant: true
    },
    {
      title: "Quels types d'informations recueillons-nous ?",
      content: `Nous collectons et utilisons vos données personnelles, c'est-à-dire toute information permettant de vous identifier directement ou indirectement, dans la mesure nécessaire à l'exercice de nos activités et afin de vous offrir des produits et des services personnalisés de qualité.`,
      list: [
        "Données d'identification (nom, prénom, date de naissance, etc.)",
        "Données de contact personnelles ou professionnelles",
        "Données économiques financières et fiscales",
        "Données transactionnelles et bancaires",
        "Données liées à vos activités numériques",
        "Données sur l'emploi",
        "Données de géolocalisation"
      ]
    },
    {
      title: "Pourquoi et comment utilisons-nous ces informations ?",
      content: `Nous utilisons vos données à caractère personnel pour plusieurs raisons :`,
      list: [
        "Nous conformer à nos obligations légales et réglementaires",
        "Exécuter un contrat conclu avec vous",
        "La lutte contre le blanchiment de capitaux",
        "La conformité à la législation applicable",
        "La lutte contre la fraude fiscale",
        "Personnaliser et améliorer la qualité de nos services"
      ]
    },
    {
      title: "À qui ces informations peuvent être partagées ?",
      content: `Vos informations peuvent être partagées avec :`,
      list: [
        "Godwin Corp.",
        "Les prestataires de services et sous-traitants",
        "Les autorités financières et judiciaires",
        "Certaines professions réglementées",
        "Nos partenaires de confiance"
      ]
    },
    {
      title: "Durée de conservation",
      content: `Le Client reconnaît que les informations, y compris les informations personnelles, et les Transactions, les documents ou leurs reproductions seront enregistrées et stockées pendant une période de dix (10) ans par Winichange.`
    },
    {
      title: "Vos droits",
      content: `Conformément à la réglementation applicable, vous disposez de différents droits :`,
      list: [
        "Droit d'accès à vos données",
        "Droit de rectification",
        "Droit à l'effacement",
        "Droit à la limitation du traitement",
        "Droit d'opposition",
        "Droit à la portabilité de vos données",
        "Droit de retirer votre consentement"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="relative bg-gradient-to-r from-emerald-800 to-emerald-600 py-32">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="md:mt-8 mt-0 text-4xl md:text-5xl font-bold text-white mb-6">
            Politique de confidentialité
          </h1>
          <p className="text-emerald-50 text-lg max-w-2xl mx-auto">
            Comment nous protégeons vos données personnelles
          </p>
          <p className="text-emerald-50 text-sm mt-4">
            Dernière mise à jour : 19 février 2024
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16 -mt-10">
        {sections.find(s => s.isImportant) && (
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 border-l-4 border-emerald-500">
            <p className="text-gray-600 leading-relaxed">
              {sections.find(s => s.isImportant)?.content}
            </p>
          </div>
        )}
        {sections.filter(s => !s.isImportant).map((section, index) => (
          <PolicySection key={index} title={section.title}>
            <p className="text-gray-600">{section.content}</p>
            {section.list && (
              <ul className="space-y-2 mt-4">
                {section.list.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 bg-emerald-50 p-3 rounded-lg">
                    <span className=" w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </PolicySection>
        ))}
        <div className="bg-gradient-to-br from-emerald-50 to-white rounded-lg p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Des questions sur vos données ?
          </h2>
          <p className="text-gray-600 mb-4">
            Notre équipe est là pour répondre à toutes vos questions concernant la protection de vos données.
          </p>
          <a 
            href="mailto:info@winichange.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Contactez-nous
          </a>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          Cette politique de confidentialité a été mise à jour le 19 février 2024
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ConfidentialPolicy