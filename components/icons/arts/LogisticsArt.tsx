import React from 'react';

export const LogisticsArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="log-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F8FAFC" /><stop offset="1" stopColor="#F1F5F9" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#log-bg)" />
        {/* Road */}
        <rect x="0" y="116" width="320" height="46" fill="#CBD5E1" opacity=".35" />
        <line x1="0" y1="128" x2="320" y2="128" stroke="white" strokeWidth="2" strokeDasharray="28 18" opacity=".7" />
        {/* Truck cab */}
        <rect x="30" y="78" width="200" height="48" fill="#64748B" opacity=".25" rx="4" />
        <path d="M230 80 L265 80 L280 100 L280 126 L230 126 Z" fill="#64748B" opacity=".3" />
        <rect x="233" y="86" width="30" height="24" fill="#93C5FD" opacity=".4" rx="2" />
        {/* Wheels */}
        <circle cx="80" cy="126" r="14" fill="#334155" opacity=".4" stroke="#64748B" strokeWidth="1.5" />
        <circle cx="80" cy="126" r="7" fill="#64748B" opacity=".4" />
        <circle cx="160" cy="126" r="14" fill="#334155" opacity=".4" stroke="#64748B" strokeWidth="1.5" />
        <circle cx="160" cy="126" r="7" fill="#64748B" opacity=".4" />
        <circle cx="260" cy="126" r="12" fill="#334155" opacity=".4" stroke="#64748B" strokeWidth="1.5" />
        <circle cx="260" cy="126" r="6" fill="#64748B" opacity=".4" />
        {/* Box on truck */}
        <rect x="40" y="58" width="80" height="46" fill="#94A3B8" opacity=".3" rx="3" />
        <line x1="80" y1="58" x2="80" y2="104" stroke="#64748B" strokeWidth="1" opacity=".4" />
        <line x1="40" y1="81" x2="120" y2="81" stroke="#64748B" strokeWidth="1" opacity=".4" />
        {/* Route dots */}
        {[[20, 62, 6], [310, 68, 5], [306, 116, 4]].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#94A3B8" opacity=".5" />
        ))}
    </svg>
);
