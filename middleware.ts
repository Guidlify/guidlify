import { NextResponse, type NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  console.log('We are ready to go with our 🚀')
  return res
}
