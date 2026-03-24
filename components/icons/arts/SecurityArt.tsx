import React from 'react';

export const SecurityArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="sec-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F8FAFC" /><stop offset="1" stopColor="#F0F9FF" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#sec-bg)" />
        {/* Shield */}
        <path d="M160 22 L206 42 L206 96 Q206 126 160 144 Q114 126 114 96 L114 42 Z" fill="#0EA5E9" opacity=".2" />
        <path d="M160 22 L206 42 L206 96 Q206 126 160 144 Q114 126 114 96 L114 42 Z" fill="none" stroke="#0284C7" strokeWidth="1.5" />
        {/* Checkmark inside shield */}
        <polyline points="140,82 155,97 182,68" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* CCTV Camera left */}
        <rect x="36" y="50" width="36" height="22" fill="#38BDF8" opacity=".35" rx="5" />
        <circle cx="50" cy="61" r="8" fill="#BAE6FD" opacity=".5" stroke="#0284C7" strokeWidth="1.5" />
        <circle cx="50" cy="61" r="4" fill="#0284C7" opacity=".3" />
        <rect x="66" y="54" width="14" height="14" fill="none" stroke="#0284C7" strokeWidth="1" rx="2" />
        <line x1="72" y1="50" x2="72" y2="36" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" opacity=".5" />
        {/* CCTV Camera right */}
        <rect x="248" y="50" width="36" height="22" fill="#38BDF8" opacity=".35" rx="5" />
        <circle cx="270" cy="61" r="8" fill="#BAE6FD" opacity=".5" stroke="#0284C7" strokeWidth="1.5" />
        <circle cx="270" cy="61" r="4" fill="#0284C7" opacity=".3" />
        <line x1="248" y1="50" x2="248" y2="36" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" opacity=".5" />
        {[[22, 32, 5], [302, 34, 5], [22, 128, 4], [302, 126, 4]].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#7DD3FC" opacity=".5" />
        ))}
    </svg>
);
