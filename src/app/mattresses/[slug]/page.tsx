'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { mattresses, reviews, type Size } from '@/lib/data';
import { Star, Shield, Truck, RefreshCw, ChevronRight, Minus, Plus, Check, ShoppingCart, CreditCard, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

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
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<Size>('Queen');
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'specs' | 'reviews'>('details');
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Product Not Found</h1>
          <p className="text-gray-500 mb-6">The mattress you&apos;re looking for doesn&apos;t exist.</p>
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

  // Rotate images based on selected size so each size shows different photos
  const sizeIndex = sizes.indexOf(selectedSize);
  const rotatedImages = product.images.length > 1
    ? [...product.images.slice(sizeIndex % product.images.length), ...product.images.slice(0, sizeIndex % product.images.length)]
    : product.images;

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      size: selectedSize,
      price,
      originalPrice: orig,
      image: rotatedImages[0],
      slug: product.slug,
    }, qty);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50/80 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/mattresses" className="hover:text-blue-700 transition-colors">Mattresses</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4 animate-fade-in">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 group">
              <Image
                key={`main-${selectedSize}-${selectedImage}`}
                src={rotatedImages[selectedImage] || rotatedImages[0]}
                alt={`${product.name} - ${selectedSize}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {product.badge && <span className="absolute top-4 left-4 badge badge-blue text-sm px-4 py-1.5">{product.badge}</span>}
              <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            {rotatedImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {rotatedImages.map((img, i) => (
                  <button
                    key={`${selectedSize}-${i}`}
                    onClick={() => setSelectedImage(i)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === i ? 'border-blue-500 shadow-md' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="100px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="animate-fade-in-up">
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
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 mb-6 border border-blue-100/50">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl font-bold text-gray-900">${price}</span>
                <span className="text-lg text-gray-400 line-through">${orig}</span>
                <span className="badge badge-red text-sm">Save ${savings} ({pct}%)</span>
              </div>
              <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                <CreditCard className="w-4 h-4" />
                or as low as <strong>${Math.round(price / 12)}/mo</strong> with Affirm
              </p>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-3">Select Size: <span className="text-blue-700">{selectedSize}</span></p>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => { setSelectedSize(s); setSelectedImage(0); }}
                    className={`py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                      selectedSize === s
                        ? 'border-blue-700 bg-blue-50 text-blue-700 shadow-sm'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div>{s}</div>
                    <div className="text-xs mt-0.5 opacity-75">${product.prices[s]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <p className="text-sm font-semibold text-gray-700">Qty:</p>
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2.5 hover:bg-gray-50 transition-colors" disabled={qty <= 1}>
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 py-2.5 font-semibold border-x border-gray-200 min-w-[52px] text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-3 py-2.5 hover:bg-gray-50 transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`btn-primary w-full py-4 text-lg mb-3 ${addedToCart ? 'bg-green-600 hover:bg-green-600' : ''}`}
              style={addedToCart ? { background: 'linear-gradient(135deg, #059669, #10b981)' } : {}}
            >
              {addedToCart ? (
                <span className="flex items-center gap-2 animate-scale-in">
                  <Check className="w-5 h-5" /> Added to Cart!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" /> Add to Cart – ${price * qty}
                </span>
              )}
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
                <div key={b.text} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-2.5">
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
          <div className="flex border-b border-gray-200 gap-1">
            {(['details', 'specs', 'reviews'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 text-sm font-semibold capitalize transition-all border-b-2 ${
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
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>What&apos;s Inside</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        </div>
                        <span className="text-gray-700">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Mattress Layers</h3>
                  <div className="space-y-3">
                    {product.layers.map((layer, i) => (
                      <div key={i} className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl p-4 border border-gray-100">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-gray-900 text-sm">{layer.name}</h4>
                          <span className="text-xs text-blue-700 font-medium bg-blue-50 px-2 py-0.5 rounded-full">{layer.thickness}</span>
                        </div>
                        <p className="text-sm text-gray-500">{layer.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-gray-500 mb-2">Firmness Level</p>
                    <div className="mt-2 relative">
                      <div className="firmness-track">
                        <div
                          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-blue-700 rounded-full shadow-md"
                          style={{ left: `${product.firmness * 10}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>Soft</span><span>Medium</span><span>Firm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Specifications</h3>
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
                <div className="flex items-center gap-6 mb-8 flex-wrap">
                  <div className="text-center">
                    <div className="text-5xl font-black text-gray-900">{product.rating}</div>
                    <Stars rating={product.rating} size="md" />
                    <p className="text-sm text-gray-500 mt-1">{product.reviewCount.toLocaleString()} reviews</p>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    {[5,4,3,2,1].map(star => {
                      const count = productReviews.filter(r => Math.round(r.rating) === star).length;
                      const pctBar = productReviews.length > 0 ? (count / productReviews.length) * 100 : 0;
                      return (
                        <div key={star} className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-gray-500 w-3">{star}</span>
                          <Star className="w-3 h-3 star-filled" />
                          <div className="rating-bar flex-1"><div className="rating-bar-fill" style={{ width: `${pctBar}%` }} /></div>
                          <span className="text-xs text-gray-400 w-6">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {productReviews.map(r => (
                    <div key={r.id} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <Stars rating={r.rating} />
                      <h4 className="font-semibold mt-2 mb-2">{r.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">&ldquo;{r.body}&rdquo;</p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full gradient-blue flex items-center justify-center text-white text-sm font-bold">{r.author[0]}</div>
                        <span className="text-sm font-medium">{r.author}</span>
                        {r.verified && <span className="text-[11px] text-green-600 font-medium">✓ Verified</span>}
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
