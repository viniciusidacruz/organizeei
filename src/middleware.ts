import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isPrivateRoute = request.nextUrl.pathname.includes("/dashboard");

  const token = "token";

  if (!token && isPrivateRoute) {
    return NextResponse.redirect(new URL("/entrar", request.url));
  }

  if (token && !isPrivateRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/entrar", "/cadastra-se"],
};
