import { notFound } from 'next/navigation';

import { Button } from "@/components/Button";
import { ImageWithFallback } from "@/components/Image";
import { projectHighlights } from "@/data/projectHighlights";
import { ArrowRight, Briefcase } from "lucide-react";
import { MotionDiv } from "@/components/MotionDiv";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};
const WHATSAPP_NUMBER = '1234567890';

export async function generateStaticParams() {
  return projectHighlights.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }: Params) {
  const { slug } = await params;
  const project = projectHighlights.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Bonjour, je souhaite connaître les détails du projet "${project!.title}".`
  )}`;

  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3f251d] to-[#120805] text-white">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={project!.coverImage}
            alt={project!.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c0a04]/90 via-[#2a1408]/80 to-[#1a0d07]/95" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 px-4 py-2 rounded-full text-sm uppercase tracking-[0.4em] text-[#D4AF37] mb-6">
              <Briefcase size={16} />
              Projets
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold mb-4">{project!.title}</h1>
            <p className="text-lg text-neutral-200 mb-6">{project!.description}</p>
            <p className="text-sm text-neutral-200 mb-6">{project!.impact}</p>
            <div className="flex flex-wrap gap-4">
              <Button href={whatsappUrl} variant="primary">
                <span className="inline-flex items-center gap-2">
                  Discuter sur WhatsApp
                  <ArrowRight size={18} />
                </span>
              </Button>
              <Button href="/contact" variant="outline">
                Nous Contacter
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-neutral-950 rounded-3xl shadow-xl border border-neutral-200 dark:border-neutral-800 p-10 space-y-6"
        >
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Détails clés</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-neutral-600 dark:text-neutral-300">
            {project!.metrics.map((metric) => (
              <li key={metric} className="rounded-2xl border border-neutral-200 dark:border-neutral-700 px-4 py-3 bg-neutral-50 dark:bg-neutral-900">
                {metric}
              </li>
            ))}
          </ul>
          <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
            <p>{project!.description}</p>
            <p className="text-neutral-500 dark:text-neutral-400">{project!.impact}</p>
          </div>
        </MotionDiv>

        <div className="flex flex-col md:flex-row gap-4">
          <Button href={whatsappUrl} variant="primary" className="flex-1">
            Discuter sur WhatsApp
          </Button>
          <Button href="/services" variant="outline" className="flex-1">
            Explorer nos services
          </Button>
        </div>
      </section>
    </div>
  );
}
