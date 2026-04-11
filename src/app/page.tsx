'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ChevronRight, Shield, Truck, RefreshCw, MessageCircle, Mail, Phone } from 'lucide-react';
import { mattresses, reviews } from '@/lib/data';
import Newsletter from '@/components/Newsletter';

/* ── Countdown Timer ── */
function Countdown() {
  const [time, setTime] = useState({ d: 2, h: 14, m: 33, s: 0 });
  useEffect(() => {
    const t = setInterval(() => {
      setTime(prev => {
        let { d, h, m, s } = prev;
        s--; if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; d--; }
        if (d < 0) d = 0;
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="flex items-center gap-1.5">
      {[
        { label: 'DAYS', value: pad(time.d) },
        { label: 'HRS', value: pad(time.h) },
        { label: 'MIN', value: pad(time.m) },
        { label: 'SEC', value: pad(time.s) },
      ].map((item, i) => (
        <div key={item.label} className="flex items-center gap-1.5">
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 10, padding: '8px 14px', minWidth: 60, backdropFilter: 'blur(8px)',
          }}>
            <span style={{ fontSize: 26, fontWeight: 800, lineHeight: 1, fontVariantNumeric: 'tabular-nums', color: 'white' }}>{item.value}</span>
            <span style={{ fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', opacity: 0.7, marginTop: 3, color: 'white' }}>{item.label}</span>
          </div>
          {i < 3 && <span style={{ fontSize: 24, fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>:</span>}
        </div>
      ))}
    </div>
  );
}

/* ── Stars ── */
function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 1 }}>
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={size} fill={i <= Math.round(rating) ? '#f59e0b' : '#d1d5db'} color={i <= Math.round(rating) ? '#f59e0b' : '#d1d5db'} />
      ))}
    </div>
  );
}

