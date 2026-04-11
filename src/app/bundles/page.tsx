import Link from 'next/link';
import Image from 'next/image';
import { Star, ChevronRight } from 'lucide-react';

export const metadata = { title: 'Mattress Bundles – Save Up to 66%' };

const bundles = [
  { name: 'Premier Adjustable Bundle', slug: 'adjustable-frame', desc: 'Nectar mattress + Premier Adjustable Base', price: 1098, originalPrice: 2748, image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80', badge: 'SAVE 60%' },
  { name: 'Mornington Bundle', slug: 'mornington', desc: 'Nectar mattress + Mornington Bed Frame + Headboard', price: 898, originalPrice: 1998, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80', badge: 'BEST VALUE' },
  { name: 'Foundation Bundle', slug: 'foundation', desc: 'Nectar mattress + Steel Foundation Frame', price: 649, originalPrice: 1398, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXQZEGTq7gKJHOcca0385uNWCLCLPIEWHPA&s', badge: 'SAVE 53%' },
  { name: 'Bamboo Bundle', slug: 'bamboo', desc: 'Nectar mattress + Japanese Bamboo Bed Frame', price: 998, originalPrice: 2198, image: 'https://media.residenthome.com/nectarsleep/bundles/bamboo/BambooNaturalWood/MultiBrand_BambooFrame_Render_Angle3Q_ColorNatural-Bamboo.webp', badge: 'ECO-FRIENDLY' },
];

export default function BundlesPage() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(160deg, #060d18, #1a3c5e)', color: 'white', padding: '60px 24px', textAlign: 'center' }}>
        <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#fbbf24', marginBottom: 8, display: 'block' }}>SAVE UP TO 66%</span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 800, marginBottom: 12 }}>Mattress Bundles</h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto' }}>Get everything you need for the perfect sleep setup. Mattress + frame bundles at unbeatable prices.</p>
      </section>

      <section style={{ padding: '60px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {bundles.map(b => {
            const savePct = Math.round(((b.originalPrice - b.price) / b.originalPrice) * 100);
            return (
              <div key={b.slug} style={{ background: 'white', borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e7eb', transition: 'all 0.3s' }} className="product-card">
                <div style={{ position: 'relative', aspectRatio: '4/3', background: '#f3f4f6', overflow: 'hidden' }}>
                  <Image src={b.image} alt={b.name} fill style={{ objectFit: 'cover' }} className="card-image" sizes="(max-width: 768px) 100vw, 25vw" />
                  <span style={{ position: 'absolute', top: 12, left: 12, background: '#dc2626', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 20 }}>{b.badge}</span>
                </div>
                <div style={{ padding: 20 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 4 }}>{b.name}</h3>
                  <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 16, lineHeight: 1.5 }}>{b.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 26, fontWeight: 800, color: '#111827' }}>${b.price}</span>
                    <span style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'line-through' }}>${b.originalPrice}</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#dc2626', fontWeight: 600, marginBottom: 16 }}>Save ${b.originalPrice - b.price} ({savePct}% off)</p>
                  <Link href={`/bundles/${b.slug}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px 24px', background: '#1a3c5e', color: 'white', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                    Shop Bundle <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 60, padding: 40, background: '#eff6ff', borderRadius: 20, textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Build Your Own Bundle</h2>
          <p style={{ fontSize: 16, color: '#4b5563', marginBottom: 24 }}>Mix and match any mattress with your favorite bed frame for custom savings.</p>
          <Link href="/mattresses" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 40px', background: '#1a3c5e', color: 'white', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Start Building <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
