import { buttonVariants } from "./ui/button";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full h-16 px-16 bg-white">
      <div className="flex items-center">
        <h1 className="font-semibold text-2xl">Webifyr</h1>
      </div>
      <div className="flex items-center">
        <Link
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          About
        </Link>
        <Link
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          Services
        </Link>
        <Link
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          Projects
        </Link>
        <Link href="" className={buttonVariants({ variant: "default" })}>
          Book a call
        </Link>
      </div>
    </nav>
  );
}
