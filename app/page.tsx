import Image from "next/image";
import Services from "@/components/services";
import Getaquote from "@/components/getaquote";
import About from "@/components/aboutus";
import Footer from "@/components/footer";
import Process from "@/components/process";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20">
      <section className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-col justify-center items-start md:w-1/2 w-full">
          <h1 className="md:text-7xl text-5xl font-bold md:leading-[5rem]">
            Building Digital <br></br>
            Dreams, Crafting{" "}
            <span className="text-primary">
              <br></br>Tomorrow.
            </span>
          </h1>
          <p className="text-2xl font-semibold"></p>
        </div>
        <div className="flex justify-center mt-12 md:mt-0 items-center sm:w-1/2 w-full  rounded-md rotate-6"></div>
      </section>
      <Services />
      <Process />
      <About />
      <Getaquote />
    </main>
  );
}
