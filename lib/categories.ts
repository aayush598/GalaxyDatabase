/* ═══════════════════════════════════════════════════════════════════
   Galaxy Database — Categories Data Layer
   Two distinct category types:
   1. LEAD_CATEGORIES  — intent-based leads (sub-items listed in WA msg)
   2. BUSINESS_CATEGORIES — business directory / B2B lists
   Original 13 legacy categories retained for backward compatibility.
═══════════════════════════════════════════════════════════════════ */

export const WA_NUMBER = '916260712882'
export const WA_BASE = `https://wa.me/${WA_NUMBER}`

/* ─── Helper ─────────────────────────────────────────────────── */
export function buildWALink(title: string, items: string[]): string {
    const bullet = items.map((item) => `• ${item}`).join('\n')
    const msg =
        `Hello! I'm interested in the *${title}* database from Galaxy Database.\n\n` +
        `I'd like details & pricing for:\n${bullet}\n\n` +
        `Could you please share a sample file and pricing?`
    return `${WA_BASE}?text=${encodeURIComponent(msg)}`
}

export function getWALink(categoryTitle: string): string {
    const msg = encodeURIComponent(
        `Hello! I'm interested in the *${categoryTitle}* database from Galaxy Database. Could you please share pricing and a sample file?`
    )
    return `${WA_BASE}?text=${msg}`
}

/* ═══════════════════════════════════════════════════════════════
   TYPE 1 — LEAD CATEGORIES (intent-based, sub-items in WA msg)
   Priority order: 1→7 (shown top-first everywhere)
═══════════════════════════════════════════════════════════════ */
export interface LeadCategory {
    id: number
    title: string
    sector: string
    accentColor: string
    description: string
    subItems: string[]       // ← listed in WA message as bullets
    records: string
    idealFor: string
}

export const LEAD_CATEGORIES: LeadCategory[] = [
    {
        id: 1,
        title: 'Real Estate Leads',
        sector: 'Real Estate',
        accentColor: 'teal',
        description: 'Active property buyers, sellers, investors and home-loan seekers across Indian metros — ready for outreach.',
        subItems: [
            'Property Buyers Leads',
            'Property Sellers Leads',
            'Home Loan Interested Leads',
            'Plot Buyers Leads',
            'Commercial Property Leads',
        ],
        records: '2L+',
        idealFor: 'Brokers, builders, home loan DSAs, interior firms',
    },
    {
        id: 2,
        title: 'Automobile Leads',
        sector: 'Automotive',
        accentColor: 'slate',
        description: 'Car buyers, loan seekers, insurance renewal prospects and bike buyers — high-intent automotive audience.',
        subItems: [
            'Car Owner Leads',
            'Used Car Buyers Leads',
            'Car Loan Interested Leads',
            'Car Insurance Renewal Leads',
            'Bike Buyers Leads',
        ],
        records: '3L+',
        idealFor: 'Auto dealerships, DSAs, insurance agents, accessory brands',
    },
    {
        id: 3,
        title: 'Education Leads',
        sector: 'Education',
        accentColor: 'violet',
        description: 'Students interested in colleges, courses, study abroad and coaching — perfect for EdTech and institutes.',
        subItems: [
            'Students Interested in Colleges',
            'Students Interested in Courses',
            'Study Abroad Leads',
            'Coaching Institute Leads',
            'Online Course Leads',
        ],
        records: '5L+',
        idealFor: 'Ed-tech platforms, coaching centres, study abroad consultants',
    },
    {
        id: 4,
        title: 'Finance Leads',
        sector: 'Finance',
        accentColor: 'green',
        description: 'Personal loan, business loan, and insurance interested prospects verified for high conversion rates.',
        subItems: [
            'Personal Loan Interested Leads',
            'Business Loan Leads',
            'Insurance Interested Leads',
        ],
        records: '4L+',
        idealFor: 'NBFCs, DSAs, insurance agents, fintech apps',
    },
    {
        id: 5,
        title: 'Business Leads',
        sector: 'Business',
        accentColor: 'blue',
        description: 'Business owners, SMEs, startup founders and franchise seekers across India — B2B gold standard.',
        subItems: [
            'Business Owners Leads',
            'SME Owners Leads',
            'Startup Founders Leads',
            'Franchise Interested Leads',
        ],
        records: '2.5L+',
        idealFor: 'B2B SaaS, franchises, wholesale suppliers, consultants',
    },
    {
        id: 6,
        title: 'Home & Lifestyle Leads',
        sector: 'Lifestyle',
        accentColor: 'orange',
        description: 'Interior, renovation, modular kitchen and solar installation leads — home improvement at scale.',
        subItems: [
            'Interior Design Leads',
            'Home Renovation Leads',
            'Modular Kitchen Leads',
            'Solar Installation Leads',
        ],
        records: '1.8L+',
        idealFor: 'Interior designers, contractors, solar companies, kitchen brands',
    },
    {
        id: 7,
        title: 'Consumer Interest Leads',
        sector: 'Consumer',
        accentColor: 'rose',
        description: 'Gym, travel, events and wedding service seekers — hyper-targeted consumer intent segments.',
        subItems: [
            'Gym Membership Leads',
            'Travel Package Leads',
            'Event Service Leads',
            'Wedding Service Leads',
        ],
        records: '1.5L+',
        idealFor: 'Gyms, travel agencies, event planners, wedding vendors',
    },
]

