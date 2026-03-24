import React from 'react';

export const BeautyArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="bty-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FDF4FF" /><stop offset="1" stopColor="#FAE8FF" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#bty-bg)" />
        {/* Perfume bottle */}
        <rect x="134" y="44" width="52" height="76" fill="#E879F9" opacity=".2" rx="8" />
        <rect x="148" y="36" width="24" height="14" fill="#E879F9" opacity=".3" rx="4" />
        <rect x="156" y="28" width="8" height="10" fill="#C026D3" opacity=".4" rx="2" />
        <rect x="138" y="48" width="44" height="68" fill="none" stroke="#C026D3" strokeWidth="1.5" rx="6" />
        <ellipse cx="160" cy="82" rx="16" ry="20" fill="#E879F9" opacity=".2" />
        {/* Mirror */}
        <circle cx="68" cy="82" r="36" fill="none" stroke="#C026D3" strokeWidth="2" opacity=".3" />
        <circle cx="68" cy="82" r="28" fill="#E879F9" opacity=".15" />
        <line x1="68" y1="118" x2="68" y2="138" stroke="#C026D3" strokeWidth="2.5" strokeLinecap="round" opacity=".4" />
        <line x1="54" y1="138" x2="82" y2="138" stroke="#C026D3" strokeWidth="2" strokeLinecap="round" opacity=".4" />
        {/* Lipstick */}
        <rect x="252" y="78" width="18" height="46" fill="#F0ABFC" opacity=".4" rx="3" />
        <rect x="252" y="62" width="18" height="20" fill="#C026D3" opacity=".4" rx="3 3 0 0" />
        <rect x="254" y="80" width="14" height="42" fill="none" stroke="#C026D3" strokeWidth="1" rx="2" />
        {/* Sparkles */}
        {[[240, 42, 6], [296, 60, 5], [40, 38, 5], [290, 130, 4]].map(([cx, cy, r], i) => (
            <g key={i}>
                <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} stroke="#C026D3" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
                <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke="#C026D3" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
            </g>
        ))}
    </svg>
);
