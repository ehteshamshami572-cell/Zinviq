'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './brand-logo';
import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleMobileMenu, setMobileMenuOpen } from '@/store/slices/ui-slice';
import { Menu, X, ArrowUpRight, Sparkles, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector((state) => state.ui.mobileMenuOpen);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route transition
  useEffect(() => {
    dispatch(setMobileMenuOpen(false));
    setServicesDropdown(false);
  }, [pathname, dispatch]);

  const SERVICE_SUBMENU = [
    {
      title: 'Shopify Development & CRO',
      href: '/services/shopify-development',
      desc: 'Custom Liquid themes, headless Hydrogen stores, and checkout optimization.',
    },
    {
      title: 'Enterprise WordPress & WooCommerce',
      href: '/services/wordpress-development',
      desc: 'Zero-bloat Gutenberg blocks, ACF architectures, and 100/100 Core Web Vitals.',
    },
    {
      title: 'Data-Driven Technical SEO',
      href: '/services/seo',
      desc: 'Page #1 Google search ranking dominance and programmatic authority.',
    },
    {
      title: 'Performance Digital Marketing',
      href: '/services/digital-marketing',
      desc: 'High-ROAS Meta and Google ad funnels with server-side CAPI tracking.',
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050814]/92 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3.5'
          : 'bg-[#050814]/70 backdrop-blur-md border-b border-white/[0.04] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group focus-visible:outline-none">
          <BrandLogo size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#080E21]/80 border border-white/[0.08] px-4 py-1.5 rounded-full shadow-inner">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <Link
              href="/services"
              className={`inline-flex items-center gap-1 px-3.5 py-1 text-xs font-semibold rounded-full transition-colors ${
                pathname.startsWith('/services')
                  ? 'text-[#00F0FF] bg-white/[0.06]'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              Services
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </Link>

            {/* Hover Menu */}
            <AnimatePresence>
              {servicesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-[#080E21]/95 backdrop-blur-2xl border border-white/10 p-3 shadow-2xl z-50"
                >
                  <div className="space-y-1">
                    {SERVICE_SUBMENU.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group"
                      >
                        <div className="text-xs font-bold text-white group-hover:text-[#00F0FF] transition-colors">
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
                        className="text-[11px] font-mono font-semibold text-[#00F0FF] hover:underline px-2 block"
                      >
                        View All Capabilities →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/case-studies"
            className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-colors ${
              pathname.startsWith('/case-studies')
                ? 'text-[#00F0FF] bg-white/[0.06]'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            Case Studies
          </Link>

          <Link
            href="/about"
            className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-colors ${
              pathname === '/about'
                ? 'text-[#00F0FF] bg-white/[0.06]'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-colors ${
              pathname === '/contact'
                ? 'text-[#00F0FF] bg-white/[0.06]'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 pl-3 border-l border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF] animate-pulse" />
            <span className="font-mono text-[11px] text-slate-400 font-medium">
              Accepting New Brands
            </span>
          </div>

          <Link href="/contact">
            <Button size="sm" variant="primary">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Get Free Audit
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => dispatch(toggleMobileMenu())}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl text-slate-200 hover:text-white bg-white/[0.04] border border-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-b border-white/10 bg-[#080E21]/95 backdrop-blur-2xl px-6 py-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-3">
              <Link
                href="/services"
                onClick={() => dispatch(setMobileMenuOpen(false))}
                className="text-base font-semibold text-white hover:text-[#00F0FF] transition-colors py-1 border-b border-white/[0.04]"
              >
                All Services Overview
              </Link>

              <div className="pl-3 py-1 space-y-2 border-l border-[#00F0FF]/30">
                <Link
                  href="/services/shopify-development"
                  onClick={() => dispatch(setMobileMenuOpen(false))}
                  className="block text-xs text-slate-300 hover:text-[#00F0FF]"
                >
                  Shopify Development & CRO →
                </Link>
                <Link
                  href="/services/wordpress-development"
                  onClick={() => dispatch(setMobileMenuOpen(false))}
                  className="block text-xs text-slate-300 hover:text-[#00F0FF]"
                >
                  WordPress & WooCommerce →
                </Link>
                <Link
                  href="/services/seo"
                  onClick={() => dispatch(setMobileMenuOpen(false))}
                  className="block text-xs text-slate-300 hover:text-[#00F0FF]"
                >
                  Technical SEO →
                </Link>
                <Link
                  href="/services/digital-marketing"
                  onClick={() => dispatch(setMobileMenuOpen(false))}
                  className="block text-xs text-slate-300 hover:text-[#00F0FF]"
                >
                  Digital Marketing & Ads →
                </Link>
              </div>

              <Link
                href="/case-studies"
                onClick={() => dispatch(setMobileMenuOpen(false))}
                className="text-base font-semibold text-white hover:text-[#00F0FF] transition-colors py-1 border-b border-white/[0.04]"
              >
                Case Studies
              </Link>

              <Link
                href="/about"
                onClick={() => dispatch(setMobileMenuOpen(false))}
                className="text-base font-semibold text-white hover:text-[#00F0FF] transition-colors py-1 border-b border-white/[0.04]"
              >
                About Zinviq
              </Link>

              <Link
                href="/contact"
                onClick={() => dispatch(setMobileMenuOpen(false))}
                className="text-base font-semibold text-white hover:text-[#00F0FF] transition-colors py-1 border-b border-white/[0.04]"
              >
                Contact & Free Audit
              </Link>

              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => dispatch(setMobileMenuOpen(false))}
                  className="w-full"
                >
                  <Button variant="primary" className="w-full">
                    Get Free Audit & Proposal
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
