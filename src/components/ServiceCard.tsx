"use client";

import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  points?: string[];
}

export function ServiceCard({ icon, title, description, points = [] }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    className="group relative overflow-hidden rounded-3xl border border-neutral-200  bg-linear-to-br from-[#4A3933] via-[#3A2923] to-[#2A1913] p-8 text-white   shadow-xl transition duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] dark:border-white/10 dark:bg-linear-to-br dark:from-[#0c0604] dark:via-[#1a0d08] dark:to-[#120805] dark:text-white"
    >
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-black/20 to-black/60 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative space-y-4">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-white shadow-lg"
        >
          {icon}
        </motion.div>

        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <p className="text-sm leading-relaxed text-neutral-200 mb-4">{description}</p>

        {points.length > 0 && (
          <ul className="space-y-2 text-sm text-neutral-300">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#D4AF37]" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
