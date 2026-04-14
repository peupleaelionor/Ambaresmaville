'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { detectIntent, Category } from '@/lib/intentDetector';

const categoryColors: Record<string, string> = {
  'État civil': 'bg-blue-100 text-blue-700 border-blue-200',
  'Scolaire': 'bg-green-100 text-green-700 border-green-200',
  'Réservation': 'bg-purple-100 text-purple-700 border-purple-200',
  'Signalement': 'bg-red-100 text-red-700 border-red-200',
  'Projet urbain': 'bg-amber-100 text-amber-700 border-amber-200',
  'Vie associative': 'bg-pink-100 text-pink-700 border-pink-200',
  'Autre': 'bg-gray-100 text-gray-700 border-gray-200',
};

const categoryFields: Record<Category, { label: string; type: string; required?: boolean }[]> = {
  'État civil': [
    { label: 'Nom', type: 'text', required: true },
    { label: 'Prénom', type: 'text', required: true },
    { label: 'Date de naissance', type: 'date', required: true },
    { label: "Type d'acte", type: 'select', required: true },
    { label: 'Usage', type: 'text' },
  ],
  'Scolaire': [
    { label: "Nom de l'enfant", type: 'text', required: true },
    { label: "Prénom de l'enfant", type: 'text', required: true },
    { label: 'Date de naissance', type: 'date', required: true },
    { label: 'École souhaitée', type: 'text' },
    { label: 'Classe demandée', type: 'text' },
  ],
  'Réservation': [
    { label: 'Salle souhaitée', type: 'text', required: true },
    { label: 'Date souhaitée', type: 'date', required: true },
    { label: 'Horaire de début', type: 'time' },
    { label: 'Nombre de personnes', type: 'number' },
    { label: 'Objet de la réservation', type: 'text' },
  ],
  'Signalement': [
    { label: 'Lieu précis', type: 'text', required: true },
    { label: 'Description du problème', type: 'textarea', required: true },
    { label: "Niveau d'urgence", type: 'select' },
    { label: 'Photo (optionnel)', type: 'file' },
  ],
  'Projet urbain': [
    { label: 'Projet concerné', type: 'text' },
    { label: 'Votre avis', type: 'textarea', required: true },
    { label: 'Suggestions', type: 'textarea' },
  ],
  'Vie associative': [
    { label: "Nom de l'association", type: 'text', required: true },
    { label: 'Type de demande', type: 'text' },
    { label: 'Contact', type: 'email' },
  ],
  'Autre': [
    { label: 'Description', type: 'textarea', required: true },
    { label: 'Contact', type: 'email' },
  ],
};

const categories: Category[] = ['État civil', 'Scolaire', 'Réservation', 'Signalement', 'Projet urbain', 'Vie associative', 'Autre'];

function FormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') || '';
  const initialCategory = (searchParams.get('category') as Category) || 'Autre';

  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<Category>(initialCategory);
  const [intent, setIntent] = useState(query ? detectIntent(query) : null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (query) {
      const detected = detectIntent(query);
      setIntent(detected);
      setCategory(detected.category);
    }
  }, [query]);

  const fields = categoryFields[category] || categoryFields['Autre'];

  const handleSubmit = () => {
    const fakeId = `REQ-2024-00${Math.floor(Math.random() * 90 + 10)}`;
    setSubmitted(true);
    setTimeout(() => {
      router.push(`/suivi?id=${fakeId}`);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">✓</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Demande enregistrée !</h2>
          <p className="text-gray-500">Redirection vers le suivi…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Faire une demande</h1>
          <p className="text-gray-500">Suivez les étapes pour soumettre votre demande</p>
        </div>

        {/* Steps */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {s}
              </div>
              {s < 3 && <div className={`h-0.5 w-12 ${step > s ? 'bg-blue-600' : 'bg-gray-200'}`}></div>}
            </div>
          ))}
          <div className="ml-4 text-sm text-gray-500">
            {step === 1 && 'Identification du besoin'}
            {step === 2 && 'Informations complémentaires'}
            {step === 3 && 'Vérification et envoi'}
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            {query && (
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <p className="text-xs text-gray-400 mb-1">Votre demande</p>
                <p className="text-gray-700 italic">&quot;{query}&quot;</p>
              </div>
            )}

            {intent && (
              <div className="bg-blue-50 rounded-2xl border border-blue-100 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">Synthèse automatique</span>
                  <span className="text-xs text-gray-400">Confiance : {intent.confidence}%</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">{intent.aiSummary}</p>
                <p className="text-xs text-blue-500 italic">Validation agent requise · Les agents gardent la décision finale.</p>
              </div>
            )}

            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <label className="block text-sm font-medium text-gray-700 mb-3">Catégorie de votre demande</label>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium border transition-all text-left ${
                      category === cat
                        ? categoryColors[cat]
                        : 'border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-all"
            >
              Continuer →
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[category]}`}>
                  {category}
                </span>
                <span className="text-sm text-gray-500">Formulaire adapté</span>
              </div>
              <div className="space-y-4">
                {fields.map((field) => (
                  <div key={field.label}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        rows={3}
                        value={formData[field.label] || ''}
                        onChange={e => setFormData(prev => ({ ...prev, [field.label]: e.target.value }))}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : field.type === 'select' ? (
                      <select
                        value={formData[field.label] || ''}
                        onChange={e => setFormData(prev => ({ ...prev, [field.label]: e.target.value }))}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Sélectionner…</option>
                        <option>Naissance</option>
                        <option>Mariage</option>
                        <option>Décès</option>
                        <option>Normal</option>
                        <option>Urgent</option>
                      </select>
                    ) : field.type === 'file' ? (
                      <input
                        type="file"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <input
                        type={field.type}
                        value={formData[field.label] || ''}
                        onChange={e => setFormData(prev => ({ ...prev, [field.label]: e.target.value }))}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                  </div>
                ))}

                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Vos coordonnées</p>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Nom complet"
                      value={contactName}
                      onChange={e => setContactName(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      placeholder="Adresse e-mail"
                      value={contactEmail}
                      onChange={e => setContactEmail(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all"
              >
                ← Retour
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-all"
              >
                Vérifier →
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Récapitulatif de votre demande</h3>

              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Catégorie</span>
                  <span className={`font-medium px-2 py-0.5 rounded-full text-xs border ${categoryColors[category]}`}>{category}</span>
                </div>
                {contactName && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Nom</span>
                    <span className="font-medium text-slate-700">{contactName}</span>
                  </div>
                )}
                {contactEmail && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Email</span>
                    <span className="font-medium text-slate-700">{contactEmail}</span>
                  </div>
                )}
                {Object.entries(formData).filter(([, v]) => v).map(([k, v]) => (
                  <div key={k} className="flex justify-between text-sm">
                    <span className="text-gray-500">{k}</span>
                    <span className="font-medium text-slate-700 text-right max-w-[60%]">{v}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="text-xs font-semibold text-blue-600 mb-1">Priorité suggérée</p>
                <p className="text-sm text-blue-800">Normale · Orientation suggérée : {
                  category === 'État civil' ? 'Service État Civil' :
                  category === 'Scolaire' ? 'Service Scolaire' :
                  category === 'Réservation' ? 'Service Culturel' :
                  category === 'Signalement' ? 'Service Technique' :
                  category === 'Projet urbain' ? 'Service Urbanisme' :
                  'Service Accueil'
                }</p>
                <p className="text-xs text-blue-500 mt-1 italic">Synthèse automatique — validation agent requise</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all"
              >
                ← Retour
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-medium transition-all"
              >
                Envoyer la demande ✓
              </button>
            </div>
            <p className="text-xs text-gray-400 text-center">
              En envoyant, vous acceptez que vos données soient traitées par la mairie d&apos;Ambarès-et-Lagrave · Données simulées
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function FormPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-500">Chargement…</div></div>}>
      <FormContent />
    </Suspense>
  );
}
