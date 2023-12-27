"use client";

import * as React from "react";

import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Process() {
  return (
    <section
      className="flex sm:flex-row flex-col justify-between w-full mt-20"
      id="process"
    >
      <div className="flex flex-col justify-start items-start sm:w-1/2 w-full">
        <h1 className="text-7xl font-bold ">
          How it works. <br></br>
        </h1>
      </div>
      <div className="flex items-center sm:w-1/2 w-full mt-10 sm:mt-0 rounded-md">
        <ol className="relative border-s border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              1
            </time>
            <h3 className="text-lg font-semibold text-white">
              Send us a message.
            </h3>
            <p className="mb-4 text-base font-normal text-gray-400">
              Reach out to us with your vision, and we will kickstart the
              journey to transform your ideas into a thriving digital presence.
            </p>
            <Link
              href="/#quote"
              className={`${buttonVariants({
                variant: "default",
                size: "lg",
              })} mr-2 text-lg w-18`}
            >
              Get Started{" "}
            </Link>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2
            </time>
            <h3 className="text-lg font-semibold -white">
              We will get back to you soon.
            </h3>
            <p className="text-base font-normal text-gray-400">
              Expect a swift reply as our team diligently processes your
              inquiry, laying the groundwork for the exciting collaboration
              ahead.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              3
            </time>
            <h3 className="text-lg font-semibold text-white">
              Meet and proposal.
            </h3>
            <p className="text-base font-normal text-gray-400">
              Following the meeting, anticipate a comprehensive proposal,
              mapping out the scope, timeline, and cost breakdown for your web
              venture.
            </p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              4
            </time>
            <h3 className="text-lg font-semibold text-white">
              Let's collaborate!
            </h3>
            <p className="text-base font-normal text-gray-400">
              Experience the journey firsthand with regular updates as we reach
              key project milestones, ensuring transparency and alignment with
              your expectations.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
