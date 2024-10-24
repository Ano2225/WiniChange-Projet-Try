import React from 'react'
import Image from "next/image";
import { winichangeApps } from '@/constants/nosMoyensPaiements';
import logoEnter from '@/app/assets/logo.png'
import { LeftCurve } from './Design/Collaboration';
import { RightCurve } from './Design/Collaboration';


function CircleTrans() {
    return (
        <div className="lg:ml-auto xl:w-[38rem] mt-20">
            <div className="relative left-1/2 flex w-[22rem] sm:w-[18rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100 mt-14 md:mt-0">
                <div className="flex w-60 aspect-square m-auto border border-green-700 rounded-full">
                    <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-white rounded-full">
                        <div className="flex items-center justify-center w-full h-full rounded-full">
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="bg-gradient-to-r from-green-500 via-teal-500 to-green-400 rounded-full w-80 h-80 opacity-30 blur-lg"></div>
                        </div>
                            <Image
                                src={logoEnter}
                                width={38}
                                height={38}
                                alt="Winichange Logo"
                            />
                        </div>
                    </div>
                </div>
                {/* Conteneur rotatif pour les logos */}
                <ul className="absolute inset-0 animate-rotate-circle flex items-center justify-center">
                    {winichangeApps.map((app, index) => (
                        <li
                            key={app.id}
                            className="absolute"
                            style={{
                                transform: `rotate(${index * (360 / winichangeApps.length)}deg) translate(9rem) rotate(-${index * (360 / winichangeApps.length)}deg)`,
                            }}
                        >
                            <div className="flex w-[3.2rem] h-[3.2rem] bg-white border border-n-1/15 rounded-xl">
                                <Image
                                    className="m-auto"
                                    width={app.width}
                                    height={app.height}
                                    alt={app.title}
                                    src={app.icon}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CircleTrans;
