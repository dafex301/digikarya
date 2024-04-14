import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log("Signing in...");
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();

        return user;
      },
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // console.log("signIn user", user);
      // const res = await ssoLogin(user);
      // if (res?.status === "waiting")
      //   return `/unauthorized?message=${res.message}`;
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.accessToken = user.token;
      }
      return token;
    },

    async session({ session, token }) {
      session.role = token.role;
      session.accessToken = token.accessToken;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/sign-in",
    signOut: "/",
    error: "/auth/sign-in",
    newUser: "/auth/sign-up",
  },
};
