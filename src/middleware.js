import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import { isApiRoute, isPublicRoute } from "./helpers/routePrivacyChecker"
export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req){
    //check not public routes
    if( !isApiRoute(req.nextUrl.pathname)){
      if(req.nextauth.token){
        if(req.nextauth.token.registered === false && req.nextUrl.pathname !=='/registro'){
          return NextResponse.redirect(req.nextUrl.origin+'/registro')
        }
        if(req.nextUrl.pathname ==='/registro' && req.nextauth.token.registered === true){
          console.log('deberia redi9')
          return NextResponse.redirect(req.nextUrl.origin+'/')
        }
      }
      if(!isPublicRoute(req.nextUrl.pathname)){
        //is not logged
        if(!req.nextauth.token) NextResponse.redirect(req.nextUrl.origin+'/login')
        
      }
    }
    
    const response = NextResponse.next()
    response.cookies.set('auth', JSON.stringify(req.nextauth.token) )
    return response

  },
  {
    callbacks: {
      authorized: ({ token }) => true,
    },
  }
)