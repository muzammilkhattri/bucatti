import { buttonVariants } from "./ui/button";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full h-20">
      <div className="flex items-center">
        <h1 className="font-bold text-2xl">Webifyr</h1>
      </div>
      <div className="flex items-center font-medium text-sm">
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
          Contact
        </Link>
        <Link
          href="https://cal.com/webifyr/30min?date=2023-12-18&month=2023-12"
          target="_blank"
          className={`${buttonVariants({
            variant: "default",
          })} h-8`}
        >
          Book a call
        </Link>
      </div>
    </nav>
  );
}
