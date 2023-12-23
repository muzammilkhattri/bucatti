import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import { LogSnagProvider } from "@logsnag/next";

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
  title: "Webifyr",
  description: "Webifyr is a web development agency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${significa.className} sm:px-40 px-0`}>
        <LogSnagProvider
          token="2aa19121e778b23407bc8d80765482ac"
          project="webifyr"
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
