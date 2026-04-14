import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const COOKIE = 'inv_session'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const session = request.cookies.get(COOKIE)
  const secret = process.env.AUTH_SECRET
  const isAuth = !!secret && session?.value === secret

  if (pathname.startsWith('/login')) {
    return isAuth
      ? NextResponse.redirect(new URL('/', request.url))
      : NextResponse.next()
  }

  if (!isAuth) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)'],
}
