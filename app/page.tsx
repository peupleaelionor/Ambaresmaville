import Link from 'next/link';
import SmartInput from '@/components/SmartInput';

const journeySteps = [
  { num: 1, title: "L'habitant exprime son besoin", desc: "En langage naturel, sans formulaire complexe" },
  { num: 2, title: "Le portail structure la demande", desc: "L'IA détecte l'intention et pré-remplit le formulaire adapté" },
  { num: 3, title: "L'agent reçoit une synthèse claire", desc: "Demande catégorisée, résumée et orientée automatiquement" },
  { num: 4, title: "Le dossier est suivi de façon transparente", desc: "Le citoyen peut consulter l'avancement en temps réel" },
  { num: 5, title: "La mairie obtient une vision globale", desc: "Tableaux de bord et indicateurs pour les élus et managers" },
];

const qualityCards = [
  { icon: "🎯", title: "Demandes mieux orientées", desc: "Les demandes arrivent directement au bon service, sans reroutage manuel" },
  { icon: "✏️", title: "Moins d'erreurs de saisie", desc: "Les formulaires pré-remplis réduisent les erreurs et les allers-retours" },
  { icon: "👁️", title: "Suivi transparent", desc: "Le citoyen est informé à chaque étape du traitement" },
  { icon: "⏱️", title: "Temps gagné", desc: "Moins de temps passé en accueil téléphonique et en saisie manuelle" },
];

const phases = [
  { num: "01", label: "Prototype", desc: "Démonstration des fonctionnalités sur données simulées", current: true },
  { num: "02", label: "Pilote ciblé", desc: "Déploiement sur 2-3 services avec équipe pilote", current: false },
  { num: "03", label: "Déploiement élargi", desc: "Ouverture progressive à l'ensemble des services", current: false },
];

const trustItems = [
  { icon: "🔒", title: "RGPD-ready", desc: "Données hébergées en France, traitement conforme au règlement européen" },
  { icon: "♿", title: "Accessibilité", desc: "Conception inclusive, compatible avec les outils d'assistance" },
  { icon: "👤", title: "Validation humaine", desc: "Chaque décision reste sous contrôle des agents municipaux" },
  { icon: "🏗️", title: "Architecture évolutive", desc: "Intégration progressive avec les systèmes existants" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            Bordeaux Métropole · Ambarès-et-Lagrave
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Le portail intelligent<br />
            <span className="text-blue-400">au service des Ambarésiens</span>
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Un accès simple aux démarches, aux projets de la ville et aux services municipaux.
          </p>
          <SmartInput />
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href="/form" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all text-sm">
              Faire une demande
            </Link>
            <Link href="/suivi" className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl font-medium transition-all text-sm">
              Suivre ma demande
            </Link>
            <Link href="/chatbot" className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl font-medium transition-all text-sm">
              Poser une question
            </Link>
          </div>
        </div>
      </section>

      {/* Impact cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Gagner du temps", desc: "Accédez à vos démarches en quelques clics, sans file d'attente" },
              { icon: "📡", title: "Mieux informés", desc: "Suivez l'avancement de vos demandes en temps réel" },
              { icon: "🤝", title: "Service réactif", desc: "Les agents reçoivent des demandes structurées et mieux orientées" },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citizen Journey */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Du besoin citoyen à la vision municipale</h2>
            <p className="text-gray-500">Un parcours fluide et transparent pour tous les acteurs</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-blue-100 z-0" style={{ margin: '0 40px' }}></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {journeySteps.map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
                    {step.num}
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Quality */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Améliorer la qualité du service public local</h2>
            <p className="text-gray-500">Des bénéfices concrets pour les citoyens et les agents</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityCards.map((card) => (
              <div key={card.title} className="flex gap-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <span className="text-3xl">{card.icon}</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{card.title}</h3>
                  <p className="text-gray-500 text-sm">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progressive Deployment */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Déploiement progressif possible</h2>
            <p className="text-blue-200">Une approche par phases pour une adoption réussie</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase) => (
              <div key={phase.num} className={`rounded-2xl p-6 border ${phase.current ? 'bg-white/20 border-white/40' : 'bg-white/10 border-white/20'}`}>
                <div className="text-4xl font-bold text-blue-200 mb-2">{phase.num}</div>
                <h3 className="font-bold text-white mb-2">{phase.label}</h3>
                <p className="text-blue-100 text-sm">{phase.desc}</p>
                {phase.current && (
                  <span className="mt-3 inline-block bg-white text-blue-600 text-xs font-medium px-3 py-1 rounded-full">En cours</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Layer */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Confiance, transparence et sobriété</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              L&apos;IA assiste les équipes, elle ne remplace pas le lien humain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {trustItems.map((item) => (
              <div key={item.title} className="flex gap-4 bg-slate-50 rounded-2xl p-6">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center bg-blue-50 rounded-2xl p-8">
            <p className="text-blue-800 font-semibold text-lg italic">
              &quot;L&apos;IA assiste les équipes, elle ne remplace pas le lien humain.&quot;
            </p>
            <p className="text-blue-600 text-sm mt-2">Les agents gardent la décision finale.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-white font-semibold">Ambarès-et-Lagrave</span>
          </div>
          <p className="text-sm mb-2">Portail Citoyen Intelligent — Prototype de démonstration</p>
          <p className="text-xs text-slate-500">© 2024 — Non connecté aux systèmes officiels · Données simulées · RGPD en cours de conformité</p>
        </div>
      </footer>
    </div>
  );
}
