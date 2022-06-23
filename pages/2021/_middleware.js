import { NextResponse } from 'next/server'

export function middleware (req) {
  // Beware loops when redirecting to the same directory
  const { pathname, origin } = req.nextUrl

  return NextResponse.rewrite(`${origin}/2022`)
  // return NextResponse.redirect('/2022')
}