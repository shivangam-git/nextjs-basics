import { NextRequest, NextResponse } from "next/server";
export function middleware(request:NextRequest){
    if(request.nextUrl.pathname!="/login")  
       return NextResponse.redirect(new URL("/login",request.url))

}

// if i want this middleware functionality only on about page then we can do the config., as below, otherwise remove it
 export const config={
    matcher:"/about/:path*"
 }