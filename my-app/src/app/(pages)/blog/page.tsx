import React from 'react'
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"
import { getAllPosts} from '@/sanity/lib/queries'
import BlogSection from '@/app/sections/BlogSection'

export default async function Blog() {
  const [posts] = await Promise.all([
    getAllPosts(),
  ])

  return (
    <>
      <Header />
      <BlogSection posts={posts} />
      <Footer color="bg-white"/>
    </>
  )
}

