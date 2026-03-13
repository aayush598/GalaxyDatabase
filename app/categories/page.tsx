'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ALL_LEAD_CATEGORIES, palette, buildWALink } from '@/lib/categories'

function WAIcon({ size = 15 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    )
}

/* ── SVG Arts (all 10) ──────────────────────────────────────── */
const RealEstateArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="p0-sky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#CCFBF1" /><stop offset="1" stopColor="#F0FDFA" /></linearGradient>
            <linearGradient id="p0-b1" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#0D9488" /><stop offset="1" stopColor="#14B8A6" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#p0-sky)" />
        <rect x="0" y="128" width="320" height="34" fill="#CCFBF1" />
        <rect x="18" y="80" width="30" height="48" fill="#14B8A6" opacity=".45" rx="3" />
        <rect x="54" y="60" width="34" height="68" fill="url(#p0-b1)" rx="3" />
        <rect x="95" y="88" width="26" height="40" fill="#0D9488" opacity=".35" rx="3" />
        <rect x="127" y="46" width="42" height="82" fill="#14B8A6" rx="4" />
        {[[131, 56, 9, 7], [143, 56, 9, 7], [131, 70, 9, 7], [143, 70, 9, 7], [131, 84, 9, 7], [143, 84, 9, 7], [131, 98, 9, 7], [143, 98, 9, 7]].map(([x, y, w, h], i) => <rect key={i} x={x} y={y} width={w} height={h} fill="white" opacity=".72" rx="1.5" />)}
        <rect x="176" y="72" width="32" height="56" fill="#0D9488" opacity=".45" rx="3" />
        <rect x="215" y="86" width="28" height="42" fill="#14B8A6" opacity=".35" rx="3" />
        <rect x="250" y="66" width="36" height="62" fill="#0D9488" rx="3" />
        <path d="M260 48 L276 24 L292 48" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="276" y1="24" x2="276" y2="66" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="148" cy="28" r="10" fill="#0D9488" />
        <circle cx="148" cy="25" r="4.5" fill="white" />
        <path d="M148 35 L148 42" stroke="#0D9488" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
)
const AutomobileArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="p1-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F1F5F9" /><stop offset="1" stopColor="#E2E8F0" /></linearGradient>
            <linearGradient id="p1-c" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#475569" /><stop offset="1" stopColor="#1E293B" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#p1-bg)" />
        {[[10, 79, 50], [10, 91, 66], [10, 103, 40], [10, 67, 54]].map(([x, y, w], i) => <line key={i} x1={x} y1={y} x2={x + w} y2={y} stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" opacity=".8" />)}
        <rect x="0" y="124" width="320" height="38" fill="#E2E8F0" />
        <line x1="0" y1="134" x2="320" y2="134" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="20 14" />
        <path d="M62 124 L62 92 Q64 78 78 74 L118 66 Q135 59 156 59 L204 59 Q221 59 233 67 L256 78 L268 86 L270 100 L270 124 Z" fill="url(#p1-c)" />
        <path d="M120 72 L121 66 Q135 59 156 59 L202 59 L221 72 Z" fill="#93C5FD" opacity=".6" />
        <path d="M134 78 L136 69 L170 69 L170 78 Z" fill="#BFDBFE" opacity=".7" />
        <path d="M178 78 L178 69 L212 74 L213 78 Z" fill="#BFDBFE" opacity=".7" />
        <circle cx="110" cy="125" r="19" fill="#1E293B" />
        <circle cx="110" cy="125" r="12" fill="#475569" />
        <circle cx="110" cy="125" r="5" fill="#94A3B8" />
        <circle cx="222" cy="125" r="19" fill="#1E293B" />
        <circle cx="222" cy="125" r="12" fill="#475569" />
        <circle cx="222" cy="125" r="5" fill="#94A3B8" />
        <ellipse cx="271" cy="93" rx="5" ry="7.5" fill="#FCD34D" opacity=".9" />
        <path d="M276 90 L295 84 M276 97 L295 102" stroke="#FCD34D" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
    </svg>
)
const EducationArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs><linearGradient id="p2-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F5F3FF" /><stop offset="1" stopColor="#EDE9FE" /></linearGradient></defs>
        <rect width="320" height="162" fill="url(#p2-bg)" />
        <path d="M64 134 L64 48 Q64 44 68 42 L156 42 L156 134 Z" fill="#7C3AED" opacity=".12" />
        <path d="M256 134 L256 48 Q256 44 252 42 L164 42 L164 134 Z" fill="#7C3AED" opacity=".08" />
        <rect x="156" y="42" width="10" height="92" fill="#6D28D9" opacity=".55" rx="1" />
        {[56, 68, 80, 92, 104, 116].map((y, i) => <line key={i} x1="76" y1={y} x2="148" y2={y} stroke="#8B5CF6" strokeWidth="1.5" opacity=".28" strokeLinecap="round" />)}
        {[56, 68, 80, 92].map((y, i) => <line key={i} x1="172" y1={y} x2="242" y2={y} stroke="#8B5CF6" strokeWidth="1.5" opacity=".22" strokeLinecap="round" />)}
        <rect x="132" y="16" width="56" height="12" fill="#7C3AED" rx="2" />
        <path d="M160 28 L181 40 L160 52 L139 40 Z" fill="#6D28D9" />
        <line x1="181" y1="40" x2="181" y2="54" stroke="#6D28D9" strokeWidth="2" />
        <circle cx="181" cy="57" r="3.5" fill="#F59E0B" />
        <line x1="160" y1="16" x2="160" y2="12" stroke="#6D28D9" strokeWidth="2" />
        <circle cx="160" cy="12" r="3.5" fill="#F59E0B" />
        {[[278, 34, 6], [294, 62, 4.5], [266, 70, 5.5], [305, 50, 5]].map(([cx, cy, r], i) => <polygon key={i} points={`${cx},${cy - r} ${cx + r * .35},${cy - r * .35} ${cx + r},${cy - r * .1} ${cx + r * .5},${cy + r * .45} ${cx + r * .6},${cy + r} ${cx},${cy + r * .6} ${cx - r * .6},${cy + r} ${cx - r * .5},${cy + r * .45} ${cx - r},${cy - r * .1} ${cx - r * .35},${cy - r * .35}`} fill="#A78BFA" opacity=".55" />)}
        {[[26, 44, 3.5], [295, 124, 5], [20, 114, 2.5]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill="#DDD6FE" />)}
    </svg>
)
const FinanceArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="p3-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F0FDF4" /><stop offset="1" stopColor="#DCFCE7" /></linearGradient>
            <linearGradient id="p3-bar" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#22C55E" /><stop offset="1" stopColor="#16A34A" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#p3-bg)" />
        {[42, 62, 82, 102, 122].map((y, i) => <line key={i} x1="30" y1={y} x2="228" y2={y} stroke="#BBF7D0" strokeWidth="1" />)}
        {[[42, 60, 84], [70, 44, 92], [98, 68, 64], [126, 34, 108], [154, 52, 78], [182, 26, 118]].map(([x, h, barH], i) => <rect key={i} x={x} y={barH} width="22" height={132 - barH} fill="url(#p3-bar)" opacity={.48 + i * .07} rx="3" />)}
        <polyline points="53,92 81,80 109,88 137,57 165,64 193,32" stroke="#15803D" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {[[53, 92], [81, 80], [109, 88], [137, 57], [165, 64], [193, 32]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4.5" fill="white" stroke="#15803D" strokeWidth="2" />)}
        {[0, 1, 2].map((i) => <ellipse key={i} cx="278" cy={124 - i * 11} rx="24" ry="9" fill={i === 2 ? "#22C55E" : "#16A34A"} opacity={.68 + i * .1} />)}
        <text x="278" y="105" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="serif">₹</text>
        <path d="M272 50 L278 36 L284 50" stroke="#15803D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="278" y1="36" x2="278" y2="63" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
    </svg>
)
const BusinessArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs><linearGradient id="p4-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#EFF6FF" /><stop offset="1" stopColor="#DBEAFE" /></linearGradient></defs>
        <rect width="320" height="162" fill="url(#p4-bg)" />
        <rect x="130" y="14" width="60" height="30" rx="8" fill="#3B82F6" />
        <circle cx="152" cy="29" r="7" fill="white" opacity=".8" />
        <rect x="146" y="36" width="16" height="6" fill="white" opacity=".6" rx="2" />
        <line x1="160" y1="44" x2="160" y2="58" stroke="#93C5FD" strokeWidth="2" />
        <line x1="160" y1="58" x2="78" y2="58" stroke="#93C5FD" strokeWidth="2" />
        <line x1="160" y1="58" x2="242" y2="58" stroke="#93C5FD" strokeWidth="2" />
        <line x1="78" y1="58" x2="78" y2="66" stroke="#93C5FD" strokeWidth="2" />
        <line x1="242" y1="58" x2="242" y2="66" stroke="#93C5FD" strokeWidth="2" />
        <rect x="48" y="66" width="60" height="28" rx="7" fill="#60A5FA" opacity=".8" />
        <rect x="212" y="66" width="60" height="28" rx="7" fill="#60A5FA" opacity=".8" />
        <circle cx="70" cy="80" r="7" fill="white" opacity=".8" />
        <circle cx="234" cy="80" r="7" fill="white" opacity=".8" />
        <path d="M90 130 Q102 118 114 122 L130 116 Q140 112 145 118 L159 124 Q166 130 161 136 L151 140 Q140 144 128 140 L115 133 Q107 129 98 133 L90 130Z" fill="none" stroke="#3B82F6" strokeWidth="2" />
        <rect x="232" y="108" width="48" height="36" rx="5" fill="#1D4ED8" opacity=".08" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M243 108 L243 103 Q243 100 247 100 L264 100 Q268 100 268 103 L268 108" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
        <line x1="232" y1="120" x2="280" y2="120" stroke="#93C5FD" strokeWidth="1.5" />
        <rect x="250" y="116" width="10" height="8" rx="2" fill="#3B82F6" opacity=".5" />
        {[[22, 34, 3], [28, 88, 2.5], [298, 88, 3], [302, 142, 2]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill="#BFDBFE" />)}
    </svg>
)
const HomeArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="p5-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFF7ED" /><stop offset="1" stopColor="#FFEDD5" /></linearGradient>
            <linearGradient id="p5-r" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#EA580C" /><stop offset="1" stopColor="#F97316" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#p5-bg)" />
        <circle cx="278" cy="38" r="22" fill="#FCD34D" opacity=".45" />
        <circle cx="278" cy="38" r="14" fill="#FBBF24" opacity=".65" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => { const r = a * Math.PI / 180; return <line key={i} x1={278 + 20 * Math.cos(r)} y1={38 + 20 * Math.sin(r)} x2={278 + 28 * Math.cos(r)} y2={38 + 28 * Math.sin(r)} stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" /> })}
        <path d="M52 132 L52 78 L116 32 L180 78 L180 132 Z" fill="#FED7AA" stroke="#F97316" strokeWidth="1.5" />
        <path d="M38 84 L116 28 L194 84" fill="url(#p5-r)" stroke="#C2410C" strokeWidth="1.5" />
        <rect x="102" y="101" width="28" height="31" rx="14" fill="#C2410C" opacity=".38" />
        <circle cx="124" cy="117" r="2.5" fill="#C2410C" />
        <rect x="62" y="84" width="25" height="22" rx="4" fill="#BAE6FD" stroke="#7DD3FC" strokeWidth="1" />
        <line x1="74.5" y1="84" x2="74.5" y2="106" stroke="#7DD3FC" strokeWidth="1" />
        <line x1="62" y1="95" x2="87" y2="95" stroke="#7DD3FC" strokeWidth="1" />
        <rect x="141" y="84" width="25" height="22" rx="4" fill="#BAE6FD" stroke="#7DD3FC" strokeWidth="1" />
        <line x1="153.5" y1="84" x2="153.5" y2="106" stroke="#7DD3FC" strokeWidth="1" />
        <line x1="141" y1="95" x2="166" y2="95" stroke="#7DD3FC" strokeWidth="1" />
        <rect x="196" y="92" width="78" height="30" rx="5" fill="#F97316" opacity=".18" stroke="#FB923C" strokeWidth="1.5" />
        <rect x="196" y="86" width="15" height="18" rx="4" fill="#FB923C" opacity=".38" />
        <rect x="259" y="86" width="15" height="18" rx="4" fill="#FB923C" opacity=".38" />
        <line x1="235" y1="132" x2="235" y2="66" stroke="#86EFAC" strokeWidth="2" />
        <ellipse cx="222" cy="76" rx="12" ry="8" fill="#4ADE80" opacity=".48" />
        <ellipse cx="247" cy="71" rx="11" ry="8" fill="#4ADE80" opacity=".38" />
        <ellipse cx="235" cy="64" rx="10" ry="7" fill="#22C55E" opacity=".48" />
    </svg>
)
const ConsumerArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs><linearGradient id="p6-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFF1F2" /><stop offset="1" stopColor="#FFE4E6" /></linearGradient></defs>
        <rect width="320" height="162" fill="url(#p6-bg)" />
        <rect x="18" y="68" width="62" height="11" rx="5" fill="#FB7185" opacity=".7" />
        <rect x="12" y="57" width="14" height="30" rx="5" fill="#E11D48" opacity=".48" />
        <rect x="74" y="57" width="14" height="30" rx="5" fill="#E11D48" opacity=".48" />
        <path d="M114 48 L152 30 L162 32 Q168 35 162 42 L147 44 L142 65 L132 65 L135 44 L118 48 L115 54 L109 54 L111 48 Z" fill="#FB7185" opacity=".7" />
        <circle cx="212" cy="44" r="18" fill="none" stroke="#FB7185" strokeWidth="4.5" opacity=".58" />
        <circle cx="231" cy="44" r="18" fill="none" stroke="#E11D48" strokeWidth="4.5" opacity=".48" />
        <circle cx="221.5" cy="44" r="5.5" fill="#FCA5A5" opacity=".58" />
        <path d="M30 126 L72 82" stroke="#FB7185" strokeWidth="3" strokeLinecap="round" />
        <path d="M30 126 L24 119 L39 119 Z" fill="#E11D48" opacity=".58" />
        {[[56, 102, 6.5], [84, 86, 8.5], [108, 108, 5], [46, 92, 7.5], [80, 120, 4.5]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill={['#FCA5A5', '#FCD34D', '#86EFAC', '#93C5FD', '#DDD6FE'][i]} opacity=".58" />)}
        <path d="M274 100 C274 95 268 89 262 93 C256 89 250 95 250 100 C250 111 262 122 262 122 C262 122 274 111 274 100Z" fill="#FB7185" opacity=".48" />
        {[[152, 102, 4.5], [172, 118, 3.5], [190, 96, 5.5], [298, 66, 4.5]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill="#FCA5A5" opacity=".48" />)}
    </svg>
)
const JewellersArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="p7-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFFBEB" /><stop offset="1" stopColor="#FEF3C7" /></linearGradient>
            <linearGradient id="p7-r" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F59E0B" /><stop offset="1" stopColor="#D97706" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#p7-bg)" />
        <polygon points="160,18 204,62 160,116 116,62" fill="#FCD34D" opacity=".3" stroke="#F59E0B" strokeWidth="1.5" />
        <polygon points="160,18 204,62 160,72 116,62" fill="#FCD34D" opacity=".5" stroke="#F59E0B" strokeWidth="1" />
        <polygon points="116,62 160,72 160,116" fill="#D97706" opacity=".25" stroke="#F59E0B" strokeWidth="1" />
        <polygon points="160,72 204,62 160,116" fill="#D97706" opacity=".35" stroke="#F59E0B" strokeWidth="1" />
        <line x1="146" y1="32" x2="138" y2="24" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" opacity=".7" />
        <line x1="166" y1="26" x2="162" y2="16" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" opacity=".6" />
        <ellipse cx="66" cy="96" rx="34" ry="34" fill="none" stroke="url(#p7-r)" strokeWidth="9" opacity=".3" />
        <ellipse cx="66" cy="96" rx="25" ry="25" fill="none" stroke="#FCD34D" strokeWidth="3" opacity=".4" />
        <circle cx="66" cy="65" r="7.5" fill="#FCD34D" opacity=".6" />
        <ellipse cx="254" cy="96" rx="34" ry="34" fill="none" stroke="url(#p7-r)" strokeWidth="9" opacity=".3" />
        <ellipse cx="254" cy="96" rx="25" ry="25" fill="none" stroke="#FCD34D" strokeWidth="3" opacity=".4" />
        <circle cx="254" cy="65" r="7.5" fill="#FCD34D" opacity=".6" />
        {[[32, 32, 5], [288, 38, 5], [22, 130, 4], [298, 128, 4], [160, 140, 4]].map(([cx, cy, r], i) => (
            <g key={i}>
                <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
                <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
            </g>
        ))}
    </svg>
)
const GarmentArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs><linearGradient id="p8-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#EEF2FF" /><stop offset="1" stopColor="#E0E7FF" /></linearGradient></defs>
        <rect width="320" height="162" fill="url(#p8-bg)" />
        <rect x="20" y="30" width="86" height="106" rx="6" fill="#6366F1" opacity=".12" stroke="#6366F1" strokeWidth="1" />
        {[42, 54, 66, 78, 90, 102, 114, 126].map((y, i) => <line key={i} x1="20" y1={y} x2="106" y2={y} stroke="#6366F1" strokeWidth="1" opacity=".2" />)}
        {[38, 54, 70, 86].map((x, i) => <line key={i} x1={x} y1="30" x2={x} y2="136" stroke="#6366F1" strokeWidth="1" opacity=".2" />)}
        <path d="M116 136 Q138 62 200 42 Q232 34 264 46 L264 72 Q232 60 200 68 Q138 88 116 160Z" fill="#6366F1" opacity=".18" />
        <path d="M121 136 Q143 68 202 48 Q232 40 262 52" stroke="#818CF8" strokeWidth="2" fill="none" strokeLinecap="round" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => { const t = i / 6; const x = 121 + t * (262 - 121); const y = 136 + t * (52 - 136); return <circle key={i} cx={x} cy={y} r="3.5" fill="#6366F1" opacity=".5" /> })}
        <line x1="256" y1="84" x2="256" y2="148" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="256" cy="82" rx="5" ry="8.5" fill="#818CF8" opacity=".7" />
        <ellipse cx="258" cy="84" rx="2.5" ry="3.5" fill="white" opacity=".8" />
        <path d="M256 148 Q278 138 288 122 Q278 106 256 116" stroke="#A5B4FC" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {['#6366F1', '#818CF8', '#E879F9', '#F472B6', '#34D399'].map((c, i) => (
            <rect key={i} x={20 + i * 13} y="142" width="11" height="16" rx="2" fill={c} opacity=".7" />
        ))}
    </svg>
)
const RestaurantArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs><linearGradient id="p9-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFFBEB" /><stop offset="1" stopColor="#FEF3C7" /></linearGradient></defs>
        <rect width="320" height="162" fill="url(#p9-bg)" />
        <ellipse cx="160" cy="54" rx="36" ry="30" fill="#F59E0B" opacity=".2" />
        <rect x="128" y="54" width="64" height="32" rx="4" fill="#F59E0B" opacity=".22" />
        <ellipse cx="160" cy="54" rx="36" ry="30" fill="none" stroke="#F59E0B" strokeWidth="2" />
        <rect x="128" y="54" width="64" height="32" rx="4" fill="none" stroke="#F59E0B" strokeWidth="2" />
        {[136, 150, 164, 178].map((x, i) => <line key={i} x1={x} y1="54" x2={x} y2="86" stroke="#F59E0B" strokeWidth="1.2" opacity=".35" />)}
        <ellipse cx="160" cy="128" rx="56" ry="19" fill="#FCD34D" opacity=".2" stroke="#F59E0B" strokeWidth="1.5" />
        <ellipse cx="160" cy="126" rx="41" ry="13" fill="#FCD34D" opacity=".15" stroke="#F59E0B" strokeWidth="1" />
        <line x1="90" y1="72" x2="90" y2="136" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
        {[84, 90, 96].map((x, i) => <line key={i} x1={x} y1="72" x2={x} y2="90" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />)}
        <path d="M84 90 Q90 98 96 90" stroke="#D97706" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="230" y1="72" x2="230" y2="136" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M230 72 Q242 82 235 96 L230 96Z" fill="#D97706" opacity=".5" />
        {[[146, 62], [160, 58], [174, 62]].map(([x, y], i) => (
            <path key={i} d={`M${x} ${y} Q${x - 4} ${y - 8} ${x} ${y - 16} Q${x + 4} ${y - 24} ${x} ${y - 32}`} stroke="#F59E0B" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".4" />
        ))}
        {([[40, 52, 8, '#FB923C'], [280, 52, 8, '#FB923C'], [34, 112, 6, '#FCD34D'], [286, 112, 6, '#FCD34D']] as const).map(([cx, cy, r, c], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill={c} opacity=".4" />
        ))}
    </svg>
)

