import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/public/login`,
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

        const { message } = await authResponse.json();

        return {
          email: credentials?.email,
          name: message,
          id: message,
        };
      },
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
    newUser: "/register",
  },
};
