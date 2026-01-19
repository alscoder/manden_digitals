'use client';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/Button';
import { ImageWithFallback } from '@/components/Image';
import { ServiceCard } from '@/components/ServiceCard';
import { TrainingCard } from '@/components/TrainingCard';
import { useLanguage } from '@/context/useLanguage';
import { trainingPrograms } from '@/data/trainingPrograms';
import { projectHighlights } from '@/data/projectHighlights';
import { Sparkles, ArrowRight, ArrowLeft, TrendingUp, Award, Code, Cloud, Users, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { getTrainingIcon } from '@/utils/trainingIcons';


const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

function Home() {
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState(0);
  const projectCardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const services = [
    {
      icon: <Code size={28} />,
      title: t('serviceDevTitle'),
      description: t('serviceDevDesc'),
      points: [
        t('serviceDevPoint1'),
        t('serviceDevPoint2'),
        t('serviceDevPoint3'),
        t('serviceDevPoint4')
      ]
    },
    {
      icon: <Cloud size={28} />,
      title: t('serviceCloudTitle'),
      description: t('serviceCloudDesc'),
      points: [
        t('serviceCloudPoint1'),
        t('serviceCloudPoint2'),
        t('serviceCloudPoint3'),
        t('serviceCloudPoint4')
      ]
    },
    {
      icon: <Zap size={28} />,
      title: t('serviceTrainingTitle'),
      description: t('serviceTrainingDesc'),
      points: [
        t('serviceTrainingPoint1'),
        t('serviceTrainingPoint2'),
        t('serviceTrainingPoint3'),
        t('serviceTrainingPoint4')
      ]
    }
  ];

  const values = [
    {
      title: t('valueExcellenceTitle'),
      description: t('valueExcellenceDesc')
    },
    {
      title: t('valueInnovationTitle'),
      description: t('valueInnovationDesc')
    },
    {
      title: t('valuePartnershipTitle'),
      description: t('valuePartnershipDesc')
    }
  ];

  const scrollToProject = (index: number) => {
    const normalized = (index + projectHighlights.length) % projectHighlights.length;
    setActiveProject(normalized);
    projectCardRefs.current[normalized]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  useEffect(() => {
    projectCardRefs.current[0]?.scrollIntoView({
      behavior: 'auto',
      block: 'nearest',
      inline: 'center'
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-linear-to-br from-[#4A3933] via-[#3A2923] to-[#2A1913] dark:from-[#1A1412] dark:via-[#0A0402] dark:to-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1644325349124-d1756b79dd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBuZXR3b3JrfGVufDF8fHx8MTc2ODMzMjYxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Digital Transformation"
            className="w-full h-full object-cover opacity-30 dark:opacity-25"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#4A3933]/90 via-[#3A2923]/85 to-[#4A3933]/90 dark:from-black/95 dark:via-black/90 dark:to-black/95" />
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
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
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-linear-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-3xl dark:from-[#D4AF37]/20"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-linear-to-tr from-[#D4AF37]/10 to-transparent rounded-full blur-3xl dark:from-[#D4AF37]/20"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 rounded-full text-sm mb-6"
            >
              <Sparkles size={16} />
              <span>Digital Transformation Experts</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              {t('heroSubtitle')}
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/contact" variant="primary">
                <span className="inline-flex items-center gap-2">
                  {t('getStarted')}
                  <ArrowRight size={18} />
                </span>
              </Button>
              <Button href="/services" variant="outline">
                {t('ourServices')}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              <div>
                <div className="text-3xl text-[#D4AF37] mb-1">7+</div>
                <div className="text-neutral-300 text-sm">Projects</div>
              </div>
              <div>
                <div className="text-3xl text-[#D4AF37] mb-1">10+</div>
                <div className="text-neutral-300 text-sm">Clients</div>
              </div>
              <div>
                <div className="text-3xl text-[#D4AF37] mb-1">98%</div>
                <div className="text-neutral-300 text-sm">Success</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://plus.unsplash.com/premium_vector-1727494084468-1d1596d4253d?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Collaboration"
                className="w-full h-125 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#4A3933]/50 to-transparent" />
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-[#D4AF37]" size={24} />
                </div>
                <div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Growth Rate</div>
                  <div className="text-xl text-neutral-900 dark:text-neutral-100">+150%</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                  <Award className="text-[#D4AF37]" size={24} />
                </div>
                <div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Satisfaction</div>
                  <div className="text-xl text-neutral-900 dark:text-neutral-100">98%</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#D4AF37]/30 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.5em] text-[#D4AF37] mb-4"
            >
              <Sparkles size={24} />
              {t('servicesSectionLabel')}
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('servicesSectionTitle')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-200 max-w-3xl mx-auto">
              {t('servicesSectionDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                points={service.points}
              />
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.5em] text-[#D4AF37] mb-2">{t('projectsSectionLabel')}</p>
            <h2 className="text-3xl md:text-4xl font-semibold">{t('projectsSectionTitle')}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mt-3">{t('projectsSectionDesc')}</p>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => scrollToProject(activeProject - 1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-neutral-900 border border-white/10 text-white flex items-center justify-center shadow-lg"
              aria-label="Previous project"
            >
              <ArrowLeft size={20} />
            </button>

            <div className="flex gap-6 overflow-x-auto hide-scrollbar px-6 py-8 lg:px-12 ">
              {projectHighlights.map((project, index) => (
                <div
                  key={project.slug}
                  ref={(el) => { projectCardRefs.current[index] = el; }}
                  className="snap-center min-w-70 md:min-w-[320px] lg:min-w-90"
                >
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 text-neutral-900 shadow-lg transition duration-500 hover:border-[#D4AF37] dark:border-white/10 dark:bg-gradient-to-b dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-900 dark:text-white dark:shadow-[0_10px_60px_rgba(0,0,0,0.7)]">
                    <div className="relative h-56">
                      <ImageWithFallback
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-between px-6 py-6 opacity-0 transition duration-500 group-hover:opacity-100">
                        <p
                          className="text-sm leading-relaxed text-neutral-900 dark:text-white"
                          style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {project.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={`${project.slug}-stack-${tech}`}
                              className="px-3 py-1 rounded-full bg-[#D4AF37] text-xs font-semibold tracking-wide text-neutral-900"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToProject(activeProject + 1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-neutral-900 border border-white/10 text-white flex items-center justify-center shadow-lg"
              aria-label="Next project"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Image Section */}
      <section className="py-20 bg-linear-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl text-neutral-900 dark:text-neutral-100 mb-6">
                {t('buildingFuture')}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                {t('buildingFutureDesc')}
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Users size={20} />, text: t('expertTeam') },
                  { icon: <Code size={20} />, text: t('modernTech') },
                  { icon: <Award size={20} />, text: t('qualityAssurance') }
                ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300"
                    >
                      <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center text-[#D4AF37]">
                        {item.icon}
                      </div>
                      <span>{item.text}</span>
                    </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZ3xlbnwxfHx8fDE3NjgzMTg5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Developer Coding"
                  className="w-full h-100 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#4A3933]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="absolute inset-0 border-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 rounded-2xl transition-all duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl text-neutral-900 dark:text-neutral-100 mb-4">
              {t('professionalTraining')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {t('professionalTrainingDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program) => {
              const IconComponent = getTrainingIcon(program.slug);

              return (
                <Link
                  key={program.slug}
                  href={`/training/${program.slug}`}
                  className="group motion-safe:hover:-translate-y-1 motion-safe:transition-transform"
                >
                  <motion.div
                    whileHover={{ y: -12 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <TrainingCard
                      icon={
                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#D4AF37]/90 to-[#D4AF37]/60 flex items-center justify-center text-white shadow-sm">
                          <IconComponent size={28} />
                        </div>
                      }
                      title={program.title}
                      description={program.subtitle}
                      duration={program.duration}
                      level={program.level}
                    />
                  </motion.div>
                </Link>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button href="/training" variant="primary">
              <span className="inline-flex items-center gap-2">
                {t('viewAllPrograms')}
                <ArrowRight size={18} />
              </span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#3f251d] via-[#2b120d] to-[#120805] text-white dark:from-[#1a0a07] dark:via-[#0f0704] dark:to-[#030202]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY4MjMxOTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A3933]/90 to-[#3A2923]/90 dark:from-[#1b0b0a]/95 dark:to-[#080403]/95" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              {t('readyTransform')}
            </h2>
            <p className="text-neutral-200 text-lg mb-8 max-w-2xl mx-auto">
              {t('readyTransformDesc')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary">
                {t('contactToday')}
              </Button>
              <Button href="/projects" variant="outline">
                {t('viewWork')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home
