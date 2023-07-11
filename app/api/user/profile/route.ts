import { NextRequest, NextResponse } from "next/server"
import { getUserProfile } from "@/models/user"

import { bigIntReplacer } from "@/lib/bigIntReplacer"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  const user = await getUserProfile(String(id))
  const userData = JSON.stringify(user?.profiles, bigIntReplacer)
  const response = { data: JSON.parse(userData), now: Date.now() }

  return NextResponse.json(response)
}
