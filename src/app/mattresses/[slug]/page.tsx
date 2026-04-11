'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { mattresses, reviews, type Size } from '@/lib/data';
import { Star, Shield, Truck, RefreshCw, ChevronRight, Minus, Plus, Check } from 'lucide-react';

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

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = mattresses.find(m => m.slug === slug);

  const [selectedSize, setSelectedSize] = useState<Size>('Queen');
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'specs' | 'reviews'>('details');

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/mattresses" className="btn-primary">Back to Mattresses</Link>
        </div>
      </div>
    );
  }

  const price = product.prices[selectedSize];
  const orig = product.originalPrices[selectedSize];
  const savings = orig - price;
  const pct = Math.round((savings / orig) * 100);
  const productReviews = reviews.filter(r => r.productId === product.id || !r.productId);
  const sizes: Size[] = ['Twin', 'Twin XL', 'Full', 'Queen', 'King', 'Cal King'];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/mattresses" className="hover:text-blue-700">Mattresses</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image src={product.images[0]} alt={product.name} fill className="object-cover" priority />
              {product.badge && <span className="absolute top-4 left-4 badge badge-blue text-sm px-4 py-1">{product.badge}</span>}
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden border-2 border-gray-200 hover:border-blue-500 cursor-pointer transition-colors">
                    <Image src={img} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Stars rating={product.rating} size="md" />
              <span className="text-sm font-medium text-gray-700">{product.rating}</span>
              <span className="text-sm text-gray-400">({product.reviewCount.toLocaleString()} reviews)</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              {product.name}
            </h1>
            <p className="text-lg text-gray-500 mb-6">{product.tagline}</p>

            {/* Price */}
            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-gray-900">${price}</span>
                <span className="text-lg text-gray-400 line-through">${orig}</span>
                <span className="badge badge-red text-sm">Save ${savings} ({pct}%)</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">or as low as <strong>${Math.round(price / 12)}/mo</strong> with Affirm</p>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-3">Select Size: <span className="text-blue-700">{selectedSize}</span></p>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all ${
                      selectedSize === s
                        ? 'border-blue-700 bg-blue-50 text-blue-700'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <div>{s}</div>
                    <div className="text-xs mt-0.5">${product.prices[s]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <p className="text-sm font-semibold text-gray-700">Qty:</p>
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 hover:bg-gray-100 transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium border-x border-gray-200 min-w-[48px] text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-3 py-2 hover:bg-gray-100 transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button className="btn-primary w-full py-4 text-lg mb-4">
              Add to Cart – ${price * qty}
            </button>
            <Link href="/quiz" className="btn-secondary w-full text-center block">
              Not Sure? Take the Quiz
            </Link>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { icon: <RefreshCw className="w-4 h-4 text-blue-600" />, text: '365-Night Home Trial' },
                { icon: <Shield className="w-4 h-4 text-green-600" />, text: 'Forever Warranty™' },
                { icon: <Truck className="w-4 h-4 text-yellow-600" />, text: 'Free Shipping & Returns' },
                { icon: <Check className="w-4 h-4 text-teal-600" />, text: 'CertiPUR-US® Certified' },
              ].map(b => (
                <div key={b.text} className="flex items-center gap-2 text-sm text-gray-600">
                  {b.icon}<span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex border-b border-gray-200">
            {(['details', 'specs', 'reviews'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 text-sm font-semibold capitalize transition-colors border-b-2 ${
                  activeTab === tab ? 'border-blue-700 text-blue-700' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'reviews' ? `Reviews (${productReviews.length})` : tab}
              </button>
            ))}
          </div>

          <div className="py-10">
            {activeTab === 'details' && (
              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4">What&apos;s Inside</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-gray-700">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Mattress Layers</h3>
                  <div className="space-y-4">
                    {product.layers.map((layer, i) => (
                      <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-gray-900">{layer.name}</h4>
                          <span className="text-sm text-blue-700 font-medium">{layer.thickness}</span>
                        </div>
                        <p className="text-sm text-gray-500">{layer.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-gray-500">Firmness Level</p>
                    <div className="mt-2">
                      <div className="firmness-track">
                        <div
                          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-blue-700 rounded-full shadow"
                          style={{ left: `${product.firmness * 10}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>Soft</span><span>Medium</span><span>Firm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold mb-6">Specifications</h3>
                <div className="divide-y divide-gray-100">
                  {product.specs.map(s => (
                    <div key={s.label} className="flex items-center justify-between py-4">
                      <span className="text-gray-500 font-medium">{s.label}</span>
                      <span className="text-gray-900 font-semibold">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-5xl font-black text-gray-900">{product.rating}</div>
                    <Stars rating={product.rating} size="md" />
                    <p className="text-sm text-gray-500 mt-1">{product.reviewCount.toLocaleString()} reviews</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {productReviews.map(r => (
                    <div key={r.id} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <Stars rating={r.rating} />
                      <h4 className="font-semibold mt-2 mb-2">{r.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">&ldquo;{r.body}&rdquo;</p>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-sm font-bold">{r.author[0]}</div>
                        <span className="text-sm font-medium">{r.author}</span>
                        {r.verified && <span className="text-[11px] text-green-600">✓ Verified</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
