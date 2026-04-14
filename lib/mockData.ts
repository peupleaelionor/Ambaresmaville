export const mockRequests = [
  { id: 'REQ-2024-001', type: 'État civil', title: 'Demande d\'acte de naissance', status: 'En cours', priority: 'Normal', date: '2024-01-15', summary: 'Demande d\'acte de naissance pour usage administratif', sentiment: 'neutre', assignedTo: 'Service État Civil' },
  { id: 'REQ-2024-002', type: 'Scolaire', title: 'Inscription école primaire', status: 'En traitement', priority: 'Normal', date: '2024-01-16', summary: 'Inscription d\'un enfant de 6 ans à l\'école Jules Ferry', sentiment: 'positif', assignedTo: 'Service Scolaire' },
  { id: 'REQ-2024-003', type: 'Signalement', title: 'Problème éclairage rue Pasteur', status: 'Terminé', priority: 'Urgent', date: '2024-01-14', summary: 'Lampadaire défaillant depuis 3 jours', sentiment: 'urgent', assignedTo: 'Service Technique' },
  { id: 'REQ-2024-004', type: 'Réservation', title: 'Salle des fêtes - Anniversaire', status: 'En cours', priority: 'Normal', date: '2024-01-17', summary: 'Réservation salle municipale pour événement privé le 15 février', sentiment: 'positif', assignedTo: 'Service Culturel' },
  { id: 'REQ-2024-005', type: 'Projet urbain', title: 'Question sur les travaux gare', status: 'En traitement', priority: 'Normal', date: '2024-01-18', summary: 'Information sur l\'avancement des travaux autour de la gare de La Grave', sentiment: 'neutre', assignedTo: 'Service Urbanisme' },
];

export const mockProjects = [
  { id: 'PROJ-001', title: 'Gare de La Grave', area: 'Quartier gare', description: 'Réaménagement de l\'espace autour de la gare et préparation du RER Métropolitain horizon 2028', phase: 'Études', status: 'En cours', progress: 35, lastUpdate: '2024-01-10', startDate: '2023-06-01', endDate: '2028-12-31', category: 'Mobilités', feedbackCount: 47 },
  { id: 'PROJ-002', title: 'Cœur de ville', area: 'Centre-ville', description: 'Revitalisation du centre-ville avec réaménagement des espaces publics et soutien aux commerces', phase: 'Travaux', status: 'En cours', progress: 58, lastUpdate: '2024-01-12', startDate: '2023-01-01', endDate: '2025-06-30', category: 'Urbanisme', feedbackCount: 82 },
  { id: 'PROJ-003', title: 'Espaces publics', area: 'Commune entière', description: 'Programme de rénovation et végétalisation des espaces publics pour améliorer le cadre de vie', phase: 'Réalisation', status: 'En cours', progress: 72, lastUpdate: '2024-01-08', startDate: '2023-03-01', endDate: '2024-12-31', category: 'Cadre de vie', feedbackCount: 63 },
  { id: 'PROJ-004', title: 'Plan mobilités', area: 'Territoire communal', description: 'Développement des pistes cyclables et amélioration de la mobilité douce en lien avec Bordeaux Métropole', phase: 'Conception', status: 'En cours', progress: 20, lastUpdate: '2024-01-05', startDate: '2024-01-01', endDate: '2026-12-31', category: 'Mobilités', feedbackCount: 29 },
];

export const mockNotifications = {
  citizen: [
    { id: 1, type: 'update', title: 'Votre demande REQ-2024-001 a été mise à jour', date: '2024-01-16', read: false },
    { id: 2, type: 'received', title: 'Demande REQ-2024-004 reçue et enregistrée', date: '2024-01-17', read: true },
  ],
  agent: [
    { id: 1, type: 'new', title: 'Nouvelle demande prioritaire — Signalement technique', date: '2024-01-18', read: false },
    { id: 2, type: 'pending', title: 'Validation en attente — REQ-2024-002', date: '2024-01-17', read: false },
  ],
  mayor: [
    { id: 1, type: 'alert', title: 'Hausse des demandes scolaires cette semaine (+23%)', date: '2024-01-18', read: false },
    { id: 2, type: 'project', title: 'Nouveau retour citoyen sur le projet Gare de La Grave', date: '2024-01-17', read: true },
  ],
};

export const mockKPIs = {
  totalRequests: 127,
  weeklyRequests: 23,
  avgProcessingDays: 3.2,
  autoOrientedPercent: 78,
  satisfactionScore: 4.2,
  timeSavedHours: 42,
};

export const mockInsights = [
  { id: 1, type: 'trend', message: 'Demandes scolaires en hausse cette semaine', category: 'Scolaire', delta: '+23%' },
  { id: 2, type: 'priority', message: 'Priorité : état civil — délai moyen dépassé', category: 'État civil', delta: '+2j' },
  { id: 3, type: 'project', message: 'Plusieurs habitants évoquent les travaux autour de la gare', category: 'Projet urbain', delta: '12 avis' },
];
