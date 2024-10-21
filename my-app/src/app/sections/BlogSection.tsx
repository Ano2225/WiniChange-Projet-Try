import React from 'react';
import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: 'Comment investir dans les cryptomonnaies en 2023',
    description: 'Découvrez les meilleures stratégies pour investir dans les cryptomonnaies cette année.',
    image: '/images/crypto_invest.jpeg',
    link: '#',
  },
  {
    id: 2,
    title: 'Les avantages de l\'utilisation des cryptomonnaies en Afrique',
    description: 'Explorez comment les cryptomonnaies peuvent améliorer l\'inclusion financière en Afrique.',
    image: '/images/avantages.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Sécurité des transactions en ligne : ce que vous devez savoir',
    description: 'Apprenez les meilleures pratiques pour sécuriser vos transactions en ligne.',
    image: '/images/securiite_bitcoin.webp',
    link: '#',
  },
];

const BlogSection = () => {
  return (
   <div className='bg-white'>
       <div className="container mx-auto py-12 px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-14">Nos derniers <span className='text-[#126e51]'>articles</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-black/80 mb-4">{article.description}</p>
              <a href={article.link} className="text-[#126e51] underline hover:text-green-900 transition">
                Lire la suite
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default BlogSection;