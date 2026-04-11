import Link from 'next/link';
import Image from 'next/image';

export const metadata = { title: 'Bedding – Sheets, Pillows & Toppers' };

const products = [
  { name: 'Serenity Sleep Bundle', price: 149, originalPrice: 249, desc: 'Sheet set + mattress protector. Everything you need.', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80', badge: 'BEST VALUE' },
  { name: 'Serenity Sheet Set', price: 89, originalPrice: 129, desc: 'Premium bamboo sheets. Breathable and silky soft.', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80' },
  { name: 'Serenity Mattress Protector', price: 69, originalPrice: 99, desc: 'Waterproof, breathable, and quiet protection.', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80' },
  { name: 'Firmer Mattress Topper', price: 199, originalPrice: 349, desc: 'Add extra firm support to any mattress.', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80' },
  { name: 'Tri-Comfort Adjustable Pillow', price: 79, originalPrice: 119, desc: 'Three inserts for customizable height and support.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', badge: 'TOP RATED' },
  { name: 'Serenity Cooling Pillow', price: 69, originalPrice: 99, desc: 'Gel-infused memory foam with cooling cover.', image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&q=80' },
];

export default function BeddingPage() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(160deg, #060d18, #1a3c5e)', color: 'white', padding: '60px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 800, marginBottom: 12 }}>Bedding & Accessories</h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto' }}>Complete your sleep setup with premium sheets, pillows, toppers and protectors.</p>
      </section>
      <section style={{ padding: '60px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {products.map(p => (
            <div key={p.name} style={{ background: 'white', borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e7eb' }} className="product-card">
              <div style={{ position: 'relative', aspectRatio: '4/3', background: '#f3f4f6', overflow: 'hidden' }}>
                <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} className="card-image" sizes="(max-width: 768px) 100vw, 33vw" />
                {p.badge && <span style={{ position: 'absolute', top: 12, left: 12, background: '#1a3c5e', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 20 }}>{p.badge}</span>}
              </div>
              <div style={{ padding: 20 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 4 }}>{p.name}</h3>
                <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 12 }}>{p.desc}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontSize: 24, fontWeight: 800, color: '#111827' }}>${p.price}</span>
                  <span style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'line-through' }}>${p.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
