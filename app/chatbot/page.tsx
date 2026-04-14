'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type Message = {
  id: number;
  from: 'user' | 'bot';
  text: string;
  showAction?: boolean;
};

const suggestions = [
  "Comment inscrire mon enfant à l'école ?",
  "Quels sont les horaires de la mairie ?",
  "Où en sont les travaux près de la gare ?",
  "Comment signaler un problème ?",
  "Comment réserver une salle municipale ?",
];

const botResponses: Record<string, { text: string; showAction?: boolean }> = {
  default: { text: "Je suis l'assistant du portail citoyen d'Ambarès-et-Lagrave. Je peux vous aider avec vos démarches administratives, vous informer sur les projets de la ville, et vous orienter vers le bon service. Comment puis-je vous aider ?", showAction: false },
  école: { text: "Pour inscrire votre enfant à l'école, vous pouvez utiliser notre formulaire en ligne. Vous aurez besoin du livret de famille, d'un justificatif de domicile et du carnet de santé. Voulez-vous que je lance le formulaire d'inscription scolaire pour vous ?", showAction: true },
  horaires: { text: "La mairie d'Ambarès-et-Lagrave est ouverte du lundi au vendredi de 8h30 à 12h00 et de 13h30 à 17h30, ainsi que le samedi matin de 9h00 à 12h00. En dehors de ces horaires, ce portail reste disponible 24h/24.", showAction: false },
  gare: { text: "Les travaux autour de la gare de La Grave s'inscrivent dans le projet de préparation du RER Métropolitain horizon 2028. Le projet est actuellement en phase d'études (35% d'avancement). La dernière mise à jour date du 10 janvier 2024. Souhaitez-vous consulter la fiche complète du projet ?", showAction: true },
  problème: { text: "Pour signaler un problème (voirie, éclairage, mobilier urbain…), vous pouvez utiliser notre formulaire de signalement. Précisez le lieu et une description du problème. Les demandes urgentes sont traitées en priorité par le service technique.", showAction: true },
  salle: { text: "Pour réserver une salle municipale, plusieurs espaces sont disponibles : la salle des fêtes, la salle polyvalente et le gymnase. La réservation se fait via notre formulaire en ligne. Indiquez la date, le nombre de personnes et l'objet de la réservation.", showAction: true },
};

function getResponse(text: string): { text: string; showAction?: boolean } {
  const lower = text.toLowerCase();
  if (lower.includes('école') || lower.includes('scolaire') || lower.includes('enfant') || lower.includes('inscri')) return botResponses.école;
  if (lower.includes('horaire') || lower.includes('ouvert') || lower.includes('heure')) return botResponses.horaires;
  if (lower.includes('gare') || lower.includes('travaux') || lower.includes('chantier')) return botResponses.gare;
  if (lower.includes('problème') || lower.includes('signal') || lower.includes('cassé') || lower.includes('éclairage')) return botResponses.problème;
  if (lower.includes('salle') || lower.includes('réserv')) return botResponses.salle;
  return { text: `Merci pour votre message. Je vais vous orienter vers le bon service municipal. Vous pouvez également utiliser notre formulaire de demande pour un traitement plus rapide. Y a-t-il autre chose que je puisse vous préciser ?`, showAction: true };
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: 'bot',
      text: "Bonjour ! Je suis l'assistant virtuel du portail citoyen d'Ambarès-et-Lagrave. Je suis là pour vous orienter et répondre à vos questions. Comment puis-je vous aider aujourd'hui ?",
      showAction: false,
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), from: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const response = getResponse(text);
      const botMsg: Message = {
        id: Date.now() + 1,
        from: 'bot',
        text: response.text,
        showAction: response.showAction,
      };
      setMessages(prev => [...prev, botMsg]);
      setTyping(false);
    }, 1200 + Math.random() * 600);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">🤖</span>
          </div>
          <div>
            <h1 className="font-bold text-slate-900">Assistant Mairie</h1>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              <span className="text-xs text-gray-500">En ligne · Réponse automatique</span>
            </div>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <div className="bg-white border-b border-gray-50 px-4 py-3">
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="whitespace-nowrap text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-colors flex-shrink-0"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-6 px-4">
        <div className="max-w-2xl mx-auto space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'} gap-3`}>
              {msg.from === 'bot' && (
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">A</span>
                </div>
              )}
              <div className={`max-w-[80%] ${msg.from === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-2`}>
                <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.from === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-sm'
                    : 'bg-white border border-gray-100 text-gray-800 rounded-tl-sm shadow-sm'
                }`}>
                  {msg.text}
                </div>
                {msg.showAction && msg.from === 'bot' && (
                  <Link
                    href="/form"
                    className="text-xs bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    → Transformer en demande officielle
                  </Link>
                )}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm">A</span>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                <div className="flex gap-1 items-center h-4">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-100 px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs text-gray-400 text-center mb-3 italic">
            Réponses automatiques à titre indicatif — L&apos;IA assiste les équipes, elle ne remplace pas le lien humain.
          </p>
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') sendMessage(input); }}
              placeholder="Posez votre question…"
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => sendMessage(input)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium text-sm transition-all"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
