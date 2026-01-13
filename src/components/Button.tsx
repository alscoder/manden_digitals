"use client";

import { ReactNode } from 'react';

import { motion } from 'motion/react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({ children, variant = 'primary', href, onClick, className = '', type = 'button' }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-xl transition-all duration-300 relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#D4AF37] to-[#C19F2F] text-white hover:shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-105',
    secondary: 'bg-gradient-to-r from-[#4A3933] to-[#3A2923] text-white hover:shadow-lg hover:shadow-[#4A3933]/30 hover:scale-105',
    outline: 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white hover:shadow-lg hover:shadow-[#D4AF37]/20',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
    </>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('#')) {
      return (
        <motion.a
          href={href}
          className={classes}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.button>
  );
}
