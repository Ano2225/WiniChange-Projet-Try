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
        autoplaySpeed:3000,
        slidesToScroll: 1,
        appendDots: (dots: any) => (
            <div>
              <ul style={{ margin: '0px' }}> {dots} </ul>
            </div>
          ),
          customPaging: (i:any) => (
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'white',
              }}
            ></div>
          ),
         
      };
  return (
    <>
        <div className="mt-20 grid grid-cols-1 md:hidden gap-6 items-center justify-center">
       <Slider {...settings} >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`relative p-5 md:p-6 rounded-3xl shadow-lg border-2 bg-gray-200 my-12`}

            style={{
              borderColor: 'black',
            }}
          >
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 overflow-hidden rounded-full absolute top-[-2rem]">
                <Image
                  src={testimonial.image}
                  alt={`Client ${testimonial.name}`}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mb-4">
              <h6
                className="text-sm font-medium"
                style={{ color: "black" }}
              >
                {testimonial.testimonial}
              </h6>
            </div>
            <div className="text-[12px] flex">
              <p className="font-bold" style={{ color: '#126e51' }}>
                {testimonial.name}
              </p>
              <span className="mx-1 text-black">•</span>
              <p className="font-bold" style={{ color: 'black' }}>
                {testimonial.location}
              </p>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </>
  )
}

export default MobileTestimonialsComponent
