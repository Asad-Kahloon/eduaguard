// middleware.ts
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createMiddlewareClient({ req: request, res: response })

  const session = await supabase.auth.getSession()
  if (
    pathname !== "/" &&
    !pathname.includes("unsubscribe") &&
    !pathname.includes("forget-password") &&
    !pathname.includes("reset-password")
  ) {
    if (!session.data.session) {
      return NextResponse.redirect(new URL("/", request.url))
    } else {
      return response
    }
  }

  if (
    session.data.session &&
    !pathname.includes("unsubscribe") &&
    !pathname.includes("forget-password") &&
    !pathname.includes("reset-password")
  ) {
    return NextResponse.redirect(new URL("/admin", request.url))
  }

  return response
}

export const config = {
  matcher: ["/admin((?!_next|api).*)"],
}
