export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <div style={{ padding: '60px 24px', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: '#111827', marginBottom: 24 }}>Privacy Policy</h1>
      {[
        { title: 'Information We Collect', body: 'We collect information you provide when placing orders, creating accounts, or contacting support. This includes name, email, shipping address, and payment details.' },
        { title: 'How We Use Your Information', body: 'Your information is used to process orders, improve our products and services, send relevant communications, and provide customer support.' },
        { title: 'Data Protection', body: 'We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, or destruction.' },
        { title: 'Cookies', body: 'We use cookies to improve your browsing experience, analyze site traffic, and personalize content. You can manage cookie preferences in your browser settings.' },
        { title: 'Third-Party Sharing', body: 'We do not sell your personal information. We may share data with trusted service providers who assist in operating our website and fulfilling orders.' },
        { title: 'Your Rights', body: 'You have the right to access, correct, or delete your personal data. Contact us at privacy@nectarsleep.com for any requests.' },
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
