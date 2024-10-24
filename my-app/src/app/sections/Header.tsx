'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import LogoDesktop from '@/app/assets/log1.png'
import { IoMenu, IoClose } from "react-icons/io5";
import { IoLogoAndroid, IoLogoApple } from "react-icons/io5";
import LanguageSwitcher from '../utils/LanguageSwitcher';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="fixed top-0 w-full z-50">
            <div className="md:container flex items-center text-center justify-center gap-2 w-full md:px-10 font-semibold px-0">
                <a href="#" className="flex items-center  justify-center gap-2 uppercase flex-1 h-[2rem] py-2   bg-white border-[#126e51]  border-l-2 md:border-l-4 border-b-2 md:border-b-4 rounded-b-3xl hover:text-teal-600 transition duration-300 ease-in-out transform hover:scale-x-90">
                    <IoLogoApple className="w-5 h-5 text-[#126e51]" />
                    <div className='hidden md:block text-black'>Application IOS</div>
                </a>
                <a href="#" className="flex items-center justify-center gap-2 uppercase  flex-1 h-[2rem] bg-white border-[#126e51] border-l-2 md:border-l-4 border-b-2 md:border-b-4 rounded-b-3xl hover:text-teal-600 transition duration-300 ease-in-out transform hover:scale-x-90">
                    <IoLogoAndroid className="w-5 h-5 text-[#126e51]"/>
                    <div className='hidden md:block text-black'>Application Android</div>
                </a>
            </div>

            <div className={ `md:container w-full  py-2 md:px-4  mt-2 font-semibold transition-colors duration-300 ${isScrolled ? 'bg-white bg-opacity-60 backdrop-blur-lg' : 'bg-gradient-to-l from-white to-green-200 bg-opacity-30 backdrop-blur-lg border-b border-white '} rounded-[1.8rem]`}>
                <div className="mx-auto flex items-center justify-between px-4">
                    <div className="flex items-center cursor-pointer">
                        <a href="/">
                        <Image src={LogoDesktop} alt="mon_logo_desktop"  className="flex" height={190} width={190}  />
                        </a>
                    </div>
                    <nav className="hidden lg:flex space-x-8">
                        <a href="/aboutUs" className="text-gray-800 hover:text-black transition duration-300">A propos</a>
                        <a href="/ourServices" className="text-gray-800 hover:text-black transition duration-300">Services</a>
                        <a href="/blog" className="text-gray-800 hover:text-black transition duration-300">Blog</a>
                        <a href="/partner" className="text-gray-800 hover:text-black transition duration-300">Devenir partenaire</a>
                    </nav>
                    <div className="flex items-center space-x-4">
                       <div className='hidden md:flex'>
                        <LanguageSwitcher/>
                       </div>
                        <a href="#" className='rounded-xl bg-[#126e51] text-white px-4 py-2 text-sm'>Connexion</a>
                        <a href="#" className="hidden md:inline-flex bg-gray-500 text-white px-4 py-2 rounded-xl text-sm">Inscription</a>
                        {isMenuOpen ? (
                          <IoClose onClick={toggleMenu} className={`h-7 w-7 text-[#126e51] lg:hidden cursor-pointer transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}` }/>
                        ) : (
                            <IoMenu onClick={toggleMenu} className={`h-7 w-7 text-[#126e51] lg:hidden cursor-pointer transition-transform duration-300  ${isMenuOpen ? 'rotate-0' : 'rotate-180'}` } />
                        )}
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:container md:px-10 my-2 py-5 rounded-[1.8rem] inset-0 bg-white font-semibold flex flex-col items-start px-4 justify-center lg:hidden">
                    <nav className="flex flex-col items-start space-y-4 text-gray-800 text-xl">
                        <a href="/aboutUs" >A propos</a>
                        <a href="/ourServices" >Services</a>
                        <a href="/blog" >Blog</a>
                        <a href="/partner" >Devenir Partenaire</a>
                    </nav>
                    <hr className='w-full border-b-1 border-gray-300 mt-4 md:hidden'/>
                    <div className="flex items-center space-x-4 my-4 md:hidden">
                        <a href="#" className='rounded-xl bg-[#126e51] text-white px-4 py-2 text-sm'>Connexion</a>
                        <a  href="#" className="inline-flex text-white px-4 py-2 rounded-xl text-sm bg-gray-500">Inscription</a>
                    </div>
                    <div className='flex mt-3 md:hidden'>
                       <LanguageSwitcher/>
                    </div>
                </div>
            )}
        </header>
    );
};
