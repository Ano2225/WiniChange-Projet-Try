import React from 'react'
import Image from "next/image";
import { winichangeApps } from '@/constants/nosMoyensPaiements';
import logoEnter from '@/app/assets/winiLogo.png'

function CircleTrans() {
    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-center lg:justify-end xl:max-w-4xl my-6 lg:my-8">
                {/* Cercle principal avec position relative pour servir de référence */}
                <div className="relative w-full max-w-[14rem] sm:max-w-[16rem] md:max-w-[18rem] aspect-square">
                    {/* Cercle externe */}
                    <div className="absolute inset-0 border-2 border-yellow-500 rounded-full">
                        {/* Cercle du milieu */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square border-2 border-yellow-500 rounded-full">
                            {/* Cercle central avec le logo */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 aspect-square bg-white rounded-full p-1.5 sm:p-2">
                                <div className="relative w-full h-full flex items-center justify-center rounded-full">
                                    <Image
                                        src={logoEnter}
                                        width={85}
                                        height={85}
                                        alt="Winichange Logo"
                                        className="w-4/5 h-4/5 object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Effet de gradient */}
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="absolute w-full h-full bg-gradient-to-r from-green-500 via-teal-500 to-green-400 rounded-full opacity-30 blur-lg"></div>
                    </div>

                    {/* Apps en rotation - avec calcul relatif */}
                    <div className="absolute inset-0 animate-rotate-circle">
                        <ul className="relative w-full h-full">
                            {winichangeApps.map((app, index) => {
                                const angle = index * (360 / winichangeApps.length);
                                const radian = (angle * Math.PI) / 180;
                                const radius = '45%';
                                
                                const x = `${50 + 45 * Math.cos(radian)}%`;
                                const y = `${50 + 45 * Math.sin(radian)}%`;
                                
                                return (
                                    <li
                                        key={app.id}
                                        className="absolute"
                                        style={{
                                            left: x,
                                            top: y,
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white border border-gray-200/15 rounded-xl shadow-lg">
                                            <Image
                                                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
                                                width={app.width}
                                                height={app.height}
                                                alt={app.title}
                                                src={app.icon}
                                            />
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CircleTrans;