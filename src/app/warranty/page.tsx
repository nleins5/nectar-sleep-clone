import Link from 'next/link';
import { Shield, ChevronRight, CheckCircle, XCircle, Phone } from 'lucide-react';

export const metadata = { title: 'Forever Warranty™ | Nectar Sleep' };

const covered = [
  'Visible body indentations greater than 1.5 inches that are not associated with an improper foundation',
  'Any physical flaw in the mattress that causes the foam to split or crack without apparent abuse',
  'Defective or broken cover zipper',
  'Deterioration of the foam causing the mattress to lose its original shape',
  'Manufacturing defects in materials or workmanship',
];

const notCovered = [
  'Normal softening of comfort materials over time (this is expected and not a defect)',
  'Physical damage caused by misuse, abuse, or improper handling',
  'Damage from an improper or unsupported foundation (slats more than 3 inches apart)',
  'Burns, cuts, tears, or liquid damage',
  'Mattresses used in commercial settings',
  'Second-hand or transferred ownership (warranty valid for original buyer only)',
];

const faqs = [
  { q: 'How do I file a warranty claim?', a: 'Contact our support team by phone, chat, or email. Provide your order number, a description of the issue, and photos of the defect. We will review your claim within 2 business days.' },
  { q: 'What happens after my claim is approved?', a: 'We will send you a replacement mattress at no charge. In some cases, we may offer a repair or a prorated replacement depending on the nature of the defect.' },
  { q: 'Is the warranty transferable if I move or sell the mattress?', a: 'No. The Forever Warranty™ is only valid for the original purchaser and is non-transferable. It is tied to the original order and purchase email address.' },
  { q: 'Does the warranty cover mattress accessories like toppers?', a: 'Accessories such as pillows, toppers, sheets, and protectors carry a separate 2-year limited warranty. Bed frames carry a 3–5 year limited warranty depending on the model.' },
  { q: 'What if my mattress develops an indentation during the trial period?', a: 'If you are within your 365-night trial period, we recommend initiating a return rather than a warranty claim — you will get a full refund. After the trial, a warranty claim applies for indentations greater than 1.5 inches.' },
];

export default function WarrantyPage() {
  return (
    <div style={{ background: '#f9fafb', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #060d18, #1a3c5e)', color: 'white', padding: '90px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <Shield size={32} color="white" />
          </div>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#93c5fd', marginBottom: 12 }}>Lifetime Protection</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 800, marginBottom: 20, lineHeight: 1.1 }}>
            The Forever Warranty™
          </h1>
          <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: 580, margin: '0 auto 36px' }}>
            Every Nectar mattress is backed by our Forever Warranty™ — a lifetime guarantee against manufacturing defects. For as long as you own your mattress, Nectar has you covered.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', padding: '14px 28px', borderRadius: 50, border: '1px solid rgba(255,255,255,0.25)' }}>
            <Shield size={18} color="#93c5fd" />
            <span style={{ fontSize: 16, fontWeight: 700 }}>Lifetime Coverage · Original Owner · No Cost</span>
          </div>
        </div>
      </section>

      {/* Covered / Not covered */}
      <section style={{ padding: '72px 24px', maxWidth: 1000, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: '#111827', marginBottom: 8, textAlign: 'center' }}>
          What&apos;s Covered
        </h2>
        <p style={{ fontSize: 16, color: '#6b7280', textAlign: 'center', marginBottom: 48 }}>
          The Forever Warranty™ protects against genuine manufacturing defects.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {/* Covered */}
          <div style={{ background: 'white', borderRadius: 20, padding: 32, border: '2px solid #bbf7d0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <CheckCircle size={22} color="#059669" />
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>Covered ✓</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {covered.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <CheckCircle size={12} color="#059669" />
                  </div>
                  <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not covered */}
          <div style={{ background: 'white', borderRadius: 20, padding: 32, border: '2px solid #fee2e2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <XCircle size={22} color="#dc2626" />
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>Not Covered ✗</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {notCovered.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <XCircle size={12} color="#dc2626" />
                  </div>
                  <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to claim */}
      <section style={{ background: 'white', padding: '72px 24px', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: '#111827', marginBottom: 8, textAlign: 'center' }}>
            How to File a Claim
          </h2>
          <p style={{ fontSize: 15, color: '#6b7280', textAlign: 'center', marginBottom: 40 }}>It&apos;s fast, easy, and completely free.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {[
              { num: '1', title: 'Gather Details', desc: 'Find your original order number and take clear photos of the defect.', icon: '📸' },
              { num: '2', title: 'Contact Support', desc: 'Reach us by phone, live chat, or email — 7 days a week.', icon: '📞' },
              { num: '3', title: 'Claim Review', desc: 'Our team reviews your claim within 2 business days.', icon: '🔍' },
              { num: '4', title: 'Replacement Ships', desc: 'Approved claims receive a free replacement mattress, no charge.', icon: '📦' },
            ].map(step => (
              <div key={step.num} style={{ textAlign: 'center', background: '#f9fafb', borderRadius: 16, padding: 24, border: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{step.icon}</div>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#1a3c5e', color: 'white', fontWeight: 800, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>{step.num}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 6 }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/help" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 36px', background: '#1a3c5e', color: 'white', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              <Phone size={16} /> Contact Support to File a Claim
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '72px 24px', maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: '#111827', marginBottom: 32, textAlign: 'center' }}>
          Warranty FAQs
        </h2>
        <div style={{ background: 'white', borderRadius: 20, padding: '8px 36px', border: '1px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          {faqs.map((faq, i) => (
            <details key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
              <summary style={{ padding: '20px 0', fontSize: 15, fontWeight: 600, color: '#111827', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                {faq.q}
                <ChevronRight size={16} color="#9ca3af" style={{ flexShrink: 0 }} />
              </summary>
              <p style={{ paddingBottom: 20, fontSize: 14, color: '#4b5563', lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 24px 80px', maxWidth: 720, margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, #059669, #10b981)', borderRadius: 24, padding: '52px 48px', color: 'white', textAlign: 'center' }}>
          <Shield size={36} color="white" style={{ marginBottom: 16 }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 700, marginBottom: 12 }}>Covered for Life</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 28, lineHeight: 1.7 }}>
            Buy with confidence. Every Nectar mattress comes with the Forever Warranty™ — no registration required.
          </p>
          <Link href="/mattresses" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 36px', background: 'white', color: '#059669', borderRadius: 14, fontWeight: 800, fontSize: 16, textDecoration: 'none' }}>
            Shop Mattresses <ChevronRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
