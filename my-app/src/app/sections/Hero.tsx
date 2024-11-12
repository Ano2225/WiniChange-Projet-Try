'use client'

import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

export const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <div className="bg-black text-white relative overflow-hidden py-28">
      <motion.div 
        className="absolute h-[375px] w-[750px] md:w-[1536px] md:h-[768px] rounded-[100%] 
                   bg-black left-1/2 -translate-x-1/2 border border-[#126e51] 
                   bg-[radial-gradient(closest-side,#000_82%,#126e51)] 
                   top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-6xl font-bold tracking-tighter text-center">
            {isMobile ? (
              <>
                Une expérience<br />
                d'interopérabilité et<br />
                d'interconnexion<br />
                sans pareille.
              </>
            ) : (
              <>
                Une expérience d'interopérabilité<br />
                et d'interconnexion sans pareille.
              </>
            )}
          </h1>
        </motion.div>
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-center text-sm md:text-[1.2rem] leading-6 max-w-md">
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
          <button className="bg-yellow-500 text-[#126e51] py-3 px-5 rounded-xl 
                           hover:bg-yellow-400 transition-colors duration-200 
                           text-lg md:text-xl font-bold">
            S'inscrire maintenant
          </button>
        </motion.div>
      </div>
    </div>
  )
}