"use client";
import Image from "next/image";


import Hero from "@/component/sections/Hero";
import StatSection from "@/component/sections/StatSection";
import Expertise from "@/component/sections/Expertise";
import FeaturedWork from "@/component/sections/FeaturedWork";
import Process from "@/component/sections/Process";
import Testimonial from "@/component/sections/Testimonial";
import Awards from "@/component/sections/Awards";
import FAQSection from "@/component/sections/FAQSection";
import ContactSection from "@/component/sections/ContactSection";
import CtaSection from "@/component/sections/CtaSection";

export default function Home() {
  return (
    <div>
      
      <Hero />
      <StatSection />
      <Expertise />
      <FeaturedWork />
      <Process />
      <Testimonial/>
      <Awards />
      <FAQSection />
      <ContactSection />
      <CtaSection />
    </div>
      );
}
