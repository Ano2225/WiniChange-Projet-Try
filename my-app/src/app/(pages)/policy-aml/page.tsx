'use client'

import React from 'react'
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"

const PolicySection = ({ title, children, highlighted = false }:any) => (
  <section className={`py-12 first:pt-0 ${highlighted ? 'bg-[#126e51]/5 -mx-8 px-8 rounded-xl' : ''}`}>
    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
      {highlighted && (
        <div className="w-2 h-8 bg-[#126e51] mr-4 rounded-full"/>
      )}
      {title}
    </h2>
    <div className="text-gray-600 leading-relaxed">
      {children}
    </div>
  </section>
)

const PolicyAML = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="relative bg-[#126e51] text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#126e51] opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#126e51] to-emerald-800" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl  mt-8 font-bold text-center">
            Politiques de conformité AML
          </h1>
          <p className="mt-4 text-center text-white/80 max-w-2xl mx-auto">
            Document officiel détaillant nos politiques de lutte contre le blanchiment d'argent
          </p>
        </div>
      </div>

      {/* Content avec sections mises en valeur */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <PolicySection title="Dispositions Générales" highlighted={true}>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-lg">
              Winichange est une plateforme de E-ÉCHANGE détenue par la société Godwin Corp. (GCORP),
              une SARLU (société à responsabilité limitée unipersonnelle) dont le siège social est situé à Abidjan.
              Constituée en vertu des lois de la République de Côte d'Ivoire, cette plateforme agit en tant
              qu'intermédiaire facilitant l'interopérabilité des solutions de transfert d'argent.
            </p>
          </div>
        </PolicySection>

        <PolicySection title="Responsable de Conformité">
          <p>
            Pour superviser et exécuter les procédures prévues dans la politique, Winichange nomme
            un responsable de la conformité. Le Responsable de Conformité est chargé de collecter,
            d'analyser et d'enquêter sur les informations concernant toute activité suspecte et la
            conduite des employés de l'entreprise en ce qui concerne les procédures pertinentes.
          </p>
        </PolicySection>

        <PolicySection title="Politique d'identification du client" highlighted={true}>
          <p className="mb-6">
            Pour l'identification des clients, Winichange demande les documents suivants :
          </p>
          <div className="grid gap-4">
            <div className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#126e51]">
              Un justificatif d'identité (passeport, permis de conduire, carte nationale d'identité)
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#126e51]">
              Un justificatif de domicile (relevé bancaire, facture de services publics)
            </div>
          </div>
        </PolicySection>

        <PolicySection title="Politique KYC (Know Your Customer)" highlighted={true}>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-lg">
              Winichange effectue les procédures de vérification KYC pour éviter le risque d'être
              tenu responsable et se protéger contre toute tentative d'utilisation de l'entreprise
              pour des activités illégales.
            </p>
          </div>
        </PolicySection>

        <PolicySection title="Identification et detection des activités suspectes">
          <p>
            Toute transaction pouvant être liée à des activités de blanchiment d'argent sera
            considérée comme suspecte. Les domaines permettant de déterminer qu'une transaction
            spécifique est suspecte peuvent être les vues et l'expérience personnelles des
            employés de la Société ainsi que les informations reçues ou identifiées.
          </p>
        </PolicySection>

        <PolicySection title="Tiers">
          <p>
            Winichange peut faire appel à des prestataires de services tiers pour certaines
            de ses fonctions commerciales. Elle s'efforcera de déterminer, lors du processus
            de diligence raisonnable initial et en cours, s'il existe une enquête admise et
            des poursuites intentées contre de tels prestataires de services tiers.
          </p>
        </PolicySection>

        <PolicySection title="Sanction civile et pénale" highlighted={true}>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-red-200">
            <p className="text-lg">
              Les autorités gouvernementales de divers pays et, dans certains cas, les
              organisations internationales peuvent imposer de lourdes sanctions civiles et
              pénales à toute personne qui enfreint les lois et directives mentionnées dans
              la Politique.
            </p>
          </div>
        </PolicySection>

        <PolicySection title="Déclaration de conformité">
          <p>
            Le Client certifie qu'il a pris connaissance et a accepté cet avis, et qu'il
            fonctionnera en totale conformité avec les termes et normes décrits dans la
            Politique.
          </p>
        </PolicySection>
      </div>

      <Footer />
    </div>
  )
}

export default PolicyAML