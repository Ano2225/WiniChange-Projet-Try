'use client'

import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import Image from "next/image";

export const Feature = ({ title, description, icon: Icon }: { title: string; description: string; icon: any }) => {
    const offsetX = useMotionValue(0);
    const offsetY = useMotionValue(0);
    const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${offsetX}px ${offsetY}px, black, transparent)`;
    const border = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (!border.current) return null;
            const borderRect = border.current.getBoundingClientRect();
            offsetX.set(e.x - borderRect.x);
            offsetY.set(e.y - borderRect.y);
        };

        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            const controlsX = animate(offsetX, [0, 80, 160, 240, 320], {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 4
            });
            const controlsY = animate(offsetY, [0, 40, 120, 80, 40], {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 4
            });
            
            return () => {
                controlsX.stop();
                controlsY.stop();
            };
        } else {
            window.addEventListener('mousemove', updateMousePosition);
            return () => {
                window.removeEventListener('mousemove', updateMousePosition);
            };
        }
    }, [offsetX, offsetY]);

    return (
        <div 
            key={title} 
            className="group border max-w-[16rem] border-[#126e51]/30 text-center rounded-xl relative overflow-hidden bg-gray-800/95 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20"
        >
            <motion.div
                className="absolute inset-0 border border-emerald-500/20 rounded-xl"
                style={{
                    WebkitMaskImage: maskImage,
                    maskImage 
                }}
                ref={border}
            >
            </motion.div>

            <div className="bg-gradient-to-b from-[#126e51] to-[#0d503b] flex justify-center items-center py-8">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-300 bg-black/20">
                    <Image 
                        src={Icon.src} 
                        alt={title} 
                        className="p-2 object-contain" 
                        fill
                        sizes="(max-width: 96px) 100vw, 96px"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </div>

            <div className="bg-gray-800/95 p-5 rounded-b-xl">
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-sm text-gray-300/80 leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent blur-sm"></div>
            </div>
        </div>
    );
};