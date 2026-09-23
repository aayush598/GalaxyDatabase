import React from 'react';

interface IconProps {
    size?: number | string;
    className?: string;
}

export const IPhoneIcon = ({ size = 24, className }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <rect x="4.5" y="2" width="15" height="20" rx="3.5" />
        <rect x="7.3" y="4.8" width="9.4" height="11.6" rx="1.8" />
        <rect x="9.5" y="3.7" width="5" height="1.5" rx="0.75" fill="currentColor" stroke="none" />
        <path d="M8.5 19.5h7" />
    </svg>
);