import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const allowedOrigins = ['https://acme.com', 'https://my-app.org', 'https://nextjs.org']
 
const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export async function middleware(request: NextRequest) {
  console.log('[middleware] url:', request.url);

  const origin = request.headers.get('origin') ?? ''
  const isAllowOrigin = allowedOrigins.includes(origin)

  const isPreFlight = request.method === 'OPTIONS'
  console.log('isAllowOrigin', isAllowOrigin)
  if(isPreFlight) {
    const preflightHeaders = {
      ...(isAllowOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions
    }

    return NextResponse.json({}, { headers: preflightHeaders })
  }

  const response = NextResponse.next()

  if (isAllowOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
  
  if (request.url.includes('/api/')) {
    return NextResponse.json({ name: 'Tester' }, { headers: { 'Access-Control-Allow-Origin': origin, 'x-data-test': 'abc' }})
  }

  // can read cookie, but set cookie is invalid here
}

export const config = {
  matcher: ['/api/:path*', '/cookie-test']
}