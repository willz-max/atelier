"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Initialize theme: Default to light mode unless 'dark' is explicitly saved
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Handle scroll for navbar shadow/blur adjustment
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
  
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans ${
        isScrolled 
          ? 'py-3 bg-white/80 dark:bg-zinc-950/80 shadow-sm border-b border-zinc-200/50 dark:border-zinc-800/50' 
          : 'py-5 bg-white/40 dark:bg-zinc-950/40 border-b border-white/10 dark:border-zinc-800/10'
      } backdrop-blur-md`}
      id="main-navbar"
    >
      <div className="max-w-9xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer" id="nav-logo">
          {/* Switching Logo Images */}
         <Link href="/" className="flex items-center gap-2">
            <img 
            src={isDark 
              ? "/logo-light.svg" 
              : "/logo.svg"
            } 
            alt="Atelier Studio Logo" 
            className="h-8 md:h-10 w-auto object-contain transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />
          </Link>
         
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8" id="desktop-links">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4" id="nav-actions">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-95"
            aria-label="Toggle theme"
            id="theme-toggle"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA Button */}
          <button 
            className="hidden sm:flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-amber-900/10 active:scale-95"
            id="nav-cta"
          >
            Book Consultation
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-zinc-900 dark:text-white"
            id="mobile-menu-toggle"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden"
            id="mobile-menu-overlay"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-zinc-900 dark:text-white flex items-center justify-between group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-700" />
                </a>
              ))}
              <hr className="border-zinc-100 dark:border-zinc-800" />
              <button 
                className="w-full bg-amber-700 text-white px-6 py-4 rounded-xl text-md font-semibold transition-all active:scale-[0.98]"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
