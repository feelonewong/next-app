import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: number
  }
}
export function GET(request: NextRequest, {params}: Props) {
  if(params.id > 10) {
    return  NextResponse.json({
      error: "User not found",
      status: "404"
    })
  }
  return NextResponse.json({
    id: params.id,
    status: 200
  })
}

// PUT请求
export async function PUT(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: number;
    };
  }
) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json(
      {
        error: "Name is not required",
      },
      {
        status: 400,
      }
    );
  }
  if (params.id > 10) {
    return NextResponse.json(
      {
        error: "params is a large",
      },
      {
        status: 404,
      }
    );
  }
  return NextResponse.json({
    name: body.name,
    id: params.id
  })
}
