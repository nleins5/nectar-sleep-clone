import Link from 'next/link';

export const metadata = { title: 'Financing – As Low as $35/mo' };

export default function FinancingPage() {
  return (
    <div>
      <section style={{ background: '#eff6ff', padding: '60px 24px', textAlign: 'center', borderBottom: '1px solid #dbeafe' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Mattress Financing</h1>
        <p style={{ fontSize: 18, color: '#4b5563' }}>Sleep now, pay later. Starting at just <strong>$35/month</strong> with 0% APR.</p>
      </section>
      <section style={{ padding: '60px 24px', maxWidth: 800, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 48 }}>
          {[{ step: '1', title: 'Select your mattress', desc: 'Choose from our award-winning lineup.' }, { step: '2', title: 'Apply at checkout', desc: 'Quick application with instant decision.' }, { step: '3', title: 'Enjoy 0% APR', desc: 'Pay over time with no hidden fees.' }].map(s => (
            <div key={s.step} style={{ textAlign: 'center', padding: 24 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#1a3c5e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 20, margin: '0 auto 12px' }}>{s.step}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 4 }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: '#6b7280' }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link href="/mattresses" style={{ padding: '16px 40px', background: '#1a3c5e', color: 'white', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Shop Now</Link>
        </div>
      </section>
    </div>
  );
}
