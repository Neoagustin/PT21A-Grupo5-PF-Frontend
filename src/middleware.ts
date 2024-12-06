import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const token = req.cookies.get("userToken")?.value;
  const verifyUser = req.cookies.get("userData")?.value;

  const user = verifyUser && JSON.parse(verifyUser);

  const pathAuth = ["/login", "/register"];

  const pathRestrictered = [
    /^\/dashboard(\/.*)?$/,
    /^\/course(\/.*)?$/,
    /^\/admin(\/.*)?$/,
    /^\/checkout(\/.*)?$/,
    /^\/library(\/.*)?$/,
  ];

  const pathAdmin = [/^\/admin(\/.*)?$/];

  if (token && pathAuth.some((path) => req.nextUrl.pathname.startsWith(path)))
    return NextResponse.redirect(new URL("/", req.url));

  if (
    !token &&
    pathRestrictered.some((path) => path.test(req.nextUrl.pathname))
  )
    return NextResponse.redirect(new URL("/login", req.url));

  if (
    token &&
    user.role !== "admin" &&
    pathAdmin.some((path) => path.test(req.nextUrl.pathname))
  )
    return NextResponse.redirect(new URL("/", req.url));

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/checkout/:path*",
    "/dashboard/:path*",
    "/course/:path*",
    "/course/:path*/:path*",
    "/admin/:path*",
    "/login",
    "/register",
    "/library",
  ],
};
