import Link from 'next/link';

export const metadata = { title: 'My Account' };

export default function AccountPage() {
  return (
    <div style={{ padding: '80px 24px', maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Sign In</h1>
      <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 32 }}>Access your Nectar account to track orders and manage your profile.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <input type="email" placeholder="Email address" style={{ padding: '14px 20px', borderRadius: 12, border: '1px solid #d1d5db', fontSize: 15, width: '100%' }} />
        <input type="password" placeholder="Password" style={{ padding: '14px 20px', borderRadius: 12, border: '1px solid #d1d5db', fontSize: 15, width: '100%' }} />
        <button style={{ padding: '16px', background: '#1a3c5e', color: 'white', borderRadius: 12, fontWeight: 700, fontSize: 16, border: 'none', cursor: 'pointer' }}>Sign In</button>
      </div>
      <p style={{ fontSize: 13, color: '#6b7280', marginTop: 16 }}>Don&apos;t have an account? <Link href="/account" style={{ color: '#1a3c5e', fontWeight: 600 }}>Create one</Link></p>
    </div>
  );
}
