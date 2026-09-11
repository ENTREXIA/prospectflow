# ProspectFlow

Prototype local de ProspectFlow — SaaS de gestion de prospects, pipeline, relances, rendez-vous et assistant commercial IA.

Ce dépôt contient une application Next.js + TypeScript en prototype qui fonctionne en local (stockage dans localStorage).

IMPORTANT: Ceci est un prototype. Les paiements, l'IA, et la persistance cloud sont simulés. Les numéros M-Pesa et Orange Money fournis ont été préremplis pour la démo (aucune transaction réelle n'est effectuée).

Installation

1. git clone https://github.com/ENTREXIA/prospectflow.git
2. cd prospectflow
3. npm install
4. npm run dev

Connexion / inscription
- Le prototype utilise le stockage local pour simuler les comptes. Créez un compte via /signup.

Plans et limites
- Toutes les limites sont définies dans lib/plans.ts pour être centralisées.

Simulation de paiement
- /api/simulate-payment simule l'achat d'un abonnement et préremplit les informations de paiement. Aucune intégration réelle n'est faite.

Données de démonstration
- Le prototype charge des données de démonstration au premier démarrage et les stocke dans localStorage.

À compléter ultérieurement
- Intégrer base de données (Postgres), authentification réelle, fournisseur IA (OpenAI), fournisseur de paiement (Stripe / M-Pesa API), envoi de messages (Twilio / WhatsApp Business).
