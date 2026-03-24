import React from 'react';

export const SportsArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="spt-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F0FDF4" /><stop offset="1" stopColor="#DCFCE7" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#spt-bg)" />
        {/* Dumbbell */}
        <line x1="106" y1="81" x2="214" y2="81" stroke="#22C55E" strokeWidth="8" strokeLinecap="round" />
        <rect x="80" y="64" width="28" height="36" fill="#4ADE80" opacity=".4" rx="5" />
        <rect x="82" y="68" width="24" height="28" fill="none" stroke="#16A34A" strokeWidth="1.5" rx="4" />
        <rect x="212" y="64" width="28" height="36" fill="#4ADE80" opacity=".4" rx="5" />
        <rect x="214" y="68" width="24" height="28" fill="none" stroke="#16A34A" strokeWidth="1.5" rx="4" />
        <rect x="60" y="70" width="22" height="24" fill="#86EFAC" opacity=".4" rx="4" />
        <rect x="238" y="70" width="22" height="24" fill="#86EFAC" opacity=".4" rx="4" />
        {/* Trophy */}
        <path d="M134,110 Q134,132 160,138 Q186,132 186,110 L186,96 L134,96 Z" fill="#FDE68A" opacity=".4" stroke="#F59E0B" strokeWidth="1.5" />
        <line x1="150" y1="138" x2="170" y2="138" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="160" y1="138" x2="160" y2="150" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <line x1="148" y1="150" x2="172" y2="150" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        {/* Trophy handles */}
        <path d="M134 100 Q118 100 118 114 Q118 128 134 124" stroke="#F59E0B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M186 100 Q202 100 202 114 Q202 128 186 124" stroke="#F59E0B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {[[28, 38, 6], [292, 36, 5], [28, 130, 4], [296, 132, 4]].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#86EFAC" opacity=".5" />
        ))}
    </svg>
);
