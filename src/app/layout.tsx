import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'MIRAGE — Mapping the Global Radio Landscape',
  description:
    'The Music Informatics for Radio Across the GlobE (MIRAGE) project enables users to analyze, visualize, and export metadata from thousands of stations across the globe.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-white">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
