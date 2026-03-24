import React from 'react';

export const FurnitureArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="fur-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFF7ED" /><stop offset="1" stopColor="#FFEDD5" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#fur-bg)" />
        {/* Floor */}
        <rect x="0" y="128" width="320" height="34" fill="#FED7AA" opacity=".35" />
        {/* Sofa */}
        <rect x="84" y="88" width="152" height="44" fill="#FB923C" opacity=".25" rx="8" />
        <rect x="84" y="78" width="20" height="54" fill="#FB923C" opacity=".3" rx="6" />
        <rect x="216" y="78" width="20" height="54" fill="#FB923C" opacity=".3" rx="6" />
        <rect x="86" y="90" width="148" height="40" fill="none" stroke="#EA580C" strokeWidth="1.5" rx="6" />
        <rect x="84" y="78" width="20" height="54" fill="none" stroke="#EA580C" strokeWidth="1" rx="6" />
        <rect x="216" y="78" width="20" height="54" fill="none" stroke="#EA580C" strokeWidth="1" rx="6" />
        <line x1="104" y1="78" x2="216" y2="78" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
        {/* Legs */}
        {[96, 130, 170, 214].map((x, i) => (
            <line key={i} x1={x} y1="132" x2={x} y2="145" stroke="#C2410C" strokeWidth="3" strokeLinecap="round" />
        ))}
        {/* Lamp */}
        <line x1="60" y1="40" x2="60" y2="128" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 50 Q60 30 82 50 Z" fill="#FDBA74" opacity=".5" stroke="#EA580C" strokeWidth="1.5" />
        <ellipse cx="60" cy="50" rx="22" ry="6" fill="#FDBA74" opacity=".4" />
        {/* Plant pot */}
        <circle cx="264" cy="100" r="16" fill="#86EFAC" opacity=".4" />
        <rect x="254" y="112" width="20" height="18" fill="#FB923C" opacity=".3" rx="4" />
        <path d="M255 112 Q264 96 273 112" fill="#86EFAC" opacity=".3" />
        {[[26, 36, 5], [298, 38, 5], [306, 128, 4]].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#FDBA74" opacity=".5" />
        ))}
    </svg>
);
