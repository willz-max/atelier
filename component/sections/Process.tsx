"use client";
import { motion } from "motion/react";
import SectionHeader from "../SectionHeader";

const steps = [
  {
    number: "01",
    title: "Consult",
    description:
      "We begin with an in-depth conversation to understand your vision, lifestyle, and goals. This discovery phase shapes every decision that follows.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our team develops detailed concept boards, floor plans, 3D renderings, and material palettes that bring your vision to life before any work begins.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "Through iterative reviews and collaborative feedback sessions, we fine-tune every element until the design perfectly captures your aesthetic.",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "We manage the entire implementation process, coordinating with artisans, contractors, and suppliers to deliver a flawless final result.",
  },
];

export default function process() {
  return (
    <section className="py-24 dark:bg-[#030712]  overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          title="Our Process"
          subTitle="How We Work"
          para="A collaborative four-step journey from initial vision to final reveal, ensuring every detail reflects your unique story."
        />
        <div className="relative max-w-5xl mx-auto">
            {/* Central Vertical Line (Desktop Only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform -translate-x-1/2" />

            <div className="space-y-16 md:space-y-0">
              {steps.map((step, index) => {
                const isEven = index % 2 !== 0;
                return (
                  <div
                    key={step.number}
                    className="relative md:h-[280px] flex items-center"
                  >
                    {/* Content Container */}
                    <div
                      className={`flex flex-col md:flex-row items-start md:items-center w-full gap-6 md:gap-0 ${isEven ? "md:flex-row-reverse" : ""}`}
                    >
                      {/* Main Content Area */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`w-full md:w-1/2 flex items-start gap-6 md:gap-0 ${
                          isEven
                            ? "md:pl-16 text-left"
                            : "md:pr-16 md:text-right md:flex-row-reverse"
                        }`}
                      >
                        {/* Mobile Number (shown next to text) */}
                        <div className="flex-shrink-0 md:hidden">
                          <div className="w-16 h-16 rounded-full bg-amber-700/90 flex items-center justify-center text-white font-bold text-xl shadow-lg border border-amber-500/20">
                            {step.number}
                          </div>
                        </div>

                        <div className="flex-grow">
                          <h3 className="text-3xl md:text-5xl font-serif font-medium mb-4">
                            {step.title}
                          </h3>
                          <p className="text-zinc-400 text-lg leading-relaxed max-w-md ml-auto mr-auto md:ml-0 md:mr-0">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>

                      {/* Number Circle (Desktop Center) */}
                      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          className="w-16 h-16 rounded-full bg-amber-700/90 flex items-center justify-center text-white font-bold text-xl shadow-2xl border border-amber-500/20"
                        >
                          {step.number}
                        </motion.div>
                      </div>

                      {/* Clear Side */}
                      <div className="hidden md:block w-1/2" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    </section>
  );
}
