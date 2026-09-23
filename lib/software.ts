/* ═══════════════════════════════════════════════════════════════════
   Galaxy Connect | Software Info Data Layer
   Single source of truth for the GalaxyConnect App (self-service lead
   marketplace). Consumed by the marketing pages and exposed via
   GET /api/software so any client can fetch the full product profile.
═══════════════════════════════════════════════════════════════════ */

const SOFTWARE_BACKEND_URL = 'https://galaxyconnect.vercel.app'

export interface SoftwareStat {
    value: string
    label: string
}

export interface SoftwareHighlight {
    id: string
    title: string
    description: string
}

export interface SoftwareFeature {
    id: string
    title: string
    tag: string
    tagColor: string
    dot: string
    description: string
}

export interface SoftwareStep {
    id: number
    title: string
    description: string
}

export interface SoftwareDownload {
    id: string
    label: string
    note: string
    href: string
    accent: string
    tint: string
}

export const SOFTWARE_INFO = {
    name: 'GalaxyConnect',
    appName: 'GalaxyConnect App',
    version: '1.1.2',
    status: 'Live',
    tagline: 'Buy verified leads on demand',
    description:
        'GalaxyConnect App is our self-service B2B lead marketplace. Create an account, add credits, browse verified lead categories, and purchase leads instantly. No calls, no waiting, no middlemen.',
    longDescription:
        'We built GalaxyConnect App so buying leads is as simple as buying anything online. It brings the same daily-updated, verified databases that power Galaxy Connect into a clean mobile experience: pick a category, choose leads, and they are assigned to you in seconds. A secure backend (JWT + bcrypt, rate limiting and account lockout), credit-based pricing, complete order & transaction history, CSV/JSON export, and an integrated admin panel make it a full professional lead-buying platform.',
    platformLabel: 'Android · iOS · macOS · Windows · Linux',
    backendUrl: SOFTWARE_BACKEND_URL,
    whatsappNumber: '+91 62677 31901',
    email: 'support@galaxyconnect.in',
    stats: [
        { value: '50+', label: 'Lead categories' },
        { value: '30L+', label: 'Verified records' },
        { value: 'Instant', label: 'Purchase & delivery' },
        { value: '24/7', label: 'Self-service access' },
    ] as SoftwareStat[],
    highlights: [
        {
            id: 'browse',
            title: 'Browse categories with live counts',
            description: 'Explore verified lead categories with record counts and per-lead pricing before you spend.',
        },
        {
            id: 'credits',
            title: 'Pay only for what you buy',
            description: 'Credit-based wallet means no subscriptions and no lock-in. Top up once and spend per lead.',
        },
        {
            id: 'instant',
            title: 'Leads delivered instantly',
            description: 'Orders complete in seconds and leads are exported to Excel, CSV or JSON for your CRM.',
        },
        {
            id: 'secure',
            title: 'Secure, private & audited',
            description: 'JWT authentication, encrypted storage, full order history and admin audit logging.',
        },
    ] as SoftwareHighlight[],
    features: [
        {
            id: 'marketplace',
            title: 'Lead Marketplace',
            tag: 'Browse',
            tagColor: 'bg-blue-50 text-blue-700 border-blue-100',
            dot: 'bg-blue-500',
            description:
                'Browse categories of verified B2B & B2C leads with live record counts and per-lead pricing. The full Galaxy Connect library, in your hand.',
        },
        {
            id: 'wallet',
            title: 'Credit Wallet',
            tag: 'Pricing',
            tagColor: 'bg-amber-50 text-amber-700 border-amber-100',
            dot: 'bg-amber-500',
            description:
                'A pay-as-you-go credit wallet. Add credits once, spend per lead at your rate, and watch every purchase in a transparent transaction ledger.',
        },
        {
            id: 'instant',
            title: 'Instant Purchase & Export',
            tag: 'Delivery',
            tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
            dot: 'bg-emerald-500',
            description:
                'Orders assign purchased leads in seconds. Export clean Excel, CSV or JSON files that drop straight into any CRM, auto-dialer or campaign tool.',
        },
        {
            id: 'history',
            title: 'Notes & Order History',
            tag: 'CRM-lite',
            tagColor: 'bg-violet-50 text-violet-700 border-violet-100',
            dot: 'bg-violet-500',
            description:
                'Attach follow-up notes to any lead, review past orders, and audit exactly how every credit was spent.',
        },
        {
            id: 'secure',
            title: 'Secure by Design',
            tag: 'Security',
            tagColor: 'bg-rose-50 text-rose-700 border-rose-100',
            dot: 'bg-rose-500',
            description:
                'JWT authentication, bcrypt password hashing, rate limiting, progressive account lockout and role-based access, all built in from day one.',
        },
        {
            id: 'admin',
            title: 'Admin Control Panel',
            tag: 'Admin',
            tagColor: 'bg-slate-50 text-slate-700 border-slate-200',
            dot: 'bg-slate-500',
            description:
                'Manage users, categories, leads, credit rates and category visibility from a single role-based panel with a full audit log.',
        },
    ] as SoftwareFeature[],
    steps: [
        {
            id: 1,
            title: 'Create your account',
            description: 'Sign up free in under a minute with just your name, email and a secure password.',
        },
        {
            id: 2,
            title: 'Add credits to your wallet',
            description: 'Top up your credit balance with Razorpay. Simple, verified payments, right on your device.',
        },
        {
            id: 3,
            title: 'Browse & pick your leads',
            description: 'Explore the categories visible to you, check counts and pricing, and choose exactly the leads you need.',
        },
        {
            id: 4,
            title: 'Export & start selling',
            description: 'Orders complete instantly. Export leads to Excel, CSV or JSON and kick off your outreach.',
        },
    ] as SoftwareStep[],
    included: [
        'CSV / JSON export',
        'Excel download',
        'Dark mode',
        'Pagination',
        'Soft delete',
        'Audit logging',
        'Rate limiting & lockout',
        'Zod validation',
        'Accessibility support',
    ],
    techStack: [
        'Next.js 14',
        'Drizzle ORM',
        'PostgreSQL · Neon',
        'Flutter 3',
        'BLoC state management',
        'JWT + bcrypt',
        'Razorpay payments',
        'Vercel',
    ],
    downloads: [
        { id: 'android', label: 'Android', note: 'APK', accent: 'text-emerald-600', tint: 'bg-emerald-50', href: `${SOFTWARE_BACKEND_URL}/download/android` },
        { id: 'ios', label: 'iOS', note: 'App Store', accent: 'text-ink', tint: 'bg-slate-100', href: `${SOFTWARE_BACKEND_URL}/download/ios` },
        { id: 'mac', label: 'macOS', note: 'DMG', accent: 'text-ink', tint: 'bg-slate-100', href: `${SOFTWARE_BACKEND_URL}/download/mac` },
        { id: 'windows', label: 'Windows', note: 'EXE', accent: 'text-blue-600', tint: 'bg-blue-50', href: `${SOFTWARE_BACKEND_URL}/download/windows` },
        { id: 'linux', label: 'Linux', note: 'AppImage', accent: 'text-gold', tint: 'bg-amber-50', href: `${SOFTWARE_BACKEND_URL}/download/linux` },
    ] as SoftwareDownload[],
}