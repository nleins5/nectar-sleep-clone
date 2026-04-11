import Link from 'next/link';
import { MapPin, Phone, Clock } from 'lucide-react';
import Image from 'next/image';

export const metadata = { title: 'Find a Store Near You' };

export default function StoresPage() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(160deg, #060d18, #1a3c5e)', color: 'white', padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 800, marginBottom: 12 }}>Try Us In Person</h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto' }}>Visit one of our 4,365+ partner stores to try the full Nectar lineup before you buy.</p>
      </section>
      <section style={{ padding: '60px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ background: '#f3f4f6', borderRadius: 16, padding: 48, textAlign: 'center', marginBottom: 48 }}>
          <MapPin size={48} color="#1a3c5e" style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Store Locator</h2>
          <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 24 }}>Enter your zip code to find Nectar mattresses near you.</p>
          <div style={{ display: 'flex', maxWidth: 400, margin: '0 auto', gap: 8 }}>
            <input type="text" placeholder="Enter ZIP code" style={{ flex: 1, padding: '14px 20px', borderRadius: 12, border: '1px solid #d1d5db', fontSize: 15 }} />
            <button style={{ padding: '14px 28px', background: '#1a3c5e', color: 'white', borderRadius: 12, fontWeight: 600, border: 'none', cursor: 'pointer' }}>Search</button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {['Ashley HomeStore', 'Mattress Firm', 'Rooms To Go', 'Big Lots', 'City Furniture', 'RC Willey'].map(store => (
            <div key={store} style={{ padding: 24, borderRadius: 12, border: '1px solid #e5e7eb', textAlign: 'center' }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: '#111827', marginBottom: 4 }}>{store}</h3>
              <p style={{ fontSize: 13, color: '#6b7280' }}>Multiple locations</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
