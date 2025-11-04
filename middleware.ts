import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // NOTE: In a real app, validate auth cookie / token from PocketBase here.
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|static|.*\..*).*)"],
};
