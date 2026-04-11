'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

const categories = [
  {
    name: 'Orders & Delivery',
    icon: '📦',
    faqs: [
      { q: 'How long does delivery take?', a: 'Most orders ship within 1-3 business days and arrive in 3-7 business days depending on your location. You will receive a tracking email once your order ships.' },
      { q: 'How is my mattress delivered?', a: 'Your mattress arrives compressed and vacuum-sealed in a compact box via FedEx or UPS. Simply bring the box to your bedroom, unbox, unroll, and let it expand fully within 24–72 hours.' },
      { q: 'Is shipping really free?', a: 'Yes! We offer free standard shipping to all contiguous US states. Alaska and Hawaii may have additional shipping fees.' },
      { q: 'Can I track my order?', a: 'Absolutely. Once your order ships you will receive a tracking number via email. You can also log in to your account at any time to check your order status.' },
    ],
  },
  {
    name: '365-Night Trial',
    icon: '🌙',
    faqs: [
      { q: 'What is the 365-Night Home Trial?', a: 'We offer a full year to try your mattress at home — that is 365 nights. If you are not completely satisfied for any reason, contact us and we will arrange a free pickup and give you a complete refund. No questions asked.' },
      { q: 'When does the trial period start?', a: 'Your 365-night trial begins on the day your mattress is delivered. We recommend sleeping on your mattress for at least 30 nights to allow your body to fully adjust before making a decision.' },
      { q: 'How do I initiate a return?', a: 'Simply contact our customer support team by phone, chat, or email. We will schedule a free pickup at a time that works for you. Once the pickup is complete, your refund will be processed within 5–7 business days.' },
      { q: 'Can I exchange instead of return?', a: 'Yes! If you love Nectar but want a different model, we can arrange an exchange during your trial period. Contact our team to discuss your options.' },
    ],
  },
  {
    name: 'Warranty',
    icon: '🛡️',
    faqs: [
      { q: 'What does the Forever Warranty™ cover?', a: 'Our Forever Warranty™ covers any defects in materials or workmanship for the lifetime of your mattress. This includes visible indentations greater than 1.5 inches, defective cover materials, and broken or loss of shape.' },
      { q: 'How do I file a warranty claim?', a: 'Contact our support team with photos of the issue and your order number. We will review your claim and, if approved, send a replacement at no additional cost.' },
      { q: 'Is the Forever Warranty transferable?', a: 'The warranty is valid for the original purchaser only and is non-transferable.' },
      { q: 'Does the warranty cover normal wear?', a: 'Normal wear and softening of comfort materials over time is not covered, as this is expected with any mattress. The warranty covers manufacturing defects only.' },
    ],
  },
  {
    name: 'Financing & Payment',
    icon: '💳',
    faqs: [
      { q: 'Do you offer financing?', a: 'Yes! We partner with Affirm to offer flexible financing options. You can pay as low as $35/month with 0% APR for qualified buyers. Apply during checkout — it only takes a few seconds.' },
      { q: 'What credit score do I need for financing?', a: 'Affirm considers many factors beyond just your credit score. Many customers with fair credit are approved. Applying does not affect your credit score.' },
      { q: 'Can I pay with multiple payment methods?', a: 'Currently, each order must be paid with a single payment method. We accept all major credit cards, debit cards, PayPal, and Affirm financing.' },
      { q: 'What is your refund policy for financed orders?', a: 'If you return your mattress, any remaining financing balance will be cancelled and any payments made will be refunded. Contact Affirm directly for details on your specific loan.' },
    ],
  },
  {
    name: 'Mattress Setup',
    icon: '🛏️',
    faqs: [
      { q: 'How do I set up my new mattress?', a: 'Remove the mattress from the box, cut the outer plastic bag carefully (avoid the mattress), unroll it on your bed base, then cut the inner vacuum seal. The mattress will begin expanding immediately. Allow 24–72 hours for full expansion.' },
      { q: 'There is a smell — is that normal?', a: 'Yes, this is called off-gassing and is completely harmless. New foam mattresses release a slight odor when first unpacked. It disappears within 24–72 hours. Ventilate the room to speed up the process.' },
      { q: 'What bed base does the Nectar mattress work with?', a: 'Nectar mattresses work with platform beds, slatted frames (with slats no more than 3 inches apart), box springs, adjustable bases, and flat foundations. They do not require a box spring.' },
      { q: 'How do I rotate or flip my mattress?', a: 'Nectar mattresses are one-sided (no need to flip), but we recommend rotating them 180° every 3–6 months to ensure even wear.' },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ borderBottom: '1px solid #e5e7eb', overflow: 'hidden' }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: '#111827', lineHeight: 1.4 }}>{q}</span>
        {open ? <ChevronUp size={18} color="#6b7280" style={{ flexShrink: 0 }} /> : <ChevronDown size={18} color="#6b7280" style={{ flexShrink: 0 }} />}
      </button>
      {open && (
        <div style={{ paddingBottom: 20, fontSize: 15, color: '#4b5563', lineHeight: 1.8 }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div style={{ background: '#f9fafb', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #060d18, #1a3c5e)', color: 'white', padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 800, marginBottom: 16 }}>Frequently Asked Questions</h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', maxWidth: 600, margin: '0 auto' }}>
          Everything you need to know about Nectar Sleep — from ordering to setup.
        </p>
      </section>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '60px 24px' }}>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40, justifyContent: 'center' }}>
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              style={{
                padding: '10px 20px', borderRadius: 50, border: '2px solid',
                borderColor: activeCategory === i ? '#1a3c5e' : '#e5e7eb',
                background: activeCategory === i ? '#1a3c5e' : 'white',
                color: activeCategory === i ? 'white' : '#6b7280',
                fontWeight: 600, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              <span>{cat.icon}</span> {cat.name}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div style={{ background: 'white', borderRadius: 20, padding: '8px 40px', border: '1px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          {categories[activeCategory].faqs.map(faq => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        {/* Still have questions? */}
        <div style={{ marginTop: 48, background: 'linear-gradient(135deg, #eff6ff, #f0fdf4)', borderRadius: 20, padding: 40, textAlign: 'center', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#111827', marginBottom: 8 }}>
            Still Have Questions?
          </h2>
          <p style={{ fontSize: 15, color: '#6b7280', marginBottom: 24 }}>
            Our sleep specialists are available 7 days a week to help.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/help" style={{ padding: '14px 32px', background: '#1a3c5e', color: 'white', borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
              Contact Support
            </Link>
            <Link href="/reviews" style={{ padding: '14px 32px', background: 'white', color: '#1a3c5e', borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontSize: 15, border: '2px solid #1a3c5e' }}>
              Read Reviews
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
