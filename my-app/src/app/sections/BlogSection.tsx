'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaTag } from 'react-icons/fa';

const articles = [
  {
    id: 1,
    title: 'Comment investir dans les cryptomonnaies en 2023',
    description: 'Découvrez les meilleures stratégies pour investir dans les cryptomonnaies cette année.',
    image: '/images/crypto_invest.jpeg',
    link: '#',
    readTime: '5 min',
    category: 'Investissement'
  },
  {
    id: 2,
    title: 'Les avantages de l\'utilisation des cryptomonnaies en Afrique',
    description: 'Explorez comment les cryptomonnaies peuvent améliorer l\'inclusion financière en Afrique.',
    image: '/images/avantages.jpg',
    link: '#',
    readTime: '8 min',
    category: 'Afrique'
  },
  {
    id: 3,
    title: 'Sécurité des transactions en ligne : ce que vous devez savoir',
    description: 'Apprenez les meilleures pratiques pour sécuriser vos transactions en ligne.',
    image: '/images/securiite_bitcoin.webp',
    link: '#',
    readTime: '6 min',
    category: 'Sécurité'
  },
];

const BlogSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 pt-32 lg:pt-36">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Nos derniers <span className='text-[#126e51]'>articles</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-24 bg-[#126e51] mx-auto rounded-full"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#126e51] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center ml-4">
                    <FaTag className="mr-2" />
                    <span>{article.category}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-[#126e51] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.description}
                </p>

                <a 
                  href={article.link}
                  className="inline-flex items-center text-[#126e51] font-semibold group hover:text-[#126e51]/80 transition-colors"
                >
                  Lire la suite
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a 
            href="#"
            className="inline-flex items-center px-6 py-3 bg-[#126e51] text-white rounded-full font-semibold hover:bg-[#126e51]/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            Voir tous les articles
            <FaArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;