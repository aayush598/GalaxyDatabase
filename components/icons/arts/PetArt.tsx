import React from 'react';

export const PetArt = () => (
    <svg viewBox="0 0 320 162" fill="none" className="w-full h-full">
        <defs>
            <linearGradient id="pet-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FFF7ED" /><stop offset="1" stopColor="#FFEDD5" /></linearGradient>
        </defs>
        <rect width="320" height="162" fill="url(#pet-bg)" />
        {/* Dog body */}
        <ellipse cx="160" cy="104" rx="56" ry="38" fill="#FDBA74" opacity=".3" />
        <ellipse cx="160" cy="104" rx="56" ry="38" fill="none" stroke="#F97316" strokeWidth="1.5" />
        {/* Dog head */}
        <circle cx="210" cy="74" r="28" fill="#FDBA74" opacity=".35" />
        <circle cx="210" cy="74" r="28" fill="none" stroke="#F97316" strokeWidth="1.5" />
        {/* Ears */}
        <ellipse cx="194" cy="56" rx="12" ry="18" fill="#FB923C" opacity=".4" transform="rotate(-20,194,56)" />
        <ellipse cx="228" cy="52" rx="12" ry="18" fill="#FB923C" opacity=".4" transform="rotate(20,228,52)" />
        {/* Eyes */}
        <circle cx="204" cy="70" r="5" fill="#7C2D12" opacity=".6" />
        <circle cx="222" cy="70" r="5" fill="#7C2D12" opacity=".6" />
        <circle cx="205" cy="68" r="2" fill="white" opacity=".7" />
        <circle cx="223" cy="68" r="2" fill="white" opacity=".7" />
        {/* Nose */}
        <ellipse cx="213" cy="81" rx="7" ry="5" fill="#7C2D12" opacity=".4" />
        {/* Paw prints */}
        {[[56, 60], [76, 44], [86, 66]].map(([cx, cy], i) => (
            <g key={i}>
                <circle cx={cx} cy={cy} r={5} fill="#FDBA74" opacity=".5" />
                <circle cx={cx - 6} cy={cy - 6} r={3} fill="#FDBA74" opacity=".4" />
                <circle cx={cx + 6} cy={cy - 6} r={3} fill="#FDBA74" opacity=".4" />
                <circle cx={cx} cy={cy - 9} r={3} fill="#FDBA74" opacity=".4" />
            </g>
        ))}
        {[[28, 110, 5], [296, 50, 5], [298, 128, 4]].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#FDBA74" opacity=".5" />
        ))}
    </svg>
);
