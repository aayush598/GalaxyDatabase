import React from 'react';

export const MedicalArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="med-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFF1F2" /><stop offset="1" stopColor="#FFE4E6" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#med-bg)" />
        {/* Large cross */}
        <rect x="140" y="30" width="40" height="100" fill="#FB7185" opacity=".25" rx="4" />
        <rect x="110" y="61" width="100" height="40" fill="#FB7185" opacity=".25" rx="4" />
        <rect x="144" y="34" width="32" height="94" fill="none" stroke="#F43F5E" strokeWidth="1.5" rx="4" />
        <rect x="114" y="65" width="92" height="32" fill="none" stroke="#F43F5E" strokeWidth="1.5" rx="4" />
        {/* Stethoscope */}
        <path d="M55 52 Q55 90 80 100 Q105 110 105 90" stroke="#F43F5E" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="105" cy="85" r="10" fill="#FB7185" opacity=".4" stroke="#F43F5E" strokeWidth="2" />
        <circle cx="48" cy="52" r="6" fill="#FB7185" opacity=".5" />
        <circle cx="62" cy="52" r="6" fill="#FB7185" opacity=".5" />
        {/* Pill */}
        <rect x="240" y="56" width="56" height="24" fill="#FB7185" opacity=".3" rx="12" />
        <line x1="268" y1="56" x2="268" y2="80" stroke="#F43F5E" strokeWidth="1.5" />
        <rect x="242" y="58" width="52" height="20" fill="none" stroke="#F43F5E" strokeWidth="1" rx="10" />
        {/* Heartbeat line */}
        <polyline points="20,100 50,100 62,72 74,128 86,100 120,100" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".5" />
        {[[290, 30, 5], [306, 120, 4], [22, 44, 4]].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#FB7185" opacity=".4" />
        ))}
    </svg>
);
