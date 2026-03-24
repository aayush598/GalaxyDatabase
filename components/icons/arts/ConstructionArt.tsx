import React from 'react';

export const ConstructionArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="con-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFF7ED" /><stop offset="1" stopColor="#FFEDD5" /></linearGradient>
            <linearGradient id="con-r" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#FB923C" /><stop offset="1" stopColor="#EA580C" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#con-bg)" />
        {/* Ground */}
        <rect x="0" y="130" width="320" height="32" fill="#FDBA74" opacity=".25" />
        {/* Building */}
        <rect x="100" y="50" width="120" height="80" fill="url(#con-r)" opacity=".2" stroke="#FB923C" strokeWidth="1.5" />
        <rect x="120" y="70" width="24" height="28" fill="#FB923C" opacity=".3" rx="2" />
        <rect x="176" y="70" width="24" height="28" fill="#FB923C" opacity=".3" rx="2" />
        <rect x="144" y="90" width="32" height="40" fill="#EA580C" opacity=".2" rx="2" />
        {/* Crane arm */}
        <line x1="240" y1="20" x2="240" y2="130" stroke="#C2410C" strokeWidth="3" strokeLinecap="round" />
        <line x1="200" y1="24" x2="265" y2="24" stroke="#C2410C" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="240" y1="24" x2="240" y2="55" stroke="#FDBA74" strokeWidth="1.5" strokeDasharray="4 3" />
        {/* Scaffolding left */}
        <rect x="88" y="60" width="8" height="70" fill="#FB923C" opacity=".4" rx="2" />
        <line x1="88" y1="80" x2="100" y2="80" stroke="#FB923C" strokeWidth="1.5" opacity=".5" />
        <line x1="88" y1="100" x2="100" y2="100" stroke="#FB923C" strokeWidth="1.5" opacity=".5" />
        {/* Cement bags */}
        <rect x="30" y="100" width="36" height="18" fill="#FB923C" opacity=".3" rx="3" />
        <rect x="36" y="95" width="36" height="18" fill="#FB923C" opacity=".2" rx="3" />
        {[[34, 44, 6], [276, 38, 5], [290, 118, 4], [18, 68, 4]].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#FDBA74" opacity=".5" />
        ))}
    </svg>
);
