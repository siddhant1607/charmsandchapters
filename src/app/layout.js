import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-accent',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: {
    default: 'Charms & Chapters — Beautiful Things for Your Everyday Story',
    template: '%s | Charms & Chapters',
  },
  description: 'A curated lifestyle boutique offering journals, diaries, bookmarks, bag charms, and waist chains. Thoughtfully curated, affordable, and perfect for gifting. DM to order on Instagram @charms_andd_chapters.',
  keywords: ['journals', 'diaries', 'bookmarks', 'bag charms', 'waist chains', 'gift ideas', 'stationery', 'aesthetic', 'cute notebooks', 'charms and chapters'],
  openGraph: {
    title: 'Charms & Chapters — Beautiful Things for Your Everyday Story',
    description: 'A curated lifestyle boutique. Journals, bookmarks, bag charms, waist chains — made to add a little magic to your everyday.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Charms & Chapters',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charms & Chapters',
    description: 'Beautiful things for your everyday story.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <body style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
