'use client'
import { useEffect, useRef } from 'react'

const WA_NUMBER = '916260712882'
const WA_BASE = `https://wa.me/${WA_NUMBER}`

const services = [
  {
    icon: '💻',
    title: 'Website Development',
    description: 'Professional, responsive websites tailored for your business. From landing pages to full e-commerce platforms.',
    gradient: 'from-blue-500 to-indigo-600',
    light: 'bg-blue-50',
  },
  {
    icon: '🎨',
    title: 'Graphic Design',
    description: 'Brand identity, marketing materials, social media graphics, and everything your brand needs to look professional.',
    gradient: 'from-pink-500 to-rose-600',
    light: 'bg-pink-50',
  },
  {
    icon: '📣',
    title: 'Digital Marketing',
    description: 'SEO, paid ads, social media marketing, and lead generation campaigns to grow your online presence.',
    gradient: 'from-amber-500 to-orange-600',
    light: 'bg-amber-50',
  },
  {
    icon: '⚙️',
    title: 'Software Development',
    description: 'Custom software, mobile apps, CRM systems, and automation tools built for your specific business needs.',
    gradient: 'from-emerald-500 to-teal-600',
    light: 'bg-emerald-50',
  },
]

export default function Services() {
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
    <section id="services" ref={sectionRef} className="py-24 bg-ink overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="animate-on-scroll text-center mb-16">
          <div className="tag-chip bg-white/10 text-silver border border-white/15 inline-flex mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
            Additional Services
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-5">
            We do more than
            <br />
            <span className="italic text-gold">just data</span>
          </h2>
          <p className="text-silver text-lg max-w-xl mx-auto">
            Galaxy Database is a full-service digital agency. Whether you need a website, marketing campaign, or custom software — we've got you covered.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-on-scroll card-hover rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 group"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl mb-5 shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="font-body font-semibold text-cream text-lg mb-3">{service.title}</h3>
              <p className="text-silver text-sm leading-relaxed mb-5">{service.description}</p>
              <a
                href={`${WA_BASE}?text=${encodeURIComponent(`Hello! I'm interested in your *${service.title}* service. Could you share more details?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-silver-light hover:text-cream transition-colors duration-200 group-hover:gap-3"
              >
                Enquire on WhatsApp
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="animate-on-scroll rounded-2xl border border-white/15 bg-white/5 p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl text-cream mb-2">Ready to get started?</h3>
              <p className="text-silver text-sm">Reach out to us directly — fastest response via WhatsApp</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`${WA_BASE}?text=${encodeURIComponent("Hello Sir/Mam I am from Galaxy Database. Do you have any kind of data requirements? 3months updated file Premium quality data available. We have this data available.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1fba59] transition-all duration-300 wa-pulse"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                +91 62607 12882
              </a>
              <a
                href="mailto:Galaxydatabasee@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-silver text-sm font-medium hover:border-white/40 hover:text-cream transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Galaxydatabasee@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
