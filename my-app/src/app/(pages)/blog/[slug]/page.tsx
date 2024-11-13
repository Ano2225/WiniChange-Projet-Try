'use client'

import { client } from '@/sanity/lib/client';
import { Header } from '@/app/sections/Header';
import Footer from '@/app/sections/Footer';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { FaClock, FaTag } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CommentSection from '@/app/components/CommentSection'

async function getPost(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      description,
      mainImage,
      "category": category->{
        title
      },
      readTime,
      publishedAt
    }
  `, { slug });
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);
  
    if (!post) {
      return <div className='text-red-500'>Article non trouvé</div>;
    }
  
    return (
      <>
        <Header />
        <article className="pt-32 lg:pt-36 pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.header 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
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
                <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
                <div className="h-1 w-24 bg-[#126e51] rounded-full"/>
              </motion.header>
  
              {post.mainImage && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative h-[400px] mb-8 rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )}
  
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="prose max-w-none prose-lg"
              >
                <p className="text-xl text-gray-600 leading-relaxed">
                  {post.description}
                </p>
              </motion.div>
            </div>
          </div>
        </article>
        <div className='container'>
            <CommentSection postId={''} initialComments={[]} />
        </div>
        <Footer color="bg-white" />
      </>
    );
  }