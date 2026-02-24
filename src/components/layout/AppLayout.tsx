"use client";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import { lazy, Suspense } from "react";

const AppDrawer = lazy(() => import("./Drawer"));

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage =
    pathname.includes("/login") ||
    pathname === `/${process.env.NEXT_PUBLIC_BASEPATH}`;

  if (isLoginPage) {
    return <Box>{children}</Box>;
  }

  return (
    <Suspense fallback={<Box sx={{ minHeight: 64 }} />}>
      <AppDrawer>{children}</AppDrawer>
    </Suspense>
  );
}
