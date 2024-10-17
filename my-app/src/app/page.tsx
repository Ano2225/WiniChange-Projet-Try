import Image from "next/image";
import { Toaster } from 'react-hot-toast';
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { LogoTickerSection } from "./sections/LogoTickerSection";
import { Features } from "./sections/Features";
import HowItWorks from "./sections/HowItWork";
import Footer from "./sections/Footer";
import FloatingButtons from "./components/FloatingCompoAndGoUp";
import SolutionsProposees from "./sections/NosSolutionsProposees";
import Cookies  from "./components/cookies"
import TestimonialsSection from "./sections/Testimonialss";
import SupportSection from "./sections/SupportSection";
import BlogSection from "./sections/BlogSection";
import NosMoyensDePaiement from "./sections/NosMoyensDePaiement";
import NosCrypto from "./sections/NosCrypto";
import CallToAction from "./sections/CallToAction";

export default function Home() {
  return (
   <>
   <FloatingButtons/>
    <Header/>
    <Hero/>
    <LogoTickerSection/>
    <NosMoyensDePaiement/>
    <NosCrypto />
    <HowItWorks />
    <Features />
    <TestimonialsSection/>
    <CallToAction />
    <SupportSection/>
    {/*<Faq/>*/}
    <BlogSection/>
    <Footer />
    <Toaster position="bottom-center" />
    <Cookies/>
   </>
  );
}
