import React from 'react';

export const RestaurantArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs><linearGradient id="p9-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFFBEB" /><stop offset="1" stopColor="#FEF3C7" /></linearGradient></defs>
        <rect width="320" height="162" fill="url(#p9-bg)" />
        <ellipse cx="160" cy="54" rx="36" ry="30" fill="#F59E0B" opacity=".2" />
        <rect x="128" y="54" width="64" height="32" rx="4" fill="#F59E0B" opacity=".22" />
        <ellipse cx="160" cy="54" rx="36" ry="30" fill="none" stroke="#F59E0B" strokeWidth="2" />
        <rect x="128" y="54" width="64" height="32" rx="4" fill="none" stroke="#F59E0B" strokeWidth="2" />
        {[136, 150, 164, 178].map((x, i) => <line key={i} x1={x} y1="54" x2={x} y2="86" stroke="#F59E0B" strokeWidth="1.2" opacity=".35" />)}
        <ellipse cx="160" cy="128" rx="56" ry="19" fill="#FCD34D" opacity=".2" stroke="#F59E0B" strokeWidth="1.5" />
        <ellipse cx="160" cy="126" rx="41" ry="13" fill="#FCD34D" opacity=".15" stroke="#F59E0B" strokeWidth="1" />
        <line x1="90" y1="72" x2="90" y2="136" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
        {[84, 90, 96].map((x, i) => <line key={i} x1={x} y1="72" x2={x} y2="90" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />)}
        <path d="M84 90 Q90 98 96 90" stroke="#D97706" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="230" y1="72" x2="230" y2="136" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M230 72 Q242 82 235 96 L230 96Z" fill="#D97706" opacity=".5" />
        {[[146, 62], [160, 58], [174, 62]].map(([x, y], i) => (
            <path key={i} d={`M${x} ${y} Q${x - 4} ${y - 8} ${x} ${y - 16} Q${x + 4} ${y - 24} ${x} ${y - 32}`} stroke="#F59E0B" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".4" />
        ))}
        {([[40, 52, 8, '#FB923C'], [280, 52, 8, '#FB923C'], [34, 112, 6, '#FCD34D'], [286, 112, 6, '#FCD34D']] as const).map(([cx, cy, r, c], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill={c} opacity=".4" />
        ))}
    </svg>
);
