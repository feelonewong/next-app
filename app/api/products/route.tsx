import { NextResponse, NextRequest } from "next/server";
import schema from "./schema";

export const GET = (request: NextRequest) => {
  return NextResponse.json(
    [
      { id: 1, name: "Milk", price: 2.5 },
      { id: 2, name: "Bread", price: 3.5 },
    ],
    {
      status: 200,
    }
  );
};


export async function POST(request:NextRequest ) {
    const body = await  request.json()
    const validation = schema.safeParse(body)
    if(!validation.success){
        return NextResponse.json(validation.error.errors)
    }
    return NextResponse.json({id: 10, name: body.name, price: body.price})
}