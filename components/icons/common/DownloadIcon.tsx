import React from 'react';

interface IconProps {
    size?: number | string;
    className?: string;
    strokeWidth?: number;
}

export const DownloadIcon = ({ size = 24, className, strokeWidth = 2 }: IconProps) => (
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
        <path d="M12 3v12" />
        <path d="m7 11 5 5 5-5" />
        <path d="M4 19h16" />
    </svg>
);