/* ═══════════════════════════════════════════════════════════════
   TYPE 2 — BUSINESS DIRECTORY CATEGORIES (B2B shop/business lists)
   Shown AFTER Lead Categories on all pages
═══════════════════════════════════════════════════════════════ */
export interface BusinessCategory {
    id: number
    title: string
    sector: string
    accentColor: string
    description: string
    subItems: string[]
    records: string
    idealFor: string
}

export const BUSINESS_CATEGORIES: BusinessCategory[] = [
    {
        id: 101,
        title: 'Jewellers',
        sector: 'Retail',
        accentColor: 'gold',
        description: 'Gold, silver, diamond and imitation jewellery retailers across India — verified shop-owner contacts.',
        subItems: [
            'Gold Jewellery Shops',
            'Silver Jewellery Shops',
            'Bullion Traders',
            'Diamond Jewellery Dealers',
            'Imitation Jewellery Shops',
        ],
        records: '80K+',
        idealFor: 'Wholesale suppliers, POS providers, insurance, loan DSAs',
    },
    {
        id: 102,
        title: 'Garment & Textile',
        sector: 'Retail',
        accentColor: 'indigo',
        description: 'Garment retailers, saree shops, boutique owners and textile wholesalers — the complete fashion trade.',
        subItems: [
            'Garment Retailers',
            'Saree Shops',
            'Boutique Owners',
            'Textile Wholesalers',
            'Fabric Dealers',
        ],
        records: '1.2L+',
        idealFor: 'Wholesalers, machinery suppliers, payment solutions, logistics',
    },
    {
        id: 103,
        title: 'Restaurants & Food Businesses',
        sector: 'F&B',
        accentColor: 'amber',
        description: 'Restaurants, cafes, fast food outlets, bakeries and sweet shops — full food & beverage sector coverage.',
        subItems: [
            'Restaurants',
            'Cafes',
            'Fast Food Outlets',
            'Bakeries',
            'Sweet Shops',
        ],
        records: '2L+',
        idealFor: 'Food suppliers, POS systems, packaging, delivery platforms',
    },
]

/* ═══════════════════════════════════════════════════════════════
   LEGACY — original 13 categories (for backward compatibility)
   These remain fully functional
═══════════════════════════════════════════════════════════════ */
export interface Category {
    id: number
    title: string
    description: string
    sector: string
    accentColor: string
    tags: string[]
    records: string
    useCases: string
}

