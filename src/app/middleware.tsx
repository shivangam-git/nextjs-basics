import { NextRequest, NextResponse } from "next/server";
export function middleware(request:NextRequest){
    if(request.nextUrl.pathname!="/login")  
        NextResponse.redirect('/login')
}