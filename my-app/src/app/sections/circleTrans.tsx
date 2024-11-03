import React from 'react';
import Image from "next/image";
import { winichangeApps } from '@/constants/nosMoyensPaiements';
import logoEnter from '@/app/assets/winiLogo.png';

function CircleTrans() {
    return (
        <div className="lg:ml-auto xl:w-[38rem] sm:my-4">
            <div className="relative left-1/2 flex w-[20rem] sm:w-[16rem] md:w-[19rem] border-yellow-500 aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
                <div className="flex w-48 sm:w-40 md:w-60 aspect-square m-auto border border-yellow-500 rounded-full">
                    <div className="w-[5rem] sm:w-[4rem] md:w-[6rem] aspect-square m-auto p-[0.2rem] bg-white rounded-full">
                        <div className="flex items-center justify-center w-full h-full rounded-full">
                            <Image
                                src={logoEnter}
                                width={78}
                                height={78}
                                alt="Winichange Logo"
                                className="w-14 sm:w-10 md:w-16"
                            />
                        </div>
                        <div className="absolute inset-0 flex justify-center items-center -z-50">
                            <div className="bg-gradient-to-r from-green-500 via-teal-500 to-green-400 rounded-full w-64 h-64 sm:w-48 sm:h-48 opacity-30 blur-lg"></div>
                        </div>
                    </div>
                </div>
                {/* Rotating container for logos */}
                <ul className="absolute inset-0 animate-rotate-circle flex items-center justify-center">
                    {winichangeApps.map((app, index) => (
                        <li
                            key={app.id}
                            className="absolute"
                            style={{
                                transform: `rotate(${index * (360 / winichangeApps.length)}deg) translate(7rem) rotate(-${index * (360 / winichangeApps.length)}deg)`,
                            }}
                        >
                            <div className="flex w-[2.8rem] sm:w-[2.4rem] h-[2.8rem] sm:h-[2.4rem] bg-white border border-n-1/15 rounded-xl">
                                <Image
                                    className="m-auto"
                                    width={app.width * 0.8}
                                    height={app.height * 0.8}
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
