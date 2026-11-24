import React from 'react';
import Link from 'next/link';
import { BrandLogo } from './brand-logo';
import { CONTACT_EMAIL, isWhatsappEnabled, whatsappUrl } from '@/lib/contact-config';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-navy-950 pt-20 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/">
                <BrandLogo size="lg" />
              </Link>
              <p className="mt-5 text-sm text-slate-400 max-w-sm leading-relaxed">
                Zinviq is a digital engineering and growth partner. We build fast Shopify and WordPress
                platforms, improve search visibility, and manage paid acquisition with clear reporting.
              </p>
              <div className="mt-5 flex flex-col gap-1.5 text-sm">
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-pink-200 hover:underline w-fit">
                  {CONTACT_EMAIL}
                </a>
                {isWhatsappEnabled && (
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline w-fit"
                  >
                    Chat on WhatsApp →
                  </a>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] font-mono text-[11px] text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-pink-glow" />
                GLOBAL DIGITAL ACCELERATION
              </span>
              <span className="font-mono text-[11px] text-slate-400">
                SHOPIFY • WORDPRESS • SEO • ADS
              </span>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Capabilities
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/shopify-development" className="hover:text-pink-200 transition-colors">
                  Shopify Development & CRO
                </Link>
              </li>
              <li>
                <Link href="/services/wordpress-development" className="hover:text-pink-200 transition-colors">
                  Custom WordPress & WooCommerce
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="hover:text-pink-200 transition-colors">
                  Technical SEO & Google Ranks
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-pink-200 transition-colors">
                  Performance Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs font-mono font-semibold text-pink-200 hover:underline block pt-1">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
              Case Studies
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/case-studies/aura-luxe-shopify" className="hover:text-pink-200 transition-colors">
                  Aura Luxe London (+340% Sales)
                </Link>
              </li>
              <li>
                <Link href="/case-studies/novacrest-wordpress-portal" className="hover:text-pink-200 transition-colors">
                  Novacrest Portal (100 Core Vitals)
                </Link>
              </li>
              <li>
                <Link href="/case-studies/nordic-biohealth-seo" className="hover:text-pink-200 transition-colors">
                  Nordic BioHealth (180K SEO Visits)
                </Link>
              </li>
              <li>
                <Link href="/case-studies/veloce-performance-marketing" className="hover:text-pink-200 transition-colors">
                  Veloce Watches (4.6x ROAS)
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-xs font-mono font-semibold text-pink-200 hover:underline block pt-1">
                  All Case Studies →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company & Standards
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-pink-200 transition-colors">
                  About Zinviq Manifesto
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-200 transition-colors">
                  Claim Free Store Audit
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-pink-200 transition-colors">
                  Privacy & Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-pink-200 transition-colors">
                  Terms of Engagement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} Zinviq. Precision in Motion.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
            <Link href="/contact" className="text-pink-200 hover:underline">Request Free Audit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
