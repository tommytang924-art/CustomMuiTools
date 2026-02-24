import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { randomBytes, randomUUID } from "crypto";

type LoginResponse = {
    code: number;
    msg: string;
    result: LoginResponseResult;
};
export type LoginResponseResult = {
    sysuserId: string;
    sysuserName: string;
};

// Encryption function

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                sysuserId: { label: "Username", type: "text" },
                sysuserPwd: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                const { sysuserId, sysuserPwd } = credentials as {
                    sysuserId: string;
                    sysuserPwd: string;
                };

                if (!sysuserId || !sysuserPwd) {
                    console.error("Missing sysuserId or sysuserPwd");
                    return null;
                }

                try {
                    // **Suppose here is the API for login
                    //   const rawResponse = await fetch(
                    //     `${process.env.NEXT_PUBLIC_API_URL}/login`, // login API
                    //     {
                    //       method: "POST",
                    //       headers: {
                    //         Authorization:
                    //           "Basic " +
                    //           Buffer.from(
                    //             `${process.env.API_USERNAME2}:${process.env.API_PASSWORD2}`,
                    //             "binary"
                    //           ).toString("base64"),
                    //         "Content-Type": "application/json",
                    //       },
                    //       body: JSON.stringify({
                    //         sysuserId,
                    //         sysuserPwd,
                    //       }),
                    //     }
                    //   );

                    //   const response: LoginResponse = await rawResponse.json();
                    //   if (response.code === 0) {
                    if (sysuserId === "admin" && sysuserPwd === "admin") {
                        return {
                            id: `${credentials?.sysuserId}`,
                            sysuserId: credentials?.sysuserId,
                            sysuserName: "admin",
                        };
                    }
                    else{
                        throw new Error("Invalid authentication");
                    }

                } catch (error) {
                    console.log("next Auth error", error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.sysuserId = user.sysuserId;
                token.sysuserName = user.sysuserName;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.sysuserId = token.sysuserId as string;
                session.user.sysuserName = token.sysuserName as string;
            }
            return session;
        },
        async signIn({ user }) {
            return true;
        },
    },
    events: {
        async signOut() { },
    },
    session: {
        strategy: "jwt",
        maxAge: 60 * 60, // 1 day in seconds
        updateAge: 0,   // Extend session every 6 hours of activity
        generateSessionToken: () => randomUUID?.() ?? randomBytes(32).toString("hex"),
    },
    jwt: {
        maxAge: 60 * 60
    },

    pages: {
        signIn: `${process.env.NEXT_PUBLIC_BASEPATH ? `/${process.env.NEXT_PUBLIC_BASEPATH}` : ''}/login`,
        signOut: `${process.env.NEXT_PUBLIC_BASEPATH ? `/${process.env.NEXT_PUBLIC_BASEPATH}` : ''}/login`,
        error: `${process.env.NEXT_PUBLIC_BASEPATH ? `/${process.env.NEXT_PUBLIC_BASEPATH}` : ''}/error`,
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
