import Image from "next/image";
import Services from "@/components/roadmap";
import { Tokenomics } from "@/components/tokenomics";
import { Footer } from "@/components/footer";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Process from "@/components/process";
import { Bird, CircleDollarSign, Rocket } from "lucide-react";
import Marquee from "@/components/ui/marquee";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 xl:px-56 px-5">
      <section className="flex flex-col w-full justify-center items-center">
        <div className="border-2 text-sm rounded-full py-2 px-4 flex items-center justify-between ">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 duration-1000"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          To The Moon
          <Rocket size="16" className="ml-2" />
        </div>
        <h1 className="md:text-7xl text-5xl font-bold md:leading-[5rem] text-center mt-10">
          Welcome to $BUCATTI
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mt-6 text-center">
          After the developers nearly ruined the project, we, as loyal community
          members, stepped in. In just a day, we assembled a team of over 100
          members to revive Bucatti. Join us as we aim for a 100 million market
          cap!
        </p>
        <div className="mt-8 flex space-x-2">
          <Link
            href="https://dexscreener.com/solana/7zcxoq8wx8hyfgzb9ajbwmconezrs15mztewpiddhrxx"
            className={`${buttonVariants({
              variant: "default",
              size: "lg",
            })} mr-2 text-[15px] `}
          >
            Dex Screener <Bird className="ml-2 " size="16" />
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
      </section>
      <Marquee
        pauseOnHover
        horizontal
        className="[--duration:20s] text-3xl font-bold mt-20 border-top border-2 border-black"
      >
        <h1> $BUCATTI </h1>
        <h1> $BUCATTI </h1>
        <h1> $BUCATTI </h1>
        <h1> $BUCATTI </h1>
        <h1> $BUCATTI </h1>
        <h1> $BUCATTI </h1>
      </Marquee>
      <Tokenomics />

      <Services />
      <Process />
      <Footer />
    </main>
  );
}
