import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook"

// Initialize NextAuth

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_SECRET!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
          })
    ],
    secret: process.env.NEXTAUTH_SECTRET!,
    pages: {
        signIn: '/auth/signin',
    }
})