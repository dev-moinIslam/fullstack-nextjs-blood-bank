// 'use server'
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(request:NextRequest) {
  const response = NextResponse.json({
    message: "Logged out !!",
    success: true,
    
    
  });
  cookies().set('token', '')

  // response.cookies.set("token", "", {
  //     expires: new Date(0),
  //     domain: 'fullstack-nextjs-blood-bank.vercel.app'
  // });

  

  return response;
}


