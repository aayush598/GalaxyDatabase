import React from 'react';
import { AndroidIcon } from './AndroidIcon';
import { AppleIcon } from './AppleIcon';
import { IPhoneIcon } from './IPhoneIcon';
import { WindowsIcon } from './WindowsIcon';
import { LinuxIcon } from './LinuxIcon';
import { DownloadIcon } from './DownloadIcon';

interface IconProps {
    size?: number | string;
    className?: string;
}

const PLATFORM_ICONS: Record<string, React.FC<IconProps>> = {
    android: AndroidIcon,
    ios: IPhoneIcon,
    mac: AppleIcon,
    windows: WindowsIcon,
    linux: LinuxIcon,
};

export const PlatformIcon = ({ id, size = 24, className }: IconProps & { id: string }) => {
    const Icon = PLATFORM_ICONS[id] ?? DownloadIcon;
    return <Icon size={size} className={className} />;
};