"use client";
import Head from "next/head";

import Hero from "@/components/hero";
import About from "@/components/About";
import LetsTalk from "@/components/LetsTalk";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Works from "@/components/works";
import { useEffect } from "react";
import { Html } from "next/document";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div suppressHydrationWarning={false}>
      <Navbar />
      {/* <Hero /> */}
      <About />
      <WhyUs />
      <Works />
      <Services />
      <LetsTalk />
      <Footer />
    </div>
  );
}
