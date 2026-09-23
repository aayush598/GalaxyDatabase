import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, relatedPosts, POSTS } from '@/lib/posts'
import { getCategoryBySlug, buildWALink, slugify } from '@/lib/categories'
import { SITE_URL, SITE_NAME } from '@/lib/site'
import { ArrowLeft, ArrowUpRight, WhatsAppIcon as WAIcon } from '@/components/icons'
import Navbar from '@/components/Navbar'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import Footer from '@/components/Footer'
import FloatingWA from '@/components/FloatingWA'

export const dynamicParams = false

export function generateStaticParams() {
    return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const post = getPostBySlug(slug)
    if (!post) return {}
    return {
        title: post.title,
        description: post.description,
        keywords: post.keywords,
        alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
        authors: [{ name: SITE_NAME }],
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: `${SITE_URL}/blog/${post.slug}`,
            siteName: SITE_NAME,
            publishedTime: post.date,
            modifiedTime: post.updated,
            tags: [post.tag],
        },
    }
}

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getPostBySlug(slug)
    if (!post) notFound()

    const related = relatedPosts(post, 3)
    const categoryLinks = post.categorySlugs
        .map((s) => getCategoryBySlug(s))
        .filter((c): c is NonNullable<typeof c> => Boolean(c))

    const articleJson = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.updated,
        author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        keywords: post.keywords,
    }
    const faqJson = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    }
    const breadcrumbJson = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
            { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
        ],
    }

    const sectionCount = post.sections.length

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={articleJson} />
            <JsonLd data={faqJson} />
            <JsonLd data={breadcrumbJson} />
            <Navbar />

            {/* ── Article header ── */}
            <header className="pt-32 pb-12 border-b border-[#F0F0EC]">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />

                    <div className="mt-10 flex flex-wrap items-center gap-3">
                        <span className="tag-chip bg-[#F7F8FC] text-ink border-[#F0F0EC] px-3.5 py-1.5 rounded-full border text-[11px] font-semibold uppercase tracking-[0.12em]">
                            {post.tag}
                        </span>
                        <span className="text-sm text-slate-400">{formatDate(post.date)}</span>
                        <span className="w-0.5 h-0.5 rounded-full bg-slate-300" />
                        <span className="text-sm text-slate-400">{post.readTime}</span>
                    </div>

                    <h1 className="britti-special mt-7 text-4xl md:text-5xl text-ink tracking-[-0.02em] leading-[1.08]">
                        {post.title}
                    </h1>
                    <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl">
                        {post.description}
                    </p>
                </div>
            </header>

            {/* ── Article body ── */}
            <article className="py-16">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    {/* Intro deck */}
                    <div className="mb-12">
                        {post.intro.map((p, i) => (
                            <p key={i} className="text-lg text-slate-600 leading-[1.8] mb-5">
                                {p}
                            </p>
                        ))}
                    </div>

                    {/* Sections */}
                    {post.sections.map((section, si) => (
                        <section key={si} className="mt-14">
                            <div className="flex items-baseline gap-4 mb-6">
                                <span className="text-sm text-accent tabular-nums translate-y-[-0.5em]">
                                    {String(si + 1).padStart(2, '0')}
                                </span>
                                <h2 className="britti-special text-2xl md:text-3xl text-ink tracking-tight">
                                    {section.heading}
                                </h2>
                            </div>
                            {section.body.map((p, pi) => (
                                <p key={pi} className="text-base text-slate-600 leading-[1.85] mb-6">
                                    {p}
                                </p>
                            ))}
                            {section.list && (
                                <ul className="mt-5 mb-6 space-y-3.5">
                                    {section.list.map((item, li) => (
                                        <li key={li} className="flex items-start gap-3.5">
                                            <span className="mt-[8px] w-1.5 h-1.5 rounded-sm bg-accent shrink-0" />
                                            <span className="text-base text-slate-600 leading-[1.75]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Mid-article highlight on the second section */}
                            {si === 1 && (
                                <div className="my-12 rounded-2xl bg-[#F7F8FC] border border-[#F0F0EC] text-ink p-8 md:p-10 overflow-hidden relative">
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            backgroundImage: 'radial-gradient(circle at 90% 0%, rgba(59,130,246,0.08) 0%, transparent 55%)',
                                        }}
                                    />
                                    <div className="relative z-10">
                                        <p className="britti-special text-xl md:text-2xl text-ink leading-snug mb-6 max-w-md">
                                            The data behind the guide is refreshed every day. Yours can be too.
                                        </p>
                                        <a
                                            href={buildWALink(post.tag, ['Request current pricing and a free sample'])}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-vivid transition-colors shadow-lg shadow-accent/20"
                                        >
                                            <WAIcon size={15} />
                                            Get a free sample
                                        </a>
                                    </div>
                                </div>
                            )}
                        </section>
                    ))}

                    {/* FAQ */}
                    {post.faq.length > 0 && (
                        <section className="mt-16">
                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="text-sm text-accent tabular-nums translate-y-[-0.5em]">
                                    {String(sectionCount + 1).padStart(2, '0')}
                                </span>
                                <h2 className="britti-special text-2xl md:text-3xl text-ink tracking-tight">
                                    Frequently asked questions
                                </h2>
                            </div>
                            <div className="divide-y divide-[#F0F0EC] border-y border-[#F0F0EC]">
                                {post.faq.map((f) => (
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
                        </section>
                    )}

                    {/* Category chips */}
                    {categoryLinks.length > 0 && (
                        <div className="mt-12 flex flex-wrap items-center gap-2.5">
                            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-[0.12em] mr-1">
                                Related data:
                            </span>
                            {categoryLinks.map((c) => (
                                <Link
                                    key={c.id}
                                    href={`/leads/${slugify(c.title)}`}
                                    className="tag-chip bg-[#F7F8FC] border border-[#F0F0EC] text-ink px-4 py-2 rounded-full text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
                                >
                                    {c.title}
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Author line */}
                    <div className="mt-12 pt-8 border-t border-[#F0F0EC] flex items-center gap-4">
                        <div className="w-11 h-11 rounded-full bg-ink flex items-center justify-center text-white britti-special text-sm">
                            GC
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-ink">Galaxy Connect Team</p>
                            <p className="text-sm text-slate-400">Verified India lead databases, refreshed daily.</p>
                        </div>
                    </div>
                </div>
            </article>

            {/* ── Related ── */}
            {related.length > 0 && (
                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="britti-special text-2xl md:text-3xl text-ink tracking-tight">
                                Keep reading
                            </h2>
                            <Link href="/blog" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent transition-colors">
                                View all guides
                                <ArrowUpRight size={14} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {related.map((p) => (
                                <Link
                                    key={p.slug}
                                    href={`/blog/${p.slug}`}
                                    className="group flex flex-col bg-white rounded-3xl border border-[#F0F0EC] p-7 hover:border-ink/15 hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span className="tag-chip bg-[#F7F8FC] text-ink border-[#F0F0EC] px-3 py-1.5 rounded-full border text-[11px] font-semibold uppercase tracking-[0.12em] mb-5 self-start">
                                        {p.tag}
                                    </span>
                                    <h3 className="text-base font-semibold text-ink leading-snug mb-3 group-hover:text-accent transition-colors">
                                        {p.title}
                                    </h3>
                                    <div className="mt-auto flex items-center gap-3 text-xs text-slate-400 pt-6">
                                        <span>{p.readTime}</span>
                                        <span className="w-0.5 h-0.5 rounded-full bg-slate-300" />
                                        <span>{formatDate(p.date)}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Link href="/blog" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent transition-colors sm:hidden">
                            <ArrowLeft size={14} />
                            View all guides
                        </Link>
                    </div>
                </section>
            )}

            <Footer />
            <FloatingWA />
        </main>
    )
}