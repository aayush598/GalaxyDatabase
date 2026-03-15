import React from 'react';

export const AutomobileArt = () => (
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
);
