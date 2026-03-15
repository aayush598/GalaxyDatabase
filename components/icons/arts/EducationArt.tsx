import React from 'react';

export const EducationArt = () => (
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
);
