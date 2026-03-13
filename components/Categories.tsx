'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { ALL_LEAD_CATEGORIES, palette, buildWALink } from '@/lib/categories'

/* ── WhatsApp icon ─────────────────────────────────────────── */
function WAIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

/* ══════════════════════════════════════════════════════════════
   10 SVG ARTWORKS — one per category (index 0–9)
══════════════════════════════════════════════════════════════ */

/* 0 — Real Estate */
const RealEstateArt = () => (
  <svg viewBox="0 0 300 154" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="re-sky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#CCFBF1" /><stop offset="1" stopColor="#F0FDFA" /></linearGradient>
      <linearGradient id="re-b1" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#0D9488" /><stop offset="1" stopColor="#14B8A6" /></linearGradient>
    </defs>
    <rect width="300" height="154" fill="url(#re-sky)" />
    <rect x="0" y="122" width="300" height="32" fill="#CCFBF1" />
    <rect x="16" y="76" width="28" height="46" fill="#14B8A6" opacity=".45" rx="3" />
    <rect x="50" y="56" width="32" height="66" fill="url(#re-b1)" rx="3" />
    <rect x="88" y="84" width="24" height="38" fill="#0D9488" opacity=".35" rx="3" />
    <rect x="118" y="44" width="40" height="78" fill="#14B8A6" rx="4" />
    {[[122, 54, 8, 7], [133, 54, 8, 7], [122, 68, 8, 7], [133, 68, 8, 7], [122, 82, 8, 7], [133, 82, 8, 7], [122, 96, 8, 7], [133, 96, 8, 7]].map(([x, y, w, h], i) => <rect key={i} x={x} y={y} width={w} height={h} fill="white" opacity=".72" rx="1.5" />)}
    <rect x="164" y="68" width="30" height="54" fill="#0D9488" opacity=".45" rx="3" />
    <rect x="200" y="82" width="26" height="40" fill="#14B8A6" opacity=".35" rx="3" />
    <rect x="232" y="62" width="34" height="60" fill="#0D9488" rx="3" />
    <path d="M242 44 L258 22 L274 44" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="258" y1="22" x2="258" y2="62" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="138" cy="26" r="9" fill="#0D9488" />
    <circle cx="138" cy="24" r="4" fill="white" />
    <path d="M138 32 L138 38" stroke="#0D9488" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

/* 1 — Automobile */
const AutomobileArt = () => (
  <svg viewBox="0 0 300 154" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="au-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F1F5F9" /><stop offset="1" stopColor="#E2E8F0" /></linearGradient>
      <linearGradient id="au-car" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#475569" /><stop offset="1" stopColor="#1E293B" /></linearGradient>
    </defs>
    <rect width="300" height="154" fill="url(#au-bg)" />
    {[[10, 76, 48], [10, 88, 64], [10, 100, 38], [10, 64, 52]].map(([x, y, w], i) => <line key={i} x1={x} y1={y} x2={x + w} y2={y} stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" opacity=".8" />)}
    <rect x="0" y="118" width="300" height="36" fill="#E2E8F0" />
    <line x1="0" y1="128" x2="300" y2="128" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="18 12" />
    <path d="M58 118 L58 88 Q60 74 74 70 L112 62 Q128 56 148 56 L194 56 Q210 56 222 64 L244 74 L256 82 L258 96 L258 118 Z" fill="url(#au-car)" />
    <path d="M114 68 L115 62 Q128 56 148 56 L192 56 L210 68 Z" fill="#93C5FD" opacity=".6" />
    <path d="M128 74 L130 65 L164 65 L164 74 Z" fill="#BFDBFE" opacity=".7" />
    <path d="M172 74 L172 65 L204 70 L205 74 Z" fill="#BFDBFE" opacity=".7" />
    <circle cx="104" cy="119" r="18" fill="#1E293B" />
    <circle cx="104" cy="119" r="11" fill="#475569" />
    <circle cx="104" cy="119" r="5" fill="#94A3B8" />
    <circle cx="210" cy="119" r="18" fill="#1E293B" />
    <circle cx="210" cy="119" r="11" fill="#475569" />
    <circle cx="210" cy="119" r="5" fill="#94A3B8" />
    <ellipse cx="259" cy="87" rx="5" ry="7" fill="#FCD34D" opacity=".9" />
    <path d="M264 84 L282 78 M264 91 L282 96" stroke="#FCD34D" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
  </svg>
)

/* 2 — Education */
const EducationArt = () => (
  <svg viewBox="0 0 300 154" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="ed-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F5F3FF" /><stop offset="1" stopColor="#EDE9FE" /></linearGradient>
    </defs>
    <rect width="300" height="154" fill="url(#ed-bg)" />
    <path d="M62 128 L62 46 Q62 42 66 40 L148 40 L148 128 Z" fill="#7C3AED" opacity=".12" />
    <path d="M238 128 L238 46 Q238 42 234 40 L152 40 L152 128 Z" fill="#7C3AED" opacity=".08" />
    <rect x="148" y="40" width="9" height="88" fill="#6D28D9" opacity=".55" rx="1" />
    {[54, 66, 78, 90, 102, 114].map((y, i) => <line key={i} x1="74" y1={y} x2="141" y2={y} stroke="#8B5CF6" strokeWidth="1.5" opacity=".28" strokeLinecap="round" />)}
    {[54, 66, 78, 90].map((y, i) => <line key={i} x1="166" y1={y} x2="226" y2={y} stroke="#8B5CF6" strokeWidth="1.5" opacity=".22" strokeLinecap="round" />)}
    <rect x="125" y="14" width="55" height="11" fill="#7C3AED" rx="2" />
    <path d="M153 25 L173 36 L153 47 L133 36 Z" fill="#6D28D9" />
    <line x1="173" y1="36" x2="173" y2="50" stroke="#6D28D9" strokeWidth="2" />
    <circle cx="173" cy="53" r="3.5" fill="#F59E0B" />
    <line x1="153" y1="14" x2="153" y2="10" stroke="#6D28D9" strokeWidth="2" />
    <circle cx="153" cy="10" r="3.5" fill="#F59E0B" />
    {[[262, 30, 6], [278, 58, 4.5], [250, 66, 5.5], [290, 46, 5]].map(([cx, cy, r], i) => <polygon key={i} points={`${cx},${cy - r} ${cx + r * .35},${cy - r * .35} ${cx + r},${cy - r * .1} ${cx + r * .5},${cy + r * .45} ${cx + r * .6},${cy + r} ${cx},${cy + r * .6} ${cx - r * .6},${cy + r} ${cx - r * .5},${cy + r * .45} ${cx - r},${cy - r * .1} ${cx - r * .35},${cy - r * .35}`} fill="#A78BFA" opacity=".55" />)}
    {[[26, 42, 3.5], [288, 118, 5], [20, 108, 2.5]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill="#DDD6FE" />)}
  </svg>
)

/* 3 — Finance */
const FinanceArt = () => (
  <svg viewBox="0 0 300 154" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="fi-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F0FDF4" /><stop offset="1" stopColor="#DCFCE7" /></linearGradient>
      <linearGradient id="fi-bar" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#22C55E" /><stop offset="1" stopColor="#16A34A" /></linearGradient>
    </defs>
    <rect width="300" height="154" fill="url(#fi-bg)" />
    {[40, 60, 80, 100, 120].map((y, i) => <line key={i} x1="28" y1={y} x2="216" y2={y} stroke="#BBF7D0" strokeWidth="1" />)}
    {[[40, 56, 82], [66, 40, 90], [92, 66, 62], [118, 30, 106], [144, 48, 76], [170, 22, 116]].map(([x, h, barH], i) => <rect key={i} x={x} y={barH} width="20" height={130 - barH} fill="url(#fi-bar)" opacity={.48 + i * .07} rx="3" />)}
    <polyline points="50,90 76,78 102,86 128,55 154,63 180,30" stroke="#15803D" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {[[50, 90], [76, 78], [102, 86], [128, 55], [154, 63], [180, 30]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4.5" fill="white" stroke="#15803D" strokeWidth="2" />)}
    {[0, 1, 2].map((i) => <ellipse key={i} cx="258" cy={120 - i * 11} rx="23" ry="8.5" fill={i === 2 ? "#22C55E" : "#16A34A"} opacity={.68 + i * .1} />)}
    <text x="258" y="101" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="serif">₹</text>
    <path d="M252 48 L258 34 L264 48" stroke="#15803D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="258" y1="34" x2="258" y2="60" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

/* 4 — Business */
const BusinessArt = () => (
  <svg viewBox="0 0 300 154" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="bi-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#EFF6FF" /><stop offset="1" stopColor="#DBEAFE" /></linearGradient>
    </defs>
    <rect width="300" height="154" fill="url(#bi-bg)" />
    <rect x="120" y="12" width="60" height="30" rx="8" fill="#3B82F6" />
    <circle cx="142" cy="27" r="7" fill="white" opacity=".8" />
    <rect x="136" y="34" width="16" height="6" fill="white" opacity=".6" rx="2" />
    <line x1="150" y1="42" x2="150" y2="56" stroke="#93C5FD" strokeWidth="2" />
    <line x1="150" y1="56" x2="72" y2="56" stroke="#93C5FD" strokeWidth="2" />
    <line x1="150" y1="56" x2="228" y2="56" stroke="#93C5FD" strokeWidth="2" />
    <line x1="72" y1="56" x2="72" y2="64" stroke="#93C5FD" strokeWidth="2" />
    <line x1="228" y1="56" x2="228" y2="64" stroke="#93C5FD" strokeWidth="2" />
    <rect x="42" y="64" width="60" height="28" rx="7" fill="#60A5FA" opacity=".8" />
    <rect x="198" y="64" width="60" height="28" rx="7" fill="#60A5FA" opacity=".8" />
    <circle cx="64" cy="78" r="7" fill="white" opacity=".8" />
    <circle cx="220" cy="78" r="7" fill="white" opacity=".8" />
    <path d="M86 126 Q98 114 110 118 L126 112 Q136 108 141 114 L155 120 Q162 126 157 132 L147 136 Q136 140 124 136 L111 129 Q103 125 94 129 L86 126Z" fill="none" stroke="#3B82F6" strokeWidth="2" />
    <rect x="222" y="106" width="46" height="34" rx="5" fill="#1D4ED8" opacity=".08" stroke="#3B82F6" strokeWidth="1.5" />
    <path d="M233 106 L233 101 Q233 98 237 98 L254 98 Q258 98 258 101 L258 106" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
    <line x1="222" y1="118" x2="268" y2="118" stroke="#93C5FD" strokeWidth="1.5" />
    <rect x="240" y="114" width="10" height="8" rx="2" fill="#3B82F6" opacity=".5" />
    {[[20, 32, 3], [26, 84, 2.5], [286, 84, 3], [290, 138, 2]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill="#BFDBFE" />)}
  </svg>
)

/* 5 — Home & Lifestyle */
const HomeArt = () => (
  <svg viewBox="0 0 300 154" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="ho-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFF7ED" /><stop offset="1" stopColor="#FFEDD5" /></linearGradient>
      <linearGradient id="ho-r" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#EA580C" /><stop offset="1" stopColor="#F97316" /></linearGradient>
    </defs>
    <rect width="300" height="154" fill="url(#ho-bg)" />
    <circle cx="266" cy="36" r="20" fill="#FCD34D" opacity=".45" />
    <circle cx="266" cy="36" r="13" fill="#FBBF24" opacity=".65" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => { const r = a * Math.PI / 180; return <line key={i} x1={266 + 18 * Math.cos(r)} y1={36 + 18 * Math.sin(r)} x2={266 + 26 * Math.cos(r)} y2={36 + 26 * Math.sin(r)} stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" /> })}
    <path d="M50 128 L50 74 L112 30 L174 74 L174 128 Z" fill="#FED7AA" stroke="#F97316" strokeWidth="1.5" />
    <path d="M36 80 L112 26 L188 80" fill="url(#ho-r)" stroke="#C2410C" strokeWidth="1.5" />
    <rect x="98" y="97" width="28" height="31" rx="14" fill="#C2410C" opacity=".38" />
    <circle cx="120" cy="113" r="2.5" fill="#C2410C" />
    <rect x="60" y="80" width="25" height="22" rx="4" fill="#BAE6FD" stroke="#7DD3FC" strokeWidth="1" />
    <line x1="72.5" y1="80" x2="72.5" y2="102" stroke="#7DD3FC" strokeWidth="1" />
    <line x1="60" y1="91" x2="85" y2="91" stroke="#7DD3FC" strokeWidth="1" />
    <rect x="139" y="80" width="25" height="22" rx="4" fill="#BAE6FD" stroke="#7DD3FC" strokeWidth="1" />
    <line x1="151.5" y1="80" x2="151.5" y2="102" stroke="#7DD3FC" strokeWidth="1" />
    <line x1="139" y1="91" x2="164" y2="91" stroke="#7DD3FC" strokeWidth="1" />
    <rect x="192" y="90" width="72" height="28" rx="5" fill="#F97316" opacity=".18" stroke="#FB923C" strokeWidth="1.5" />
    <rect x="192" y="84" width="15" height="18" rx="4" fill="#FB923C" opacity=".38" />
    <rect x="249" y="84" width="15" height="18" rx="4" fill="#FB923C" opacity=".38" />
    <line x1="228" y1="128" x2="228" y2="64" stroke="#86EFAC" strokeWidth="2" />
    <ellipse cx="215" cy="74" rx="12" ry="8" fill="#4ADE80" opacity=".48" />
    <ellipse cx="240" cy="69" rx="11" ry="8" fill="#4ADE80" opacity=".38" />
    <ellipse cx="228" cy="62" rx="10" ry="7" fill="#22C55E" opacity=".48" />
  </svg>
)

/* 6 — Consumer Interest */
const ConsumerArt = () => (
  <svg viewBox="0 0 300 154" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="co-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFF1F2" /><stop offset="1" stopColor="#FFE4E6" /></linearGradient>
    </defs>
    <rect width="300" height="154" fill="url(#co-bg)" />
    <rect x="18" y="66" width="60" height="10" rx="5" fill="#FB7185" opacity=".7" />
    <rect x="12" y="56" width="14" height="28" rx="5" fill="#E11D48" opacity=".48" />
    <rect x="72" y="56" width="14" height="28" rx="5" fill="#E11D48" opacity=".48" />
    <path d="M112 46 L148 30 L158 32 Q164 35 158 41 L143 43 L138 62 L128 62 L131 43 L116 46 L113 51 L107 51 L109 46 Z" fill="#FB7185" opacity=".7" />
    <circle cx="208" cy="42" r="17" fill="none" stroke="#FB7185" strokeWidth="4" opacity=".58" />
    <circle cx="226" cy="42" r="17" fill="none" stroke="#E11D48" strokeWidth="4" opacity=".48" />
    <circle cx="217" cy="42" r="5" fill="#FCA5A5" opacity=".58" />
    <path d="M28 120 L68 78" stroke="#FB7185" strokeWidth="3" strokeLinecap="round" />
    <path d="M28 120 L22 113 L37 113 Z" fill="#E11D48" opacity=".58" />
    {[[54, 98, 6], [82, 82, 8], [104, 104, 5], [44, 88, 7], [78, 116, 4.5]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill={['#FCA5A5', '#FCD34D', '#86EFAC', '#93C5FD', '#DDD6FE'][i]} opacity=".58" />)}
    <path d="M270 96 C270 91 264 85 258 89 C252 85 246 91 246 96 C246 107 258 118 258 118 C258 118 270 107 270 96Z" fill="#FB7185" opacity=".48" />
    {[[148, 98, 4], [168, 112, 3.5], [184, 90, 5.5], [282, 62, 4]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill="#FCA5A5" opacity=".48" />)}
  </svg>
)

/* 7 — Jewellers */
const JewellersArt = () => (
  <svg viewBox="0 0 300 154" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="je-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFFBEB" /><stop offset="1" stopColor="#FEF3C7" /></linearGradient>
      <linearGradient id="je-ring" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F59E0B" /><stop offset="1" stopColor="#D97706" /></linearGradient>
    </defs>
    <rect width="300" height="154" fill="url(#je-bg)" />
    {/* Diamond shape */}
    <polygon points="150,18 190,58 150,110 110,58" fill="#FCD34D" opacity=".3" stroke="#F59E0B" strokeWidth="1.5" />
    <polygon points="150,18 190,58 150,68 110,58" fill="#FCD34D" opacity=".5" stroke="#F59E0B" strokeWidth="1" />
    <polygon points="110,58 150,68 150,110" fill="#D97706" opacity=".25" stroke="#F59E0B" strokeWidth="1" />
    <polygon points="150,68 190,58 150,110" fill="#D97706" opacity=".35" stroke="#F59E0B" strokeWidth="1" />
    {/* Shine */}
    <line x1="136" y1="30" x2="128" y2="22" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" opacity=".7" />
    <line x1="156" y1="24" x2="152" y2="14" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" opacity=".6" />
    {/* Ring left */}
    <ellipse cx="62" cy="90" rx="32" ry="32" fill="none" stroke="url(#je-ring)" strokeWidth="8" opacity=".35" />
    <ellipse cx="62" cy="90" rx="24" ry="24" fill="none" stroke="#FCD34D" strokeWidth="3" opacity=".4" />
    <circle cx="62" cy="62" r="7" fill="#FCD34D" opacity=".6" />
    {/* Ring right */}
    <ellipse cx="238" cy="90" rx="32" ry="32" fill="none" stroke="url(#je-ring)" strokeWidth="8" opacity=".35" />
    <ellipse cx="238" cy="90" rx="24" ry="24" fill="none" stroke="#FCD34D" strokeWidth="3" opacity=".4" />
    <circle cx="238" cy="62" r="7" fill="#FCD34D" opacity=".6" />
    {/* Sparkles */}
    {[[30, 30, 5], [270, 35, 5], [20, 120, 4], [280, 118, 4], [150, 130, 4]].map(([cx, cy, r], i) => (
      <g key={i}>
        <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
        <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
      </g>
    ))}
  </svg>
)

/* 8 — Garment & Textile */
const GarmentArt = () => (
  <svg viewBox="0 0 300 154" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="ga-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#EEF2FF" /><stop offset="1" stopColor="#E0E7FF" /></linearGradient>
    </defs>
    <rect width="300" height="154" fill="url(#ga-bg)" />
    {/* Fabric swatch left */}
    <rect x="20" y="30" width="80" height="100" rx="6" fill="#6366F1" opacity=".12" stroke="#6366F1" strokeWidth="1" />
    {[40, 52, 64, 76, 88, 100, 112].map((y, i) => <line key={i} x1="20" y1={y} x2="100" y2={y} stroke="#6366F1" strokeWidth="1" opacity=".2" />)}
    {[36, 52, 68, 84].map((x, i) => <line key={i} x1={x} y1="30" x2={x} y2="130" stroke="#6366F1" strokeWidth="1" opacity=".2" />)}
    {/* Saree drape */}
    <path d="M110 130 Q130 60 190 40 Q220 32 250 44 L250 70 Q220 58 190 66 Q130 86 110 154Z" fill="#6366F1" opacity=".18" />
    <path d="M115 130 Q135 65 192 46 Q220 38 248 50" stroke="#818CF8" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Border pattern on saree */}
    {[0, 1, 2, 3, 4, 5, 6].map((i) => {
      const t = i / 6; const x = 115 + t * (248 - 115); const y = 130 + t * (50 - 130)
      return <circle key={i} cx={x} cy={y} r="3" fill="#6366F1" opacity=".5" />
    })}
    {/* Needle & thread */}
    <line x1="240" y1="80" x2="240" y2="140" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="240" cy="78" rx="5" ry="8" fill="#818CF8" opacity=".7" />
    <ellipse cx="242" cy="80" rx="2" ry="3" fill="white" opacity=".8" />
    <path d="M240 140 Q260 130 270 115 Q260 100 240 110" stroke="#A5B4FC" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Colour swatches */}
    {['#6366F1', '#818CF8', '#E879F9', '#F472B6', '#34D399'].map((c, i) => (
      <rect key={i} x={20 + i * 12} y="136" width="10" height="14" rx="2" fill={c} opacity=".7" />
    ))}
  </svg>
)

/* 9 — Restaurants & Food */
const RestaurantArt = () => (
  <svg viewBox="0 0 300 154" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="re-fbg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFFBEB" /><stop offset="1" stopColor="#FEF3C7" /></linearGradient>
    </defs>
    <rect width="300" height="154" fill="url(#re-fbg)" />
    {/* Chef hat */}
    <ellipse cx="150" cy="52" rx="34" ry="28" fill="#F59E0B" opacity=".2" />
    <rect x="120" y="52" width="60" height="30" rx="4" fill="#F59E0B" opacity=".25" />
    <ellipse cx="150" cy="52" rx="34" ry="28" fill="none" stroke="#F59E0B" strokeWidth="2" />
    <rect x="120" y="52" width="60" height="30" rx="4" fill="none" stroke="#F59E0B" strokeWidth="2" />
    {/* Stripes on hat */}
    {[128, 142, 156, 168].map((x, i) => <line key={i} x1={x} y1="52" x2={x} y2="82" stroke="#F59E0B" strokeWidth="1.2" opacity=".35" />)}
    {/* Plate */}
    <ellipse cx="150" cy="120" rx="52" ry="18" fill="#FCD34D" opacity=".2" stroke="#F59E0B" strokeWidth="1.5" />
    <ellipse cx="150" cy="118" rx="38" ry="12" fill="#FCD34D" opacity=".15" stroke="#F59E0B" strokeWidth="1" />
    {/* Fork */}
    <line x1="86" y1="70" x2="86" y2="130" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
    {[80, 86, 92].map((x, i) => <line key={i} x1={x} y1="70" x2={x} y2="88" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />)}
    <path d="M80 88 Q86 96 92 88" stroke="#D97706" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Knife */}
    <line x1="214" y1="70" x2="214" y2="130" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M214 70 Q224 80 218 92 L214 92Z" fill="#D97706" opacity=".5" />
    {/* Steam */}
    {[[136, 60], [150, 56], [164, 60]].map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} Q${x - 4} ${y - 8} ${x} ${y - 16} Q${x + 4} ${y - 24} ${x} ${y - 32}`} stroke="#F59E0B" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".4" />
    ))}
    {/* Food items */}
    {([[38, 50, 8, '#FB923C'], [262, 50, 8, '#FB923C'], [32, 106, 6, '#FCD34D'], [268, 106, 6, '#FCD34D']] as [number, number, number, string][]).map(([cx, cy, r, c], i) => (
      <circle key={i} cx={cx} cy={cy} r={r} fill={c} opacity=".4" />
    ))}
  </svg>
)

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
          <span className={`font-display text-sm font-bold leading-none ${p.record}`}>{cat.records}</span>
          <span className="block text-[8px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Records</span>
        </div>
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm border border-white/60">
          <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
          <span className="text-[9px] font-mono font-bold uppercase tracking-[0.12em] text-slate-500">{cat.sector}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
        <div className={`h-0.5 w-7 rounded-full ${p.bar} mb-3 group-hover:w-14 transition-all duration-500`} />
        <h3 className="font-body font-bold text-[#0A0A0F] text-[14px] leading-snug mb-2">{cat.title}</h3>
        <ul className="space-y-1.5 mb-3 flex-1">
          {cat.subItems.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className={`w-1 h-1 rounded-full flex-shrink-0 ${p.itemDot}`} />
              <span className="text-[11.5px] text-[#4A4A6A] leading-tight">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[10px] text-slate-400 font-mono mb-4 leading-relaxed">
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
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
        </button>

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
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
        </button>
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
              <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-widest">Lead Categories</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#0A0A0F] leading-[1.08] tracking-tight">
              {ALL_LEAD_CATEGORIES.length} Premium Lead
              <br />
              <span className="italic" style={{
                background: 'linear-gradient(135deg,#3B82F6 0%,#6366F1 50%,#8B5CF6 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Databases</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <p className="text-[#6B6B8A] text-sm leading-relaxed max-w-xs lg:text-right">
              Verified, 3-month updated Excel files. Each card lists exactly what's included.
            </p>
            <Link href="/categories" className="inline-flex items-center gap-2 text-[13px] font-semibold text-blue-600 hover:text-blue-700 transition-colors group">
              View all &amp; filter by sector
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
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
                  <span className="text-[12px] font-mono text-slate-500 font-semibold">{ALL_LEAD_CATEGORIES.length} total databases</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-[#0A0A0F] mb-2">
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
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
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