"use client";

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Button } from './Button';
import { useLanguage } from '@/context/useLanguage';


interface TrainingCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  duration: string;
  level: string;
}

export function TrainingCard({ icon, title, description, duration, level }: TrainingCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative bg-gradient-to-br from-[#4A3933] via-[#3A2923] to-[#2A1913] p-8 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-10"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4AF37] rounded-full blur-3xl" />
        </motion.div>

        <div className="relative">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 rounded-xl bg-[#D4AF37] flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#D4AF37]/50 transition-all duration-300"
          >
            {icon}
          </motion.div>
          
          <h3 className="text-white mb-2 text-xl">{title}</h3>
          <p className="text-neutral-200 text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="p-6 bg-white dark:bg-neutral-800">
        <div className="flex items-center gap-4 mb-6 text-sm text-neutral-600 dark:text-neutral-400">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-3 py-1.5 bg-neutral-50 dark:bg-neutral-700 rounded-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            {duration}
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-3 py-1.5 bg-neutral-50 dark:bg-neutral-700 rounded-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            {level}
          </motion.span>
        </div>
        
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button variant="outline" className="w-full">
            {t('enrollNow')}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
