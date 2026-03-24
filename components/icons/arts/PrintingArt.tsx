import React from 'react';

export const PrintingArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="prt-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F0F9FF" /><stop offset="1" stopColor="#E0F2FE" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#prt-bg)" />
        {/* Printer body */}
        <rect x="90" y="62" width="140" height="56" fill="#38BDF8" opacity=".2" rx="6" />
        <rect x="92" y="64" width="136" height="52" fill="none" stroke="#0EA5E9" strokeWidth="1.5" rx="5" />
        {/* Paper slot */}
        <rect x="108" y="74" width="104" height="6" fill="#0EA5E9" opacity=".3" rx="2" />
        {/* Button */}
        <circle cx="204" cy="88" r="7" fill="#0EA5E9" opacity=".4" />
        <circle cx="204" cy="88" r="4" fill="#0284C7" opacity=".5" />
        {/* Paper coming out */}
        <rect x="116" y="104" width="88" height="38" fill="white" opacity=".8" stroke="#BAE6FD" strokeWidth="1.5" rx="2" />
        {[116, 122, 128].map((y, i) => (
            <line key={i} x1="126" y1={y + 10} x2={i === 0 ? 194 : i === 1 ? 180 : 170} y2={y + 10} stroke="#BAE6FD" strokeWidth="1.5" strokeLinecap="round" />
        ))}
        {/* Paper going in top */}
        <rect x="116" y="34" width="88" height="32" fill="white" opacity=".7" stroke="#BAE6FD" strokeWidth="1.5" rx="2" />
        {[40, 48, 56].map((y, i) => (
            <line key={i} x1="126" y1={y} x2={i === 0 ? 192 : i === 1 ? 178 : 186} y2={y} stroke="#BAE6FD" strokeWidth="1.5" strokeLinecap="round" />
        ))}
        {[[36, 86, 5], [284, 86, 5], [36, 130, 4], [284, 130, 4]].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#38BDF8" opacity=".4" />
        ))}
    </svg>
);
