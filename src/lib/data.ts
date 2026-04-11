// ============================================================
// TYPES
// ============================================================
export type Size = 'Twin' | 'Twin XL' | 'Full' | 'Queen' | 'King' | 'Cal King';
export type ProductType = 'mattress' | 'bed-frame' | 'bedding' | 'pillow' | 'bundle';
export type MattressType = 'memory-foam' | 'hybrid';

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  type: ProductType;
  mattressType?: MattressType;
  prices: Record<Size, number>;
  originalPrices: Record<Size, number>;
  rating: number;
  reviewCount: number;
  badge?: string;
  features: string[];
  layers: Layer[];
  specs: Spec[];
  images: string[];
  firmness: number; // 1-10
  sleepPositions: string[];
  highlights: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Layer {
  name: string;
  description: string;
  thickness: string;
}

export interface Spec {
  label: string;
  value: string;
}

export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  title: string;
  body: string;
  date: string;
  verified: boolean;
  productId?: string;
}

export interface Bundle {
  id: string;
  slug: string;
  name: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  savings: number;
  savingsPercent: number;
  includes: string[];
  image: string;
  badge?: string;
}

// ============================================================
// MATTRESS PRODUCTS
// ============================================================
export const mattresses: Product[] = [
  {
    id: 'nectar-classic',
    slug: 'nectar-classic',
    name: 'Nectar Classic',
    tagline: 'Our best-selling memory foam mattress',
    description:
      'The Nectar Classic is the mattress that started it all. Combining premium memory foam layers with our signature cooling cover, it delivers the perfect balance of comfort and support that has helped over 6 million people sleep better.',
    type: 'mattress',
    mattressType: 'memory-foam',
    prices: {
      Twin: 499,
      'Twin XL': 549,
      Full: 699,
      Queen: 799,
      King: 999,
      'Cal King': 999,
    },
    originalPrices: {
      Twin: 999,
      'Twin XL': 1099,
      Full: 1299,
      Queen: 1499,
      King: 1799,
      'Cal King': 1799,
    },
    rating: 4.8,
    reviewCount: 56210,
    badge: 'Best Seller',
    isBestSeller: true,
    features: [
      'Quilted Cool-to-Touch Cover',
      'Dynamic Support Memory Foam',
      'Adaptive Hi Core Memory Foam',
      'Stabilizing Base Layer',
    ],
    layers: [
      {
        name: 'Quilted Cool-to-Touch Cover',
        description: 'Moisture-wicking fabric that keeps you cool all night',
        thickness: '0.5"',
      },
      {
        name: 'Dynamic Support Memory Foam',
        description: 'Gel-infused memory foam for pressure relief and cooling',
        thickness: '3"',
      },
      {
        name: 'Adaptive Hi Core Foam',
        description: 'Responsive transition foam for deep sleep support',
        thickness: '2"',
      },
      {
        name: 'Stabilizing Base Layer',
        description: 'Heavy-duty base for durability and edge support',
        thickness: '5.5"',
      },
    ],
    specs: [
      { label: 'Height', value: '12"' },
      { label: 'Firmness', value: 'Medium (5/10)' },
      { label: 'Cover Material', value: 'Tencel & Polyester Blend' },
      { label: 'Certifications', value: 'CertiPUR-US® Certified' },
      { label: 'Trial', value: '365 Nights' },
      { label: 'Warranty', value: 'Forever Warranty™' },
    ],
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    ],
    firmness: 5,
    sleepPositions: ['Side', 'Back', 'Stomach'],
    highlights: ['365-Night Trial', 'Free Shipping', 'Forever Warranty™', 'CertiPUR-US®'],
  },
  {
    id: 'nectar-premier',
    slug: 'nectar-premier',
    name: 'Nectar Premier',
    tagline: 'Extra cushioning for those who want more',
    description:
      'The Nectar Premier takes the beloved Classic to the next level with an extra layer of premium memory foam. For those who want a plush feel without sacrificing support, the Premier is the perfect upgrade.',
    type: 'mattress',
    mattressType: 'memory-foam',
    prices: {
      Twin: 699,
      'Twin XL': 749,
      Full: 899,
      Queen: 999,
      King: 1199,
      'Cal King': 1199,
    },
    originalPrices: {
      Twin: 1299,
      'Twin XL': 1399,
      Full: 1699,
      Queen: 1899,
      King: 2199,
      'Cal King': 2199,
    },
    rating: 4.8,
    reviewCount: 12480,
    badge: 'Most Popular',
    features: [
      'Copper-Treated Memory Foam',
      'Phase Change Material Cover',
      'Dual-Action Pressure Relief',
      'Enhanced Lumbar Zone',
    ],
    layers: [
      {
        name: 'Phase Change Material Cover',
        description: 'Advanced cooling cover that actively absorbs and releases heat',
        thickness: '1"',
      },
      {
        name: 'Copper-Infused Memory Foam',
        description: 'Antimicrobial copper for cooling and hygiene',
        thickness: '3"',
      },
      {
        name: 'Pressure Relief Foam',
        description: 'Extra soft layer for shoulder and hip pressure points',
        thickness: '2"',
      },
      {
        name: 'Dynamic Support Layer',
        description: 'Zoned support for lower back alignment',
        thickness: '2"',
      },
      {
        name: 'Stabilizing Base Layer',
        description: 'Heavy-duty base for lasting durability',
        thickness: '5"',
      },
    ],
    specs: [
      { label: 'Height', value: '13"' },
      { label: 'Firmness', value: 'Medium (5/10)' },
      { label: 'Cover Material', value: 'Phase Change Material' },
      { label: 'Certifications', value: 'CertiPUR-US® Certified' },
      { label: 'Trial', value: '365 Nights' },
      { label: 'Warranty', value: 'Forever Warranty™' },
    ],
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    ],
    firmness: 5,
    sleepPositions: ['Side', 'Back'],
    highlights: ['365-Night Trial', 'Free Shipping', 'Forever Warranty™', 'Copper Infused'],
  },
  {
    id: 'nectar-luxe',
    slug: 'nectar-luxe',
    name: 'Nectar Luxe',
    tagline: 'Hotel-quality luxury at home',
    description:
      'Experience the pinnacle of memory foam technology with the Nectar Luxe. Featuring our most advanced cooling technology and premium materials throughout, the Luxe delivers a truly luxurious sleep experience.',
    type: 'mattress',
    mattressType: 'memory-foam',
    prices: {
      Twin: 899,
      'Twin XL': 949,
      Full: 1099,
      Queen: 1299,
      King: 1599,
      'Cal King': 1599,
    },
    originalPrices: {
      Twin: 1699,
      'Twin XL': 1799,
      Full: 2099,
      Queen: 2499,
      King: 2999,
      'Cal King': 2999,
    },
    rating: 4.9,
    reviewCount: 8920,
    badge: 'Premium',
    features: [
      'Advanced Cooling Technology',
      'Ergonomic Zone Support',
      'Premium Memory Foam',
      'Luxury Tencel Cover',
    ],
    layers: [
      {
        name: 'Luxury Tencel™ Cover',
        description: 'Softest natural fiber cover, naturally temperature regulating',
        thickness: '1"',
      },
      {
        name: 'Advanced Cooling Memory Foam',
        description: 'PCM + Copper gel infused for maximum cooling',
        thickness: '3"',
      },
      {
        name: 'Ergonomic Zone Foam',
        description: 'Intelligently zoned for head, shoulders, hips, and feet',
        thickness: '3"',
      },
      {
        name: 'Dynamic Support Layer',
        description: 'Micro-coil enhanced foam layer for bounce and support',
        thickness: '2"',
      },
      {
        name: 'Stabilizing Base',
        description: 'High-density base for maximum durability',
        thickness: '5"',
      },
    ],
    specs: [
      { label: 'Height', value: '14"' },
      { label: 'Firmness', value: 'Medium-Soft (4/10)' },
      { label: 'Cover Material', value: 'Tencel™ Lyocell' },
      { label: 'Certifications', value: 'CertiPUR-US® + OEKO-TEX®' },
      { label: 'Trial', value: '365 Nights' },
      { label: 'Warranty', value: 'Forever Warranty™' },
    ],
    images: [
      'https://lexingtonoverstockwarehouse.com/wp-content/uploads/2023/07/NM-M142.jpg',
    ],
    firmness: 4,
    sleepPositions: ['Side', 'Back'],
    highlights: ['365-Night Trial', 'OEKO-TEX® Certified', 'Forever Warranty™', 'Ergonomic Zones'],
  },
  {
    id: 'nectar-classic-hybrid',
    slug: 'nectar-classic-hybrid',
    name: 'Nectar Classic Hybrid',
    tagline: 'The best of foam and coils combined',
    description:
      'The Nectar Classic Hybrid combines the beloved comfort of our memory foam with a premium pocketed coil system. Get superior airflow, edge support, and a bouncy-yet-cradling feel that works for all sleep styles.',
    type: 'mattress',
    mattressType: 'hybrid',
    prices: {
      Twin: 699,
      'Twin XL': 749,
      Full: 899,
      Queen: 999,
      King: 1299,
      'Cal King': 1299,
    },
    originalPrices: {
      Twin: 1299,
      'Twin XL': 1399,
      Full: 1699,
      Queen: 1899,
      King: 2399,
      'Cal King': 2399,
    },
    rating: 4.8,
    reviewCount: 22340,
    badge: 'Best Hybrid',
    isBestSeller: true,
    features: [
      '1000+ Individually Wrapped Coils',
      'Memory Foam Comfort Layer',
      'Enhanced Edge Support',
      'Superior Airflow System',
    ],
    layers: [
      {
        name: 'Quilted Cool-to-Touch Cover',
        description: 'Breathable quilted cover for instant cool feel',
        thickness: '0.5"',
      },
      {
        name: 'Memory Foam Comfort Layer',
        description: 'Pressure-relieving memory foam',
        thickness: '2"',
      },
      {
        name: 'Transition Foam',
        description: 'Buffer layer between foam and coils',
        thickness: '1"',
      },
      {
        name: 'Pocketed Coil System',
        description: '1000+ individually wrapped coils for motion isolation and support',
        thickness: '6"',
      },
      {
        name: 'Base Foam',
        description: 'High-density base for stability',
        thickness: '1.5"',
      },
    ],
    specs: [
      { label: 'Height', value: '12"' },
      { label: 'Firmness', value: 'Medium (5/10)' },
      { label: 'Coil Count (Queen)', value: '1,056' },
      { label: 'Certifications', value: 'CertiPUR-US® Certified' },
      { label: 'Trial', value: '365 Nights' },
      { label: 'Warranty', value: 'Forever Warranty™' },
    ],
    images: [
      'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=800&q=80',
    ],
    firmness: 5,
    sleepPositions: ['Side', 'Back', 'Stomach'],
    highlights: ['365-Night Trial', 'Free Shipping', 'Forever Warranty™', '1000+ Coils'],
  },
  {
    id: 'nectar-premier-hybrid',
    slug: 'nectar-premier-hybrid',
    name: 'Nectar Premier Hybrid',
    tagline: 'Premium hybrid with advanced cooling',
    description:
      'Upgrade your sleep with the Nectar Premier Hybrid. Featuring copper-infused memory foam atop a supportive coil system, this mattress offers exceptional cooling, bounce, and contouring for a truly personalized sleep experience.',
    type: 'mattress',
    mattressType: 'hybrid',
    prices: {
      Twin: 899,
      'Twin XL': 949,
      Full: 1099,
      Queen: 1299,
      King: 1599,
      'Cal King': 1599,
    },
    originalPrices: {
      Twin: 1699,
      'Twin XL': 1799,
      Full: 2099,
      Queen: 2499,
      King: 2999,
      'Cal King': 2999,
    },
    rating: 4.9,
    reviewCount: 9870,
    badge: 'Editor\'s Choice',
    features: [
      'Copper-Infused Memory Foam',
      '1000+ Pocketed Coils',
      'Zoned Lumbar Support',
      'Advanced Cooling Cover',
    ],
    layers: [
      {
        name: 'Phase Change Material Cover',
        description: 'Actively absorbs and releases heat for constant comfort',
        thickness: '1"',
      },
      {
        name: 'Copper Memory Foam',
        description: 'Antibacterial copper for cooling and hygiene benefits',
        thickness: '2"',
      },
      {
        name: 'Pressure Relief Foam',
        description: 'Extra soft comfort for pressure points',
        thickness: '2"',
      },
      {
        name: 'Zoned Coil System',
        description: 'Targeted support with reinforced lumbar zone',
        thickness: '6"',
      },
      {
        name: 'Base Foam',
        description: 'Dense base for edge-to-edge support',
        thickness: '1.5"',
      },
    ],
    specs: [
      { label: 'Height', value: '13"' },
      { label: 'Firmness', value: 'Medium (5/10)' },
      { label: 'Coil Count (Queen)', value: '1,128' },
      { label: 'Certifications', value: 'CertiPUR-US® Certified' },
      { label: 'Trial', value: '365 Nights' },
      { label: 'Warranty', value: 'Forever Warranty™' },
    ],
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    ],
    firmness: 5,
    sleepPositions: ['Side', 'Back'],
    highlights: ['365-Night Trial', 'Copper Infused', 'Forever Warranty™', 'Zoned Support'],
  },
  {
    id: 'nectar-ultra',
    slug: 'nectar-ultra',
    name: 'Nectar Ultra',
    tagline: 'The ultimate in memory foam luxury',
    description:
      'The Nectar Ultra is our most premium memory foam mattress. With 5 layers of advanced materials including our proprietary Ultra-Cool™ technology, it delivers an unmatched sleep experience.',
    type: 'mattress',
    mattressType: 'memory-foam',
    prices: { Twin: 1099, 'Twin XL': 1149, Full: 1299, Queen: 1599, King: 1999, 'Cal King': 1999 },
    originalPrices: { Twin: 2099, 'Twin XL': 2199, Full: 2499, Queen: 2999, King: 3699, 'Cal King': 3699 },
    rating: 4.9,
    reviewCount: 4320,
    badge: 'Ultra Premium',
    isNew: true,
    features: ['Ultra-Cool™ Cooling Technology', 'Pressure-Mapping Foam Zones', 'Organic Cotton Cover', 'Edge-to-Edge Support'],
    layers: [
      { name: 'Organic Cotton Cover', description: 'GOTS certified organic cotton', thickness: '1"' },
      { name: 'Ultra-Cool™ Foam', description: 'Our most advanced temperature-regulating foam', thickness: '3"' },
      { name: 'Pressure Mapping Foam', description: 'Intelligently adapts to your body shape', thickness: '3"' },
      { name: 'Zoned Transition Foam', description: '7-zone support for aligned sleep', thickness: '2"' },
      { name: 'Ultra Base Layer', description: 'Reinforced high-density base for decades of durability', thickness: '5"' },
    ],
    specs: [
      { label: 'Height', value: '14"' },
      { label: 'Firmness', value: 'Medium-Soft (4/10)' },
      { label: 'Cover Material', value: 'Organic Cotton' },
      { label: 'Certifications', value: 'GOTS + CertiPUR-US® + OEKO-TEX®' },
      { label: 'Trial', value: '365 Nights' },
      { label: 'Warranty', value: 'Forever Warranty™' },
    ],
    images: [
      'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=800&q=80',
    ],
    firmness: 4,
    sleepPositions: ['Side', 'Back'],
    highlights: ['365-Night Trial', 'Organic Cotton', 'Forever Warranty™', '7-Zone Support'],
  },
  {
    id: 'nectar-luxe-hybrid',
    slug: 'nectar-luxe-hybrid',
    name: 'Nectar Luxe Hybrid',
    tagline: 'Luxury hybrid for the ultimate sleep upgrade',
    description:
      'The Nectar Luxe Hybrid combines our most advanced cooling foam layers with a reinforced coil system for exceptional plush comfort and robust support.',
    type: 'mattress',
    mattressType: 'hybrid',
    prices: { Twin: 1099, 'Twin XL': 1149, Full: 1299, Queen: 1599, King: 1999, 'Cal King': 1999 },
    originalPrices: { Twin: 2099, 'Twin XL': 2199, Full: 2499, Queen: 2999, King: 3699, 'Cal King': 3699 },
    rating: 4.9,
    reviewCount: 5640,
    badge: 'Premium Hybrid',
    features: ['Tencel™ Cooling Cover', 'PCM + Copper Foam Layers', '1200+ Reinforced Coils', 'Ergonomic 7-Zone Support'],
    layers: [
      { name: 'Tencel™ Cooling Cover', description: 'Natural breathable Tencel fabric', thickness: '1"' },
      { name: 'PCM Cooling Foam', description: 'Phase Change Material for temperature regulation', thickness: '2"' },
      { name: 'Copper Comfort Foam', description: 'Antimicrobial copper gel foam', thickness: '2"' },
      { name: 'Reinforced Coil System', description: '1,200+ wrapped coils for durability', thickness: '7"' },
      { name: 'High-Density Base', description: 'Premium base foam for long-lasting support', thickness: '1.5"' },
    ],
    specs: [
      { label: 'Height', value: '14"' },
      { label: 'Firmness', value: 'Medium-Soft (4/10)' },
      { label: 'Coil Count (Queen)', value: '1,248' },
      { label: 'Certifications', value: 'CertiPUR-US® + OEKO-TEX®' },
      { label: 'Trial', value: '365 Nights' },
      { label: 'Warranty', value: 'Forever Warranty™' },
    ],
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
    ],
    firmness: 4,
    sleepPositions: ['Side', 'Back'],
    highlights: ['365-Night Trial', 'OEKO-TEX® Certified', 'Forever Warranty™', '1200+ Coils'],
  },
  {
    id: 'nectar-ultra-hybrid',
    slug: 'nectar-ultra-hybrid',
    name: 'Nectar Ultra Hybrid',
    tagline: 'Our most advanced hybrid mattress ever',
    description:
      'The Nectar Ultra Hybrid combines our most advanced foam system with a premium coil base for unparalleled support, cooling, and comfort.',
    type: 'mattress',
    mattressType: 'hybrid',
    prices: { Twin: 1299, 'Twin XL': 1349, Full: 1599, Queen: 1899, King: 2399, 'Cal King': 2399 },
    originalPrices: { Twin: 2499, 'Twin XL': 2599, Full: 2999, Queen: 3599, King: 4499, 'Cal King': 4499 },
    rating: 5.0,
    reviewCount: 2180,
    badge: 'Ultra Hybrid',
    isNew: true,
    features: ['Organic Cotton + PCM Cover', 'Triple-Layer Cooling Foam', '1400+ Ultra-Gauge Coils', 'Full-Body Ergonomic Zones'],
    layers: [
      { name: 'Organic Cotton + PCM Cover', description: 'GOTS organic cotton + phase change material', thickness: '1.5"' },
      { name: 'Ultra-Cool™ Memory Foam', description: 'Our most cooling memory foam ever', thickness: '2"' },
      { name: 'Copper Comfort Foam', description: 'Premium copper-infused foam', thickness: '2"' },
      { name: 'Ultra-Gauge Coil System', description: '1,400+ thick-gauge coils', thickness: '8"' },
      { name: 'Ultra Base', description: 'Reinforced high-density base for edge support', thickness: '1.5"' },
    ],
    specs: [
      { label: 'Height', value: '15"' },
      { label: 'Firmness', value: 'Medium (5/10)' },
      { label: 'Coil Count (Queen)', value: '1,428' },
      { label: 'Certifications', value: 'GOTS + CertiPUR-US® + OEKO-TEX®' },
      { label: 'Trial', value: '365 Nights' },
      { label: 'Warranty', value: 'Forever Warranty™' },
    ],
    images: [
      'https://www.slumberland.com/cdn/shop/files/QK1089283_ASSL_AFR_OL.jpg?v=1763488601&width=1214',
    ],
    firmness: 5,
    sleepPositions: ['Side', 'Back', 'Stomach'],
    highlights: ['365-Night Trial', 'Organic Cotton', 'Forever Warranty™', '1400+ Coils'],
  },
];

