'use client'

import React from 'react'
import Image from "next/image"
import BlogSection from '@/app/sections/BlogSection'
import { Header } from "@/app/sections/Header"
import Footer from "@/app/sections/Footer"


const Partner = () => {
  return (
    <>
      <Header />
      <BlogSection/>
      <Footer color="bg-white"/>
    </>
  )
}

export default Partner;
