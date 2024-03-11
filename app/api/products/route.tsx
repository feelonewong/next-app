import { NextResponse, NextRequest } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export  const GET = async (request: NextRequest) => {
  const products = await prisma.product.findMany({})
  return NextResponse.json(products, {status: 200});
};


export async function POST(request:NextRequest ) {
    const body = await  request.json()
    const validation = schema.safeParse(body)
    if(!validation.success){
        return NextResponse.json(validation.error.errors)
    }
    const newProduct = await prisma.product.create({
      data: {
        name: body.name,
        price: Number(body.price)
      }
    })
    return NextResponse.json(newProduct, {status: 200})
}