import { NextResponse } from 'next/server'
import { SOFTWARE_INFO } from '@/lib/software'

export const dynamic = 'force-static'
export const revalidate = 3600

export function GET() {
    return NextResponse.json(SOFTWARE_INFO, {
        headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=60' },
    })
}