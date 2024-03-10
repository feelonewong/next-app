import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: number;
  };
}
export async function GET(request: NextRequest, { params }: Props) {
  console.log(params.id);
  const users = await prisma.user.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  if (!users) {
    return NextResponse.json({
      error: "User not found",
      status: "404",
    });
  }
  return NextResponse.json(users);
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
  const user = await prisma.user.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  if (!user) {
    return NextResponse.json(
      {
        error: "params is a large",
      },
      {
        status: 404,
      }
    );
  }
  // 更新用户
  const updateUser = await prisma.user.update({
    where: {
      id: Number(params.id),
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updateUser, { status: 200 });
}

// DELETE 请求
export async function DELETE(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: number;
    };
  }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  if (!user) {
    return NextResponse.json(
      {
        error: "当前用户未找到",
      },
      {
        status: 404,
      }
    );
  }
  const deletedUser =await prisma.user.delete({
    where: {
      id: user.id
    }
  })
  return NextResponse.json({message: "删除成功"}, {status: 200});
}
