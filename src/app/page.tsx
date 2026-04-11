'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ChevronRight, Shield, Truck, RefreshCw, CreditCard, Award, Users, Sparkles } from 'lucide-react';
import { mattresses, reviews, stats, trustBadges } from '@/lib/data';
import Newsletter from '@/components/Newsletter';

/* countdown */
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
    <div className="flex items-center gap-2 text-white">
      {[['DAYS', pad(time.d)], ['HRS', pad(time.h)], ['MIN', pad(time.m)], ['SEC', pad(time.s)]].map(([label, val]) => (
        <div key={label} className="countdown-box">
          <span className="countdown-value">{val}</span>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  );
}

/* stars */
function Stars({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' }) {
  const s = size === 'sm' ? 'w-3.5 h-3.5' : 'w-5 h-5';
  return (
    <div className="flex">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className={`${s} ${i <= Math.round(rating) ? 'star-filled' : 'star-empty'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* product card */
function ProductCard({ product }: { product: typeof mattresses[0] }) {
  const queenPrice = product.prices['Queen'];
  const queenOrig = product.originalPrices['Queen'];
  const savings = queenOrig - queenPrice;
  const pct = Math.round((savings / queenOrig) * 100);

  return (
    <div className="product-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
      <div className="relative aspect-product bg-gray-50 overflow-hidden">
        <Image src={product.images[0]} alt={product.name} fill className="object-cover card-image" sizes="(max-width: 768px) 100vw, 33vw" />
        {product.badge && (
          <span className="absolute top-3 left-3 badge badge-blue">{product.badge}</span>
        )}
        <span className="absolute top-3 right-3 badge badge-red">Save {pct}%</span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Stars rating={product.rating} />
          <span className="text-xs text-gray-500">({product.reviewCount.toLocaleString()})</span>
        </div>
        <h3 className="font-bold text-lg text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2 flex-1">{product.tagline}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {product.highlights.slice(0, 3).map(h => (
            <span key={h} className="feature-pill">{h}</span>
          ))}
        </div>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">${queenPrice}</span>
          <span className="text-sm text-gray-400 line-through">${queenOrig}</span>
          <span className="text-sm text-green-600 font-semibold">Save ${savings}</span>
        </div>
        <p className="text-xs text-gray-400 mb-4">Queen price shown. Starting from ${Object.values(product.prices)[0]}.</p>

        <Link href={`/mattresses/${product.slug}`} className="btn-primary w-full text-center">
          Shop {product.name}
        </Link>
      </div>
    </div>
  );
}

/* review card */
function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <Stars rating={review.rating} size="sm" />
      <h4 className="font-semibold text-gray-900 mt-2 mb-2">{review.title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">&ldquo;{review.body}&rdquo;</p>
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full gradient-blue flex items-center justify-center text-white font-bold text-sm">
          {review.author[0]}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{review.author}</p>
          {review.verified && <p className="text-[11px] text-green-600 font-medium">✓ Verified Purchase</p>}
        </div>
      </div>
    </div>
  );
}

/* ─── HOMEPAGE ─── */
export default function HomePage() {
  const [activeType, setActiveType] = useState<'memory-foam' | 'hybrid'>('memory-foam');
  const filtered = mattresses.filter(m => m.mattressType === activeType);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-hero text-white noise-bg">
        {/* Decorative orbs */}
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-[15%] w-96 h-96 bg-indigo-500/15 rounded-full blur-[120px] animate-float delay-300" />

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              Spring Sale – Up to 50% Off Everything
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
              Sleep Better.<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Live Better.</span>
            </h1>
            <p className="text-lg text-gray-300/90 mb-6 max-w-lg leading-relaxed">
              Join over 6 million happy sleepers. Our award-winning mattresses come with a 365-night trial and a forever warranty — because we&apos;re that confident you&apos;ll love it.
            </p>

            {/* Countdown */}
            <div className="mb-8">
              <p className="text-sm text-gray-400 mb-2">⏰ Sale ends in:</p>
              <Countdown />
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/mattresses" className="btn-primary bg-white text-blue-900 hover:bg-gray-50 px-8 py-4 text-base shadow-lg shadow-white/10">
                Shop Mattresses
              </Link>
              <Link href="/quiz" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-base backdrop-blur-sm">
                Take Sleep Quiz
              </Link>
            </div>

            {/* Mini trust */}
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-green-400" />Forever Warranty™</span>
              <span className="flex items-center gap-1.5"><RefreshCw className="w-4 h-4 text-blue-400" />365-Night Trial</span>
              <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-yellow-400" />Free Shipping</span>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:block relative">
            <div className="relative h-[540px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in animate-glow">
              <Image
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85"
                alt="Nectar mattress in a beautiful bedroom"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating review card */}
            <div className="absolute -bottom-4 -left-8 glass-light rounded-2xl p-4 shadow-xl max-w-[220px] animate-float">
              <div className="flex items-center gap-1 mb-1"><Stars rating={5} size="sm" /></div>
              <p className="text-xs font-semibold text-gray-800">&ldquo;Best sleep of my life!&rdquo;</p>
              <p className="text-[11px] text-gray-500 mt-1">— Verified Buyer ✓</p>
            </div>

            {/* Floating badge */}
            <div className="absolute top-8 -right-4 glass-light rounded-2xl p-3 shadow-xl animate-float delay-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-white">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">#1 Best Seller</p>
                  <p className="text-[10px] text-gray-500">Sleep Foundation 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="gradient-premium text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 0%, transparent 50%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={s.label} className={`animate-fade-in-up delay-${(i + 1) * 100}`}>
              <div className="text-4xl lg:text-5xl font-black mb-1">{s.value}</div>
              <div className="text-blue-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="py-16 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustBadges.map((b, i) => (
              <div
                key={b.id}
                className={`bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fade-in-up delay-${(i + 1) * 100}`}
              >
                <span className="text-4xl mb-3 block">{b.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MATTRESS SECTION ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Our Collection</span>
            <h2 className="section-title text-4xl lg:text-5xl mb-4">Pick Your Perfect Mattress</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Whether you prefer the cradling feel of memory foam or the bouncy support of a hybrid, we have the perfect mattress for you.</p>

            {/* Type toggle */}
            <div className="inline-flex bg-gray-100 rounded-xl p-1.5 mt-6">
              {(['memory-foam', 'hybrid'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 capitalize ${
                    activeType === t ? 'bg-white shadow-md text-blue-700' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {t === 'memory-foam' ? 'Memory Foam' : 'Hybrid'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(m => <ProductCard key={m.id} product={m} />)}
          </div>

          <div className="text-center mt-10">
            <Link href="/mattresses" className="btn-secondary">
              View All Mattresses <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Reviews</span>
            <h2 className="section-title text-4xl lg:text-5xl mb-4">Join 6 Million Happy Sleepers</h2>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Stars rating={5} size="md" />
                <span className="font-bold text-gray-900">4.8/5</span>
              </div>
              {[
                { icon: '⭐', count: '9,200+', platform: 'Google' },
                { icon: '⭐', count: '9,100+', platform: 'Trustpilot' },
                { icon: '⭐', count: '153,000+', platform: 'Amazon' },
              ].map(p => (
                <div key={p.platform} className="flex items-center gap-1.5 bg-white rounded-lg px-3 py-1.5 shadow-sm text-sm">
                  <span>{p.icon}</span>
                  <span className="font-semibold">{p.count}</span>
                  <span className="text-gray-500">{p.platform}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map(r => <ReviewCard key={r.id} review={r} />)}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-20 gradient-dark text-white relative overflow-hidden noise-bg">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="section-title text-3xl lg:text-4xl text-center text-white mb-12">The Science of Better Sleep</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { stat: '9 out of 10', desc: 'Nectar customers would recommend Nectar to their family and friends.' },
              { stat: '9 out of 10', desc: 'Said their Nectar mattress helped reduce overall aches, stiffness, and soreness.' },
              { stat: '9 out of 10', desc: 'Back pain sufferers said their Nectar mattress helped some or a lot.' },
            ].map((item, i) => (
              <div key={i} className="glass rounded-2xl p-8 hover:bg-white/10 transition-colors">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">{item.stat}</div>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/reviews" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-blue-900">
              Read All Reviews <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="w-5 h-5 text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900">The USA&apos;s Most Awarded Mattress Brand</h2>
          </div>
          <p className="text-gray-500 mb-10">200+ awards from top publications including Good Housekeeping, Sleep Foundation, and more.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Good Housekeeping', 'Forbes', 'Sleep Foundation', 'NY Times Wirecutter', 'CNN', 'CNET'].map(pub => (
              <div key={pub} className="px-6 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all cursor-default">
                🏆 {pub}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 gradient-premium text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-[100px]" />
        <div className="relative max-w-3xl mx-auto px-4">
          <h2 className="section-title text-4xl lg:text-5xl text-white mb-4">Try It for 365 Nights – Risk Free</h2>
          <p className="text-blue-200 mb-8 text-lg leading-relaxed">
            We&apos;re so confident you&apos;ll love your Nectar that we offer the longest home trial in the industry. Don&apos;t love it? We&apos;ll pick it up and give you a full refund.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/mattresses" className="btn-primary bg-white text-blue-700 hover:bg-gray-100 px-10 py-4 text-base shadow-lg">
              Shop Now – Up to 50% Off
            </Link>
            <Link href="/quiz" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-blue-700 px-10 py-4 text-base">
              Take the Sleep Quiz
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-blue-200 flex-wrap">
            <span><Shield className="w-4 h-4 inline mr-1" />Forever Warranty™</span>
            <span><RefreshCw className="w-4 h-4 inline mr-1" />Free Returns</span>
            <span><Truck className="w-4 h-4 inline mr-1" />Free Shipping</span>
            <span><CreditCard className="w-4 h-4 inline mr-1" />0% APR Financing</span>
          </div>
        </div>
      </section>

      {/* ── FIND IN STORE ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
          <div className="relative w-full lg:w-1/2 h-72 rounded-2xl overflow-hidden shadow-lg group">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
              alt="Try in store"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-blue-700" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Try In Person</span>
            </div>
            <h2 className="section-title text-3xl mb-4">Test It at 4,365 Stores Near You</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Not sure which mattress is right for you? Visit one of our partner stores to try the full Nectar lineup in person before you buy.
            </p>
            <Link href="/stores" className="btn-primary">
              Find a Store Near You <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <Newsletter />
    </div>
  );
}
