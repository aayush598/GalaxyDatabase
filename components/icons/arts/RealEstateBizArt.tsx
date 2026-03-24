import React from 'react';

export const RealEstateBizArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="reb-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F0FDFA" /><stop offset="1" stopColor="#CCFBF1" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#reb-bg)" />
        {/* House */}
        <polygon points="160,22 100,75 220,75" fill="#14B8A6" opacity=".25" />
        <polygon points="160,22 100,75 220,75" fill="none" stroke="#0D9488" strokeWidth="1.5" />
        <rect x="112" y="75" width="96" height="60" fill="#14B8A6" opacity=".18" />
        <rect x="114" y="77" width="92" height="56" fill="none" stroke="#0D9488" strokeWidth="1.5" />
        {/* Door */}
        <rect x="148" y="106" width="24" height="26" fill="#0D9488" opacity=".25" rx="2" />
        <circle cx="170" cy="119" r="2.5" fill="#0D9488" opacity=".7" />
        {/* Windows */}
        <rect x="120" y="88" width="22" height="18" fill="#99F6E4" opacity=".5" rx="2" />
        <rect x="178" y="88" width="22" height="18" fill="#99F6E4" opacity=".5" rx="2" />
        {/* Location pin left */}
        <path d="M54 46 Q54 72 66 80 Q78 72 78 46 Q78 34 66 34 Q54 34 54 46Z" fill="#2DD4BF" opacity=".25" stroke="#0D9488" strokeWidth="1.5" />
        <circle cx="66" cy="48" r="6" fill="#0D9488" opacity=".4" />
        {/* Location pin right */}
        <path d="M242 56 Q242 78 252 85 Q262 78 262 56 Q262 46 252 46 Q242 46 242 56Z" fill="#2DD4BF" opacity=".25" stroke="#0D9488" strokeWidth="1.5" />
        <circle cx="252" cy="58" r="5" fill="#0D9488" opacity=".4" />
        {[[30, 32, 5], [294, 36, 5], [304, 124, 4], [18, 130, 4]].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#5EEAD4" opacity=".5" />
        ))}
    </svg>
);
