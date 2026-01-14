
import { notFound } from 'next/navigation';

import { Button } from "@/components/Button";
import { ImageWithFallback } from "@/components/Image";
import { trainingPrograms } from "@/data/trainingPrograms";
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

  const whatsappText = `Bonjour, je souhaite en savoir plus sur ${program?.title}.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

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
        </MotionDiv>

        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          <Button href={whatsappUrl} variant="primary" className="flex-1">
            Contacter via WhatsApp
          </Button>
          <Button href="/contact" variant="outline" className="flex-1">
            S&apos;informer
          </Button>
        </div>
      </section>
    </div>
  );
}
