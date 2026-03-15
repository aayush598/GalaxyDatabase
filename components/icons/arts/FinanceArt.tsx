import React from 'react';

export const FinanceArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="p3-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F0FDF4" /><stop offset="1" stopColor="#DCFCE7" /></linearGradient>
            <linearGradient id="p3-bar" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#22C55E" /><stop offset="1" stopColor="#16A34A" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#p3-bg)" />
        {[42, 62, 82, 102, 122].map((y, i) => <line key={i} x1="30" y1={y} x2="228" y2={y} stroke="#BBF7D0" strokeWidth="1" />)}
        {[[42, 60, 84], [70, 44, 92], [98, 68, 64], [126, 34, 108], [154, 52, 78], [182, 26, 118]].map(([x, h, barH], i) => <rect key={i} x={x} y={barH} width="22" height={132 - barH} fill="url(#p3-bar)" opacity={.48 + i * .07} rx="3" />)}
        <polyline points="53,92 81,80 109,88 137,57 165,64 193,32" stroke="#15803D" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {[[53, 92], [81, 80], [109, 88], [137, 57], [165, 64], [193, 32]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4.5" fill="white" stroke="#15803D" strokeWidth="2" />)}
        {[0, 1, 2].map((i) => <ellipse key={i} cx="278" cy={124 - i * 11} rx="24" ry="9" fill={i === 2 ? "#22C55E" : "#16A34A"} opacity={.68 + i * .1} />)}
        <text x="278" y="105" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="serif">₹</text>
        <path d="M272 50 L278 36 L284 50" stroke="#15803D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="278" y1="36" x2="278" y2="63" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
    </svg>
);
