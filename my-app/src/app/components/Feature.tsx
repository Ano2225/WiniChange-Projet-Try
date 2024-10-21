'use client'

import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import Image from "next/image";

export const Feature = ({ title, description, icon: Icon }: { title: string; description: string; icon: any }) => {
    const offsetX = useMotionValue(0);
    const offsetY = useMotionValue(0);
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
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
            const controlsX = animate(offsetX, [0, 100, 200, 300, 400], { repeat: Infinity, repeatType: "reverse", duration: 5 });
            const controlsY = animate(offsetY, [0, 50, 150, 100, 50], { repeat: Infinity, repeatType: "reverse", duration: 5 });
            
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
        <div key={title} 
            className="border max-w-[19rem] items-center border-[#126e51] text-center rounded-2xl sm:flex-1 relative overflow-hidden bg-gray-800"
        >
            <motion.div
                className="absolute inset-0 border-4 border-white rounded-lg"
                style={{
                    WebkitMaskImage: maskImage,
                    maskImage 
                }}
                ref={border}
            >
            </motion.div>
            <div className="bg-[#126e51] flex justify-center items-center py-8 md:py-12 rounded-b-3xl">
                <div className="relative h-24 w-20 rounded-full">
                    <Image 
                        src={Icon.src} 
                        alt={title} 
                        className="w-full h-full object-cover rounded-lg" 
                        layout="fill" 
                        priority
                    />
                </div>
            </div>
            <div className="bg-gray-800 p-5 rounded-b-2xl">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <div className="max-w-xl mx-auto text-sm">
                    <p className="mt-2 text-white/70">{description}</p>
                </div>
            </div>
        </div>
    );
};