export const ALL_CATEGORIES: Category[] = [
    {
        id: 1,
        title: 'B2B / B2C Indian Companies',
        description: 'Comprehensive database of verified Indian businesses across all major sectors. Includes decision-makers, directors, founders, and proprietors.',
        sector: 'Business',
        accentColor: 'blue',
        tags: ['Manufacturers', 'Exporters', 'SMEs'],
        records: '2.5L+',
        useCases: 'B2B sales, enterprise outreach, distributor acquisition',
    },
    {
        id: 2,
        title: 'Students Database',
        description: 'Nationwide student data sourced from colleges and universities across India. Perfect for ed-tech, coaching institutes, and career placement.',
        sector: 'Education',
        accentColor: 'violet',
        tags: ['Engineering', 'MBA', 'Medical'],
        records: '5L+',
        useCases: 'Ed-tech, coaching centres, internship portals',
    },
    {
        id: 3,
        title: 'Government Employees',
        description: 'Verified government sector professionals with state & central employees, department-wise segmentation, and grade-level classification.',
        sector: 'Government',
        accentColor: 'emerald',
        tags: ['Central Govt', 'State Govt', 'PSUs'],
        records: '3L+',
        useCases: 'Financial products, insurance, retirement planning',
    },
    {
        id: 4,
        title: 'Doctors & Medical Practitioners',
        description: 'Registered physicians, specialists, and clinic owners across India. Verified with specialisation and city-level targeting.',
        sector: 'Healthcare',
        accentColor: 'rose',
        tags: ['Specialists', 'General', 'Clinics'],
        records: '1.8L+',
        useCases: 'Pharma, medical devices, health-tech platforms',
    },
    {
        id: 5,
        title: 'Teachers & Educators',
        description: 'School and college faculty from private, government, and aided institutions, segmented by board type and institution grade.',
        sector: 'Education',
        accentColor: 'amber',
        tags: ['CBSE', 'State Board', 'Colleges'],
        records: '2L+',
        useCases: 'EdTech tools, online courses, educational content',
    },
    {
        id: 6,
        title: 'HNI Professionals',
        description: 'High Net-worth Individuals — CXOs, directors, VPs and senior managers from top Indian corporates.',
        sector: 'Corporate',
        accentColor: 'gold',
        tags: ['CXOs', 'Directors', 'VPs'],
        records: '90K+',
        useCases: 'Wealth management, luxury goods, premium services',
    },
    {
        id: 7,
        title: 'Car Owners Database',
        description: 'Vehicle registration-linked owner data with brand, model year, and city segmentation.',
        sector: 'Automotive',
        accentColor: 'slate',
        tags: ['Luxury', 'Mid-Range', 'New Buyers'],
        records: '4L+',
        useCases: 'Auto insurance, accessories, service centres',
    },
    {
        id: 8,
        title: 'Real Estate Leads',
        description: 'Active property buyers, sellers, investors and NRI prospects across Indian metros.',
        sector: 'Real Estate',
        accentColor: 'teal',
        tags: ['Buyers', 'Investors', 'NRI'],
        records: '1.5L+',
        useCases: 'Brokers, builders, home loan providers',
    },
    {
        id: 9,
        title: 'Insurance Database',
        description: 'Active policy holders and high-intent insurance prospects segmented by life, health, vehicle, and term insurance.',
        sector: 'Insurance',
        accentColor: 'indigo',
        tags: ['Life', 'Health', 'Vehicle'],
        records: '3.5L+',
        useCases: 'Cross-sell, renewals, new policy acquisition',
    },
    {
        id: 10,
        title: 'Demat Account Holders',
        description: 'Active demat account holders and equity investors for stockbrokers, fintech apps and wealth advisors.',
        sector: 'Finance',
        accentColor: 'green',
        tags: ['Investors', 'Traders', 'Mutual Funds'],
        records: '2.2L+',
        useCases: 'Brokerages, fintech, mutual fund distribution',
    },
    {
        id: 11,
        title: 'OLX Marketplace Users',
        description: 'High-intent buyers and sellers active on OLX marketplace, categorised by product vertical.',
        sector: 'E-Commerce',
        accentColor: 'orange',
        tags: ['Buyers', 'Sellers', 'Premium'],
        records: '1.2L+',
        useCases: 'Consumer goods, recommerce, classifieds',
    },
    {
        id: 12,
        title: 'Chemical & Pharma Companies',
        description: 'Manufacturers, distributors and stockists in chemical and pharmaceutical industry.',
        sector: 'Industry',
        accentColor: 'cyan',
        tags: ['Manufacturers', 'API', 'Distributors'],
        records: '80K+',
        useCases: 'Raw material supply, logistics, regulatory services',
    },
    {
        id: 13,
        title: 'CBSE School Database',
        description: 'All CBSE-affiliated schools across India with contact details for principals, coordinators and admission officers.',
        sector: 'Education',
        accentColor: 'yellow',
        tags: ['Urban', 'Semi-Urban', 'Rural'],
        records: '45K+',
        useCases: 'EdTech, school supply, administration software',
    },
]

export const FEATURED_CATEGORIES = ALL_CATEGORIES.slice(0, 6)
export const REMAINING_CATEGORIES = ALL_CATEGORIES.slice(6)

/* ─── UNIFIED — all 10 categories merged into one flat array ─── */
export interface UnifiedCategory {
    id: number; title: string; sector: string; accentColor: string
    description: string; subItems: string[]; records: string; idealFor: string
}
export const ALL_LEAD_CATEGORIES: UnifiedCategory[] = [
    ...LEAD_CATEGORIES,
    ...BUSINESS_CATEGORIES,
]

