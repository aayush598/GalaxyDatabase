'use client'
import { useEffect, useRef, useState } from 'react'

const WA_NUMBER = '916260712882'
const WA_BASE = `https://wa.me/${WA_NUMBER}`
const WA_MSG = encodeURIComponent(
  "Hello! I'm interested in your premium database services. Could you please tell me more about the available lead categories and pricing?"
)

/* ═══════════════════════════════════════════════════════
   CANVAS — light-mode animated background
   Soft floating orbs + fine mesh + subtle drift lines
═══════════════════════════════════════════════════════ */
function LightCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    let W = 0, H = 0
    let mx = 0, my = 0

    /* ── Orb definition ── */
    interface Orb {
      x: number; y: number
      vx: number; vy: number
      r: number          // draw radius
      opacity: number
      color: string      // rgb string
    }

    /* ── Mesh node ── */
    interface Node {
      x: number; y: number
      vx: number; vy: number
    }

    /* ── Drift line (horizontal sweep) ── */
    interface DriftLine {
      y: number; progress: number; speed: number; alpha: number; width: number
    }

    // Pastel-toned orb colours — visible on white/cream
    const ORB_COLORS = [
      '99,143,246',   // soft blue
      '168,139,250',  // soft violet
      '251,191,36',   // warm amber
      '52,211,153',   // soft emerald
      '251,113,133',  // soft rose
    ]

    let orbs: Orb[] = []
    let nodes: Node[] = []
    let driftLines: DriftLine[] = []
    let lastDrift = 0
    let t = 0

    const resize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W
      canvas.height = H
      mx = W / 2
      my = H / 2
      initOrbs()
      initNodes()
    }

    const initOrbs = () => {
      const count = Math.min(Math.floor((W * H) / 90_000) + 5, 9)
      orbs = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.20,
        r: Math.random() * 180 + 100,
        opacity: Math.random() * 0.13 + 0.07,
        color: ORB_COLORS[i % ORB_COLORS.length],
      }))
    }

    const initNodes = () => {
      const count = Math.floor((W * H) / 12_000)
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }))
    }

    const spawnDriftLine = () => {
      driftLines.push({
        y: Math.random() * H,
        progress: 0,
        speed: Math.random() * 0.0015 + 0.0008,
        alpha: Math.random() * 0.06 + 0.02,
        width: Math.random() * 0.5 + 0.2,
      })
    }

    const draw = () => {
      t++
      ctx.clearRect(0, 0, W, H)

      /* ── 1. Soft orbs (additive blur glow on cream bg) ── */
      orbs.forEach((o) => {
        // gentle mouse attraction toward cursor for premium feel
        const dx = mx - o.x
        const dy = my - o.y
        o.vx += dx * 0.000008
        o.vy += dy * 0.000008
        o.vx *= 0.998
        o.vy *= 0.998
        o.x += o.vx
        o.y += o.vy

        if (o.x < -o.r) o.x = W + o.r
        if (o.x > W + o.r) o.x = -o.r
        if (o.y < -o.r) o.y = H + o.r
        if (o.y > H + o.r) o.y = -o.r

        // Gentle breathing
        const breathe = Math.sin(t * 0.006 + o.x * 0.002) * 0.015 + 1
        const drawR = o.r * breathe

        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, drawR)
        g.addColorStop(0, `rgba(${o.color},${o.opacity})`)
        g.addColorStop(0.5, `rgba(${o.color},${o.opacity * 0.4})`)
        g.addColorStop(1, `rgba(${o.color},0)`)
        ctx.save()
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(o.x, o.y, drawR, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      /* ── 2. Mesh nodes + connection lines ── */
      nodes.forEach((n) => {
        const dx = mx - n.x
        const dy = my - n.y
        const d = Math.hypot(dx, dy)
        // subtle mouse repulsion
        if (d < 120) {
          n.vx -= (dx / d) * 0.012
          n.vy -= (dy / d) * 0.012
        }
        n.vx *= 0.993
        n.vy *= 0.993
        n.x += n.vx
        n.y += n.vy

        if (n.x < 0) n.x = W
        if (n.x > W) n.x = 0
        if (n.y < 0) n.y = H
        if (n.y > H) n.y = 0
      })

      // Draw connections
      ctx.save()
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < 100) {
            const a = (1 - dist / 100) * 0.08
            ctx.globalAlpha = a
            ctx.strokeStyle = 'rgba(99,120,180,1)'
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }
      ctx.restore()

      // Node dots
      ctx.save()
      nodes.forEach((n) => {
        const twinkle = Math.sin(t * 0.012 + n.x) * 0.25 + 0.75
        ctx.globalAlpha = 0.22 * twinkle
        ctx.fillStyle = 'rgba(100,120,200,1)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.2, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.restore()

      /* ── 3. Horizontal drift lines ── */
      if (t - lastDrift > 90 + Math.random() * 120) {
        spawnDriftLine()
        lastDrift = t
      }
      driftLines = driftLines.filter((l) => l.progress < 1)
      driftLines.forEach((l) => {
        l.progress = Math.min(l.progress + l.speed, 1)
        const fadeIn = l.progress < 0.1 ? l.progress / 0.1 : 1
        const fadeOut = l.progress > 0.7 ? 1 - (l.progress - 0.7) / 0.3 : 1
        const alpha = l.alpha * fadeIn * fadeOut
        const x1 = (l.progress - 0.15) * W * 1.3
        const x2 = l.progress * W * 1.3

        const gl = ctx.createLinearGradient(x1, 0, x2, 0)
        gl.addColorStop(0, `rgba(100,140,230,0)`)
        gl.addColorStop(0.5, `rgba(100,140,230,${alpha})`)
        gl.addColorStop(1, `rgba(100,140,230,0)`)

        ctx.save()
        ctx.strokeStyle = gl
        ctx.lineWidth = l.width
        ctx.beginPath()
        ctx.moveTo(x1, l.y)
        ctx.lineTo(x2, l.y)
        ctx.stroke()
        ctx.restore()
      })

      raf = requestAnimationFrame(draw)
    }

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mx = e.clientX - r.left
      my = e.clientY - r.top
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    resize()
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

/* ═══════════════════════════════════════════════════════
   COUNT-UP STAT
═══════════════════════════════════════════════════════ */
function CountUpStat({
  target, suffix, label, duration = 1800, delay = 0,
}: {
  target: number; suffix: string; label: string
  duration?: number; delay?: number
}) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let rafId: number
    const timer = setTimeout(() => {
      let start: number | null = null
      const step = (ts: number) => {
        if (!start) start = ts
        const elapsed = ts - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        setDisplay(Math.round(eased * target))
        if (progress < 1) rafId = requestAnimationFrame(step)
      }
      rafId = requestAnimationFrame(step)
    }, delay)
    return () => { clearTimeout(timer); cancelAnimationFrame(rafId) }
  }, [started, target, duration, delay])

  return (
    <div
      ref={ref}
      className="text-center px-5 py-5 rounded-2xl bg-white border border-[#EAEAE6] shadow-[0_2px_12px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:shadow-[0_8px_32px_rgba(59,130,246,0.12)] hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Subtle shimmer on hover */}
      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-blue-50/60 to-transparent pointer-events-none" />
      {/* Colour accent top-bar */}
      <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="font-display text-3xl text-[#0A0A0F] mb-1 tabular-nums leading-none">
        {display.toLocaleString()}{suffix}
      </div>
      <div className="text-[11px] text-slate-400 uppercase tracking-widest font-mono">{label}</div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   WHATSAPP SVG
═══════════════════════════════════════════════════════ */
function WAIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════════════════════ */
export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.06 }
    )
    heroRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden pt-16 pb-20"
      style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #F7F6FF 35%, #EDF4FF 65%, #F5F4F0 100%)' }}
    >
      {/* ── Static layered gradient blooms ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%]  w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle,rgba(99,143,246,0.10)_0%,transparent_65%)]" />
        <div className="absolute top-[15%]  right-[-8%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-[radial-gradient(circle,rgba(168,139,250,0.08)_0%,transparent_65%)]" />
        <div className="absolute bottom-[5%] left-[20%]  w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.07)_0%,transparent_65%)]" />
        <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.07)_0%,transparent_65%)]" />
      </div>

      {/* ── Subtle dot-grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, #C7D2FE 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Animated canvas ── */}
      <LightCanvas />

      {/* ── Edge vignette — keeps edges clean ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 110% 90% at 50% 50%, transparent 45%, rgba(245,244,240,0.55) 100%)',
        }}
      />

      {/* ════════════════ CONTENT ════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Trust badge ── */}
        <div className="animate-on-scroll flex justify-center mb-10 pt-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#DBEAFE] shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="text-[12px] font-mono font-semibold text-blue-700 uppercase tracking-widest">
              Daily File Updated · Premium Quality Data
            </span>
          </div>
        </div>

        {/* ── Headline ── */}
        <div className="animate-on-scroll text-center mb-7 delay-100">
          <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] text-[#0A0A0F] leading-[1.06] tracking-tighter">
            Fuel Your Business
            <br />
            With{' '}
            <span
              className="italic relative inline-block"
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 50%, #8B5CF6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Premium Leads
            </span>
          </h1>
        </div>

        {/* ── Sub-headline ── */}
        <div className="animate-on-scroll delay-200 text-center mb-11">
          <p className="text-[#6B6B8A] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Verified, regularly-updated B2B &amp; B2C databases across 13+ categories.
            Doctors, HNI executives, car owners, government employees —{' '}
            <span className="text-[#3B3B5A] font-medium">all in one place.</span>
          </p>
        </div>

        {/* ── CTA buttons ── */}
        <div className="animate-on-scroll delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          {/* Primary — WhatsApp */}
          <a
            href={`${WA_BASE}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white text-[15px] font-semibold hover:bg-[#1fba59] transition-all duration-300 shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.45)] hover:-translate-y-0.5"
          >
            <WAIcon size={20} />
            Chat on WhatsApp
            <span className="group-hover:translate-x-0.5 transition-transform duration-300 text-white/70">→</span>
          </a>

          {/* Secondary — scroll */}
          <a
            href="#categories"
            className="flex items-center gap-2.5 px-8 py-4 rounded-full border border-[#DBEAFE] bg-white/70 backdrop-blur-sm text-[#3B4D8A] text-[15px] font-medium hover:border-blue-300 hover:bg-white hover:shadow-[0_4px_16px_rgba(59,130,246,0.12)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Browse Categories
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* ── Stats — count up ── */}
        <div className="animate-on-scroll delay-400 grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-20">
          <CountUpStat target={13} suffix="+" label="Lead Categories" duration={1400} delay={0} />
          <CountUpStat target={3} suffix="M+" label="Updated Records" duration={1800} delay={200} />
          <CountUpStat target={100} suffix="%" label="Verified Data" duration={1600} delay={400} />
        </div>

        {/* ── Video section ── */}
        <div className="animate-on-scroll delay-500" id="video-section">

          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-[#CBD5FE]" />
            <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-[0.15em]">
              Watch how it works
            </span>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-[#CBD5FE]" />
          </div>

          {/* Video wrapper */}
          <div className="relative max-w-4xl mx-auto">
            {/* Layered glow behind — premium depth */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-blue-200/50 via-violet-200/40 to-blue-200/50 blur-2xl opacity-70 pointer-events-none" />
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-100 via-violet-100 to-blue-100 opacity-60 pointer-events-none" />

            {/* Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-[#DBEAFE] bg-white shadow-[0_8px_48px_rgba(59,130,246,0.12),0_2px_8px_rgba(0,0,0,0.06)]">

              {/* Browser-style top bar */}
              <div className="bg-[#F8F8F6] border-b border-[#EAEAE6] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 h-6 rounded-full bg-white border border-[#EAEAE6] flex items-center px-3 gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div className="h-2 w-28 rounded-full bg-[#EAEAE6]" />
                </div>
                <div className="text-[11px] font-mono text-slate-300">galaxydatabase.in</div>
              </div>

              {/* Video placeholder content */}
              <div className="relative aspect-video bg-gradient-to-br from-[#F0F4FF] via-[#EEF2FF] to-[#F5F0FF] flex flex-col items-center justify-center overflow-hidden">
                {/* Background dot grid */}
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #C7D2FE 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Decorative concentric rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  {[160, 220, 280].map((s) => (
                    <div
                      key={s}
                      className="absolute rounded-full border border-blue-200/50"
                      style={{ width: s, height: s, top: -s / 2, left: -s / 2 }}
                    />
                  ))}
                </div>

                {/* Floating accent cards */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm border border-[#EAEAE6] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-slate-500 font-semibold">13+ Categories</span>
                </div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm border border-[#EAEAE6] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-slate-500 font-semibold">3M+ Records</span>
                </div>

                {/* Play button */}
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <button className="group/play w-20 h-20 rounded-full bg-white shadow-[0_8px_32px_rgba(59,130,246,0.22)] border border-[#DBEAFE] flex items-center justify-center hover:shadow-[0_12px_48px_rgba(59,130,246,0.35)] hover:scale-105 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-inner">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="translate-x-0.5">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>

                  <div className="text-center">
                    <p className="font-display text-2xl text-[#0A0A0F] mb-2">
                      See Galaxy Database in Action
                    </p>
                    <p className="text-[#6B6B8A] text-sm max-w-md leading-relaxed">
                      Watch how thousands of Indian businesses use our premium leads to grow their outreach and close more deals
                    </p>
                  </div>

                  {/* Placeholder notice */}
                  <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-amber-600 font-semibold">
                      Replace with your product video
                    </span>
                  </div>
                </div>

                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F5F4F0]/60 to-transparent pointer-events-none" />
              </div>

              {/* ── To use a real video, replace the div above with:
              <video className="w-full aspect-video object-cover" controls poster="/poster.jpg">
                <source src="/your-video.mp4" type="video/mp4" />
              </video>
              ── */}
            </div>
          </div>

          {/* WhatsApp nudge below video */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="text-slate-400 text-sm">Have questions? We respond within minutes.</p>
            <a
              href={`${WA_BASE}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border border-[#25D366]/30 text-[#1a9950] text-[13px] font-semibold hover:bg-[#25D366]/5 hover:border-[#25D366]/50 transition-all duration-300 shadow-sm"
            >
              <WAIcon size={16} />
              Chat on WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom transition — blends into cream-warm of next section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #EAE8E2 0%, transparent 100%)' }}
      />
    </section>
  )
}