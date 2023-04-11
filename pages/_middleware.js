import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import mongoose, { connect } from "mongoose"
import handler from "../pages/api/hello"
const connectDb =handler => async (req,res)=>{
  if(mongoose.connections[0].readyState){
      return handler(req, res)
  }
  await mongoose.connect(process.env.MONGO_URI)
  return handler(req, res);
}
export default connectDb;
/** @param {import("next/server").NextRequest} req */
export async function middleware(req) {
  if (req.nextUrl.pathname === "/middleware-protected") {
    const session = await getToken({
      req,
      secret: process.env.SECRET,
      secureCookie:
        process.env.NEXTAUTH_URL?.startsWith("https://") ??
        !!process.env.VERCEL_URL,
    })
    // You could also check for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
    if (!session) return NextResponse.redirect("/api/auth/signin")
    // If user is authenticated, continue.
  }
}
