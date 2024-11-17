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
            <div className="mt-2">
                <ul className="flex justify-center gap-2">{dots}</ul>
            </div>
        ),
        customPaging: (i: any) => (
            <div className="w-2.5 h-2.5 rounded-full transition-colors duration-300 bg-[#126e51]"></div>
        ),
    };

    return (
        <div className="my-4 grid grid-cols-1 md:hidden gap-6 items-center justify-center">
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className="relative p-5 md:p-6 rounded-2xl shadow-lg my-12 bg-[#126e51]"
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-16 overflow-hidden rounded-full absolute -top-8 border-4 border-white shadow-md">
                                <Image
                                    src={testimonial.image}
                                    alt={`Client ${testimonial.name}`}
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="mb-4 mt-2">
                            <p className="text-sm font-medium leading-relaxed text-white/90">
                                {testimonial.testimonial}
                            </p>
                        </div>

                        <div className="flex items-center text-sm border-t border-white/10 pt-3">
                            <p className="font-bold text-white">
                                {testimonial.name}
                            </p>
                            <span className="mx-2 text-white/50">•</span>
                            <p className="text-white/70">
                                {testimonial.location}
                            </p>
                        </div>

                        {/* Icône de citation décorative */}
                        <div className="absolute top-4 right-4 text-white/10">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M14,17h3l2-4V7h-6v6h3L14,17z M6,17h3l2-4V7H5v6h3L6,17z" />
                            </svg>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default MobileTestimonialsComponent;