import { NextResponse } from "next/server";

export async function middleware(req) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/track`, {
      method: "GET",
      headers: {
        "user-agent": req.headers.get("user-agent") || "",
      },
    });
  } catch (err) {
    console.error("Tracking failed", err);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
