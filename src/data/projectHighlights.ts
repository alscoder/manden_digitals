export type ProjectHighlight = {
  slug: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  metrics: string[];
  stack: string[];
  coverImage: string;
  logo: string;
};

const sharedStack = ['React', 'Tailwind', 'Next.js', 'MongoDB', 'JavaScript', 'GitHub'];

export const projectHighlights: ProjectHighlight[] = [
  {
    slug: 'sognini',
    title: 'Sognini | Plateforme immobilière Mali',
    category: 'Immobilier & abonnements',
    description:
      "Sognini accompagne acheteurs, locataires et agents au Mali avec un réseau vérifié de biens, abonnements pros et messagerie instantanée.",
    shortDescription:
      'Marketplace sécurisée pour agents et particuliers avec gestion d’abonnements, recherche de biens et suivi des visites.',
    metrics: ['Biens vérifiés', 'Agents certifiés', 'Messagerie instantanée'],
    stack: sharedStack,
    coverImage: '/sognini.png',
    logo: '/Sogninilogo.png',
  },
  {
    slug: 'ada',
    title: 'ADA Travel & Hospitality',
    category: 'Tourisme haut de gamme',
    description:
      'Expériences Omra et voyages premium avec assistance 24/7, guichets privés et logistique de haut standing.',
    shortDescription:
      'Portail de réservation luxe pour itinéraires Omra personnalisés, logistique et support multilingue.',
    metrics: ['Forfaits Omra', 'Support multilingue', 'Logistique complète'],
    stack: sharedStack,
    coverImage: '/ada.png',
    logo: '/adalogo.webp',
  },
  {
    slug: 'kokajobs',
    title: 'Koka Jobs Consulting',
    category: 'Recrutement & RH',
    description:
      'Koka Jobs connecte talents et entreprises au Mali avec matching intelligent, alertes et gestion fluide des candidatures.',
    shortDescription:
      'Plateforme RH complète : matching intelligent, alertes personnalisées et pipeline de candidatures suivi en temps réel.',
    metrics: ['Matching intelligent', 'Alertes multicanal', 'Dashboard RH'],
    stack: sharedStack,
    coverImage: '/kokajobs.png',
    logo: '/kokalogo.png',
  },
  {
    slug: 'nkodon',
    title: "N'KO DON | Collecte & traduction Bambara",
    category: 'Culture & langues',
    description:
      "N'KO DON préserve les langues Bambara et N'Ko grâce à une archive collaborative, des traductions et des ressources éducatives.",
    shortDescription:
      'Bibliothèque collaborative pour la collecte linguistique, la traduction et la diffusion de ressources culturelles.',
    metrics: ['Corpus collaboratif', 'Traductions Bambara ↔ Français', 'Ressources pédagogiques'],
    stack: sharedStack,
    coverImage: '/nkodon.png',
    logo: '/nkodonlogo.png',
  },
];
