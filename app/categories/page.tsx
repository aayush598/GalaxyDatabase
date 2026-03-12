'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
    LEAD_CATEGORIES, BUSINESS_CATEGORIES, palette,
    buildWALink, type LeadCategory, type BusinessCategory,
} from '@/lib/categories'

/* ─── WhatsApp icon ──────────────────────────────────────────── */
function WAIcon({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    )
}

/* ═══════════════════════════════════════════════════════════════
   LEAD CATEGORY CARD — for /categories page
═══════════════════════════════════════════════════════════════ */
function LeadCard({ cat, index }: { cat: LeadCategory; index: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const p = palette[cat.accentColor]

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => e.isIntersecting && ref.current?.classList.add('visible'),
            { threshold: 0.06 }
        )
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className="animate-on-scroll group flex flex-col bg-white rounded-2xl border border-[#EAEAE6] overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_56px_rgba(0,0,0,0.10)] transition-all duration-300 ease-out"
            style={{ transitionDelay: `${(index % 3) * 55}ms` }}
        >
            {/* Top accent bar */}
            <div className={`h-1 w-full ${p.bar} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

            <div className="px-6 pt-5 pb-5 flex-1 flex flex-col">

                {/* Index + sector */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[10px] text-slate-300 font-semibold tabular-nums">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="w-px h-3 bg-[#EAEAE6]" />
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
                <div
                    className={`rounded-xl border p-3.5 mb-4 flex-1 ${p.tag} border-opacity-60`}
                    style={{ background: 'rgba(255,255,255,0.75)' }}
                >
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
                    <span className="text-slate-500 font-semibold">Ideal for:</span> {cat.idealFor}
                </p>
            </div>

            {/* CTA */}
            <div className="px-6 pb-5 flex-shrink-0">
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
   BUSINESS DIRECTORY CARD — for /categories page
═══════════════════════════════════════════════════════════════ */
function BusinessCard({ cat, index }: { cat: BusinessCategory; index: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const p = palette[cat.accentColor]

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => e.isIntersecting && ref.current?.classList.add('visible'),
            { threshold: 0.06 }
        )
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className="animate-on-scroll group flex flex-col bg-white rounded-2xl border border-[#EAEAE6] overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_56px_rgba(0,0,0,0.10)] transition-all duration-300 ease-out"
            style={{ transitionDelay: `${(index % 3) * 55}ms` }}
        >
            <div className={`h-1 w-full ${p.bar} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

            <div className="px-6 pt-5 pb-5 flex-1 flex flex-col">

                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[10px] text-slate-300 font-semibold tabular-nums">
                            {String(LEAD_CATEGORIES.length + index + 1).padStart(2, '0')}
                        </span>
                        <span className="w-px h-3 bg-[#EAEAE6]" />
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

                <h3 className="font-body font-bold text-[#0A0A0F] text-[15px] leading-snug mb-2">
                    {cat.title}
                </h3>

                <p className="text-[#6B6B8A] text-[12.5px] leading-relaxed mb-4">
                    {cat.description}
                </p>

                <div
                    className={`rounded-xl border p-3.5 mb-4 flex-1 ${p.tag} border-opacity-60`}
                    style={{ background: 'rgba(255,255,255,0.75)' }}
                >
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

                <p className="text-[11px] text-slate-400 font-mono leading-relaxed">
                    <span className="text-slate-500 font-semibold">Ideal for:</span> {cat.idealFor}
                </p>
            </div>

            <div className="px-6 pb-5 flex-shrink-0">
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
   FILTER PILL
═══════════════════════════════════════════════════════════════ */
function FilterPill({ label, active, count, onClick }: {
    label: string; active: boolean; count: number; onClick: () => void
}) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold font-mono uppercase tracking-wider transition-all duration-200 border whitespace-nowrap focus-visible:outline-none ${active
                ? 'bg-accent text-white border-accent shadow-sm'
                : 'bg-white text-slate-500 border-[#E4E4E0] hover:border-blue-300 hover:text-ink'
                }`}
        >
            {label}
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold tabular-nums ${active ? 'bg-white/20 text-white' : 'bg-[#F0F0EC] text-slate-400'
                }`}>
                {count}
            </span>
        </button>
    )
}

