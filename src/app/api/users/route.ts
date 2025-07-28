import { users } from "@/lib/db";
import { NextResponse } from "next/server";

export function GET(reuest:Request){
    const data= users;
    return NextResponse.json(data,{status:200})
}

export async function  POST(request:Request){
    const payload:any=await request.json();// give body data
    if(!payload){
        return NextResponse.json({error: "Invalid data"}, {status: 400});
    }
    return NextResponse.json({message: "User created successfully", user: payload}, {status: 201});
}
