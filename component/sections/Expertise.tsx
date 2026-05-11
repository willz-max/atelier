"use client"

import SectionHeader from "../SectionHeader";
import ServiceCard from "../ServiceCard";
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Home, 
  Building2, 
  Sparkles, 
  Palette, 
  Scale, 
  RefreshCw,
  ChevronUp 
} from 'lucide-react';

const services = [
    {
      title: "Residential Design",
      icon: Home,
      description: "Creating personalized living environments that reflect your lifestyle, taste, and the way you truly live in your home."
    },
    {
      title: "Commercial Design",
      icon: Building2,
      description: "Designing productive, inspiring workspaces that strengthen your brand identity and enhance employee wellbeing."
    },
    {
      title: "Hospitality Design",
      icon: Sparkles,
      description: "Crafting memorable guest experiences through thoughtful spatial design for hotels, restaurants, and boutique venues."
    },
    {
      title: "Color & Material Consulting",
      icon: Palette,
      description: "Expert guidance on color palettes, finishes, and material selections that create cohesive, harmonious interiors."
    },
    {
      title: "Space Planning",
      icon: Scale,
      description: "Optimizing layouts for functionality and flow, ensuring every square foot serves a purpose while maintaining aesthetic balance."
    },
    {
      title: "Renovation Management",
      icon: RefreshCw,
      description: "Full-service renovation oversight from demolition to final styling, coordinating contractors and ensuring quality at every stage."
    }
  ];

export default function Expertise() {
    return(
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <SectionHeader title="Comprehensive Design Services" subTitle="Our Expertise" para="From concept to completion, we offer a full spectrum of interior design services tailored to elevate every space." />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <ServiceCard
                    key={service.title}
                    title={service.title}
                    icon={service.icon}
                    description={service.description}
                  />
                ))}
              </div>
            </div>
        </section>
    )
}