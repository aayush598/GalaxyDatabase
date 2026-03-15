import React from 'react';

export const BusinessArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs><linearGradient id="p4-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#EFF6FF" /><stop offset="1" stopColor="#DBEAFE" /></linearGradient></defs>
        <rect width="320" height="162" fill="url(#p4-bg)" />
        <rect x="130" y="14" width="60" height="30" rx="8" fill="#3B82F6" />
        <circle cx="152" cy="29" r="7" fill="white" opacity=".8" />
        <rect x="146" y="36" width="16" height="6" fill="white" opacity=".6" rx="2" />
        <line x1="160" y1="44" x2="160" y2="58" stroke="#93C5FD" strokeWidth="2" />
        <line x1="160" y1="58" x2="78" y2="58" stroke="#93C5FD" strokeWidth="2" />
        <line x1="160" y1="58" x2="242" y2="58" stroke="#93C5FD" strokeWidth="2" />
        <line x1="78" y1="58" x2="78" y2="66" stroke="#93C5FD" strokeWidth="2" />
        <line x1="242" y1="58" x2="242" y2="66" stroke="#93C5FD" strokeWidth="2" />
        <rect x="48" y="66" width="60" height="28" rx="7" fill="#60A5FA" opacity=".8" />
        <rect x="212" y="66" width="60" height="28" rx="7" fill="#60A5FA" opacity=".8" />
        <circle cx="70" cy="80" r="7" fill="white" opacity=".8" />
        <circle cx="234" cy="80" r="7" fill="white" opacity=".8" />
        <path d="M90 130 Q102 118 114 122 L130 116 Q140 112 145 118 L159 124 Q166 130 161 136 L151 140 Q140 144 128 140 L115 133 Q107 129 98 133 L90 130Z" fill="none" stroke="#3B82F6" strokeWidth="2" />
        <rect x="232" y="108" width="48" height="36" rx="5" fill="#1D4ED8" opacity=".08" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M243 108 L243 103 Q243 100 247 100 L264 100 Q268 100 268 103 L268 108" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
        <line x1="232" y1="120" x2="280" y2="120" stroke="#93C5FD" strokeWidth="1.5" />
        <rect x="250" y="116" width="10" height="8" rx="2" fill="#3B82F6" opacity=".5" />
        {[[22, 34, 3], [28, 88, 2.5], [298, 88, 3], [302, 142, 2]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill="#BFDBFE" />)}
    </svg>
);
