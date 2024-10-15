import React from 'react'
import Image from "next/image";
import logoEnter from "@/app/assets/logo.png";
import check from '@/app/assets/icone.webp';
import moov from "@/app/assets/moov.svg";
import orange from "@/app/assets/orange.svg";
import wave from "@/app/assets/wave.png";
import btc from "@/app/assets/btc.svg";
import perfect from '@/app/assets/perfect.svg';
import payer from '@/app/assets/payer.svg';
import freemoney from '@/app/assets/freemoney.png';
import emoney from '@/app/assets/emoney.png';
import { LeftCurve } from "./Design/Collaboration";
import { RightCurve } from './Design/Collaboration';
import { FaArrowRight } from 'react-icons/fa';

function CircleTrans() {

    const winichangeApps = [
        {
          id: "0",
          title: "Moov Money",
          icon: moov,
          width: 26,
          height: 36,
        },
        {
          id: "1",
          title: "Orange Money",
          icon: orange,
          width: 34,
          height: 36,
        },
        {
          id: "2",
          title: "Wave",
          icon: wave,
          width: 360,
          height: 280,
        },
        {
          id: "3",
          title: "BitCoin",
          icon: btc,
          width: 34,
          height: 35,
        },
        {
          id: "4",
          title: "Perfect Money",
          icon: perfect,
          width: 34,
          height: 35,
        },
        {
          id: "5",
          title: "Payer",
          icon: payer,
          width: 34,
          height: 35,
        },
        {
          id: "6",
          title: "Free Money",
          icon: freemoney,
          width: 34,
          height: 35,
        },
        {
          id: "7",
          title: "E-money",
          icon: emoney,
          width: 34,
          height: 35,
        },
      ];

  return (
    <div className="lg:ml-auto xl:w-[38rem] mt-20">
          <div className="relative left-1/2  flex w-[22rem] sm:w-[18rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100 mt-20 md:mt-0">
            <div className="flex w-60 aspect-square m-auto border border-purple-400 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <Image
                    src={logoEnter}
                    width={38}
                    height={38}
                    alt="Winichange Logo"
                  />
                </div>
              </div>
            </div>
            <ul>
              {winichangeApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-white border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
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
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
  )
}

export default CircleTrans