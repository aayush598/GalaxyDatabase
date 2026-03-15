import React from 'react';

export const HomeArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="p5-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFF7ED" /><stop offset="1" stopColor="#FFEDD5" /></linearGradient>
            <linearGradient id="p5-r" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#EA580C" /><stop offset="1" stopColor="#F97316" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#p5-bg)" />
        <circle cx="278" cy="38" r="22" fill="#FCD34D" opacity=".45" />
        <circle cx="278" cy="38" r="14" fill="#FBBF24" opacity=".65" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => { const r = a * Math.PI / 180; return <line key={i} x1={278 + 20 * Math.cos(r)} y1={38 + 20 * Math.sin(r)} x2={278 + 28 * Math.cos(r)} y2={38 + 28 * Math.sin(r)} stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" /> })}
        <path d="M52 132 L52 78 L116 32 L180 78 L180 132 Z" fill="#FED7AA" stroke="#F97316" strokeWidth="1.5" />
        <path d="M38 84 L116 28 L194 84" fill="url(#p5-r)" stroke="#C2410C" strokeWidth="1.5" />
        <rect x="102" y="101" width="28" height="31" rx="14" fill="#C2410C" opacity=".38" />
        <circle cx="124" cy="117" r="2.5" fill="#C2410C" />
        <rect x="62" y="84" width="25" height="22" rx="4" fill="#BAE6FD" stroke="#7DD3FC" strokeWidth="1" />
        <line x1="74.5" y1="84" x2="74.5" y2="106" stroke="#7DD3FC" strokeWidth="1" />
        <line x1="62" y1="95" x2="87" y2="95" stroke="#7DD3FC" strokeWidth="1" />
        <rect x="141" y="84" width="25" height="22" rx="4" fill="#BAE6FD" stroke="#7DD3FC" strokeWidth="1" />
        <line x1="153.5" y1="84" x2="153.5" y2="106" stroke="#7DD3FC" strokeWidth="1" />
        <line x1="141" y1="95" x2="166" y2="95" stroke="#7DD3FC" strokeWidth="1" />
        <rect x="196" y="92" width="78" height="30" rx="5" fill="#F97316" opacity=".18" stroke="#FB923C" strokeWidth="1.5" />
        <rect x="196" y="86" width="15" height="18" rx="4" fill="#FB923C" opacity=".38" />
        <rect x="259" y="86" width="15" height="18" rx="4" fill="#FB923C" opacity=".38" />
        <line x1="235" y1="132" x2="235" y2="66" stroke="#86EFAC" strokeWidth="2" />
        <ellipse cx="222" cy="76" rx="12" ry="8" fill="#4ADE80" opacity=".48" />
        <ellipse cx="247" cy="71" rx="11" ry="8" fill="#4ADE80" opacity=".38" />
        <ellipse cx="235" cy="64" rx="10" ry="7" fill="#22C55E" opacity=".48" />
    </svg>
);
