import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/constants/testimonials';
import MobileTestimonialsComponent from '../components/MobileTestimonialsComponent';

const Testimonials = () => {
  return (
    <div className='w-full'>
        <div className="container mx-auto py-16">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Nos clients <span className='text-[#126e51]'>satisfaits</span>
                </h2>
                <div className="mt-4 flex justify-center gap-2">
                    <div className="h-1 w-16 bg-[#126e51] rounded-full"></div>
                    <div className="h-1 w-4 bg-[#126e51]/60 rounded-full"></div>
                </div>
            </div>
            <div className="mt-20 hidden md:grid md:grid-cols-2 gap-8 px-4">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`relative p-6 rounded-2xl shadow-lg transition-all duration-300 
                                  hover:shadow-xl bg-[#126e51] ${
                                    index % 2 === 0 ? 'md:mt-10' : 'md:mb-16'
                                  }`}
                    >
                        <div className="absolute -top-8 left-6">
                            <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-md">
                                <Image
                                    src={testimonial.image}
                                    alt={`Client ${testimonial.name}`}
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                    data-critical="true" 
                                />
                            </div>
                        </div>
                        <div className="absolute top-4 right-4 text-white/10">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14,17h3l2-4V7h-6v6h3L14,17z M6,17h3l2-4V7H5v6h3L6,17z" />
                            </svg>
                        </div>
                        <div className="mt-4 space-y-4">
                            <p className="text-base leading-relaxed text-white/90">
                                {testimonial.testimonial}
                            </p>
                            
                            <div className="pt-4 border-t border-white/10">
                                <div className="flex items-center text-sm">
                                    <p className="font-bold text-white">
                                        {testimonial.name}
                                    </p>
                                    <span className="mx-2 text-white/50">•</span>
                                    <p className="text-white/70">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 rounded-2xl pointer-events-none"></div>
                    </div>
                ))}
            </div>
            <MobileTestimonialsComponent/>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#126e51]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#126e51]/5 rounded-full blur-3xl"></div>
        </div>
    </div>
  );
};

export default Testimonials;