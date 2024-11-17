'use client'

import { testimonials } from '@/constants/testimonials'
import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobileTestimonialsComponent = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: false,
        appendDots: (dots: any) => (
            <div className="mt-6">
              <ul className="flex justify-center gap-2"> {dots} </ul>
            </div>
        ),
        customPaging: (i:any) => (
            <div
              className="w-2.5 h-2.5 rounded-full bg-[#126e51] opacity-40 hover:opacity-60 transition-opacity duration-300 cursor-pointer"
            />
        ),
    };

    return (
        <div className="my-8 md:hidden px-4">
            <Slider {...settings}>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="px-2 pb-2">
                        <div className="relative p-6 rounded-2xl bg-[#126e51] shadow-xl">
                            {/* Quote icon */}
                            <div className="absolute top-4 right-4 text-white/20">
                                <svg 
                                    width="32" 
                                    height="32" 
                                    viewBox="0 0 24 24" 
                                    fill="currentColor"
                                >
                                    <path d="M9.5,3C5.36,3 2,6.36 2,10.5C2,14.64 5.36,18 9.5,18C11,18 12.39,17.45 13.5,16.5C14.61,17.45 16,18 17.5,18C21.64,18 25,14.64 25,10.5C25,6.36 21.64,3 17.5,3" />
                                </svg>
                            </div>

                            {/* Avatar container with border */}
                            <div className="absolute -top-6 left-6">
                                <div className="w-16 h-16 rounded-full p-1 bg-white shadow-lg">
                                    <div className="relative w-full h-full rounded-full overflow-hidden">
                                        <Image
                                            src={testimonial.image}
                                            alt={`Photo de ${testimonial.name}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="mt-8">
                                <p className="text-white/90 text-sm leading-relaxed mb-4">
                                    {testimonial.testimonial}
                                </p>
                                
                                <div className="flex items-center gap-2 border-t border-white/10 pt-4">
                                    <div>
                                        <h4 className="font-semibold text-white">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-xs text-white/70">
                                            {testimonial.location}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/5 to-transparent rounded-b-2xl"></div>
                        </div>
                    </div>
                ))}
            </Slider>

            <style jsx global>{`
                .slick-dots li button:before {
                    display: none;
                }
                .slick-dots li.slick-active div {
                    opacity: 1;
                    transform: scale(1.2);
                }
            `}</style>
        </div>
    )
}

export default MobileTestimonialsComponent