"use client";
import HeroPageTitle from '@/component/HeroPageTitle';
import AboutContent from '@/component/sections/AboutContent';
import { motion } from 'motion/react';
import { Sparkles, Layout, Leaf } from 'lucide-react';
import Image from 'next/image';
import BrownBtn from '@/component/BrownBtn';
import LastCta from '@/component/LastCta';
import Process from '@/component/sections/Process';
import { 
  Home, 
  Building2, 
  RefreshCw, 
  Palette, 
  Scale, 
  Check, 
  ArrowRight 
} from 'lucide-react';


const services = [
  {
    id: 'residential',
    title: 'Residential Design',
    description: 'Complete interior design for homes, condos, and private residences. From single-room refreshes to full-home transformations, we create living environments that reflect your personality and lifestyle.',
    icon: Home,
    image: '/house-1.jpg',
    features: [
      'Custom furniture selection and procurement',
      'Color palette and material specification',
      'Lighting design and fixture selection',
      'Art curation and accessory styling',
      'Window treatment design'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Design',
    description: 'Strategic workplace design that enhances productivity, reflects brand identity, and creates inspiring environments for teams and clients alike.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Space planning and workflow optimization',
      'Brand integration and identity expression',
      'Ergonomic furniture specification',
      'Acoustic and lighting solutions',
      'Common area and breakout space design'
    ]
  },
  {
    id: 'renovation',
    title: 'Renovation Management',
    description: 'Full-service renovation oversight from demolition through final styling, coordinating contractors, suppliers, and artisans to deliver exceptional results.',
    icon: RefreshCw,
    image: '/house-2.jpg',
    features: [
      'Contractor coordination and management',
      'Budget tracking and cost control',
      'Timeline management and scheduling',
      'Quality assurance and site visits',
      'Final installation and styling'
    ]
  },
  {
    id: 'consulting',
    title: 'Color & Material Consulting',
    description: 'Expert guidance on color palettes, finishes, textiles, and material selections that create cohesive, harmonious interiors with lasting appeal.',
    icon: Palette,
    image: '/house-3.jpg',
    features: [
      'Comprehensive color analysis',
      'Material and finish boards',
      'Textile and upholstery selection',
      'Stone, tile, and flooring specification',
      'Paint color matching and coordination'
    ]
  },
  {
    id: 'space-planning',
    title: 'Space Planning',
    description: 'Optimizing layouts for functionality, circulation, and aesthetic balance. We ensure every square foot serves a purpose while maintaining visual harmony.',
    icon: Scale,
    image: '/house-4.jpg',
    features: [
      'Detailed floor plan development',
      'Traffic flow and circulation analysis',
      'Furniture layout optimization',
      'Storage and organization solutions',
      'Zoning for different activities'
    ]
  }
];



export default function Services() {
    return (
        <div >

           <HeroPageTitle title="Our Services"
            description="Comprehensive interior design services from concept development to final installation, tailored to your vision and budget."
             link="/services"
              page="Services" />
          
     
     <section className="py-32 bg-white dark:bg-[#030712] text-zinc-900 dark:text-white transition-colors duration-500 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-40">
          {services.map((service, idx) => (
            <div 
              key={service.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20 items-center py-8"
            >
              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`space-y-10 ${idx % 2 !== 0 ? 'md:order-2' : ''}`}
              >
                <div className="w-14 h-14 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-amber-600 dark:text-amber-500 shadow-sm dark:shadow-xl transition-colors">
                  <service.icon size={28} />
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 mt-4 mb-4">
                  {service.features.map((feature, fIdx) => (
                    <motion.li 
                      key={fIdx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + fIdx * 0.1 }}
                      className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300"
                    >
                      <div className="shrink-0 text-amber-600 dark:text-amber-500">
                        <Check size={18} />
                      </div>
                      <span className="text-sm md:text-base font-light">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ gap: '1.25rem' }}
                  className="group flex items-center gap-4 px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white rounded-full text-sm sm:mb-0 mb-20 transition-all shadow-lg shadow-amber-900/10 dark:shadow-none mt-6"
                >
                  Get Started
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </motion.button>
              </motion.div>

              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${idx % 2 !== 0 ? 'md:order-1' : ''} px-2 md:px-6`}
              >
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-zinc-100 dark:border-zinc-800">
                  <div className="absolute inset-0 bg-black/5 dark:bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Decorative Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 dark:from-zinc-950/60 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Process />
    <LastCta 
    title="Ready to Get Started?"
    description="Every great space begins with a conversation. Let us know about your project and we will create a tailored proposal."
    buttonText="Schedule Consultation"
    />
       
        </div>
    )
}