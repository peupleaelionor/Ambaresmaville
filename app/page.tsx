import Link from 'next/link';
import SmartInput from '@/components/SmartInput';

const flashInfos = [
  { type: 'urgent', icon: '🚨', label: 'Alerte', text: 'Coupure d\'eau prévue rue Jean Jaurès — 14 avril de 9h à 17h' },
  { type: 'travaux', icon: '🚧', label: 'Travaux', text: 'Réaménagement du centre-ville : phase 2 en cours' },
  { type: 'circulation', icon: '🚗', label: 'Circulation', text: 'Déviation route de Bordeaux du 15 au 22 avril' },
  { type: 'securite', icon: '🛡️', label: 'Sécurité', text: 'Vigilance météo orange — Recommandations' },
];

const decouvrirItems = [
  { icon: '🏗️', title: 'Projets de la ville', desc: 'Suivez l\'avancement des grands projets municipaux en temps réel', link: '/projets', cta: 'Voir les projets de la ville' },
  { icon: '🏛️', title: 'Services municipaux', desc: 'Tous les services de la mairie accessibles en un clic', link: '/form', cta: 'Accéder aux services' },
  { icon: '🏊', title: 'Équipements', desc: 'Salles, terrains, piscine, médiathèque... Réservez et consultez', link: '/form', cta: 'Voir les équipements' },
  { icon: '🎭', title: 'Vie locale', desc: 'Associations, événements culturels et sportifs à Ambarès', link: '/projets', cta: 'Découvrir' },
];

const participeItems = [
  { icon: '📊', title: 'Consultations', desc: 'Donnez votre avis sur les projets de la ville', color: 'from-emerald-500 to-emerald-700' },
  { icon: '💬', title: 'Avis citoyens', desc: 'Partagez vos retours sur les services publics', color: 'from-teal-500 to-teal-700' },
  { icon: '🏙️', title: 'Projets urbains', desc: 'Participez à la co-construction de votre ville', color: 'from-green-500 to-green-700' },
  { icon: '📢', title: 'Signalements', desc: 'Signalez un problème dans votre quartier', color: 'from-cyan-600 to-teal-700' },
  { icon: '💡', title: 'Boîte à idées', desc: 'Proposez vos idées pour améliorer Ambarès', color: 'from-emerald-600 to-green-800' },
];

