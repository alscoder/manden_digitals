
import { notFound } from 'next/navigation';

import { Button } from "@/components/Button";
import { ImageWithFallback } from "@/components/Image";
import { trainingPrograms } from "@/data/trainingPrograms";
import { translations } from "@/utils/translation";
import { ArrowRight, Sparkles } from "lucide-react";
import { MotionDiv } from "@/components/MotionDiv";

const WHATSAPP_NUMBER = '1234567890';

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return trainingPrograms.map((program) => ({ slug: program.slug }));
}

export default async function TrainingDetail({ params }: Params) {
  const { slug } = await params;
  const program = trainingPrograms.find((item) => item.slug === slug);

  if (!program) {
    notFound();
  }

  const t = (key: string) => {
    const value = key.split('.').reduce<any>((acc, part) => acc?.[part], translations.fr);
    return value ?? key;
  };

  const whatsappText = `Bonjour, je souhaite en savoir plus sur ${program?.title}.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
  const isPackOffice = program?.slug === 'pack-office-avance';

  return (
    <div className="space-y-20 mb-20">
      <section className="relative overflow-hidden bg-linear-to-br from-[#4A3933] to-[#2A1913] text-white">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={program!.coverImage}
            alt={program!.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#1f110c]/90 via-[#321b12]/80 to-[#2a120b]/95" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 px-4 py-2 rounded-full text-sm uppercase tracking-[0.4em] text-[#D4AF37] mb-6">
              <Sparkles size={16} />
              Formation
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold mb-4">{program!.title}</h1>
            <p className="text-lg text-neutral-100 max-w-3xl mb-6">{program!.subtitle}</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button href={whatsappUrl} variant="primary">
                <span className="inline-flex items-center gap-2">
                  Contact WhatsApp
                  <ArrowRight size={18} />
                </span>
              </Button>
              <Button href="#details" variant="outline">
                Voir le programme
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      <section id="details" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-neutral-950 rounded-3xl shadow-xl p-10 space-y-6 border border-neutral-200 dark:border-neutral-800"
        >
          <div className="flex flex-wrap gap-4">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">{program!.duration}</span>
            <span className="text-sm text-neutral-700 dark:text-neutral-300">{program!.level}</span>
          </div>
          <p className="text-neutral-700 dark:text-neutral-200 leading-relaxed">{program!.description}</p>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Points forts</h3>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
              {program!.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Modules clés</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {program!.modules.map((module) => (
                <div
                  key={module}
                  className="rounded-2xl border border-neutral-200 dark:border-neutral-700 px-4 py-3 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100"
                >
                  {module}
                </div>
              ))}
            </div>
          </div>
          {program!.objectives?.length && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{t('objectivesTitle')}</h3>
              <ul className="grid gap-2 sm:grid-cols-2 text-neutral-600 dark:text-neutral-300">
                {program!.objectives.map((item) => (
                  <li key={item} className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#D4AF37]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {program!.audience && (
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{t('audienceTitle')}</h3>
              <p className="text-neutral-600 dark:text-neutral-300">{program!.audience}</p>
            </div>
          )}

          {program!.format?.length && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{t('formatTitle')}</h3>
              <div className="flex flex-wrap gap-3">
                {program!.format.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-200 dark:border-neutral-700 px-4 py-1 text-sm text-neutral-700 dark:text-neutral-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {program!.deliverables?.length && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{t('deliverablesTitle')}</h3>
              <div className="grid gap-3 sm:grid-cols-2 text-neutral-600 dark:text-neutral-300">
                {program!.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm leading-relaxed">
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#D4AF37]" aria-hidden />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </MotionDiv>

        {program!.schedule && (
          <MotionDiv
            id="programme"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6"
          >
            <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-8 space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                  {program!.scheduleTitle ?? t('scheduleTitle')}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {t('scheduleDescription')}
                </p>
              </div>
              <div className="grid gap-4 lg:grid-cols-3">
                {program!.schedule.map((day) => (
                  <div
                    key={day.title}
                    className="rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/70 p-5"
                  >
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{day.title}</h4>
                    <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                      {day.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#D4AF37]" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </MotionDiv>
        )}

        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          <Button href={whatsappUrl} variant="primary" className="flex-1">
            Contacter via WhatsApp
          </Button>
          <Button href="/contact" variant="outline" className="flex-1">
            S&apos;informer
          </Button>
        </div>
        {isPackOffice && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
            <p className="text-neutral-500 dark:text-neutral-400">{t('packOfficeCtaQuote')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact?subject=devis" variant="primary">
                {t('packOfficeRequestQuote')}
              </Button>
              <Button href="/contact?subject=session" variant="secondary">
                {t('packOfficePlanSession')}
              </Button>
              <Button href="#programme" variant="outline">
                {t('packOfficeDownloadProgram')}
              </Button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
