import { motion } from 'motion/react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
}

export default function ProjectCard({ title, category, image }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group cursor-pointer"
    >
      {/* Background Image with Zoom Effect */}
      <motion.img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        referrerPolicy="no-referrer"
      />

      {/* Hover Overlay - Gradient from bottom */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
        >
          <span className="text-amber-500 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-2 block">
            {category}
          </span>
          <h4 className="text-2xl md:text-3xl font-serif text-white font-medium leading-tight">
            {title}
          </h4>
        </motion.div>
      </div>

      {/* Top right indicator (optional, adds polish) */}
      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l10-10M7 7h10v10"/></svg>
      </div>
    </motion.div>
  );
}