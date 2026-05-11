"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

export default function CompanyStats({ title, stat }: { title: string; stat: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(stat);
    }
  }, [isInView, stat, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex items-center gap-1">
        <span className="text-4xl md:text-5xl font-bold" ref={ref}>
          0
        </span>
        <span className="text-4xl md:text-5xl font-bold"></span>
      </div>
      <p className=" text-sm md:text-base mt-2">{title}</p>
    </div>
  );
}