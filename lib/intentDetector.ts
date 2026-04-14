export type Category = 'État civil' | 'Scolaire' | 'Réservation' | 'Signalement' | 'Projet urbain' | 'Vie associative' | 'Autre';

interface Intent {
  category: Category;
  confidence: number;
  suggestedFields: string[];
  aiSummary: string;
}

const keywords: Record<Category, string[]> = {
  'État civil': ['naissance', 'mariage', 'décès', 'acte', 'état civil', 'extrait', 'certificat', 'livret'],
  'Scolaire': ['école', 'inscription', 'cantine', 'enfant', 'primaire', 'maternelle', 'scolaire', 'classe'],
  'Réservation': ['salle', 'réserver', 'réservation', 'louer', 'location', 'terrain', 'gymnase', 'fête'],
  'Signalement': ['problème', 'signaler', 'cassé', 'défaillant', 'nid de poule', 'éclairage', 'voirie', 'travaux', 'dégradé'],
  'Projet urbain': ['gare', 'travaux', 'urbanisme', 'aménagement', 'projet', 'ZAC', 'quartier', 'construction'],
  'Vie associative': ['association', 'club', 'subvention', 'événement', 'manifestation', 'culturel'],
  'Autre': [],
};

export function detectIntent(text: string): Intent {
  const lower = text.toLowerCase();
  let bestCategory: Category = 'Autre';
  let bestScore = 0;

  for (const [category, words] of Object.entries(keywords) as [Category, string[]][]) {
    const score = words.filter(w => lower.includes(w)).length;
    if (score > bestScore) {
      bestScore = score;
      bestCategory = category;
    }
  }

  return {
    category: bestCategory,
    confidence: Math.min(95, 60 + bestScore * 15),
    suggestedFields: getFields(bestCategory),
    aiSummary: generateSummary(text, bestCategory),
  };
}

function getFields(category: Category): string[] {
  const fields: Record<Category, string[]> = {
    'État civil': ['Nom', 'Prénom', 'Date de naissance', "Type d'acte", 'Usage'],
    'Scolaire': ["Nom de l'enfant", 'Date de naissance', 'École souhaitée', 'Classe'],
    'Réservation': ['Salle souhaitée', 'Date', 'Horaire', 'Nombre de personnes', 'Objet'],
    'Signalement': ['Lieu', 'Description', 'Photo (optionnel)', 'Urgence'],
    'Projet urbain': ['Projet concerné', 'Avis', 'Suggestions'],
    'Vie associative': ['Association', 'Type de demande', 'Contact'],
    'Autre': ['Description', 'Contact'],
  };
  return fields[category];
}

function generateSummary(text: string, category: Category): string {
  return `Demande classée dans la catégorie "${category}" — Le système a identifié votre besoin et pré-rempli le formulaire adapté. Un agent municipal traitera votre demande dans les meilleurs délais.`;
}
