'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  LEAD_CATEGORIES, BUSINESS_CATEGORIES,
  palette, buildWALink, getWALink,
  type LeadCategory, type BusinessCategory,
} from '@/lib/categories'

/* ─── Shared: WhatsApp SVG ───────────────────────────────────── */
function WAIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════
   LEAD CATEGORY CARD — sub-items as bullet list, WA msg includes all items
═══════════════════════════════════════════════════════════════ */
function LeadCard({ cat, delay, index }: { cat: LeadCategory; delay: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const p = palette[cat.accentColor]

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && ref.current?.classList.add('visible'),
      { threshold: 0.08 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="animate-on-scroll group flex flex-col bg-white rounded-2xl border border-[#EAEAE6] overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_56px_rgba(0,0,0,0.10)] transition-all duration-300 ease-out"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* ── Accent top bar ── */}
      <div className={`h-1 w-full ${p.bar} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="px-6 pt-5 pb-5 flex-1 flex flex-col">

        {/* Meta row: sector + record count */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${p.dot} flex-shrink-0`} />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.13em] text-slate-400">
              {cat.sector}
            </span>
          </div>
          <div className="text-right">
            <span className={`font-display text-lg font-semibold leading-none ${p.record}`}>{cat.records}</span>
            <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">Records</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-body font-bold text-[#0A0A0F] text-[15px] leading-snug mb-2">
          {cat.title}
        </h3>

        {/* Short description */}
        <p className="text-[#6B6B8A] text-[12.5px] leading-relaxed mb-4">
          {cat.description}
        </p>

        {/* ── Sub-items list — the key new feature ── */}
        <div className={`rounded-xl border p-3.5 mb-4 flex-1 ${p.tag} border-opacity-60`}
          style={{ background: 'rgba(255,255,255,0.7)' }}>
          <p className="text-[9px] font-mono font-bold uppercase tracking-[0.12em] text-slate-400 mb-2.5">
            Includes
          </p>
          <ul className="space-y-1.5">
            {cat.subItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className={`mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.itemDot}`} />
                <span className="text-[12px] text-[#3B3B5A] font-medium leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ideal for */}
        <p className="text-[11px] text-slate-400 font-mono leading-relaxed">
          <span className="text-slate-500 font-semibold">Ideal for:</span>{' '}
          {cat.idealFor}
        </p>
      </div>

      {/* CTA — always pinned bottom */}
      <div className="px-6 pb-5 pt-0 flex-shrink-0">
        <div className="border-t border-[#F0F0EC] mb-4" />
        <a
          href={buildWALink(cat.title, cat.subItems)}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl text-white text-[13px] font-semibold ${p.btn} shadow-sm hover:shadow-md transition-all duration-300`}
        >
          <WAIcon size={14} />
          Get This Database
        </a>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   BUSINESS DIRECTORY CARD — shop/business lists with bullets
═══════════════════════════════════════════════════════════════ */
function BusinessCard({ cat, delay }: { cat: BusinessCategory; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const p = palette[cat.accentColor]

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && ref.current?.classList.add('visible'),
      { threshold: 0.08 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="animate-on-scroll group flex flex-col bg-white rounded-2xl border border-[#EAEAE6] overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_56px_rgba(0,0,0,0.10)] transition-all duration-300 ease-out"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Accent top bar */}
      <div className={`h-1 w-full ${p.bar} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="px-6 pt-5 pb-5 flex-1 flex flex-col">
        {/* Meta row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${p.dot} flex-shrink-0`} />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.13em] text-slate-400">
              {cat.sector}
            </span>
          </div>
          <div className="text-right">
            <span className={`font-display text-lg font-semibold leading-none ${p.record}`}>{cat.records}</span>
            <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">Records</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-body font-bold text-[#0A0A0F] text-[15px] leading-snug mb-2">
          {cat.title}
        </h3>

        {/* Description */}
        <p className="text-[#6B6B8A] text-[12.5px] leading-relaxed mb-4">
          {cat.description}
        </p>

        {/* Sub-items */}
        <div className={`rounded-xl border p-3.5 mb-4 flex-1 ${p.tag} border-opacity-60`}
          style={{ background: 'rgba(255,255,255,0.7)' }}>
          <p className="text-[9px] font-mono font-bold uppercase tracking-[0.12em] text-slate-400 mb-2.5">
            Business Types
          </p>
          <ul className="space-y-1.5">
            {cat.subItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className={`mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.itemDot}`} />
                <span className="text-[12px] text-[#3B3B5A] font-medium leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ideal for */}
        <p className="text-[11px] text-slate-400 font-mono leading-relaxed">
          <span className="text-slate-500 font-semibold">Ideal for:</span>{' '}
          {cat.idealFor}
        </p>
      </div>

      {/* CTA */}
      <div className="px-6 pb-5 pt-0 flex-shrink-0">
        <div className="border-t border-[#F0F0EC] mb-4" />
        <a
          href={buildWALink(cat.title, cat.subItems)}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl text-white text-[13px] font-semibold ${p.btn} shadow-sm hover:shadow-md transition-all duration-300`}
        >
          <WAIcon size={14} />
          Get This Database
        </a>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION DIVIDER — between Lead and Business sections
═══════════════════════════════════════════════════════════════ */
function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-5 my-12">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#DBEAFE] to-[#DBEAFE]" />
      <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#DBEAFE] shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-[0.13em] whitespace-nowrap">{label}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#DBEAFE] to-[#DBEAFE]" />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   HOMEPAGE SECTION
   — Shows first 4 Lead categories (highest priority)
   — Then all 3 Business Directory categories
   — Then "View All" banner linking to /categories
═══════════════════════════════════════════════════════════════ */
const HOMEPAGE_LEADS = LEAD_CATEGORIES.slice(0, 4)   // top 4 priority leads
const HOMEPAGE_BUSINESS = BUSINESS_CATEGORIES             // all 3 business types

export default function Categories() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.04 }
    )
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const totalCount = LEAD_CATEGORIES.length + BUSINESS_CATEGORIES.length

  return (
    <section id="categories" ref={sectionRef} className="py-24 bg-[#F7F8FC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="animate-on-scroll flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#DBEAFE] shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-widest">Lead Categories</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#0A0A0F] leading-[1.08] tracking-tighter">
              {totalCount} Premium Lead
              <br />
              <span className="italic" style={{
                background: 'linear-gradient(135deg,#3B82F6 0%,#6366F1 50%,#8B5CF6 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Databases</span>
            </h2>
          </div>
          <p className="text-[#6B6B8A] text-base max-w-sm leading-relaxed lg:text-right">
            Verified, daily updated Excel databases. Each card shows exactly what's included — enquire directly on WhatsApp.
          </p>
        </div>

        {/* ══════════ GROUP 1: LEAD CATEGORIES ══════════ */}
        <div className="animate-on-scroll mb-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h3 className="font-body font-bold text-[#0A0A0F] text-[15px]">Intent-Based Lead Databases</h3>
              <p className="text-[12px] text-slate-400 font-mono">High-intent prospects ready for outreach</p>
            </div>
            <div className="ml-auto hidden sm:block">
              <span className="text-[11px] font-mono text-slate-400 bg-white border border-[#EAEAE6] px-3 py-1.5 rounded-full">
                {LEAD_CATEGORIES.length} categories total
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-0">
          {HOMEPAGE_LEADS.map((cat, i) => (
            <LeadCard key={cat.id} cat={cat} delay={i * 60} index={i} />
          ))}
        </div>

        {/* ── See 3 more leads link ── */}
        <div className="animate-on-scroll mt-5 flex justify-center">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 group"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            View 3 more lead categories (Finance, Home &amp; Lifestyle, Consumer Interest)
          </Link>
        </div>

        {/* ══════════ GROUP 2: BUSINESS DIRECTORY ══════════ */}
        <SectionDivider label="Business Directory Databases" />

        <div className="animate-on-scroll mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div>
              <h3 className="font-body font-bold text-[#0A0A0F] text-[15px]">Shop & Business Owner Databases</h3>
              <p className="text-[12px] text-slate-400 font-mono">Verified B2B shop-owner and trader contacts</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {HOMEPAGE_BUSINESS.map((cat, i) => (
            <BusinessCard key={cat.id} cat={cat} delay={i * 70} />
          ))}
        </div>

        {/* ── View All banner ── */}
        <div className="animate-on-scroll">
          <div
            className="relative rounded-2xl overflow-hidden border border-[#DBEAFE]"
            style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #F0F4FF 50%, #EDF9FF 100%)' }}
          >
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-50 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #C7D2FE 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            {/* Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 md:p-10">
              {/* Left */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {/* Category dots */}
                  <div className="flex -space-x-1.5">
                    {['bg-teal-500', 'bg-slate-500', 'bg-violet-500', 'bg-green-500', 'bg-blue-500', 'bg-orange-500', 'bg-rose-500'].map((c) => (
                      <div key={c} className={`w-5 h-5 rounded-full ${c} border-2 border-white shadow-sm`} />
                    ))}
                  </div>
                  <span className="text-[12px] font-mono text-slate-500 font-semibold">
                    +{LEAD_CATEGORIES.length - HOMEPAGE_LEADS.length} more categories
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-[#0A0A0F] mb-2">
                  Browse all {totalCount} databases
                </h3>
                <p className="text-[#6B6B8A] text-[13px] leading-relaxed max-w-md">
                  Finance, Home &amp; Lifestyle, Consumer Interest leads — plus Jewellers, Garments, Restaurants and more. Filter by sector, compare records, enquire instantly.
                </p>
              </div>

              {/* Right */}
              <div className="flex flex-col items-center gap-3 shrink-0">
                <Link
                  href="/categories"
                  className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-accent text-white text-[14px] font-semibold hover:bg-accent-vivid transition-all duration-300 shadow-lg shadow-accent/15 whitespace-nowrap"
                >
                  View All Categories
                  <svg
                    width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className="group-hover:translate-x-0.5 transition-transform duration-200"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href={`https://wa.me/916260712882?text=${encodeURIComponent("Hello! I'd like to see all available database categories and pricing.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[13px] text-[#1a9950] font-semibold hover:text-[#25D366] transition-colors duration-200"
                >
                  <WAIcon size={14} />
                  Or ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}