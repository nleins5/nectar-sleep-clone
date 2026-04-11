import Link from 'next/link';
import { reviews } from '@/lib/data';
import { Star, ChevronRight } from 'lucide-react';

export const metadata = { title: 'Customer Reviews | Nectar Sleep' };

const stats = [
  { value: '6M+', label: 'Happy Sleepers' },
  { value: '4.8', label: 'Average Rating' },
  { value: '100K+', label: '5-Star Reviews' },
  { value: '365', label: 'Night Trial' },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={16} fill={i <= rating ? '#f59e0b' : '#e5e7eb'} color={i <= rating ? '#f59e0b' : '#e5e7eb'} />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const avg = reviews.length > 0 ? Math.round((reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) * 10) / 10 : 4.8;

  const distribution = [5, 4, 3, 2, 1].map(star => ({
    star,
    count: reviews.filter(r => Math.round(r.rating) === star).length,
    pct: Math.round((reviews.filter(r => Math.round(r.rating) === star).length / reviews.length) * 100) || (star === 5 ? 82 : star === 4 ? 13 : star === 3 ? 3 : 1),
  }));

  return (
    <div style={{ background: '#f9fafb', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #060d18, #1a3c5e)', color: 'white', padding: '80px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#93c5fd', marginBottom: 12 }}>Real People, Real Results</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 800, marginBottom: 16 }}>What Our Customers Say</h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', maxWidth: 560, margin: '0 auto' }}>
          Over 6 million people trust Nectar Sleep. Here&apos;s why they love it.
        </p>
      </section>

      {/* Stats bar */}
      <section style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '28px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
          {stats.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 32, fontWeight: 900, color: '#1a3c5e' }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#6b7280', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>

        {/* Rating summary + distribution */}
        <div style={{ background: 'white', borderRadius: 20, padding: 40, border: '1px solid #e5e7eb', display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, marginBottom: 40, alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 72, fontWeight: 900, color: '#111827', lineHeight: 1 }}>{avg}</div>
            <StarRow rating={Math.round(avg)} />
            <div style={{ fontSize: 13, color: '#6b7280', marginTop: 8 }}>Based on {reviews.length > 0 ? reviews.length.toLocaleString() : '100,000+'} reviews</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {distribution.map(d => (
              <div key={d.star} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 13, color: '#6b7280', width: 12, textAlign: 'right' }}>{d.star}</span>
                <Star size={12} fill="#f59e0b" color="#f59e0b" />
                <div style={{ flex: 1, height: 10, background: '#f3f4f6', borderRadius: 6, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${d.pct}%`, background: '#f59e0b', borderRadius: 6 }} />
                </div>
                <span style={{ fontSize: 12, color: '#9ca3af', width: 32 }}>{d.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review cards */}
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#111827', marginBottom: 24 }}>
          Verified Customer Reviews
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20, marginBottom: 48 }}>
          {reviews.map(r => (
            <div key={r.id} style={{ background: 'white', borderRadius: 20, padding: 28, border: '1px solid #e5e7eb', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <StarRow rating={r.rating} />
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111827', margin: '12px 0 10px' }}>{r.title}</h3>
              <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.7, marginBottom: 20 }}>
                &ldquo;{r.body}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 16, borderTop: '1px solid #f3f4f6' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#1a3c5e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                  {r.author[0]}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#111827' }}>{r.author}</div>
                  <div style={{ fontSize: 12, color: '#9ca3af' }}>{r.date} {r.verified && '· ✓ Verified Purchase'}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #1a3c5e, #2d5f8a)', borderRadius: 24, padding: '48px 40px', color: 'white', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, marginBottom: 12 }}>
            Join 6 Million Happy Sleepers
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', marginBottom: 28 }}>
            365-night trial. Forever warranty. Free shipping. Zero risk.
          </p>
          <Link href="/mattresses" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 40px', background: 'white', color: '#1a3c5e', borderRadius: 14, fontWeight: 800, fontSize: 16, textDecoration: 'none' }}>
            Shop Mattresses <ChevronRight size={18} />
          </Link>
        </div>

      </div>
    </div>
  );
}
