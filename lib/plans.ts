export type Plan = {
  id: string;
  name: string;
  price: number;
  limits: {
    prospects: number | 'unlimited';
    users: number | 'unlimited';
    relancesPerMonth: number | 'unlimited';
    appointmentsPerMonth: number | 'unlimited';
    aiGenerationsPerMonth: number | 'unlimited';
  };
  features: string[];
}

export const PLANS: Record<string, Plan> = {
  starter: {
    id: 'starter',
    name: 'STARTER',
    price: 10,
    limits: { prospects: 100, users: 1, relancesPerMonth:20, appointmentsPerMonth:10, aiGenerationsPerMonth:20 },
    features: ['Fonctionnalités essentielles']
  },
  business: {
    id: 'business',
    name: 'BUSINESS',
    price: 30,
    limits: { prospects: 500, users: 3, relancesPerMonth:100, appointmentsPerMonth:50, aiGenerationsPerMonth:100 },
    features: ['Statistiques avancées','Export','Gestion des activités']
  },
  pro: {
    id: 'pro',
    name: 'PRO',
    price: 60,
    limits: { prospects: 2000, users: 10, relancesPerMonth: 'advanced', appointmentsPerMonth:200, aiGenerationsPerMonth:500 },
    features: ['Relances avancées','Gestion d\'équipe','Automatisations','Import/Export']
  },
  unlimited: {
    id: 'unlimited',
    name: 'ILLIMITÉE',
    price: 100,
    limits: { prospects: 'unlimited', users: 'unlimited', relancesPerMonth: 'unlimited', appointmentsPerMonth:'unlimited', aiGenerationsPerMonth:'unlimited' },
    features: ['Toutes les fonctionnalités','Support prioritaire']
  }
}
