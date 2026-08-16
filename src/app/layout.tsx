import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Chemistry Academy`,
    template: `%s — ${site.name}`,
  },
  description:
    'Chemistry learning resources for FSc, MDCAT, ECAT and Fundamentals of Chemistry by Professor Noor Saleem.',
  keywords: [
    'chemistry',
    'FSc',
    'MDCAT',
    'ECAT',
    'chemistry tuition',
    'chemistry notes',
    'chemistry MCQs',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />

        <PageTransition />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}