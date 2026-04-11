import Link from 'next/link';
import Image from 'next/image';

export const metadata = { title: 'Bedroom Sets – Complete Room Solutions' };

const sets = [
  { name: 'Socalle Bedroom Set', slug: 'socalle', price: 1299, desc: 'Modern natural oak finish bedroom set with dresser, nightstand, and bed frame.', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80' },
  { name: 'Calverson Bedroom Set', slug: 'calverson', price: 1499, desc: 'Sleek walnut finish bedroom set with full storage and matching accessories.', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80', badge: 'BEST SELLER' },
];

export default function BedroomSetsPage() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(160deg, #060d18, #1a3c5e)', color: 'white', padding: '60px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 800, marginBottom: 12 }}>Bedroom Sets</h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto' }}>Complete your bedroom in one easy step. Curated sets with bed frame, dresser, and nightstand.</p>
      </section>
      <section style={{ padding: '60px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 24 }}>
          {sets.map(s => (
            <div key={s.slug} style={{ background: 'white', borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e7eb' }} className="product-card">
              <div style={{ position: 'relative', aspectRatio: '16/10', background: '#f3f4f6', overflow: 'hidden' }}>
                <Image src={s.image} alt={s.name} fill style={{ objectFit: 'cover' }} className="card-image" sizes="(max-width: 768px) 100vw, 50vw" />
                {s.badge && <span style={{ position: 'absolute', top: 12, left: 12, background: '#1a3c5e', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 20 }}>{s.badge}</span>}
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#111827', marginBottom: 6 }}>{s.name}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 16, lineHeight: 1.6 }}>{s.desc}</p>
                <span style={{ fontSize: 28, fontWeight: 800, color: '#111827' }}>${s.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
