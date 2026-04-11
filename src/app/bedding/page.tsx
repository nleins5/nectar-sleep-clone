'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const beddingItems = [
  { name: 'Serenity Sleep Bundle', slug: 'serenity-bundle', price: 149, originalPrice: 249, desc: 'Sheet set + mattress protector. Everything you need.', image: 'https://www.bynder.raymourflanigan.com/transform/ProductCarouselImage/065abf05-c40e-436d-b082-b56cbc49ecbd/FW_NEWB_494175000_3000?io=transform:scale,width:3000&quality=80', badge: 'BEST VALUE' },
  { name: 'Serenity Sheet Set', slug: 'serenity-sheets', price: 89, originalPrice: 129, desc: 'Premium bamboo sheets. Breathable and silky soft.', image: 'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=600&q=80' },
  { name: 'Serenity Mattress Protector', slug: 'protector', price: 69, originalPrice: 99, desc: 'Waterproof, breathable, and quiet protection.', image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80' },
  { name: 'Firmer Mattress Topper', slug: 'firmer-topper', price: 199, originalPrice: 349, desc: 'Add extra firm support to any mattress.', image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&q=80' },
  { name: 'Softer Mattress Topper', slug: 'softer-topper', price: 199, originalPrice: 349, desc: 'Add plush comfort layer to any mattress.', image: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&q=80' },
];

const pillows = [
  { name: 'Tri-Comfort Adjustable Pillow', slug: 'tri-comfort-pillow', price: 79, originalPrice: 119, desc: 'Three inserts for customizable height and support.', image: 'https://images.unsplash.com/photo-1584545284372-f22510eb7c26?w=600&q=80', badge: 'TOP RATED' },
  { name: 'Serenity Cooling Pillow', slug: 'serenity-pillow', price: 69, originalPrice: 99, desc: 'Gel-infused memory foam with cooling cover.', image: 'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?w=600&q=80' },
];

function ProductCard({ product }: { product: { name: string; slug: string; price: number; originalPrice: number; desc: string; image: string; badge?: string } }) {
  return (
    <Link href={`/bedding/${product.slug}`} style={{ textDecoration: 'none' }}>
      <div style={{ background: 'white', borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e7eb', cursor: 'pointer' }} className="product-card">
        <div style={{ position: 'relative', aspectRatio: '4/3', background: '#f3f4f6', overflow: 'hidden' }}>
          <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} className="card-image" sizes="(max-width: 768px) 100vw, 33vw" />
          {product.badge && <span style={{ position: 'absolute', top: 12, left: 12, background: '#1a3c5e', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 20 }}>{product.badge}</span>}
        </div>
        <div style={{ padding: 20 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 6 }}>{product.name}</h3>
          <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 12 }}>{product.desc}</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontSize: 24, fontWeight: 800, color: '#111827' }}>${product.price}</span>
            <span style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'line-through' }}>${product.originalPrice}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function BeddingContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');
  const [activeTab, setActiveTab] = useState<'all' | 'bedding' | 'pillows'>(
    typeParam === 'pillows' ? 'pillows' : 'all'
  );

  return (
    <div>
      <section style={{ background: 'linear-gradient(160deg, #060d18, #1a3c5e)', color: 'white', padding: '60px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 800, marginBottom: 12 }}>Bedding & Accessories</h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto' }}>Complete your sleep setup with premium sheets, pillows, toppers and protectors.</p>
      </section>

      <section style={{ padding: '24px 24px 0', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex', background: '#f3f4f6', borderRadius: 12, padding: 4 }}>
            {[
              { key: 'all' as const, label: 'All' },
              { key: 'bedding' as const, label: 'Sheets & Toppers' },
              { key: 'pillows' as const, label: 'Pillows' },
            ].map(tab => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
                padding: '12px 28px', borderRadius: 10, fontSize: 14, fontWeight: 600, border: 'none', cursor: 'pointer',
                background: activeTab === tab.key ? 'white' : 'transparent',
                color: activeTab === tab.key ? '#1a3c5e' : '#6b7280',
                boxShadow: activeTab === tab.key ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.3s',
              }}>{tab.label}</button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 24px 80px', maxWidth: 1200, margin: '0 auto' }}>
        {activeTab === 'all' && (
          <>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111827', marginBottom: 20 }}>Sheets, Toppers & Protectors</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 48 }}>
              {beddingItems.map(p => <ProductCard key={p.slug} product={p} />)}
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111827', marginBottom: 20 }}>Pillows</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              {pillows.map(p => <ProductCard key={p.slug} product={p} />)}
            </div>
          </>
        )}
        {activeTab === 'bedding' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {beddingItems.map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
        )}
        {activeTab === 'pillows' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {pillows.map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
        )}
      </section>
    </div>
  );
}

export default function BeddingPage() {
  return (
    <Suspense fallback={<div style={{ padding: 80, textAlign: 'center' }}>Loading...</div>}>
      <BeddingContent />
    </Suspense>
  );
}
