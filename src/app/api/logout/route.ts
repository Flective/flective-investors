import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const loginUrl = new URL('/login', request.url)
  const res = NextResponse.redirect(loginUrl)
  res.cookies.set('inv_session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  })
  return res
}
