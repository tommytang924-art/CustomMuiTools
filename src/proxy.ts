
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";


export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const basePath = process.env.NEXT_PUBLIC_BASEPATH ? `/${process.env.NEXT_PUBLIC_BASEPATH}` : '';
  const pathWithoutBase = basePath && pathname.startsWith(basePath)
    ? pathname.slice(basePath.length)
    : pathname;

  // Skip middleware for static files, API routes, and public pages
  if (pathWithoutBase.startsWith("/api") || pathWithoutBase.startsWith("/_next") || pathWithoutBase === "/" || pathWithoutBase === "/login") {
    return NextResponse.next();
  }

}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|assets|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg).*)",
  ],
};
