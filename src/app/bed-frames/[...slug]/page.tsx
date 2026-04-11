'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Shield, Truck, RefreshCw, ChevronRight, Minus, Plus, Check, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const allBedFrames = [
  {
    slug: 'classic-adjustable',
    name: 'Classic Adjustable Base',
    tagline: 'Simple, quiet, and reliable adjustment',
    description: 'The Classic Adjustable Base offers smooth, whisper-quiet head-of-bed adjustment with a wired remote control. Perfect for reading, watching TV, or relieving snoring. Compatible with all Nectar mattresses.',
    price: 499,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
    features: ['Whisper-quiet motor', 'Head adjustment up to 60°', 'Wired remote control', 'Zero clearance design', 'Compatible with all Nectar mattresses', 'Easy 10-minute assembly'],
    specs: [
      { label: 'Motor', value: 'Single motor, whisper-quiet' },
      { label: 'Max Weight Capacity', value: '750 lbs' },
      { label: 'Remote', value: 'Wired' },
      { label: 'Height', value: '14"' },
      { label: 'Warranty', value: '3-Year Limited' },
      { label: 'Trial', value: '50 Nights' },
    ],
  },
  {
    slug: 'premier-adjustable',
    name: 'Premier Adjustable Base',
    tagline: 'The ultimate in adjustable comfort',
    description: 'The Premier Adjustable Base features both head and foot adjustment, built-in USB ports, wireless remote, under-bed LED lighting, and a zero-gravity preset for weightless relaxation. The perfect upgrade for your Nectar mattress.',
    price: 799,
    originalPrice: 1499,
    badge: 'BEST SELLER',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
    features: ['Head & foot adjustment', 'Wireless remote with presets', 'Built-in USB charging ports', 'Under-bed LED lighting', 'Zero-gravity preset', 'Anti-snore position', 'Wall-hugger technology'],
    specs: [
      { label: 'Motor', value: 'Dual motor, ultra-quiet' },
      { label: 'Max Weight Capacity', value: '850 lbs' },
      { label: 'Remote', value: 'Wireless with memory presets' },
      { label: 'USB Ports', value: '2x USB-A, 1x USB-C' },
      { label: 'Height', value: '14"' },
      { label: 'Warranty', value: '5-Year Limited' },
      { label: 'Trial', value: '50 Nights' },
    ],
  },
  {
    slug: 'lumea',
    name: 'Lumea Platform Bed Frame',
    tagline: 'Japanese-inspired minimalist design',
    description: 'The Lumea Platform Bed Frame features a clean, Japanese-inspired design with a natural wood finish and solid slat support system. No box spring needed – just place your Nectar mattress directly on top for a serene, modern bedroom look.',
    price: 599,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    features: ['Natural wood finish', 'Japanese-inspired design', 'Solid wood slat support', 'No box spring needed', 'Noise-free construction', '30-minute assembly'],
    specs: [
      { label: 'Material', value: 'Solid pine + engineered wood' },
      { label: 'Max Weight Capacity', value: '700 lbs' },
      { label: 'Clearance', value: '7" under-bed' },
      { label: 'Headboard Height', value: '40"' },
      { label: 'Warranty', value: '5-Year Limited' },
      { label: 'Assembly', value: '~30 minutes' },
    ],
  },
  {
    slug: 'onita',
    name: 'Onita Storage Bed Frame',
    tagline: 'Built-in storage for modern living',
    description: 'The Onita Storage Bed Frame solves your bedroom storage challenges with built-in drawers on both sides. Its modern upholstered design looks great while providing functional storage space for bedding, clothes, and more.',
    price: 649,
    originalPrice: 1099,
    badge: 'NEW',
    image: 'https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/EB9630-84-89-B100-12?',
    features: ['4 built-in storage drawers', 'Upholstered fabric headboard', 'Sturdy steel frame', 'No box spring needed', 'Heavy-duty slat system', 'Tool-free assembly'],
    specs: [
      { label: 'Material', value: 'Steel frame + linen upholstery' },
      { label: 'Drawers', value: '4 (2 per side)' },
      { label: 'Max Weight Capacity', value: '800 lbs' },
      { label: 'Headboard Height', value: '45"' },
      { label: 'Warranty', value: '5-Year Limited' },
      { label: 'Assembly', value: 'Tool-free, ~20 minutes' },
    ],
  },
  {
    slug: 'mornington',
    name: 'Mornington Bed Frame',
    tagline: 'Modern upholstered elegance',
    description: 'The Mornington Bed Frame features a beautifully upholstered headboard with a modern silhouette that complements any bedroom décor. Easy assembly and rock-solid construction make it the perfect foundation for your Nectar mattress.',
    price: 449,
    originalPrice: 799,
    image: 'https://m.media-amazon.com/images/I/81s6nAgBCYL._AC_UF894,1000_QL80_.jpg',
    features: ['Upholstered padded headboard', 'Modern silhouette design', 'Reinforced center support', 'No box spring needed', 'Noise-free joints', 'Quick 20-minute assembly'],
    specs: [
      { label: 'Material', value: 'Steel frame + fabric upholstery' },
      { label: 'Max Weight Capacity', value: '700 lbs' },
      { label: 'Clearance', value: '6" under-bed' },
      { label: 'Headboard Height', value: '42"' },
      { label: 'Warranty', value: '3-Year Limited' },
      { label: 'Assembly', value: '~20 minutes' },
    ],
  },
  {
    slug: 'bamboo',
    name: 'Bamboo Bed Frame',
    tagline: 'Sustainable luxury for eco-conscious living',
    description: 'The Bamboo Bed Frame is crafted from sustainably harvested bamboo with traditional Japanese joinery techniques. Its low-profile design creates a zen-like atmosphere in your bedroom while providing excellent mattress support.',
    price: 549,
    originalPrice: 949,
    image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=800&q=80',
    features: ['Sustainable bamboo construction', 'Japanese joinery – no metal fasteners', 'Low-profile platform design', 'Natural bamboo finish', 'Excellent ventilation', 'Eco-friendly packaging'],
    specs: [
      { label: 'Material', value: '100% Moso Bamboo' },
      { label: 'Max Weight Capacity', value: '700 lbs' },
      { label: 'Clearance', value: '5" under-bed' },
      { label: 'Profile', value: 'Low (12" total height)' },
      { label: 'Warranty', value: '5-Year Limited' },
      { label: 'Assembly', value: '~25 minutes' },
    ],
  },
  {
    slug: 'foundation',
    name: 'Foundation Bed Frame',
    tagline: 'Simple, affordable, and rock-solid',
    description: 'The Foundation Bed Frame is a budget-friendly steel frame that provides excellent support for any Nectar mattress. With just 5 minutes of assembly and a low-profile design, it is the simplest path to better sleep.',
    price: 199,
    originalPrice: 399,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXQZEGTq7gKJHOcca0385uNWCLCLPIEWHPA&s',
    features: ['All-steel construction', '5-minute assembly', 'Low-profile design', 'No box spring needed', 'Non-slip tape strips', 'Noise-free design'],
    specs: [
      { label: 'Material', value: 'Heavy-duty steel' },
      { label: 'Max Weight Capacity', value: '800 lbs' },
      { label: 'Clearance', value: '7" under-bed' },
      { label: 'Profile', value: 'Low (7" frame height)' },
      { label: 'Warranty', value: '3-Year Limited' },
      { label: 'Assembly', value: '~5 minutes, no tools' },
    ],
  },
];

export default function BedFrameDetailPage() {
  const params = useParams();
  const slugArray = params.slug as string[];
  const slug = slugArray?.[0] || '';
  const product = allBedFrames.find(p => p.slug === slug);
  const { addItem } = useCart();

  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'specs'>('details');
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Product Not Found</h1>
          <p className="text-gray-500 mb-6">The bed frame you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/bed-frames" className="btn-primary">Back to Bed Frames</Link>
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
          <Link href="/bed-frames" className="hover:text-blue-700 transition-colors">Bed Frames</Link>
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
              {product.badge && <span className="absolute top-4 left-4 badge badge-blue text-sm px-4 py-1.5">{product.badge}</span>}
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
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 mb-6 border border-blue-100/50">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                <span className="badge badge-red text-sm">Save ${savings} ({pct}%)</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Queen size. Free shipping included.</p>
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
                { icon: <RefreshCw className="w-4 h-4 text-blue-600" />, text: '50-Night Home Trial' },
                { icon: <Shield className="w-4 h-4 text-green-600" />, text: 'Limited Warranty' },
                { icon: <Truck className="w-4 h-4 text-yellow-600" />, text: 'Free Shipping & Returns' },
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
