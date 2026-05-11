"use client";
import HeroPageTitle from "@/component/HeroPageTitle";
import { motion, AnimatePresence  } from 'motion/react';
import { Check, Plus, X  } from 'lucide-react';
import Image from "next/image";
import { useState } from "react";
import SectionHeader from "@/component/SectionHeader";


interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}



const faqs = [
  {
    question: "What is included in the design fee?",
    answer: "Our design fees cover all creative services including consultations, concept development, 3D renderings, material selection, procurement coordination, and project management. Product costs (furniture, materials, fixtures) are billed separately at net pricing plus a standard procurement fee."
  },
  {
    question: "Do you require a deposit?",
    answer: "Yes, we require a 50% deposit to begin work, with the remaining balance due at project milestones. For larger projects, we offer a phased payment schedule aligned with project deliverables."
  },
  {
    question: "Can packages be customized?",
    answer: "Absolutely. These packages serve as starting points. After our initial consultation, we will create a tailored proposal that matches your specific needs, timeline, and budget."
  }
];


const plans = [
  {
    name: 'Refresh',
    price: '$5,000',
    description: 'Perfect for single rooms or focused design updates that need a fresh perspective.',
    features: [
      '1-2 room design',
      'Initial consultation and concept',
      'Mood board and color palette',
      'Furniture and decor recommendations',
      'Shopping list with sourced links',
      'Two revision rounds'
    ],
    buttonText: 'Get Started',
    popular: false
  },
  {
    name: 'Redesign',
    price: '$15,000',
    description: 'Comprehensive design for multiple rooms or an entire floor, with full project management.',
    features: [
      '3-5 room design',
      'In-depth discovery session',
      '3D renderings and floor plans',
      'Custom furniture specification',
      'Material and finish selection',
      'Vendor coordination',
      'Project management included',
      'Three revision rounds'
    ],
    buttonText: 'Book Consultation',
    popular: true
  },
  {
    name: 'Full Transformation',
    price: '$40,000+',
    description: 'Complete home or commercial space redesign with white-glove project management.',
    features: [
      'Whole-home or full-space design',
      'Architectural consultation',
      'Custom millwork and cabinetry design',
      'Lighting design and specification',
      'Art curation and procurement',
      'Renovation oversight',
      'Contractor coordination',
      'Unlimited revisions',
      'Final styling and installation'
    ],
    buttonText: 'Schedule Consultation',
    popular: false
  }
];

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div 
      className={`border rounded-[2rem] overflow-hidden transition-all duration-500 ${
        isOpen 
          ? 'bg-white dark:bg-[#111827]   transition-colors  border-zinc-200 dark:border-zinc-700 shadow-xl shadow-zinc-200/50 dark:shadow-none' 
          : 'bg-white/50 dark:bg-[#111827] border-zinc-100 dark:border-zinc-800/50 hover:border-zinc-200 dark:hover:border-zinc-700'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full py-7 px-8 flex items-center justify-between text-left group"
      >
        <span className={` md:text-lg font-medium transition-colors duration-300 ${
          isOpen ? 'text-amber-700 dark:text-amber-500' : 'text-zinc-900 dark:text-white'
        }`}>
          {question}
        </span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white' 
            : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800'
        }`}>
          {isOpen ? <X size={18} /> : <Plus size={18} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-8 pb-10 pt-2 border-t border-zinc-50 dark:border-zinc-800/50">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default function Pricing() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      <HeroPageTitle
        title="Pricing"
        description="Transparent pricing for our interior design services. Choose the tier that matches your project scope and vision."
        link="/pricing"
        page="Pricing"
      />
     <SectionHeader
              title="Design Packages for Every Vision"
              subTitle="Investment"
              para="Our pricing is structured to provide clarity and value at every level. Each package includes a defined scope of services with no hidden fees."
            />
          <section className="py-24 bg-white dark:bg-[#030712] transition-colors duration-500 overflow-hidden" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 ${
                plan.popular 
                  ? 'bg-zinc-50 dark:bg-[#0b1120] border-2 border-amber-600 shadow-2xl shadow-amber-900/10' 
                  : 'bg-zinc-50/50 dark:bg-[#0b1120]/50 border border-zinc-200 dark:border-zinc-800'
              }`}
            >
             

              <div className="mb-8">
                <span className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Starting at</span>
                <div className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 dark:text-white mt-2">
                  {plan.price}
                </div>
                <h3 className="text-2xl font-serif font-medium text-zinc-800 dark:text-zinc-200 mt-4">
                  {plan.name}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="h-[1px] w-full bg-zinc-200 dark:bg-zinc-800 mb-8" />

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                    <div className="shrink-0 text-amber-600 dark:text-amber-500 mt-1">
                      <Check size={16} />
                    </div>
                    <span className="text-sm font-light leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 border ${
                  plan.popular 
                    ? 'bg-amber-600 border-amber-600 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-amber-700 hover:border-amber-700 shadow-xl shadow-amber-900/20' 
                    : 'bg-transparent border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
    <h1 className="text-4xl font-bold text-center">Pricing Questions</h1>
    <section className="py-32 bg-white dark:bg-[#030712] transition-colors duration-500" id="faq">
          <div className="max-w-4xl mx-auto px-6">
            
    
            <div className="space-y-4 ">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </section>
      
  
     
    </div>
  );
}
