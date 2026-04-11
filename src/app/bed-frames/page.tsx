import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export const metadata = { title: 'Bed Frames – Platform, Adjustable & More' };

const frames = [
  { name: 'Premier Adjustable Base', price: 799, desc: 'Head & foot adjustment, USB ports, wireless remote', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80', badge: 'BEST SELLER' },
  { name: 'Classic Adjustable Base', price: 499, desc: 'Simple head adjustment with wired remote', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80' },
  { name: 'Lumea Platform Bed', price: 599, desc: 'Natural wood finish, Japanese-inspired design', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80' },
  { name: 'Mornington Bed Frame', price: 449, desc: 'Upholstered headboard, modern silhouette', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80', badge: 'NEW' },
  { name: 'Bamboo Bed Frame', price: 549, desc: 'Sustainable bamboo, Japanese joinery', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
  { name: 'Foundation Bed Frame', price: 199, desc: 'Steel frame, simple assembly, low profile', image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&q=80' },
];

export default function BedFramesPage() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(160deg, #060d18, #1a3c5e)', color: 'white', padding: '60px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 800, marginBottom: 12 }}>Bed Frames</h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto' }}>From adjustable bases to platform frames. Find the perfect foundation for your Nectar mattress.</p>
      </section>
      <section style={{ padding: '60px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {frames.map(f => (
            <div key={f.name} style={{ background: 'white', borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e7eb' }} className="product-card">
              <div style={{ position: 'relative', aspectRatio: '4/3', background: '#f3f4f6', overflow: 'hidden' }}>
                <Image src={f.image} alt={f.name} fill style={{ objectFit: 'cover' }} className="card-image" sizes="(max-width: 768px) 100vw, 33vw" />
                {f.badge && <span style={{ position: 'absolute', top: 12, left: 12, background: '#1a3c5e', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 20 }}>{f.badge}</span>}
              </div>
              <div style={{ padding: 20 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 4 }}>{f.name}</h3>
                <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 12 }}>{f.desc}</p>
                <span style={{ fontSize: 24, fontWeight: 800, color: '#111827' }}>${f.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
