import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // If it's the root path, just render it
  // if (path === "/") {
  //   return NextResponse.next();
  // }

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isProtected = path.includes("/u");

  if (!session && isProtected) {
    return NextResponse.redirect(new URL("/", req.url));
  } else if (session && (path === "/login" || path === "/register")) {
    return NextResponse.redirect(new URL("/u/home", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
