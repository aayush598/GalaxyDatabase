'use client'
import { useEffect, useRef } from 'react'

const WA_NUMBER = '916260712882'
const WA_BASE = `https://wa.me/${WA_NUMBER}`

const categories = [
  {
    id: 1,
    title: 'B2B / B2C Indian Companies',
    description: 'Comprehensive database of verified Indian businesses across sectors. Decision-makers, directors, and proprietors contact info.',
    icon: '🏢',
    color: 'blue',
    tags: ['Manufacturers', 'Exporters', 'SMEs'],
    records: '2.5L+',
  },
  {
    id: 2,
    title: 'Students Database',
    description: 'Nationwide student data from colleges and universities. Ideal for ed-tech, coaching institutes, and career services.',
    icon: '🎓',
    color: 'purple',
    tags: ['Engineering', 'MBA', 'Medical'],
    records: '5L+',
  },
  {
    id: 3,
    title: 'Government Employees',
    description: 'Verified government sector professionals database. State & central employees with department-wise segmentation.',
    icon: '🏛️',
    color: 'green',
    tags: ['Central Govt', 'State Govt', 'PSUs'],
    records: '3L+',
  },
  {
    id: 4,
    title: 'Doctors Database',
    description: 'Registered medical practitioners, specialists, and clinics across India. Verified with MCI registration details.',
    icon: '👨‍⚕️',
    color: 'red',
    tags: ['Specialists', 'General', 'Clinics'],
    records: '1.8L+',
  },
  {
    id: 5,
    title: 'Teachers Database',
    description: 'School and college educators across India. Includes private, government, and aided institution faculty.',
    icon: '📚',
    color: 'amber',
    tags: ['CBSE', 'State Board', 'Colleges'],
    records: '2L+',
  },
  {
    id: 6,
    title: 'Car Owners Database',
    description: 'Vehicle registration-linked owner data. Segment by car brand, year, and region for targeted automotive marketing.',
    icon: '🚗',
    color: 'slate',
    tags: ['Luxury', 'Mid-Range', 'New Buyers'],
    records: '4L+',
  },
  {
    id: 7,
    title: 'Real Estate Leads',
    description: 'Active property buyers, sellers, and investors. Includes NRI investors and residential/commercial property seekers.',
    icon: '🏠',
    color: 'teal',
    tags: ['Buyers', 'Investors', 'NRI'],
    records: '1.5L+',
  },
  {
    id: 8,
    title: 'Insurance Database',
    description: 'Active insurance policy holders and prospects. Segment by life, health, vehicle, and term insurance categories.',
    icon: '🛡️',
    color: 'indigo',
    tags: ['Life', 'Health', 'Vehicle'],
    records: '3.5L+',
  },
  {
    id: 9,
    title: 'D-Mate Account Holders',
    description: 'Demat account holders and active stock market investors. Perfect for brokerages, fintech apps, and wealth advisors.',
    icon: '📈',
    color: 'emerald',
    tags: ['Investors', 'Traders', 'Mutual Funds'],
    records: '2.2L+',
  },
  {
    id: 10,
    title: 'OLX User Database',
    description: 'Active OLX marketplace users categorized by product interests. High-intent buyers and sellers across categories.',
    icon: '🛒',
    color: 'orange',
    tags: ['Buyers', 'Sellers', 'Premium'],
    records: '1.2L+',
  },
  {
    id: 11,
    title: 'Chemical / Pharma Companies',
    description: 'Manufacturers, distributors, and stockists in chemical and pharmaceutical industry. Includes API and formulation companies.',
    icon: '🧪',
    color: 'cyan',
    tags: ['Manufacturers', 'API', 'Distributors'],
    records: '80K+',
  },
  {
    id: 12,
    title: 'CBSE School Database',
    description: 'Complete CBSE-affiliated school database with principal, coordinator, and admission officer contact details.',
    icon: '🏫',
    color: 'yellow',
    tags: ['Urban', 'Semi-Urban', 'Rural'],
    records: '45K+',
  },
  {
    id: 13,
    title: 'HNI Employees Database',
    description: 'High Net-worth Individuals — CXOs, directors, senior managers from top corporates. Premium segment leads.',
    icon: '💼',
    color: 'gold',
    tags: ['CXOs', 'Directors', 'VPs'],
    records: '90K+',
  },
]

