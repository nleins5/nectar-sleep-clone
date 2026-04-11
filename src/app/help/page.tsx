import Link from 'next/link';
import { MessageCircle, Mail, Phone, FileQuestion, RefreshCw, Shield, Truck, Clock, ChevronRight } from 'lucide-react';

export const metadata = { title: 'Contact Us – Nectar Sleep Help Center' };

const topics = [
  { icon: '📦', title: 'Order Status & Tracking', desc: 'Check on your delivery or track your order in real-time.', href: '/faq' },
  { icon: '↩️', title: 'Returns & Refunds', desc: 'Start a return within your 365-night trial period.', href: '/faq' },
  { icon: '🛡️', title: 'Warranty Claims', desc: 'File a claim under our Forever Warranty™.', href: '/terms' },
  { icon: '🛏️', title: 'Mattress Setup Help', desc: 'Tips on unboxing, expanding, and setting up your mattress.', href: '/faq' },
  { icon: '💳', title: 'Financing & Payments', desc: 'Questions about Affirm, billing, or payment options.', href: '/financing' },
  { icon: '🔄', title: 'Trial Policy', desc: 'Everything about the 365-night home trial.', href: '/faq' },
];

export default function HelpPage() {
  return (
    <div style={{ background: '#f9fafb', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #060d18, #1a3c5e)', color: 'white', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#93c5fd', marginBottom: 12 }}>We&apos;re Here to Help</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 800, marginBottom: 16 }}>How Can We Help You?</h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 32 }}>
            Our sleep specialists are available 7 days a week to answer any questions about your Nectar order, return, or warranty.
          </p>
          {/* Search bar (decorative) */}
          <div style={{ display: 'flex', maxWidth: 520, margin: '0 auto', background: 'white', borderRadius: 14, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
            <input
              type="text"
              placeholder="Search help articles..."
              style={{ flex: 1, padding: '18px 20px', border: 'none', outline: 'none', fontSize: 15, color: '#111827' }}
            />
            <button style={{ padding: '18px 28px', background: '#1a3c5e', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 15 }}>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section style={{ padding: '64px 24px 0', maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: '#111827', marginBottom: 8, textAlign: 'center' }}>
          Contact Our Team
        </h2>
        <p style={{ fontSize: 16, color: '#6b7280', textAlign: 'center', marginBottom: 40 }}>
          Choose the best way to reach us – we typically respond within minutes.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {[
            {
              icon: <MessageCircle size={32} color="#1a3c5e" />,
              title: 'Live Chat',
              desc: 'Chat with a sleep specialist now. Available Mon–Sun, 9am–9pm ET.',
              action: 'Start Live Chat',
              badge: 'Fastest',
              badgeColor: '#059669',
              bg: '#f0fdf4',
            },
            {
              icon: <Phone size={32} color="#1a3c5e" />,
              title: 'Call Us',
              desc: '(888) 863-2827\nMon–Fri 9am–6pm ET\nSat–Sun 10am–5pm ET',
              action: 'Call Now',
              badge: '',
              badgeColor: '',
              bg: '#eff6ff',
            },
            {
              icon: <Mail size={32} color="#1a3c5e" />,
              title: 'Email Support',
              desc: 'support@nectarsleep.com\nWe reply within 24 hours on business days.',
              action: 'Send Email',
              badge: '',
              badgeColor: '',
              bg: '#fefce8',
            },
          ].map(item => (
            <div key={item.title} style={{ background: 'white', borderRadius: 20, padding: 32, border: '1px solid #e5e7eb', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', position: 'relative' }}>
              {item.badge && (
                <span style={{ position: 'absolute', top: 16, right: 16, background: item.badgeColor, color: 'white', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 12 }}>
                  {item.badge}
                </span>
              )}
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 10 }}>{item.title}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 24, lineHeight: 1.7, whiteSpace: 'pre-line' }}>{item.desc}</p>
              <button style={{ padding: '12px 28px', background: '#1a3c5e', color: 'white', borderRadius: 12, fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer', width: '100%' }}>
                {item.action}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Hours & Response Times */}
      <section style={{ padding: '48px 24px 0', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ background: 'white', borderRadius: 20, padding: 32, border: '1px solid #e5e7eb', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, textAlign: 'center' }}>
          {[
            { icon: <Clock size={22} color="#1a3c5e" />, label: 'Chat Response', value: '< 2 minutes' },
            { icon: <Phone size={22} color="#1a3c5e" />, label: 'Phone Wait Time', value: '< 5 minutes' },
            { icon: <Mail size={22} color="#1a3c5e" />, label: 'Email Response', value: '< 24 hours' },
            { icon: <MessageCircle size={22} color="#1a3c5e" />, label: 'Customer Rating', value: '4.9 / 5.0 ⭐' },
          ].map(item => (
            <div key={item.label}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#1a3c5e', marginBottom: 4 }}>{item.value}</div>
              <div style={{ fontSize: 13, color: '#6b7280' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Topics */}
      <section style={{ padding: '48px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#111827', marginBottom: 24 }}>
          Popular Help Topics
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {topics.map(t => (
            <Link key={t.title} href={t.href} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px', background: 'white', borderRadius: 16, border: '1px solid #e5e7eb', textDecoration: 'none', color: '#111827', transition: 'all 0.2s' }}>
              <span style={{ fontSize: 28 }}>{t.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 2 }}>{t.title}</div>
                <div style={{ fontSize: 13, color: '#6b7280' }}>{t.desc}</div>
              </div>
              <ChevronRight size={16} color="#9ca3af" />
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
