'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mattresses } from '@/lib/data';
import { SlidersHorizontal, ChevronRight } from 'lucide-react';

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? 'star-filled' : 'star-empty'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function MattressesPage() {
  const [filter, setFilter] = useState<'all' | 'memory-foam' | 'hybrid'>('all');
  const [sort, setSort] = useState<'popular' | 'price-low' | 'price-high'>('popular');

  const filtered = mattresses.filter(m => filter === 'all' || m.mattressType === filter);
  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'price-low') return a.prices['Queen'] - b.prices['Queen'];
    if (sort === 'price-high') return b.prices['Queen'] - a.prices['Queen'];
    return b.reviewCount - a.reviewCount;
  });

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-16 relative overflow-hidden noise-bg">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-blue-300 uppercase tracking-wider mb-3">Our Collection</span>
          <h1 className="section-title text-white text-4xl lg:text-5xl mb-4">Pick Your Memory Foam or Hybrid Mattress</h1>
          <p className="text-blue-200/80 max-w-2xl mx-auto text-lg">Compare our award-winning mattresses. All come with a 365-night trial and forever warranty.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-gray-200 bg-white sticky top-[60px] z-30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="w-4 h-4 text-gray-400" />
            <div className="flex bg-gray-100 rounded-xl p-1">
              {(['all', 'memory-foam', 'hybrid'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 capitalize ${
                    filter === f ? 'bg-white shadow-md text-blue-700' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {f === 'all' ? 'All' : f === 'memory-foam' ? 'Memory Foam' : 'Hybrid'}
                </button>
              ))}
            </div>
          </div>
          <select
            value={sort}
            onChange={e => setSort(e.target.value as typeof sort)}
            className="text-sm border border-gray-200 rounded-xl px-4 py-2.5 bg-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
          >
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <p className="text-sm text-gray-500 mb-6">{sorted.length} mattresses</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.map(product => {
              const qp = product.prices['Queen'];
              const qo = product.originalPrices['Queen'];
              const save = qo - qp;
              const pct = Math.round((save / qo) * 100);

              return (
                <Link key={product.id} href={`/mattresses/${product.slug}`} className="product-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col group">
                  <div className="relative aspect-product bg-gray-100 overflow-hidden">
                    <Image src={product.images[0]} alt={product.name} fill className="object-cover card-image" sizes="(max-width: 768px) 100vw, 33vw" />
                    {product.badge && <span className="absolute top-3 left-3 badge badge-blue">{product.badge}</span>}
                    <span className="absolute top-3 right-3 badge badge-red">-{pct}%</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Stars rating={product.rating} />
                      <span className="text-xs text-gray-400">({product.reviewCount.toLocaleString()})</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2 flex-1">{product.tagline}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.features.slice(0, 2).map(f => (
                        <span key={f} className="feature-pill">{f}</span>
                      ))}
                    </div>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl font-bold text-gray-900">${qp}</span>
                      <span className="text-sm text-gray-400 line-through">${qo}</span>
                    </div>
                    <div className="text-xs text-gray-400 mb-4">Queen | Starting from ${Math.min(...Object.values(product.prices))}</div>
                    <div className="btn-primary w-full text-center">
                      Shop Now <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quiz hint */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="section-title text-3xl mb-4">Not Sure Which Mattress?</h2>
          <p className="text-gray-500 mb-8">Take our 2-minute quiz and we&apos;ll find the best mattress for your sleep style.</p>
          <Link href="/quiz" className="btn-primary px-10">Take the Sleep Quiz</Link>
        </div>
      </section>
    </div>
  );
}
