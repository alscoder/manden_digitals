export type ProjectHighlight = {
  slug: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  metrics: string[];
  coverImage: string;
};

export const projectHighlights: ProjectHighlight[] = [
  {
    slug: 'real-estate-platform',
    title: 'Plateforme Immobilier Ninja',
    category: 'SaaS Platform',
    description:
      'Gestion de portails immobiliers avec visites virtuelles, analytics et intégrations CRM pour accélérer les ventes.',
    impact: 'Réduction du cycle de vente de 32% grâce à la mise en avant intelligent des biens.',
    metrics: ['+15% leads qualifiés', 'Infra résiliente multi-cloud', 'Automatisation des relances'],
    coverImage:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'job-portal',
    title: 'Portail Recrutement IA',
    category: 'Web Application',
    description:
      'Matching intelligent candidats ↔ postes avec scoring AI, tableau de bord RH temps réel et workflows de validation.',
    impact: 'Taux de matching de 86% et réduction de 40% des délais d’embauche.',
    metrics: ['Matching auto basé IA', 'Dashboard RH en temps réel', 'Workflows ATS intégrés'],
    coverImage:
      'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'cloud-crm',
    title: 'CRM Cloud Intelligence',
    category: 'Enterprise Solution',
    description:
      "Suite CRM personnalisée avec orchestrations marketing, analytics et automatisations intelligentes.",
    impact: 'Automatisation de la prospection et gain de 400+ heures humaines par trimestre.',
    metrics: ['Pipeline intelligent', 'Connecteurs API natifs', "SLA 99,95% de disponibilité"],
    coverImage:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  },
];
