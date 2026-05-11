import { LucideIcon, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

export default function ServiceCard({ title, description, icon: Icon, href = "#" }: ServiceCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="p-10 rounded-3xl bg-white dark:bg-[#0b1120] border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm hover:shadow-xl dark:hover:shadow-amber-900/5 transition-all duration-300 group flex flex-col"
      id={`service-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Icon Container */}
      <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-900/10 flex items-center justify-center mb-8 transition-colors group-hover:bg-amber-100 dark:group-hover:bg-amber-900/20">
        <Icon className="text-amber-700 dark:text-amber-500" size={28} />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-serif font-medium text-zinc-900 dark:text-white mb-4">
        {title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      {/* Footer Link */}
      <a 
        href={href}
        className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 dark:text-amber-500 hover:text-amber-800 dark:hover:text-amber-400 transition-colors group/link"
      >
        Learn more 
        <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
}
