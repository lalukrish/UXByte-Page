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
  const whyusLocation = () => {
    if (typeof window !== "undefined") {
      const targetSection = document.getElementById("why_us");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const servicesLocation = () => {
    if (typeof window !== "undefined") {
      const targetSection = document.getElementById("services_id");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const aboutUsLocation = () => {
    if (typeof window !== "undefined") {
      const targetSection = document.getElementById("aboutUs_id");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const workLocation = () => {
    if (typeof window !== "undefined") {
      const targetSection = document.getElementById("works_id");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const workLetstalk = () => {
    if (typeof window !== "undefined") {
      const targetSection = document.getElementById("lets_talk");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div>
      <Navbar
        whyusLocation={whyusLocation}
        servicesLocation={servicesLocation}
        aboutUsLocation={aboutUsLocation}
        workLocation={workLocation}
        workLetstalk={workLetstalk}
      />
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
