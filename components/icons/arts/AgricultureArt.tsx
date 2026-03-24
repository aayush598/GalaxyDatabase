import React from 'react';

export const AgricultureArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="agr-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F0FDF4" /><stop offset="1" stopColor="#DCFCE7" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#agr-bg)" />
        {/* Ground */}
        <rect x="0" y="124" width="320" height="38" fill="#BBF7D0" opacity=".4" />
        {/* Tractor simplified */}
        <rect x="190" y="90" width="88" height="40" fill="#4ADE80" opacity=".3" rx="6" />
        <rect x="196" y="96" width="50" height="28" fill="#16A34A" opacity=".2" rx="4" />
        <circle cx="210" cy="132" r="14" fill="#15803D" opacity=".3" stroke="#16A34A" strokeWidth="1.5" />
        <circle cx="210" cy="132" r="7" fill="#15803D" opacity=".4" />
        <circle cx="264" cy="132" r="10" fill="#15803D" opacity=".3" stroke="#16A34A" strokeWidth="1.5" />
        <circle cx="264" cy="132" r="5" fill="#15803D" opacity=".4" />
        {/* Plants */}
        {[50, 90, 130, 165].map((x, i) => (
            <g key={i}>
                <line x1={x} y1="124" x2={x} y2="90" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" />
                <path d={`M${x} ${104 - i * 4} Q${x - 16} ${96 - i * 4} ${x - 20} ${84 - i * 4}`} stroke="#22C55E" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".7" />
                <path d={`M${x} ${104 - i * 4} Q${x + 16} ${96 - i * 4} ${x + 20} ${84 - i * 4}`} stroke="#22C55E" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".7" />
            </g>
        ))}
        {/* Sun */}
        <circle cx="268" cy="36" r="18" fill="#FDE68A" opacity=".5" />
        <circle cx="268" cy="36" r="11" fill="#F59E0B" opacity=".4" />
        {[[26, 42, 5], [50, 38, 4], [306, 98, 4]].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#86EFAC" opacity=".6" />
        ))}
    </svg>
);
