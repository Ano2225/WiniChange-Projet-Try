'use client'

import { client } from '@/sanity/lib/client';
import { Header } from '@/app/sections/Header';
import Footer from '@/app/sections/Footer';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { FaClock, FaTag } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CommentSection from '@/app/components/CommentSection';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Comment {
  _id: string;
  name: string;
  email: string;
  message: string;
  publishedAt: string;
}

interface Post {
  slug: any;
  _id: string;
  title: string;
  description: string;
  mainImage: any;
  category: {
    title: string;
  };
  readTime: string;
  publishedAt: string;
}

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

// Récupérer les articles récents
async function getRecentPosts(currentPostId: string) {
  return client.fetch(`
    *[_type == "post" && _id != $currentPostId] | order(publishedAt desc)[0...5] {
      _id,
      title,
      slug,
      mainImage,
      "category": category->{
        title
      },
      readTime,
      publishedAt
    }
  `, { currentPostId });
}

async function getComments(postId: string) {
  return client.fetch(`
    *[_type == "comment" && post._ref == $postId] | order(publishedAt desc) {
      _id,
      name,
      email,
      comment,
      publishedAt
    }
  `, { postId });
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    async function loadData() {
      try {
        const postData = await getPost(params.slug);
        setPost(postData);
        if (postData?._id) {
          const [commentsData, recentPostsData] = await Promise.all([
            getComments(postData._id),
            getRecentPosts(postData._id)
          ]);
          setComments(commentsData);
          setRecentPosts(recentPostsData);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, [params.slug]);

  useEffect(() => {
    if (!post?._id) return;

    const refreshComments = async () => {
      const freshComments = await getComments(post._id);
      setComments(freshComments);
    };

    const interval = setInterval(refreshComments, 30000);

    return () => clearInterval(interval);
  }, [post?._id]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#126e51]"></div>
      </div>
    );
  }

  if (!post) {
    return <div className='text-red-500'>Article non trouvé</div>;
  }

  return (

  <>
    <Header />
    <div className="pt-32 lg:pt-36 pb-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          <article className="lg:w-2/3">
            <motion.header 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center text-sm text-gray-600 mb-4 space-x-6">
                <div className="flex items-center bg-[#126e51]/10 px-4 py-1.5 rounded-full">
                  <FaClock className="mr-2 text-[#126e51]" />
                  <span className="text-[#126e51]">{post.readTime}</span>
                </div>
                <div className="flex items-center bg-[#126e51]/10 px-4 py-1.5 rounded-full">
                  <FaTag className="mr-2 text-[#126e51]" />
                  <span className="text-[#126e51]">{post.category.title}</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900">{post.title}</h1>
              <div className="h-1 w-24 bg-[#126e51] rounded-full"/>
            </motion.header>

            {post.mainImage && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[500px] mb-12 rounded-3xl overflow-hidden"
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
              <p className="text-xl text-gray-700 leading-relaxed">
                {post.description}
              </p>
            </motion.div>

            <div className="mt-16">
              <CommentSection 
                postId={post._id} 
                initialComments={comments}
              />
            </div>
          </article>

          {/* Sidebar avec articles récents */}
          <aside className="lg:w-1/3 lg:sticky lg:top-36 h-fit">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="border-l border-gray-200 pl-8"
            >
              <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center">
                <span className="w-8 h-1 bg-[#126e51] rounded-full mr-4"></span>
                Articles Récents
              </h2>
              <div className="space-y-8">
                {recentPosts.map((recentPost) => (
                  <Link 
                    href={`/blog/${recentPost.slug.current}`} 
                    key={recentPost._id}
                    className="block group"
                  >
                    <div className="flex gap-6">
                      <div className="relative w-32 h-24 rounded-2xl overflow-hidden">
                        <Image
                          src={urlFor(recentPost.mainImage).url()}
                          alt={recentPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/50 transition-all duration-300"/>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-[#126e51] transition-colors line-clamp-2 text-lg">
                          {recentPost.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mt-3 space-x-4">
                          <div className="flex items-center">
                            <FaClock className="mr-1.5 text-[#126e51]" />
                            <span>{recentPost.readTime}</span>
                          </div>
                          <div className="flex items-center">
                            <FaTag className="mr-1.5 text-[#126e51]" />
                            <span>{recentPost.category.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
    <Footer color="bg-[#f8f9fa]" />
  </>
);
}