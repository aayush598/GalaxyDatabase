import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SOFTWARE_INFO } from '@/lib/software'
import { WA_BASE } from '@/lib/config'
import { WhatsAppIcon as WAIcon, ArrowRight, ArrowLeft, MailIcon, DownloadIcon, PlatformIcon } from '@/components/icons'
import JsonLd from '@/components/JsonLd'
import Footer from '@/components/Footer'
import FloatingWA from '@/components/FloatingWA'

export const metadata: Metadata = {
    title: 'GalaxyConnect App | Buy Verified Leads On Demand',
    description:
        'GalaxyConnect App is our self-service B2B lead marketplace. Browse verified lead categories, purchase with credits, and export instantly. No calls, no waiting.',
    keywords: 'lead marketplace, buy leads online, purchase leads, B2B lead app, galaxyconnect app',
    alternates: { canonical: 'https://www.galaxyconnect.in/software' },
    openGraph: {
        title: 'GalaxyConnect App | Buy Verified Leads On Demand',
        description:
            'Buy verified B2B & B2C leads instantly with the GalaxyConnect App. Credit wallet, instant delivery, secure accounts.',
        type: 'website',
    },
}

/* ── Feature icon (inline SVG, keyed by feature id) ─────────── */
function FeatureIcon({ id }: { id: string }) {
    const common = {
        width: 22,
        height: 22,
        viewBox: '0 0 24 24',
        fill: 'none' as const,
        stroke: 'currentColor',
        strokeWidth: 1.8,
        strokeLinecap: 'round' as const,
        strokeLinejoin: 'round' as const,
    }
    switch (id) {
        case 'marketplace':
            return (
                <svg {...common}>
                    <path d="M3 7h18M6 7l3 13h6l3-13M8 3h8" />
                    <circle cx="12" cy="11" r="1.6" />
                    <path d="M10 14h4M10 17h4" />
                </svg>
            )
        case 'wallet':
            return (
                <svg {...common}>
                    <rect x="3" y="6" width="18" height="13" rx="2.5" />
                    <path d="M3 10h18M16.5 13.5h1M7 10v-3" />
                </svg>
            )
        case 'instant':
            return (
                <svg {...common}>
                    <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
            )
        case 'history':
            return (
                <svg {...common}>
                    <path d="M4 12a8 8 0 1 0 2.3-5.6L4 8.6" />
                    <path d="M4 4v4h4" />
                    <path d="M12 8v4l3 2" />
                </svg>
            )
        case 'secure':
            return (
                <svg {...common}>
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                    <circle cx="12" cy="16" r="1.3" />
                </svg>
            )
        default:
            return (
                <svg {...common}>
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M3 12h18" />
                </svg>
            )
    }
}