// ============================================================
// REVIEWS
// ============================================================
export const reviews: Review[] = [
  {
    id: 'r1',
    author: 'Conner B.',
    rating: 5,
    title: 'Great night\'s sleep',
    body: 'This mattress has been a great investment! My wife and I have gotten a great night sleep every night since purchasing. Soft yet firm and supportive.',
    date: '2024-03-15',
    verified: true,
    productId: 'nectar-classic',
  },
  {
    id: 'r2',
    author: 'Kaitlynne S.',
    rating: 5,
    title: 'Great investment',
    body: 'I dreaded paying for a new mattress but my old one was 15 years old…buying a Nectar was the best choice I could have made! It is so comfortable and didn\'t cost an arm and a leg.',
    date: '2024-02-28',
    verified: true,
  },
  {
    id: 'r3',
    author: 'Tomora S.',
    rating: 5,
    title: 'Love it!!',
    body: 'I can\'t believe I waited so long to replace my old mattress. I was waking up with back pain for months. But from day 1 of having the Nectar bed, I didn\'t wake up with back pain.',
    date: '2024-01-10',
    verified: true,
    productId: 'nectar-classic',
  },
  {
    id: 'r4',
    author: 'Kenneth K.',
    rating: 5,
    title: 'Perfect level of comfort',
    body: 'My wife and I had used the same bed for close to 10 years. Since day 1, we have both loved it and highly recommend it to anyone.',
    date: '2024-04-02',
    verified: true,
    productId: 'nectar-classic-hybrid',
  },
  {
    id: 'r5',
    author: 'Katie P.',
    rating: 5,
    title: 'Best sleep ever!',
    body: 'The Nectar mattress is perfect for me! No more hip and back pain in the morning. I previously had a top of the line coil/spring mattress 3x as expensive and every morning I woke up in pain.',
    date: '2024-03-20',
    verified: true,
  },
  {
    id: 'r6',
    author: 'Lara R.',
    rating: 5,
    title: 'Back stopped hurting!',
    body: 'My fiance\'s back had been hurting for months in our old bed. After reading so many of Nectar\'s positive reviews, we purchased the mattress and love it!',
    date: '2024-04-05',
    verified: true,
    productId: 'nectar-premier',
  },
];

