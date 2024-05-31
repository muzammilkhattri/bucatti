"use client";

import * as React from "react";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { CircleDollarSign } from "lucide-react";
import Image from "next/image";

export default function Process() {
  return (
    <section className=" w-full mt-20" id="process">
      <h1 className="text-6xl font-bold ">
        How to buy $BUCATTI. <br></br>
      </h1>
      <div className="mt-10 ">
        <ol className="relative border-s border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              1
            </time>
            <h3 className="text-lg font-semibold ">Download Phantom Wallet.</h3>
            <p className="mb-4 text-base font-normal text-gray-400">
              Download the phantom wallet from give link below.
            </p>
            <Link
              href="https://phantom.app/download"
              className={`${buttonVariants({
                variant: "default",
                size: "lg",
              })} mr-2 text-lg w-18 bg-[#AB9FF2]`}
            >
              Download Phantom Wallet{" "}
            </Link>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2
            </time>
            <h3 className="text-lg font-semibold ">Buy Solana.</h3>
            <p className="text-base font-normal text-gray-400">
              Load some solana into your wallet to buy $BUCATTI.
            </p>
            <Image
              src="/buysol.png"
              width={200}
              height={200}
              alt="solana"
              className="rounded-md border-2 shadow-md"
            />
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              3
            </time>
            <h3 className="text-lg font-semibold ">Click on Buy Now.</h3>
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
            <Image
              src="/buy.png"
              width={200}
              height={200}
              alt="solana"
              className="rounded-md border-2 shadow-md mt-4"
            />
          </li>
        </ol>
      </div>
    </section>
  );
}
