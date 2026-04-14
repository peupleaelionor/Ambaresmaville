'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { detectIntent } from '@/lib/intentDetector';

const suggestions = [
  "Je souhaite obtenir un acte de naissance",
  "Inscrire mon enfant à l'école",
  "Réserver la salle des fêtes",
  "Signaler un problème sur la voirie",
  "Obtenir des informations sur les travaux de la gare",
];

const categoryColors: Record<string, string> = {
  'État civil': 'bg-emerald-100 text-emerald-700',
  'Scolaire': 'bg-green-100 text-green-700',
  'Réservation': 'bg-purple-100 text-purple-700',
  'Signalement': 'bg-red-100 text-red-700',
  'Projet urbain': 'bg-amber-100 text-amber-700',
  'Vie associative': 'bg-pink-100 text-pink-700',
  'Autre': 'bg-gray-100 text-gray-700',
};

export default function SmartInput() {
  const [value, setValue] = useState('');
  const [intent, setIntent] = useState<ReturnType<typeof detectIntent> | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (v: string) => {
    setValue(v);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (v.length > 10) {
      setAnalyzing(true);
      timeoutRef.current = setTimeout(() => {
        const result = detectIntent(v);
        setIntent(result);
        setAnalyzing(false);
      }, 800);
    } else {
      setIntent(null);
      setAnalyzing(false);
    }
  };

  const handleSubmit = () => {
    if (value.trim()) {
      const params = new URLSearchParams({ q: value, category: intent?.category || 'Autre' });
      router.push(`/form?${params.toString()}`);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
          <div className="flex-1 px-5 py-4">
            <textarea
              value={value}
              onChange={e => handleChange(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder="Expliquez votre besoin… ex: Je voudrais inscrire mon enfant à l'école primaire"
              className="w-full text-white placeholder-white/50 resize-none outline-none text-base leading-relaxed bg-transparent"
              rows={2}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
            />
          </div>
          <div className="pr-3">
            <button
              onClick={handleSubmit}
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-3 rounded-xl font-medium text-sm transition-all active:scale-95 shadow-lg"
            >
              Envoyer →
            </button>
          </div>
        </div>

        {showSuggestions && !value && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 p-2 z-10">
            <p className="text-xs text-gray-400 px-3 py-1">Exemples de demandes fréquentes</p>
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => { handleChange(s); setShowSuggestions(false); }}
                className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {analyzing && (
        <div className="mt-3 flex items-center gap-2 text-sm text-white/70 px-2">
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </div>
          <span>Analyse en cours…</span>
        </div>
      )}

      {intent && !analyzing && (
        <div className="mt-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[intent.category]}`}>
                {intent.category}
              </span>
              <span className="text-xs text-white/60">Confiance : {intent.confidence}%</span>
            </div>
            <span className="text-xs text-emerald-400 font-medium">✓ Catégorie détectée</span>
          </div>
          <p className="text-sm text-white/80 mb-3">{intent.aiSummary}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {intent.suggestedFields.map((f: string) => (
              <span key={f} className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-md border border-white/20">
                {f}
              </span>
            ))}
          </div>
          <p className="text-xs text-white/40 italic">Synthèse automatique — validation agent requise</p>
        </div>
      )}
    </div>
  );
}
