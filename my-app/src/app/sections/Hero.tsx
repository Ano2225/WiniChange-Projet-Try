'use client'

import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

export const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <div className="text-gray-900 relative overflow-hidden py-28 md:mt-10 mt-2">
      <motion.div 
        className="absolute w-[150vw] aspect-[2/1] md:w-[1536px] md:h-[768px] rounded-[50%] 
                   bg-white left-1/2 -translate-x-1/2 border border-emerald-600
                   bg-[radial-gradient(closest-side,#fff_82%,#dcfce7)] 
                   top-[calc(100%-120px)] sm:top-[calc(100%-120px)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          minWidth: '375px',
          minHeight: '187.5px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex justify-center md:mb-8 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        <h1 className="text-3xl md:text-6xl font-bold tracking-tighter text-center text-black">
          {isMobile ? (
            <div className="flex flex-col gap-1">
              <span>Une expérience</span>
              <span className="text-[#126e51]">unique</span>
              <span className="text-3xl md:text-5xl">d'interopérabilité</span>
              <span className="text-3xl md:text-5xl">et d'interconnexion.</span>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <span>Une expérience <span className="text-[#126e51]">unique</span></span>
              <span>d'interopérabilité et d'interconnexion.</span>
            </div>
          )}
        </h1>
        </motion.div>
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-center text-sm md:text-[1.2rem] leading-6 max-w-md text-black/80">
            Winichange est votre partenaire de confiance pour tous vos transferts 
            d'argent et échanges cryptographiques.
          </p>
        </motion.div>
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="bg-emerald-600 text-white py-3 px-5 rounded-xl 
                           hover:bg-emerald-500 transition-colors duration-200 
                           text-lg font-bold shadow-lg">
            S'inscrire maintenant
          </button>
        </motion.div>
      </div>
    </div>
  )
}