import React from 'react';

export const EducationBizArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="edu-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F5F3FF" /><stop offset="1" stopColor="#EDE9FE" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#edu-bg)" />
        {/* Graduation cap */}
        <polygon points="160,28 218,55 160,82 102,55" fill="#8B5CF6" opacity=".25" />
        <polygon points="160,28 218,55 160,82 102,55" fill="none" stroke="#7C3AED" strokeWidth="1.5" />
        <line x1="218" y1="55" x2="218" y2="90" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
        <path d="M210 90 Q218 98 226 90" stroke="#7C3AED" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Books stack */}
        {[
            { x: 60, y: 88, w: 70, h: 14, fill: '#A78BFA', o: .4 },
            { x: 64, y: 76, w: 64, h: 14, fill: '#8B5CF6', o: .3 },
            { x: 68, y: 64, w: 58, h: 14, fill: '#DDD6FE', o: .5 },
        ].map((b, i) => (
            <g key={i}>
                <rect x={b.x} y={b.y} width={b.w} height={b.h} fill={b.fill} opacity={b.o} rx="3" />
                <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="none" stroke="#7C3AED" strokeWidth="1" rx="3" />
                <line x1={b.x + 8} y1={b.y} x2={b.x + 8} y2={b.y + b.h} stroke="#7C3AED" strokeWidth="1" opacity=".4" />
            </g>
        ))}
        {/* Pencil */}
        <rect x="248" y="50" width="12" height="68" fill="#C4B5FD" opacity=".5" rx="2" transform="rotate(-15,254,84)" />
        <polygon points="248,120 260,120 254,134" fill="#7C3AED" opacity=".5" transform="rotate(-15,254,84)" />
        {[[28, 34, 6], [296, 46, 5], [300, 130, 4], [22, 128, 4]].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#A78BFA" opacity=".4" />
        ))}
    </svg>
);
