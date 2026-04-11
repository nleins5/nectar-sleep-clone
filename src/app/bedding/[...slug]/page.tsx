'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Truck, RefreshCw, ChevronRight, Minus, Plus, Check, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const allBeddingProducts = [
  {
    slug: 'serenity-bundle',
    name: 'Serenity Sleep Bundle',
    tagline: 'Everything you need for the perfect sleep setup',
    description: 'The Serenity Sleep Bundle includes our premium bamboo sheet set and waterproof mattress protector at an incredible value. Complete your Nectar mattress setup with sheets that are breathable, silky-soft, and naturally temperature regulating, plus a protector that keeps your mattress fresh for years.',
    price: 149,
    originalPrice: 249,
    badge: 'BEST VALUE',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80',
    features: ['Premium bamboo sheet set included', 'Waterproof mattress protector included', 'Breathable & temperature regulating', 'Fits mattresses up to 16" deep', 'Machine washable', 'Save $100 vs buying separately'],
    specs: [
      { label: 'Includes', value: 'Sheet set + mattress protector' },
      { label: 'Sheet Material', value: '100% Organic Bamboo Viscose' },
      { label: 'Thread Count', value: '400 TC equivalent' },
      { label: 'Protector Type', value: 'Waterproof, breathable' },
      { label: 'Deep Pocket', value: 'Fits up to 16"' },
      { label: 'Care', value: 'Machine wash & dry' },
    ],
  },
  {
    slug: 'serenity-sheets',
    name: 'Serenity Sheet Set',
    tagline: 'Breathable bamboo sheets for cooler sleep',
    description: 'Our Serenity Sheet Set is crafted from 100% organic bamboo viscose for a silky-soft, breathable sleeping experience. Naturally temperature regulating, moisture-wicking, and hypoallergenic – these sheets will transform your nightly comfort.',
    price: 89,
    originalPrice: 129,
    image: 'https://images.unsplash.com/photo-1629197520317-3aae50d6097c?w=600&q=80',
    features: ['100% organic bamboo viscose', 'Silky-soft & breathable', 'Temperature regulating', 'Moisture-wicking', 'Hypoallergenic', 'Deep pocket – fits up to 16"'],
    specs: [
      { label: 'Material', value: '100% Organic Bamboo Viscose' },
      { label: 'Thread Count', value: '400 TC equivalent' },
      { label: 'Deep Pocket', value: 'Fits up to 16"' },
      { label: 'Includes', value: '1 flat sheet, 1 fitted sheet, 2 pillowcases' },
      { label: 'Colors', value: 'White, Ivory, Gray, Navy' },
      { label: 'Care', value: 'Machine wash cold, tumble dry low' },
    ],
  },
  {
    slug: 'protector',
    name: 'Serenity Mattress Protector',
    tagline: 'Invisible protection, maximum comfort',
    description: 'The Serenity Mattress Protector provides waterproof, breathable protection without changing the feel of your Nectar mattress. Its ultra-thin design is completely noiseless and won\'t trap heat, so you sleep cool and protected.',
    price: 69,
    originalPrice: 99,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    features: ['100% waterproof barrier', 'Breathable & noiseless', 'Ultra-thin design', 'Won\'t change mattress feel', 'Hypoallergenic', 'Machine washable'],
    specs: [
      { label: 'Material', value: 'Polyester knit + TPU membrane' },
      { label: 'Waterproof', value: 'Yes – 100% liquid proof' },
      { label: 'Breathable', value: 'Yes – air permeable' },
      { label: 'Deep Pocket', value: 'Fits up to 18"' },
      { label: 'Noise Level', value: 'Silent – no crinkling' },
      { label: 'Care', value: 'Machine wash & tumble dry' },
    ],
  },
  {
    slug: 'firmer-topper',
    name: 'Firmer Mattress Topper',
    tagline: 'Add extra firm support to any mattress',
    description: 'The Firmer Mattress Topper adds a layer of high-density support foam to your mattress, making it firmer and more supportive. Perfect for back and stomach sleepers who want extra firmness, or for refreshing an older mattress.',
    price: 199,
    originalPrice: 349,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    features: ['High-density support foam', 'Adds firmness without losing comfort', 'CertiPUR-US® certified', 'Breathable open-cell design', 'Non-slip bottom', 'Removable, washable cover'],
    specs: [
      { label: 'Thickness', value: '3"' },
      { label: 'Density', value: 'High-density polyfoam' },
      { label: 'Firmness Added', value: '+2 levels on 10-point scale' },
      { label: 'Cover', value: 'Removable, machine washable' },
      { label: 'Certifications', value: 'CertiPUR-US®' },
      { label: 'Trial', value: '50 Nights' },
    ],
  },
  {
    slug: 'softer-topper',
    name: 'Softer Mattress Topper',
    tagline: 'Add plush comfort to any mattress',
    description: 'The Softer Mattress Topper adds a cloud-like layer of gel memory foam to your mattress. Perfect for side sleepers who want extra pressure relief at the shoulders and hips, or anyone who loves a plush sleeping surface.',
    price: 199,
    originalPrice: 349,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    features: ['Gel-infused memory foam', 'Cloud-like plush comfort', 'Pressure relief for side sleepers', 'Cooling gel technology', 'Non-slip bottom', 'Removable, washable cover'],
    specs: [
      { label: 'Thickness', value: '3"' },
      { label: 'Material', value: 'Gel-infused memory foam' },
      { label: 'Softness Added', value: '-2 levels on 10-point scale' },
      { label: 'Cover', value: 'Removable, machine washable' },
      { label: 'Certifications', value: 'CertiPUR-US®' },
      { label: 'Trial', value: '50 Nights' },
    ],
  },
  {
    slug: 'tri-comfort-pillow',
    name: 'Tri-Comfort Adjustable Pillow',
    tagline: 'Three inserts, infinite comfort',
    description: 'The Tri-Comfort Adjustable Pillow features three removable inserts so you can customize the height and firmness to your exact preference. Whether you sleep on your side, back, or stomach, you can build the perfect pillow.',
    price: 79,
    originalPrice: 119,
    badge: 'TOP RATED',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80',
    features: ['3 removable inserts', 'Adjustable height & firmness', 'Cooling gel memory foam', 'Breathable mesh cover', 'Works for all sleep positions', 'Machine washable cover'],
    specs: [
      { label: 'Fill', value: 'Gel memory foam (3 inserts)' },
      { label: 'Cover', value: 'Breathable mesh, removable' },
      { label: 'Adjustable Height', value: '3" to 7"' },
      { label: 'Size', value: 'Standard / King' },
      { label: 'Certifications', value: 'CertiPUR-US®' },
      { label: 'Care', value: 'Cover machine washable' },
    ],
  },
  {
    slug: 'serenity-pillow',
    name: 'Serenity Cooling Pillow',
    tagline: 'Cool, comfortable, and perfectly supportive',
    description: 'The Serenity Cooling Pillow features gel-infused memory foam with a cooling PCM cover that actively draws heat away from your skin. Wake up refreshed with consistent support and temperature regulation all night long.',
    price: 69,
    originalPrice: 99,
    image: 'https://images.unsplash.com/photo-1519235619284-d95d1e37da74?w=600&q=80',
    features: ['Gel-infused memory foam', 'Phase Change Material cover', 'Active heat dissipation', 'Ergonomic contour shape', 'Hypoallergenic', 'Removable, washable cover'],
    specs: [
      { label: 'Fill', value: 'Gel-infused memory foam' },
      { label: 'Cover', value: 'PCM cooling fabric, removable' },
      { label: 'Shape', value: 'Ergonomic contour' },
      { label: 'Height', value: '5"' },
      { label: 'Certifications', value: 'CertiPUR-US®' },
      { label: 'Care', value: 'Cover machine washable' },
    ],
  },
];

export default function BeddingDetailPage() {
  const params = useParams();
  const slugArray = params.slug as string[];
  const slug = slugArray?.[0] || '';
  const product = allBeddingProducts.find(p => p.slug === slug);
  const { addItem } = useCart();

  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'specs'>('details');
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Product Not Found</h1>
          <p className="text-gray-500 mb-6">The bedding product you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/bedding" className="btn-primary">Back to Bedding</Link>
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
          <Link href="/bedding" className="hover:text-blue-700 transition-colors">Bedding</Link>
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
                { icon: <RefreshCw className="w-4 h-4 text-blue-600" />, text: '50-Night Trial' },
                { icon: <Shield className="w-4 h-4 text-green-600" />, text: 'Quality Guarantee' },
                { icon: <Truck className="w-4 h-4 text-yellow-600" />, text: 'Free Shipping' },
                { icon: <Check className="w-4 h-4 text-teal-600" />, text: 'Easy Returns' },
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
