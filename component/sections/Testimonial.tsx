"use client"
import SectionHeader from "../SectionHeader";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Jonathan Wright",
    role: "GM, The Azure Hotel",
    quote: "From concept to completion, the Atelier team was incredibly professional and creative. They reimagined our hotel lobby and the guest feedback has been overwhelmingly positive ever since.",
    rating: 5
  },
  {
    id: 2,
    name: "Victoria Harrington",
    role: "Coral Gables Homeowner",
    quote: "Atelier Studio transformed our dated condo into a breathtaking modern sanctuary. Every detail was considered, from the custom millwork to the curated art collection. They truly understood our vision.",
    rating: 5
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "CEO, TechWave Solutions",
    quote: "Working with Atelier on our new office was a revelation. The space perfectly balances professionalism with creativity, and our team morale has never been higher. They delivered on time and within budget.",
    rating: 5
  },
  {
    id: 4,
    name: "Isabella Martinez",
    role: "Miami Beach Homeowner",
    quote: "The attention to detail is what sets Atelier apart. They sourced materials from around the world to create a truly one-of-a-kind living space. Our home feels like a luxury resort now.",
    rating: 5
  }
];

export default function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const prev = () => {
      setDirection(-1);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const next = () => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    useEffect(() => {
      const timer = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(timer);
    }, []);

    const extendedTestimonials = [
      ...testimonials,
      ...testimonials.slice(0, 3),
    ];

    const slideVariants = {
      enter: (direction:number) => ({ x: direction > 0 ? 200 : -200, opacity: 0 }),
      center: { x: 0, opacity: 1 },
      exit: (direction:number) => ({ x: direction > 0 ? -200 : 200, opacity: 0 }),
    };

    return (
      <section className="py-24 bg-zinc-50 dark:bg-[#111827] overflow-hidden" id="testimonials">
        <SectionHeader title="What Our Clients Say" subTitle="Client Stories" para="Hear from homeowners and businesses who have experienced the Atelier Studio difference." />
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-14">

          {/* Mobile View (Single Card Slider) */}
          <div className="md:hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 200, damping: 24, duration: 0.35 }}
                className="bg-white p-6 rounded-[2rem] border border-zinc-200 shadow-2xl dark:bg-[#0b1120] dark:border-zinc-800"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-zinc-900 text-lg leading-7 mb-8 font-light italic dark:text-white">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-zinc-900 font-semibold text-base dark:text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-zinc-500 text-sm italic dark:text-zinc-500">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop View (Sliding Track) */}
          <div className="hidden md:block overflow-hidden">
            <motion.div
              className="flex gap-6 will-change-transform"
              animate={{ x: `-${currentIndex * 33.3333}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 28 }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-[0_0_33.3333%] min-w-[33.3333%] bg-white p-6 rounded-[2rem] border border-zinc-200/50 hover:border-zinc-300 transition-colors flex flex-col min-h-[320px] dark:bg-[#0b1120] dark:border-zinc-800/50 dark:hover:border-zinc-700"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-zinc-600 text-lg leading-7 mb-8 font-light flex-grow dark:text-zinc-200">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50">
                    <h4 className="text-zinc-900 font-semibold text-lg dark:text-white">{testimonial.name}</h4>
                    <p className="text-zinc-500 text-sm dark:text-zinc-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-16 flex items-center justify-center gap-10">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-900 transition-all active:scale-95 dark:border-zinc-800 dark:text-zinc-500 dark:hover:bg-zinc-800"
              id="testimonial-prev"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`transition-all duration-500 rounded-full h-2.5 ${
                    currentIndex === i
                      ? 'w-10 bg-amber-500'
                      : 'w-2.5 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-700'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-900 transition-all active:scale-95 dark:border-zinc-800 dark:text-zinc-500 dark:hover:bg-zinc-800"
              id="testimonial-next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    );
}