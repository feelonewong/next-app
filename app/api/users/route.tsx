import { request } from "http";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "mosh" },
    { id: 2, name: "John" },
  ]);
}

//  POST请求 附带状态码
export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json(
      {
        error: "Name is required",
      },
      {
        status: 400,
      }
    );
  }
  return NextResponse.json(body, { status: 200 });
}

