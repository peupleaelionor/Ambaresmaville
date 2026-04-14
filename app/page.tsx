import Link from 'next/link';
import Logo from '@/components/Logo';

const flashInfos = [
  { type: 'urgent', icon: '🚨', label: 'Alerte', text: 'Coupure d\'eau prévue rue Jean Jaurès — 14 avril de 9h à 17h' },
  { type: 'travaux', icon: '🚧', label: 'Travaux', text: 'Réaménagement du centre-ville : phase 2 en cours' },
  { type: 'circulation', icon: '🚗', label: 'Circulation', text: 'Déviation route de Bordeaux du 15 au 22 avril' },
  { type: 'securite', icon: '🛡️', label: 'Sécurité', text: 'Vigilance météo orange — Recommandations' },
];

const propositionsCitoyennes = [
  { icon: '📋', label: 'Infos', href: '/projets' },
  { icon: '🎯', label: 'Services', href: '/form' },
  { icon: '📅', label: 'Agenda', href: '/projets' },
  { icon: '📚', label: 'Ressources', href: '/chatbot' },
];

const projetsUrbains = [
  { title: 'Tableau de Bord Mairie', desc: 'Vue d\'ensemble des indicateurs clés de la commune', image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=250&fit=crop', link: '/admin' },
  { title: 'Suivi Des Demandes', desc: 'Suivez l\'avancement de toutes les demandes citoyennes', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop', link: '/suivi' },
  { title: 'Gestion Urbaine', desc: 'Projets d\'aménagement et développement de la ville', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop', link: '/projets' },
];

const journeySteps = [
  { id: 'env', label: 'Envoi', active: true },
  { id: 'enreg', label: 'Enregistré', active: true },
  { id: 'trait', label: 'En traitement', active: true },
  { id: 'transm', label: 'Transmis', active: false },
  { id: 'planif', label: 'Planifié', active: false },
  { id: 'validat', label: 'Validation', active: false },
  { id: 'resolut', label: 'Résolution', active: false },
  { id: 'finalis', label: 'Finalisée', active: false },
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

const trustItems = [
  { icon: "🔒", title: "RGPD-ready", desc: "Données hébergées en France, traitement conforme au règlement européen" },
  { icon: "♿", title: "Accessibilité", desc: "Conception inclusive, compatible avec les outils d'assistance" },
  { icon: "👤", title: "Validation humaine", desc: "Chaque décision reste sous contrôle des agents municipaux" },
  { icon: "🏗️", title: "Architecture évolutive", desc: "Intégration progressive avec les systèmes existants" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════════════
          HERO — FLASH INFOS (Full-width green gradient)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="gradient-hero text-white relative overflow-hidden">
        {/* Subtle leaf/city pattern overlay */}
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="relative z-10">
          {/* Logo row inside hero */}
          <div className="max-w-7xl mx-auto px-4 pt-8 pb-4 flex items-center justify-between">
            <Logo size="lg" variant="light" />
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-emerald-200 text-sm">Bordeaux Métropole · Gironde</span>
            </div>
          </div>

          {/* FLASH INFOS Title */}
          <div className="max-w-7xl mx-auto px-4 pb-4">
            <div className="flex items-center gap-3 mb-3">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">FLASH INFOS</h1>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Scrolling flash info text */}
          <div className="max-w-7xl mx-auto px-4 pb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/15 p-5">
              <div className="space-y-3">
                {flashInfos.map((info, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg shrink-0">{info.icon}</span>
                    <div>
                      <span className="text-emerald-300 font-semibold text-sm">{info.label} :</span>{' '}
                      <span className="text-white/90 text-sm">{info.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3-COLUMN CONTENT: Mes démarches | Astuces | AI Assistance
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Mes démarches — Form Card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                <span className="text-emerald-600">📋</span> Mes démarches
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Choisir le service</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                    <option>État civil</option>
                    <option>Urbanisme</option>
                    <option>Scolaire</option>
                    <option>Voirie</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Sujet</label>
                  <input
                    type="text"
                    placeholder="Décrivez votre besoin..."
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Précisez la demande/démarche</label>
                  <textarea
                    rows={3}
                    placeholder="Détaillez votre demande..."
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="preanalyse" className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500" />
                  <label htmlFor="preanalyse" className="text-sm text-gray-600">Pré-analyse IA</label>
                </div>
                <Link
                  href="/form"
                  className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-2.5 rounded-lg font-medium text-sm transition-colors"
                >
                  Soumettre →
                </Link>
              </div>
            </div>

            {/* Astuces Card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                <span className="text-emerald-600">💡</span> Astuces
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Calendrier déchetterie modifié <span className="text-emerald-600 font-semibold">Avril 2026</span>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <h3 className="font-semibold text-gray-800 text-sm mb-2">Permanences</h3>
                  <p className="text-sm text-gray-600">Mairie annexe ouverte le samedi matin. Prenez rendez-vous pour les démarches d&apos;urbanisme et d&apos;état civil.</p>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <h3 className="font-semibold text-gray-800 text-sm mb-2">Économies d&apos;énergie</h3>
                  <p className="text-sm text-gray-600">Ateliers gratuits organisés en mairie. Inscription ouverte pour les résidents d&apos;Ambarès.</p>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <h3 className="font-semibold text-gray-800 text-sm mb-2">Marchés locaux</h3>
                  <p className="text-sm text-gray-600">Marchés fermiers chaque dimanche matin sur la place de la Libération.</p>
                </div>
                <Link href="/projets" className="inline-flex items-center text-emerald-600 text-sm font-semibold hover:text-emerald-700 transition-colors">
                  Toutes les astuces →
                </Link>
              </div>
            </div>

            {/* AI Assistance pour les agents */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                <span className="text-emerald-600">🤖</span> AI Assistance
              </h2>
              <p className="text-sm text-gray-500 mb-5">pour les agents</p>
              <div className="space-y-4">
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">L&apos;assistant IA aide les agents à traiter les demandes plus rapidement grâce à la détection automatique des catégories et la pré-analyse.</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <p className="text-sm text-gray-600 mb-3">Fonctionnalités principales :</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></span>
                      Classification automatique des demandes
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></span>
                      Synthèse et résumé intelligent
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></span>
                      Orientation vers le bon service
                    </li>
                  </ul>
                </div>
                <Link href="/agent" className="inline-flex items-center text-emerald-600 text-sm font-semibold hover:text-emerald-700 transition-colors">
                  Accéder à l&apos;espace agent →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          IMAGE CARDS: Tableau de Bord | Suivi Des Demandes | Gestion Urbaine
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-10 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projetsUrbains.map((projet) => (
              <Link key={projet.title} href={projet.link} className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm card-hover hover:shadow-lg">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={projet.image}
                    alt={projet.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{projet.title}</h3>
                  <p className="text-gray-500 text-sm">{projet.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          JOURNEY TIMELINE — Suivi étape par étape
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Suivi de votre demande</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 hidden md:block" style={{ margin: '0 20px' }}></div>
            <div className="absolute top-4 left-0 h-0.5 bg-emerald-500 hidden md:block" style={{ width: '37.5%', marginLeft: '20px' }}></div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-0 relative z-10">
              {journeySteps.map((step) => (
                <div key={step.id} className="flex flex-col items-center text-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                    step.active
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {step.active ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    ) : (
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    )}
                  </div>
                  <span className={`text-[10px] md:text-xs font-medium ${step.active ? 'text-emerald-700' : 'text-gray-400'}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PROPOSITIONS CITOYENNES — Quick Action Icons
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-10 px-4 bg-slate-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Propositions Citoyennes</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {propositionsCitoyennes.map((item) => (
              <Link key={item.label} href={item.href} className="flex flex-col items-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover hover:shadow-md hover:border-emerald-200 group">
                <span className="text-3xl mb-3">{item.icon}</span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-emerald-700 transition-colors">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          DÉCOUVRIR AMBARÈS
         ═══════════════════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════════════════
          JE PARTICIPE
         ═══════════════════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════════════════
          CONFIANCE & TRANSPARENCE
         ═══════════════════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER
         ═══════════════════════════════════════════════════════════════ */}
      <footer className="bg-navy text-gray-400 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Info */}
            <div>
              <div className="mb-4">
                <Logo size="md" variant="light" />
              </div>
              <p className="text-sm text-gray-500">Portail Citoyen Intelligent — Plateforme municipale au service des Ambarésiens.</p>
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
            <p className="text-xs text-gray-600">© 2026 Ambarès-et-Lagrave — Portail Citoyen Intelligent · Données simulées · RGPD en cours de conformité</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
