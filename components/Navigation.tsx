'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const navLinks = [
  { href: '/', label: 'Accueil', icon: '🏠' },
  { href: '/form', label: 'Mes démarches', icon: '📋' },
  { href: '/suivi', label: 'Suivre ma demande', icon: '📡' },
  { href: '/chatbot', label: 'Assistant', icon: '💬' },
  { href: '/projets', label: 'Découvrir', icon: '🏗️' },
  { href: '/agent', label: 'Espace agent', icon: '🏛️', roles: ['agent'] },
  { href: '/admin', label: 'Tableau de bord', icon: '📊', roles: ['admin'] },
  { href: '/elus', label: 'Vision élus', icon: '⭐', roles: ['admin'] },
];

const mobileBottomLinks = [
  { href: '/', label: 'Accueil', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" /></svg>
  )},
  { href: '/chatbot', label: 'Participer', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  )},
  { href: '/projets', label: 'Agenda', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  )},
  { href: '/elus', label: 'Mot Maire', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
  )},
  { href: '/form', label: 'Contacts', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  )},
];

type Role = 'citizen' | 'agent' | 'admin';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [role, setRole] = useState<Role>('citizen');
  const pathname = usePathname();

  const visibleLinks = navLinks.filter(l => !l.roles || l.roles.includes(role));

  return (
    <>
      {/* Desktop & Mobile Top Nav — Dark Navy */}
      <nav className="bg-navy sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Logo size="md" variant="light" />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {visibleLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-white/15 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <select
                value={role}
                onChange={e => setRole(e.target.value as Role)}
                className="hidden sm:block text-xs border border-white/20 rounded-lg px-2 py-1.5 text-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="citizen" className="text-gray-900">👤 Citoyen</option>
                <option value="agent" className="text-gray-900">🏛️ Agent</option>
                <option value="admin" className="text-gray-900">⭐ Mairie / Élus</option>
              </select>

              <Link
                href="/form"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Se connecter
              </Link>

              <Link
                href="/chatbot"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors"
              >
                S&apos;inscrire
              </Link>

              {/* Search */}
              <button
                className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Rechercher"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-gray-300 hover:bg-white/10 rounded-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile slide-down menu */}
          {mobileOpen && (
            <div className="lg:hidden py-3 border-t border-white/10">
              {visibleLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium mb-1 ${
                    pathname === link.href
                      ? 'bg-white/15 text-white'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <span className="text-base">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 px-3">
                <select
                  value={role}
                  onChange={e => setRole(e.target.value as Role)}
                  className="w-full text-xs border border-white/20 rounded-lg px-3 py-2 text-gray-300 bg-transparent focus:outline-none"
                >
                  <option value="citizen" className="text-gray-900">👤 Citoyen</option>
                  <option value="agent" className="text-gray-900">🏛️ Agent</option>
                  <option value="admin" className="text-gray-900">⭐ Mairie / Élus</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Bottom Tab Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 pb-safe">
        <div className="flex items-center justify-around h-16">
          {mobileBottomLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 h-full text-[10px] font-medium transition-colors ${
                pathname === link.href
                  ? 'text-emerald-700'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
