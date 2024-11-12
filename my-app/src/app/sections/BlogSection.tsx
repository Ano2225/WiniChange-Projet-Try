'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaTag } from 'react-icons/fa';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

interface Post {
  _id: string;
  title: string;
  description: string;
  mainImage: any;
  slug: {
    current: string;
  };
  readTime: string;
  category: {
    title: string;
  };
  publishedAt: string;
}

interface BlogSectionProps {
  posts: Post[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
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
    <section className="py-20 pt-32 lg:pt-36">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold mb-4"
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
          {posts.map((post) => (
            <motion.article
              key={post._id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#126e51] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category.title}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center ml-4">
                    <FaTag className="mr-2" />
                    <span>{post.category.title}</span>
                  </div>
                </div>

                <Link href={`/blog/${post.slug.current}`}>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-[#126e51] transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>

                <Link 
                  href={`/blog/${post.slug.current}`}
                  className="inline-flex items-center text-[#126e51] font-semibold group hover:text-[#126e51]/80 transition-colors"
                >
                  Lire la suite
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default BlogSection;