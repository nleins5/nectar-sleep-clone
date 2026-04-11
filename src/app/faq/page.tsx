import Link from 'next/link';

export const metadata = { title: 'FAQ – Frequently Asked Questions' };

const faqs = [
  { q: 'What is the 365-Night Home Trial?', a: 'We offer a full year to try your mattress. If you don\'t love it, we\'ll arrange a free pickup and give you a complete refund.' },
  { q: 'What does the Forever Warranty cover?', a: 'Our Forever Warranty™ covers any defects in materials and workmanship for as long as you own your mattress.' },
  { q: 'How is the mattress delivered?', a: 'Your mattress arrives compressed in a box and ships free to your door. Simply unbox, unroll, and let it expand in 24-72 hours.' },
  { q: 'What sizes are available?', a: 'We offer Twin, Twin XL, Full, Queen, King, and California King sizes across all our mattress models.' },
  { q: 'Do you offer financing?', a: 'Yes! We partner with Affirm to offer 0% APR financing. Payments start as low as $35/month.' },
  { q: 'Can I try the mattress in a store?', a: 'Absolutely! We have 4,365+ partner stores nationwide. Use our store locator to find one near you.' },
  { q: 'How do returns work?', a: 'If you decide your Nectar isn\'t right within 365 nights, contact us and we\'ll arrange a free pickup. You\'ll receive a full refund.' },
  { q: 'What mattress types do you offer?', a: 'We offer both Memory Foam and Hybrid mattresses in four tiers: Classic, Premier, Luxe, and Ultra.' },
];

export default function FAQPage() {
  return (
    <div>
      <section style={{ background: '#f9fafb', padding: '60px 24px', textAlign: 'center', borderBottom: '1px solid #e5e7eb' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Frequently Asked Questions</h1>
        <p style={{ fontSize: 16, color: '#6b7280' }}>Everything you need to know about Nectar Sleep.</p>
      </section>
      <section style={{ padding: '60px 24px', maxWidth: 800, margin: '0 auto' }}>
        {faqs.map((faq, i) => (
          <details key={i} style={{ borderBottom: '1px solid #e5e7eb', padding: '20px 0' }}>
            <summary style={{ fontSize: 16, fontWeight: 600, color: '#111827', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
              {faq.q}<span style={{ color: '#9ca3af' }}>+</span>
            </summary>
            <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.7, marginTop: 12, paddingLeft: 0 }}>{faq.a}</p>
          </details>
        ))}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ fontSize: 16, color: '#6b7280', marginBottom: 16 }}>Still have questions?</p>
          <Link href="/about" style={{ padding: '14px 32px', background: '#1a3c5e', color: 'white', borderRadius: 12, fontWeight: 600, textDecoration: 'none' }}>Contact Support</Link>
        </div>
      </section>
    </div>
  );
}