const demarchesItems = [
  { icon: '📋', title: 'Formulaire intelligent', desc: 'Décrivez votre besoin, le formulaire s\'adapte automatiquement', link: '/form', cta: 'Faire une demande' },
  { icon: '📡', title: 'Suivi de demande', desc: 'Consultez l\'avancement de vos démarches en temps réel', link: '/suivi', cta: 'Suivre ma demande' },
  { icon: '💬', title: 'Assistant mairie', desc: 'Posez vos questions et obtenez des réponses instantanées', link: '/chatbot', cta: 'Poser une question' },
];

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
      {/* Flash Infos Banner */}
      <section className="bg-emerald-800 border-b border-emerald-700">
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-emerald-200 text-xs font-bold uppercase tracking-wider">Flash infos</span>
            </div>
            <div className="overflow-hidden">
              <div className="flex gap-8 text-sm text-white animate-marquee whitespace-nowrap">
                {flashInfos.map((info, i) => (
                  <span key={i} className="inline-flex items-center gap-2">
                    <span>{info.icon}</span>
                    <span className="text-emerald-300 font-semibold">{info.label}</span>
                    <span className="text-emerald-50">{info.text}</span>
                    {i < flashInfos.length - 1 && <span className="text-emerald-600 mx-2">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero — Premium Municipal */}
      <section className="gradient-hero text-white py-20 px-4 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Municipal Logo Area */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-lg leading-tight">Ambarès-et-Lagrave</div>
                <div className="text-emerald-300 text-xs font-medium">Bordeaux Métropole · Gironde</div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Votre mairie,<br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">plus intelligente</span>
          </h1>
          <p className="text-lg text-emerald-100/80 mb-10 max-w-2xl mx-auto">
            Un accès simple et moderne aux démarches, aux projets de la ville et aux services municipaux d&apos;Ambarès-et-Lagrave.
          </p>

          <SmartInput />

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href="/form" className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-xl font-medium transition-all text-sm shadow-lg shadow-emerald-500/25">
              Mes démarches
            </Link>
            <Link href="/suivi" className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl font-medium transition-all text-sm backdrop-blur-sm">
              Suivre ma demande
            </Link>
            <Link href="/chatbot" className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl font-medium transition-all text-sm backdrop-blur-sm">
              Poser une question
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Cards — Découvrir / Participer / Démarches / Suivi */}
      <section className="py-14 px-4 bg-white -mt-8 relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🔍', title: 'Découvrir', desc: 'Projets, services et vie locale', link: '/projets', color: 'bg-emerald-50 border-emerald-200 hover:border-emerald-400' },
              { icon: '🤝', title: 'Je participe', desc: 'Consultations et avis citoyens', link: '/chatbot', color: 'bg-teal-50 border-teal-200 hover:border-teal-400' },
              { icon: '📋', title: 'Mes démarches', desc: 'Formulaires et demandes en ligne', link: '/form', color: 'bg-green-50 border-green-200 hover:border-green-400' },
              { icon: '📡', title: 'Suivre ma demande', desc: 'Statut et avancement en temps réel', link: '/suivi', color: 'bg-cyan-50 border-cyan-200 hover:border-cyan-400' },
            ].map((card) => (
              <Link key={card.title} href={card.link} className={`block p-5 rounded-2xl border-2 ${card.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-md group`}>
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{card.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                <span className="inline-block mt-3 text-emerald-600 text-xs font-semibold group-hover:translate-x-1 transition-transform">Accéder →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Infos Intelligent — Detailed */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
              <span className="text-xl">📢</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Flash Infos Intelligent</h2>
              <p className="text-gray-500 text-sm">Alertes et informations en temps réel pour les Ambarésiens</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {flashInfos.map((info, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-4 card-hover hover:shadow-md">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-xl">{info.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">{info.label}</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{info.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Découvrir Ambarès */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Découvrir Ambarès</h2>
            <p className="text-gray-500">Projets, services et vie locale de votre commune</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {decouvrirItems.map((item) => (
              <Link key={item.title} href={item.link} className="group bg-white rounded-2xl border border-gray-100 p-6 card-hover hover:shadow-lg hover:border-emerald-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm mb-3">{item.desc}</p>
                    <span className="text-emerald-600 text-sm font-semibold group-hover:translate-x-1 inline-block transition-transform">{item.cta} →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Je Participe */}
      <section className="py-14 px-4 gradient-section text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Je participe</h2>
            <p className="text-emerald-100">Votre voix compte. Participez à la vie de votre commune.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {participeItems.map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all cursor-pointer group">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-emerald-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="inline-flex gap-3">
              <Link href="/chatbot" className="bg-white text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-xl font-medium text-sm transition-all">
                Donner mon avis
              </Link>
              <Link href="/form" className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl font-medium text-sm transition-all">
                Signaler un problème
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mes Démarches */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Mes démarches</h2>
            <p className="text-gray-500">Simplifiez vos demandes grâce à l&apos;intelligence artificielle</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {demarchesItems.map((item) => (
              <Link key={item.title} href={item.link} className="group bg-slate-50 rounded-2xl p-6 card-hover hover:shadow-md hover:bg-emerald-50 border border-transparent hover:border-emerald-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
                <span className="text-emerald-600 text-sm font-semibold group-hover:translate-x-1 inline-block transition-transform">{item.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Citizen Journey */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Du besoin citoyen à la vision municipale</h2>
            <p className="text-gray-500">Un parcours fluide et transparent pour tous les acteurs</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-emerald-200 z-0" style={{ margin: '0 40px' }}></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {journeySteps.map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
                    {step.num}
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Quality */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Améliorer la qualité du service public local</h2>
            <p className="text-gray-500">Des bénéfices concrets pour les citoyens et les agents</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityCards.map((card) => (
              <div key={card.title} className="flex gap-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 card-hover hover:shadow-md hover:border-emerald-200">
                <span className="text-3xl">{card.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-gray-500 text-sm">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progressive Deployment */}
      <section className="py-14 px-4 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Déploiement progressif possible</h2>
            <p className="text-emerald-200">Une approche par phases pour une adoption réussie</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase) => (
              <div key={phase.num} className={`rounded-2xl p-6 border ${phase.current ? 'bg-white/20 border-white/40' : 'bg-white/10 border-white/20'}`}>
                <div className="text-4xl font-bold text-emerald-300 mb-2">{phase.num}</div>
                <h3 className="font-bold text-white mb-2">{phase.label}</h3>
                <p className="text-emerald-100 text-sm">{phase.desc}</p>
                {phase.current && (
                  <span className="mt-3 inline-block bg-white text-emerald-700 text-xs font-medium px-3 py-1 rounded-full">En cours</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Layer */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Confiance, transparence et sobriété</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              L&apos;IA assiste les équipes, elle ne remplace pas le lien humain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {trustItems.map((item) => (
              <div key={item.title} className="flex gap-4 bg-slate-50 rounded-2xl p-6">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
            <p className="text-emerald-800 font-semibold text-lg italic">
              &quot;L&apos;IA assiste les équipes, elle ne remplace pas le lien humain.&quot;
            </p>
            <p className="text-emerald-600 text-sm mt-2">Les agents gardent la décision finale.</p>
          </div>
        </div>
      </section>

      {/* Before/After Identity Tagline */}
      <section className="py-10 px-4 bg-slate-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
            <span className="text-emerald-600 font-bold text-sm">✦</span>
            <p className="text-gray-700 font-medium text-sm">
              Conserver l&apos;identité locale, moderniser l&apos;expérience.
            </p>
            <span className="text-emerald-600 font-bold text-sm">✦</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Info */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-base">A</span>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Ambarès-et-Lagrave</div>
                  <div className="text-emerald-400 text-xs">Portail Citoyen Intelligent</div>
                </div>
              </div>
              <p className="text-sm text-gray-500">Prototype de démonstration — Plateforme municipale intelligente au service des Ambarésiens.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Accès rapides</h4>
              <div className="space-y-2">
                <Link href="/form" className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors">Mes démarches</Link>
                <Link href="/suivi" className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors">Suivre ma demande</Link>
                <Link href="/projets" className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors">Voir les projets de la ville</Link>
                <Link href="/chatbot" className="block text-sm text-gray-400 hover:text-emerald-400 transition-colors">Donner mon avis</Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Contact</h4>
              <div className="space-y-2 text-sm text-gray-500">
                <p>Mairie d&apos;Ambarès-et-Lagrave</p>
                <p>Place de la République</p>
                <p>33440 Ambarès-et-Lagrave</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-xs text-gray-600">© 2026 Ambarès-et-Lagrave — Portail Citoyen Intelligent · Prototype · Données simulées · RGPD en cours de conformité</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
