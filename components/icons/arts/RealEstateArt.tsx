import React from 'react';

export const RealEstateArt = () => (
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
);
