'use client'

import { features } from '@/constants/features'
import { Feature } from '../components/Feature'


export const Features = () => {
  
    return (
        <div className="py-[20px] sm:py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-center font-bold text-3xl md:text-4xl tracking-tighter mb-10 md:mb-0">
                    <span className='text-[#126e51]'>Pourquoi Winichange </span>est le choix idéal
                    <div className="mt-4 flex justify-center gap-2">
                    <div className="h-1 w-16 bg-[#126e51] rounded-full"></div>
                    <div className="h-1 w-4 bg-[#126e51]/60 rounded-full"></div>
                </div>
                </h2>
                <div className='items-center flex justify-center'>
                <p className="text-center mt-5 text-[1rem] text-black/70 hidden md:block  md:mt-0 max-w-96 ">
                    Découvrez ce qui rend Winichange unique et pourquoi vous devriez nous faire confiance
                </p>
                </div>
                <div className="mt-1 flex flex-col md:flex-row flex-wrap gap-8 md:gap-4 justify-center items-center md:items-stretch">
                    {features.map(({ title, description, icon }) => (
                        <Feature title={title} description={description} icon={icon} key={title} />
                    ))}
                </div>
            </div>
        </div>
    )
}