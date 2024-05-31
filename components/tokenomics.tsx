"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconCoin,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Droplet, HandIcon } from "lucide-react";
import { TextRevealCard } from "./ui/text-reveal-card";

export function Tokenomics() {
  return (
    <div className="mt-20 w-full py-5 sm:py-10  rounded-md ">
      <h1 className="text-5xl font-bold" id="services">
        Token Info
      </h1>
      <BentoGrid className="max-w-8xl mx-auto md:auto-rows-[20rem] mt-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="grid place-items-center w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="items-center space-x-2 bg-white dark:bg-black"
      >
        <Image
          src={"/$BUCATTI.png"}
          width="200"
          height="200"
          className="rounded-full"
          alt="BUCATTI"
        />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="grid place-items-center w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="items-center space-x-2 bg-white dark:bg-black"
      >
        <Image
          src={"/Liquidity.png"}
          width="200"
          height="200"
          className="rounded-full"
          alt="BUCATTI"
        />
      </motion.div>
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="grid place-items-center w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="items-center space-x-2 bg-white dark:bg-black"
      >
        <Image
          src={"/Mint.png"}
          width="250"
          height="250"
          className="rounded-full"
          alt="BUCATTI"
        />
      </motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  return (
    // click this to copy coin address

    <TextRevealCard
      className="w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col px-4 rounded-md"
      text="Coin Address"
      revealText="4rTvetapwP2BEPYq64TVmDAzLdL55jxxx41erfbKxpHG"
    />
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "1,000,000,000",
    description: <span className="text-sm">The total supply of token.</span>,
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconCoin className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Liquidity Burned",
    description: <span className="text-sm">100% liquidity is locked.</span>,
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <Droplet className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mint Revoked",
    description: <span className="text-sm">No more tokens can be minted.</span>,
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <Droplet className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Coin Address",
    description: <span className="text-sm">Click to copy coin address.</span>,
    header: <SkeletonFour />,
    className: "md:col-span-3",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
