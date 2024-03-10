import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

//  POST请求 附带状态码
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, {
      status: 400,
    });
  }
  const currentUser = await prisma.user.findUnique({
    where: {
      email: body.email
    }
  })
  if(currentUser){
    return NextResponse.json({error: "当前邮箱已存在"}, { status: 201 });
  }
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email
    }
  })
  return NextResponse.json(newUser, { status: 200 });
}
