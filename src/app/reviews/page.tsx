import Link from 'next/link';
import { reviews } from '@/lib/data';
import { Star } from 'lucide-react';

export const metadata = { title: 'Customer Reviews' };

export default function ReviewsPage() {
  const avg = reviews.length > 0 ? Math.round((reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) * 10) / 10 : 0;

  return (
    <div>
      <section style={{ background: '#f9fafb', padding: '60px 24px', textAlign: 'center', borderBottom: '1px solid #e5e7eb' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Customer Reviews</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 4 }}>
          <div style={{ display: 'flex', gap: 2 }}>
            {[1,2,3,4,5].map(i => <Star key={i} size={20} fill={i <= Math.round(avg) ? '#f59e0b' : '#d1d5db'} color={i <= Math.round(avg) ? '#f59e0b' : '#d1d5db'} />)}
          </div>
          <span style={{ fontSize: 24, fontWeight: 800, color: '#111827' }}>{avg}/5</span>
        </div>
        <p style={{ fontSize: 14, color: '#6b7280' }}>Based on 100,000+ verified reviews</p>
      </section>
      <section style={{ padding: '60px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
          {reviews.map(r => (
            <div key={r.id} style={{ background: 'white', borderRadius: 16, padding: 24, border: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', gap: 2, marginBottom: 8 }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill={i <= r.rating ? '#f59e0b' : '#d1d5db'} color={i <= r.rating ? '#f59e0b' : '#d1d5db'} />)}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 8 }}>{r.title}</h3>
              <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>&ldquo;{r.body}&rdquo;</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#1a3c5e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>{r.author[0]}</div>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>{r.author}</span>
                {r.verified && <span style={{ fontSize: 11, color: '#059669', fontWeight: 600 }}>✓ Verified</span>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
