import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  if (searchParams.get("secret") !== process.env.SANITY_PREVIEW_SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  draftMode().enable();
  return NextResponse.redirect(new URL(searchParams.get("slug") || "/", request.url));
}
