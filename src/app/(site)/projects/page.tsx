"use client";

import { Button } from "@/components/Button";
import { ImageWithFallback } from "@/components/Image";
import { projectHighlights } from "@/data/projectHighlights";
import { useLanguage } from "@/context/useLanguage";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <div>
      <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-gradient-to-br from-[#4A3933] via-[#3A2923] to-[#2A1913] dark:from-[#1A1412] dark:via-[#0A0402] dark:to-black">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjgyOTE3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Creative Workspace"
            className="w-full h-full object-cover opacity-40 dark:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2A1913]/95 via-[#3A2923]/85 to-[#4A3933]/90 dark:from-black/95 dark:via-black/90 dark:to-black/85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              {t('projectsTitle')}
            </h1>
            <p className="text-xl text-neutral-200 mb-6 max-w-3xl">
              {t('projectsSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                <span className="inline-flex items-center gap-2">
                  {t('startProject')}
                  <ArrowRight size={18} />
                </span>
              </Button>
              <Button href="/projects" variant="outline">
                <span className="inline-flex items-center gap-2">
                  {t('viewWork')}
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectHighlights.map((project) => (
              <motion.div
                key={project.slug}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white text-neutral-900 shadow-lg transition duration-500 hover:border-[#D4AF37] dark:border-white/5 dark:bg-neutral-900 dark:text-white dark:shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
              >
                <div className="relative h-56">
                  <ImageWithFallback
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-transparent" />
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
                          className="text-xs uppercase tracking-wide bg-white/10 px-3 py-1 rounded-full text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative z-10 flex flex-col gap-3 px-6 py-6 bg-gradient-to-b from-white to-neutral-50 text-neutral-900 dark:from-neutral-900 dark:to-neutral-950 dark:text-white">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">{project.category}</span>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.slice(0, 4).map((metric) => (
                      <span
                        key={`${project.slug}-badge-${metric}`}
                        className="text-xs uppercase tracking-wide rounded-full px-3 py-1 bg-neutral-100 text-neutral-900 dark:bg-white/10 dark:text-white"
                      >
                        {metric}
                      </span>
                    ))}
                    {project.metrics.length > 4 && (
                      <span className="text-xs uppercase tracking-wide rounded-full px-3 py-1 bg-neutral-100 text-neutral-900 dark:bg-white/10 dark:text-white">
                        +{project.metrics.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#4A3933] to-[#3A2923] text-white dark:from-[#2b120d] dark:via-[#190a08] dark:to-[#050302]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4">{t('readyStart')}</h2>
            <p className="text-neutral-200 text-lg mb-8 max-w-2xl mx-auto">{t('readyStartDesc')}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary">
                <span className="inline-flex items-center gap-2">
                  {t('startProject')}
                  <ArrowRight size={18} />
                </span>
              </Button>
              <Button href="/services" variant="outline">
                <span className="inline-flex items-center gap-2">
                  {t('scheduleConsultation')}
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
