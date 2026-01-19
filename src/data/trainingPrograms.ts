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
  deliverables?: string[];
  objectives?: string[];
  audience?: string;
  format?: string[];
  schedule?: Array<{
    title: string;
    items: string[];
  }>;
  scheduleTitle?: string;
};

export const trainingPrograms: TrainingProgram[] = [
  {
    slug: 'intelligence-artificielle',
    title: 'Intelligence Artificielle : Fondamentaux, Productivité & Création',
    subtitle: 'IA : Fondamentaux, Productivité & Création',
    description:
      'Une immersion intensive pour comprendre l’IA, utiliser les meilleurs outils (ChatGPT, Gemini, Claude, etc.), créer du contenu multimédia, automatiser des tâches et livrer un mini-projet final.',
    duration: '2 jours (16h)',
    level: 'Débutant à Intermédiaire',
    highlights: [
      'Panorama des fondamentaux IA et des LLM éthiques',
      'Productivité : prompts, automatisations et cas concrets',
      'Création de contenu texte/image/vidéo/voix',
      'Mini-projet final pour concrétiser l’apprentissage'
    ],
    modules: [
      'Exploration des LLM, gouvernance et prompt engineering',
      'Création assistée de contenu multimédia',
      'Automatisation de workflows et intégrations simples',
      'Atelier projet : prototyper un assistant IA'
    ],
    objectives: [
      'Décoder le paysage IA et ses usages business',
      'Maîtriser les meilleurs outils pour gagner en productivité',
      'Créer des contenus riches exploitable immédiatement',
      'Livrer un mini-projet démontrant la valeur ajoutée'
    ],
    audience: 'Toute personne souhaitant valoriser l’IA dans ses activités (étudiant, chef de projet, décideur, communicant).',
    format: ['Présentiel intensif sur 2 jours', 'Ateliers pratiques + mini-projet individuel'],
    deliverables: [
      'Supports pédagogiques détaillés',
      'Bibliothèque de prompts et templates',
      'Fiches pratiques centrées sur chaque outil',
      'Certificat de participation'
    ],
    coverImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'developpement-web',
    title: 'Développement Web : HTML, CSS, JavaScript & Déploiement',
    subtitle: 'HTML, CSS, JavaScript & Déploiement',
    description:
      'Apprenez à construire un site moderne, responsive et interactif. Mini-projets chaque semaine + projet final (portfolio, e-commerce simple ou dashboard) + déploiement sur GitHub Pages/Netlify.',
    duration: '4 semaines',
    level: 'Débutant → Intermédiaire',
    highlights: [
      'Architecture moderne et responsive',
      'Mini-projets hebdomadaires et projet final',
      'Déploiement et suivi sur GitHub Pages, Netlify ou Vercel'
    ],
    modules: [
      'Design moderne (HTML5, CSS3, Tailwind) et UX adaptative',
      'JavaScript moderne, APIs et logique métier côté client',
      'Gestion d’état, formulaires et interactions dynamiques',
      'Versionning, tests légers et déploiement continu'
    ],
    objectives: [
      'Construire des interfaces web professionnelles',
      'Améliorer la productivité grâce à des workflows modernes',
      'Livrer un projet déployé et testable',
      'Appliquer de bonnes pratiques Git et CI/CD'
    ],
    audience: 'Débutants motivés, freelances et équipes internes souhaitant réaliser leur présence en ligne.',
    format: ['4 semaines structurées', 'Mini-projets hebdomadaires + suivi personnalisé'],
    deliverables: [
      'Code source de chaque mini-projet',
      'Projet final (portfolio, e-commerce simple ou dashboard)',
      'Projet déployé (GitHub Pages, Netlify ou Vercel)',
      'Certificat de réussite'
    ],
    coverImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'methodologie-recherche',
    title: 'Méthodologie de Recherche : De l’idée à la soutenance',
    subtitle: 'De l’idée à la rédaction & soutenance',
    description:
      'Une formation transversale pour structurer un sujet, construire une problématique, faire une revue de littérature, rédiger un rapport académique solide et préparer une soutenance professionnelle.',
    duration: '2 jours (16h)',
    level: 'DUT à Doctorat',
    highlights: [
      'Structuration de sujet et problématique',
      'Revue de littérature et rédaction académique',
      'Préparation d’une soutenance professionnelle'
    ],
    modules: [
      'Construction de la problématique et cadre théorique',
      'Méthodes de collecte, organisation et revue de littérature',
      'Rédaction de sections clés et mise en forme',
      'Préparation de la soutenance et artefacts collaboratifs'
    ],
    objectives: [
      'Définir une problématique claire et validée',
      'Structurer une revue de littérature rigoureuse',
      'Rédiger un rapport académique professionnel',
      'Préparer la soutenance avec confiance'
    ],
    audience: 'Étudiants DUT à doctorat, chercheurs, chargés de projet académique ou toute personne rédigeant un mémoire/rapport.',
    format: ['Ateliers accélérés sur 2 jours', 'Sessions orientées livrables et modèles'],
    deliverables: [
      'Canevas de mémoire & rapport',
      'Modèles (plan, tableaux, sections)',
      'Checklist de relecture et soutenance',
      'Certificat de formation'
    ],
    coverImage: 'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'pack-office-avance',
    title: 'Pack Office Avancé : Word, Excel & PowerPoint (Productivité Pro)',
    subtitle: 'Word, Excel, PowerPoint – Niveau Avancé (Productivité & Pro)',
    description:
      'Devenez autonome sur Word, Excel et PowerPoint : rédaction professionnelle, tableaux de bord dynamiques et présentations impactantes.',
    duration: '3 jours recommandés (24h) · 2 jours intensifs (16h)',
    level: 'Intermédiaire → Avancé',
    highlights: [
      'Word structuré et automatisé',
      'Excel avancé : formules, TCD et dashboards',
      'PowerPoint storytelling et supports professionnels'
    ],
    modules: [
      'Word structuré, sections avancées et publipostage',
      'Excel analytique, validation, TCD et graphiques',
      'PowerPoint moderne : masques, animations utiles, export'
    ],
    objectives: [
      'Créer des documents Word structurés, prêts à imprimer',
      'Construire des fichiers Excel avancés et automatisés',
      'Concevoir des présentations PowerPoint modernes et alignées',
      'Gagner du temps avec méthodes et modèles pro'
    ],
    audience: 'Étudiants, administratifs, assistants, chefs de projet, entrepreneurs et responsables académiques.',
    format: [
      'Option recommandée : 3 jours (24h)',
      'Option intensive : 2 jours (16h)',
      'Présentiel (salle équipée), exercices pratiques et cas réels'
    ],
    deliverables: [
      'Templates Word (rapport, PV, lettre, mémoire)',
      'Modèles Excel (budget, suivi projet, tableau de bord)',
      'Template PowerPoint (université / entreprise)',
      'Fichiers d’exercices + certificat'
    ],
    schedule: [
      {
        title: 'Jour 1 — Word Avancé',
        items: [
          'Styles & mise en forme professionnelle',
          'Sections, en-têtes/pieds et pagination',
          'Sommaire automatique, légendes et table des figures',
          'Citations, notes & bibliographie (base)',
          'Templates et publipostage',
          'Atelier : rapport complet (10 pages) prêt à imprimer'
        ]
      },
      {
        title: 'Jour 2 — Excel Avancé',
        items: [
          'Nettoyage et structuration des données',
          'Formules : SI, SI.CONDITIONS, RECHERCHEX, INDEX/EQUIV, SOMME.SI.ENS, NB.SI.ENS',
          'Validation, listes déroulantes et contrôles',
          'Tableaux croisés dynamiques (TCD)',
          'Graphiques et dashboards simples',
          'Atelier : tableau de bord ventes / suivi projet / budget'
        ]
      },
      {
        title: 'Jour 3 — PowerPoint Avancé',
        items: [
          'Storytelling (problème → solution → résultats)',
          'Masque des diapositives & cohérence visuelle',
          'Graphiques, tableaux, icônes, images et SmartArt soignés',
          'Animations utiles sans surcharge',
          'Export PDF / vidéo et conseils de soutenance',
          'Atelier : présentation finale (10 slides) + pitch'
        ]
      }
    ],
    scheduleTitle: 'Programme (version 3 jours)',
    coverImage: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80'
  }
];
