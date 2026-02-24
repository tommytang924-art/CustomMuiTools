"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../lib/redux/store/store";
import { SessionProvider, useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";

export default function ClientProvider({ children }: { children: ReactNode }) {
  const basePath = process.env.NEXT_PUBLIC_BASEPATH
    ? `/${process.env.NEXT_PUBLIC_BASEPATH}/api/auth`
    : '/api/auth';
  return (
    <SessionProvider basePath={basePath} refetchInterval={1 * 60}>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}
