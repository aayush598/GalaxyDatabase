import React from 'react';

export const TravelArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="trv-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#EFF6FF" /><stop offset="1" stopColor="#DBEAFE" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#trv-bg)" />
        {/* Airplane */}
        <path d="M60 82 L160 52 L260 82 L200 86 L170 120 L155 120 L170 86 Z" fill="#60A5FA" opacity=".3" />
        <path d="M60 82 L160 52 L260 82 L200 86 L170 120 L155 120 L170 86 Z" fill="none" stroke="#2563EB" strokeWidth="1.5" />
        <line x1="120" y1="70" x2="200" y2="70" stroke="#93C5FD" strokeWidth="1" opacity=".6" />
        {/* Clouds */}
        <ellipse cx="60" cy="42" rx="28" ry="14" fill="white" opacity=".7" />
        <ellipse cx="46" cy="46" rx="18" ry="12" fill="white" opacity=".7" />
        <ellipse cx="76" cy="46" rx="18" ry="12" fill="white" opacity=".7" />
        <ellipse cx="256" cy="38" rx="24" ry="12" fill="white" opacity=".6" />
        <ellipse cx="244" cy="42" rx="16" ry="10" fill="white" opacity=".6" />
        <ellipse cx="270" cy="42" rx="16" ry="10" fill="white" opacity=".6" />
        {/* Sun */}
        <circle cx="280" cy="30" r="14" fill="#FCD34D" opacity=".4" />
        <circle cx="280" cy="30" r="9" fill="#F59E0B" opacity=".5" />
        {/* Suitcase */}
        <rect x="130" y="110" width="60" height="40" fill="#60A5FA" opacity=".3" rx="5" />
        <rect x="146" y="104" width="28" height="10" fill="none" stroke="#2563EB" strokeWidth="1.5" rx="3" />
        <line x1="160" y1="110" x2="160" y2="150" stroke="#2563EB" strokeWidth="1.5" opacity=".5" />
        <line x1="132" y1="130" x2="188" y2="130" stroke="#2563EB" strokeWidth="1" opacity=".4" />
    </svg>
);
