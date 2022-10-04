import { NextResponse } from "next/server";
import { verify } from "./services/jwt_sign_verify";

const secret = process.env.SECRET;

export default async function middleware(req) {
  const jwt = req.cookies.get("CryptoWorld");
  const url = req.url;
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/allposts")) {
    if (jwt === undefined) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }

    try {
      await verify(jwt, secret);
      return NextResponse.next();
    } catch (error) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  if (pathname.startsWith("/allaudios")) {
    if (jwt === undefined) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }

    try {
      await verify(jwt, secret);
      return NextResponse.next();
    } catch (error) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  if (pathname.startsWith("/about")) {
    if (jwt === undefined) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }

    try {
      await verify(jwt, secret);
      return NextResponse.next();
    } catch (error) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  if (pathname.startsWith("/mint")) {
    if (jwt === undefined) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }

    try {
      await verify(jwt, secret);
      return NextResponse.next();
    } catch (error) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  if (pathname.startsWith("/profile")) {
    if (jwt === undefined) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }

    try {
      await verify(jwt, secret);
      return NextResponse.next();
    } catch (error) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  if (pathname.startsWith("/faq")) {
    if (jwt === undefined) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }

    try {
      await verify(jwt, secret);
      return NextResponse.next();
    } catch (error) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  if (pathname.startsWith("/community")) {
    if (jwt === undefined) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }

    try {
      await verify(jwt, secret);
      return NextResponse.next();
    } catch (error) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  if (pathname.startsWith("/allvideos")) {
    if (jwt === undefined) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }

    try {
      await verify(jwt, secret);
      return NextResponse.next();
    } catch (error) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  if (pathname.startsWith("/post")) {
    if (jwt === undefined) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }

    try {
      await verify(jwt, secret);
      return NextResponse.next();
    } catch (error) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  if (pathname.startsWith("/members")) {
    if (jwt === undefined) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }

    try {
      await verify(jwt, secret);
      return NextResponse.next();
    } catch (error) {
      req.nextUrl.pathname = "/unauthorized";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/post/:path*",
    "/profile/:path*",
    "/members/:path*",
    "/about/:path*",
    "/community/:path*",
    "/faq/:path*",
    "/mint/:path*",
    "/allaudios/:path*",
    "/allposts/:path*",
    "/allvideos/:path*",
  ],
};
