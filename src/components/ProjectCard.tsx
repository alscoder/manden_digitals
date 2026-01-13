"use client";

import { motion } from 'motion/react';

import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './Image';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export function ProjectCard({ title, description, category, imageUrl }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative h-56 overflow-hidden bg-neutral-100 dark:bg-neutral-700">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="absolute top-4 right-4 bg-gradient-to-r from-[#D4AF37] to-[#C19F2F] text-white text-xs px-4 py-2 rounded-full shadow-lg"
        >
          {category}
        </motion.div>

        {/* External Link Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <ExternalLink className="text-[#D4AF37]" size={24} />
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-neutral-900 dark:text-neutral-100 mb-2 text-lg group-hover:text-[#D4AF37] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
