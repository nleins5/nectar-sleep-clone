import Link from 'next/link';
import { ChevronRight, RefreshCw, Shield, Truck, Star, Award, Users, Globe, Heart } from 'lucide-react';

export const metadata = { title: 'About Nectar Sleep – Our Story & Policies' };

const awards = [
  { org: 'Good Housekeeping', award: 'Best Mattress', year: '2024' },
  { org: 'Forbes Health', award: '#1 Rated Mattress', year: '2024' },
  { org: 'Sleep Foundation', award: 'Best Memory Foam', year: '2024' },
  { org: 'USA Today', award: 'Best Overall Mattress', year: '2023' },
  { org: 'CNN Underscored', award: 'Best Value Mattress', year: '2024' },
  { org: 'CNET', award: 'Best Mattress in a Box', year: '2023' },
];

const policies = [
  {
    icon: <RefreshCw size={28} color="#1a3c5e" />,
    title: '365-Night Home Trial',
    badge: 'Trial Policy',
    badgeColor: '#1a3c5e',
    desc: 'Try your Nectar mattress for a full 365 nights in your own home. If you\'re not completely satisfied for any reason, contact us within the trial period and we\'ll arrange a free pickup and issue a full refund.',
    details: [
      'Trial begins on the date of delivery',
      'Recommend at least 30 nights before deciding',
      'Free pickup — we come to you',
      'Full refund, no questions asked',
      'Applies to all mattress purchases',
    ],
  },
  {
    icon: <Shield size={28} color="#059669" />,
    title: 'Forever Warranty™',
    badge: 'Warranty Policy',
    badgeColor: '#059669',
    desc: 'Every Nectar mattress comes with our Forever Warranty™ — a lifetime guarantee against manufacturing defects. For as long as you own your mattress, Nectar has you covered.',
    details: [
      'Covers visible indentations > 1.5 inches',
      'Covers defective cover or zipper',
      'Covers broken or split foam layers',
      'Valid as long as you own the mattress',
      'Replacement at no charge (original buyer only)',
    ],
  },
  {
    icon: <Truck size={28} color="#d97706" />,
    title: 'Free Shipping & Returns',
    badge: 'Shipping Policy',
    badgeColor: '#d97706',
    desc: 'We offer free standard shipping to all contiguous US addresses. Your mattress arrives compressed in a compact box via FedEx or UPS, typically within 3–7 business days.',
    details: [
      'Free delivery to all 48 contiguous states',
      'Ships in 1–3 business days',
      'Arrives in 3–7 business days',
      'Free returns during your 365-night trial',
      'White glove delivery available for bundles',
    ],
  },
];

const team = [
  { name: 'Eric Becker', role: 'CEO & Co-founder', initial: 'E' },
  { name: 'James Brillon', role: 'Chief Product Officer', initial: 'J' },
  { name: 'Sarah Chen', role: 'Head of Customer Experience', initial: 'S' },
  { name: 'Mark Davis', role: 'Chief Sleep Scientist', initial: 'M' },
];

