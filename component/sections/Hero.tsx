"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Stat from "../Stat";
import BrownBtn from "../BrownBtn";

export default function Hero() {
  return (
    /* Changed to min-h-screen and removed relative if not needed, 
       but keeping relative to allow the background image to 'fill' */
    <div className="min-h-screen w-full relative flex flex-col">
      
      {/* Background Image - Stay absolute */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/hero-bg.jpg" 
          alt="bg" 
          fill 
          className="object-cover" 
          priority 
        />
        {/* Overlay moved here to keep it behind the text but over the image */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 
          Main Content Wrapper: 
          - Removed 'absolute' and 'h-full'. 
          - Used 'flex-1' to ensure it takes up at least the screen height.
          - Added 'py-20' so content doesn't hit the very top/bottom on mobile.
      */}
      <div className="flex-1 w-full max-w-9xl mx-auto px-6 md:px-12 flex flex-col justify-center py-20 z-10">
        
        <div className="w-full lg:w-3/5">
          <h1 className="text-4xl sm:text-7xl text-white font-bold leading-tight">
            Transforming Spaces <br className="hidden sm:block" /> 
            Into Extraordinary <br className="hidden sm:block" /> 
            Experiences
          </h1>
          
          <p className="text-gray-100 text-lg sm:text-xl mt-6 md:mt-10 sm:w-4/5">
            Award-winning interior design studio crafting timeless, sophisticated environments for discerning clients across residential, commercial, and hospitality sectors.
          </p>

          {/* Categories Row: flex-nowrap + overflow-x-auto prevents the "squish" */}
          <div className="mt-10 flex gap-4 flex-wrap  pb-2">
             <div className="rounded-full flex-shrink-0 py-2 px-6 flex items-center bg-white border border-white" >
                <p className="text-black font-medium whitespace-nowrap">
                  Residential <span className="opacity-60 ml-1">(18)</span>
                </p>
             </div>
            <Stat title="Commercial" stat={12} />
            <Stat title="Hospitality" stat={9} />
            <Stat title="Retail" stat={8} />
          </div>

          {/* CTA Row */}
          <div className="mt-10 flex flex-wrap gap-4">
            <BrownBtn title="View Portfolio" />
            <div className="rounded-full px-8 py-3 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all cursor-pointer" >
               <p className="text-white font-medium whitespace-nowrap">Book Consultation</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}