/* ── Feature card ────────────────────────────────────────────── */
function FeatureCard({ feature }: { feature: (typeof SOFTWARE_INFO.features)[0] }) {
    return (
        <div className="group flex flex-col bg-white rounded-2xl border border-[#EAEAE6] overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)] transition-all duration-300 ease-out p-6">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-ink bg-[#F5F4F0] border border-ink/5 group-hover:border-ink/15 group-hover:shadow-[0_4px_16px_rgba(59,130,246,0.12)] transition-all duration-300 mb-5">
                <FeatureIcon id={feature.id} />
            </div>
            <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full border ${feature.tagColor}`}>
                    {feature.tag}
                </span>
                <span className={`w-1.5 h-1.5 rounded-full ${feature.dot} opacity-60 group-hover:opacity-100 transition-opacity`} />
            </div>
            <h3 className="britti-special font-semibold text-ink text-[15px] leading-snug mb-2">{feature.title}</h3>
            <p className="text-slate-light text-[13px] leading-relaxed">{feature.description}</p>
        </div>
    )
}

/* ── How-it-works step ───────────────────────────────────────── */
function StepCard({ step }: { step: (typeof SOFTWARE_INFO.steps)[0] }) {
    return (
        <div className="relative">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-ink text-white flex items-center justify-center britti-special text-lg shadow-md shadow-ink/15">
                    {step.id}
                </div>
                {step.id < SOFTWARE_INFO.steps.length && (
                    <div className="hidden md:block h-px flex-1 bg-blue-200" />
                )}
            </div>
            <h3 className="font-semibold text-ink text-[15px] mb-1.5">{step.title}</h3>
            <p className="text-slate-light text-[13px] leading-relaxed max-w-[260px]">{step.description}</p>
        </div>
    )
}

/* ══════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════════ */
export default function SoftwarePage() {
    const softwareJson = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: SOFTWARE_INFO.name,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Android, iOS, macOS, Windows, Linux',
        description: SOFTWARE_INFO.tagline,
        url: 'https://www.galaxyconnect.in/software',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
        },
    }

    return (
        <div className="min-h-screen overflow-x-hidden bg-[#F7F8FC]">
            <JsonLd data={softwareJson} />
            {/* ═══ Header ═══ */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-lg border-b border-[#EAEAE6] shadow-[0_1px_12px_rgba(0,0,0,0.06)]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src="/logo.png"
                            alt="Galaxy Connect Logo"
                            width={36}
                            height={36}
                            className="w-9 h-9 rounded-lg object-cover shadow-sm"
                        />
                        <span className="text-lg text-ink tracking-tight">
                            Galaxy<span className="text-accent">Connect</span>
                        </span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="text-sm text-slate-500 hover:text-ink transition-colors flex items-center gap-1.5 group"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                            Back to Home
                        </Link>
                        <a
                            href={`${WA_BASE}?text=${encodeURIComponent("Hello! I'd like to get the GalaxyConnect App to purchase verified leads directly.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-ink text-white text-sm font-medium hover:bg-blue-600 transition-all duration-300"
                        >
                            <WAIcon size={14} />
                            Get the App
                        </a>
                    </div>
                </div>
            </header>

            {/* ═══ Hero ═══ */}
            <section className="pt-36 pb-14 px-6 lg:px-8 max-w-7xl mx-auto relative">
                <div className="max-w-2xl relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-emerald-200 shadow-sm mb-5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-widest">
                            GalaxyConnect App · Live
                        </span>
                    </div>
                    <h1 className="britti-special text-5xl md:text-6xl text-ink leading-[1.06] tracking-tight mb-5">
                        Buy verified leads
                        <br />
                        <span className="italic text-accent">on demand</span>, anytime.
                    </h1>
                    <p className="text-slate-light text-lg leading-relaxed max-w-xl mb-8">
                        {SOFTWARE_INFO.description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
                        <a
                            href={`${WA_BASE}?text=${encodeURIComponent("Hello! I'd like to get the GalaxyConnect App to purchase verified leads directly.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1fba59] transition-all duration-300 shadow-lg shadow-[#25D366]/20 whitespace-nowrap"
                        >
                            <WAIcon size={16} />
                            Get the App on WhatsApp
                            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                        <Link
                            href="/categories"
                            className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#DBEAFE] bg-white text-[#3B4D8A] text-sm font-medium hover:border-blue-300 hover:shadow-[0_4px_16px_rgba(59,130,246,0.12)] transition-all duration-300 whitespace-nowrap"
                        >
                            Browse Lead Categories
                        </Link>
                    </div>
                </div>

                {/* Stats strip */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {SOFTWARE_INFO.stats.map((s) => (
                        <div
                            key={s.label}
                            className="bg-white border border-[#EAEAE6] rounded-2xl px-5 py-4 shadow-sm relative overflow-hidden group hover:shadow-[0_8px_32px_rgba(59,130,246,0.12)] hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="britti-special text-2xl text-ink leading-none mb-1.5">{s.value}</div>
                            <div className="text-[10.5px] text-slate-400 uppercase tracking-widest">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══ Overview ═══ */}
            <section className="py-20 bg-cream-warm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="tag-chip bg-ink/5 text-slate-light border border-ink/10 inline-flex mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                                What is it
                            </div>
                            <h2 className="britti-special text-4xl md:text-5xl text-ink leading-[1.1] tracking-tight mb-6">
                                The lead store, <span className="italic">in your pocket</span>
                            </h2>
                            <p className="text-slate-light text-base leading-relaxed mb-5">
                                {SOFTWARE_INFO.longDescription}
                            </p>
                            <div className="flex items-center gap-2 text-[12px] text-slate-400 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                {SOFTWARE_INFO.platformLabel} · v{SOFTWARE_INFO.version}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-[#EAEAE6] p-7 md:p-8 shadow-sm">
                            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5">
                                Everything included
                            </div>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {SOFTWARE_INFO.included.map((item) => (
                                    <span
                                        key={item}
                                        className="text-[12px] text-slate-600 bg-[#F5F4F0] border border-[#EAEAE6] px-3 py-1.5 rounded-full font-medium"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div className="border-t border-[#F0F0EC] pt-6">
                                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                                    Built on a modern stack
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {SOFTWARE_INFO.techStack.map((t) => (
                                        <span
                                            key={t}
                                            className="text-[11px] font-mono text-[#3B3B5A] bg-[#F8F9FF] border border-[#E2E8F7] px-2.5 py-1.5 rounded-lg"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Features ═══ */}
            <section className="py-24 bg-cream-warm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-2xl mb-14">
                        <div className="tag-chip bg-white text-slate-light border border-ink/10 inline-flex mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                            App Features
                        </div>
                        <h2 className="britti-special text-4xl md:text-5xl text-ink leading-[1.1] tracking-tight">
                            Everything you need to <span className="italic text-accent">buy &amp; sell faster</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {SOFTWARE_INFO.features.map((f) => (
                            <FeatureCard key={f.id} feature={f} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ How it works ═══ */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-2xl mb-14">
                        <div className="tag-chip bg-ink/5 text-slate-light border border-ink/10 inline-flex mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                            How it works
                        </div>
                        <h2 className="britti-special text-4xl md:text-5xl text-ink leading-[1.1] tracking-tight">
                            From sign-up to <span className="italic text-accent">sold leads in minutes</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {SOFTWARE_INFO.steps.map((s) => (
                            <StepCard key={s.id} step={s} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ Downloads ═══ */}
            <section className="py-24 bg-cream-warm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="tag-chip bg-white text-ink border border-ink/10 inline-flex mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        Available everywhere
                    </div>
                    <h2 className="britti-special text-4xl md:text-5xl text-ink leading-[1.1] tracking-tight mb-4">
                        Download <span className="italic text-accent">GalaxyConnect App</span>
                    </h2>
                    <p className="text-slate-light text-base leading-relaxed max-w-xl mx-auto mb-12">
                        Install the app on your phone, laptop or desktop. Same credits, same verified leads, on any device.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
                        {SOFTWARE_INFO.downloads.map((d) => (
                            <a
                                key={d.id}
                                href={d.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Download GalaxyConnect App for ${d.label}`}
                                className="group flex flex-col items-center gap-2.5 bg-white border border-[#EAEAE6] rounded-2xl px-4 py-8 shadow-sm hover:border-blue-200 hover:shadow-[0_12px_36px_rgba(59,130,246,0.14)] hover:-translate-y-1.5 transition-all duration-300"
                            >
                                <div className={`w-16 h-16 rounded-2xl ${d.tint} border border-ink/5 flex items-center justify-center shadow-sm mb-1`}>
                                    <PlatformIcon
                                        id={d.id}
                                        size={34}
                                        className={`${d.accent} transition-transform duration-300 group-hover:scale-110`}
                                    />
                                </div>
                                <span className="text-[15px] font-bold text-ink leading-none">{d.label}</span>
                                <span className="text-[10.5px] text-slate-400 uppercase tracking-widest">{d.note}</span>
                                <span className="mt-2 flex items-center gap-1.5 text-[12px] font-bold text-blue-600">
                                    <DownloadIcon size={14} />
                                    Download
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CTA banner ═══ */}
            <section className="pb-24 pt-6 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="relative rounded-2xl overflow-hidden border border-[#DBEAFE] bg-[#EEF3FF]">
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-10 md:p-14">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-emerald-200 shadow-sm mb-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-widest">
                                        Request Access
                                    </span>
                                </div>
                                <h2 className="britti-special text-3xl md:text-4xl text-ink mb-3">
                                    Start buying leads directly
                                </h2>
                                <p className="text-slate-light text-base leading-relaxed max-w-lg">
                                    Get the GalaxyConnect App installed on your device and start purchasing verified leads today.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 shrink-0">
                                <a
                                    href={`${WA_BASE}?text=${encodeURIComponent("Hello! I'd like to get the GalaxyConnect App to purchase verified leads directly.")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1fba59] transition-all duration-300 shadow-lg shadow-[#25D366]/20 whitespace-nowrap"
                                >
                                    <WAIcon size={16} />
                                    Get the App on WhatsApp
                                </a>
                                <a
                                    href={`mailto:${SOFTWARE_INFO.email}`}
                                    className="flex items-center justify-center gap-2 text-[13px] text-slate-500 hover:text-ink font-medium transition-colors"
                                >
                                    <MailIcon size={14} /> {SOFTWARE_INFO.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWA />
        </div>
    )
}