'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaTag } from 'react-icons/fa';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import useInfiniteScroll from 'react-infinite-scroll-hook';

interface Post {
  _id: string;
  title: string;
  description: string;
  mainImage: any;
  slug: { current: string };
  readTime: string;
  category: { title: string };
  publishedAt: string;
}

interface BlogSectionProps {
  posts: Post[];
}

const PostLoader = () => (
  <div className='container mt-28 mb-10'>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
        <div className="h-56 bg-gray-200" />
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="h-4 w-24 bg-gray-200 rounded mr-4" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>
          <div className="h-6 bg-gray-200 rounded mb-3" />
          <div className="h-4 bg-gray-200 rounded mb-2" />
          <div className="h-4 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-32 bg-gray-200 rounded" />
        </div>
      </div>
    ))}
  </div>
  </div>
);

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(true);
  const postsPerPage = 3;

  useEffect(() => {
    const loadInitialPosts = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      setDisplayedPosts(posts.slice(0, postsPerPage));
      setHasNextPage(posts.length > postsPerPage);
      setIsLoading(false);
    };
    loadInitialPosts();
  }, [posts]);

  const loadMore = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    const nextPosts = posts.slice(displayedPosts.length, displayedPosts.length + postsPerPage);
    setDisplayedPosts(prev => [...prev, ...nextPosts]);
    setHasNextPage(displayedPosts.length + nextPosts.length < posts.length);
  };

  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: false,
    rootMargin: '0px 0px 400px 0px',
  });

  if (isLoading) return <PostLoader />;

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
            >
              <Link href={`/blog/${post.slug.current}`} className="block">
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

                  <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-[#126e51] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  <div className="inline-flex items-center text-[#126e51] font-semibold group hover:text-[#126e51]/80 transition-colors">
                    Lire la suite
                    <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {hasNextPage && (
          <div ref={sentryRef} className="flex justify-center mt-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-4 border-[#126e51] border-t-transparent rounded-full"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;