import Link from 'next/link';
import { mattresses } from '@/lib/data';

export const metadata = { title: 'Sale – Up to 50% Off' };

export default function SalePage() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg, #dc2626, #991b1b)', color: 'white', padding: '60px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>Limited Time</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 800, marginBottom: 12 }}>Spring Sale – Up to 50% Off</h1>
        <p style={{ fontSize: 18, opacity: 0.9 }}>Our biggest sale of the season. Shop now before it ends!</p>
      </section>
      <section style={{ padding: '60px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {mattresses.map(m => {
            const save = m.originalPrices['Queen'] - m.prices['Queen'];
            const pct = Math.round((save / m.originalPrices['Queen']) * 100);
            return (
              <Link key={m.id} href={`/mattresses/${m.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ background: 'white', borderRadius: 16, padding: 24, border: '1px solid #e5e7eb' }}>
                  <span style={{ background: '#dc2626', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 8 }}>SAVE {pct}%</span>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: '12px 0 4px' }}>{m.name}</h3>
                  <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 12 }}>{m.tagline}</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span style={{ fontSize: 24, fontWeight: 800, color: '#dc2626' }}>${m.prices['Queen']}</span>
                    <span style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'line-through' }}>${m.originalPrices['Queen']}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
