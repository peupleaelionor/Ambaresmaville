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
        <Navigation />
        <main className="pb-16 md:pb-0">{children}</main>
      </body>
    </html>
  );
}
