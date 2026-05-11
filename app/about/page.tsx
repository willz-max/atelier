import HeroPageTitle from '@/component/HeroPageTitle';
import AboutContent from '@/component/sections/AboutContent';
import { motion } from 'motion/react';
import { Sparkles, Layout, Leaf } from 'lucide-react';
import Image from 'next/image';
import BrownBtn from '@/component/BrownBtn';
import LastCta from '@/component/LastCta';



const principles = [
  {
    icon: Sparkles,
    title: 'Timeless Over Trendy',
    description: 'We design spaces that endure. While we appreciate contemporary movements, we prioritize materials, forms, and palettes that will feel as relevant in twenty years as they do today.'
  },
  {
    icon: Layout,
    title: 'Function Meets Beauty',
    description: 'Every design element must serve a purpose. We never sacrifice usability for aesthetics, believing the most beautiful spaces are those that work effortlessly for the people who use them.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Practice',
    description: 'We prioritize eco-conscious materials, local artisans, and responsible sourcing. Good design should be good for the planet, and we integrate sustainability into every project we take on.'
  }
]



export default function About() {
    return (
        <div >

           <HeroPageTitle title="About Atelier Studio" description="Discover the story, philosophy, and team behind Miami's premier interior design studio." link="/about" page="About" />
           <AboutContent />
              <section className="py-32 bg-white dark:bg-[#111827] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p, idx) => (
            <div
              key={p.title}
             
           
            
             
              className="group p-5 rounded-[1.5rem] bg-zinc-50 dark:bg-[#0b1120] border border-zinc-100 dark:border-zinc-800/50 hover:border-amber-500/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-amber-600 dark:text-amber-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                <p.icon size={22} />
              </div>
              <h3 className="text-2xl font-serif font-medium text-zinc-900 dark:text-white mb-4">
                {p.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section>
        <div className="max-w-7xl mx-auto px-6 my-15">
            <h2 className="text-4xl font-bold text-center mb-5">Meet Our Designers</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-center text-lg max-w-2xl mx-auto">
                A talented team of creative professionals passionate about transforming spaces into extraordinary experiences.
            </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
                    <div className="flex gap-3 flex-col items-center text-center">
                        <Image src="/team-1.jpg" alt="Designer 1" className="w-30 h-30 object-cover rounded-full shadow-lg" width={300} height={300} />
                        <h3 className="text-xl font-semibold mt-4">Elena Vasquez</h3>
                        <p className="text-amber-600 dark:text-amber-500 text-sm">Principal Designer & Founder</p>
                        <p className="text-zinc-500 dark:text-zinc-400">
                            With over 18 years of experience, Elena's vision and leadership have shaped Atelier into one of Miami's most respected design firms.
                        </p>
                    </div>
                    <div className="flex gap-3 flex-col items-center text-center">
                        <Image src="/team-2.jpg" alt="Designer 2" className="w-30 h-30 object-cover rounded-full shadow-lg" width={300} height={300} />
                        <h3 className="text-xl font-semibold mt-4">James Whitfield</h3>
                        <p className="text-amber-600 dark:text-amber-500 text-sm">Senior Interior Architect</p>
                        <p className="text-zinc-500 dark:text-zinc-400">
                            James brings architectural precision to every project, specializing in spatial planning and custom millwork design.
                        </p>
                    </div>
                    <div className="flex gap-3 flex-col items-center text-center">
                        <Image src="/team-3.jpg" alt="Designer 3" className="w-30 h-30 object-cover rounded-full shadow-lg" width={300} height={300} />
                        <h3 className="text-xl font-semibold mt-4">Sophia Chen</h3>
                        <p className="text-amber-600 dark:text-amber-500 text-sm">Commercial Design Lead</p>
                        <p className="text-zinc-500 dark:text-zinc-400">
                           Sophia's expertise in workplace and hospitality design has earned her recognition from the IIDA and HD Awards.
                        </p>
                    </div>
                    <div className="flex gap-3 flex-col items-center text-center">
                        <Image src="/team-4.jpg" alt="Designer 4" className="w-30 h-30 object-cover rounded-full shadow-lg" width={300} height={300} />
                        <h3 className="text-xl font-semibold mt-4">Rafael Moreno</h3>
                        <p className="text-amber-600 dark:text-amber-500 text-sm">Project Manager</p>
                        <p className="text-zinc-500 dark:text-zinc-400">
                            Rafael ensures every project is delivered on time and within budget, coordinating teams of artisans and contractors with precision.
                        </p>
                    </div>
                </div>
        </div>
    </section>
    <LastCta 
    title="Let Us Design Your Dream Space"
    description="Schedule a complimentary consultation and discover how Atelier Studio can transform your environment."
    buttonText="Book a Consultation"
    />
       
        </div>
    )
}