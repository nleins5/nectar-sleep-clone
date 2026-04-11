import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { CartProvider } from '@/context/CartContext';

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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
