import React from 'react';

interface IconProps {
    size?: number | string;
    className?: string;
    strokeWidth?: number;
}

export const SearchIcon = ({ size = 24, className, strokeWidth = 1.5 }: IconProps) => (
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
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
    </svg>
);
