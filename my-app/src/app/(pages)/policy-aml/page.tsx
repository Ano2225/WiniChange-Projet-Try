'use client'

import React from 'react'
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"
import { BiChevronRight } from "react-icons/bi"

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
  highlighted?: boolean;
  id?: string;
}

const PolicySection: React.FC<PolicySectionProps> = ({ title, children, highlighted = false }) => (
  <section 
    className={`
      py-8 md:py-12 first:pt-0
      ${highlighted ? 'bg-[#126e51]/5 -mx-4 md:-mx-8 px-4 md:px-8 rounded-xl' : ''}
    `}
  >
    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center">
      {highlighted && (
        <div className="w-1 md:w-2 h-6 md:h-8 bg-[#126e51] mr-3 md:mr-4 rounded-full"/>
      )}
      {title}
    </h2>
    <div className="text-gray-600 leading-relaxed text-sm md:text-base">
      {children}
    </div>
  </section>
)

const PolicyAML: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
        <div className="relative bg-[#126e51] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#126e51] opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#126e51] to-emerald-800" />
          <div className="absolute inset-0 opacity-10"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
               }}
          />
        </div>
        <div className="relative w-full max-w-4xl mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-5xl mt-10 font-bold text-center">
              Politiques de conformité AML
            </h1>
            <p className="mt-4 text-center text-white/80 text-sm md:text-base max-w-xl mx-auto">
              Document officiel détaillant nos politiques de lutte contre le blanchiment d'argent
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden overflow-x-auto px-4 py-4 bg-white border-b">
        <div className="flex gap-2 whitespace-nowrap">
          <a href="#identification" className="px-4 py-2 text-sm bg-[#126e51]/10 text-[#126e51] rounded-full">
            Identification
          </a>
          <a href="#kyc" className="px-4 py-2 text-sm bg-[#126e51]/10 text-[#126e51] rounded-full">
            KYC
          </a>
          <a href="#sanctions" className="px-4 py-2 text-sm bg-[#126e51]/10 text-[#126e51] rounded-full">
            Sanctions
          </a>
        </div>
      </div>
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <PolicySection title="Dispositions Générales" highlighted={true}>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <p className="text-sm md:text-lg">
                Winichange est une plateforme de E-ÉCHANGE détenue par la société Godwin Corp. (GCORP), 
                une SARLU (société à responsabilité limitée unipersonnelle) dont le siège social est situé à Abidjan. 
                Constituée en vertu des lois de la République de Côte d'Ivoire, cette plateforme agit en tant qu'intermédiaire 
                facilitant l'interopérabilité des solutions de transfert d'argent. Elle connecte les cryptomonnaies aux services 
                de transfert mobile et bancaire en Afrique et dans le monde, permettant ainsi une utilisation fluide et sécurisée 
                des fonds pour les utilisateurs. Les clients sont tenus de se conformer aux lois locales relatives à la prévention 
                du blanchiment d'argent et du financement du terrorisme, ainsi qu'à toute autre loi ou réglementation pertinente 
                concernant les opérations de Winichange. Les clients doivent strictement se conformer aux politiques et procédures 
                énoncées dans ce document (ci-après dénommé "la Politique"). Winichange élabore cette politique et peut y apporter 
                des modifications et des ajouts à sa discrétion, en supervisant le respect de ses dispositions et exigences. Les 
                clients doivent lire la politique avant d'accepter les conditions générales de Winichange. Le consentement du client 
                aux conditions générales, et par conséquent, l'engagement de transactions dans le système Winichange après acceptation 
                des conditions générales, signifie l'acceptation par le client de toutes les dispositions de la version actuelle de 
                cette politique.
              </p>
            </div>
          </PolicySection>
          <PolicySection title="Responsable de Conformité">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <p className="text-sm md:text-lg">
                Pour superviser et exécuter les procédures prévues dans la politique, Winichange nomme un responsable de la 
                conformité. Le Responsable de Conformité est chargé de collecter, d'analyser et d'enquêter sur les informations 
                concernant toute activité suspecte et la conduite des employés de l'entreprise en ce qui concerne les procédures 
                pertinentes. Le responsable des services aux commerçants établit les directives et règles pour l'identification 
                des clients, l'examen et la surveillance des transactions inhabituelles, ainsi que les aspects techniques de la 
                mise en œuvre de cette politique par Winichange.
              </p>
            </div>
          </PolicySection>
          <PolicySection title="Politique d'identification du client" highlighted={true} >
            <p className="mb-4 md:mb-6 text-sm md:text-lg" id="identification">
              Pour l'identification des clients, Winichange demande les documents suivants :
            </p>
            <div className="space-y-3 md:space-y-4">
              <div className="p-4 md:p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#126e51] text-sm md:text-base">
                Un justificatif d'identité (passeport, permis de conduire, carte nationale d'identité)
              </div>
              <div className="p-4 md:p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#126e51] text-sm md:text-base">
                Un justificatif de domicile (relevé bancaire, facture de services publics)
              </div>
            </div>
          </PolicySection>

          <PolicySection title="Politique KYC (Know Your Customer)" highlighted={true} >
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm" id="kyc">
              <p className="text-sm md:text-lg">
                Winichange effectue les procédures de vérification KYC pour éviter le risque d'être tenu responsable et se 
                protéger contre toute tentative d'utilisation de l'entreprise pour des activités illégales. Winichange évalue 
                les transactions des clients et collecte et stocke des données et des faits essentiels relatifs aux clients, 
                aux clients potentiels et à leurs transactions dans le cadre des procédures KYC. Après l'identification d'un 
                client, Winichange stocke les informations obtenues dans le dossier du client. La société s'engage à n'effectuer 
                qu'une seule fois les démarches d'identification liées à un client. Winichange s'engage à protéger les droits 
                des clients et la confidentialité de leurs données. Les informations personnelles ne seront divulguées à des 
                tiers que dans des circonstances limitées, conformément aux lois applicables et aux accords entre Winichange 
                et le client.
              </p>
            </div>
          </PolicySection>
          <PolicySection title="Identification et detection des activités suspectes">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <p className="text-sm md:text-lg">
                Toute transaction pouvant être liée à des activités de blanchiment d'argent sera considérée comme suspecte. Les 
                domaines permettant de déterminer qu'une transaction spécifique est suspecte peuvent être les vues et l'expérience 
                personnelles des employés de la Société ainsi que les informations reçues ou identifiées. Le responsable des 
                services aux commerçants doit continuellement observer et mettre à jour les systèmes de l'entreprise pour détecter 
                les activités suspectes. Conformément aux lois applicables et aux exigences des organisations internationales, la 
                Société peut, le cas échéant et sans obligation d'obtenir l'accord du Client ou d'en informer le client, notifier 
                aux organismes de réglementation et/ou d'application de la loi toute transaction suspecte. Winichange doit 
                périodiquement se référer et consulter les listes publiées par les responsables locaux et les organisations 
                internationales, qui comprennent des listes de terroristes connus ou de personnes soupçonnées d'activités 
                terroristes, d'organisations terroristes, de pays à haut risque, ainsi qu'une liste limitée de pays soumis aux 
                sanctions de l'OFAC.
              </p>
            </div>
          </PolicySection>
          <PolicySection title="Tiers">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <p className="text-sm md:text-lg">
                Winichange peut faire appel à des prestataires de services tiers pour certaines de ses fonctions commerciales. 
                Elle s'efforcera de déterminer, lors du processus de diligence raisonnable initial et en cours, s'il existe une 
                enquête admise et des poursuites intentées contre de tels prestataires de services tiers.
              </p>
            </div>
          </PolicySection>
          <PolicySection title="Sanction civile et pénale" highlighted={true} >
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-red-200" id="sanctions">
              <p className="text-sm md:text-lg">
                Les autorités gouvernementales de divers pays et, dans certains cas, les organisations internationales peuvent 
                imposer de lourdes sanctions civiles et pénales à toute personne qui enfreint les lois et directives mentionnées 
                dans la Politique. Les entreprises peuvent être considérées comme pénalement responsables des actes de leurs 
                salariés dans certaines conditions.
              </p>
            </div>
          </PolicySection>
          <PolicySection title="Déclaration de conformité" highlighted={true}>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-l-4 border-[#126e51]">
              <p className="text-sm md:text-lg">
                Le Client certifie qu'il a pris connaissance et a accepté cet avis, et qu'il fonctionnera en totale conformité 
                avec les termes et normes décrits dans la Politique et se conformera à toutes les lois et autres lois 
                applicables, ordonnances et conditions régissant ses activités en tant que Client. Le client confirme qu'il est 
                responsable de ses actes conformément aux lois en vigueur dans le domaine abordé dans la présente politique et 
                qu'il assumera la responsabilité en cas de non-respect de ces lois.
              </p>
            </div>
          </PolicySection>
          <div className="mt-8 md:mt-12 p-4 md:p-6 bg-[#126e51]/5 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Besoin de plus d'informations ?
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Notre équipe est là pour vous aider
                </p>
              </div>
              <a 
                href="mailto:contact@winichange.com"
                className="flex items-center gap-2 px-6 py-3 bg-[#126e51] text-white rounded-full hover:bg-[#0d523d] transition-colors text-sm md:text-base"
              >
                Nous contacter
                <BiChevronRight />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PolicyAML