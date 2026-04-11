import Link from 'next/link';
import { RefreshCw, ChevronRight, CheckCircle, Clock, Truck, Phone } from 'lucide-react';

export const metadata = { title: '365-Night Trial Policy | Nectar Sleep' };

const steps = [
  { num: '01', title: 'Order & Receive', desc: 'Your mattress is delivered free to your door, compressed in a box. Unbox and let it expand for 24–72 hours.' },
  { num: '02', title: 'Sleep On It', desc: 'We recommend at least 30 nights before making a decision — your body needs time to adjust to the new feel.' },
  { num: '03', title: 'Not Satisfied? Contact Us', desc: 'Call, chat, or email anytime within 365 nights of delivery. Our team will handle everything from there.' },
  { num: '04', title: 'Free Pickup', desc: 'We schedule a free pickup at a time convenient for you. No need to repack or ship anything yourself.' },
  { num: '05', title: 'Full Refund', desc: 'Once the mattress is picked up, your full refund is processed within 5–7 business days to your original payment method.' },
];

const faqs = [
  { q: 'When does my 365-night trial start?', a: 'Your trial begins on the day your mattress is delivered, not the day you order. The delivery date is confirmed in your shipping notification email.' },
  { q: 'Is there a minimum trial period?', a: 'We ask that you sleep on your new Nectar for at least 30 nights before initiating a return. Your body needs time to adjust to a new mattress, and many customers who initially struggle find they love it after the break-in period.' },
  { q: 'Do I need a receipt or order number to return?', a: 'Just contact our support team and provide the email address used at checkout. We can look up your order from there — no paperwork needed.' },
  { q: 'Can I exchange instead of return?', a: 'Yes! During your trial period, you can exchange your mattress for a different Nectar model. Contact our team to discuss your options and we\'ll coordinate the swap.' },
  { q: 'Does the trial apply to all Nectar products?', a: 'The 365-night trial applies to all Nectar mattresses. Bed frames, bundles, and bedding accessories have a 50-night trial. Please check the product page for specifics.' },
  { q: 'What happens to my returned mattress?', a: 'We never resell returned mattresses. They are donated to local charities, shelters, and nonprofit organizations in your area.' },
  { q: 'Can I return if my mattress has a stain or minor wear?', a: 'Yes. Normal use wear does not disqualify your return. We only cannot accept mattresses that have been significantly damaged beyond normal use.' },
];

export default function TrialPolicyPage() {
  return (
    <div style={{ background: '#f9fafb', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #060d18, #1a3c5e)', color: 'white', padding: '90px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <RefreshCw size={32} color="white" />
          </div>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#93c5fd', marginBottom: 12 }}>Risk-Free Sleep</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 800, marginBottom: 20, lineHeight: 1.1 }}>
            365-Night Home Trial
          </h1>
          <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 36px' }}>
            Try your Nectar mattress for a full year in your own home. If you&apos;re not completely satisfied, we&apos;ll pick it up and refund you in full. No questions asked.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', padding: '14px 28px', borderRadius: 50, border: '1px solid rgba(255,255,255,0.25)' }}>
            <Clock size={18} color="#93c5fd" />
            <span style={{ fontSize: 16, fontWeight: 700 }}>365 Nights · Free Pickup · Full Refund</span>
          </div>
        </div>
      </section>

      {/* Key promises */}
      <section style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '28px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          {[
            { icon: <Clock size={18} color="#1a3c5e" />, label: '365 nights to decide' },
            { icon: <Truck size={18} color="#059669" />, label: 'Free pickup from your home' },
            { icon: <CheckCircle size={18} color="#7c3aed" />, label: '100% full refund' },
            { icon: <Phone size={18} color="#d97706" />, label: 'Support 7 days a week' },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#374151', fontWeight: 600 }}>
              {item.icon} {item.label}
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '72px 24px', maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: '#111827', marginBottom: 8, textAlign: 'center' }}>
          How the Trial Works
        </h2>
        <p style={{ fontSize: 16, color: '#6b7280', textAlign: 'center', marginBottom: 48 }}>
          Five simple steps from delivery to refund — we handle all the hard parts.
        </p>
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: 28, top: 0, bottom: 0, width: 2, background: '#e5e7eb', zIndex: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{ display: 'flex', gap: 24, alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: i === 4 ? '#059669' : '#1a3c5e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, flexShrink: 0, border: '4px solid #f9fafb' }}>
                  {step.num}
                </div>
                <div style={{ background: 'white', borderRadius: 16, padding: '20px 24px', border: '1px solid #e5e7eb', flex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111827', marginBottom: 6 }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '0 24px 72px', maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: '#111827', marginBottom: 32, textAlign: 'center' }}>
          Trial Policy FAQs
        </h2>
        <div style={{ background: 'white', borderRadius: 20, padding: '8px 36px', border: '1px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          {faqs.map((faq, i) => (
            <details key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
              <summary style={{ padding: '20px 0', fontSize: 15, fontWeight: 600, color: '#111827', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                {faq.q}
                <ChevronRight size={16} color="#9ca3af" style={{ flexShrink: 0, transform: 'rotate(90deg)' }} />
              </summary>
              <p style={{ paddingBottom: 20, fontSize: 14, color: '#4b5563', lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 24px 80px', maxWidth: 720, margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, #1a3c5e, #2d5f8a)', borderRadius: 24, padding: '52px 48px', color: 'white', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 700, marginBottom: 12 }}>Sleep on It. Literally.</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', marginBottom: 28, lineHeight: 1.7 }}>
            Start your 365-night trial today. Free shipping, free returns, forever warranty.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/mattresses" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 36px', background: 'white', color: '#1a3c5e', borderRadius: 14, fontWeight: 800, fontSize: 16, textDecoration: 'none' }}>
              Shop Mattresses <ChevronRight size={18} />
            </Link>
            <Link href="/help" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 36px', background: 'rgba(255,255,255,0.15)', color: 'white', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
              Contact Support
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
