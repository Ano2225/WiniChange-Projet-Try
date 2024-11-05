'use client'

import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive';

export const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    return (
        <div className="bg-black text-white bg-hero-gradient relative overflow-clip py-[72px] sm:py-26 pt-36">
             <div className="absolute h-[375px] w-[750px] md:w-[1536px] md:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border
              border-[#126e51] bg-[radial-gradient(closest-side,#000_82%,#126e51)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]">
            </div>
            <div className="container relative">
                <div className="flex justify-center">
                    <div className="inline-flex relative">
                    {isMobile ?(<motion.h1
                            className="text-3xl md:text-6xl font-bold tracking-tighter text-center mt-4 inline-flex"
                            initial={{ opacity: 0, y: 50 }} 
                            animate={{ opacity: 1, y: 0 }}    
                            transition={{ duration: 1.2, ease: "easeOut" }}  
                        >
                              Une expérience d'interopérabilité et d'interconnexion <br />
                              sans pareille.
                        </motion.h1>
                    ) : (
                        <h1 className="text-3xl md:text-6xl font-bold tracking-tighter text-center mt-4 inline-flex">
                              Une expérience d'interopérabilité et d'interconnexion <br />
                               sans pareille.
                        </h1>
                    )}
                      
                    </div>
                </div>
              <div className="flex justify-center">
              <p className="text-center text-sm md:text-[1.2rem] leading-4 md:leading-6 mt-8 max-w-md">
                   Winichange est votre partenaire de confiance pour tous vos transferts d'argent et échanges cryptographiques.
                </p>
              </div>
                <div className="flex justify-center mt-8">
                  <button className="bg-yellow-500  text-[#126e51] py-3 px-5 rounded-xl  hover:bg-yellow-400 text-lg md:text-xl font-bold">S'inscrire maintenant</button>
                </div>
            </div>
           
        </div>
    )
}