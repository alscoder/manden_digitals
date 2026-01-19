import type { LucideIcon } from 'lucide-react';
import { Bot, Code, BookOpen, FileText, Sparkles } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'intelligence-artificielle': Bot,
  'developpement-web': Code,
  'methodologie-recherche': BookOpen,
  'pack-office-avance': FileText,
};

export function getTrainingIcon(slug: string): LucideIcon {
  return iconMap[slug] ?? Sparkles;
}
