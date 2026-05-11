"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X } from 'lucide-react';
import SectionHeader from "../SectionHeader";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

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

const faqs = [
  {
    question: "What is the typical timeline for a residential design project?",
    answer: "Most residential projects take between 3 to 6 months from initial consultation to final installation, depending on scope and complexity. A single-room refresh may take 6 to 8 weeks, while a full-home renovation typically requires 4 to 6 months. We provide a detailed timeline during the design proposal phase."
  },
  {
    question: "How does your pricing structure work?",
    answer: "We offer three service tiers to accommodate different needs and budgets. Our pricing is based on project scope rather than hourly rates, so you always know the investment upfront. We provide a detailed proposal after the initial consultation that outlines all costs, including design fees, procurement, and project management."
  },
  {
    question: "Do you work with clients remotely?",
    answer: "Yes, we offer virtual design services for clients outside the Miami area. Using 3D renderings, video consultations, and detailed specification documents, we can deliver the same high-quality design experience regardless of location. We also travel for select projects nationwide."
  },
  {
    question: "What design styles do you specialize in?",
    answer: "While we are known for our contemporary and transitional designs, our team is versatile and experienced in a wide range of styles including modern minimalist, mid-century modern, coastal contemporary, and classic traditional. We tailor our approach to each client's preferences and the architectural context of the space."
  },
  {
    question: "Can you work within my existing budget?",
    answer: "Absolutely. We pride ourselves on creating beautiful spaces at every price point. During the consultation, we discuss your budget openly and design a scope of work that maximizes impact within your investment. We also have relationships with suppliers at every tier, from luxury to accessible."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white dark:bg-[#030712] transition-colors duration-500" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader 
          subTitle="FAQ"
          title="Frequently Asked Questions"
          para="Common questions about our interior design services and process."
        />

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
  );
}

