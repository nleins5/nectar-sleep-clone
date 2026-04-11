'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, User, Menu, X, ChevronDown } from 'lucide-react';
import { navItems } from '@/lib/data';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 200);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span>🌙 Spring Sale: Up to 50% off + Free Shipping on all orders &nbsp;|&nbsp; 365-Night Trial &nbsp;|&nbsp; Forever Warranty™</span>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${scrolled ? 'header-shadow' : 'border-b border-gray-50'}`}>
        {/* Top row */}
        <div className="hidden lg:flex justify-end items-center gap-6 px-8 py-1 text-xs text-gray-500 border-b border-gray-100/80">
          <Link href="/stores" className="hover:text-blue-700 transition-colors">Find in Store</Link>
          <Link href="/account" className="hover:text-blue-700 transition-colors">My Account</Link>
          <Link href="/about" className="hover:text-blue-700 transition-colors">Why Nectar?</Link>
          <Link href="/faq" className="hover:text-blue-700 transition-colors">Help</Link>
        </div>

        <div className="flex items-center justify-between px-4 lg:px-8 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-9 h-9 rounded-full gradient-blue flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:shadow-md transition-shadow">N</div>
            <span className="text-xl font-bold tracking-tight" style={{ color: 'var(--nectar-blue)', fontFamily: 'Playfair Display, serif' }}>
              Nectar Sleep
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megaMenu ? handleMouseEnter(item.label) : undefined}
                onMouseLeave={item.megaMenu ? handleMouseLeave : undefined}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all group ${
                    activeMenu === item.label ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/50'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1 badge badge-red text-[9px] py-0.5">{item.badge}</span>
                  )}
                  {item.megaMenu && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === item.label ? 'rotate-180' : ''}`} />
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
                            className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-blue-700 block mb-3 transition-colors"
                          >
                            {section.title}
                          </Link>
                          <ul className="space-y-2">
                            {section.items.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  className="text-sm text-gray-700 hover:text-blue-700 hover:pl-1.5 transition-all block py-0.5"
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
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden lg:flex p-2.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <Link href="/account" className="hidden lg:flex p-2.5 rounded-lg hover:bg-gray-100 transition-colors">
              <User className="w-5 h-5 text-gray-600" />
            </Link>
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm animate-scale-in">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className="lg:hidden p-2.5 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="hidden lg:block border-t border-gray-100 animate-fade-in-down">
            <div className="max-w-2xl mx-auto px-8 py-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search mattresses, bed frames, bedding..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white animate-fade-in-down">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between py-3.5 px-3 rounded-lg border-b border-gray-50 text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.label}</span>
                  {item.badge && <span className="badge badge-red text-[9px]">{item.badge}</span>}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link href="/stores" className="block px-3 py-2 text-sm text-gray-500 hover:text-blue-700">Find in Store</Link>
                <Link href="/account" className="block px-3 py-2 text-sm text-gray-500 hover:text-blue-700">My Account</Link>
                <Link href="/faq" className="block px-3 py-2 text-sm text-gray-500 hover:text-blue-700">Help</Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
