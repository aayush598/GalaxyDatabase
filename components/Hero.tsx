'use client'
import { useEffect, useRef } from 'react'

const WA_NUMBER = '916260712882'
const WA_BASE = `https://wa.me/${WA_NUMBER}`
const WA_MESSAGE = encodeURIComponent("Hello! I'm interested in your premium database services. Could you please tell me more about the available lead categories and pricing?")

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-20 pb-16 overflow-hidden bg-ink"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating dots decoration */}
      <div className="absolute top-32 right-12 animate-float opacity-40">
        <div className="w-2 h-2 rounded-full bg-gold" />
      </div>
      <div className="absolute top-48 right-24 animate-float delay-300 opacity-30">
        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
      </div>
      <div className="absolute bottom-40 left-16 animate-float delay-500 opacity-30">
        <div className="w-2 h-2 rounded-full bg-emerald" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Badge */}
        <div className="animate-on-scroll flex justify-center mb-8 pt-12">
          <div className="tag-chip bg-accent/10 text-accent border border-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow inline-block" />
            3-Month Updated Premium Data
          </div>
        </div>

        {/* Headline */}
        <div className="animate-on-scroll text-center mb-6 delay-100">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.08] tracking-tight">
            Fuel Your Business With
            <br />
            <span className="italic text-accent">Premium Leads</span>
          </h1>
        </div>

        {/* Subheading */}
        <div className="animate-on-scroll delay-200 text-center mb-10">
          <p className="text-silver text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Access verified, regularly-updated B2B & B2C databases across 13+ categories.
            Doctors, HNI executives, car owners, government employees and more —
            <span className="text-silver-light"> all in one place.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-on-scroll delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={`${WA_BASE}?text=${WA_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-pulse flex items-center gap-3 px-7 py-4 rounded-full bg-[#25D366] text-white text-base font-semibold hover:bg-[#1fba59] transition-all duration-300 shadow-lg shadow-[#25D366]/25 group"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat on WhatsApp
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="#categories"
            className="flex items-center gap-2 px-7 py-4 rounded-full border border-white/15 text-silver text-base font-medium hover:border-white/30 hover:text-cream transition-all duration-300"
          >
            Browse Categories
          </a>
        </div>

        {/* Stats bar */}
        <div className="animate-on-scroll delay-400 grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
          {[
            { num: '13+', label: 'Lead Categories' },
            { num: '3M', label: 'Updated Records' },
            { num: '100%', label: 'Verified Data' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl border border-white/8 bg-white/4 backdrop-blur-sm">
              <div className="font-display text-3xl text-cream mb-1">{stat.num}</div>
              <div className="text-xs text-silver uppercase tracking-widest font-mono">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="animate-on-scroll delay-500" id="video-section">
          <div className="text-center mb-6">
            <p className="text-silver-light text-sm font-mono uppercase tracking-widest">Watch how it works</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Glow effect behind video */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-gold/20 to-accent/30 rounded-2xl blur-xl opacity-60" />

            <div className="relative video-wrapper rounded-2xl overflow-hidden border border-white/10 bg-ink-soft shadow-2xl">
              {/* Demo video placeholder - styled nicely */}
              <div className="relative aspect-video bg-gradient-to-br from-ink-soft to-slate flex flex-col items-center justify-center">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-50" />

                {/* Decorative circles */}
                <div className="absolute top-8 left-8 w-32 h-32 border border-accent/20 rounded-full" />
                <div className="absolute top-12 left-12 w-20 h-20 border border-gold/20 rounded-full" />
                <div className="absolute bottom-8 right-8 w-24 h-24 border border-emerald/20 rounded-full" />

                {/* Play button */}
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center cursor-pointer hover:bg-accent hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/30">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-cream font-display text-2xl mb-2">See Galaxy Database in Action</p>
                    <p className="text-silver text-sm max-w-md">Watch how thousands of businesses use our premium leads to grow their outreach and increase sales</p>
                  </div>
                  <div className="flex items-center gap-2 text-silver-light text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                    Replace with your actual product video
                  </div>
                </div>

                {/* Bottom bar overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-ink to-transparent" />
              </div>

              {/* Replace with actual video: */}
              {/* <video
                className="w-full aspect-video object-cover"
                controls
                poster="/video-poster.jpg"
              >
                <source src="/product-demo.mp4" type="video/mp4" />
              </video> */}
            </div>
          </div>

          {/* WhatsApp CTA below video */}
          <div className="mt-10 text-center">
            <p className="text-silver text-sm mb-4">Have questions after watching? We're just a message away</p>
            <a
              href={`${WA_BASE}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-medium hover:bg-[#25D366]/20 transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </section>
  )
}
