import React from 'react';

export const ConsumerArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs><linearGradient id="p6-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFF1F2" /><stop offset="1" stopColor="#FFE4E6" /></linearGradient></defs>
        <rect width="320" height="162" fill="url(#p6-bg)" />
        <rect x="18" y="68" width="62" height="11" rx="5" fill="#FB7185" opacity=".7" />
        <rect x="12" y="57" width="14" height="30" rx="5" fill="#E11D48" opacity=".48" />
        <rect x="74" y="57" width="14" height="30" rx="5" fill="#E11D48" opacity=".48" />
        <path d="M114 48 L152 30 L162 32 Q168 35 162 42 L147 44 L142 65 L132 65 L135 44 L118 48 L115 54 L109 54 L111 48 Z" fill="#FB7185" opacity=".7" />
        <circle cx="212" cy="44" r="18" fill="none" stroke="#FB7185" strokeWidth="4.5" opacity=".58" />
        <circle cx="231" cy="44" r="18" fill="none" stroke="#E11D48" strokeWidth="4.5" opacity=".48" />
        <circle cx="221.5" cy="44" r="5.5" fill="#FCA5A5" opacity=".58" />
        <path d="M30 126 L72 82" stroke="#FB7185" strokeWidth="3" strokeLinecap="round" />
        <path d="M30 126 L24 119 L39 119 Z" fill="#E11D48" opacity=".58" />
        {[[56, 102, 6.5], [84, 86, 8.5], [108, 108, 5], [46, 92, 7.5], [80, 120, 4.5]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill={['#FCA5A5', '#FCD34D', '#86EFAC', '#93C5FD', '#DDD6FE'][i]} opacity=".58" />)}
        <path d="M274 100 C274 95 268 89 262 93 C256 89 250 95 250 100 C250 111 262 122 262 122 C262 122 274 111 274 100Z" fill="#FB7185" opacity=".48" />
        {[[152, 102, 4.5], [172, 118, 3.5], [190, 96, 5.5], [298, 66, 4.5]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill="#FCA5A5" opacity=".48" />)}
    </svg>
);
