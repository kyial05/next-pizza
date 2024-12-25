import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log(req.nextUrl.searchParams.get('query'));

  return NextResponse.json({})
}