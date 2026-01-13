"use client";

import { Button } from '@/components/Button';
import { ImageWithFallback } from '@/components/Image';
import { ProjectCard } from '@/components/ProjectCard';
import { useLanguage } from '@/context/useLanguage';
import { Briefcase, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('realEstate'),
      description: t('realEstateDesc'),
      category: t('saasplatform'),
      imageUrl: "https://images.unsplash.com/photo-1761166518430-18fa61b973e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcGxhdGZvcm18ZW58MXx8fHwxNzY4MzIwMTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: t('jobPortal'),
      description: t('jobPortalDesc'),
      category: t('webApplication'),
      imageUrl: "https://images.unsplash.com/photo-1762330463293-babc1c6e43ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjByZWNydWl0bWVudCUyMHBsYXRmb3JtfGVufDF8fHx8MTc2ODMyMDIwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: t('engineeringSolutions'),
      description: t('engineeringSolutionsDesc'),
      category: t('enterpriseSolution'),
      imageUrl: "https://images.unsplash.com/photo-1729551610640-e8adee1172e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGJsdWVwcmludHN8ZW58MXx8fHwxNzY4MzExOTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: t('cloudCRM'),
      description: t('cloudCRMDesc'),
      category: t('saasplatform'),
      imageUrl: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRhdGF8ZW58MXx8fHwxNzY4MjQ0MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: t('biDashboard'),
      description: t('biDashboardDesc'),
      category: t('analyticsPlatform'),
      imageUrl: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjgyMjY4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: t('workspaceSuite'),
      description: t('workspaceSuiteDesc'),
      category: t('enterpriseSolution'),
      imageUrl: "https://images.unsplash.com/photo-1646153976497-14925728ff47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODIxNDQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[#4A3933] via-[#3A2923] to-[#2A1913] dark:from-[#1A1412] dark:via-[#0A0402] dark:to-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjgyOTE3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Creative Workspace"
            className="w-full h-full object-cover opacity-30 dark:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2A1913]/95 via-[#3A2923]/85 to-[#4A3933]/80 dark:from-black/95 dark:via-black/90 dark:to-black/85" />
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-3xl dark:from-[#D4AF37]/20"
          />
          <motion.div
            animate={{
              x: [0, 100, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl dark:bg-[#D4AF37]/15"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 rounded-full text-sm mb-6"
            >
              <Briefcase size={16} />
              <span>Our Work</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              {t('projectsTitle')}
            </h1>
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              {t('projectsSubtitle')}
            </p>
            <Button href="/contact" variant="primary">
              <span className="inline-flex items-center gap-2">
                {t('startProject')}
                <ArrowRight size={18} />
              </span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  imageUrl={project.imageUrl}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl text-neutral-900 dark:text-neutral-100 mb-12 text-center"
          >
            {t('projectSuccess')}
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: t('projectsDelivered') },
              { value: '98%', label: t('clientSatisfaction') },
              { value: '15+', label: t('industriesServed') },
              { value: '24/7', label: t('supportAvailable') }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl text-[#D4AF37] mb-2">{stat.value}</div>
                <div className="text-neutral-600 dark:text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-[#4A3933] to-[#3A2923] text-white dark:from-[#2b120d] dark:via-[#190a08] dark:to-[#050302]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              {t('readyStart')}
            </h2>
            <p className="text-neutral-200 text-lg mb-8 max-w-2xl mx-auto">
              {t('readyStartDesc')}
            </p>
            <Button href="/contact" variant="primary">
              <span className="inline-flex items-center gap-2">
                {t('startProject')}
                <ArrowRight size={18} />
              </span>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
