import React from 'react';

export const GarmentArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs><linearGradient id="p8-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#EEF2FF" /><stop offset="1" stopColor="#E0E7FF" /></linearGradient></defs>
        <rect width="320" height="162" fill="url(#p8-bg)" />
        <rect x="20" y="30" width="86" height="106" rx="6" fill="#6366F1" opacity=".12" stroke="#6366F1" strokeWidth="1" />
        {[42, 54, 66, 78, 90, 102, 114, 126].map((y, i) => <line key={i} x1="20" y1={y} x2="106" y2={y} stroke="#6366F1" strokeWidth="1" opacity=".2" />)}
        {[38, 54, 70, 86].map((x, i) => <line key={i} x1={x} y1="30" x2={x} y2="136" stroke="#6366F1" strokeWidth="1" opacity=".2" />)}
        <path d="M116 136 Q138 62 200 42 Q232 34 264 46 L264 72 Q232 60 200 68 Q138 88 116 160Z" fill="#6366F1" opacity=".18" />
        <path d="M121 136 Q143 68 202 48 Q232 40 262 52" stroke="#818CF8" strokeWidth="2" fill="none" strokeLinecap="round" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => { const t = i / 6; const x = 121 + t * (262 - 121); const y = 136 + t * (52 - 136); return <circle key={i} cx={x} cy={y} r="3.5" fill="#6366F1" opacity=".5" /> })}
        <line x1="256" y1="84" x2="256" y2="148" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="256" cy="82" rx="5" ry="8.5" fill="#818CF8" opacity=".7" />
        <ellipse cx="258" cy="84" rx="2.5" ry="3.5" fill="white" opacity=".8" />
        <path d="M256 148 Q278 138 288 122 Q278 106 256 116" stroke="#A5B4FC" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {['#6366F1', '#818CF8', '#E879F9', '#F472B6', '#34D399'].map((c, i) => (
            <rect key={i} x={20 + i * 13} y="142" width="11" height="16" rx="2" fill={c} opacity=".7" />
        ))}
    </svg>
);
