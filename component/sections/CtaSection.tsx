"use client"

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#030712] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden bg-[#10131a] dark:bg-[#080a0f] rounded-[2.5rem] md:rounded-[4rem] px-6 py-24 md:py-32 text-center shadow-2xl"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-zinc-800/10 dark:bg-zinc-700/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[100px] h-[200px] bg-zinc-800/10 dark:bg-zinc-700/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-serif font-medium text-white mb-8 leading-[1.1] tracking-tight">
              Ready to Transform <br className="hidden md:block" />
              Your Space?
            </h2>
            
            <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Schedule a complimentary consultation and let us bring your vision 
              to life. Every extraordinary space begins with a conversation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button className="w-full sm:w-auto px-6 py-4 bg-amber-700 hover:bg-amber-800 text-white rounded-full font-bold transition-all flex items-center justify-center gap-3 group shadow-[0_20px_50px_rgba(180,83,9,0.3)] hover:shadow-[0_20px_60px_rgba(180,83,9,0.5)] active:scale-95">
                Book Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-6 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold transition-all active:scale-95 backdrop-blur-sm">
                View Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}