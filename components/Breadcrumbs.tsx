import React from 'react';
import Link from 'next/link';
import { HomeIcon } from './icons';

/**
 * Lightweight visual breadcrumb navigation. Pair with a BreadcrumbList
 * JSON-LD block for structured-data breadcrumbs in search results.
 */
export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 flex-wrap text-xs">
            <Link
                href="/"
                className="flex items-center gap-1.5 text-slate-400 hover:text-ink transition-colors"
            >
                <HomeIcon size={11} />
                <span>Home</span>
            </Link>
            {items.map((item, i) => (
                <span key={i} className="flex items-center gap-1.5">
                    <span className="text-slate-300" aria-hidden="true">›</span>
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="text-slate-400 hover:text-ink transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-ink font-medium max-w-[260px] truncate">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
}