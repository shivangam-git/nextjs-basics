import { users } from "@/lib/db";
import { NextResponse } from "next/server";

export function GET(request: Request, { params }: { params: { id: string } }) {
  const user = users.find((item) => item.id === Number(params.id));

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user, { status: 200 });
}


export async function  PUT(request:Request){
    const payload:any=await request.json();// give body data
    if(!payload){
        return NextResponse.json({error: "Invalid data"}, {status: 400});
    }
    return NextResponse.json({result: payload, success: true}, {status: 200});
}

export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
  const userId = Number(params.id);
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  users.splice(userIndex, 1); // Remove the user from the array

  return NextResponse.json(users, { status: 200 });
}