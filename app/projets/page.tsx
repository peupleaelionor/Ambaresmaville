'use client';
import { useState } from 'react';
import { mockProjects } from '@/lib/mockData';

const categoryColors: Record<string, string> = {
  'Mobilités': 'bg-blue-100 text-blue-700',
  'Urbanisme': 'bg-purple-100 text-purple-700',
  'Cadre de vie': 'bg-green-100 text-green-700',
};

const phaseColors: Record<string, string> = {
  'Études': 'bg-amber-100 text-amber-700',
  'Conception': 'bg-orange-100 text-orange-700',
  'Travaux': 'bg-red-100 text-red-700',
  'Réalisation': 'bg-emerald-100 text-emerald-700',
};

export default function ProjetsPage() {
  const [filter, setFilter] = useState('Tous');
  const [feedbackOpen, setFeedbackOpen] = useState<string | null>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [submitted, setSubmitted] = useState<string[]>([]);

  const categories = ['Tous', ...Array.from(new Set(mockProjects.map(p => p.category)))];
  const filtered = filter === 'Tous' ? mockProjects : mockProjects.filter(p => p.category === filter);

  const handleFeedback = (id: string) => {
    setSubmitted(prev => [...prev, id]);
    setFeedbackOpen(null);
    setFeedbackText('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Projets de la ville</h1>
          <p className="text-gray-500">Suivez l&apos;avancement des grands projets municipaux d&apos;Ambarès-et-Lagrave</p>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(proj => (
            <div key={proj.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">{proj.title}</h2>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{proj.area}</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[proj.category]}`}>
                    {proj.category}
                  </span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${phaseColors[proj.phase]}`}>
                    {proj.phase}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-5">{proj.description}</p>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                  <span>Avancement</span>
                  <span className="font-semibold text-slate-700">{proj.progress}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all"
                    style={{ width: `${proj.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-3 mb-5 text-xs">
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-gray-400 mb-0.5">Début</p>
                  <p className="font-medium text-slate-700">{proj.startDate}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-gray-400 mb-0.5">Fin prévue</p>
                  <p className="font-medium text-slate-700">{proj.endDate}</p>
                </div>
              </div>

              <p className="text-xs text-gray-400 mb-4">
                Dernière mise à jour : {proj.lastUpdate} · {proj.feedbackCount} avis citoyens
              </p>

              {/* Actions */}
              {submitted.includes(proj.id) ? (
                <div className="text-center text-sm text-emerald-600 font-medium py-2">
                  ✓ Merci pour votre retour !
                </div>
              ) : feedbackOpen === proj.id ? (
                <div className="space-y-2">
                  <textarea
                    rows={2}
                    placeholder="Votre avis sur ce projet…"
                    value={feedbackText}
                    onChange={e => setFeedbackText(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => setFeedbackOpen(null)}
                      className="flex-1 border border-gray-200 text-gray-500 py-2 rounded-lg text-sm hover:bg-gray-50 transition-all"
                    >
                      Annuler
                    </button>
                    <button
                      onClick={() => handleFeedback(proj.id)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-all"
                    >
                      Envoyer
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setFeedbackOpen(proj.id)}
                  className="w-full border border-blue-200 text-blue-600 hover:bg-blue-50 py-2.5 rounded-xl text-sm font-medium transition-all"
                >
                  Donner mon avis
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