/* ═══════════════════════════════════════════════════════════════
   SECTION DIVIDER
═══════════════════════════════════════════════════════════════ */
function SectionDivider({ label, sublabel }: { label: string; sublabel: string }) {
    return (
        <div className="flex items-center gap-5 my-14">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#DBEAFE] to-[#DBEAFE]" />
            <div className="text-center px-5 py-3 rounded-2xl bg-white border border-[#DBEAFE] shadow-sm">
                <div className="flex items-center gap-2 justify-center mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="text-[12px] font-mono font-bold text-[#0A0A0F] uppercase tracking-[0.12em]">{label}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                </div>
                <p className="text-[11px] text-slate-400 font-mono">{sublabel}</p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#DBEAFE] to-[#DBEAFE]" />
        </div>
    )
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════ */
export default function CategoriesPage() {
    const [activeFilter, setActiveFilter] = useState('All')
    const [scrolled, setScrolled] = useState(false)

    /* Build unified sector list with counts across BOTH types */
    const allLeadSectors = LEAD_CATEGORIES.map((c) => c.sector)
    const allBusinessSectors = BUSINESS_CATEGORIES.map((c) => c.sector)

    const sectorCounts: Record<string, number> = {}
        ;[...allLeadSectors, ...allBusinessSectors].forEach((s) => {
            sectorCounts[s] = (sectorCounts[s] || 0) + 1
        })
    const totalCount = LEAD_CATEGORIES.length + BUSINESS_CATEGORIES.length
    const sectors = ['All', ...Object.keys(sectorCounts).sort()]

    /* Filter logic — applies to both groups */
    const filteredLeads = activeFilter === 'All'
        ? LEAD_CATEGORIES
        : LEAD_CATEGORIES.filter((c) => c.sector === activeFilter)

    const filteredBusiness = activeFilter === 'All'
        ? BUSINESS_CATEGORIES
        : BUSINESS_CATEGORIES.filter((c) => c.sector === activeFilter)

    const filteredTotal = filteredLeads.length + filteredBusiness.length

    /* Scroll detection for sticky nav */
    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', fn)
        return () => window.removeEventListener('scroll', fn)
    }, [])

    /* Re-trigger scroll animation after filter */
    useEffect(() => {
        const timer = setTimeout(() => {
            const obs = new IntersectionObserver(
                (entries) => entries.forEach((e) => e.isIntersecting && (e.target as HTMLElement).classList.add('visible')),
                { threshold: 0.06 }
            )
            document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach((el) => obs.observe(el))
            return () => obs.disconnect()
        }, 50)
        return () => clearTimeout(timer)
    }, [activeFilter])

    const showLeads = filteredLeads.length > 0
    const showBusiness = filteredBusiness.length > 0

    return (
        <div className="min-h-screen" style={{ background: 'linear-gradient(180deg,#FFFFFF 0%,#F7F8FC 120px,#F7F8FC 100%)' }}>

            {/* ════════════ NAVBAR ════════════ */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/92 backdrop-blur-lg border-b border-[#EAEAE6] shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center group-hover:bg-accent-vivid transition-colors duration-300 shadow-sm shadow-accent/20">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="3" fill="white" />
                                <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
                                <circle cx="8" cy="2" r="1.5" fill="#F59E0B" />
                            </svg>
                        </div>
                        <span className="font-display text-lg text-ink tracking-tight">
                            Galaxy<span className="text-accent">Database</span>
                        </span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="text-sm text-slate-500 hover:text-ink transition-colors flex items-center gap-1.5 group"
                        >
                            <svg
                                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                className="group-hover:-translate-x-0.5 transition-transform"
                            >
                                <path d="M19 12H5M12 5l-7 7 7 7" />
                            </svg>
                            Back to Home
                        </Link>
                        <a
                            href={`https://wa.me/916260712882?text=${encodeURIComponent("Hello! I'd like to enquire about your database categories and pricing.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-vivid transition-all duration-300 shadow-sm shadow-accent/20"
                        >
                            <WAIcon size={14} />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </header>

            {/* ════════════ PAGE HERO ════════════ */}
            <section className="pt-32 pb-12 px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Background bloom */}
                <div className="absolute top-0 right-0 w-[50vw] h-[40vh] bg-[radial-gradient(circle,rgba(99,143,246,0.07)_0%,transparent_65%)] pointer-events-none" />

                <div className="max-w-2xl relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#DBEAFE] shadow-sm mb-5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                        </span>
                        <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-widest">All Lead Categories</span>
                    </div>

                    <h1 className="font-display text-5xl md:text-6xl text-[#0A0A0F] leading-[1.06] tracking-tighter mb-5">
                        {totalCount} Premium
                        <br />
                        <span className="italic" style={{
                            background: 'linear-gradient(135deg,#3B82F6 0%,#6366F1 50%,#8B5CF6 100%)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                        }}>
                            Lead Databases
                        </span>
                    </h1>

                    <p className="text-[#6B6B8A] text-lg leading-relaxed max-w-xl">
                        Every database is verified, updated every 90 days, and delivered as a clean Excel file to your WhatsApp — within 2 minutes of payment.
                    </p>
                </div>

                {/* Stats row */}
                <div className="mt-10 flex flex-wrap gap-6">
                    {[
                        { num: String(totalCount), label: 'Database categories' },
                        { num: '30L+', label: 'Total verified records' },
                        { num: '90 days', label: 'Update frequency' },
                        { num: '2 min', label: 'Avg. delivery time' },
                    ].map((s) => (
                        <div
                            key={s.label}
                            className="bg-white border border-[#EAEAE6] rounded-xl px-5 py-3 shadow-sm"
                        >
                            <div className="font-display text-2xl text-[#0A0A0F] leading-none mb-0.5">{s.num}</div>
                            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════════ STICKY FILTER BAR ════════════ */}
            <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-[#EAEAE6] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center gap-2.5 overflow-x-auto scrollbar-hide">
                    {sectors.map((s) => (
                        <FilterPill
                            key={s}
                            label={s}
                            active={activeFilter === s}
                            count={s === 'All' ? totalCount : (sectorCounts[s] || 0)}
                            onClick={() => setActiveFilter(s)}
                        />
                    ))}
                    <span className="ml-auto pl-4 shrink-0 text-[12px] font-mono text-slate-400 whitespace-nowrap">
                        {filteredTotal} result{filteredTotal !== 1 ? 's' : ''}
                    </span>
                </div>
            </div>

            {/* ════════════ MAIN GRID ════════════ */}
            <main className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

                {filteredTotal === 0 ? (
                    <div className="text-center py-28">
                        <div className="w-16 h-16 rounded-2xl bg-[#F0F0EC] flex items-center justify-center mx-auto mb-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9999BB" strokeWidth="1.5">
                                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                            </svg>
                        </div>
                        <p className="text-[#6B6B8A] text-base font-medium">No categories found for "{activeFilter}"</p>
                        <button
                            onClick={() => setActiveFilter('All')}
                            className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                        >
                            Clear filter
                        </button>
                    </div>
                ) : (
                    <>
                        {/* ── Lead categories group ── */}
                        {showLeads && (
                            <>
                                <div className="flex items-center gap-3 mb-7">
                                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="font-body font-bold text-[#0A0A0F] text-base">
                                            Intent-Based Lead Databases
                                        </h2>
                                        <p className="text-[12px] text-slate-400 font-mono">
                                            {filteredLeads.length} categor{filteredLeads.length === 1 ? 'y' : 'ies'} · High-intent verified prospects
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {filteredLeads.map((cat, i) => (
                                        <LeadCard key={cat.id} cat={cat} index={i} />
                                    ))}
                                </div>
                            </>
                        )}

                        {/* ── Divider between groups (only when both visible) ── */}
                        {showLeads && showBusiness && (
                            <SectionDivider
                                label="Business Directory Databases"
                                sublabel="Verified shop & business owner contacts"
                            />
                        )}

                        {/* ── Business directory group ── */}
                        {showBusiness && (
                            <>
                                {!showLeads && (
                                    <div className="flex items-center gap-3 mb-7">
                                        <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5">
                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                <polyline points="9 22 9 12 15 12 15 22" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="font-body font-bold text-[#0A0A0F] text-base">
                                                Business Directory Databases
                                            </h2>
                                            <p className="text-[12px] text-slate-400 font-mono">
                                                {filteredBusiness.length} categor{filteredBusiness.length === 1 ? 'y' : 'ies'} · Shop & trader contacts
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {filteredBusiness.map((cat, i) => (
                                        <BusinessCard key={cat.id} cat={cat} index={i} />
                                    ))}
                                </div>
                            </>
                        )}
                    </>
                )}
            </main>

            {/* ════════════ CUSTOM REQUEST CTA ════════════ */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
                <div
                    className="relative rounded-2xl overflow-hidden border border-[#DBEAFE]"
                    style={{ background: 'linear-gradient(135deg,#EEF2FF 0%,#F0F4FF 50%,#EDF9FF 100%)' }}
                >
                    {/* Dot grid */}
                    <div
                        className="absolute inset-0 opacity-50 pointer-events-none"
                        style={{
                            backgroundImage: 'radial-gradient(circle, #C7D2FE 1px, transparent 1px)',
                            backgroundSize: '24px 24px',
                        }}
                    />
                    <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-10 md:p-14">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#DBEAFE] shadow-sm mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                <span className="text-[11px] font-mono font-bold text-slate-600 uppercase tracking-widest">Custom Requests</span>
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl text-[#0A0A0F] mb-3">
                                Don't see what you need?
                            </h2>
                            <p className="text-[#6B6B8A] text-base leading-relaxed max-w-lg">
                                We source custom databases on request — any profession, industry, geography, or consumer segment. Tell us exactly what you need and we'll have it ready.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 shrink-0">
                            <a
                                href={`https://wa.me/916260712882?text=${encodeURIComponent("Hello! I need a custom database that isn't in your standard list. Can you help me source it?")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1fba59] transition-all duration-300 shadow-lg shadow-[#25D366]/20 whitespace-nowrap"
                            >
                                <WAIcon size={16} />
                                Request Custom Data
                            </a>
                            <a
                                href="mailto:Galaxydatabasee@gmail.com"
                                className="flex items-center justify-center gap-2 text-[13px] text-slate-500 hover:text-[#0A0A0F] font-medium transition-colors duration-200"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                Galaxydatabasee@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════ FOOTER ════════════ */}
            <footer className="border-t border-[#EAEAE6] py-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[12px] font-mono text-slate-400">
                        © {new Date().getFullYear()} Galaxy Database. All rights reserved.
                    </span>
                    <Link href="/" className="text-[12px] font-mono text-slate-400 hover:text-[#0A0A0F] transition-colors">
                        ← Back to homepage
                    </Link>
                </div>
            </footer>
        </div>
    )
}