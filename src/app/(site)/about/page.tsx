"use client";

import { Button } from "@/components/Button";
import { ImageWithFallback } from "@/components/Image";
import { useLanguage } from "@/context/useLanguage";
import { Building2, ArrowRight, Target, Eye, Award, Rocket, Users, Heart } from "lucide-react";
import { motion } from "motion/react";


const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function About() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[#4A3933] via-[#3A2923] to-[#2A1913] dark:from-[#1A1412] dark:via-[#0A0402] dark:to-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1707301280380-56f7e7a00aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc2ODMzMjYxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Team Strategy Meeting"
            className="w-full h-full object-cover opacity-35 dark:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-[#4A3933]/80 via-[#3A2923]/90 to-[#2A1913]/95 dark:from-black/85 dark:via-black/90 dark:to-black/95" />
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -180, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-3xl dark:from-[#D4AF37]/20"
          />
          <motion.div
            animate={{
              y: [-50, 50, -50],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl dark:bg-[#D4AF37]/10"
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
              <Building2 size={16} />
              <span>About Company</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              {t('aboutTitle')}
            </h1>
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              {t('aboutSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                <span className="inline-flex items-center gap-2">
                  {t('getInTouch')}
                  <ArrowRight size={18} />
                </span>
              </Button>
              <Button href="/services" variant="outline">
                <span className="inline-flex items-center gap-2">
                  {t('exploreServicesBtn')}
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl text-neutral-900 mb-6"
            >
              {t('whoWeAre')}
            </motion.h2>
            <motion.p
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-neutral-600 leading-relaxed mb-6"
            >
              {t('whoWeAreDesc1')}
            </motion.p>
            <motion.p
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-neutral-600 leading-relaxed mb-6"
            >
              {t('whoWeAreDesc2')}
            </motion.p>
            <motion.p
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-neutral-600 leading-relaxed"
            >
              {t('whoWeAreDesc3')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6">
                <Target className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-2xl text-neutral-900 mb-4">{t('ourMission')}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {t('ourMissionDesc')}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-[#D4AF37]" size={32} />
              </div>
              <h3 className="text-2xl text-neutral-900 mb-4">{t('ourVision')}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {t('ourVisionDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl text-neutral-900 mb-12 text-center"
          >
            {t('coreValues')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award size={32} />, title: t('excellence'), desc: t('excellenceDesc') },
              { icon: <Rocket size={32} />, title: t('innovation'), desc: t('innovationDesc') },
              { icon: <Users size={32} />, title: t('collaboration'), desc: t('collaborationDesc') },
              { icon: <Heart size={32} />, title: t('integrity'), desc: t('integrityDesc') }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <div className="text-[#D4AF37]">{value.icon}</div>
                </motion.div>
                <h3 className="text-neutral-900 mb-3">{value.title}</h3>
                <p className="text-neutral-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl text-neutral-900 mb-12 text-center"
          >
            {t('ourExpertise')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t('softwareDev'), desc: t('softwareDevDesc') },
              { title: t('cloudInfrastructure'), desc: t('cloudInfrastructureDesc') },
              { title: t('aiAutomation'), desc: t('aiAutomationDesc') },
              { title: t('businessSolutions'), desc: t('businessSolutionsDesc') },
              { title: t('digitalConsultingExpertise'), desc: t('digitalConsultingExpertiseDesc') },
              { title: t('professionalTrainingExpertise'), desc: t('professionalTrainingExpertiseDesc') }
            ].map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-2xl border border-neutral-200 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-neutral-900 mb-3">{expertise.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{expertise.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#4A3933] to-[#3A2923] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              {t('partnerWithUs')}
            </h2>
            <p className="text-neutral-200 text-lg mb-8 max-w-2xl mx-auto">
              {t('partnerWithUsDesc')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary">
                <span className="inline-flex items-center gap-2">
                  {t('getInTouch')}
                  <ArrowRight size={18} />
                </span>
              </Button>
              <Button href="/services" variant="outline">
                <span className="inline-flex items-center gap-2">
                  {t('exploreServicesBtn')}
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
