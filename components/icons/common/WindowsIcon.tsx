import React from 'react';

interface IconProps {
    size?: number | string;
    className?: string;
}

export const WindowsIcon = ({ size = 24, className }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor" className={className} aria-hidden="true">
        <path d="M480 265H264v216h216V265zM216 265H24v216h192V265zM480 32H264v216h216V32zM216 32H24v216h192V32z" />
    </svg>
);