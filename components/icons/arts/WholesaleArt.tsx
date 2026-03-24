import React from 'react';

export const WholesaleArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="who-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F8FAFC" /><stop offset="1" stopColor="#F1F5F9" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#who-bg)" />
        {/* Warehouse building */}
        <path d="M60 80 L160 40 L260 80" fill="#CBD5E1" opacity=".25" />
        <path d="M60 80 L160 40 L260 80" fill="none" stroke="#64748B" strokeWidth="1.5" />
        <rect x="60" y="80" width="200" height="62" fill="#E2E8F0" opacity=".3" />
        <rect x="62" y="82" width="196" height="58" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
        {/* Shutter doors */}
        <rect x="100" y="100" width="50" height="40" fill="#CBD5E1" opacity=".4" rx="2" />
        {[0, 1, 2, 3, 4].map(i => (
            <line key={i} x1="100" y1={108 + i * 8} x2="150" y2={108 + i * 8} stroke="#94A3B8" strokeWidth="1" opacity=".6" />
        ))}
        <rect x="170" y="100" width="50" height="40" fill="#CBD5E1" opacity=".4" rx="2" />
        {[0, 1, 2, 3, 4].map(i => (
            <line key={i} x1="170" y1={108 + i * 8} x2="220" y2={108 + i * 8} stroke="#94A3B8" strokeWidth="1" opacity=".6" />
        ))}
        {/* Crates stack */}
        <rect x="18" y="104" width="34" height="24" fill="#94A3B8" opacity=".3" rx="3" />
        <rect x="22" y="88" width="28" height="20" fill="#CBD5E1" opacity=".3" rx="3" />
        <line x1="18" y1="116" x2="52" y2="116" stroke="#64748B" strokeWidth="1" opacity=".4" />
        {/* Crates right */}
        <rect x="268" y="104" width="34" height="24" fill="#94A3B8" opacity=".3" rx="3" />
        <rect x="272" y="88" width="28" height="20" fill="#CBD5E1" opacity=".3" rx="3" />
        <line x1="268" y1="116" x2="302" y2="116" stroke="#64748B" strokeWidth="1" opacity=".4" />
        {[[22, 44, 5], [298, 46, 5], [160, 148, 4]].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#CBD5E1" opacity=".6" />
        ))}
    </svg>
);