const ARTS = [RealEstateArt, AutomobileArt, EducationArt, FinanceArt, BusinessArt, HomeArt, ConsumerArt, JewellersArt, GarmentArt, RestaurantArt]

/* ── Category Card ───────────────────────────────────────────── */
function CategoryCard({ cat, index }: { cat: typeof ALL_LEAD_CATEGORIES[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const p = palette[cat.accentColor]
    const Art = ARTS[index % ARTS.length]

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => e.isIntersecting && ref.current?.classList.add('visible'),
            { threshold: 0.06 }
        )
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className="animate-on-scroll group flex flex-col bg-white rounded-2xl border border-[#EAEAE6] overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.11)] transition-all duration-300 ease-out"
            style={{ transitionDelay: `${(index % 3) * 55}ms` }}
        >
            {/* Art zone */}
            <div className="relative h-[162px] overflow-hidden flex-shrink-0">
                <Art />
                {/* Record badge */}
                <div className="absolute bottom-3 right-3 bg-white/92 backdrop-blur-sm rounded-xl px-2.5 py-1.5 shadow-sm border border-white/70">
                    <span className={`font-display text-sm font-bold leading-none ${p.record}`}>{cat.records}</span>
                    <span className="block text-[8px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">Records</span>
                </div>
                {/* Sector pill */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/92 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm border border-white/70">
                    <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
                    <span className="text-[9px] font-mono font-bold uppercase tracking-[0.12em] text-slate-500">{cat.sector}</span>
                </div>
                {/* Index */}
                <div className="absolute top-3 right-3 bg-white/75 backdrop-blur-sm rounded-lg px-2 py-1">
                    <span className="text-[10px] font-mono font-bold text-slate-400 tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-6 pt-5 pb-5">
                <div className={`h-0.5 w-8 rounded-full ${p.bar} mb-3 group-hover:w-16 transition-all duration-500`} />
                <h3 className="font-body font-bold text-[#0A0A0F] text-[15px] leading-snug mb-1.5">{cat.title}</h3>
                <p className="text-[#6B6B8A] text-[12.5px] leading-relaxed mb-4">{cat.description}</p>

                {/* Sub-items */}
                <div className="rounded-xl px-4 py-3.5 mb-4 flex-1" style={{ background: '#F8F9FF', border: '1px solid #E2E8F7' }}>
                    <p className="text-[9px] font-mono font-bold uppercase tracking-[0.13em] text-slate-400 mb-2.5">Includes</p>
                    <ul className="space-y-1.5">
                        {cat.subItems.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <span className={`mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.itemDot}`} />
                                <span className="text-[12px] text-[#3B3B5A] font-medium leading-tight">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="text-[11px] text-slate-400 font-mono leading-relaxed">
                    <span className="text-slate-500 font-semibold">Ideal for:</span> {cat.idealFor}
                </p>
            </div>

            {/* CTA */}
            <div className="px-6 pb-5 flex-shrink-0">
                <div className="border-t border-[#F0F0EC] mb-4" />
                <a
                    href={buildWALink(cat.title, cat.subItems)}
                    target="_blank" rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl text-white text-[13px] font-semibold ${p.btn} shadow-sm hover:shadow-md transition-all duration-300`}
                >
                    <WAIcon size={14} />
                    Get This Database
                </a>
            </div>
        </div>
    )
}

/* ── Filter pill ─────────────────────────────────────────────── */
function FilterPill({ label, active, count, onClick }: { label: string; active: boolean; count: number; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold font-mono uppercase tracking-wider transition-all duration-200 border whitespace-nowrap ${active ? 'bg-[#0A0A0F] text-white border-[#0A0A0F] shadow-sm' : 'bg-white text-slate-500 border-[#E4E4E0] hover:border-blue-300 hover:text-[#0A0A0F]'
                }`}
        >
            {label}
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold tabular-nums ${active ? 'bg-white/20 text-white' : 'bg-[#F0F0EC] text-slate-400'}`}>
                {count}
            </span>
        </button>
    )
}

/* ── Page ────────────────────────────────────────────────────── */
export default function CategoriesPage() {
    const [activeFilter, setActiveFilter] = useState('All')
    const [scrolled, setScrolled] = useState(false)

    const sectorCounts: Record<string, number> = {}
    ALL_LEAD_CATEGORIES.forEach((c) => { sectorCounts[c.sector] = (sectorCounts[c.sector] || 0) + 1 })
    const sectors = ['All', ...Object.keys(sectorCounts).sort()]

    const filtered = activeFilter === 'All'
        ? ALL_LEAD_CATEGORIES
        : ALL_LEAD_CATEGORIES.filter((c) => c.sector === activeFilter)

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', fn)
        return () => window.removeEventListener('scroll', fn)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            const obs = new IntersectionObserver(
                (entries) => entries.forEach((e) => e.isIntersecting && (e.target as HTMLElement).classList.add('visible')),
                { threshold: 0.06 }
            )
            document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach((el) => obs.observe(el))
            return () => obs.disconnect()
        }, 60)
        return () => clearTimeout(timer)
    }, [activeFilter])

    return (
        <div className="min-h-screen" style={{ background: 'linear-gradient(180deg,#FFFFFF 0%,#F7F8FC 100px,#F7F8FC 100%)' }}>

            {/* Navbar */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/92 backdrop-blur-lg border-b border-[#EAEAE6] shadow-[0_1px_12px_rgba(0,0,0,0.06)]' : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-lg bg-[#0A0A0F] flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="3" fill="white" />
                                <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
                                <circle cx="8" cy="2" r="1.5" fill="#F59E0B" />
                            </svg>
                        </div>
                        <span className="font-display text-lg text-[#0A0A0F] tracking-tight">Galaxy<span className="text-blue-600">Database</span></span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-sm text-slate-500 hover:text-[#0A0A0F] transition-colors flex items-center gap-1.5 group">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-0.5 transition-transform"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
                            Back to Home
                        </Link>
                        <a href={`https://wa.me/916260712882?text=${encodeURIComponent("Hello! I'd like to enquire about your database categories.")}`} target="_blank" rel="noopener noreferrer"
                            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A0F] text-white text-sm font-medium hover:bg-blue-600 transition-all duration-300">
                            <WAIcon size={14} />WhatsApp Us
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="pt-32 pb-12 px-6 lg:px-8 max-w-7xl mx-auto relative">
                <div className="absolute top-0 right-0 w-[50vw] h-[38vh] bg-[radial-gradient(circle,rgba(99,143,246,0.07)_0%,transparent_65%)] pointer-events-none" />
                <div className="max-w-2xl relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#DBEAFE] shadow-sm mb-5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                        </span>
                        <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-widest">All Categories</span>
                    </div>
                    <h1 className="font-display text-5xl md:text-6xl text-[#0A0A0F] leading-[1.06] tracking-tight mb-5">
                        {ALL_LEAD_CATEGORIES.length} Premium<br />
                        <span className="italic" style={{ background: 'linear-gradient(135deg,#3B82F6 0%,#6366F1 50%,#8B5CF6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            Lead Databases
                        </span>
                    </h1>
                    <p className="text-[#6B6B8A] text-lg leading-relaxed max-w-xl">
                        Verified, updated every 90 days, delivered as a clean Excel file to your WhatsApp within 2 minutes.
                    </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                    {[{ num: String(ALL_LEAD_CATEGORIES.length), label: 'Databases' }, { num: '30L+', label: 'Verified records' }, { num: '90 days', label: 'Update cycle' }, { num: '~2 min', label: 'Delivery time' }].map((s) => (
                        <div key={s.label} className="bg-white border border-[#EAEAE6] rounded-xl px-5 py-3 shadow-sm">
                            <div className="font-display text-xl text-[#0A0A0F] leading-none mb-0.5">{s.num}</div>
                            <div className="text-[10.5px] font-mono text-slate-400 uppercase tracking-widest">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sticky filter */}
            <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-[#EAEAE6] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center gap-2.5 overflow-x-auto scrollbar-hide">
                    {sectors.map((s) => (
                        <FilterPill key={s} label={s} active={activeFilter === s} count={s === 'All' ? ALL_LEAD_CATEGORIES.length : (sectorCounts[s] || 0)} onClick={() => setActiveFilter(s)} />
                    ))}
                    <span className="ml-auto pl-4 shrink-0 text-[12px] font-mono text-slate-400 whitespace-nowrap">
                        {filtered.length} result{filtered.length !== 1 ? 's' : ''}
                    </span>
                </div>
            </div>

            {/* Grid */}
            <main className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
                {filtered.length === 0 ? (
                    <div className="text-center py-28">
                        <div className="w-16 h-16 rounded-2xl bg-[#F0F0EC] flex items-center justify-center mx-auto mb-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9999BB" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                        </div>
                        <p className="text-[#6B6B8A] text-base font-medium mb-3">No results for "{activeFilter}"</p>
                        <button onClick={() => setActiveFilter('All')} className="text-sm text-blue-600 font-semibold hover:text-blue-700 transition-colors">Clear filter</button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((cat, i) => (
                            <CategoryCard key={cat.id} cat={cat} index={ALL_LEAD_CATEGORIES.findIndex(c => c.id === cat.id)} />
                        ))}
                    </div>
                )}
            </main>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
                <div className="relative rounded-2xl overflow-hidden border border-[#DBEAFE]" style={{ background: 'linear-gradient(135deg,#EEF2FF 0%,#F0F4FF 50%,#EDF9FF 100%)' }}>
                    <div className="absolute inset-0 opacity-45 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle,#C7D2FE 1px,transparent 1px)', backgroundSize: '24px 24px' }} />
                    <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/22 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-10 md:p-14">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#DBEAFE] shadow-sm mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                <span className="text-[11px] font-mono font-bold text-slate-600 uppercase tracking-widest">Custom Requests</span>
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl text-[#0A0A0F] mb-3">Don't see what you need?</h2>
                            <p className="text-[#6B6B8A] text-base leading-relaxed max-w-lg">
                                We source custom databases on request — any profession, industry, geography, or consumer segment. Tell us what you need.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 shrink-0">
                            <a href={`https://wa.me/916260712882?text=${encodeURIComponent("Hello! I need a custom database. Can you help me source it?")}`} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1fba59] transition-all duration-300 shadow-lg shadow-[#25D366]/20 whitespace-nowrap">
                                <WAIcon size={16} />Request Custom Data
                            </a>
                            <a href="mailto:Galaxydatabasee@gmail.com" className="flex items-center justify-center gap-2 text-[13px] text-slate-500 hover:text-[#0A0A0F] font-medium transition-colors">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                Galaxydatabasee@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#EAEAE6] py-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[12px] font-mono text-slate-400">© {new Date().getFullYear()} Galaxy Database. All rights reserved.</span>
                    <Link href="/" className="text-[12px] font-mono text-slate-400 hover:text-[#0A0A0F] transition-colors">← Back to homepage</Link>
                </div>
            </footer>
        </div>
    )
}