'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const adjustableBases = [
  { name: 'Classic Adjustable Base', slug: 'classic-adjustable', price: 499, desc: 'Simple head adjustment with wired remote. Whisper-quiet motor.', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80' },
  { name: 'Premier Adjustable Base', slug: 'premier-adjustable', price: 799, desc: 'Head & foot adjustment, USB ports, wireless remote, under-bed lighting.', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80', badge: 'BEST SELLER' },
];

const bedFrames = [
  { name: 'Lumea Platform Bed Frame', slug: 'lumea', price: 599, desc: 'Natural wood finish, Japanese-inspired design with solid slat support.', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80' },
  { name: 'Onita Storage Bed Frame', slug: 'onita', price: 649, desc: 'Built-in storage drawers for extra bedroom organization.', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80', badge: 'NEW' },
  { name: 'Mornington Bed Frame', slug: 'mornington', price: 449, desc: 'Upholstered headboard with modern silhouette. Easy assembly.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
  { name: 'Bamboo Bed Frame', slug: 'bamboo', price: 549, desc: 'Sustainable bamboo, Japanese joinery, low-profile design.', image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&q=80' },
  { name: 'Foundation Bed Frame', slug: 'foundation', price: 199, desc: 'Steel frame, simple 5-minute assembly, low profile.', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80' },
];

function ProductCard({ product }: { product: { name: string; slug: string; price: number; desc: string; image: string; badge?: string } }) {
  return (
    <div style={{ background: 'white', borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e7eb', transition: 'transform 0.3s, box-shadow 0.3s' }} className="product-card">
      <div style={{ position: 'relative', aspectRatio: '4/3', background: '#f3f4f6', overflow: 'hidden' }}>
        <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} className="card-image" sizes="(max-width: 768px) 100vw, 33vw" />
        {product.badge && <span style={{ position: 'absolute', top: 12, left: 12, background: '#1a3c5e', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 20 }}>{product.badge}</span>}
      </div>
      <div style={{ padding: 20 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 6 }}>{product.name}</h3>
        <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 12, lineHeight: 1.5 }}>{product.desc}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 24, fontWeight: 800, color: '#111827' }}>${product.price}</span>
          <span style={{ fontSize: 13, color: '#1a3c5e', fontWeight: 600 }}>Queen size</span>
        </div>
      </div>
    </div>
  );
}

function BedFramesContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');
  const [activeTab, setActiveTab] = useState<'all' | 'adjustable' | 'frames'>(
    typeParam === 'adjustable' ? 'adjustable' : 'all'
  );

  const displayProducts = activeTab === 'adjustable' ? adjustableBases
    : activeTab === 'frames' ? bedFrames
    : [...adjustableBases, ...bedFrames];

  return (
    <div>
      <section style={{ background: 'linear-gradient(160deg, #060d18, #1a3c5e)', color: 'white', padding: '60px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 800, marginBottom: 12 }}>Bed Frames</h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto' }}>From adjustable bases to platform frames. Find the perfect foundation for your Nectar mattress.</p>
      </section>

      {/* Filter tabs */}
      <section style={{ padding: '24px 24px 0', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex', background: '#f3f4f6', borderRadius: 12, padding: 4 }}>
            {[
              { key: 'all' as const, label: 'All' },
              { key: 'adjustable' as const, label: 'Adjustable Bases' },
              { key: 'frames' as const, label: 'Bed Frames' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: '12px 28px', borderRadius: 10, fontSize: 14, fontWeight: 600,
                  border: 'none', cursor: 'pointer',
                  background: activeTab === tab.key ? 'white' : 'transparent',
                  color: activeTab === tab.key ? '#1a3c5e' : '#6b7280',
                  boxShadow: activeTab === tab.key ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                  transition: 'all 0.3s',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: '40px 24px 80px', maxWidth: 1200, margin: '0 auto' }}>
        {activeTab === 'all' && (
          <>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111827', marginBottom: 20 }}>Adjustable Bases</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 48 }}>
              {adjustableBases.map(p => <ProductCard key={p.slug} product={p} />)}
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111827', marginBottom: 20 }}>Bed Frames</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              {bedFrames.map(p => <ProductCard key={p.slug} product={p} />)}
            </div>
          </>
        )}
        {activeTab !== 'all' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {displayProducts.map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
        )}
      </section>
    </div>
  );
}

export default function BedFramesPage() {
  return (
    <Suspense fallback={<div style={{ padding: 80, textAlign: 'center' }}>Loading...</div>}>
      <BedFramesContent />
    </Suspense>
  );
}
