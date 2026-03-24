import React from 'react';

export const PlasticArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="pla-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F0FDFF" /><stop offset="1" stopColor="#CFFAFE" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#pla-bg)" />
        {/* Pipe horizontal */}
        <rect x="40" y="74" width="240" height="28" fill="#22D3EE" opacity=".2" rx="14" />
        <rect x="42" y="76" width="236" height="24" fill="none" stroke="#06B6D4" strokeWidth="1.5" rx="13" />
        <ellipse cx="40" cy="87" rx="7" ry="14" fill="#22D3EE" opacity=".3" stroke="#06B6D4" strokeWidth="1" />
        <ellipse cx="280" cy="87" rx="7" ry="14" fill="#22D3EE" opacity=".3" stroke="#06B6D4" strokeWidth="1" />
        <line x1="42" y1="87" x2="278" y2="87" stroke="#A5F3FC" strokeWidth="2" opacity=".5" />
        {/* Pipe vertical */}
        <rect x="146" y="18" width="28" height="62" fill="#22D3EE" opacity=".2" rx="14" />
        <rect x="148" y="20" width="24" height="60" fill="none" stroke="#06B6D4" strokeWidth="1.5" rx="12" />
        <ellipse cx="160" cy="18" rx="14" ry="7" fill="#22D3EE" opacity=".3" stroke="#06B6D4" strokeWidth="1" />
        {/* Pipe elbow */}
        <rect x="146" y="102" width="28" height="50" fill="#22D3EE" opacity=".2" rx="14" />
        <rect x="148" y="104" width="24" height="48" fill="none" stroke="#06B6D4" strokeWidth="1.5" rx="12" />
        {/* Pellet/granule accents */}
        {[[50, 48, 5], [74, 38, 4], [258, 42, 5], [280, 52, 4], [30, 120, 4], [290, 118, 4]].map(([cx, cy, r], i) => (
            <ellipse key={i} cx={cx} cy={cy} rx={r} ry={r * 0.7} fill="#67E8F9" opacity=".5" />
        ))}
        <circle cx="30" cy="46" r="6" fill="#A5F3FC" opacity=".4" />
        <circle cx="296" cy="128" r="5" fill="#A5F3FC" opacity=".4" />
    </svg>
);
