import React from 'react';

interface IconProps {
    size?: number | string;
    className?: string;
    strokeWidth?: number;
}

export const ArrowRight = ({ size = 24, className, strokeWidth = 2 }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className={className}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);
