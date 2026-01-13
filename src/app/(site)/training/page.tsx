"use client";

import { Button } from "@/components/Button";
import { ImageWithFallback } from "@/components/Image";
import { TrainingCard } from "@/components/TrainingCard";
import { useLanguage } from "@/context/useLanguage";
import { GraduationCap, ArrowRight, Code, Palette, Database, Zap, Bot, Brain, Terminal, GitBranch, Award } from "lucide-react";
import { motion } from "motion/react";


const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function Training() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[#4A3933] via-[#3A2923] to-[#2A1913] dark:from-[#1A1412] dark:via-[#0A0402] dark:to-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2ODIxMjUzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Students Learning"
            className="w-full h-full object-cover opacity-35 dark:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-[#4A3933]/90 via-[#3A2923]/80 to-transparent dark:from-black/95 dark:via-black/85 dark:to-black/70" />
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-[#D4AF37]/10 to-transparent rounded-full blur-3xl dark:from-[#D4AF37]/15"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl dark:bg-[#D4AF37]/10"
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
              <GraduationCap size={16} />
              <span>Professional Training</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              {t('trainingTitle')}
            </h1>
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              {t('trainingSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                <span className="inline-flex items-center gap-2">
                  {t('enrollNow')}
                  <ArrowRight size={18} />
                </span>
              </Button>
              <Button href="/contact" variant="outline">
                <span className="inline-flex items-center gap-2">
                  {t('requestInfo')}
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: t('studentsTrained') },
              { value: '15+', label: t('expertInstructors') },
              { value: '95%', label: t('successRate') },
              { value: '10+', label: t('coursePrograms') }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl text-[#D4AF37] mb-2">{stat.value}</div>
                <div className="text-neutral-600 dark:text-neutral-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Training */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl text-neutral-900 dark:text-neutral-100 mb-3">{t('webDevPrograms')}</h2>
            <p className="text-neutral-600 dark:text-neutral-400">{t('webDevProgramsDesc')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TrainingCard
              icon={<Code size={28} />}
              title={t('fullStackWeb')}
              description={t('fullStackWebDesc')}
              duration={`12 ${t('weeks')}`}
              level={t('allLevels')}
            />
            <TrainingCard
              icon={<Palette size={28} />}
              title={t('frontendDev')}
              description={t('frontendDevDesc')}
              duration={`8 ${t('weeks')}`}
              level={t('beginnerIntermediate')}
            />
            <TrainingCard
              icon={<Database size={28} />}
              title={t('backendDev')}
              description={t('backendDevDesc')}
              duration={`10 ${t('weeks')}`}
              level={t('intermediateAdvanced')}
            />
          </div>
        </div>
      </section>

      {/* AI Training */}
      <section className="py-16 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl text-neutral-900 dark:text-neutral-100 mb-3">{t('aiMachineLearning')}</h2>
            <p className="text-neutral-600 dark:text-neutral-400">{t('aiMachineLearningDesc')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TrainingCard
              icon={<Zap size={28} />}
              title={t('aiBusinessTools')}
              description={t('aiBusinessToolsDesc')}
              duration={`6 ${t('weeks')}`}
              level={t('beginner')}
            />
            <TrainingCard
              icon={<Bot size={28} />}
              title={t('aiAgents')}
              description={t('aiAgentsDesc')}
              duration={`10 ${t('weeks')}`}
              level={t('intermediateAdvanced')}
            />
            <TrainingCard
              icon={<Brain size={28} />}
              title={t('mlFundamentals')}
              description={t('mlFundamentalsDesc')}
              duration={`12 ${t('weeks')}`}
              level={t('intermediate')}
            />
          </div>
        </div>
      </section>

      {/* Digital Skills */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl text-neutral-900 dark:text-neutral-100 mb-3">{t('digitalSkills')}</h2>
            <p className="text-neutral-600 dark:text-neutral-400">{t('digitalSkillsDesc')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TrainingCard
              icon={<Terminal size={28} />}
              title={t('devopsCloud')}
              description={t('devopsCloudDesc')}
              duration={`8 ${t('weeks')}`}
              level={t('intermediate')}
            />
            <TrainingCard
              icon={<GitBranch size={28} />}
              title={t('versionControl')}
              description={t('versionControlDesc')}
              duration={`4 ${t('weeks')}`}
              level={t('beginner')}
            />
            <TrainingCard
              icon={<Award size={28} />}
              title={t('projectManagement')}
              description={t('projectManagementDesc')}
              duration={`6 ${t('weeks')}`}
              level={t('allLevels')}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl text-neutral-900 dark:text-neutral-100 mb-12 text-center"
          >
            {t('whyChoose')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award size={32} />, title: t('expertInstructors'), desc: t('expertInstructorsDesc') },
              { icon: <Code size={32} />, title: t('handsOnProjects'), desc: t('handsOnProjectsDesc') },
              { icon: <Zap size={32} />, title: t('flexibleLearning'), desc: t('flexibleLearningDesc') },
              { icon: <Award size={32} />, title: t('certification'), desc: t('certificationDesc') }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#D4AF37]">{feature.icon}</div>
                </div>
                <h3 className="text-neutral-900 dark:text-neutral-100 mb-2">{feature.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">{feature.desc}</p>
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
              {t('readyAdvance')}
            </h2>
            <p className="text-neutral-200 text-lg mb-8 max-w-2xl mx-auto">
              {t('readyAdvanceDesc')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary">
                <span className="inline-flex items-center gap-2">
                  {t('enrollNow')}
                  <ArrowRight size={18} />
                </span>
              </Button>
              <Button href="/contact" variant="outline">
                <span className="inline-flex items-center gap-2">
                  {t('requestInfo')}
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
