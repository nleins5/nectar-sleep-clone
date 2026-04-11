'use client';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error);
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* BG Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div className="absolute inset-0 noise-bg" />

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-blue-200 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Exclusive deals for subscribers
        </div>

        <h2 className="section-title text-3xl lg:text-4xl text-white mb-3">
          Get $200 Off Your First Order
        </h2>
        <p className="text-blue-200/80 mb-8 text-lg leading-relaxed max-w-xl mx-auto">
          Join 500,000+ subscribers. Get exclusive offers, sleep tips, and early access to new products.
        </p>

        {status === 'success' ? (
          <div className="glass rounded-2xl p-6 max-w-md mx-auto animate-scale-in">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <p className="text-white font-semibold text-lg mb-1">You&apos;re In! 🎉</p>
            <p className="text-blue-200 text-sm">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all text-sm backdrop-blur-sm"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 shrink-0 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-blue-900/30 border-t-blue-900 rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Subscribe <Send className="w-4 h-4" />
                </span>
              )}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-300 text-sm mt-3 animate-fade-in">{message}</p>
        )}

        <p className="text-blue-300/50 text-xs mt-4">No spam, unsubscribe anytime. By subscribing you agree to our Privacy Policy.</p>
      </div>
    </section>
  );
}
