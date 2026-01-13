"use client";

import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-transparent transition-all duration-500" />
      
      <div className="relative">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:from-[#D4AF37] group-hover:to-[#C19F2F] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg"
        >
          {icon}
        </motion.div>
        
        <h3 className="text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 0.4 }}
        className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#D4AF37] rounded-full blur-2xl"
      />
    </motion.div>
  );
}
