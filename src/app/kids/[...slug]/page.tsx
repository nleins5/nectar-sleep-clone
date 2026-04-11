'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Truck, RefreshCw, ChevronRight, Minus, Plus, Check, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const allKidsProducts = [
  {
    slug: 'mattress',
    name: 'Nectar Kids Mattress',
    tagline: 'Dual-sided design that grows with your child',
    description: 'The Nectar Kids Mattress features a unique dual-sided design – a firmer side for toddlers and a softer side for older children. Made with CertiPUR-US certified foam that is free from harmful chemicals, so you can feel great about your child\'s sleep environment. Fits standard twin and full size beds.',
    price: 299,
    originalPrice: 499,
    badge: 'AGES 3-12',
    image: 'https://media.residenthome.com/mui/nectar/categories/kids-hero.webp',
    features: ['Dual-sided: firmer (ages 3-7) & softer (ages 7-12)', 'CertiPUR-US® certified foam', 'GreenGuard Gold certified', 'Waterproof, removable cover', 'Breathable & hypoallergenic', '100-Night trial'],
    specs: [
      { label: 'Height', value: '8"' },
      { label: 'Sides', value: 'Dual-sided (firm + soft)' },
      { label: 'Ages', value: '3 to 12 years' },
      { label: 'Sizes', value: 'Twin, Full' },
      { label: 'Cover', value: 'Waterproof, removable, washable' },
      { label: 'Certifications', value: 'CertiPUR-US® + GreenGuard Gold' },
      { label: 'Trial', value: '100 Nights' },
      { label: 'Warranty', value: '10-Year Limited' },
    ],
  },
];

export default function KidsDetailPage() {
  const params = useParams();
  const slugArray = params.slug as string[];
  const slug = slugArray?.[0] || '';
  const product = allKidsProducts.find(p => p.slug === slug);
  const { addItem } = useCart();

  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'specs'>('details');
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Product Not Found</h1>
          <p className="text-gray-500 mb-6">The kids product you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/kids" className="btn-primary">Back to Kids</Link>
        </div>
      </div>
    );
  }

  const savings = product.originalPrice - product.price;
  const pct = Math.round((savings / product.originalPrice) * 100);

  const handleAddToCart = () => {
    addItem({
      productId: product.slug,
      name: product.name,
      size: 'Twin',
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
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
          <Link href="/kids" className="hover:text-blue-700 transition-colors">Kids</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 group">
              <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" priority />
              {product.badge && <span className="absolute top-4 left-4 text-sm font-bold px-4 py-1.5 rounded-full" style={{ background: '#7c3aed', color: 'white' }}>{product.badge}</span>}
              <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-fade-in-up">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              {product.name}
            </h1>
            <p className="text-lg text-gray-500 mb-6">{product.tagline}</p>

            {/* Price */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-5 mb-6 border border-purple-100/50">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                <span className="badge badge-red text-sm">Save ${savings} ({pct}%)</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Twin size. Free shipping included.</p>
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
                <span className="flex items-center justify-center gap-2 animate-scale-in"><Check className="w-5 h-5" /> Added to Cart!</span>
              ) : (
                <span className="flex items-center justify-center gap-2"><ShoppingCart className="w-5 h-5" /> Add to Cart – ${product.price * qty}</span>
              )}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { icon: <RefreshCw className="w-4 h-4 text-blue-600" />, text: '100-Night Trial' },
                { icon: <Shield className="w-4 h-4 text-green-600" />, text: '10-Year Warranty' },
                { icon: <Truck className="w-4 h-4 text-yellow-600" />, text: 'Free Shipping' },
                { icon: <Check className="w-4 h-4 text-teal-600" />, text: 'GreenGuard Gold' },
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
            {(['details', 'specs'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 text-sm font-semibold capitalize transition-all border-b-2 ${
                  activeTab === tab ? 'border-blue-700 text-blue-700' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'specs' ? 'Specifications' : 'Details & Features'}
              </button>
            ))}
          </div>

          <div className="py-10">
            {activeTab === 'details' && (
              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>About This Product</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Key Features</h3>
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
          </div>
        </div>
      </section>
    </div>
  );
}
