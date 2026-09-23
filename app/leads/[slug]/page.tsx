import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
    ALL_LEAD_CATEGORIES, getCategoryBySlug, relatedCategories, buildWALink, slugify, palette,
} from '@/lib/categories'
import { SITE_URL, SITE_NAME } from '@/lib/site'
import { ArrowRight, WhatsAppIcon as WAIcon } from '@/components/icons'
import CategoryArt from '@/components/CategoryArt'
import Navbar from '@/components/Navbar'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import Footer from '@/components/Footer'
import FloatingWA from '@/components/FloatingWA'

export const dynamicParams = false

export function generateStaticParams() {
    return ALL_LEAD_CATEGORIES.map((c) => ({ slug: slugify(c.title) }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const category = getCategoryBySlug(slug)
    if (!category) return {}

    return {
        title: `${category.title} India | Buy Verified ${category.records} Contacts`,
        description: category.description,
        keywords: `buy ${category.title.toLowerCase()} database, ${category.title.toLowerCase()} leads india, ${category.sector.toLowerCase()} database, verified contacts, ${category.subItems.slice(0, 3).join(', ').toLowerCase()}`,
        alternates: { canonical: `${SITE_URL}/leads/${slug}` },
        openGraph: {
            title: `${category.title} India | Galaxy Connect`,
            description: `Verified ${category.records} ${category.sector} contacts, refreshed daily and delivered instantly as Excel, CSV or JSON.`,
            type: 'website',
            url: `${SITE_URL}/leads/${slug}`,
            siteName: SITE_NAME,
        },
    }
}

function categoryFAQs(category: { title: string; records: string; sector: string }) {
    return [
        {
            q: `Are the ${category.title.toLowerCase()} leads verified?`,
            a: 'Yes. The database is cleaned and verified before delivery, so phone numbers and contact fields are current, and it is refreshed daily for outreach.',
        },
        {
            q: `How many ${category.title.toLowerCase()} contacts do I get?`,
            a: `${category.title} data includes ${category.records} verified contacts, segmented across Indian metros and tier-2 markets. Request the exact count and regions on WhatsApp.`,
        },
        {
            q: 'How fast is delivery?',
            a: 'Instantly. Your order is assigned within seconds of payment and exported as Excel, CSV, or JSON, ready for calls, WhatsApp, and email campaigns.',
        },
        {
            q: 'Can I see a sample before paying?',
            a: 'Yes. Galaxy Connect shares a free sample on WhatsApp so you can review the fields and quality before you buy.',
        },
    ]
}

function CheckIcon() {
    return (
        <span className="mt-[3px] w-5 h-5 rounded-full bg-[#F0F7FF] border border-[#D6E8FF] flex items-center justify-center text-accent shrink-0">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
            </svg>
        </span>
    )
}

export default async function LeadCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const category = getCategoryBySlug(slug)
    if (!category) notFound()

    const acc = palette[category.accentColor] ?? palette.blue
    const related = relatedCategories(category, 3)
    const faqs = categoryFAQs(category)
    const waLink = buildWALink(category.title, category.subItems)

    const breadcrumbJson = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Lead Categories', item: `${SITE_URL}/categories` },
            { '@type': 'ListItem', position: 3, name: category.title, item: `${SITE_URL}/leads/${slug}` },
        ],
    }
    const faqJson = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    }

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={breadcrumbJson} />
            <JsonLd data={faqJson} />
            <Navbar />

            {/* ── Hero ── */}
            <header className="pt-32 pb-16">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <Breadcrumbs
                        items={[
                            { label: 'Lead Categories', href: '/categories' },
                            { label: category.title },
                        ]}
                    />

                    <div className="mt-10 flex flex-wrap items-center gap-3">
                        <span className="tag-chip bg-[#F7F8FC] text-ink border-[#F0F0EC] px-3.5 py-1.5 rounded-full border text-[11px] font-semibold uppercase tracking-[0.12em] inline-flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${acc.dot}`} />
                            {category.sector}
                        </span>
                        <span className="text-sm text-slate-400">Updated daily</span>
                        <span className="w-0.5 h-0.5 rounded-full bg-slate-300" />
                        <span className="text-sm text-slate-400">Instant delivery</span>
                    </div>

                    <h1 className="britti-special mt-6 text-5xl md:text-6xl text-ink tracking-[-0.02em] leading-[1.04]">
                        {category.title}
                        <span className="italic text-accent"> India</span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl">
                        {category.description}
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-3.5">
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-vivid transition-colors shadow-lg shadow-accent/20"
                        >
                            <WAIcon size={16} />
                            Get a free sample
                        </a>
                        <a
                            href="/software"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-ink/12 text-ink text-sm font-semibold hover:border-ink/30 transition-colors"
                        >
                            Buy in the GalaxyConnect App
                        </a>
                    </div>
                </div>
            </header>

            {/* ── Stats strip ── */}
            <section className="pb-12">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 border-y border-[#F0F0EC] divide-y md:divide-y-0 divide-[#F0F0EC] md:divide-x">
                        {[
                            { value: category.records, label: 'Verified records', valueClass: acc.record },
                            { value: 'Daily', label: 'Refresh cycle' },
                            { value: '~2 min', label: 'Delivery time' },
                            { value: '3', label: 'Export formats' },
                        ].map((s) => (
                            <div key={s.label} className="py-7 px-5 first:pl-0">
                                <div className={`britti-special text-2xl md:text-3xl text-ink leading-none mb-2 ${s.valueClass ?? ''}`}>
                                    {s.value}
                                </div>
                                <div className="text-[11px] text-slate-400 uppercase tracking-[0.14em]">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── What's included ── */}
            <section className="py-16 border-t border-[#F0F0EC]">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="flex items-baseline gap-4 mb-10">
                        <span className="text-sm text-accent tabular-nums">01</span>
                        <div>
                            <h2 className="britti-special text-3xl md:text-4xl text-ink tracking-tight">
                                What&apos;s inside
                            </h2>
                            <p className="text-[15px] text-slate-500 mt-3 max-w-lg">
                                Every lead is tagged by intent, so you reach prospects who are actively looking.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {category.subItems.map((item, i) => (
                            <div
                                key={item}
                                className="group flex items-center gap-4 bg-white rounded-2xl border border-[#F0F0EC] px-5 py-4 hover:border-ink/15 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <span className={`w-2.5 h-2.5 rounded-full ${acc.itemDot} shrink-0 group-hover:scale-125 transition-transform duration-300`} />
                                <p className="text-[15px] font-medium text-ink leading-snug flex-1">{item}</p>
                                <span className="text-[11px] text-slate-300 tabular-nums">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Who it's for ── */}
            <section className="py-16 border-t border-[#F0F0EC]">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
                    <div>
                        <div className="flex items-baseline gap-4 mb-6">
                            <span className="text-sm text-accent tabular-nums">02</span>
                            <h2 className="britti-special text-3xl md:text-4xl text-ink tracking-tight">
                                Who it&apos;s for
                            </h2>
                        </div>
                        <p className="text-base text-slate-600 leading-[1.85] mb-5">
                            {category.idealFor}
                        </p>
                        <p className="text-base text-slate-500 leading-[1.85]">
                            The leads arrive segmented and ready, so your team starts calling the same day, with no cleaning and no searching.
                        </p>
                    </div>

                    <div className="bg-[#F7F8FC] rounded-3xl p-8 self-start">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-6">
                            Why this database works
                        </p>
                        <ul className="space-y-5">
                            {[
                                `Refreshed daily so numbers connect and intent stays current`,
                                `Verified contacts you can call, message and email from day one`,
                                `Delivered within seconds of payment, in Excel, CSV or JSON`,
                                `Segmented by intent, so you only pay for the prospects you need`,
                            ].map((point) => (
                                <li key={point} className="flex items-start gap-3.5">
                                    <CheckIcon />
                                    <span className="text-[15px] text-ink leading-[1.65]">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="py-16 border-t border-[#F0F0EC]">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="flex items-baseline gap-4 mb-8">
                        <span className="text-sm text-accent tabular-nums">03</span>
                        <h2 className="britti-special text-3xl md:text-4xl text-ink tracking-tight">
                            Frequently asked questions
                        </h2>
                    </div>
                    <div className="divide-y divide-[#F0F0EC] border-y border-[#F0F0EC]">
                        {faqs.map((f) => (
                            <details key={f.q} className="group py-5">
                                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                    <span className="text-base font-semibold text-ink leading-snug">
                                        {f.q}
                                    </span>
                                    <span className="shrink-0 w-7 h-7 rounded-full border border-[#F0F0EC] flex items-center justify-center text-slate-400 group-open:bg-accent group-open:text-white group-open:border-accent transition-colors">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="group-open:rotate-45 transition-transform duration-200">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 pr-10 text-[15px] text-slate-500 leading-[1.75]">
                                    {f.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Related ── */}
            <section className="py-16 pb-20 border-t border-[#F0F0EC]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-baseline gap-4 mb-10">
                        <span className="text-sm text-accent tabular-nums">04</span>
                        <div>
                            <h2 className="britti-special text-2xl md:text-3xl text-ink tracking-tight">
                                Related lead categories
                            </h2>
                            <p className="text-[15px] text-slate-500 mt-2.5 hidden sm:block">
                                Buyers of this database also explore these.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {related.map((r) => {
                            const rAcc = palette[r.accentColor] ?? palette.blue
                            return (
                                <Link
                                    key={r.id}
                                    href={`/leads/${slugify(r.title)}`}
                                    className="group flex flex-col bg-white rounded-3xl border border-[#F0F0EC] overflow-hidden hover:border-ink/15 hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="relative h-[132px] overflow-hidden flex-shrink-0">
                                        <CategoryArt title={r.title} />
                                        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm border border-white/60">
                                            <span className={`w-1.5 h-1.5 rounded-full ${rAcc.dot}`} />
                                            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">{r.sector}</span>
                                        </div>
                                        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-2.5 py-1.5 shadow-sm border border-white/60">
                                            <span className={`text-sm font-bold leading-none ${rAcc.record}`}>{r.records}</span>
                                            <span className="block text-[8px] text-slate-400 uppercase tracking-wider mt-0.5">Records</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
                                        <div className={`h-0.5 w-7 rounded-full ${rAcc.bar} mb-3 group-hover:w-14 transition-all duration-500`} />
                                        <h3 className="text-[14px] font-bold text-ink leading-snug mb-2 group-hover:text-accent transition-colors">
                                            {r.title}
                                        </h3>
                                        <p className="text-[11px] text-slate-400 leading-relaxed mt-auto pt-4">See what&apos;s inside &rarr;</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="relative rounded-3xl bg-cream-warm/40 border border-[#F0F0EC] p-10 md:p-16 overflow-hidden">
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(59,130,246,0.08) 0%, transparent 55%), radial-gradient(circle at 10% 100%, rgba(99,102,241,0.05) 0%, transparent 50%)',
                            }}
                        />
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div className="max-w-xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-4">
                                    Over 30,000 sales teams reached
                                </p>
                                <h2 className="britti-special text-3xl md:text-5xl text-ink tracking-[-0.02em] leading-[1.1] mb-5">
                                    Ready to buy {category.title.toLowerCase()}?
                                </h2>
                                <p className="text-slate-600 leading-relaxed max-w-md">
                                    Message us on WhatsApp for current pricing and a free sample. Delivery is instant, and updates are daily.
                                </p>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-3.5 shrink-0">
                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-vivid transition-colors shadow-lg shadow-accent/25"
                                >
                                    <WAIcon size={16} />
                                    Chat on WhatsApp
                                </a>
                                <Link href="/categories" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-accent transition-colors">
                                    Browse all categories
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWA />
        </main>
    )
}