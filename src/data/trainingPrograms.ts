export type TrainingProgram = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  level: string;
  highlights: string[];
  modules: string[];
  coverImage: string;
};

export const trainingPrograms: TrainingProgram[] = [
  {
    slug: 'full-stack-web',
    title: 'Développement Web Complet',
    subtitle: 'Maîtrisez React, Node.js et les stacks modernes pour livrer des expériences web d’excellence.',
    description:
      "Ce cursus vous guide du design UX au backend, en passant par l'automatisation des pipelines et les bonnes pratiques DevOps.",
    duration: '12 semaines',
    level: 'Tous niveaux',
    highlights: ['React & Next.js', 'API REST/GraphQL', 'Déploiement CI/CD'],
    modules: [
      'Frameworks modernes (React, Next.js, Tailwind)',
      'Backend Node.js et bases de données',
      'Automatisation, tests et déploiement',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1060&q=80',
  },
  {
    slug: 'ai-tools',
    title: 'Outils & Applications IA',
    subtitle: "Apprenez à orchestrer les outils AI pour accélérer les workflows et créer des assistants intelligents.",
    description:
      "Combinez Prompt Engineering, agents autonomes et intégrations LLM pour construire des expériences métiers augmentées.",
    duration: '8 semaines',
    level: 'Débutant ➜ Avancé',
    highlights: ['Prompt Engineering', 'Agents autonomes', 'Automatisation métier'],
    modules: [
      'Exploration des LLM et évaluations',
      'Agents et workflows supervisés',
      'Déploiement sécurisé des outils IA',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1060&q=80',
  },
  {
    slug: 'ai-agents',
    title: "Développement d'Agents IA",
    subtitle: "Construisez des agents autonomes capables de gérer des tâches complexes et des scénarios métiers réels.",
    description:
      "De la conception des personas à l'intégration systèmes, ce programme enseigne la création d'agents robustes et éthiques.",
    duration: '10 semaines',
    level: 'Int ➜ Avancé',
    highlights: ['Design d’agents', 'ERP & SaaS integrations', 'Robustesse et sécurité'],
    modules: [
      'Architecture d’agents multi-modules',
      'Systèmes de mémoire et de suivi de contexte',
      'Monitoring, observabilité et gouvernance',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1060&q=80',
  },
];
