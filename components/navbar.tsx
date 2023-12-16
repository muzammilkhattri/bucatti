import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { ArrowUpRightSquare } from "lucide-react";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full h-20">
      <div className="flex items-center">
        <h1 className="font-bold text-2xl">Webifyr</h1>
      </div>
      <div className="flex items-center font-medium text-sm">
        <Link
          href="https://nextjs.org/docs"
          rel="noopener noreferrer"
          className="mr-4"
        >
          About
        </Link>
        <Link href="/#services" rel="noopener noreferrer" className="mr-4">
          Services
        </Link>
        <Link
          href="https://nextjs.org/learn"
          rel="noopener noreferrer"
          className="mr-4"
        >
          Projects
        </Link>

        <Link
          href="https://cal.com/webifyr/30min?date=2023-12-18&month=2023-12"
          className={`${buttonVariants({
            variant: "default",
          })} h-8 mr-2`}
        >
          Get a quote
        </Link>
        <Link
          href="https://cal.com/webifyr/30min?date=2023-12-18&month=2023-12"
          target="_blank"
          className={`${buttonVariants({
            variant: "outline",
          })} h-8`}
        >
          Book a call <ArrowUpRightSquare className="ml-1 " size="13" />
        </Link>
      </div>
    </nav>
  );
}
