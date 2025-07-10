import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // For now, let's allow all requests to pass through
  // We can add authentication checks later once the basic flow works
  console.log("Middleware called for:", request.nextUrl.pathname);

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboardPage/:path*",
    "/api/protected/:path*",
  ],
} 