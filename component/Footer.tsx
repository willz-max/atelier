"use client"

import { motion } from 'motion/react';
import { Phone, Mail, MapPin,  ArrowUp } from 'lucide-react';
import {
  FaInstagram,
  FaPinterest,
  FaLinkedin,
  FaTiktok,
  FaXTwitter
} from "react-icons/fa6";

const footerLinks = {
  services: [
    { name: 'Residential Design', href: '#services' },
    { name: 'Commercial Design', href: '#services' },
    { name: 'Hospitality Design', href: '#services' },
    { name: 'Renovation Management', href: '#services' },
  ],
  resources: [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Design Blog', href: '#' },
    { name: 'Style Guide', href: '#' },
    { name: 'Pricing', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ]
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#030712] border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Logo and Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold tracking-tighter text-zinc-900 dark:text-white">
                Atelier
              </span>
              <span className="text-2xl font-light tracking-[0.3em] text-zinc-400 dark:text-zinc-500 uppercase">
                Studio
              </span>
            </div>
            
            <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-sm leading-relaxed">
              Award-winning interior design studio transforming spaces into extraordinary 
              experiences. Residential, commercial, and hospitality design in Miami.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 group cursor-pointer hover:text-amber-700 dark:hover:text-amber-500 transition-colors">
                <Phone size={18} />
                <span className="font-medium">(555) 284-9103</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 group cursor-pointer hover:text-amber-700 dark:hover:text-amber-500 transition-colors">
                <Mail size={18} />
                <span className="font-medium">hello@atelierstudio.com</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 group cursor-pointer hover:text-amber-700 dark:hover:text-amber-500 transition-colors">
                <MapPin size={18} />
                <span className="font-medium">55 Design District, Miami, FL 33137</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {[FaInstagram, FaPinterest, FaLinkedin].map((Icon, idx) => (
                <button 
                  key={idx}
                  className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-zinc-500 hover:bg-amber-700 hover:text-white transition-all active:scale-95"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-zinc-900 dark:text-white font-bold tracking-widest uppercase text-xs mb-8">Services</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-zinc-500 dark:text-zinc-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors font-medium">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-zinc-900 dark:text-white font-bold tracking-widest uppercase text-xs mb-8">Resources</h4>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-zinc-500 dark:text-zinc-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors font-medium">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-zinc-900 dark:text-white font-bold tracking-widest uppercase text-xs mb-8">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-zinc-500 dark:text-zinc-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors font-medium">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-500 dark:text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Atelier Studio. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">Style Guide</a>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-amber-700 dark:bg-amber-600 text-white flex items-center justify-center shadow-lg hover:bg-amber-800 transition-all active:scale-95 group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
