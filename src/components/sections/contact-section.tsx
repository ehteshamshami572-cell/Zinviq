'use client';

import React, { useId } from 'react';
import { useContactForm } from '@/hooks/use-contact-form';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Clock, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { CONTACT_EMAIL, isWhatsappEnabled, whatsappUrl } from '@/lib/contact-config';

export function ContactSection() {
  const { form, onSubmit, isLoading, isSuccess, resetSubmission } = useContactForm();
  const { register, formState: { errors } } = form;
  const fieldId = useId();

  return (
    <section id="contact" className="py-28 bg-navy-950 relative border-t border-white/[0.06]">
      {/* Ambient hot-pink glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-500/10 blur-[150px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left column: value proposition */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <Badge variant="lavender" className="mb-3">
                <Sparkles className="size-3.5 mr-1" />
                Free Technical & Growth Audit
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Scale Your Revenue With Zinviq.
              </h2>
              <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
                Shopify Plus stores, clean WordPress architecture, technical SEO, and paid acquisition —
                reviewed by the project team and built around measurable business outcomes.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-3.5 text-sm text-slate-200">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-pink-300">
                    <Clock className="size-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">24-Hour Actionable Audit:</span>
                    <span className="text-xs text-slate-400">
                      Speed, checkout friction, crawlability and ranking opportunities, prioritised.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm text-slate-200">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-pink-300">
                    <ShieldCheck className="size-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Confidential by default:</span>
                    <span className="text-xs text-slate-400">
                      Your metrics, store data and customer information are never shared.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm text-slate-200">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-pink-300">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Direct email:</span>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-xs font-mono text-pink-300 hover:underline">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                {isWhatsappEnabled && (
                  <div className="flex items-start gap-3.5 text-sm text-slate-200">
                    <div className="p-2 rounded-lg bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366]">
                      <MessageCircle className="size-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-white block">Prefer chat?</span>
                      <a
                        href={whatsappUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#25D366] hover:underline"
                      >
                        Message us on WhatsApp →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="size-2 rounded-full bg-pink-400 shadow-[0_0_6px_hsl(var(--pink-400))]" />
              ESTIMATED AUDIT TURNAROUND: UNDER 24 HOURS
            </div>
          </div>

          {/* Right column: lead capture form */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10">
              {isSuccess ? (
                <div className="py-12 text-center">
                  <div className="size-16 rounded-full bg-pink-500/10 border border-pink-400/30 flex items-center justify-center mx-auto mb-5 shadow-pink-glow-sm">
                    <CheckCircle2 className="size-9 text-pink-300" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Audit Request Dispatched
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Zinviq. The project team will review your details and
                    contact you within 24 hours with a clear growth roadmap.
                  </p>
                  <Button variant="secondary" className="mt-8" onClick={resetSubmission}>
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  {/* Honeypot and form-open timestamp: both are checked by the API. */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor={`${fieldId}-company`}>Company (leave blank)</label>
                    <input
                      {...register('company')}
                      id={`${fieldId}-company`}
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    <input
                      {...register('formLoadedAt', { valueAsNumber: true })}
                      type="hidden"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor={`${fieldId}-name`} className="mb-2">
                        Your Full Name *
                      </Label>
                      <Input
                        {...register('name')}
                        id={`${fieldId}-name`}
                        type="text"
                        autoComplete="name"
                        placeholder="Alex Rivera"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? `${fieldId}-name-error` : undefined}
                      />
                      {errors.name && (
                        <p id={`${fieldId}-name-error`} className="text-rose-300 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor={`${fieldId}-email`} className="mb-2">
                        Business Email *
                      </Label>
                      <Input
                        {...register('email')}
                        id={`${fieldId}-email`}
                        type="email"
                        autoComplete="email"
                        placeholder="alex@brand.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? `${fieldId}-email-error` : undefined}
                      />
                      {errors.email && (
                        <p id={`${fieldId}-email-error`} className="text-rose-300 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor={`${fieldId}-website`} className="mb-2">
                        Current Website URL (Optional)
                      </Label>
                      <Input
                        {...register('websiteUrl')}
                        id={`${fieldId}-website`}
                        type="url"
                        autoComplete="url"
                        placeholder="https://yourbrand.com"
                        aria-invalid={Boolean(errors.websiteUrl)}
                        aria-describedby={
                          errors.websiteUrl ? `${fieldId}-website-error` : undefined
                        }
                      />
                      {errors.websiteUrl && (
                        <p
                          id={`${fieldId}-website-error`}
                          className="text-rose-300 text-xs mt-1"
                        >
                          {errors.websiteUrl.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor={`${fieldId}-service`} className="mb-2">
                        Primary Service Needed *
                      </Label>
                      <Select
                        {...register('serviceRequired')}
                        id={`${fieldId}-service`}
                        aria-invalid={Boolean(errors.serviceRequired)}
                      >
                        <option value="shopify-development">Shopify Development & CRO</option>
                        <option value="wordpress-development">WordPress & WooCommerce</option>
                        <option value="seo-ranking">Technical SEO & Google Ranks</option>
                        <option value="digital-marketing">Digital Marketing & Paid Ads</option>
                        <option value="full-growth-stack">Full Growth Stack (Dev + SEO + Ads)</option>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor={`${fieldId}-stage`} className="mb-2">
                        Current Business Stage
                      </Label>
                      <Select {...register('currentStage')} id={`${fieldId}-stage`}>
                        <option value="SCALING_EXISTING_BRAND">Scaling an Existing Brand ($10k-$100k+/mo)</option>
                        <option value="LAUNCHING_NEW_STORE">Launching a Brand New Store</option>
                        <option value="MIGRATION_OR_REDESIGN">Platform Migration or Total Redesign</option>
                        <option value="NEED_MORE_TRAFFIC_SALES">Stagnant Sales — Need Traffic & High CRO</option>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor={`${fieldId}-budget`} className="mb-2">
                        Estimated Project / Monthly Budget
                      </Label>
                      <Select {...register('monthlyBudget')} id={`${fieldId}-budget`}>
                        <option value="5K_TO_10K">$5,000 – $10,000</option>
                        <option value="10K_TO_25K">$10,000 – $25,000</option>
                        <option value="25K_TO_50K">$25,000 – $50,000</option>
                        <option value="ABOVE_50K">$50,000+</option>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor={`${fieldId}-message`} className="mb-2">
                      Growth Goals & Current Challenges *
                    </Label>
                    <Textarea
                      {...register('message')}
                      id={`${fieldId}-message`}
                      rows={4}
                      placeholder="Tell us about your target revenue, current conversion roadblocks, ad spend, or specific features you need..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? `${fieldId}-message-error` : undefined}
                    />
                    {errors.message && (
                      <p id={`${fieldId}-message-error`} className="text-rose-300 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" variant="primary" size="lg" isLoading={isLoading} className="w-full">
                    Claim Free Audit & Growth Strategy
                    <ArrowRight className="ml-2" />
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
