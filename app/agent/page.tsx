'use client';
import { useState } from 'react';
import { mockRequests } from '@/lib/mockData';

type Tab = 'Toutes' | 'Urgent' | 'En attente' | 'Traitées';

const sentimentColors: Record<string, string> = {
  'urgent': 'bg-red-100 text-red-700',
  'positif': 'bg-emerald-100 text-emerald-700',
  'neutre': 'bg-gray-100 text-gray-600',
};

const categoryColors: Record<string, string> = {
  'État civil': 'bg-blue-100 text-blue-700',
  'Scolaire': 'bg-green-100 text-green-700',
  'Réservation': 'bg-purple-100 text-purple-700',
  'Signalement': 'bg-red-100 text-red-700',
  'Projet urbain': 'bg-amber-100 text-amber-700',
  'Vie associative': 'bg-pink-100 text-pink-700',
  'Autre': 'bg-gray-100 text-gray-700',
};

const services = ['Service État Civil', 'Service Scolaire', 'Service Technique', 'Service Culturel', 'Service Urbanisme', 'Service Accueil'];

export default function AgentPage() {
  const [tab, setTab] = useState<Tab>('Toutes');
  const [selected, setSelected] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [assignedTo, setAssignedTo] = useState<Record<string, string>>({});
  const [treated, setTreated] = useState<Set<string>>(new Set());
  const [drafts, setDrafts] = useState<Record<string, string>>({});

  const filtered = mockRequests.filter(r => {
    if (tab === 'Urgent') return r.priority === 'Urgent';
    if (tab === 'En attente') return r.status === 'En cours';
    if (tab === 'Traitées') return r.status === 'Terminé';
    return true;
  });

  const selectedReq = mockRequests.find(r => r.id === selected);

  const defaultDraft = (req: typeof mockRequests[0]) =>
    `Bonjour,\n\nNous avons bien reçu votre demande "${req.title}" (référence ${req.id}).\n\nVotre dossier est actuellement en cours de traitement par le ${assignedTo[req.id] || req.assignedTo}. Nous vous tiendrons informé de l'avancement.\n\nCordialement,\nLa Mairie d'Ambarès-et-Lagrave`;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100 px-4 py-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">🏛️</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Espace Agent Municipal</h1>
          </div>
          <p className="text-gray-500 text-sm ml-11">Gestion et traitement des demandes citoyennes · Validation humaine requise</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Inbox */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <div className="flex gap-1 flex-wrap">
                  {(['Toutes', 'Urgent', 'En attente', 'Traitées'] as Tab[]).map(t => (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        tab === t ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="divide-y divide-gray-50">
                {filtered.map(req => (
                  <button
                    key={req.id}
                    onClick={() => setSelected(req.id)}
                    className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${selected === req.id ? 'bg-blue-50' : ''}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-gray-400">{req.id}</span>
                      <div className="flex gap-1">
                        {req.priority === 'Urgent' && (
                          <span className="text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full font-medium">URGENT</span>
                        )}
                        <span className={`text-xs px-1.5 py-0.5 rounded-full ${sentimentColors[req.sentiment] || sentimentColors.neutre}`}>
                          {req.sentiment}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-slate-800 mb-1 text-left">{req.title}</p>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[req.type] || 'bg-gray-100 text-gray-600'}`}>
                        {req.type}
                      </span>
                      <span className="text-xs text-gray-400">{req.date}</span>
                    </div>
                    {treated.has(req.id) && (
                      <span className="text-xs text-emerald-600 font-medium mt-1 block">✓ Traité</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Detail */}
          <div className="lg:col-span-3">
            {selectedReq ? (
              <div className="space-y-4">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-gray-400">{selectedReq.id}</span>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[selectedReq.type]}`}>
                          {selectedReq.type}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">{selectedReq.title}</h2>
                    </div>
                    <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full font-medium border border-amber-200">
                      ⚠ Validation humaine requise
                    </span>
                  </div>

                  {/* AI Summary */}
                  <div className="bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">Synthèse automatique</span>
                    </div>
                    <p className="text-sm text-blue-800 mb-2">{selectedReq.summary}</p>
                    <div className="flex gap-4 text-xs text-blue-600">
                      <span>Priorité suggérée : <strong>{selectedReq.priority}</strong></span>
                      <span>Orientation suggérée : <strong>{selectedReq.assignedTo}</strong></span>
                    </div>
                    <p className="text-xs text-blue-400 mt-2 italic">Les agents gardent la décision finale.</p>
                  </div>

                  {/* Assign service */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Assigner au service</label>
                    <select
                      value={assignedTo[selectedReq.id] || selectedReq.assignedTo}
                      onChange={e => setAssignedTo(prev => ({ ...prev, [selectedReq.id]: e.target.value }))}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {services.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Internal note */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Note interne (non visible du citoyen)</label>
                    <textarea
                      rows={3}
                      value={notes[selectedReq.id] || ''}
                      onChange={e => setNotes(prev => ({ ...prev, [selectedReq.id]: e.target.value }))}
                      placeholder="Ajouter une note…"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  {/* Response draft */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-2">
                      <label className="text-sm font-medium text-gray-700">Réponse proposée</label>
                      <span className="text-xs bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full border border-amber-200">validation agent requise</span>
                    </div>
                    <textarea
                      rows={4}
                      value={drafts[selectedReq.id] !== undefined ? drafts[selectedReq.id] : defaultDraft(selectedReq)}
                      onChange={e => setDrafts(prev => ({ ...prev, [selectedReq.id]: e.target.value }))}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-mono"
                    />
                  </div>

                  <button
                    onClick={() => setTreated(prev => new Set([...prev, selectedReq.id]))}
                    className={`w-full py-3 rounded-xl font-medium text-sm transition-all ${
                      treated.has(selectedReq.id)
                        ? 'bg-emerald-100 text-emerald-700 cursor-default'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`}
                  >
                    {treated.has(selectedReq.id) ? '✓ Marqué comme traité' : 'Marquer comme traité'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
                <span className="text-4xl mb-4 block">📋</span>
                <p className="text-gray-500">Sélectionnez une demande pour voir les détails</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
