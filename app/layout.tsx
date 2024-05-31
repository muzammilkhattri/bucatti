import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster, toast } from "sonner";
import { useEffect } from "react";
import Navbar from "@/components/navbar";

const significa = localFont({
  src: [
    {
      path: "../public/fonts/significa-regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/significa-medium.woff2",
      weight: "500",
    },

    {
      path: "../public/fonts/significa-semibold.woff2",
      weight: "600",
    },
  ],
  variable: "--font-significa",
});

export const metadata: Metadata = {
  title: "Bucatti",
  description: "Bucatti on solana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </head>
      <body className={`${significa.className}  w-full bg-[#151419]`}>
        <Toaster position="top-center" />
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>{" "}
        </div>{" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
