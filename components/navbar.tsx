import { buttonVariants } from "./ui/button";
import Link from "next/link";
import {
  ArrowUpRightSquare,
  CircleDollarSign,
  DollarSign,
  ExternalLink,
} from "lucide-react";
import { MobileNav } from "./mobile-nav";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full h-20">
      <div className="flex items-center">
        <h1 className="font-bold text-2xl">Webifyr</h1>
      </div>
      <div className="hidden gap-2 md:flex items-center font-medium text-md">
        <Link
          href="/#about"
          rel="noopener noreferrer"
          className="mr-4 transition duration-200 group"
        >
          Process
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
        </Link>
        <Link
          href="/#services"
          rel="noopener noreferrer"
          className="mr-4 transition duration-200 group"
        >
          Services
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
        </Link>
        <Link
          href="/#about"
          rel="noopener noreferrer"
          className="mr-4 transition duration-200 group"
        >
          About
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
        </Link>

        <Link
          href="/#quote"
          className={`${buttonVariants({
            variant: "default",
            size: "lg",
          })} mr-2 text-lg w-18`}
        >
          Get a quote
        </Link>
        <Link
          href="https://cal.com/webifyr/30min?date=2023-12-18&month=2023-12"
          target="_blank"
          className={`${buttonVariants({
            variant: "outline",
            size: "lg",
          })} text-lg`}
        >
          Book a call <ExternalLink className="ml-1 " size="13" />
        </Link>
      </div>
      <MobileNav />
    </nav>
  );
}
