"use client";

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useLanguage } from '@/context/useLanguage';

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: '#', name: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: '#', name: 'Twitter' },
    { icon: <Facebook size={20} />, href: '#', name: 'Facebook' }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#4A3933] via-[#3A2923] to-[#2A1913] text-white relative overflow-hidden dark:from-[#03050a] dark:via-[#0c1117] dark:to-[#050608] dark:text-neutral-200">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex gap-1 items-center"
            >
            <Link href="/" className=" -mt-10">
            <img src={"/logo.png"} alt='MandenDigitals Logo' className='size-32 '/>
          </Link>
            </motion.div>
            <p className="text-neutral-300 dark:text-neutral-300 text-sm leading-relaxed -mt-10">
              {t('footerDesc')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-[#D4AF37] mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3 text-sm text-neutral-300 dark:text-neutral-300">
              {[
                { name: t('services'), path: '/services' },
                { name: t('training'), path: '/training' },
                { name: t('projects'), path: '/projects' },
                { name: t('about'), path: '/about' }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.path}
                    className="text-neutral-300 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-[#D4AF37] mb-6">{t('services')}</h3>
            <ul className="space-y-3 text-sm text-neutral-300 dark:text-neutral-300">
              {[
                t('webDev'),
                t('cloudSaas'),
                t('digitalConsulting'),
                t('itSolutions')
              ].map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37]/50 rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-[#D4AF37] mb-6">{t('contactInfo')}</h3>
            <ul className="space-y-4 text-sm text-neutral-300 dark:text-neutral-300">
              <li className="flex items-center gap-3 text-neutral-300 dark:text-neutral-200">
                <div className="w-8 h-8 bg-[#D4AF37]/10 dark:bg-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-[#D4AF37]" />
                </div>
                <a
                  href="mailto:info@mandendigital.com"
                  className="text-white dark:text-neutral-100 hover:text-[#D4AF37] transition-colors"
                >
                  info@mandendigital.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-neutral-300 dark:text-neutral-200">
                <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-[#D4AF37]" />
                </div>
                <a
                  href="tel:+1234567890"
                  className="text-white dark:text-neutral-100 hover:text-[#D4AF37] transition-colors"
                >
                  +1 234 567 8900
                </a>
              </li>
              <li className="flex items-center gap-3 text-neutral-300 dark:text-neutral-200">
                <div className="w-8 h-8 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#D4AF37]" />
                </div>
                <span className="text-white dark:text-neutral-100">Global Services</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-[#D4AF37]/10 dark:bg-[#D4AF37]/20 rounded-lg flex items-center justify-center text-neutral-300 dark:text-neutral-200 hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-neutral-600/30 dark:border-neutral-700/40 pt-8 text-center"
        >
          <p className="text-sm text-neutral-300 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} Manden Digital SARL. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
