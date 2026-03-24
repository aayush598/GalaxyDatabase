import React from 'react';

export const ElectronicsArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="elec-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#EFF6FF" /><stop offset="1" stopColor="#DBEAFE" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#elec-bg)" />
        {/* Laptop */}
        <rect x="90" y="46" width="140" height="90" fill="#BFDBFE" opacity=".3" rx="6" />
        <rect x="95" y="52" width="130" height="76" fill="#93C5FD" opacity=".2" rx="4" />
        <rect x="75" y="136" width="170" height="8" fill="#BFDBFE" opacity=".5" rx="4" />
        <rect x="94" y="53" width="132" height="74" fill="none" stroke="#3B82F6" strokeWidth="1.5" rx="4" />
        {/* Screen content */}
        {[68, 80, 92].map((y, i) => (
            <line key={i} x1="106" y1={y} x2={i === 0 ? 190 : i === 1 ? 172 : 180} y2={y} stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
        ))}
        {/* Phone */}
        <rect x="255" y="55" width="36" height="60" fill="#BFDBFE" opacity=".4" rx="6" stroke="#3B82F6" strokeWidth="1.5" />
        <rect x="259" y="64" width="28" height="38" fill="#93C5FD" opacity=".3" rx="2" />
        <circle cx="273" cy="108" r="3" fill="#3B82F6" opacity=".5" />
        {/* Circuit lines left */}
        <polyline points="22,58 42,58 42,80 58,80" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" opacity=".7" />
        <circle cx="22" cy="58" r="4" fill="#3B82F6" opacity=".4" />
        <circle cx="58" cy="80" r="4" fill="#3B82F6" opacity=".4" />
        <polyline points="22,100 36,100 36,112 56,112" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
        {[[304, 42, 5], [296, 130, 4], [20, 136, 4]].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#BFDBFE" opacity=".7" />
        ))}
    </svg>
);
