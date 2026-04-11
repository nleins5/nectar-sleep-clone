import Link from 'next/link';
import { MessageCircle, Mail, Phone, FileQuestion, RefreshCw, Shield } from 'lucide-react';

export const metadata = { title: 'Help Center – Nectar Sleep' };

export default function HelpPage() {
  return (
    <div>
      <section style={{ background: '#f9fafb', padding: '60px 24px', textAlign: 'center', borderBottom: '1px solid #e5e7eb' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: '#111827', marginBottom: 8 }}>How Can We Help?</h1>
        <p style={{ fontSize: 16, color: '#6b7280' }}>Find answers to common questions or contact our support team.</p>
      </section>
      <section style={{ padding: '60px 24px', maxWidth: 1000, margin: '0 auto' }}>
        {/* Contact options */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 60 }}>
          {[
            { icon: <MessageCircle size={28} color="#1a3c5e" />, title: 'Live Chat', desc: 'Chat with a sleep specialist now', action: 'Start Chat' },
            { icon: <Mail size={28} color="#1a3c5e" />, title: 'Email Us', desc: 'support@nectarsleep.com', action: 'Send Email' },
            { icon: <Phone size={28} color="#1a3c5e" />, title: 'Call Us', desc: '(888) 863-2827', action: 'Call Now' },
          ].map(item => (
            <div key={item.title} style={{ padding: 32, borderRadius: 16, border: '1px solid #e5e7eb', textAlign: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>{item.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 4 }}>{item.title}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 16 }}>{item.desc}</p>
              <button style={{ padding: '10px 24px', background: '#1a3c5e', color: 'white', borderRadius: 10, fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer' }}>{item.action}</button>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111827', marginBottom: 20 }}>Popular Topics</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {[
            { icon: <FileQuestion size={20} color="#1a3c5e" />, title: 'Frequently Asked Questions', href: '/faq' },
            { icon: <RefreshCw size={20} color="#1a3c5e" />, title: '365-Night Trial Policy', href: '/about' },
            { icon: <Shield size={20} color="#1a3c5e" />, title: 'Warranty Information', href: '/terms' },
            { icon: <MessageCircle size={20} color="#1a3c5e" />, title: 'Returns & Exchanges', href: '/faq' },
          ].map(item => (
            <Link key={item.title} href={item.href} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '18px 20px',
              borderRadius: 12, border: '1px solid #e5e7eb', textDecoration: 'none',
              color: '#111827', fontWeight: 600, fontSize: 15,
              transition: 'all 0.2s',
            }}>
              {item.icon} {item.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
