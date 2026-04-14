import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Portail Citoyen Intelligent — Ambarès-et-Lagrave',
  description: 'Le portail intelligent au service des Ambarésiens · Démarches, projets, participation citoyenne',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-white min-h-screen font-sans antialiased">
        <div className="bg-emerald-800 text-emerald-100 text-center text-xs py-1.5 px-4 font-medium">
          ⚠️ Prototype de démonstration — Conserver l&apos;identité locale, moderniser l&apos;expérience
        </div>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