/* ─── Accent palette ─────────────────────────────────────────── */
export const palette: Record<
    string,
    { dot: string; tag: string; record: string; bar: string; btn: string; ring: string; itemDot: string }
> = {
    blue: { dot: 'bg-blue-500', tag: 'bg-blue-50 text-blue-700 border-blue-100', record: 'text-blue-600', bar: 'bg-blue-400', btn: 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20', ring: 'hover:ring-blue-200', itemDot: 'bg-blue-400' },
    violet: { dot: 'bg-violet-500', tag: 'bg-violet-50 text-violet-700 border-violet-100', record: 'text-violet-600', bar: 'bg-violet-400', btn: 'bg-violet-600 hover:bg-violet-700 shadow-violet-600/20', ring: 'hover:ring-violet-200', itemDot: 'bg-violet-400' },
    emerald: { dot: 'bg-emerald-500', tag: 'bg-emerald-50 text-emerald-700 border-emerald-100', record: 'text-emerald-600', bar: 'bg-emerald-400', btn: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20', ring: 'hover:ring-emerald-200', itemDot: 'bg-emerald-400' },
    rose: { dot: 'bg-rose-500', tag: 'bg-rose-50 text-rose-700 border-rose-100', record: 'text-rose-600', bar: 'bg-rose-400', btn: 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/20', ring: 'hover:ring-rose-200', itemDot: 'bg-rose-400' },
    amber: { dot: 'bg-amber-500', tag: 'bg-amber-50 text-amber-700 border-amber-100', record: 'text-amber-600', bar: 'bg-amber-400', btn: 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/20', ring: 'hover:ring-amber-200', itemDot: 'bg-amber-400' },
    slate: { dot: 'bg-slate-500', tag: 'bg-slate-50 text-slate-700 border-slate-200', record: 'text-slate-600', bar: 'bg-slate-400', btn: 'bg-slate-700 hover:bg-slate-800 shadow-slate-700/20', ring: 'hover:ring-slate-200', itemDot: 'bg-slate-400' },
    teal: { dot: 'bg-teal-500', tag: 'bg-teal-50 text-teal-700 border-teal-100', record: 'text-teal-600', bar: 'bg-teal-400', btn: 'bg-teal-600 hover:bg-teal-700 shadow-teal-600/20', ring: 'hover:ring-teal-200', itemDot: 'bg-teal-400' },
    indigo: { dot: 'bg-indigo-500', tag: 'bg-indigo-50 text-indigo-700 border-indigo-100', record: 'text-indigo-600', bar: 'bg-indigo-400', btn: 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20', ring: 'hover:ring-indigo-200', itemDot: 'bg-indigo-400' },
    green: { dot: 'bg-green-500', tag: 'bg-green-50 text-green-700 border-green-100', record: 'text-green-600', bar: 'bg-green-400', btn: 'bg-green-600 hover:bg-green-700 shadow-green-600/20', ring: 'hover:ring-green-200', itemDot: 'bg-green-400' },
    orange: { dot: 'bg-orange-500', tag: 'bg-orange-50 text-orange-700 border-orange-100', record: 'text-orange-600', bar: 'bg-orange-400', btn: 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/20', ring: 'hover:ring-orange-200', itemDot: 'bg-orange-400' },
    cyan: { dot: 'bg-cyan-500', tag: 'bg-cyan-50 text-cyan-700 border-cyan-100', record: 'text-cyan-600', bar: 'bg-cyan-400', btn: 'bg-cyan-600 hover:bg-cyan-700 shadow-cyan-600/20', ring: 'hover:ring-cyan-200', itemDot: 'bg-cyan-400' },
    yellow: { dot: 'bg-yellow-500', tag: 'bg-yellow-50 text-yellow-700 border-yellow-100', record: 'text-yellow-600', bar: 'bg-yellow-400', btn: 'bg-yellow-500 hover:bg-yellow-600 shadow-yellow-500/20', ring: 'hover:ring-yellow-200', itemDot: 'bg-yellow-400' },
    gold: { dot: 'bg-amber-400', tag: 'bg-amber-50 text-amber-800 border-amber-200', record: 'text-amber-700', bar: 'bg-amber-300', btn: 'bg-amber-600 hover:bg-amber-700 shadow-amber-600/20', ring: 'hover:ring-amber-200', itemDot: 'bg-amber-300' },
}