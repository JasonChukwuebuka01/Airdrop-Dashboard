import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // Get the pathname of the request
  const path = req.nextUrl.pathname;

  // Define protected routes that should redirect
  const isPublicPath =path === '/';

  // Create dashboard URL for redirect
  const dashboardUrl = new URL('/dashboard', req.url);

  // Redirect to dashboard if on public paths
  if (isPublicPath) {
    return NextResponse.redirect(dashboardUrl);
  }

  // Continue for all other routes
  return NextResponse.next();
}

