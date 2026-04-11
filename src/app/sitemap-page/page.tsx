import Link from 'next/link';

export const metadata = { title: 'Sitemap' };

const sections = [
  { title: 'Shop', links: [
    { label: 'All Mattresses', href: '/mattresses' },
    { label: 'Sale', href: '/sale' },
    { label: 'Financing', href: '/financing' },
  ]},
  { title: 'Mattresses', links: [
    { label: 'Nectar Classic', href: '/mattresses/nectar-classic' },
    { label: 'Nectar Premier', href: '/mattresses/nectar-premier' },
    { label: 'Nectar Classic Hybrid', href: '/mattresses/nectar-classic-hybrid' },
    { label: 'Nectar Premier Hybrid', href: '/mattresses/nectar-premier-hybrid' },
  ]},
  { title: 'Company', links: [
    { label: 'About Us', href: '/about' },
    { label: 'Customer Reviews', href: '/reviews' },
    { label: 'Store Locator', href: '/stores' },
  ]},
  { title: 'Support', links: [
    { label: 'Help Center', href: '/help' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ]},
  { title: 'Account', links: [
    { label: 'Sign In', href: '/account' },
    { label: 'Shopping Cart', href: '/cart' },
    { label: 'Mattress Quiz', href: '/quiz' },
  ]},
];

export default function SitemapPage() {
  return (
    <div style={{ padding: '60px 24px', maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: '#111827', marginBottom: 32 }}>Sitemap</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32 }}>
        {sections.map(s => (
          <div key={s.title}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 12 }}>{s.title}</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {s.links.map(l => (
                <li key={l.label}><Link href={l.href} style={{ fontSize: 14, color: '#4b5563', textDecoration: 'none' }}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
