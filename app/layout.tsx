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
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </head>
      <body className={`${significa.className}  w-full bg-[#151419]`}>
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>{" "}
        </div>
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
