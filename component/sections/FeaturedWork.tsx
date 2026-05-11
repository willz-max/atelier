"use client"
import SectionHeader from "../SectionHeader";
import ProjectCard from "../ProjectCard";
import image from "next/image";
import { useState } from "react";
const projects = [
    { title: "Serene Sanctuary", category: "Residential", image: "/house-1.jpg" },
    { title: "Luminary Restaurant", category: "Hospitality", image: "/house-2.jpg" },
    { title: "Elysian Boutique", category: "Retail", image: "/house-3.jpg" },
    { title: "Azure Waterfront", category: "Residential", image: "/house-4.jpg" },
    { title: "The Palm Resort", category: "Hospitality", image: "/house-5.jpg" },
    { title: "Innova Hub", category: "Commercial", image: "/house-6.jpg" },
    { title: "Brickell Heights Loft", category: "Hospitalityl", image: "/house-7.jpg" },
    { title: "Wynwood Gallery", category: "Commercial", image: "/house-8.jpg" },
    { title: "The Setai Penthouse", category: "Residential", image: "/house-9.jpg" },
  ];


export default function FeaturedWork() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-24 bg-zinc-50 dark:bg-[#111827] transition-colors duration-300" id="featured-work">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Featured Projects" subTitle="Our Work" para="A curated selection of our most transformative design projects across residential and commercial spaces." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              image={project.image}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            className="mx-auto sm:flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-amber-900/10 active:scale-95"
            id="nav-cta"
          >
            View all Projects
          </button>
        </div>
      </div>
    </section>
  );
}