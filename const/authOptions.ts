
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import prisma from '@/utils/prisma'


export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
    error: "/login"
  },
  session: {
    strategy: "jwt",
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      idToken: true,

      authorization: {
        params: {
          scope: "openid profile email",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "User Name",
          type: "text",
          placeholder: "Your User Name",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        console.log(JSON.stringify({
          username: credentials?.username,
          password: credentials?.password
        }))

        try {
          const userRes = await fetch(`${process.env.NEXTAUTH_URL}/api/user/login`, {
            method: "POST",
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password
            },
            )
          })
          console.log(`${process.env.NEXTAUTH_URL}/api/user/login`, userRes?.status, userRes?.statusText)
          if (userRes.ok) {
            const user = await userRes.json();
            // if (!user.emailVerified) throw new Error("Please verify your email first!");
            const { password, ...userWithoutPass } = user;
            return userWithoutPass;
          }
          else {
            throw new Error("Username or password is not correct");
          }


        }
        catch (e) {
          throw new Error("Username or password is not correct");
        }

      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user as any;
      return token;
    },

    async session({ token, session }: any) {
      session.user = token.user;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };