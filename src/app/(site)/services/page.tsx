"use client";

import { Button } from "@/components/Button";
import { ImageWithFallback } from "@/components/Image";
import { ServiceCard } from "@/components/ServiceCard";
import { useLanguage } from "@/context/useLanguage";
import { Settings, ArrowRight, Code, Smartphone, Layers, Cloud, Database, Cpu, Briefcase, LineChart, Globe, Lock, Headphones } from "lucide-react";
import { motion } from "motion/react";


const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[#4A3933] via-[#3A2923] to-[#2A1913] dark:from-[#1A1412] dark:via-[#0A0402] dark:to-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://plus.unsplash.com/premium_vector-1708168961443-3c88498cc413?q=80&w=2534&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Business Technology Innovation"
            className="w-full h-full object-cover opacity-35 dark:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#4A3933]/85 via-transparent to-[#2A1913]/90 dark:from-black/90 dark:via-black/70 dark:to-black/95" />
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-3xl dark:from-[#D4AF37]/15"
          />
          <motion.div
            animate={{
              x: [-100, 100, -100],
              y: [-50, 50, -50],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl dark:bg-[#D4AF37]/10"
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
              <Settings size={16} />
              <span>Digital Solutions</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              {t('servicesTitle')}
            </h1>
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              {t('servicesSubtitle')}
            </p>
            <Button href="/contact" variant="primary">
              <span className="inline-flex items-center gap-2">
                {t('scheduleConsultation')}
                <ArrowRight size={18} />
              </span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Development Services */}
      <section className="py-16 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl text-neutral-900 dark:text-neutral-100 mb-3">{t('developmentServices')}</h2>
            <p className="text-neutral-600 dark:text-neutral-400">{t('developmentServicesDesc')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Code size={24} />}
              title={t('webDev')}
              description={t('webDevDesc')}
            />
            <ServiceCard
              icon={<Smartphone size={24} />}
              title={t('mobileDev')}
              description={t('mobileDevDesc')}
            />
            <ServiceCard
              icon={<Layers size={24} />}
              title={t('pwa')}
              description={t('pwaDesc')}
            />
          </div>
        </div>
      </section>

      {/* Cloud & SaaS Services */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl text-neutral-900 dark:text-neutral-100 mb-3">{t('cloudSolutions')}</h2>
            <p className="text-neutral-600 dark:text-neutral-400">{t('cloudSolutionsDesc')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Cloud size={24} />}
              title={t('cloudInfra')}
              description={t('cloudInfraDesc')}
            />
            <ServiceCard
              icon={<Database size={24} />}
              title={t('saasDev')}
              description={t('saasDevDesc')}
            />
            <ServiceCard
              icon={<Cpu size={24} />}
              title={t('crmSystems')}
              description={t('crmSystemsDesc')}
            />
          </div>
        </div>
      </section>

      {/* Business Services */}
      <section className="py-16 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl text-neutral-900 dark:text-neutral-100 mb-3">{t('businessServices')}</h2>
            <p className="text-neutral-600 dark:text-neutral-400">{t('businessServicesDesc')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Briefcase size={24} />}
              title={t('digitalConsulting')}
              description={t('digitalConsultingDesc')}
            />
            <ServiceCard
              icon={<LineChart size={24} />}
              title={t('businessAnalysis')}
              description={t('businessAnalysisDesc')}
            />
            <ServiceCard
              icon={<Globe size={24} />}
              title={t('digitalMarketing')}
              description={t('digitalMarketingDesc')}
            />
          </div>
        </div>
      </section>

      {/* IT Solutions */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl text-neutral-900 dark:text-neutral-100 mb-3">{t('itSupportServices')}</h2>
            <p className="text-neutral-600 dark:text-neutral-400">{t('itSupportServicesDesc')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Settings size={24} />}
              title={t('itInfra')}
              description={t('itInfraDesc')}
            />
            <ServiceCard
              icon={<Lock size={24} />}
              title={t('securityCompliance')}
              description={t('securityComplianceDesc')}
            />
            <ServiceCard
              icon={<Headphones size={24} />}
              title={t('techSupport')}
              description={t('techSupportDesc')}
            />
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
              {t('buildTogether')}
            </h2>
            <p className="text-neutral-200 text-lg mb-8 max-w-2xl mx-auto">
              {t('buildTogetherDesc')}
            </p>
            <Button href="/contact" variant="primary">
              <span className="inline-flex items-center gap-2">
                {t('scheduleConsultation')}
                <ArrowRight size={18} />
              </span>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