// ============================================================
// NAV STRUCTURE
// ============================================================
export const navItems = [
  {
    label: 'Mattresses',
    href: '/mattresses',
    megaMenu: [
      {
        title: 'Memory Foam',
        href: '/mattresses?type=memory-foam',
        items: [
          { label: 'Nectar Classic', href: '/mattresses/nectar-classic' },
          { label: 'Nectar Premier', href: '/mattresses/nectar-premier' },
          { label: 'Nectar Luxe', href: '/mattresses/nectar-luxe' },
          { label: 'Nectar Ultra', href: '/mattresses/nectar-ultra' },
        ],
      },
      {
        title: 'Hybrid',
        href: '/mattresses?type=hybrid',
        items: [
          { label: 'Nectar Classic Hybrid', href: '/mattresses/nectar-classic-hybrid' },
          { label: 'Nectar Premier Hybrid', href: '/mattresses/nectar-premier-hybrid' },
          { label: 'Nectar Luxe Hybrid', href: '/mattresses/nectar-luxe-hybrid' },
          { label: 'Nectar Ultra Hybrid', href: '/mattresses/nectar-ultra-hybrid' },
        ],
      },
      {
        title: 'Kids',
        href: '/kids',
        items: [{ label: 'Nectar Kids Mattress', href: '/kids/mattress' }],
      },
    ],
  },
  {
    label: 'Bundles',
    href: '/bundles',
    badge: 'SAVE UP TO 66%',
    megaMenu: [
      {
        title: 'Mattress Bundles',
        href: '/bundles',
        items: [
          { label: 'Premier Adjustable Bundle', href: '/bundles/adjustable-frame' },
          { label: 'Mornington Bundle', href: '/bundles/mornington' },
          { label: 'Foundation Bundle', href: '/bundles/foundation' },
          { label: 'Bamboo Bundle', href: '/bundles/bamboo' },
        ],
      },
      {
        title: 'Bedroom Sets',
        href: '/bundles?type=bedroom-sets',
        items: [
          { label: 'Socalle Bedroom Set', href: '/bedroom-sets/socalle' },
          { label: 'Calverson Bedroom Set', href: '/bedroom-sets/calverson' },
        ],
      },
    ],
  },
  {
    label: 'Bed Frames',
    href: '/bed-frames',
    megaMenu: [
      {
        title: 'Adjustable Bases',
        href: '/bed-frames?type=adjustable',
        items: [
          { label: 'Classic Adjustable Base', href: '/bed-frames/classic-adjustable' },
          { label: 'Premier Adjustable Base', href: '/bed-frames/premier-adjustable' },
        ],
      },
      {
        title: 'Bed Frames',
        href: '/bed-frames',
        items: [
          { label: 'Lumea Platform Bed Frame', href: '/bed-frames/lumea' },
          { label: 'Onita Storage Bed Frame', href: '/bed-frames/onita' },
          { label: 'Mornington Bed Frame', href: '/bed-frames/mornington' },
          { label: 'Bamboo Bed Frame', href: '/bed-frames/bamboo' },
          { label: 'Foundation Bed Frame', href: '/bed-frames/foundation' },
        ],
      },
    ],
  },
  {
    label: 'Bedding',
    href: '/bedding',
    megaMenu: [
      {
        title: 'Bedding',
        href: '/bedding',
        items: [
          { label: 'Serenity Sleep Bundle', href: '/bedding/serenity-bundle' },
          { label: 'Serenity Sheet Set', href: '/bedding/serenity-sheets' },
          { label: 'Serenity Mattress Protector', href: '/bedding/protector' },
          { label: 'Firmer Mattress Topper', href: '/bedding/firmer-topper' },
          { label: 'Softer Mattress Topper', href: '/bedding/softer-topper' },
        ],
      },
      {
        title: 'Pillows',
        href: '/bedding?type=pillows',
        items: [
          { label: 'Tri-Comfort Adjustable Pillow', href: '/bedding/tri-comfort-pillow' },
          { label: 'Serenity Cooling Pillow', href: '/bedding/serenity-pillow' },
        ],
      },
    ],
  },
  { label: 'Kids', href: '/kids' },
  { label: 'Sale', href: '/sale', badge: 'HOT' },
];

