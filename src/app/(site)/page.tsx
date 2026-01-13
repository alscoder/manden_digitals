'use client'
import { Button } from '@/components/Button';
import { ImageWithFallback } from '@/components/Image';
import { ServiceCard } from '@/components/ServiceCard';
import { TrainingCard } from '@/components/TrainingCard';
import { useLanguage } from '@/context/useLanguage';
import { Sparkles, ArrowRight, TrendingUp, Award, Code, Cloud, Briefcase, GraduationCap, Users, Zap, Bot } from 'lucide-react';
import { motion } from 'motion/react';


const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Home() {
  const { t } = useLanguage();

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
                <div className="text-3xl text-[#D4AF37] mb-1">50+</div>
                <div className="text-neutral-300 text-sm">Projects</div>
              </div>
              <div>
                <div className="text-3xl text-[#D4AF37] mb-1">500+</div>
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
                src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjgyMzkwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
      <section className="py-20 bg-white dark:bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2YwZjBmMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50 dark:opacity-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mb-4"
            >
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center mx-auto rotate-12">
                <Sparkles className="text-[#D4AF37]" size={32} />
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-4xl text-neutral-900 dark:text-neutral-100 mb-4">
              {t('coreServices')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {t('coreServicesDesc')}
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <Code size={24} />, title: t('webDev'), desc: t('webDevDesc') },
              { icon: <Cloud size={24} />, title: t('cloudSaas'), desc: t('cloudSaasDesc') },
              { icon: <Briefcase size={24} />, title: t('digitalConsulting'), desc: t('digitalConsultingDesc') },
              { icon: <GraduationCap size={24} />, title: t('itSolutions'), desc: t('itSolutionsDesc') }
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.desc}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button href="/services" variant="secondary">
              <span className="inline-flex items-center gap-2">
                {t('exploreServices')}
                <ArrowRight size={18} />
              </span>
            </Button>
          </motion.div>
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
                Building the Future with Code
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                Our team of expert developers creates innovative solutions using cutting-edge technologies. From concept to deployment, we deliver excellence at every step.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Users size={20} />, text: 'Expert Team of Developers' },
                  { icon: <Code size={20} />, text: 'Modern Tech Stack' },
                  { icon: <Award size={20} />, text: 'Quality Assurance' }
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

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Code size={28} />, title: t('fullStackWeb'), desc: t('fullStackWebDesc'), duration: '12', level: t('allLevels') },
              { icon: <Zap size={28} />, title: t('aiTools'), desc: t('aiToolsDesc'), duration: '8', level: t('beginnerIntermediate') },
              { icon: <Bot size={28} />, title: t('aiAgents'), desc: t('aiAgentsDesc'), duration: '10', level: t('intermediateAdvanced') }
            ].map((training, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <TrainingCard
                  icon={training.icon}
                  title={training.title}
                  description={training.desc}
                  duration={`${training.duration} ${t('weeks')}`}
                  level={training.level}
                />
              </motion.div>
            ))}
          </motion.div>

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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY4MjMxOTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#4A3933]/95 to-[#3A2923]/95" />
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