/* ── Product Card (close to real Nectar style) ── */
function ProductCard({ product }: { product: typeof mattresses[0] }) {
  const queenPrice = product.prices['Queen'];
  const queenOrig = product.originalPrices['Queen'];
  const savings = queenOrig - queenPrice;

  return (
    <Link href={`/mattresses/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        background: 'white', borderRadius: 16, overflow: 'hidden',
        border: '1px solid #e5e7eb', transition: 'all 0.3s',
        cursor: 'pointer',
      }}
      className="product-card"
      >
        <div style={{ position: 'relative', aspectRatio: '4/3', background: '#f3f4f6', overflow: 'hidden' }}>
          <Image src={product.images[0]} alt={product.name} fill style={{ objectFit: 'cover' }} className="card-image" sizes="(max-width: 768px) 100vw, 33vw" />
          {product.badge && (
            <span style={{
              position: 'absolute', top: 12, left: 12,
              background: '#1a3c5e', color: 'white',
              fontSize: 11, fontWeight: 700, padding: '4px 12px',
              borderRadius: 20, textTransform: 'uppercase', letterSpacing: 0.5,
            }}>{product.badge}</span>
          )}
        </div>

        <div style={{ padding: '20px 20px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <Stars rating={product.rating} size={14} />
            <span style={{ fontSize: 12, color: '#6b7280' }}>({product.reviewCount.toLocaleString()})</span>
          </div>

          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 4 }}>{product.name}</h3>
          <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 16, lineHeight: 1.5 }}>{product.tagline}</p>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: '#111827' }}>${queenPrice}</span>
            <span style={{ fontSize: 16, color: '#9ca3af', textDecoration: 'line-through' }}>${queenOrig}</span>
          </div>
          <p style={{ fontSize: 12, color: '#059669', fontWeight: 600, marginBottom: 16 }}>Save ${savings} – Queen size</p>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            padding: '14px 24px', background: '#1a3c5e', color: 'white',
            borderRadius: 12, fontWeight: 600, fontSize: 15,
          }}>
            Shop Now <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ── Review Card ── */
function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div style={{
      background: 'white', borderRadius: 16, padding: 24,
      border: '1px solid #e5e7eb', height: '100%',
    }}>
      <Stars rating={review.rating} />
      <h4 style={{ fontWeight: 700, color: '#111827', marginTop: 10, marginBottom: 8, fontSize: 16 }}>{review.title}</h4>
      <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>&ldquo;{review.body}&rdquo;</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'linear-gradient(135deg, #1a3c5e, #2563a8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontWeight: 700, fontSize: 14,
        }}>
          {review.author[0]}
        </div>
        <div>
          <p style={{ fontSize: 14, fontWeight: 600, color: '#111827' }}>{review.author}</p>
          {review.verified && <p style={{ fontSize: 11, color: '#059669', fontWeight: 600 }}>✓ Verified Purchase</p>}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════ HOMEPAGE ════════════════════════ */
export default function HomePage() {
  const [activeType, setActiveType] = useState<'memory-foam' | 'hybrid'>('memory-foam');
  const filtered = mattresses.filter(m => m.mattressType === activeType);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section style={{
        background: 'linear-gradient(160deg, #060d18 0%, #0d1f35 30%, #1a3c5e 70%, #2563a8 100%)',
        color: 'white', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '60px 24px 80px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
        }}>
          {/* Left */}
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>
              🌙 Spring Into Savings
            </p>
            <h1 style={{
              fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 800,
              lineHeight: 1.08, marginBottom: 16,
            }}>
              Prices Starting<br/>From <span style={{ color: '#93c5fd' }}>$349</span>
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 24, lineHeight: 1.6, maxWidth: 440 }}>
              America&apos;s most awarded mattress brand. Join 6 million happy sleepers with our 365-night risk-free trial.
            </p>

            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>⏰ Order today for fastest shipping</p>
            <Countdown />

            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <Link href="/mattresses" style={{
                padding: '16px 32px', background: 'white', color: '#1a3c5e',
                borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              }}>
                Shop Mattress
              </Link>
              <Link href="/mattresses" style={{
                padding: '16px 32px', background: 'transparent', color: 'white',
                border: '2px solid rgba(255,255,255,0.3)', borderRadius: 12,
                fontWeight: 600, fontSize: 16, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>
                Shop Bundle
              </Link>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative', height: 480, borderRadius: 24,
              overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
            }}>
              <Image
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85"
                alt="Nectar Sleep mattress in modern bedroom"
                fill style={{ objectFit: 'cover' }} priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <section style={{
        background: '#f8f9fa', borderBottom: '1px solid #e5e7eb',
        padding: '20px 24px',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: 40, flexWrap: 'wrap',
        }}>
          {[
            { icon: <RefreshCw size={20} color="#1a3c5e" />, text: '365-Night Home Trial' },
            { icon: <Shield size={20} color="#1a3c5e" />, text: 'Forever Warranty™' },
            { icon: <Truck size={20} color="#1a3c5e" />, text: 'Free Shipping & Returns' },
          ].map(item => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {item.icon}
              <span style={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SOCIAL PROOF BAR ═══ */}
      <section style={{ padding: '48px 24px', background: 'white' }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto', textAlign: 'center',
        }}>
          <p style={{ fontSize: 14, fontWeight: 600, color: '#1a3c5e', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>
            Join 6 Million Happy American Sleepers
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: '#111827', marginBottom: 20 }}>
            The USA&apos;s Most Awarded Mattress Brand
          </h2>
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            gap: 32, flexWrap: 'wrap',
          }}>
            {[
              { count: '100,000+', label: '5-Star Reviews' },
              { count: '200+', label: 'Awards' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Stars rating={5} size={16} />
                <span style={{ fontWeight: 800, fontSize: 18, color: '#111827' }}>{item.count}</span>
                <span style={{ fontSize: 14, color: '#6b7280' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINANCING ═══ */}
      <section style={{
        background: '#eff6ff', padding: '16px 24px', textAlign: 'center',
        borderTop: '1px solid #dbeafe', borderBottom: '1px solid #dbeafe',
      }}>
        <p style={{ fontSize: 14, color: '#1e40af' }}>
          From as low as <strong>$35/mo*</strong> &nbsp;|&nbsp;
          <Link href="/financing" style={{ color: '#1e40af', fontWeight: 600, textDecoration: 'underline' }}>Prequalify Now</Link>
        </p>
      </section>

      {/* ═══ MATTRESSES SECTION ═══ */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Type toggle */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
            <div style={{
              display: 'inline-flex', background: '#f3f4f6', borderRadius: 12, padding: 4,
            }}>
              {(['memory-foam', 'hybrid'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  style={{
                    padding: '12px 32px', borderRadius: 10,
                    fontSize: 15, fontWeight: 600, border: 'none', cursor: 'pointer',
                    background: activeType === t ? 'white' : 'transparent',
                    color: activeType === t ? '#1a3c5e' : '#6b7280',
                    boxShadow: activeType === t ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  {t === 'memory-foam' ? 'Memory Foam' : 'Hybrid'}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
          }}>
            {filtered.map(m => <ProductCard key={m.id} product={m} />)}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/mattresses" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', border: '2px solid #1a3c5e', borderRadius: 12,
              color: '#1a3c5e', fontWeight: 600, fontSize: 15, textDecoration: 'none',
            }}>
              Compare Mattresses <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 9 OUT OF 10 STATS ═══ */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(160deg, #0a1628 0%, #1a3c5e 100%)',
        color: 'white',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32, textAlign: 'center',
          }}>
            {[
              { stat: '9 out of 10', desc: 'Nectar customers would recommend Nectar to their family and friends.' },
              { stat: '9 out of 10', desc: 'Said their Nectar mattress helped reduce overall aches, stiffness, and soreness.' },
              { stat: '9 out of 10', desc: 'Back pain sufferers said their Nectar mattress helped some or a lot.' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: 32, borderRadius: 20,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 36, fontWeight: 800, marginBottom: 12,
                  background: 'linear-gradient(to right, #93c5fd, #60a5fa)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>{item.stat}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 365-NIGHT TRIAL CTA ═══ */}
      <section style={{ padding: '80px 24px', background: '#fefce8', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700,
            color: '#111827', marginBottom: 16,
          }}>
            Try our 100% risk-free 365-night home trial
          </h2>
          <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.7, marginBottom: 32 }}>
            We&apos;re so confident you&apos;ll love your Nectar mattress that we offer the longest trial in the industry. Don&apos;t love it? We&apos;ll pick it up and give you a full refund.
          </p>
          <Link href="/mattresses" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '16px 40px', background: '#1a3c5e', color: 'white',
            borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
          }}>
            Learn more
          </Link>
        </div>
      </section>

      {/* ═══ SLEEP SPECIALISTS ═══ */}
      <section style={{ padding: '60px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700,
            color: '#111827', marginBottom: 32,
          }}>
            Sleep Specialists Available 24/7
          </h2>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}>
            {[
              { icon: <MessageCircle size={28} color="#1a3c5e" />, title: 'Chat with us', desc: 'Live chat support available' },
              { icon: <Mail size={28} color="#1a3c5e" />, title: 'Email us', desc: 'support@nectarsleep.com' },
              { icon: <Phone size={28} color="#1a3c5e" />, title: 'Call Us', desc: '(888) 863-2827' },
            ].map(item => (
              <div key={item.title} style={{
                padding: 32, borderRadius: 16, border: '1px solid #e5e7eb',
                textAlign: 'center',
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%', background: '#eff6ff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>{item.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 4 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6b7280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REVIEWS ═══ */}
      <section style={{ padding: '80px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700,
              color: '#111827', marginBottom: 12,
            }}>
              Join 6,000,000 Happy Sleepers
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
              {[
                { count: '9,200+', platform: 'Google Reviews' },
                { count: '9,100+', platform: 'Trustpilot Reviews' },
                { count: '153,000+', platform: 'Amazon Reviews' },
              ].map(p => (
                <div key={p.platform} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'white', borderRadius: 10, padding: '8px 16px',
                  border: '1px solid #e5e7eb',
                }}>
                  <Stars rating={5} size={12} />
                  <span style={{ fontWeight: 700, fontSize: 14, color: '#111827' }}>{p.count}</span>
                  <span style={{ fontSize: 12, color: '#6b7280' }}>{p.platform}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}>
            {reviews.slice(0, 6).map(r => <ReviewCard key={r.id} review={r} />)}
          </div>
        </div>
      </section>

      {/* ═══ TRY IN STORE ═══ */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
        }}>
          <div style={{ position: 'relative', height: 360, borderRadius: 20, overflow: 'hidden' }}>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
              alt="Nectar Sleep in-store experience"
              fill style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700,
              color: '#111827', marginBottom: 12,
            }}>
              Try us in person at<br/>4,365 stores
            </h2>
            <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.7, marginBottom: 24 }}>
              Not sure which mattress is right? Visit a store near you to try the full Nectar lineup before you buy.
            </p>
            <Link href="/stores" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', background: '#1a3c5e', color: 'white',
              borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none',
            }}>
              Find a Store Near You <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ NEWSLETTER ═══ */}
      <Newsletter />
    </div>
  );
}