export default function AboutPage() {
  return (
    <div style={{ background: '#f9fafb', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #060d18, #1a3c5e)', color: 'white', padding: '90px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#93c5fd', marginBottom: 12 }}>Our Story</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 800, marginBottom: 20, lineHeight: 1.1 }}>
            We Focus on One Thing Only
          </h1>
          <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: 600, margin: '0 auto 36px' }}>
            The most comfortable bed possible. Everything we develop, design, and test has only one mission — your rest.
          </p>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { value: '6M+', label: 'Customers' },
              { value: '200+', label: 'Awards Won' },
              { value: '4,365+', label: 'Partner Stores' },
              { value: '2016', label: 'Founded' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 900 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '80px 24px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#1a3c5e', marginBottom: 12 }}>Our Mission</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 700, color: '#111827', marginBottom: 20, lineHeight: 1.2 }}>
              Better Sleep for Everyone
            </h2>
            <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.8, marginBottom: 16 }}>
              Nectar was founded in 2016 with a simple idea: everyone deserves a great night&apos;s sleep, and it shouldn&apos;t cost a fortune. We eliminated the middleman, went direct-to-consumer, and passed those savings to you.
            </p>
            <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.8 }}>
              Today, over 6 million people trust Nectar for their sleep. We remain obsessively focused on quality, comfort, and your satisfaction — with policies like our 365-night trial and Forever Warranty™ that back up that promise.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { icon: <Heart size={22} color="#1a3c5e" />, title: 'Customer First', desc: 'Every decision starts with what\'s best for your sleep.' },
              { icon: <Award size={22} color="#1a3c5e" />, title: 'Award-Winning', desc: '200+ industry awards from trusted publications.' },
              { icon: <Globe size={22} color="#1a3c5e" />, title: 'Sustainable', desc: 'CertiPUR-US® certified foams. Eco-friendly packaging.' },
              { icon: <Users size={22} color="#1a3c5e" />, title: 'Community', desc: '6M+ happy sleepers and counting worldwide.' },
            ].map(item => (
              <div key={item.title} style={{ background: 'white', borderRadius: 16, padding: 20, border: '1px solid #e5e7eb' }}>
                <div style={{ marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#111827', marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section style={{ background: 'white', padding: '80px 24px', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#1a3c5e', marginBottom: 8, textAlign: 'center' }}>Our Promises</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 700, color: '#111827', marginBottom: 8, textAlign: 'center' }}>
            Policies That Have Your Back
          </h2>
          <p style={{ fontSize: 16, color: '#6b7280', textAlign: 'center', marginBottom: 48 }}>We stand behind every mattress we sell — for life.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {policies.map(p => (
              <div key={p.title} style={{ borderRadius: 20, padding: 32, border: '2px solid #e5e7eb', background: '#f9fafb' }}>
                <span style={{ display: 'inline-block', background: p.badgeColor, color: 'white', fontSize: 11, fontWeight: 700, padding: '3px 12px', borderRadius: 12, marginBottom: 16 }}>
                  {p.badge}
                </span>
                <div style={{ marginBottom: 16 }}>{p.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#111827', marginBottom: 12 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {p.details.map(d => (
                    <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#374151' }}>
                      <span style={{ color: '#059669', fontWeight: 700, marginTop: 1 }}>✓</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#1a3c5e', marginBottom: 8, textAlign: 'center' }}>Recognition</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 700, color: '#111827', marginBottom: 8, textAlign: 'center' }}>
          Award-Winning Sleep
        </h2>
        <p style={{ fontSize: 16, color: '#6b7280', textAlign: 'center', marginBottom: 40 }}>Named best mattress by the world&apos;s most trusted publications.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {awards.map(a => (
            <div key={a.org} style={{ background: 'white', borderRadius: 16, padding: '24px 28px', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Star size={22} fill="#f59e0b" color="#f59e0b" />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#111827' }}>{a.award}</div>
                <div style={{ fontSize: 13, color: '#6b7280' }}>{a.org} · {a.year}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ background: 'white', padding: '80px 24px', borderTop: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: '#111827', marginBottom: 8, textAlign: 'center' }}>
            Meet the Team
          </h2>
          <p style={{ fontSize: 16, color: '#6b7280', textAlign: 'center', marginBottom: 40 }}>The people obsessed with your sleep.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24, marginBottom: 48 }}>
            {team.map(m => (
              <div key={m.name} style={{ textAlign: 'center' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #1a3c5e, #2d5f8a)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 28, margin: '0 auto 14px' }}>
                  {m.initial}
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 4 }}>{m.name}</div>
                <div style={{ fontSize: 13, color: '#6b7280' }}>{m.role}</div>
              </div>
            ))}
          </div>

          {/* Careers CTA */}
          <div style={{ background: '#f0fdf4', borderRadius: 20, padding: 36, textAlign: 'center', border: '1px solid #bbf7d0' }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Join Our Team</h3>
            <p style={{ fontSize: 15, color: '#4b5563', marginBottom: 20 }}>We&apos;re hiring passionate people who believe everyone deserves better sleep.</p>
            <a href="mailto:careers@nectarsleep.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: '#1a3c5e', color: 'white', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              View Open Roles <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Affiliate */}
      <section style={{ padding: '80px 24px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, #1a3c5e, #2d5f8a)', borderRadius: 24, padding: '56px 48px', color: 'white', textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#93c5fd', marginBottom: 12 }}>Partner With Us</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, marginBottom: 12 }}>Affiliate Program</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', marginBottom: 28, lineHeight: 1.7, maxWidth: 500, margin: '0 auto 28px' }}>
            Earn up to 8% commission on every sale you refer. Join thousands of sleep bloggers, influencers, and publishers who partner with Nectar.
          </p>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
            {['Up to 8% Commission', '30-Day Cookie', 'Monthly Payouts', 'Dedicated Support'].map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, color: 'rgba(255,255,255,0.9)' }}>
                <span style={{ color: '#34d399' }}>✓</span> {f}
              </div>
            ))}
          </div>
          <a href="mailto:affiliates@nectarsleep.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 40px', background: 'white', color: '#1a3c5e', borderRadius: 14, fontWeight: 800, fontSize: 16, textDecoration: 'none' }}>
            Apply Now <ChevronRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
}
