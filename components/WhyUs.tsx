'use client'
import { useEffect, useRef } from 'react'

const features = [
  {
    icon: '🔄',
    title: '3-Month Updated Data',
    description: 'All databases are refreshed every 90 days to ensure maximum accuracy and deliverability for your campaigns.',
  },
  {
    icon: '✅',
    title: 'Verified & Accurate',
    description: 'Every entry is cross-verified through multiple sources. Minimal bounce rate, maximum ROI on your outreach.',
  },
  {
    icon: '⚡',
    title: 'Instant Delivery',
    description: 'Get your Excel files delivered directly to WhatsApp within minutes of purchase. No waiting, no delays.',
  },
  {
    icon: '🎯',
    title: 'Highly Targeted',
    description: 'Segment by geography, industry, size, and more. Reach exactly the right audience for your business.',
  },
  {
    icon: '📊',
    title: 'Excel-Ready Format',
    description: 'Data comes in clean, organized Excel format. Ready to import into any CRM, dialer, or marketing tool.',
  },
  {
    icon: '🔒',
    title: 'Secure & Confidential',
    description: 'All transactions are private. Your purchase details and business requirements are completely confidential.',
  },
]

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-us" ref={sectionRef} className="py-24 bg-cream-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="animate-on-scroll grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="tag-chip bg-ink/5 text-slate-light border border-ink/10 inline-flex mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              Why Galaxy Database
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-5">
              The most trusted
              <br />
              <span className="italic">data partner</span> for
              <br />
              Indian businesses
            </h2>
          </div>
          <div>
            <p className="text-slate-light text-lg leading-relaxed mb-6">
              We understand that quality leads are the backbone of any successful sales or marketing operation. That's why we invest in continuous data verification and regular updates.
            </p>
            <p className="text-slate-light text-base leading-relaxed">
              From solo consultants to large enterprises, businesses across India rely on Galaxy Database for their outreach. Our databases have powered thousands of successful campaigns.
            </p>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-on-scroll card-hover bg-white rounded-2xl p-6 border border-cream-warm"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="w-12 h-12 bg-ink rounded-xl flex items-center justify-center text-xl mb-4">
                {feature.icon}
              </div>
              <h3 className="font-body font-semibold text-ink text-base mb-2">{feature.title}</h3>
              <p className="text-slate-light text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust metrics */}
        <div className="animate-on-scroll mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: '5000+', label: 'Happy Clients', sub: 'Across India' },
            { num: '13+', label: 'Data Categories', sub: 'And growing' },
            { num: '99%', label: 'Data Accuracy', sub: 'Verified entries' },
            { num: '24/7', label: 'Support', sub: 'Via WhatsApp' },
          ].map((metric) => (
            <div key={metric.label} className="text-center p-6 rounded-2xl bg-ink border border-white/10">
              <div className="font-display text-3xl md:text-4xl text-cream mb-1">{metric.num}</div>
              <div className="font-body text-sm font-semibold text-silver-light mb-0.5">{metric.label}</div>
              <div className="font-mono text-xs text-silver uppercase tracking-widest">{metric.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
