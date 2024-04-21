import Usuario from "@/services/Usuario";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      return token
    },
    session: async ({ session, token }) => {
      if (token){
        const res = await Usuario.findByEmail(token.email)
        if (res) token.registered = true
        else token.registered = false
        console.log('tokensito', token)
      }
      return session
    }
  }
})

export {handler as GET, handler as POST}