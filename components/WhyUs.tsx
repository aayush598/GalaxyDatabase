'use client'
import { useEffect, useRef, useState } from 'react'

/* ─────────────────────────────────────────────
   Count-up stat card
───────────────────────────────────────────── */
function CountUpStat({
  target, suffix, label, sub, duration = 1800, delay = 0,
}: {
  target: number | string; suffix?: string; label: string; sub?: string; duration?: number; delay?: number
}) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const isNumeric = typeof target === 'number'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started || !isNumeric) return
    let rafId: number
    const timeout = setTimeout(() => {
      let startTime: number | null = null
      const step = (ts: number) => {
        if (!startTime) startTime = ts
        const elapsed = ts - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        setDisplay(Math.round(eased * (target as number)))
        if (progress < 1) rafId = requestAnimationFrame(step)
      }
      rafId = requestAnimationFrame(step)
    }, delay)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(rafId)
    }
  }, [started, target, duration, delay, isNumeric])

  return (
    <div
      ref={ref}
      className="text-center p-6 rounded-2xl bg-white border border-ink/5 relative overflow-hidden group cursor-default hover:border-gold/40 transition-all duration-500 shadow-sm"
    >
      {/* shimmer sweep on hover */}
      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-black/5 to-transparent pointer-events-none" />
      <div className="britti-special text-3xl md:text-4xl text-ink mb-1 tabular-nums">
        {isNumeric ? display.toLocaleString() : target}{suffix}
      </div>
      <div className="text-sm font-semibold text-brand-slate mb-0.5">{label}</div>
      {sub && <div className="text-xs text-slate-light uppercase tracking-widest">{sub}</div>}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   INTERACTIVE CARD VISUALS
   Each feature gets a unique animated visual that activates
   on hover — canvas/SVG/CSS animations, no emojis.
───────────────────────────────────────────────────────── */

/** 1. Refresh cycle — animated circular progress arcs */
function RefreshVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="relative w-28 h-28">
        {/* Outer ring — spins on hover */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 group-hover:rotate-[270deg] transition-transform duration-[1400ms] ease-in-out" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(59,130,246,0.12)" strokeWidth="3" />
          <circle
            cx="50" cy="50" r="42" fill="none"
            stroke="#3B82F6" strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="263.9"
            strokeDashoffset="66"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ filter: 'drop-shadow(0 0 6px rgba(59,130,246,0.7))' }}
          />
        </svg>

        {/* Middle ring — counter spins */}
        <svg className="absolute inset-[12px] w-[calc(100%-24px)] h-[calc(100%-24px)] -rotate-90 group-hover:rotate-[270deg] transition-transform duration-[1800ms] ease-in-out" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(245,158,11,0.12)" strokeWidth="3.5" />
          <circle
            cx="50" cy="50" r="42" fill="none"
            stroke="#F59E0B" strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="263.9"
            strokeDashoffset="160"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
            style={{ filter: 'drop-shadow(0 0 5px rgba(245,158,11,0.6))' }}
          />
        </svg>

        {/* Center calendar badge */}
        <div className="absolute inset-[26px] rounded-xl bg-white flex flex-col items-center justify-center border border-ink/5 group-hover:border-accent/40 transition-all duration-500 shadow-sm">
          <div className="text-[9px] text-slate-light uppercase tracking-widest mb-0.5">Refresh</div>
          <div className="britti-special text-base text-ink leading-none">1d</div>
        </div>

        {/* Tick marks */}
        {[0, 90, 180, 270].map((deg) => (
          <div
            key={deg}
            className="absolute w-1 h-1 rounded-full bg-accent/30 group-hover:bg-accent transition-colors duration-300"
            style={{
              top: `${50 - 47 * Math.cos((deg * Math.PI) / 180)}%`,
              left: `${50 + 47 * Math.sin((deg * Math.PI) / 180)}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

/** 2. Verified shield — tick draws itself on hover */
function VerifiedVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Pulsing rings */}
        <div className="absolute inset-0 rounded-full border border-emerald-500/10 scale-100 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700 ease-out" />
        <div className="absolute inset-4 rounded-full border border-emerald-500/15 scale-100 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700 delay-100 ease-out" />

        {/* Shield body */}
        <div className="relative z-10">
          <svg width="56" height="64" viewBox="0 0 56 64" fill="none">
            {/* Shield outline — fills on hover */}
            <path
              d="M28 2L4 12V32C4 46 14 58 28 62C42 58 52 46 52 32V12L28 2Z"
              stroke="rgba(16,185,129,0.3)"
              strokeWidth="2"
              fill="rgba(16,185,129,0.05)"
            />
            <path
              d="M28 2L4 12V32C4 46 14 58 28 62C42 58 52 46 52 32V12L28 2Z"
              stroke="#10B981"
              strokeWidth="2"
              fill="rgba(16,185,129,0.12)"
              strokeDasharray="160"
              strokeDashoffset="160"
              className="group-hover:[stroke-dashoffset:0] transition-all duration-700 ease-out"
              style={{ filter: 'drop-shadow(0 0 6px rgba(16,185,129,0.5))' }}
            />
            {/* Check mark — appears after shield */}
            <path
              d="M18 32L24 38L38 24"
              stroke="#10B981"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="30"
              strokeDashoffset="30"
              className="group-hover:[stroke-dashoffset:0] transition-all duration-500 delay-500 ease-out"
            />
          </svg>
        </div>

        {/* Glow burst */}
        <div className="absolute inset-0 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/8 transition-colors duration-700 blur-xl" />
      </div>
    </div>
  )
}

/** 3. Instant delivery — file drops into WhatsApp bubble */
function DeliveryVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="relative w-36 h-32 flex items-end justify-center">

        {/* Excel file — falls from top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center group-hover:translate-y-8 transition-transform duration-500 ease-in-out">
          <div className="w-10 h-12 rounded-lg bg-[#1D6F42] border border-white/10 flex flex-col items-center justify-center shadow-lg group-hover:shadow-emerald-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:8px_8px]" />
            <span className="text-[10px] font-bold text-white relative z-10">XLS</span>
          </div>
          {/* Animated speed lines */}
          <div className="flex gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-200">
            {[8, 12, 8].map((w, i) => (
              <div key={i} className="h-0.5 rounded-full bg-accent/60" style={{ width: w }} />
            ))}
          </div>
        </div>

        {/* WhatsApp bubble — receives the file */}
        <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_24px_rgba(37,211,102,0.45)] transition-all duration-500 mb-0 relative z-10">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          {/* Ping dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-600">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
        </div>

        {/* Timer badge */}
        <div className="absolute bottom-0 right-4 bg-ink border border-white/10 rounded-lg px-2 py-1 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-700 translate-y-2 group-hover:translate-y-0">
          <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[9px] text-silver-light">~2 min</span>
        </div>
      </div>
    </div>
  )
}

/** 4. Targeted — radar/crosshair sweeps and locks on a dot */
function TargetedVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Radar rings */}
        {[28, 44, 60].map((r, i) => (
          <div
            key={r}
            className="absolute rounded-full border border-accent/15 group-hover:border-accent/35 transition-all duration-500"
            style={{ width: r * 2, height: r * 2, transitionDelay: `${i * 60}ms` }}
          />
        ))}

        {/* Cross hairs */}
        <div className="absolute w-full h-px bg-accent/10 group-hover:bg-accent/25 transition-colors duration-300" />
        <div className="absolute h-full w-px bg-accent/10 group-hover:bg-accent/25 transition-colors duration-300" />

        {/* Sweep arm — rotates on hover */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div
            className="absolute top-1/2 left-1/2 w-[50%] h-px origin-left group-hover:animate-[spin_2s_linear_infinite]"
            style={{
              background: 'linear-gradient(90deg, rgba(59,130,246,0.9), transparent)',
              filter: 'drop-shadow(0 0 4px rgba(59,130,246,0.6))',
            }}
          />
        </div>

        {/* Target dot — pulses on hover */}
        <div className="relative z-10">
          <div className="w-3 h-3 rounded-full bg-accent group-hover:shadow-[0_0_12px_rgba(59,130,246,0.9)] transition-all duration-300" />
          <div className="absolute inset-0 rounded-full bg-accent/30 scale-0 group-hover:scale-[3] group-hover:opacity-0 transition-all duration-700 ease-out" />
        </div>

        {/* Tag label */}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
          <div className="flex items-center gap-1 bg-accent/10 border border-accent/20 rounded px-1.5 py-0.5">
            <div className="w-1 h-1 rounded-full bg-accent" />
            <span className="text-[8px] text-accent uppercase tracking-widest">Locked</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/** 5. Excel-ready — rows of data scan across the card */
function ExcelVisual() {
  const rows = ['Name', 'Phone', 'Email', 'City', 'Segment', 'Industry']
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none px-6">
      <div className="w-full max-w-[200px] flex flex-col gap-1.5 group-hover:-translate-y-1 transition-transform duration-500">
        {/* Column headers */}
        <div className="grid grid-cols-3 gap-1 mb-0.5">
          {['A', 'B', 'C'].map((col) => (
            <div key={col} className="h-5 rounded bg-[#1D6F42]/20 border border-[#1D6F42]/30 flex items-center justify-center">
              <span className="text-[8px] font-bold text-emerald-500">{col}</span>
            </div>
          ))}
        </div>

        {/* Data rows — stagger in on hover */}
        {rows.map((row, i) => (
          <div
            key={row}
            className="grid grid-cols-3 gap-1 opacity-40 group-hover:opacity-100 transition-all duration-300"
            style={{ transitionDelay: `${i * 55}ms` }}
          >
            <div className="h-5 rounded bg-white border border-ink/10 flex items-center px-1.5 col-span-1">
              <span className="text-[8px] text-slate-light truncate">{row}</span>
            </div>
            <div className="h-5 rounded bg-white border border-ink/5 col-span-1 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform ease-in-out"
                style={{ transitionDuration: '1200ms', transitionDelay: `${i * 80}ms` }}
              />
            </div>
            <div className="h-5 rounded bg-white border border-ink/5 col-span-1" />
          </div>
        ))}

        {/* Status bar */}
        <div className="mt-1 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-500">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[8px] text-slate-light">CRM-Ready</span>
          </div>
          <span className="text-[8px] text-brand-slate">xlsx ↓</span>
        </div>
      </div>
    </div>
  )
}

/** 6. Secure & Confidential — lock mechanism animates closed */
function SecureVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="relative flex flex-col items-center gap-2">
        {/* Lock icon — shackle closes on hover */}
        <div className="relative w-16 h-16">
          {/* Shackle (top arc) */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64" fill="none">
            {/* Shackle — moves down on hover */}
            <path
              d="M20 28 C20 18 44 18 44 28"
              stroke="rgba(148,163,184,0.2)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M20 28 C20 18 44 18 44 28"
              stroke="#9999BB"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              className="group-hover:stroke-accent transition-colors duration-300"
              style={{ filter: 'drop-shadow(0 0 4px rgba(59,130,246,0.0))' }}
            />
            {/* Shackle locked version (appears on hover) */}
            <path
              d="M20 32 C20 18 44 18 44 32"
              stroke="#3B82F6"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="45"
              strokeDashoffset="45"
              className="group-hover:[stroke-dashoffset:0] transition-all duration-500"
              style={{ filter: 'drop-shadow(0 0 6px rgba(59,130,246,0.7))' }}
            />
          </svg>

          {/* Lock body */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-8 rounded-xl bg-white border border-ink/10 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-500 flex items-center justify-center shadow-sm">
            {/* Keyhole */}
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-2.5 h-2.5 rounded-full bg-ink/10 group-hover:bg-accent/30 transition-colors duration-300" />
              <div className="w-1 h-2 rounded-b bg-ink/10 group-hover:bg-accent/30 transition-colors duration-300" />
            </div>
          </div>
        </div>

        {/* Encryption label */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-400 delay-400 translate-y-1 group-hover:translate-y-0">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[9px] text-slate-light uppercase tracking-widest">Encrypted</span>
        </div>

        {/* Radial glow */}
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/6 rounded-full blur-2xl transition-colors duration-700" />
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   BENTO CARD WRAPPER
───────────────────────────────────────────────────────── */
interface BentoCardProps {
  title: string
  description: string
  tag: string
  visual: React.ComponentType
  colSpan?: string
  rowSpan?: string
  delay?: number
  accent?: string
}

function BentoCard({
  title, description, tag, visual: Visual,
  colSpan = '', rowSpan = '', delay = 0, accent = 'text-accent',
}: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && ref.current?.classList.add('visible'),
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`animate-on-scroll group relative flex flex-col rounded-2xl bg-white border border-cream-warm overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-400 ease-out ${colSpan} ${rowSpan}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Spotlight hover shimmer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_at_60%_0%,rgba(59,130,246,0.04),transparent_70%)]" />

      {/* Visual zone */}
      <div className="relative flex-auto min-h-[160px] bg-cream overflow-hidden border-b border-cream-warm/80">
        <Visual />
      </div>

      {/* Content zone */}
      <div className="relative z-10 px-6 py-5 flex-none">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-[10px] font-bold uppercase tracking-[0.12em] ${accent} bg-ink/5 px-2.5 py-1 rounded-full border border-ink/8`}>
            {tag}
          </span>
          {/* Arrow icon — slides in on hover */}
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
            className="text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
        <h3 className="font-semibold text-ink text-[15px] mb-1.5 leading-snug">{title}</h3>
        <p className="text-slate-light text-[13px] leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   STAT BLOCK (bottom strip)
───────────────────────────────────────────────────────── */
function StatBlock({ num, label, sub }: { num: string; label: string; sub: string }) {
  return (
    <div className="text-center p-7 rounded-2xl bg-white border border-ink/5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 shadow-sm">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="britti-special text-3xl md:text-4xl text-ink mb-1.5 relative z-10">{num}</div>
      <div className="text-sm font-semibold text-brand-slate mb-0.5 relative z-10">{label}</div>
      <div className="text-[10px] text-slate-light uppercase tracking-widest relative z-10">{sub}</div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────── */
const features = [
  {
    title: 'Daily Updated Data',
    description: 'All databases are refreshed daily ensuring maximum accuracy and deliverability across every campaign you run.',
    tag: 'Freshness',
    visual: RefreshVisual,
    accent: 'text-accent',
    colSpan: 'md:col-span-1 lg:col-span-1',
    rowSpan: 'lg:row-span-1',
    delay: 0,
  },
  {
    title: 'Verified & Accurate',
    description: 'Every entry is cross-verified through multiple sources. Minimal bounce rate, maximum ROI on your outreach.',
    tag: 'Quality',
    visual: VerifiedVisual,
    accent: 'text-emerald-600',
    colSpan: 'md:col-span-1 lg:col-span-1',
    rowSpan: 'lg:row-span-1',
    delay: 80,
  },
  {
    title: 'Instant Delivery',
    description: 'Excel files delivered directly to WhatsApp within minutes of purchase — no waiting, no delays, no friction.',
    tag: 'Speed',
    visual: DeliveryVisual,
    accent: 'text-[#25D366]',
    colSpan: 'md:col-span-2 lg:col-span-1',
    rowSpan: 'lg:row-span-1',
    delay: 160,
  },
  {
    title: 'Highly Targeted',
    description: 'Segment by geography, industry, size, profession and more. Reach exactly the right audience for your business.',
    tag: 'Precision',
    visual: TargetedVisual,
    accent: 'text-accent',
    colSpan: 'md:col-span-1 lg:col-span-1',
    rowSpan: 'lg:row-span-1',
    delay: 240,
  },
  {
    title: 'Excel-Ready Format',
    description: 'Clean, organized spreadsheets ready to import into any CRM, auto-dialer, or email marketing platform instantly.',
    tag: 'Format',
    visual: ExcelVisual,
    accent: 'text-emerald-600',
    colSpan: 'md:col-span-1 lg:col-span-1',
    rowSpan: 'lg:row-span-1',
    delay: 320,
  },
  {
    title: 'Secure & Confidential',
    description: 'All transactions are 100% private. Your purchase details and business requirements stay completely confidential.',
    tag: 'Security',
    visual: SecureVisual,
    accent: 'text-accent',
    colSpan: 'md:col-span-2 lg:col-span-1',
    rowSpan: 'lg:row-span-1',
    delay: 400,
  },
]

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-us" ref={sectionRef} className="py-24 bg-cream-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="animate-on-scroll grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="tag-chip bg-ink/5 text-slate-light border border-ink/10 inline-flex mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              Why Galaxy Database
            </div>
            <h2 className="britti-special text-4xl md:text-5xl text-ink leading-[1.1] tracking-tight">
              The most trusted
              <br />
              <span className="italic">data partner</span> for
              <br />
              Indian businesses
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-slate-light text-lg leading-relaxed mb-5">
              Quality leads are the backbone of every successful sales operation.
              We invest in continuous data verification and regular updates so you never waste a call.
            </p>
            <p className="text-slate-light text-base leading-relaxed">
              From solo consultants to large enterprises — businesses across India rely on Galaxy Database to power their outreach and grow faster.
            </p>
          </div>
        </div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[minmax(260px,auto)]">
          {features.map((f) => (
            <BentoCard key={f.title} {...f} />
          ))}
        </div>

        {/* ── Metrics strip ── */}
        <div className="animate-on-scroll mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <CountUpStat target={5000} suffix="+" label="Happy Clients" sub="Across India" delay={0} />
          <CountUpStat target={13} suffix="+" label="Data Categories" sub="And growing" delay={100} />
          <CountUpStat target={99} suffix="%" label="Data Accuracy" sub="Verified entries" delay={200} />
          <CountUpStat target="24/7" label="Support" sub="Via WhatsApp" delay={300} />
        </div>

      </div>
    </section>
  )
}