import React from 'react';

interface IconProps {
    size?: number | string;
    className?: string;
    strokeWidth?: number;
}

export const ArrowLeft = ({ size = 24, className, strokeWidth = 2 }: IconProps) => (
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
        <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
);
