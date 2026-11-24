'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCategory } from '@/store/slices/showcase-slice';
import { ProjectCategory } from '@/types/project';
import { PROJECTS_DATA } from '@/constants/projects-data';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES: { label: string; value: ProjectCategory }[] = [
  { label: 'All Work', value: 'ALL' },
  { label: 'Shopify Stores', value: 'SHOPIFY' },
  { label: 'WordPress', value: 'WORDPRESS' },
  { label: 'SEO Campaigns', value: 'SEO' },
  { label: 'Paid Marketing', value: 'MARKETING' },
];

export function ProjectShowcase() {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector((state) => state.showcase.selectedCategory);

  const filteredProjects =
    selectedCategory === 'ALL'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="showcase" className="py-28 bg-navy-950 relative border-t border-white/[0.06]">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 w-[500px] h-[500px] bg-pink-600/10 blur-[140px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <Badge variant="lavender" className="mb-3">
              Example Engagements
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Selected Engagements & Delivery Approach
            </h2>
            <p className="text-slate-300 mt-2 text-base max-w-xl">
              Illustrative Shopify, WordPress, SEO and paid acquisition work, shown with the checks and deliverables behind each build.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-1.5 mt-6 md:mt-0 p-1.5 bg-navy-900 border border-white/[0.08] rounded-xl">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => dispatch(setCategory(cat.value))}
                  className={`relative px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    isActive ? 'text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeShowcaseTab"
                      className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-300 shadow-pink-glow rounded-lg -z-10"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-navy-900/80 backdrop-blur-xl p-7 shadow-card-glow hover:border-pink-400/40 hover:shadow-pink-glow transition-all duration-300"
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                    <span className="font-mono text-[11px] text-slate-400">
                      {project.client}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-pink-200 bg-pink-400/10 px-2.5 py-0.5 rounded-full border border-pink-400/25">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-pink-glow" />
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-200 transition-colors flex items-center justify-between gap-2">
                    <Link href={`/case-studies/${project.slug}`}>
                      {project.title}
                    </Link>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-pink-200 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Impact Benchmark Callout */}
                  <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-pink-400/10 to-pink-600/10 border border-pink-400/25 flex items-center gap-3.5">
                    <div className="p-2 rounded-lg bg-pink-400/15 border border-pink-400/30 shadow-pink-glow">
                      <TrendingUp className="w-4 h-4 text-pink-200" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white tracking-tight leading-none text-pink-200">
                        {project.impactMetric.value}
                      </div>
                      <div className="text-[11px] text-slate-200 font-medium mt-1">
                        {project.impactMetric.label}
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mt-5 space-y-1.5">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Layers className="w-3 h-3 text-pink-200" />
                      Delivered Engineering Scope
                    </div>
                    {project.deliverablesList.slice(0, 3).map((hl) => (
                      <div key={hl} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-200 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tech Stack Tags & Link */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/case-studies/${project.slug}`}
                    className="text-xs font-semibold text-pink-200 hover:underline inline-flex items-center gap-1"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
