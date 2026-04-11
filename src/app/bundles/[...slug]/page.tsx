'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Truck, ChevronRight, Minus, Plus, Check, ShoppingCart, Heart, Package } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const allBundles = [
  {
    slug: 'adjustable-frame',
    name: 'Premier Adjustable Bundle',
    tagline: 'Nectar mattress + Premier Adjustable Base',
    description: 'The ultimate sleep upgrade. Get our best-selling Nectar Classic mattress paired with the Premier Adjustable Base featuring head & foot adjustment, wireless remote, USB charging ports, and under-bed LED lighting. Save 60% compared to buying separately.',
    price: 1098,
    originalPrice: 2748,
    badge: 'SAVE 60%',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    includes: ['Nectar Classic Mattress (Queen)', 'Premier Adjustable Base', 'Wireless remote with presets', 'Under-bed LED lighting kit'],
    features: ['Head & foot adjustment', 'Zero-gravity preset', 'Anti-snore position', 'USB charging ports', '365-Night mattress trial', 'Free white-glove delivery'],
    specs: [
      { label: 'Mattress', value: 'Nectar Classic (12" Memory Foam)' },
      { label: 'Base', value: 'Premier Adjustable (Dual Motor)' },
      { label: 'Remote', value: 'Wireless with 3 memory presets' },
      { label: 'Mattress Trial', value: '365 Nights' },
      { label: 'Base Trial', value: '50 Nights' },
      { label: 'Warranty', value: 'Forever (mattress) + 5-Year (base)' },
    ],
  },
  {
    slug: 'mornington',
    name: 'Mornington Bundle',
    tagline: 'Nectar mattress + Mornington Bed Frame + Headboard',
    description: 'Transform your bedroom with this complete bundle. The Nectar Classic mattress sits perfectly on the sleek Mornington Bed Frame with its upholstered headboard. A complete, modern bedroom look at an incredible value.',
    price: 898,
    originalPrice: 1998,
    badge: 'BEST VALUE',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80',
    includes: ['Nectar Classic Mattress (Queen)', 'Mornington Bed Frame', 'Upholstered Headboard', 'All hardware included'],
    features: ['Modern upholstered design', 'No box spring needed', 'Easy 20-minute assembly', '365-Night mattress trial', 'Free shipping on everything', 'Save over $1,100'],
    specs: [
      { label: 'Mattress', value: 'Nectar Classic (12" Memory Foam)' },
      { label: 'Frame', value: 'Mornington (Steel + Fabric)' },
      { label: 'Headboard Height', value: '42"' },
      { label: 'Assembly', value: '~20 minutes' },
      { label: 'Mattress Trial', value: '365 Nights' },
      { label: 'Warranty', value: 'Forever (mattress) + 3-Year (frame)' },
    ],
  },
  {
    slug: 'foundation',
    name: 'Foundation Bundle',
    tagline: 'Nectar mattress + Steel Foundation Frame',
    description: 'The most affordable way to get a complete Nectar sleep setup. Our best-selling mattress paired with our simple, rock-solid steel foundation frame. Assembly takes just 5 minutes with no tools required.',
    price: 649,
    originalPrice: 1398,
    badge: 'SAVE 53%',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80',
    includes: ['Nectar Classic Mattress (Queen)', 'Foundation Steel Frame', 'Non-slip grip strips', 'No tools needed'],
    features: ['5-minute assembly', 'No tools required', 'Low-profile design', '365-Night mattress trial', 'Free shipping', 'Most affordable bundle'],
    specs: [
      { label: 'Mattress', value: 'Nectar Classic (12" Memory Foam)' },
      { label: 'Frame', value: 'Foundation (Heavy-duty Steel)' },
      { label: 'Assembly', value: '~5 minutes, tool-free' },
      { label: 'Under-bed Clearance', value: '7"' },
      { label: 'Mattress Trial', value: '365 Nights' },
      { label: 'Warranty', value: 'Forever (mattress) + 3-Year (frame)' },
    ],
  },
  {
    slug: 'bamboo',
    name: 'Bamboo Bundle',
    tagline: 'Nectar mattress + Japanese Bamboo Bed Frame',
    description: 'An eco-conscious sleep setup pairing our beloved Nectar Classic mattress with the sustainable Bamboo Bed Frame. Crafted from 100% Moso bamboo with traditional Japanese joinery, this bundle delivers style, sustainability, and supreme comfort.',
    price: 998,
    originalPrice: 2198,
    badge: 'ECO-FRIENDLY',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80',
    includes: ['Nectar Classic Mattress (Queen)', 'Bamboo Bed Frame', 'Eco-friendly packaging', 'All assembly hardware'],
    features: ['100% sustainable bamboo', 'Japanese joinery – no metal fasteners', 'Low-profile zen design', '365-Night mattress trial', 'Free shipping', 'Carbon-neutral delivery'],
    specs: [
      { label: 'Mattress', value: 'Nectar Classic (12" Memory Foam)' },
      { label: 'Frame', value: 'Bamboo (100% Moso Bamboo)' },
      { label: 'Assembly', value: '~25 minutes' },
      { label: 'Under-bed Clearance', value: '5"' },
      { label: 'Mattress Trial', value: '365 Nights' },
      { label: 'Warranty', value: 'Forever (mattress) + 5-Year (frame)' },
    ],
  },
];

export default function BundleDetailPage() {
  const params = useParams();
  const slugArray = params.slug as string[];
  const slug = slugArray?.[0] || '';
  const product = allBundles.find(p => p.slug === slug);
  const { addItem } = useCart();

  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'specs'>('details');
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Bundle Not Found</h1>
          <p className="text-gray-500 mb-6">The bundle you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/bundles" className="btn-primary">Back to Bundles</Link>
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
      size: 'Queen',
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
          <Link href="/bundles" className="hover:text-blue-700 transition-colors">Bundles</Link>
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
              <span className="absolute top-4 left-4 text-sm font-bold px-4 py-1.5 rounded-full" style={{ background: '#dc2626', color: 'white' }}>{product.badge}</span>
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
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-5 mb-6 border border-red-100/50">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                <span className="badge badge-red text-sm">Save ${savings} ({pct}% off)</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Queen size bundle. Free white-glove delivery.</p>
            </div>

            {/* What&apos;s Included */}
            <div className="mb-6 bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2"><Package className="w-4 h-4" /> What&apos;s Included:</p>
              <div className="space-y-1.5">
                {product.includes.map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    <span>{item}</span>
                  </div>
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
                <span className="flex items-center justify-center gap-2 animate-scale-in"><Check className="w-5 h-5" /> Added to Cart!</span>
              ) : (
                <span className="flex items-center justify-center gap-2"><ShoppingCart className="w-5 h-5" /> Add Bundle to Cart – ${product.price * qty}</span>
              )}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { icon: <Shield className="w-4 h-4 text-blue-600" />, text: '365-Night Mattress Trial' },
                { icon: <Shield className="w-4 h-4 text-green-600" />, text: 'Forever Warranty™' },
                { icon: <Truck className="w-4 h-4 text-yellow-600" />, text: 'Free White-Glove Delivery' },
                { icon: <Check className="w-4 h-4 text-teal-600" />, text: 'Easy Assembly' },
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
                {tab === 'specs' ? 'Specifications' : 'Bundle Details'}
              </button>
            ))}
          </div>

          <div className="py-10">
            {activeTab === 'details' && (
              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>About This Bundle</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Bundle Features</h3>
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
