import type { Metadata } from 'next'
import Link from 'next/link'
import { POSTS } from '@/lib/posts'
import { SITE_URL, SITE_NAME } from '@/lib/site'
import { getCategoryBySlug } from '@/lib/categories'
import { ArrowRight, ArrowUpRight } from '@/components/icons'
import Navbar from '@/components/Navbar'
import JsonLd from '@/components/JsonLd'
import Footer from '@/components/Footer'
import FloatingWA from '@/components/FloatingWA'

export const metadata: Metadata = {
    title: 'Lead Buying Guides, Best Practices & Category Breakdowns',
    description:
        'Practical guides on buying verified lead databases in India, using them in a CRM, and choosing between lead categories. No jargon, just what converts.',
    keywords: 'lead buying guide, buy leads online, lead database india, how to buy leads, lead generation blog, india lead buying',
    alternates: { canonical: `${SITE_URL}/blog` },
    openGraph: {
        title: 'Lead Buying Guides, Best Practices & Category Breakdowns',
        description: 'Practical guides on buying verified lead databases in India, using them in a CRM, and choosing between lead categories.',
        type: 'website',
        url: `${SITE_URL}/blog`,
        siteName: SITE_NAME,
    },
}

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function BlogIndex() {
    const collectionJson = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Galaxy Connect Blog',
        description: 'Lead buying guides, category breakdowns and best practices for Indian sales teams.',
        url: `${SITE_URL}/blog`,
        blogPost: POSTS.map((p) => ({ '@type': 'BlogPosting', headline: p.title, datePublished: p.date, url: `${SITE_URL}/blog/${p.slug}` })),
    }

    const featured = POSTS[0]
    const featuredCat = getCategoryBySlug(featured.categorySlugs[0])
    const rest = POSTS.slice(1)

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={collectionJson} />
            <Navbar />

            {/* ── Hero ── */}
            <section className="pt-32 pb-16 border-b border-[#F0F0EC]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center gap-2.5 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                            The Galaxy Connect Journal
                        </span>
                    </div>
                    <h1 className="britti-special text-5xl md:text-6xl text-ink tracking-[-0.03em] leading-[1.02] max-w-3xl">
                        Lead buying,<br />
                        <span className="italic text-accent">explained simply.</span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl">
                        Field-tested guides on sourcing, pricing and using verified India lead data. Written for sales teams, not for investors.
                    </p>

                    <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
                        {[
                            { num: String(POSTS.length).padStart(2, '0'), label: 'Expert guides' },
                            { num: '30+', label: 'Categories decoded' },
                            { num: 'Daily', label: 'Refreshed data' },
                        ].map((s, i) => (
                            <div key={s.label} className="flex items-center gap-10">
                                {i > 0 && <span className="w-px h-9 bg-[#EAE8E2]" />}
                                <div>
                                    <div className="britti-special text-2xl text-ink leading-none">{s.num}</div>
                                    <div className="text-[11px] text-slate-400 uppercase tracking-[0.14em] mt-2">{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Featured ── */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <Link
                        href={`/blog/${featured.slug}`}
                        className="group relative block rounded-3xl bg-[#F7F8FC] border border-[#F0F0EC] text-ink overflow-hidden p-8 md:p-12 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(0,0,0,0.10)] hover:border-ink/15 transition-all duration-300"
                    >
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                backgroundImage: 'radial-gradient(circle at 85% 20%, rgba(59,130,246,0.10) 0%, transparent 55%), radial-gradient(circle at 15% 100%, rgba(99,102,241,0.06) 0%, transparent 50%)',
                            }}
                        />
                        <div className="relative z-10 flex items-center gap-3 mb-8">
                            <span className="tag-chip bg-white text-ink border-[#F0F0EC] px-3 py-1.5 rounded-full border text-[11px] font-semibold uppercase tracking-wider">
                                {featured.tag}
                            </span>
                            <span className="text-sm text-slate-400">{featured.readTime}</span>
                        </div>
                        <div className="relative z-10 max-w-2xl">
                            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 mb-4">
                                Featured guide · {formatDate(featured.date)}
                            </p>
                            <h2 className="britti-special text-3xl md:text-5xl text-ink tracking-[-0.02em] leading-[1.08] mb-5">
                                {featured.title}
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                                {featured.description}
                            </p>
                        </div>
                        <div className="relative z-10 mt-9 flex items-center gap-4">
                            <span className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-vivid transition-colors">
                                Read the guide
                                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                            </span>
                            {featuredCat && (
                                <span className="hidden md:flex items-center gap-1.5 text-sm text-slate-500 group-hover:text-ink transition-colors">
                                    Category: <span className="text-slate-700">{featuredCat.title}</span>
                                </span>
                            )}
                        </div>
                    </Link>
                </div>
            </section>

            {/* ── All guides ── */}
            <section className="py-16 pb-20 border-t border-[#F0F0EC]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="britti-special text-2xl md:text-3xl text-ink tracking-tight">
                            All guides
                        </h2>
                        <span className="text-xs text-slate-400 uppercase tracking-[0.14em]">
                            {rest.length} articles
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rest.map((post, i) => {
                            const category = getCategoryBySlug(post.categorySlugs[0])
                            return (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group flex flex-col bg-white rounded-3xl border border-[#F0F0EC] p-7 hover:border-ink/15 hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] hover:-translate-y-1.5 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-7">
                                        <span className="text-sm text-slate-300 tabular-nums">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span className="w-8 h-8 rounded-full bg-[#F7F8FC] border border-[#F0F0EC] flex items-center justify-center text-slate-400 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors">
                                            <ArrowUpRight size={14} />
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <span className="tag-chip bg-[#F7F8FC] text-ink border-[#F0F0EC] px-3 py-1.5 rounded-full border text-[11px] font-semibold uppercase tracking-[0.12em]">
                                            {post.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-lg text-ink font-semibold leading-snug mb-3 tracking-tight group-hover:text-accent transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
                                        {post.description}
                                    </p>
                                    <div className="mt-auto flex items-center gap-3 text-xs text-slate-400">
                                        <span>{post.readTime}</span>
                                        <span className="w-0.5 h-0.5 rounded-full bg-slate-300" />
                                        <span>{formatDate(post.date)}</span>
                                        {category && (
                                            <>
                                                <span className="w-0.5 h-0.5 rounded-full bg-slate-300" />
                                                <span className="text-accent truncate">{category.title}</span>
                                            </>
                                        )}
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
                    <div className="relative rounded-3xl bg-cream-warm/40 border border-[#F0F0EC] px-8 py-14 md:p-16 text-center overflow-hidden">
                        <div
                            className="absolute inset-0 opacity-100 pointer-events-none"
                            style={{
                                backgroundImage: 'radial-gradient(circle at 90% 10%, rgba(59,130,246,0.06) 0%, transparent 45%)',
                            }}
                        />
                        <div className="relative z-10">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-4">
                                Ready beyond the reading
                            </p>
                            <h2 className="britti-special text-3xl md:text-5xl text-ink tracking-tight mb-5">
                                Now go buy the data.
                            </h2>
                            <p className="text-slate-500 max-w-md mx-auto leading-relaxed mb-8">
                                Every guide points to a real, verified database. Browse the categories and get started today.
                            </p>
                            <Link
                                href="/categories"
                                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-ink text-white text-sm font-semibold hover:bg-accent transition-colors shadow-lg shadow-ink/10"
                            >
                                Explore all lead categories
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingWA />
        </main>
    )
}