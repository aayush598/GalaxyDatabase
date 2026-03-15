import React from 'react';

interface IconProps {
    size?: number | string;
    className?: string;
}

export const LogoIcon = ({ size = 16, className }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        className={className}
    >
        <circle cx="8" cy="8" r="3" fill="white" />
        <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
        <circle cx="8" cy="2" r="1.5" fill="#F59E0B" />
    </svg>
);
