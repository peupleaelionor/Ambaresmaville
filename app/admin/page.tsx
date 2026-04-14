'use client';
import { useState } from 'react';
import { mockRequests, mockKPIs, mockInsights } from '@/lib/mockData';

const statusColors: Record<string, string> = {
  'En cours': 'bg-blue-100 text-blue-700',
  'En traitement': 'bg-amber-100 text-amber-700',
  'Terminé': 'bg-emerald-100 text-emerald-700',
  'En attente': 'bg-gray-100 text-gray-600',
};

export default function AdminPage() {
  const [view, setView] = useState<'citizen' | 'admin'>('admin');

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">Tableau de bord</h1>
            <p className="text-gray-500 text-sm">Données de simulation — prototype de démonstration</p>
          </div>
          <div className="flex bg-white border border-gray-200 rounded-xl p-1 gap-1">
            <button
              onClick={() => setView('citizen')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${view === 'citizen' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Vue citoyen
            </button>
            <button
              onClick={() => setView('admin')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${view === 'admin' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Vue mairie
            </button>
          </div>
        </div>

        {view === 'admin' && (
          <>
            {/* KPIs */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Demandes totales', value: mockKPIs.totalRequests, unit: '', sub: 'simulation', color: 'text-slate-900' },
                { label: 'Cette semaine', value: mockKPIs.weeklyRequests, unit: '', sub: 'simulation', color: 'text-blue-600' },
                { label: 'Délai moyen', value: mockKPIs.avgProcessingDays, unit: ' jours', sub: 'simulation', color: 'text-amber-600' },
                { label: 'Auto-orientées', value: `${mockKPIs.autoOrientedPercent}%`, unit: '', sub: 'simulation', color: 'text-emerald-600' },
                { label: 'Satisfaction', value: `${mockKPIs.satisfactionScore}/5`, unit: '', sub: 'simulation', color: 'text-purple-600' },
                { label: 'Temps économisé', value: `${mockKPIs.timeSavedHours}h`, unit: '', sub: 'estimation indicative', color: 'text-orange-600' },
              ].map((kpi) => (
                <div key={kpi.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <p className="text-xs text-gray-400 mb-1">{kpi.label}</p>
                  <p className={`text-3xl font-bold ${kpi.color} mb-1`}>{kpi.value}{kpi.unit}</p>
                  <p className="text-xs text-gray-400 italic">{kpi.sub}</p>
                </div>
              ))}
            </div>

            {/* Insights */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-lg font-bold text-slate-900">Alertes & tendances</h2>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">IA · simulation</span>
              </div>
              <div className="space-y-3">
                {mockInsights.map(insight => (
                  <div key={insight.id} className={`flex items-center gap-4 p-3 rounded-xl ${
                    insight.type === 'priority' ? 'bg-red-50 border border-red-100' :
                    insight.type === 'trend' ? 'bg-amber-50 border border-amber-100' :
                    'bg-blue-50 border border-blue-100'
                  }`}>
                    <span className="text-xl">{insight.type === 'priority' ? '🔴' : insight.type === 'trend' ? '📈' : '🏗️'}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-800">{insight.message}</p>
                      <p className="text-xs text-gray-500">{insight.category}</p>
                    </div>
                    <span className="text-sm font-bold text-slate-700">{insight.delta}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requests table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                <h2 className="text-lg font-bold text-slate-900">Demandes récentes</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left text-xs font-semibold text-gray-500 px-5 py-3">ID</th>
                      <th className="text-left text-xs font-semibold text-gray-500 px-5 py-3">Type</th>
                      <th className="text-left text-xs font-semibold text-gray-500 px-5 py-3">Titre</th>
                      <th className="text-left text-xs font-semibold text-gray-500 px-5 py-3">Statut</th>
                      <th className="text-left text-xs font-semibold text-gray-500 px-5 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {mockRequests.map(req => (
                      <tr key={req.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-3 text-xs font-mono text-gray-400">{req.id}</td>
                        <td className="px-5 py-3">
                          <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{req.type}</span>
                        </td>
                        <td className="px-5 py-3 text-sm text-slate-700">{req.title}</td>
                        <td className="px-5 py-3">
                          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[req.status] || statusColors['En attente']}`}>
                            {req.status}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-xs text-gray-400">{req.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {view === 'citizen' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Mes demandes</h2>
              <div className="space-y-3">
                {mockRequests.slice(0, 3).map(req => (
                  <div key={req.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div>
                      <p className="text-sm font-medium text-slate-800">{req.title}</p>
                      <p className="text-xs text-gray-400">{req.id} · {req.date}</p>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[req.status] || statusColors['En attente']}`}>
                      {req.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Données simulées</h3>
              <p className="text-sm text-blue-700">Ces données sont fictives dans le cadre de ce prototype de démonstration.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
