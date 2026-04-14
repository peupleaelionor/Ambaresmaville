'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { mockRequests } from '@/lib/mockData';

const statusConfig: Record<string, { color: string; bg: string; step: number }> = {
  'En attente': { color: 'text-gray-600', bg: 'bg-gray-100', step: 0 },
  'En cours': { color: 'text-blue-600', bg: 'bg-blue-100', step: 1 },
  'En traitement': { color: 'text-amber-600', bg: 'bg-amber-100', step: 2 },
  'Terminé': { color: 'text-emerald-600', bg: 'bg-emerald-100', step: 3 },
};

const timelineSteps = ['Reçue', 'En cours', 'En traitement', 'Terminée'];

const timelineDates = [
  '15 jan. 2024, 09:14',
  '15 jan. 2024, 11:30',
  '16 jan. 2024, 14:05',
  '',
];

function SuiviContent() {
  const searchParams = useSearchParams();
  const idParam = searchParams.get('id');
  const [searchId, setSearchId] = useState('');
  const [activeId, setActiveId] = useState<string | null>(idParam);

  useEffect(() => {
    if (idParam) setActiveId(idParam);
  }, [idParam]);

  const request = mockRequests.find(r => r.id === activeId) || (activeId ? {
    id: activeId,
    type: 'Autre',
    title: 'Demande en cours de traitement',
    status: 'En cours',
    priority: 'Normal',
    date: new Date().toISOString().split('T')[0],
    summary: 'Votre demande a bien été reçue et sera traitée par un agent municipal.',
    sentiment: 'neutre',
    assignedTo: 'Service Accueil',
  } : null);

  const statusInfo = request ? (statusConfig[request.status] || statusConfig['En cours']) : null;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Suivi de demande</h1>
          <p className="text-gray-500">Consultez l&apos;état de vos demandes en temps réel</p>
        </div>

        {/* Search */}
        {!activeId && (
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">Numéro de votre demande</label>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ex: REQ-2024-001"
                value={searchId}
                onChange={e => setSearchId(e.target.value)}
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyDown={e => { if (e.key === 'Enter' && searchId) setActiveId(searchId); }}
              />
              <button
                onClick={() => { if (searchId) setActiveId(searchId); }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all"
              >
                Rechercher
              </button>
            </div>
          </div>
        )}

        {/* Request detail */}
        {request && statusInfo && (
          <div className="space-y-6 mb-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">{request.id}</p>
                  <h2 className="text-xl font-bold text-slate-900">{request.title}</h2>
                </div>
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${statusInfo.bg} ${statusInfo.color}`}>
                  {request.status}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">Type</p>
                  <p className="font-medium text-slate-700">{request.type}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">Priorité</p>
                  <p className="font-medium text-slate-700">{request.priority}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">Service assigné</p>
                  <p className="font-medium text-slate-700">{request.assignedTo}</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Progression</p>
                <div className="relative">
                  <div className="absolute top-4 left-4 right-4 h-0.5 bg-gray-100 z-0"></div>
                  <div
                    className="absolute top-4 left-4 h-0.5 bg-blue-500 z-0 transition-all"
                    style={{ width: `${(statusInfo.step / 3) * (100 - (8 / 3 * 100 / 100))}%` }}
                  ></div>
                  <div className="flex justify-between relative z-10">
                    {timelineSteps.map((label, i) => (
                      <div key={label} className="flex flex-col items-center gap-2 text-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
                          i <= statusInfo.step
                            ? 'bg-blue-600 border-blue-600 text-white'
                            : 'bg-white border-gray-200 text-gray-400'
                        }`}>
                          {i < statusInfo.step ? '✓' : i + 1}
                        </div>
                        <p className={`text-xs font-medium ${i <= statusInfo.step ? 'text-blue-600' : 'text-gray-400'}`}>{label}</p>
                        {timelineDates[i] && i <= statusInfo.step && (
                          <p className="text-xs text-gray-400">{timelineDates[i]}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-500 mb-1">Résumé</p>
                <p className="text-sm text-gray-700">{request.summary}</p>
                <p className="text-xs text-gray-400 mt-2 italic">Synthèse automatique — Les agents gardent la décision finale.</p>
              </div>
            </div>

            <button
              onClick={() => setActiveId(null)}
              className="text-sm text-blue-600 hover:underline"
            >
              ← Nouvelle recherche
            </button>
          </div>
        )}

        {/* Examples */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4">Demandes récentes</h3>
          <div className="space-y-3">
            {mockRequests.map(req => {
              const si = statusConfig[req.status] || statusConfig['En cours'];
              return (
                <button
                  key={req.id}
                  onClick={() => setActiveId(req.id)}
                  className={`w-full bg-white rounded-2xl border p-4 shadow-sm text-left hover:border-blue-200 transition-all ${
                    activeId === req.id ? 'border-blue-300' : 'border-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-gray-400">{req.id}</span>
                      <span className="text-sm font-medium text-slate-800">{req.title}</span>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${si.bg} ${si.color}`}>{req.status}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{req.date} · {req.assignedTo}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SuiviPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-500">Chargement…</div></div>}>
      <SuiviContent />
    </Suspense>
  );
}
