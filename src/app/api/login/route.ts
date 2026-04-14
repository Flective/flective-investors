import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { password } = await request.json()

  if (!process.env.SITE_PASSWORD || !process.env.AUTH_SECRET) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  if (password !== process.env.SITE_PASSWORD) {
    await new Promise(r => setTimeout(r, 400)) // brute-force delay
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set('inv_session', process.env.AUTH_SECRET, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })
  return res
}
