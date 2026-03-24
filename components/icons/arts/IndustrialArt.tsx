import React from 'react';

export const IndustrialArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="ind-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F8FAFC" /><stop offset="1" stopColor="#F1F5F9" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#ind-bg)" />
        {/* Gear large */}
        <circle cx="140" cy="82" r="44" fill="none" stroke="#94A3B8" strokeWidth="8" opacity=".3" />
        <circle cx="140" cy="82" r="28" fill="#CBD5E1" opacity=".2" stroke="#64748B" strokeWidth="2" />
        <circle cx="140" cy="82" r="12" fill="#94A3B8" opacity=".3" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 140 + 44 * Math.cos(rad);
            const y1 = 82 + 44 * Math.sin(rad);
            const x2 = 140 + 56 * Math.cos(rad);
            const y2 = 82 + 56 * Math.sin(rad);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#64748B" strokeWidth="7" strokeLinecap="round" opacity=".3" />;
        })}
        {/* Gear small */}
        <circle cx="216" cy="60" r="26" fill="none" stroke="#94A3B8" strokeWidth="5" opacity=".25" />
        <circle cx="216" cy="60" r="16" fill="#CBD5E1" opacity=".2" stroke="#64748B" strokeWidth="1.5" />
        <circle cx="216" cy="60" r="7" fill="#94A3B8" opacity=".3" />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = 216 + 26 * Math.cos(rad);
            const y1 = 60 + 26 * Math.sin(rad);
            const x2 = 216 + 34 * Math.cos(rad);
            const y2 = 60 + 34 * Math.sin(rad);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#64748B" strokeWidth="5" strokeLinecap="round" opacity=".25" />;
        })}
        {/* Wrench */}
        <path d="M52 40 Q44 52 56 64 L78 88 Q84 94 90 88 Q96 82 90 76 L66 52 Q72 40 60 36 Q48 32 52 40Z" fill="#94A3B8" opacity=".35" stroke="#64748B" strokeWidth="1.5" />
        {[[272, 100, 6], [290, 128, 4], [16, 50, 4], [16, 130, 4]].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#CBD5E1" opacity=".6" />
        ))}
    </svg>
);
