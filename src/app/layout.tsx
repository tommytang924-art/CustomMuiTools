import type { Metadata } from "next";
import ClientProvider from "./ClientProvider";
import ToastProvider from "@/components/common/ToastProvider/ToastProvider";
import AppLayout from "@/components/layout/AppLayout";

import "../../public/styles/global.scss"
export const metadata: Metadata = {
    title: 'MuiTools',
    description: 'builld mini tool for MUI library',
}

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const basePath = process.env.NEXT_PUBLIC_BASEPATH
        ? `/${process.env.NEXT_PUBLIC_BASEPATH}/api/auth`
        : '/api/auth';

    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>

                <ClientProvider>
                    <ToastProvider />
                    <AppLayout>{children}</AppLayout>
                </ClientProvider>
            </body>
        </html>
    )
}