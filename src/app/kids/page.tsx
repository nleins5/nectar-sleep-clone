import Link from 'next/link';
import Image from 'next/image';

export const metadata = { title: 'Kids Mattresses & Bedroom Sets' };

const products = [
  { name: 'Nectar Kids Mattress', price: 299, desc: 'Dual-sided design grows with your child. CertiPUR-US certified foam.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', badge: 'AGES 3-12' },
  { name: 'Onita Kids Bedroom Set', price: 699, desc: 'Kids bed frame with built-in storage drawers + mattress', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80' },
  { name: 'Onita Platform Bed with Storage', price: 349, desc: 'Durable kids platform bed with side drawers', image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&q=80' },
];

export default function KidsPage() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: 'white', padding: '60px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 800, marginBottom: 12 }}>Sleep Solutions for Kids</h1>
        <p style={{ fontSize: 18, opacity: 0.85, maxWidth: 600, margin: '0 auto' }}>Safe, comfortable, and designed to grow with your child. All with our 365-night trial.</p>
      </section>
      <section style={{ padding: '60px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {products.map(p => (
            <div key={p.name} style={{ background: 'white', borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e7eb' }} className="product-card">
              <div style={{ position: 'relative', aspectRatio: '4/3', background: '#f3f4f6', overflow: 'hidden' }}>
                <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} className="card-image" sizes="(max-width: 768px) 100vw, 33vw" />
                {p.badge && <span style={{ position: 'absolute', top: 12, left: 12, background: '#7c3aed', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 20 }}>{p.badge}</span>}
              </div>
              <div style={{ padding: 20 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 4 }}>{p.name}</h3>
                <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 12, lineHeight: 1.5 }}>{p.desc}</p>
                <span style={{ fontSize: 24, fontWeight: 800, color: '#111827' }}>${p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
