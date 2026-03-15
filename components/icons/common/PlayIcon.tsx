import React from 'react';

interface IconProps {
    size?: number | string;
    className?: string;
    fill?: string;
}

export const PlayIcon = ({ size = 24, className, fill = "currentColor" }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill}
        className={className}
    >
        <path d="M8 5v14l11-7z" />
    </svg>
);
