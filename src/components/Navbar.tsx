'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, User, Menu, X, ChevronDown } from 'lucide-react';
import { navItems } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [cartCount] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span>🌙 Spring Sale: Up to 50% off + Free Shipping on all orders &nbsp;|&nbsp; 365-Night Trial &nbsp;|&nbsp; Forever Warranty™</span>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'header-shadow' : ''}`}>
        {/* Top row: util links */}
        <div className="hidden lg:flex justify-end items-center gap-6 px-8 py-1 text-xs text-gray-500 border-b border-gray-100">
          <Link href="/stores" className="hover:text-blue-700 transition-colors">Find in Store</Link>
          <Link href="/account" className="hover:text-blue-700 transition-colors">My Account</Link>
          <Link href="/about" className="hover:text-blue-700 transition-colors">Why Nectar?</Link>
          <Link href="/faq" className="hover:text-blue-700 transition-colors">Help</Link>
        </div>

        <div className="flex items-center justify-between px-4 lg:px-8 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-full gradient-blue flex items-center justify-center text-white font-bold text-sm">N</div>
            <span className="text-xl font-bold" style={{ color: 'var(--nectar-blue)', fontFamily: 'Playfair Display, serif' }}>
              Nectar Sleep
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megaMenu ? handleMouseEnter(item.label) : undefined}
                onMouseLeave={item.megaMenu ? handleMouseLeave : undefined}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all group"
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1 badge badge-red text-[9px]">{item.badge}</span>
                  )}
                  {item.megaMenu && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === item.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Mega Menu */}
                {item.megaMenu && (
                  <div className={`mega-menu ${activeMenu === item.label ? 'open' : ''}`}>
                    <div className="max-w-6xl mx-auto px-8 py-8 grid grid-cols-3 gap-8">
                      {item.megaMenu.map((section) => (
                        <div key={section.title}>
                          <Link
                            href={section.href}
                            className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-blue-700 block mb-3"
                          >
                            {section.title}
                          </Link>
                          <ul className="space-y-2">
                            {section.items.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  className="text-sm text-gray-700 hover:text-blue-700 hover:pl-1 transition-all block"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-2">
            <button className="hidden lg:flex p-2 rounded-md hover:bg-gray-100 transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <Link href="/account" className="hidden lg:flex p-2 rounded-md hover:bg-gray-100 transition-colors">
              <User className="w-5 h-5 text-gray-600" />
            </Link>
            <Link href="/cart" className="relative p-2 rounded-md hover:bg-gray-100 transition-colors">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white animate-fade-in">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between py-3 px-2 border-b border-gray-50 text-sm font-medium text-gray-800"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.label}</span>
                  {item.badge && <span className="badge badge-red text-[9px]">{item.badge}</span>}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
