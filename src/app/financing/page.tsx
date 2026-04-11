import Link from 'next/link';
import { ChevronRight, CreditCard, ShieldCheck, Clock, DollarSign } from 'lucide-react';

export const metadata = { title: 'Financing – As Low as $35/mo | Nectar Sleep' };

const plans = [
  { months: 6, apr: '0%', minPurchase: '$300', badge: 'Most Popular', badgeColor: '#1a3c5e' },
  { months: 12, apr: '0%', minPurchase: '$600', badge: 'Best Value', badgeColor: '#059669' },
  { months: 18, apr: '9.99%', minPurchase: '$1,000', badge: 'Extended', badgeColor: '#7c3aed' },
  { months: 24, apr: '12.99%', minPurchase: '$1,500', badge: 'Flexible', badgeColor: '#d97706' },
];

const steps = [
  { num: '1', title: 'Shop & Add to Cart', desc: 'Browse our full lineup and add your favorite mattress, bundle, or accessories to cart.', icon: '🛏️' },
  { num: '2', title: 'Select Affirm at Checkout', desc: 'Choose Affirm as your payment method on the checkout page.', icon: '💳' },
  { num: '3', title: 'Quick Application', desc: 'Fill out a short form — check your rate in seconds without affecting your credit score.', icon: '⚡' },
  { num: '4', title: 'Enjoy & Pay Over Time', desc: 'Your mattress ships immediately. Make easy monthly payments with no hidden fees.', icon: '✅' },
];

export default function FinancingPage() {
  return (
    <div style={{ background: '#f9fafb', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #060d18, #1a3c5e)', color: 'white', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#93c5fd', marginBottom: 12 }}>Sleep Now, Pay Later</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 800, marginBottom: 16 }}>Flexible Financing Options</h1>
          <p style={{ fontSize: 19, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: 36 }}>
            Get the sleep you deserve today. Pay as low as <strong>$35/month</strong> with 0% APR through our partner Affirm.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/mattresses" style={{ padding: '16px 40px', background: 'white', color: '#1a3c5e', borderRadius: 14, fontWeight: 800, fontSize: 16, textDecoration: 'none' }}>
              Shop Mattresses
            </Link>
            <Link href="/quiz" style={{ padding: '16px 40px', background: 'rgba(255,255,255,0.15)', color: 'white', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
              Take the Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '20px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
          {[
            { icon: <ShieldCheck size={18} color="#059669" />, label: 'Checking your rate won\'t affect your credit score' },
            { icon: <DollarSign size={18} color="#1a3c5e" />, label: 'No hidden fees or prepayment penalties' },
            { icon: <Clock size={18} color="#7c3aed" />, label: 'Instant approval decision' },
            { icon: <CreditCard size={18} color="#d97706" />, label: 'No credit card required' },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#4b5563', fontWeight: 500 }}>
              {item.icon} {item.label}
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 700, color: '#111827', marginBottom: 8, textAlign: 'center' }}>
          Choose Your Plan
        </h2>
        <p style={{ fontSize: 16, color: '#6b7280', textAlign: 'center', marginBottom: 40 }}>Pick the financing plan that works best for your budget.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          {plans.map((plan) => (
            <div key={plan.months} style={{ background: 'white', borderRadius: 20, padding: 28, border: '2px solid #e5e7eb', textAlign: 'center', position: 'relative' }}>
              <span style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: plan.badgeColor, color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 20, whiteSpace: 'nowrap' }}>
                {plan.badge}
              </span>
              <div style={{ fontSize: 48, fontWeight: 900, color: '#111827', marginTop: 8 }}>{plan.months}</div>
              <div style={{ fontSize: 14, color: '#6b7280', marginBottom: 16 }}>months</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: plan.apr === '0%' ? '#059669' : '#1a3c5e', marginBottom: 4 }}>{plan.apr} APR</div>
              <div style={{ fontSize: 12, color: '#9ca3af', marginBottom: 20 }}>Min. purchase: {plan.minPurchase}</div>
              <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 20 }}>
                {plan.apr === '0%' ? '✨ Interest-free if paid in full' : `Simple interest, no compounding`}
              </div>
              <Link href="/mattresses" style={{ display: 'block', padding: '12px', background: '#1a3c5e', color: 'white', borderRadius: 12, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                Shop & Apply
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '0 24px 64px', maxWidth: 1000, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: '#111827', marginBottom: 40, textAlign: 'center' }}>
          How It Works
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
          {steps.map((step) => (
            <div key={step.num} style={{ background: 'white', borderRadius: 20, padding: 28, border: '1px solid #e5e7eb', textAlign: 'center' }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{step.icon}</div>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#1a3c5e', color: 'white', fontWeight: 800, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>{step.num}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 8 }}>{step.title}</h3>
              <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '0 24px 64px', maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#111827', marginBottom: 24 }}>Financing FAQs</h2>
        <div style={{ background: 'white', borderRadius: 20, padding: '8px 32px', border: '1px solid #e5e7eb' }}>
          {[
            { q: 'Will applying affect my credit score?', a: 'No. Checking your rate with Affirm uses a soft credit check, which does not impact your credit score.' },
            { q: 'What if I want to pay off early?', a: 'There are no prepayment penalties. You can pay off your loan at any time with no extra fees.' },
            { q: 'Can I use financing on sale items?', a: 'Yes! Affirm financing can be used on any order meeting the minimum purchase amount, including sale items.' },
            { q: 'What happens if I return my mattress?', a: 'If you return within the 365-night trial, your remaining balance is cancelled and any payments made are refunded in full.' },
          ].map((item, i) => (
            <details key={i} style={{ borderBottom: '1px solid #e5e7eb' }}>
              <summary style={{ padding: '18px 0', fontSize: 15, fontWeight: 600, color: '#111827', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {item.q} <ChevronRight size={16} color="#9ca3af" />
              </summary>
              <p style={{ paddingBottom: 18, fontSize: 14, color: '#4b5563', lineHeight: 1.7 }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 24px 80px', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ background: 'linear-gradient(135deg, #1a3c5e, #2d5f8a)', borderRadius: 24, padding: '48px 40px', color: 'white' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, marginBottom: 12 }}>Ready to Sleep Better?</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', marginBottom: 28, lineHeight: 1.6 }}>
            Start your 365-night trial today. Pay over time with Affirm, or pay in full. Either way, shipping is free.
          </p>
          <Link href="/mattresses" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 40px', background: 'white', color: '#1a3c5e', borderRadius: 14, fontWeight: 800, fontSize: 16, textDecoration: 'none' }}>
            Shop Mattresses <ChevronRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
