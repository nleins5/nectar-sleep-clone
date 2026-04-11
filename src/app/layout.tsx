import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: 'Nectar Sleep – Best Mattress Online | 365-Night Trial & Forever Warranty', template: '%s | Nectar Sleep' },
  description: 'At Nectar Sleep, we focus on one thing only – the most comfortable bed possible. Shop memory foam & hybrid mattresses with a 365-night trial and forever warranty.',
  keywords: ['mattress', 'memory foam', 'hybrid mattress', 'sleep', 'nectar', 'bed frame'],
  openGraph: {
    title: 'Nectar Sleep – Best Mattress Online',
    description: 'Shop award-winning memory foam & hybrid mattresses. 365-night trial. Forever warranty. Free shipping.',
    url: 'https://nectarsleep.com',
    siteName: 'Nectar Sleep',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