// ============================================================
// TRUST BADGES
// ============================================================
export const trustBadges = [
  {
    id: 'trial',
    icon: '🌙',
    title: '365-Night Home Trial',
    description: 'Sleep on it for up to a year. If you don\'t love it, we\'ll pick it up for free.',
  },
  {
    id: 'warranty',
    icon: '🛡️',
    title: 'Forever Warranty™',
    description: 'We stand behind our mattresses forever. That\'s not a typo.',
  },
  {
    id: 'shipping',
    icon: '🚚',
    title: 'Free Shipping & Returns',
    description: 'Your mattress ships free to your door, compressed in a box.',
  },
  {
    id: 'financing',
    icon: '💳',
    title: 'Financing Available',
    description: 'Pay as low as $35/month with our flexible financing options.',
  },
];

// ============================================================
// STATS
// ============================================================
export const stats = [
  { value: '6M+', label: 'Happy Sleepers' },
  { value: '100K+', label: '5-Star Reviews' },
  { value: '200+', label: 'Awards Won' },
  { value: '4,365', label: 'Partner Stores' },
];

// ============================================================
// FOOTER LINKS
// ============================================================
export const footerLinks = {
  shop: [
    { label: 'All Mattresses', href: '/mattresses' },
    { label: 'King Size Mattresses', href: '/mattresses' },
    { label: 'Queen Size Mattresses', href: '/mattresses' },
    { label: 'Full Size Mattresses', href: '/mattresses' },
    { label: 'Twin Size Mattresses', href: '/mattresses' },
    { label: 'Compare Mattresses', href: '/mattresses' },
    { label: 'Mattress Finder Quiz', href: '/quiz' },
  ],
  discounts: [
    { label: 'Military Discount', href: '/sale' },
    { label: 'First Responders Discount', href: '/sale' },
    { label: 'Healthcare Professional Discount', href: '/sale' },
  ],
  support: [
    { label: 'Contact Us', href: '/help' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Returns', href: '/faq' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Financing Options', href: '/financing' },
    { label: 'Trial Policies', href: '/trial-policy' },
    { label: 'Warranty Policies', href: '/warranty' },
  ],
  about: [
    { label: 'Our Story', href: '/about' },
    { label: 'Stores', href: '/stores' },
    { label: 'Careers', href: '/about' },
    { label: 'Affiliate Program', href: '/about' },
    { label: 'Awards', href: '/about' },
  ],
  resources: [
    { label: 'Sleep Calculator', href: '/quiz' },
    { label: 'Mattress Size Guide', href: '/faq' },
    { label: 'Mattress Buying Guide', href: '/faq' },
    { label: 'Side Sleeper Guide', href: '/faq' },
    { label: 'Better Sleep Blog', href: '/about' },
  ],
};
