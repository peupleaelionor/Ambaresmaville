import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Portail Citoyen — Ambarès-et-Lagrave',
  description: 'Le portail intelligent au service des Ambarésiens',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 min-h-screen font-sans antialiased">
        <div className="bg-amber-400 text-amber-900 text-center text-xs py-1.5 px-4 font-medium">
          ⚠️ Prototype de démonstration — non connecté aux systèmes officiels
        </div>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
