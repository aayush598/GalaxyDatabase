import React from 'react';

export const ElectricalArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="elb-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FEFCE8" /><stop offset="1" stopColor="#FEF9C3" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#elb-bg)" />
        {/* Lightbulb */}
        <circle cx="160" cy="68" r="44" fill="#FDE68A" opacity=".3" />
        <path d="M132 68 Q132 92 148 104 L172 104 Q188 92 188 68 Q188 44 160 44 Q132 44 132 68Z" fill="#FDE68A" opacity=".4" stroke="#F59E0B" strokeWidth="1.5" />
        <rect x="148" y="104" width="24" height="8" fill="#D97706" opacity=".4" rx="2" />
        <rect x="150" y="112" width="20" height="6" fill="#D97706" opacity=".4" rx="2" />
        <rect x="152" y="118" width="16" height="6" fill="#D97706" opacity=".3" rx="2" />
        <line x1="160" y1="120" x2="160" y2="138" stroke="#D97706" strokeWidth="2" strokeLinecap="round" opacity=".5" />
        {/* Lightning bolts */}
        <polyline points="150,56 144,74 158,74 151,92" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Power lines left */}
        <line x1="38" y1="48" x2="88" y2="68" stroke="#FCD34D" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
        <line x1="38" y1="78" x2="88" y2="78" stroke="#FCD34D" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
        <line x1="38" y1="48" x2="38" y2="108" stroke="#D97706" strokeWidth="2" strokeLinecap="round" opacity=".4" />
        {/* Power lines right */}
        <line x1="232" y1="68" x2="282" y2="48" stroke="#FCD34D" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
        <line x1="232" y1="78" x2="282" y2="78" stroke="#FCD34D" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
        <line x1="282" y1="48" x2="282" y2="108" stroke="#D97706" strokeWidth="2" strokeLinecap="round" opacity=".4" />
        {[[22, 38, 6], [298, 42, 5], [24, 130, 4], [296, 130, 4]].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#FDE68A" opacity=".7" />
        ))}
    </svg>
);
