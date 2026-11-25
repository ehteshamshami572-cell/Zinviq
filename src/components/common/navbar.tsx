'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './brand-logo';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowUpRight, Sparkles, ChevronDown, MessageCircle } from 'lucide-react';
import { isWhatsappEnabled, whatsappUrl } from '@/lib/contact-config';

const SERVICE_SUBMENU = [
  {
    title: 'Shopify Development & CRO',
    href: '/services/shopify-development',
    desc: 'Custom Liquid themes and checkout optimisation.',
  },
  {
    title: 'Enterprise WordPress & WooCommerce',
    href: '/services/wordpress-development',
    desc: 'Lean Gutenberg blocks, ACF and measured Core Web Vitals.',
  },
  {
    title: 'Data-Driven Technical SEO',
    href: '/services/seo',
    desc: 'Technical fixes, buyer-intent content and transparent reporting.',
  },
  {
    title: 'Performance Digital Marketing',
    href: '/services/digital-marketing',
    desc: 'Paid acquisition funnels with clear stop, learn and scale rules.',
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        frame = 0;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Close mobile drawer and dropdown on route transition.
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/92 backdrop-blur-2xl border-b border-white/[0.08] shadow-card-glow py-3.5'
          : 'bg-navy-950/70 backdrop-blur-md border-b border-white/[0.04] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group focus-visible:outline-none">
          <BrandLogo size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-navy-900/80 border border-white/[0.08] px-4 py-1.5 rounded-full shadow-inner">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setServicesDropdown(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setServicesDropdown(false);
            }}
          >
            <Link
              href="/services"
              aria-expanded={servicesDropdown}
              aria-controls="services-dropdown"
              onFocus={() => setServicesDropdown(true)}
              className={`inline-flex items-center gap-1 px-3.5 py-1 text-xs font-semibold rounded-full transition-colors ${
                pathname.startsWith('/services')
                  ? 'text-pink-200 bg-white/[0.06]'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              Services
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </Link>

            {servicesDropdown && (
              <div
                id="services-dropdown"
                className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-navy-900/95 backdrop-blur-2xl border border-white/10 p-3 shadow-2xl z-50 animate-fade-in-up"
              >
                <div className="space-y-1">
                  {SERVICE_SUBMENU.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group"
                    >
                      <div className="text-xs font-bold text-white group-hover:text-pink-200 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                  <div className="pt-2 mt-2 border-t border-white/[0.06]">
                    <Link
                      href="/services"
                      className="text-[11px] font-mono font-semibold text-pink-200 hover:underline px-2 block"
                    >
                      View All Capabilities →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/case-studies"
            className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-colors ${
              pathname.startsWith('/case-studies')
                ? 'text-pink-200 bg-white/[0.06]'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            Case Studies
          </Link>

          <Link
            href="/about"
            className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-colors ${
              pathname === '/about'
                ? 'text-pink-200 bg-white/[0.06]'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-colors ${
              pathname === '/contact'
                ? 'text-pink-200 bg-white/[0.06]'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 pl-3 border-l border-white/10">
            <span className="w-2 h-2 rounded-full bg-pink-400 shadow-pink-glow animate-pulse" />
            <span className="font-mono text-[11px] text-slate-400 font-medium">
              Accepting New Projects
            </span>
          </div>

          <Link
            href="/contact"
            className="hidden md:inline-flex rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-pink-400/60 hover:text-pink-200"
          >
            Contact Us
          </Link>

          {isWhatsappEnabled && (
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Zinviq on WhatsApp"
              className="hidden md:inline-flex items-center gap-1.5 rounded-lg border border-[#25D366]/30 px-3 py-2 text-xs font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/10"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              WhatsApp
            </a>
          )}

          <Link href="/contact">
            <Button size="sm" variant="primary">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Get Quote
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="p-2 rounded-xl text-slate-200 hover:text-white bg-white/[0.04] border border-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-b border-white/10 bg-navy-900/95 backdrop-blur-2xl px-6 py-6 shadow-2xl animate-slide-down"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-pink-200 transition-colors py-1 border-b border-white/[0.04]"
            >
              All Services Overview
            </Link>

            <div className="pl-3 py-1 space-y-2 border-l border-pink-400/30">
              <Link
                href="/services/shopify-development"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs text-slate-300 hover:text-pink-200"
              >
                Shopify Development &amp; CRO →
              </Link>
              <Link
                href="/services/wordpress-development"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs text-slate-300 hover:text-pink-200"
              >
                WordPress &amp; WooCommerce →
              </Link>
              <Link
                href="/services/seo"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs text-slate-300 hover:text-pink-200"
              >
                Technical SEO →
              </Link>
              <Link
                href="/services/digital-marketing"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs text-slate-300 hover:text-pink-200"
              >
                Digital Marketing &amp; Ads →
              </Link>
            </div>

            <Link
              href="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-pink-200 transition-colors py-1 border-b border-white/[0.04]"
            >
              Case Studies
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-pink-200 transition-colors py-1 border-b border-white/[0.04]"
            >
              About Zinviq
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-pink-200 transition-colors py-1 border-b border-white/[0.04]"
            >
              Contact &amp; Free Audit
            </Link>

            <div className="pt-4 flex flex-col gap-3">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full">
                <Button variant="primary" className="w-full">
                  Get Quote &amp; Free Audit
                </Button>
              </Link>
              {isWhatsappEnabled && (
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#25D366]/30 px-4 py-2.5 text-sm font-semibold text-[#25D366]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
