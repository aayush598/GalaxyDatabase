import { MetadataRoute } from 'next';
import { ALL_LEAD_CATEGORIES, slugify } from '@/lib/categories';
import { POSTS } from '@/lib/posts';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const leadPages: MetadataRoute.Sitemap = ALL_LEAD_CATEGORIES.map((c) => ({
        url: `${SITE_URL}/leads/${slugify(c.title)}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const blogPosts: MetadataRoute.Sitemap = POSTS.map((p) => ({
        url: `${SITE_URL}/blog/${p.slug}`,
        lastModified: new Date(p.updated),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [
        {
            url: SITE_URL,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${SITE_URL}/categories`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/software`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...leadPages,
        ...blogPosts,
        {
            url: `${SITE_URL}/refund-policy`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: `${SITE_URL}/terms-and-conditions`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.4,
        },
    ];
}