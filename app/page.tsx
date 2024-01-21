import Image from "next/image";
import Services from "@/components/services";
import Getaquote from "@/components/getaquote";
import About from "@/components/aboutus";
import Footer from "@/components/footer";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Process from "@/components/process";
import { Calendar } from "lucide-react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20">
      <section className="flex flex-col w-full justify-center items-center mt-4">
        <div className="border-2 text-sm rounded-full py-2 px-4 flex items-center justify-between ">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 duration-1000"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Available for projects
        </div>
        <h1 className="md:text-7xl text-5xl font-bold md:leading-[5rem] text-center mt-10">
          Building Digital Dreams,<br></br> Crafting{" "}
          <span className="text-primary">Tomorrow.</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mt-6 text-center">
          We are a web development agency that helps businesses build their
          digital presence. We provide a wide range of Services
        </p>
        <div className="mt-8 flex space-x-2">
          <Link
            href="/#quote"
            className={`${buttonVariants({
              variant: "default",
              size: "lg",
            })} mr-2 text-[15px] w-32`}
          >
            Get a Quote
          </Link>
          <Link
            href="https://cal.com/webifyr/30min?date=2023-12-18&month=2023-12"
            target="_blank"
            className={`${buttonVariants({
              variant: "outline",
              size: "lg",
            })}  text-[15px]`}
          >
            Book a Call <Calendar className="ml-2 " size="16" />
          </Link>
        </div>
      </section>
      <Services />
      <Process />
      <About />
      <Getaquote />
    </main>
  );
}
