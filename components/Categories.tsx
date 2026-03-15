'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { ALL_LEAD_CATEGORIES, palette, buildWALink } from '@/lib/categories'

/* ── WhatsApp icon ─────────────────────────────────────────── */
import {
  WhatsAppIcon as WAIcon,
  RealEstateArt,
  AutomobileArt,
  EducationArt,
  FinanceArt,
  BusinessArt,
  HomeArt,
  ConsumerArt,
  JewellersArt,
  GarmentArt,
  RestaurantArt,
  ArrowLeft,
  ArrowRight
} from '@/components/icons'

const ARTS = [
  RealEstateArt, AutomobileArt, EducationArt, FinanceArt, BusinessArt,
  HomeArt, ConsumerArt, JewellersArt, GarmentArt, RestaurantArt,
]

/* ══════════════════════════════════════════════════════════════
   CAROUSEL CARD
══════════════════════════════════════════════════════════════ */
function CarouselCard({ cat, artIdx }: { cat: typeof ALL_LEAD_CATEGORIES[0]; artIdx: number }) {
  const p = palette[cat.accentColor]
  const Art = ARTS[artIdx % ARTS.length]
  return (
    <div
      className="group flex-shrink-0 w-[292px] flex flex-col bg-white rounded-2xl border border-[#EAEAE6] overflow-hidden hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(0,0,0,0.13)] transition-all duration-350 ease-out select-none"
      draggable={false}
    >
      {/* Art zone */}
      <div className="relative h-[148px] overflow-hidden flex-shrink-0">
        <Art />
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-2.5 py-1.5 shadow-sm border border-white/60">
          <span className={`text-sm font-bold leading-none ${p.record}`}>{cat.records}</span>
          <span className="block text-[8px] text-slate-400 uppercase tracking-wider mt-0.5">Records</span>
        </div>
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm border border-white/60">
          <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
          <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">{cat.sector}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
        <div className={`h-0.5 w-7 rounded-full ${p.bar} mb-3 group-hover:w-14 transition-all duration-500`} />
        <h3 className="font-bold text-[#0A0A0F] text-[14px] leading-snug mb-2">{cat.title}</h3>
        <ul className="space-y-1.5 mb-3 flex-1">
          {cat.subItems.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className={`w-1 h-1 rounded-full flex-shrink-0 ${p.itemDot}`} />
              <span className="text-[11.5px] text-[#4A4A6A] leading-tight">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[10px] text-slate-400 mb-4 leading-relaxed">
          <span className="text-slate-500 font-semibold">For:</span> {cat.idealFor}
        </p>
        <a
          href={buildWALink(cat.title, cat.subItems)}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-white text-[12px] font-semibold ${p.btn} shadow-sm hover:shadow-md transition-all duration-300`}
          onClick={(e) => e.stopPropagation()}
        >
          <WAIcon size={12} />
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   INFINITE CIRCULAR CAROUSEL
   Strategy: CSS animation-based auto-scroll + clone set for seamless loop
   The track renders cards × 3 (original + 2 clones) so the loop never shows a gap.
   On drag/click, we pause CSS animation and manage scrollLeft manually.
══════════════════════════════════════════════════════════════ */
function InfiniteCarousel() {
  const CARD_W = 308          // card width (292) + gap (16)
  const COUNT = ALL_LEAD_CATEGORIES.length   // 10
  const FULL_W = CARD_W * COUNT               // one full set width

  /* We render 3 sets: [clone-A][original][clone-B]
     We start scrolled to original (offset = FULL_W).
     When user reaches clone-B end, we jump to original start.
     When user reaches clone-A start, we jump to original end. */
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [paused, setPaused] = useState(false)
  const dragStart = useRef({ x: 0, scroll: 0 })
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)

  /* Init scroll to middle set */
  useEffect(() => {
    const el = trackRef.current
    if (el) el.scrollLeft = FULL_W
  }, [FULL_W])

  /* On scroll: detect dot + handle infinite jump */
  const onScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const sl = el.scrollLeft
    // which card within the visible 10
    const posInSet = ((sl % FULL_W) + FULL_W) % FULL_W
    setActive(Math.round(posInSet / CARD_W) % COUNT)
    // jump when reaching clones
    if (sl <= 2) {
      el.scrollLeft = FULL_W + sl
    } else if (sl >= FULL_W * 2 - el.clientWidth) {
      el.scrollLeft = FULL_W - (FULL_W * 2 - el.clientWidth - sl)
    }
  }, [FULL_W, CARD_W, COUNT])

  /* Auto-scroll: nudge scrollLeft every 16ms */
  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current)
    autoRef.current = setInterval(() => {
      const el = trackRef.current
      if (!el) return
      el.scrollLeft += 0.6   // px per tick ~36px/sec
    }, 16)
  }, [])

  const stopAuto = useCallback(() => {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null }
  }, [])

  useEffect(() => {
    if (!paused) startAuto()
    else stopAuto()
    return stopAuto
  }, [paused, startAuto, stopAuto])

  /* Nav buttons */
  const goTo = (delta: number) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: delta * CARD_W, behavior: 'smooth' })
    setPaused(true)
    setTimeout(() => setPaused(false), 4000)
  }

  /* Drag */
  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true)
    setPaused(true)
    dragStart.current = { x: e.clientX, scroll: trackRef.current?.scrollLeft ?? 0 }
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !trackRef.current) return
    trackRef.current.scrollLeft = dragStart.current.scroll + (dragStart.current.x - e.clientX)
  }
  const onMouseUp = () => {
    setDragging(false)
    setTimeout(() => setPaused(false), 4000)
  }
  const onTouchStart = (e: React.TouchEvent) => {
    setPaused(true)
    dragStart.current = { x: e.touches[0].clientX, scroll: trackRef.current?.scrollLeft ?? 0 }
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (!trackRef.current) return
    trackRef.current.scrollLeft = dragStart.current.scroll + (dragStart.current.x - e.touches[0].clientX)
  }
  const onTouchEnd = () => setTimeout(() => setPaused(false), 4000)

  /* Render 3 sets */
  const tripleCards = [...ALL_LEAD_CATEGORIES, ...ALL_LEAD_CATEGORIES, ...ALL_LEAD_CATEGORIES]

  return (
    <div className="relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-[#F7F8FC] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-[#F7F8FC] to-transparent" />

      {/* Track */}
      <div
        ref={trackRef}
        className={`flex gap-4 overflow-x-auto scrollbar-hide px-6 lg:px-8 pb-4 ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ WebkitOverflowScrolling: 'touch' }}
        onScroll={onScroll}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {tripleCards.map((cat, i) => (
          <CarouselCard key={`${cat.id}-${i}`} cat={cat} artIdx={i % COUNT} />
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-5 px-6">
        <button
          onClick={() => goTo(-1)}
          className="w-9 h-9 rounded-full border border-[#EAEAE6] bg-white flex items-center justify-center text-slate-400 hover:text-[#0A0A0F] hover:border-[#CBD5E1] transition-all duration-200 shadow-sm"
        >
          <ArrowLeft size={14} className="group-hover:translate-x-0.5 transition-transform" />        </button>

        {/* Dots — track actual position within 10 */}
        <div className="flex items-center gap-2">
          {ALL_LEAD_CATEGORIES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = trackRef.current
                if (!el) return
                const sl = el.scrollLeft
                const setOffset = Math.floor(sl / FULL_W) * FULL_W
                el.scrollTo({ left: setOffset + i * CARD_W, behavior: 'smooth' })
                setPaused(true)
                setTimeout(() => setPaused(false), 4000)
              }}
              className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2.5 bg-blue-600' : 'w-2.5 h-2.5 bg-[#CBD5E1] hover:bg-blue-300'}`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(1)}
          className="w-9 h-9 rounded-full border border-[#EAEAE6] bg-white flex items-center justify-center text-slate-400 hover:text-[#0A0A0F] hover:border-[#CBD5E1] transition-all duration-200 shadow-sm"
        >
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />        </button>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════════════════════ */
export default function Categories() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.04 }
    )
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="categories" ref={sectionRef} className="py-24 bg-[#F7F8FC] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="animate-on-scroll px-6 lg:px-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#DBEAFE] shadow-sm mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Lead Categories</span>
            </div>
            <h2 className="britti-special text-4xl md:text-5xl text-[#0A0A0F] leading-[1.08] tracking-tight">
              {ALL_LEAD_CATEGORIES.length} Premium Lead
              <br />
              <span className="italic britti-gradient">Databases</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <p className="text-[#6B6B8A] text-sm leading-relaxed max-w-xs lg:text-right">
              Verified, 3-month updated Excel files. Each card lists exactly what's included.
            </p>
            <Link href="/categories" className="inline-flex items-center gap-2 text-[13px] font-semibold text-blue-600 hover:text-blue-700 transition-colors group">
              View all &amp; filter by sector
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />            </Link>
          </div>
        </div>

        {/* Infinite carousel */}
        <div className="animate-on-scroll">
          <InfiniteCarousel />
        </div>

        {/* View All banner */}
        <div className="animate-on-scroll px-6 lg:px-8 mt-12">
          <div className="relative rounded-2xl overflow-hidden border border-[#DBEAFE]"
            style={{ background: 'linear-gradient(135deg,#EEF2FF 0%,#F0F4FF 50%,#EDF9FF 100%)' }}>
            <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(circle,#C7D2FE 1px,transparent 1px)',
              backgroundSize: '24px 24px',
            }} />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 md:p-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex -space-x-1.5">
                    {['bg-teal-500', 'bg-slate-500', 'bg-violet-500', 'bg-green-500', 'bg-blue-500', 'bg-orange-500', 'bg-rose-500'].map((c) => (
                      <div key={c} className={`w-5 h-5 rounded-full ${c} border-2 border-white shadow-sm`} />
                    ))}
                  </div>
                  <span className="text-[12px] text-slate-500 font-semibold">{ALL_LEAD_CATEGORIES.length} total databases</span>
                </div>
                <h3 className="text-2xl md:text-3xl text-[#0A0A0F] mb-2">
                  Browse all databases &amp; filter by sector
                </h3>
                <p className="text-[#6B6B8A] text-[13px] max-w-md leading-relaxed">
                  See every database in one place, filter by sector, compare record counts, and enquire instantly on WhatsApp.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 shrink-0">
                <Link
                  href="/categories"
                  className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0A0A0F] text-white text-[14px] font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-[#0A0A0F]/15 whitespace-nowrap"
                >
                  View All Categories
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />                </Link>
                <a
                  href={`https://wa.me/916260712882?text=${encodeURIComponent("Hello! I'd like to see all available database categories and pricing.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[13px] text-[#1a9950] font-semibold hover:text-[#25D366] transition-colors"
                >
                  <WAIcon size={14} />
                  Or ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}