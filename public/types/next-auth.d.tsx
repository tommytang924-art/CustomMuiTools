import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    sysuserId?: string;
    sysuserName?: string;
  }

  interface Session {
    user: {
      sysuserId?: string;
      sysuserName?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    sysuserId?: string;
    sysuserName?: string;
  }
}