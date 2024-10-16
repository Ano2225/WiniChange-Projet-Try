import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import CircleTrans from '../sections/circleTrans'

const CallToAction = () => {
  return (
    <div className='bg-black'>
    <div className='container lg:flex items-center justify-between py-16'>
        <div className='max-w-xl text-center lg:text-left'>
            <h1 className='text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6'>
            Rejoignez-nous dès aujourd'hui !
            </h1>
            <p className='text-base lg:text-lg text-gray-200 mb-6'>
            Winichange est la solution idéale pour répondre à tous vos besoins de transfert d'argent. Découvrez une plateforme intuitive et sécurisée pour simplifier vos échanges financiers, que ce soit pour des transactions locales ou internationales.
            </p>
            <p className='text-base lg:text-lg text-gray-200'>
            Profitez des meilleurs taux et d'une rapidité inégalée pour vos transactions. Rejoignez la communauté qui fait confiance à Winichange pour tous ses échanges financiers.
            </p>
            <button className='flex items-center justify-center gap-3 rounded-full bg-[#126e51] text-white font-bold mt-8 px-6 py-3 text-sm lg:text-base shadow-lg hover:bg-[#0e5741]'>
            <span>Nous rejoindre</span>
            <FaArrowRightLong />
            </button>
        </div>
      <CircleTrans />
    </div>
 
    </div>
  )
}

export default CallToAction