const colorMap: Record<string, { bg: string; border: string; tag: string; icon: string; button: string }> = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-100', tag: 'bg-blue-100 text-blue-700', icon: 'text-blue-600', button: 'bg-blue-600 hover:bg-blue-700' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-100', tag: 'bg-purple-100 text-purple-700', icon: 'text-purple-600', button: 'bg-purple-600 hover:bg-purple-700' },
  green: { bg: 'bg-green-50', border: 'border-green-100', tag: 'bg-green-100 text-green-700', icon: 'text-green-600', button: 'bg-green-600 hover:bg-green-700' },
  red: { bg: 'bg-red-50', border: 'border-red-100', tag: 'bg-red-100 text-red-700', icon: 'text-red-600', button: 'bg-red-500 hover:bg-red-600' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-100', tag: 'bg-amber-100 text-amber-700', icon: 'text-amber-600', button: 'bg-amber-500 hover:bg-amber-600' },
  slate: { bg: 'bg-slate-50', border: 'border-slate-200', tag: 'bg-slate-100 text-slate-700', icon: 'text-slate-600', button: 'bg-slate-700 hover:bg-slate-800' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-100', tag: 'bg-teal-100 text-teal-700', icon: 'text-teal-600', button: 'bg-teal-600 hover:bg-teal-700' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', tag: 'bg-indigo-100 text-indigo-700', icon: 'text-indigo-600', button: 'bg-indigo-600 hover:bg-indigo-700' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100', tag: 'bg-emerald-100 text-emerald-700', icon: 'text-emerald-600', button: 'bg-emerald-600 hover:bg-emerald-700' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-100', tag: 'bg-orange-100 text-orange-700', icon: 'text-orange-600', button: 'bg-orange-500 hover:bg-orange-600' },
  cyan: { bg: 'bg-cyan-50', border: 'border-cyan-100', tag: 'bg-cyan-100 text-cyan-700', icon: 'text-cyan-600', button: 'bg-cyan-600 hover:bg-cyan-700' },
  yellow: { bg: 'bg-yellow-50', border: 'border-yellow-100', tag: 'bg-yellow-100 text-yellow-700', icon: 'text-yellow-600', button: 'bg-yellow-500 hover:bg-yellow-600' },
  gold: { bg: 'bg-amber-50', border: 'border-amber-200', tag: 'bg-amber-100 text-amber-800', icon: 'text-amber-700', button: 'bg-amber-600 hover:bg-amber-700' },
}

export default function Categories() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.05 }
    )
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const getWALink = (categoryTitle: string) => {
    const message = encodeURIComponent(
      `Hello Sir/Mam, I am from Galaxy Database. I am interested in the *${categoryTitle}* database. Could you please share the details, pricing, and sample data?`
    )
    return `${WA_BASE}?text=${message}`
  }

  return (
    <section id="categories" ref={sectionRef} className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="animate-on-scroll text-center mb-16">
          <div className="tag-chip bg-ink/5 text-slate-light border border-ink/10 inline-flex mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            Available Categories
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-5">
            13 Premium Lead
            <br />
            <span className="italic text-accent">Categories</span>
          </h2>
          <p className="text-slate-light text-lg max-w-xl mx-auto leading-relaxed">
            Each database is verified, 3-months updated, and ready to download as Excel files. Click any category to get it instantly via WhatsApp.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, index) => {
            const colors = colorMap[cat.color]
            return (
              <div
                key={cat.id}
                className={`animate-on-scroll card-hover gradient-border rounded-2xl border bg-white overflow-hidden group`}
                style={{ transitionDelay: `${(index % 6) * 60}ms` }}
              >
                <div className="p-6">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center text-2xl`}>
                      {cat.icon}
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-xs text-slate-light uppercase tracking-widest">Records</div>
                      <div className={`font-display text-xl font-semibold ${colors.icon}`}>{cat.records}</div>
                    </div>
                  </div>

                  {/* Title & description */}
                  <h3 className="font-body font-semibold text-ink text-base mb-2 leading-snug">{cat.title}</h3>
                  <p className="text-slate-light text-sm leading-relaxed mb-4 line-clamp-2">{cat.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cat.tags.map((tag) => (
                      <span key={tag} className={`text-xs px-2.5 py-1 rounded-full font-medium ${colors.tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-cream-warm mb-5" />

                  {/* CTA */}
                  <a
                    href={getWALink(cat.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-white text-sm font-semibold ${colors.button} transition-all duration-300 group-hover:shadow-md`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Get This Database
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="animate-on-scroll mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-ink text-cream max-w-lg mx-auto w-full border border-white/10">
            <div className="text-3xl">🌟</div>
            <h3 className="font-display text-2xl">Need a Custom Database?</h3>
            <p className="text-silver text-sm leading-relaxed">
              Don't see what you need? We source custom data as per your requirements. Message us and we'll get it for you.
            </p>
            <a
              href={`${WA_BASE}?text=${encodeURIComponent("Hello! I need a custom database that isn't listed on your website. Could you help me source it?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1fba59] transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Request Custom Data
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
