import React from 'react';

export const EventsArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="evt-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFF1F2" /><stop offset="1" stopColor="#EDE9FE" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#evt-bg)" />
        {/* Spotlight beams */}
        <path d="M80 20 L30 130 L130 130 Z" fill="#F0ABFC" opacity=".15" />
        <path d="M160 20 L110 130 L210 130 Z" fill="#C4B5FD" opacity=".15" />
        <path d="M240 20 L190 130 L290 130 Z" fill="#F9A8D4" opacity=".15" />
        {/* Stage */}
        <rect x="0" y="128" width="320" height="34" fill="#A78BFA" opacity=".2" />
        <ellipse cx="160" cy="128" rx="110" ry="16" fill="#DDD6FE" opacity=".3" />
        {/* Spotlight fixtures */}
        <rect x="66" y="14" width="28" height="14" fill="#7C3AED" opacity=".4" rx="3" />
        <circle cx="80" cy="21" r="7" fill="#C4B5FD" opacity=".5" />
        <rect x="146" y="14" width="28" height="14" fill="#7C3AED" opacity=".4" rx="3" />
        <circle cx="160" cy="21" r="7" fill="#C4B5FD" opacity=".5" />
        <rect x="226" y="14" width="28" height="14" fill="#7C3AED" opacity=".4" rx="3" />
        <circle cx="240" cy="21" r="7" fill="#C4B5FD" opacity=".5" />
        {/* Camera */}
        <rect x="248" y="70" width="44" height="30" fill="#A78BFA" opacity=".35" rx="5" />
        <circle cx="268" cy="85" r="10" fill="#DDD6FE" opacity=".5" stroke="#7C3AED" strokeWidth="1.5" />
        <circle cx="268" cy="85" r="5" fill="#7C3AED" opacity=".35" />
        <rect x="252" y="58" width="16" height="14" fill="#A78BFA" opacity=".4" rx="3" />
        {[[22, 42, 5], [298, 38, 5], [22, 118, 4], [300, 122, 4]].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#C4B5FD" opacity=".5" />
        ))}
    </svg>
);
