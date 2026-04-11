import Link from 'next/link';
import { Star, Shield, Truck, RefreshCw, HelpCircle } from 'lucide-react';

export const metadata = { title: 'About Nectar Sleep – Our Story' };

export default function AboutPage() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(160deg, #060d18, #1a3c5e)', color: 'white', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: 14, fontWeight: 600, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Our Story</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 800, marginBottom: 16 }}>We Focus on One Thing Only</h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>The most comfortable bed possible. Everything we develop, design, and test has only one mission — your rest.</p>
        </div>
      </section>
      <section style={{ padding: '80px 24px', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, marginBottom: 24, color: '#111827' }}>Why Nectar?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {[
            { icon: <RefreshCw size={24} color="#1a3c5e" />, title: '365-Night Home Trial', desc: 'Try your mattress for a full year. Not in love? We\'ll pick it up and refund you.' },
            { icon: <Shield size={24} color="#1a3c5e" />, title: 'Forever Warranty™', desc: 'We stand behind our mattresses for as long as you own them.' },
            { icon: <Truck size={24} color="#1a3c5e" />, title: 'Free Shipping & Returns', desc: 'Delivered to your door in a compact box. Free returns if needed.' },
            { icon: <Star size={24} color="#1a3c5e" />, title: '200+ Awards', desc: 'Named best mattress by Good Housekeeping, Forbes, Sleep Foundation & more.' },
          ].map(item => (
            <div key={item.title} style={{ padding: 32, borderRadius: 16, border: '1px solid #e5e7eb' }}>
              <div style={{ marginBottom: 12 }}>{item.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
