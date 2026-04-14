'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

type Role = 'citizen' | 'agent' | 'admin';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [role, setRole] = useState<Role>('citizen');
  const pathname = usePathname();

  const visibleLinks = navLinks.filter(l => !l.roles || l.roles.includes(role));

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Municipal Logo Area */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-base">A</span>
            </div>
            <div>
              <div className="font-bold text-gray-900 text-sm leading-tight">Ambarès-et-Lagrave</div>
              <div className="text-[11px] text-emerald-700 leading-tight font-medium">Portail Citoyen Intelligent</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {visibleLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2.5">
            <select
              value={role}
              onChange={e => setRole(e.target.value as Role)}
              className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="citizen">👤 Citoyen</option>
              <option value="agent">🏛️ Agent</option>
              <option value="admin">⭐ Mairie / Élus</option>
            </select>
            <button
              className="relative p-2 text-gray-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              aria-label="Notifications"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
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

        {/* Mobile Nav - App-like bottom feel */}
        {mobileOpen && (
          <div className="md:hidden py-3 border-t border-gray-100">
            {visibleLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium mb-1 ${
                  pathname === link.href
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-base">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
