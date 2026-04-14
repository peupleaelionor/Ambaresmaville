'use client';
import { mockKPIs, mockInsights, mockProjects } from '@/lib/mockData';

const topPriorities = [
  { rank: 1, title: 'Traitement des inscriptions scolaires', urgency: 'Haute', category: 'Scolaire', detail: 'Hausse de 23% des demandes — délai moyen à surveiller' },
  { rank: 2, title: 'Signalements techniques non résolus', urgency: 'Haute', category: 'Signalement', detail: '3 signalements prioritaires en attente depuis plus de 48h' },
  { rank: 3, title: 'Communication sur les travaux gare', urgency: 'Moyenne', category: 'Projet urbain', detail: "12 retours citoyens demandant plus d'informations" },
  { rank: 4, title: 'Gestion des réservations de salles', urgency: 'Normale', category: 'Réservation', detail: 'Pic de demandes anticipé pour le mois de février' },
];

const citizenConcerns = [
  { category: 'Scolaire', count: 34, trend: '+23%', sentiment: '😊' },
  { category: 'État civil', count: 28, trend: '+5%', sentiment: '😐' },
  { category: 'Signalement', count: 22, trend: '-8%', sentiment: '😟' },
  { category: 'Réservation', count: 19, trend: '+12%', sentiment: '😊' },
  { category: 'Projet urbain', count: 15, trend: '+40%', sentiment: '😐' },
];

const urgencyColors: Record<string, string> = {
  'Haute': 'bg-red-100 text-red-700 border-red-200',
  'Moyenne': 'bg-amber-100 text-amber-700 border-amber-200',
  'Normale': 'bg-green-100 text-green-700 border-green-200',
};

const projectSentiments = [
  { proj: mockProjects[0], positive: 52, neutral: 28, concerned: 20 },
  { proj: mockProjects[1], positive: 65, neutral: 22, concerned: 13 },
  { proj: mockProjects[2], positive: 48, neutral: 35, concerned: 17 },
  { proj: mockProjects[3], positive: 38, neutral: 42, concerned: 20 },
];

export default function ElusPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
            ⭐ Vue Élus — Données de simulation
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Vision Élus</h1>
          <p className="text-gray-500">Tableau de bord stratégique · Données indicatives · Prototype de démonstration</p>
        </div>

        {/* KPIs Executive */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Demandes cette semaine', value: mockKPIs.weeklyRequests, unit: '', icon: '📨' },
            { label: 'Délai moyen de traitement', value: `${mockKPIs.avgProcessingDays}j`, unit: '', icon: '⏱️' },
            { label: "Taux d'auto-orientation", value: `${mockKPIs.autoOrientedPercent}%`, unit: '', icon: '🎯' },
            { label: 'Satisfaction citoyenne', value: `${mockKPIs.satisfactionScore}/5`, unit: '', icon: '⭐' },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
              <div className="text-3xl mb-2">{kpi.icon}</div>
              <p className="text-3xl font-bold text-slate-900 mb-1">{kpi.value}{kpi.unit}</p>
              <p className="text-xs text-gray-500">{kpi.label}</p>
              <p className="text-xs text-gray-300 mt-1 italic">simulation</p>
            </div>
          ))}
        </div>

        {/* Top Priorities */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Priorités de la semaine</h2>
          <div className="space-y-3">
            {topPriorities.map((p) => (
              <div key={p.rank} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {p.rank}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800">{p.title}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{p.detail}</p>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${urgencyColors[p.urgency]}`}>
                  {p.urgency}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Citizen concerns */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Préoccupations citoyennes</h2>
            <div className="space-y-3">
              {citizenConcerns.map((c) => (
                <div key={c.category} className="flex items-center gap-3">
                  <span className="text-xl">{c.sentiment}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700">{c.category}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">{c.count} demandes</span>
                        <span className={`text-xs font-medium ${c.trend.startsWith('+') ? 'text-red-500' : 'text-emerald-600'}`}>
                          {c.trend}
                        </span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${(c.count / 34) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-5">
              <h2 className="text-xl font-bold text-slate-900">Signaux & tendances</h2>
              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">IA · simulation</span>
            </div>
            <div className="space-y-4">
              {mockInsights.map(insight => (
                <div key={insight.id} className="p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-slate-800">{insight.message}</p>
                    <span className="text-sm font-bold text-blue-600 ml-2">{insight.delta}</span>
                  </div>
                  <p className="text-xs text-gray-400">{insight.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project sentiment */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Projets urbains — Sentiment citoyen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectSentiments.map(({ proj, positive, neutral, concerned }) => (
              <div key={proj.id} className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-slate-800">{proj.title}</h3>
                  <span className="text-xs text-gray-400">{proj.feedbackCount} avis</span>
                </div>
                <div className="flex h-2 rounded-full overflow-hidden gap-0.5 mb-2">
                  <div className="bg-emerald-400 rounded-l-full" style={{ width: `${positive}%` }}></div>
                  <div className="bg-gray-300" style={{ width: `${neutral}%` }}></div>
                  <div className="bg-amber-400 rounded-r-full" style={{ width: `${concerned}%` }}></div>
                </div>
                <div className="flex gap-3 text-xs text-gray-500">
                  <span>😊 {positive}% favorable</span>
                  <span>😐 {neutral}% neutre</span>
                  <span>🤔 {concerned}% préoccupé</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicateurs de pilotage */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 text-white">
          <h2 className="text-xl font-bold mb-1">Indicateurs de pilotage</h2>
          <p className="text-slate-400 text-sm mb-5">Projection indicative · simulation</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Taux de résolution', value: '87%', sub: 'objectif 90%' },
              { label: 'Temps moyen agent', value: '-35%', sub: 'vs. sans portail' },
              { label: 'Satisfaction globale', value: '4.2/5', sub: 'cible 4.5/5' },
              { label: 'Demandes traitées', value: mockKPIs.totalRequests.toString(), sub: 'ce trimestre' },
            ].map(kpi => (
              <div key={kpi.label} className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-white mb-1">{kpi.value}</p>
                <p className="text-xs text-slate-300">{kpi.label}</p>
                <p className="text-xs text-slate-500 mt-0.5 italic">{kpi.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
