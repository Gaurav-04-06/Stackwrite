import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
import getOrCreateDB from "./models/server/dbSetup";
import getOrCreateStorage from "./models/server/storageSetup";

// This function can be marked `async` if using `await` inside
export async function middleware() {
  await Promise.all([getOrCreateDB(), getOrCreateStorage()]);
  console.log("Middleware file loaded");
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  /*
  Match all the request paths except for the ones starting with:
  - api (API routes)
  - _next/static (static files)
  - _next/image
  - favicon.com
  */
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
