import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { CircleDollarSign } from "lucide-react";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full h-20 xl:px-56 px-5">
      <div className="flex items-center">
        <Image
          src={"/logo.png"}
          width={200}
          height={200}
          alt="Bucatti Logo"
          className="mt-2"
        />
      </div>
      <div className="hidden gap-2 md:flex items-center font-medium text-md">
        <Link
          href="/#process"
          rel="noopener noreferrer"
          className="mr-4 transition duration-200 group"
        >
          About
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
        </Link>
        <Link
          href="/#services"
          rel="noopener noreferrer"
          className="mr-4 transition duration-200 group"
        >
          Roadmap
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
        </Link>
        <Link
          href="/#about"
          rel="noopener noreferrer"
          className="mr-4 transition duration-200 group"
        >
          How to buy
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
        </Link>
        <Link
          href="https://jupiter-terminal.dexscreener.com/?inputMint=4rTvetapwP2BEPYq64TVmDAzLdL55jxxx41erfbKxpHG&outputMint=So11111111111111111111111111111111111111112"
          target="_blank"
          className={`${buttonVariants({
            variant: "outline",
            size: "lg",
          })} text-[15px] `}
        >
          Buy Now <CircleDollarSign className="ml-2 " size="16" />
        </Link>
      </div>
      <MobileNav />
    </nav>
  );
}
