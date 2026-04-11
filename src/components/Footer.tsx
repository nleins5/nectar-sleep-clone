import Link from 'next/link';
import { footerLinks } from '@/lib/data';
import { Globe, Heart, MessageCircle, Play, Moon, ShieldCheck, Truck, BadgeCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full gradient-blue flex items-center justify-center text-white font-bold text-sm shadow-lg">N</div>
              <span className="text-xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Nectar Sleep</span>
            </div>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              We focus on one thing only – the most comfortable bed possible. Your rest is our mission.
            </p>
            <div className="flex gap-2">
              {[Globe, Heart, MessageCircle, Play].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-gray-800/80 flex items-center justify-center hover:bg-blue-700 transition-all duration-200 hover:-translate-y-0.5">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2.5">
              {footerLinks.shop.map(l => (
                <li key={l.label}><Link href={l.href} className="text-sm hover:text-white hover:pl-1 transition-all duration-200">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Customer Support</h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map(l => (
                <li key={l.label}><Link href={l.href} className="text-sm hover:text-white hover:pl-1 transition-all duration-200">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">About Us</h4>
            <ul className="space-y-2.5">
              {footerLinks.about.map(l => (
                <li key={l.label}><Link href={l.href} className="text-sm hover:text-white hover:pl-1 transition-all duration-200">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map(l => (
                <li key={l.label}><Link href={l.href} className="text-sm hover:text-white hover:pl-1 transition-all duration-200">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-b border-gray-800">
          {[
            { icon: <Moon className="w-5 h-5" />, text: '365-Night Trial', color: '#818cf8' },
            { icon: <ShieldCheck className="w-5 h-5" />, text: 'Forever Warranty™', color: '#34d399' },
            { icon: <Truck className="w-5 h-5" />, text: 'Free Shipping & Returns', color: '#60a5fa' },
            { icon: <BadgeCheck className="w-5 h-5" />, text: 'CertiPUR-US® Certified', color: '#fbbf24' },
          ].map(b => (
            <div key={b.text} className="flex items-center gap-3">
              <div style={{ background: `${b.color}15`, border: `1px solid ${b.color}30`, color: b.color }} className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                {b.icon}
              </div>
              <span className="text-sm font-medium text-gray-300">{b.text}</span>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-gray-500">
          <p>©{new Date().getFullYear()} Nectar Sleep. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/sitemap-page" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
