import React from 'react';

export const JewellersArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="p7-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFFBEB" /><stop offset="1" stopColor="#FEF3C7" /></linearGradient>
            <linearGradient id="p7-r" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F59E0B" /><stop offset="1" stopColor="#D97706" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#p7-bg)" />
        <polygon points="160,18 204,62 160,116 116,62" fill="#FCD34D" opacity=".3" stroke="#F59E0B" strokeWidth="1.5" />
        <polygon points="160,18 204,62 160,72 116,62" fill="#FCD34D" opacity=".5" stroke="#F59E0B" strokeWidth="1" />
        <polygon points="116,62 160,72 160,116" fill="#D97706" opacity=".25" stroke="#F59E0B" strokeWidth="1" />
        <polygon points="160,72 204,62 160,116" fill="#D97706" opacity=".35" stroke="#F59E0B" strokeWidth="1" />
        <line x1="146" y1="32" x2="138" y2="24" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" opacity=".7" />
        <line x1="166" y1="26" x2="162" y2="16" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" opacity=".6" />
        <ellipse cx="66" cy="96" rx="34" ry="34" fill="none" stroke="url(#p7-r)" strokeWidth="9" opacity=".3" />
        <ellipse cx="66" cy="96" rx="25" ry="25" fill="none" stroke="#FCD34D" strokeWidth="3" opacity=".4" />
        <circle cx="66" cy="65" r="7.5" fill="#FCD34D" opacity=".6" />
        <ellipse cx="254" cy="96" rx="34" ry="34" fill="none" stroke="url(#p7-r)" strokeWidth="9" opacity=".3" />
        <ellipse cx="254" cy="96" rx="25" ry="25" fill="none" stroke="#FCD34D" strokeWidth="3" opacity=".4" />
        <circle cx="254" cy="65" r="7.5" fill="#FCD34D" opacity=".6" />
        {[[32, 32, 5], [288, 38, 5], [22, 130, 4], [298, 128, 4], [160, 140, 4]].map(([cx, cy, r], i) => (
            <g key={i}>
                <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
                <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
            </g>
        ))}
    </svg>
);
