import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { cn } from "@/lib/utils";
import React from "react";

const fontSans = FontSans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "医疗预约",
    description:
        "在线看诊.",
    icons: {
        icon: "/assets/icons/logo-icon.svg",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={cn(
                "min-h-screen bg-dark-300 font-sans antialiased",
                fontSans.variable
            )}
        >
        <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
