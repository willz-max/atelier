"use client"

import { motion } from 'motion/react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-amber-700 dark:text-amber-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-6 md:mb-8">
              Our Story
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-zinc-900 dark:text-white mb-6 md:mb-8 leading-tight tracking-tight">
              Crafting Spaces That <br className="hidden sm:block" />
              Tell Your Story
            </h2>

            <p className="text-lg md:text-xl italic text-amber-700 dark:text-amber-500 mb-8 md:mb-10 font-light leading-relaxed">
              "Design is not just about aesthetics — it is about creating environments that elevate the human experience."
            </p>

            <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed">
              <p>
                Founded in 2011, Atelier Studio began with a simple belief: that exceptional design has the 
                power to transform not just spaces, but the lives of the people who inhabit them. What started 
                as a small residential practice in Miami's Design District has grown into an award-winning 
                firm serving clients across the Southeast.
              </p>
              <p>
                Our approach blends timeless design principles with contemporary sensibilities. We believe in 
                the power of natural materials, considered proportions, and the subtle interplay of light and 
                texture. Every project we undertake is a collaborative journey with our clients.
              </p>
              <p>
                Today, our team of twelve designers, architects, and project managers brings diverse 
                perspectives and specialized expertise to every engagement.
              </p>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl relative z-10">
              <Image
                src="/about.jpg"
                alt="Modern Architectural Design"
                width={600}
                height={700}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Subtle decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-700/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-700/10 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
