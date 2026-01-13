"use client";

import { useState, useEffect } from 'react';

import { Menu, X, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/context/useLanguage';
import { useTheme } from '@/context/useTheme';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() ?? '/';
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('services'), href: '/services' },
    { name: t('training'), href: '/training' },
    { name: t('projects'), href: '/projects' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-lg border-b border-neutral-200/50 dark:border-neutral-700/50'
          : 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-200/30 dark:border-neutral-700/30'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative group flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#C19F2F] text-white font-semibold tracking-wide shadow-md"
              aria-hidden="true"
            >
              MD
            </motion.div>
            <div className="leading-tight">
              <span className="block text-lg font-semibold text-neutral-900 dark:text-white">Manden</span>
              <span className="block text-xs uppercase tracking-[0.25em] text-[#D4AF37]">Digital</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-[#D4AF37]'
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-[#D4AF37]'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-[#D4AF37]/10 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Language Switcher, Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === 'light' ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <LanguageSwitcher />
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-[#D4AF37]/10 text-[#D4AF37]'
                          : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
