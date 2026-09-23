'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { SOFTWARE_INFO } from '@/lib/software'
import { WA_BASE } from '@/lib/config'
import { WhatsAppIcon as WAIcon, ArrowRight, DownloadIcon, PlatformIcon } from '@/components/icons'

const APP_WA_MSG = encodeURIComponent(
    "Hello! I'd like to get the GalaxyConnect App to purchase verified leads directly.",
)

/* ══════════════════════════════════════════════════════════════
   PHONE MOCKUP | self-service lead marketplace UI
   Matches the phone-frame style used across the site's visuals.
   Hover animates a purchase flow: credits tick down + order badge.
══════════════════════════════════════════════════════════════════ */
function PhoneMock() {
    const rows = [
        { name: 'Real Estate Leads', records: '2L+', price: '₹12/lead' },
        { name: 'Finance Leads', records: '4L+', price: '₹10/lead' },
        { name: 'Education Leads', records: '5L+', price: '₹8/lead' },
        { name: 'Car Owner Leads', records: '3L+', price: '₹9/lead' },
    ]
    return (
        <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-64 group/phone hover:-translate-y-2 transition-transform duration-500">
                {/* Phone chrome */}
                <div className="bg-[#EAEAE6] rounded-[36px] p-1.5 shadow-[0_24px_64px_rgba(0,0,0,0.18)] border border-ink/10">
                    {/* Notch */}
                    <div className="flex justify-center pt-1.5 pb-1">
                        <div className="w-16 h-1.5 bg-black/40 rounded-full" />
                    </div>
                    {/* Screen */}
                    <div className="bg-[#F8F9FC] rounded-[28px] overflow-hidden border border-black/5">
                        {/* App header */}
                        <div className="bg-white border-b border-[#EAEAE6] px-4 pt-4 pb-3 flex items-center justify-between">
                            <div>
                                <div className="text-[13px] font-bold text-ink leading-none">GalaxyConnect</div>
                                <div className="text-[8px] text-slate-400 uppercase tracking-widest mt-0.5">Lead Store</div>
                            </div>
                            {/* Credit pill | ticks down on phone hover */}
                            <div className="relative overflow-hidden rounded-full bg-amber-50 border border-amber-200 px-2.5 py-1">
                                <div className="text-[9px] text-amber-700 font-bold tabular-nums leading-none">
                                    Credits ₹2,000
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center bg-amber-100 text-[9px] font-bold text-amber-800 tabular-nums opacity-0 group-hover/phone:opacity-100 transition-opacity duration-300">
                                    Credits ₹1,985
                                </div>
                            </div>
                        </div>

                        {/* Category rows */}
                        <div className="p-3 space-y-2">
                            {rows.map((row, i) => (
                                <div
                                    key={row.name}
                                    className="group/row flex items-center justify-between bg-white rounded-xl border border-[#EAEAE6] px-3 py-2.5 shadow-sm hover:border-blue-200 hover:shadow-[0_4px_16px_rgba(59,130,246,0.12)] transition-all duration-300"
                                    style={{ transitionDelay: `${i * 60}ms` }}
                                >
                                    <div>
                                        <div className="text-[11px] font-semibold text-ink leading-tight">{row.name}</div>
                                        <div className="text-[9px] text-slate-400 mt-0.5">
                                            {row.records} records · {row.price}
                                        </div>
                                    </div>
                                    <div className="w-8 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm group-hover/row:bg-[#1fba59] group-hover/row:shadow-emerald-500/30 transition-all duration-300">
                                        Buy
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom action */}
                        <div className="px-3 pb-3">
                            <div className="rounded-xl bg-ink flex items-center justify-center gap-1.5 py-2.5">
                                <span className="text-[10px] font-bold text-white">Purchase instantly</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating badges | appear on phone hover */}
                <div className="absolute -top-3 -right-4 bg-white rounded-xl shadow-[0_8px_28px_rgba(0,0,0,0.14)] border border-[#EAEAE6] px-3 py-2 opacity-0 group-hover/phone:opacity-100 group-hover/phone:-translate-y-1 transition-all duration-500 delay-200 z-20">
                    <div className="text-[8px] text-slate-400 uppercase tracking-widest mb-0.5">Purchase</div>
                    <div className="text-[11px] font-bold text-emerald-600">Order completed ✓</div>
                </div>
                <div className="absolute -bottom-3 -left-5 bg-white rounded-xl shadow-[0_8px_28px_rgba(0,0,0,0.14)] border border-[#EAEAE6] px-3 py-2 opacity-0 group-hover/phone:opacity-100 group-hover/phone:translate-y-0.5 transition-all duration-500 delay-400 z-20">
                    <div className="text-[8px] text-slate-400 uppercase tracking-widest mb-0.5">Wallet</div>
                    <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-[11px] font-bold text-ink">15 credits spent</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

/* ══════════════════════════════════════════════════════════════
   SOFTWARE SECTION (landing)
══════════════════════════════════════════════════════════════════ */
export default function SoftwareSection() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
            { threshold: 0.06 },
        )
        sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <section
            id="software"
            ref={sectionRef}
            className="relative py-24 overflow-hidden bg-cream-warm"
        >
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 items-center gap-14">

                    {/* ── Left: content ── */}
                    <div className="max-w-xl">
                        <div className="animate-on-scroll tag-chip bg-white text-emerald-700 border border-emerald-200 shadow-sm inline-flex mb-5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            New · {SOFTWARE_INFO.appName}
                        </div>

                        <h2 className="animate-on-scroll delay-100 britti-special text-4xl md:text-5xl text-ink leading-[1.08] tracking-tight mb-6">
                            Purchase leads
                            <br />
                            <span className="italic">in a few taps</span> with our
                            <br />
                            <span className="italic text-accent">own marketplace app</span>
                        </h2>

                        <p className="animate-on-scroll delay-200 text-slate-light text-base md:text-lg leading-relaxed mb-7">
                            {SOFTWARE_INFO.description}
                        </p>

                        {/* Highlights */}
                        <ul className="animate-on-scroll delay-300 space-y-3 mb-9">
                            {SOFTWARE_INFO.highlights.map((h) => (
                                <li key={h.id} className="flex items-start gap-3">
                                    <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                    </span>
                                    <span className="text-[13.5px] text-brand-slate leading-relaxed">
                                        <span className="font-semibold text-ink">{h.title}.</span> {h.description}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* CTAs */}
                        <div className="animate-on-scroll delay-400 flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
                            <Link
                                href="/software"
                                className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-ink text-white text-sm font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-ink/15 whitespace-nowrap"
                            >
                                Explore the Software
                                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <a
                                href={`${WA_BASE}?text=${APP_WA_MSG}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-[#DBEAFE] bg-white text-[#3B4D8A] text-sm font-medium hover:border-blue-300 hover:shadow-[0_4px_16px_rgba(59,130,246,0.12)] transition-all duration-300 whitespace-nowrap"
                            >
                                <WAIcon size={16} />
                                Get the App
                            </a>
                        </div>
                    </div>

                    {/* ── Right: phone mock ── */}
                    <div className="animate-on-scroll delay-200">
                        <PhoneMock />
                    </div>
                </div>

                {/* ── Download rail ── */}
                <div className="mt-20">
                    <div className="animate-on-scroll text-center mb-9">
                        <div className="tag-chip bg-white text-ink border border-ink/10 inline-flex mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                            Download the app
                        </div>
                        <h3 className="britti-special text-2xl md:text-3xl text-ink tracking-tight">
                            Get it on <span className="italic text-accent">your platform</span>
                        </h3>
                    </div>
                    <div className="animate-on-scroll delay-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 max-w-4xl mx-auto">
                        {SOFTWARE_INFO.downloads.map((d) => (
                            <a
                                key={d.id}
                                href={d.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Download GalaxyConnect App for ${d.label}`}
                                className="group flex flex-col items-center gap-1 bg-white border border-[#EAEAE6] rounded-2xl px-3 py-6 shadow-sm hover:border-blue-200 hover:shadow-[0_10px_32px_rgba(59,130,246,0.12)] hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className={`w-12 h-12 rounded-xl ${d.tint} border border-ink/5 flex items-center justify-center shadow-sm mb-1`}>
                                    <PlatformIcon
                                        id={d.id}
                                        size={27}
                                        className={`${d.accent} transition-transform duration-300 group-hover:scale-110`}
                                    />
                                </div>
                                <span className="text-[13.5px] font-semibold text-ink leading-none">{d.label}</span>
                                <span className="text-[10px] text-slate-400 uppercase tracking-widest">{d.note}</span>
                                <span className="mt-1.5 flex items-center gap-1 text-[10.5px] font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <DownloadIcon size={12} />
                                    Download
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}