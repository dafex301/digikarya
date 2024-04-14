import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken?: string;
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends Record<string, unknown>, DefaultJWT {
    accessToken?: string;
    role?: string;
  }
}

// also extends User
declare module "next-auth" {
  interface User extends DefaultUser {
    role?: string;
    token?: string;
  }
}
