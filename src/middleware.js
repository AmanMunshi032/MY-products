import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

 export const middleware = async (req)=>{
        //  const token = req.cookies.get("token");
      
    //  console.log("Tanvir" ,req.nextUrl.pathname)
      const token = await getToken({req,secret:process.env.NEXTAUTH_SECRET})
    console.log(token)
    if(token){   
   return NextResponse.next() 
    }else{
      
       return NextResponse.redirect(new URL('/login', req.url))
    
    }
    

}
export const config = {
  matcher: ['/Addproduct/:path*' ]
}