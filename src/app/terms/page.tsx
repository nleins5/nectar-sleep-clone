export const metadata = { title: 'Terms & Conditions' };

export default function TermsPage() {
  return (
    <div style={{ padding: '60px 24px', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: '#111827', marginBottom: 24 }}>Terms & Conditions</h1>
      {[
        { title: '1. Acceptance of Terms', body: 'By accessing and using the Nectar Sleep website, you agree to be bound by these Terms and Conditions.' },
        { title: '2. Products and Pricing', body: 'All prices are in USD and subject to change without notice. We reserve the right to limit quantities and correct pricing errors.' },
        { title: '3. 365-Night Home Trial', body: 'Our trial period begins from the date of delivery. To initiate a return, contact our support team within 365 nights of receipt.' },
        { title: '4. Forever Warranty', body: 'Our warranty covers defects in materials and workmanship. Normal wear and tear, misuse, and damage from improper support are excluded.' },
        { title: '5. Shipping', body: 'Free standard shipping is available on all mattress orders within the contiguous United States. Delivery typically takes 3-5 business days.' },
        { title: '6. Returns and Refunds', body: 'Refunds are processed within 5-10 business days of mattress pickup. Mattresses must be in donatable condition.' },
      ].map((s, i) => (
        <div key={i} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>{s.title}</h2>
          <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.7 }}>{s.body}</p>
        </div>
      ))}
      <p style={{ fontSize: 13, color: '#9ca3af', marginTop: 48 }}>Last updated: April 2026</p>
    </div>
  );
}
