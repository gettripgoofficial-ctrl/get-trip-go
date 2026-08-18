import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CURRENCY_MAP: Record<string, string> = {
  IN: 'INR',
  AE: 'AED',
  GB: 'GBP',
  // Eurozone countries
  DE: 'EUR', FR: 'EUR', ES: 'EUR', IT: 'EUR', NL: 'EUR', BE: 'EUR',
  AT: 'EUR', IE: 'EUR', PT: 'EUR', FI: 'EUR', GR: 'EUR',
}

export function middleware(req: NextRequest) {
  const country = req.headers.get('x-vercel-ip-country') || 'IN'
  const currency = CURRENCY_MAP[country] || 'USD'

  const res = NextResponse.next()
  res.cookies.set('currency', currency, { path: '/', maxAge: 60 * 60 * 24 * 30 })
  return res
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}
