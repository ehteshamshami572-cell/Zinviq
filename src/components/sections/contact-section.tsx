'use client';

import React from 'react';
import { useContactForm } from '@/hooks/use-contact-form';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Clock, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

export function ContactSection() {
  const { form, onSubmit, isLoading, isSuccess, resetSubmission } = useContactForm();
  const { register, formState: { errors } } = form;

  return (
    <section id="contact" className="py-28 bg-[#050814] relative border-t border-white/[0.06]">
      {/* Ambient Radial Cyan Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00F0FF]/10 blur-[150px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <Badge variant="cyan" className="mb-3">
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                Free Technical & Growth Audit
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Scale Your Revenue With Zinviq.
              </h2>
              <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
                Whether you need a custom Shopify Plus store, a clean WordPress architecture, Page #1 Google rankings, or profitable paid ads, our senior team is ready to scale your business.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-3.5 text-sm text-slate-200">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#00F0FF]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">24-Hour Actionable Audit:</span>
                    <span className="text-xs text-slate-400">
                      Receive an in-depth teardown of your speed, checkout friction, and SEO ranking opportunities.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm text-slate-200">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#00F0FF]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Mutual Confidentiality (NDA):</span>
                    <span className="text-xs text-slate-400">
                      Your business metrics, store data, and customer info remain 100% confidential.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm text-slate-200">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#00F0FF]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Direct Inquiries:</span>
                    <span className="text-xs font-mono text-[#00F0FF]">
                      growth@zinviq.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_6px_#00F0FF]" />
              ESTIMATED AUDIT TURNAROUND: UNDER 24 HOURS
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.1] bg-[#080E21]/90 backdrop-blur-2xl p-8 sm:p-10 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.9)]">
              {isSuccess ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center mx-auto mb-5 shadow-[0_0_25px_rgba(0,240,255,0.3)]">
                    <CheckCircle2 className="w-9 h-9 text-[#00F0FF]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Audit Request Dispatched
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Zinviq. Our senior solutions architect is currently reviewing your website parameters and will contact you within 24 hours with a comprehensive audit and growth plan.
                  </p>
                  <Button
                    variant="secondary"
                    className="mt-8"
                    onClick={resetSubmission}
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        placeholder="Alex Rivera"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00F0FF] focus:border-transparent transition-all"
                      />
                      {errors.name && (
                        <p className="text-rose-400 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Business Email *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="alex@brand.com"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00F0FF] focus:border-transparent transition-all"
                      />
                      {errors.email && (
                        <p className="text-rose-400 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Website URL & Service Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Current Website URL (Optional)
                      </label>
                      <input
                        {...register('websiteUrl')}
                        type="text"
                        placeholder="https://yourbrand.com"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00F0FF] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Primary Service Needed *
                      </label>
                      <select
                        {...register('serviceRequired')}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#080E21] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00F0FF] focus:border-transparent transition-all"
                      >
                        <option value="shopify-development">Shopify Development & CRO</option>
                        <option value="wordpress-development">WordPress & WooCommerce</option>
                        <option value="seo-ranking">Technical SEO & Google Ranks</option>
                        <option value="digital-marketing">Digital Marketing & Paid Ads</option>
                        <option value="full-growth-stack">Full Growth Stack (Dev + SEO + Ads)</option>
                      </select>
                      {errors.serviceRequired && (
                        <p className="text-rose-400 text-xs mt-1">{errors.serviceRequired.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Stage & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Current Business Stage
                      </label>
                      <select
                        {...register('currentStage')}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#080E21] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00F0FF] focus:border-transparent transition-all"
                      >
                        <option value="SCALING_EXISTING_BRAND">Scaling an Existing Brand ($10k-$100k+/mo)</option>
                        <option value="LAUNCHING_NEW_STORE">Launching a Brand New Store</option>
                        <option value="MIGRATION_OR_REDESIGN">Platform Migration or Total Redesign</option>
                        <option value="NEED_MORE_TRAFFIC_SALES">Stagnant Sales — Need Traffic & High CRO</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Estimated Project / Monthly Budget
                      </label>
                      <select
                        {...register('monthlyBudget')}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#080E21] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00F0FF] focus:border-transparent transition-all"
                      >
                        <option value="5K_TO_10K">$5,000 – $10,000</option>
                        <option value="10K_TO_25K">$10,000 – $25,000</option>
                        <option value="25K_TO_50K">$25,000 – $50,000</option>
                        <option value="ABOVE_50K">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Growth Goals & Current Challenges *
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Tell us about your target revenue, current conversion roadblocks, ad spend, or specific features you need..."
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00F0FF] focus:border-transparent transition-all"
                    />
                    {errors.message && (
                      <p className="text-rose-400 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isLoading}
                    className="w-full"
                  >
                    Claim Free Audit & Growth Strategy
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
