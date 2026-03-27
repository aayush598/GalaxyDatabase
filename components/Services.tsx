'use client'
import { useEffect, useRef, useState } from 'react'

const WA_BASE = 'https://wa.me/916267731901'
const waLink = (service: string) =>
  `${WA_BASE}?text=${encodeURIComponent(`Hello! I'm interested in your *${service}* service. Could you please share more details and pricing?`)}`

/* ─── Shared micro-components ──────────────────────────────────────────── */
function WAIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

/* ══════════════════════════════════════════════════════════════
   INTERACTIVE VISUALS — one per service card
   Each lives in a ~200px tall zone above the text content.
   They use CSS hover states (group-hover) + lightweight SVG/DOM.
══════════════════════════════════════════════════════════════ */

/* 1. WEBSITE DEVELOPMENT — browser mockup with live "build" animation */
function WebDevVisual() {
  return (
    <div className="absolute inset-0 flex items-end justify-center pb-0 overflow-hidden select-none pointer-events-none">
      {/* Browser chrome — bleeds slightly out of bottom edge */}
      <div className="relative w-[88%] translate-y-6 group-hover:translate-y-2 transition-transform duration-500 ease-out drop-shadow-[0_8px_32px_rgba(59,130,246,0.18)] group-hover:drop-shadow-[0_16px_48px_rgba(59,130,246,0.30)]">
        {/* Window chrome */}
        <div className="bg-[#EAEAE6] rounded-t-xl pt-2.5 pb-0 px-3 flex items-center gap-1.5 border-x border-t border-ink/5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <div className="mx-auto flex-1 mx-6 h-4 rounded-full bg-white flex items-center px-2 border border-ink/5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5" />
            <div className="h-1.5 w-24 rounded-full bg-ink/10" />
          </div>
        </div>
        {/* Page preview */}
        <div className="bg-white rounded-b-none overflow-hidden">
          {/* Fake nav */}
          <div className="h-7 bg-[#F8F8F6] border-b border-[#EAEAE6] flex items-center px-3 gap-3">
            <div className="h-2 w-10 rounded-full bg-blue-500" />
            <div className="flex gap-2 ml-auto">
              {['w-8', 'w-6', 'w-8', 'w-5'].map((w, i) => <div key={i} className={`h-1.5 ${w} rounded-full bg-slate-200`} />)}
            </div>
          </div>
          {/* Hero block — fills with color on hover */}
          <div className="h-16 relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors duration-700">
            <div className="absolute inset-0 flex items-center px-4 gap-3">
              <div className="flex-1">
                <div className="h-2.5 w-20 rounded-full bg-blue-400 mb-1.5 group-hover:w-28 transition-all duration-700" />
                <div className="h-1.5 w-14 rounded-full bg-slate-200 mb-2" />
                <div className="h-5 w-16 rounded-lg bg-blue-500 group-hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)] transition-shadow duration-500" />
              </div>
              {/* Floating card z-layer */}
              <div className="w-16 h-12 rounded-lg bg-white shadow-lg border border-slate-100 flex flex-col items-center justify-center gap-1 group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-500">
                <div className="h-1.5 w-8 rounded-full bg-slate-200" />
                <div className="h-1.5 w-6 rounded-full bg-blue-200" />
                <div className="h-1.5 w-8 rounded-full bg-slate-100" />
              </div>
            </div>
            {/* Scan line */}
            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent top-0 translate-y-0 group-hover:translate-y-[64px] transition-transform duration-[1200ms] ease-in-out opacity-0 group-hover:opacity-100" />
          </div>
          {/* Content rows */}
          <div className="px-4 py-2 flex gap-2">
            {[['w-full', 'w-3/4'], ['w-5/6', 'w-1/2'], ['w-2/3', 'w-4/5']].map(([a, b], i) => (
              <div key={i} className="flex-1 space-y-1">
                <div className={`h-1.5 ${a} rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors duration-300`} style={{ transitionDelay: `${i * 80}ms` }} />
                <div className={`h-1.5 ${b} rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors duration-300`} style={{ transitionDelay: `${i * 80 + 40}ms` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* 2. GRAPHIC DESIGN — brand palette swatches + animated logo grid */
function GraphicDesignVisual() {
  const swatches = ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#0A0A0F']
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
      {/* Center canvas — rises on hover */}
      <div className="relative group-hover:-translate-y-3 transition-transform duration-500 ease-out">
        {/* Main artboard */}
        <div className="w-44 h-32 rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-[#EAEAE6] overflow-hidden relative group-hover:shadow-[0_12px_40px_rgba(236,72,153,0.18)] transition-shadow duration-500">
          {/* Grid of brand tiles */}
          <div className="grid grid-cols-3 h-full">
            {['bg-gradient-to-br from-pink-400 to-rose-500', 'bg-gradient-to-br from-violet-400 to-purple-500', 'bg-gradient-to-br from-amber-300 to-orange-400',
              'bg-[#F8F8F6]', 'bg-gradient-to-br from-blue-400 to-indigo-500', 'bg-[#0A0A0F]'].map((bg, i) => (
                <div key={i} className={`${bg} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`} style={{ transitionDelay: `${i * 50}ms` }}>
                  {i === 3 && (
                    <div className="w-5 h-5 rounded-full border-2 border-slate-200 group-hover:border-pink-400 transition-colors duration-500" />
                  )}
                  {i === 5 && (
                    <div className="text-xs font-bold text-ink opacity-60 group-hover:opacity-100 transition-opacity duration-300">Gx</div>
                  )}
                </div>
              ))}
          </div>
          {/* Crosshair overlay — appears on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-pink-400/30" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-pink-400/30" />
          </div>
        </div>

        {/* Colour swatches — bleed below */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 group-hover:-translate-y-1 transition-transform duration-500 delay-100">
          {swatches.map((c, i) => (
            <div
              key={c}
              className="w-6 h-6 rounded-full border-2 border-white shadow-sm group-hover:scale-110 transition-transform duration-300"
              style={{ backgroundColor: c, transitionDelay: `${i * 40}ms` }}
            />
          ))}
        </div>

        {/* Floating ruler — Z-layer above card */}
        <div className="absolute -top-5 -right-8 w-20 h-5 rounded-md bg-amber-50 border border-amber-200 shadow-sm flex items-center justify-between px-1.5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500 delay-200">
          {[...Array(7)].map((_, i) => (
            <div key={i} className={`w-px bg-amber-300 ${i === 0 || i === 6 ? 'h-3' : 'h-2'}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* 3. DIGITAL MARKETING — live metrics dashboard mockup */
function DigitalMarketingVisual() {
  const bars = [40, 65, 45, 80, 55, 90, 70]
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none px-5">
      {/* Dashboard card */}
      <div className="w-full relative group-hover:-translate-y-2 transition-transform duration-500">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#EAEAE6] overflow-visible group-hover:shadow-[0_12px_40px_rgba(245,158,11,0.18)] transition-shadow duration-500">
          {/* Top metrics row */}
          <div className="flex divide-x divide-[#F0F0EC] border-b border-[#F0F0EC]">
            {[{ label: 'Impressions', val: '48.2K', up: true }, { label: 'Clicks', val: '3.8K', up: true }, { label: 'Conv.', val: '12.4%', up: false }].map((m, i) => (
              <div key={i} className="flex-1 px-3 py-2.5">
                <div className="text-[9px] text-slate-400 uppercase tracking-widest mb-0.5">{m.label}</div>
                <div className="flex items-end gap-1">
                  <span className="text-sm font-semibold text-ink">{m.val}</span>
                  <span className={`text-[9px] font-bold mb-0.5 ${m.up ? 'text-emerald-500' : 'text-rose-500'}`}>{m.up ? '↑' : '↓'}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="px-4 pt-3 pb-2">
            <div className="flex items-end gap-1.5 h-10">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-amber-100 rounded-t-sm group-hover:bg-amber-400 transition-colors duration-300 relative overflow-hidden"
                  style={{ height: `${h}%`, transitionDelay: `${i * 40}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/0 to-white/20" />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-1">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <div key={i} className="flex-1 text-center text-[8px] text-slate-300">{d}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating notification — bleeds above, z-axis pop */}
        <div className="absolute -top-4 -right-2 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-[#EAEAE6] px-3 py-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500 delay-200 z-20">
          <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </div>
          <div>
            <div className="text-[9px] text-slate-400 uppercase leading-none">New lead</div>
            <div className="text-[10px] font-semibold text-ink">+12 today</div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* 4. SOFTWARE DEVELOPMENT — code editor mockup with typing effect */
function SoftwareDevVisual() {
  const lines = [
    { indent: 0, tokens: [{ t: 'const', c: 'text-violet-500' }, { t: ' api ', c: 'text-ink' }, { t: '=', c: 'text-slate-400' }, { t: ' new', c: 'text-blue-500' }, { t: ' Galaxy', c: 'text-emerald-600' }, { t: '()', c: 'text-slate-400' }] },
    { indent: 0, tokens: [{ t: 'api', c: 'text-ink' }, { t: '.connect(', c: 'text-slate-400' }, { t: '"prod"', c: 'text-amber-600' }, { t: ')', c: 'text-slate-400' }] },
    { indent: 1, tokens: [{ t: '.then(', c: 'text-slate-400' }, { t: 'res', c: 'text-blue-400' }, { t: ' => {', c: 'text-slate-400' }] },
    { indent: 2, tokens: [{ t: 'console', c: 'text-ink' }, { t: '.log(', c: 'text-slate-400' }, { t: 'res', c: 'text-blue-400' }, { t: '.data)', c: 'text-slate-400' }] },
    { indent: 1, tokens: [{ t: '}) // ✓ done', c: 'text-slate-400' }] },
  ]
  return (
    <div className="absolute inset-0 flex items-end justify-center pb-0 overflow-hidden pointer-events-none select-none">
      {/* Editor window — bleeds bottom */}
      <div className="w-[92%] translate-y-5 group-hover:translate-y-1 transition-transform duration-500 ease-out drop-shadow-[0_8px_28px_rgba(0,0,0,0.14)] group-hover:drop-shadow-[0_16px_48px_rgba(16,185,129,0.18)]">
        {/* Title bar */}
        <div className="bg-[#EAEAE6] rounded-t-xl px-4 py-2 flex items-center gap-3 border-x border-t border-ink/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" /><div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" /><div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <span className="text-[10px] text-ink/40 ml-auto">galaxy_api.ts</span>
        </div>
        {/* Code body */}
        <div className="bg-white rounded-b-none px-4 py-3 text-[10px] leading-[1.7] space-y-0 border-x border-ink/5">
          {lines.map((line, li) => (
            <div
              key={li}
              className="opacity-40 group-hover:opacity-100 transition-opacity duration-300 flex"
              style={{ transitionDelay: `${li * 80}ms`, paddingLeft: `${line.indent * 12}px` }}
            >
              <span className="text-ink/20 w-4 mr-3 text-right select-none">{li + 1}</span>
              {line.tokens.map((tok, ti) => (
                <span key={ti} className={tok.c}>{tok.t}</span>
              ))}
            </div>
          ))}
          {/* Blinking cursor */}
          <div className="flex" style={{ paddingLeft: '48px' }}>
            <span className="text-ink/20 w-4 mr-3 text-right">6</span>
            <span className="w-1.5 h-4 bg-emerald-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 delay-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* 5. WHATSAPP CRM AUTOMATION — chat UI with automated message flow */
function WhatsAppCRMVisual() {
  const messages = [
    { side: 'left', text: 'Hi! Interested in your product 👋', delay: 0 },
    { side: 'right', text: 'Welcome! Which plan suits you best?', delay: 120 },
    { side: 'left', text: 'What are the pricing options?', delay: 240 },
    { side: 'right', text: '⚡ Auto-reply sent in 0.3s via Automation', delay: 360, auto: true },
  ]
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none px-4">
      {/* Phone frame — rises slightly */}
      <div className="relative w-44 group-hover:-translate-y-2 transition-transform duration-500">
        {/* Phone chrome */}
        <div className="bg-[#EAEAE6] rounded-3xl p-1 shadow-[0_8px_32px_rgba(0,0,0,0.1)] group-hover:shadow-[0_16px_48px_rgba(37,211,102,0.15)] transition-shadow duration-500 border border-ink/10">
          {/* Notch */}
          <div className="flex justify-center pt-1 pb-0.5">
            <div className="w-12 h-1.5 bg-black/40 rounded-full" />
          </div>
          {/* Screen */}
          <div className="bg-[#ECE5DD] rounded-2xl overflow-hidden">
            {/* WA header */}
            <div className="bg-[#075E54] px-3 py-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-300 border border-ink/10" />
              <div>
                <div className="text-[9px] font-bold text-white">Galaxy Automation Bot</div>
                <div className="text-[7px] text-emerald-200">● online</div>
              </div>
            </div>
            {/* Messages */}
            <div className="p-2 space-y-1.5 min-h-[80px]">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.side === 'right' ? 'justify-end' : 'justify-start'} opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0`}
                  style={{ transitionDelay: `${m.delay}ms` }}
                >
                  <div className={`rounded-xl px-2 py-1 max-w-[80%] shadow-sm ${m.side === 'right'
                    ? m.auto
                      ? 'bg-emerald-100 border border-emerald-300'
                      : 'bg-[#DCF8C6]'
                    : 'bg-white'
                    }`}>
                    <p className={`text-[8px] leading-tight ${m.auto ? 'text-emerald-700 font-semibold' : 'text-[#111]'}`}>
                      {m.text}
                    </p>
                    {m.side === 'right' && (
                      <div className="flex justify-end mt-0.5">
                        <span className="text-[7px] text-[#999]">{m.auto ? '🤖 auto' : '✓✓'}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Input bar */}
            <div className="bg-[#F0F0F0] px-2 py-1.5 flex items-center gap-1.5 border-t border-black/5">
              <div className="flex-1 bg-white rounded-full h-4 border border-black/10" />
              <div className="w-4 h-4 rounded-full bg-[#075E54] flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" /></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Floating automation badge — z-axis above phone */}
        <div className="absolute -top-3 -right-6 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-[#EAEAE6] px-2.5 py-1.5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500 delay-200 z-20">
          <div className="text-[8px] text-slate-400 uppercase mb-0.5">Auto-replied</div>
          <div className="text-[11px] font-bold text-emerald-600">1,240 msgs</div>
        </div>

        {/* Floating CRM pipeline badge */}
        <div className="absolute -bottom-2 -left-8 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-[#EAEAE6] px-2.5 py-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all duration-500 delay-500 z-20">
          <div className="text-[8px] text-slate-400 uppercase mb-0.5">Pipeline</div>
          <div className="flex items-center gap-1">
            {['bg-blue-400', 'bg-amber-400', 'bg-emerald-400'].map((c, i) => (
              <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
            ))}
            <span className="text-[9px] text-ink ml-0.5">3 stages</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   SERVICE DATA
══════════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    id: 'website-dev',
    title: 'Website Development',
    tag: 'Web',
    tagColor: 'bg-blue-50 text-blue-600 border-blue-100',
    dot: 'bg-blue-500',
    description: 'Responsive, conversion-optimised websites for every business type — from clean landing pages to full e-commerce platforms built to perform.',
    features: ['Landing pages', 'E-commerce', 'CMS integration'],
    accentBtn: 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20',
    Visual: WebDevVisual,
    visualBg: 'bg-blue-50/60',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    tag: 'Design',
    tagColor: 'bg-pink-50 text-pink-600 border-pink-100',
    dot: 'bg-pink-500',
    description: 'Brand identity, social media creatives, pitch decks, and print materials — every visual asset your business needs to look world-class.',
    features: ['Brand identity', 'Social creatives', 'Print & pitch decks'],
    accentBtn: 'bg-pink-600 hover:bg-pink-700 shadow-pink-600/20',
    Visual: GraphicDesignVisual,
    visualBg: 'bg-pink-50/60',
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    tag: 'Marketing',
    tagColor: 'bg-amber-50 text-amber-600 border-amber-100',
    dot: 'bg-amber-500',
    description: 'Performance marketing — SEO, Google Ads, Meta campaigns, and data-backed lead generation strategies that grow your pipeline.',
    features: ['SEO & content', 'Paid ads', 'Lead generation'],
    accentBtn: 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/20',
    Visual: DigitalMarketingVisual,
    visualBg: 'bg-amber-50/60',
  },
  {
    id: 'software-development',
    title: 'Software Development',
    tag: 'Software',
    tagColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    dot: 'bg-emerald-500',
    description: 'Custom software, mobile apps, CRM systems, and workflow automation tools precisely engineered for your business processes.',
    features: ['Mobile apps', 'CRM & ERP', 'Automation tools'],
    accentBtn: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20',
    Visual: SoftwareDevVisual,
    visualBg: 'bg-emerald-50/60',
  },
  {
    id: 'whatsapp-crm',
    title: 'WhatsApp Bulk Messaging & CRM',
    tag: 'Marketing',
    tagColor: 'bg-green-50 text-green-600 border-green-100',
    dot: 'bg-[#25D366]',
    description: 'Scale your business with WhatsApp bulk messaging and automated sales pipelines — instant auto-replies, broadcast campaigns, lead qualification bots, and full customer management integration.',
    features: ['Bulk Messaging', 'Auto-reply bots', 'Lead qualification'],
    accentBtn: 'bg-[#25D366] hover:bg-[#1fba59] shadow-[#25D366]/20',
    Visual: WhatsAppCRMVisual,
    visualBg: 'bg-green-50/60',
    featured: true,
  },
]

/* ══════════════════════════════════════════════════════════════
   SERVICE CARD
══════════════════════════════════════════════════════════════ */
function ServiceCard({
  service, delay, wide = false,
}: { service: typeof SERVICES[0]; delay: number; wide?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && ref.current?.classList.add('visible'),
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`animate-on-scroll group flex flex-col bg-white rounded-2xl border border-[#EAEAE6] overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)] transition-all duration-350 ease-out ${wide ? 'md:col-span-2 lg:col-span-2' : ''} ${service.featured ? 'ring-1 ring-[#25D366]/20' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* ── Visual zone — fixed height, overflow:visible for bleeds ── */}
      <div className={`relative h-52 ${service.visualBg} border-b border-[#EAEAE6] overflow-visible`}>
        {/* Subtle dot-grid texture */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        {service.featured && (
          <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-[#25D366]/25 rounded-full px-2.5 py-1 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-[9px] font-bold text-green-700 uppercase tracking-wider">New service</span>
          </div>
        )}
        <service.Visual />
      </div>

      {/* ── Content zone ── */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
        {/* Tag + arrow */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full border ${service.tagColor}`}>
            {service.tag}
          </span>
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            className="text-slate-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-slate-500"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        <h3 className="britti-special font-semibold text-[#0A0A0F] text-[15px] leading-snug mb-2">
          {service.title}
        </h3>
        <p className="text-[#6B6B8A] text-[13px] leading-relaxed mb-4 flex-1">
          {service.description}
        </p>

        {/* Feature chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {service.features.map((f) => (
            <span key={f} className="text-[11px] text-slate-500 bg-[#F5F4F0] border border-[#EAEAE6] px-2.5 py-1 rounded-full font-medium">
              {f}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#F0F0EC] mb-5" />

        {/* CTA */}
        <a
          href={waLink(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl text-white text-[13px] font-semibold ${service.accentBtn} shadow-sm hover:shadow-md transition-all duration-300 focus-visible:outline-none`}
        >
          <WAIcon size={14} />
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   SECTION
══════════════════════════════════════════════════════════════ */
export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    )
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    els?.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Layout: 3 cols top row (Website, Design, Marketing), then 2 wide bottom (Software + WhatsApp)
  const topRow = SERVICES.slice(0, 3)
  const bottomRow = SERVICES.slice(3)

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-cream-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="animate-on-scroll flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <div className="tag-chip bg-ink/5 text-ink border border-ink/10 inline-flex mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              Our Services
            </div>
            <h2 className="britti-special text-4xl md:text-5xl text-ink leading-[1.1] tracking-tighter">
              More than just data.
              <br />
              <span className="italic">We build, market</span>
              <br />
              <span className="italic text-accent">&amp; automate.</span>
            </h2>
          </div>
          <p className="text-slate-light text-base max-w-sm leading-relaxed lg:text-right lg:pb-1">
            Galaxy Connect is a full-service digital partner. Alongside premium lead databases, we deliver five high-impact services to grow your business end-to-end.
          </p>
        </div>

        {/* ── Top row — 3 equal cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {topRow.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={i * 80} />
          ))}
        </div>

        {/* ── Bottom row — 2 wider cards (Software + WhatsApp CRM) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {bottomRow.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={(i + 3) * 80} />
          ))}
        </div>

      </div>
    </section>
  )
}